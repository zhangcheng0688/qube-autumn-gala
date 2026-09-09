import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { Download, Loader2, LockKeyhole, LogOut, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  adminLogin,
  adminLogout,
  adminStatus,
  listRegistrations,
  type Registration,
} from "@/lib/admin.functions";

export const Route = createFileRoute("/admin")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "报名管理后台 | QUBE Markets" },
      { name: "robots", content: "noindex, nofollow" },
      { name: "description", content: "QUBE Markets 活动报名数据管理后台。" },
    ],
  }),
  component: Admin,
});

function toCsv(rows: Registration[]) {
  const headers = [
    "created_at",
    "full_name",
    "email",
    "phone",
    "account_number",
    "note",
    "lang",
  ] as const;
  const esc = (v: unknown) => `"${String(v ?? "").replace(/"/g, '""')}"`;
  return [
    headers.join(","),
    ...rows.map((r) => headers.map((h) => esc(r[h])).join(",")),
  ].join("\n");
}

function Admin() {
  const queryClient = useQueryClient();
  const status = useQuery({ queryKey: ["admin-status"], queryFn: () => adminStatus() });
  const unlocked = status.data?.unlocked ?? false;

  const rows = useQuery({
    queryKey: ["admin-registrations"],
    queryFn: () => listRegistrations(),
    enabled: unlocked,
  });

  const login = useServerFn(adminLogin);
  const logout = useServerFn(adminLogout);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [busy, setBusy] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError(false);
    const res = await login({ data: { password } });
    setBusy(false);
    if (res.ok) {
      setPassword("");
      await queryClient.invalidateQueries();
    } else {
      setError(true);
    }
  }

  function download() {
    const csv = "\uFEFF" + toCsv(rows.data ?? []);
    const url = URL.createObjectURL(new Blob([csv], { type: "text/csv;charset=utf-8" }));
    const a = document.createElement("a");
    a.href = url;
    a.download = `qube-registrations-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }

  if (status.isLoading) {
    return (
      <div className="grid min-h-screen place-items-center bg-background">
        <Loader2 className="size-6 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (!unlocked) {
    return (
      <div className="grid min-h-screen place-items-center bg-background px-4">
        <form
          onSubmit={onSubmit}
          className="w-full max-w-sm rounded-2xl border border-border bg-card p-8 shadow-sm"
        >
          <div className="grid size-10 place-items-center rounded-lg bg-primary text-primary-foreground">
            <LockKeyhole className="size-5" />
          </div>
          <h1 className="mt-5 text-xl font-bold text-foreground">报名管理后台</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Admin access · 请输入管理密码
          </p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            placeholder="管理密码"
            className="mt-6 w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-primary"
          />
          {error && <p className="mt-2 text-sm text-destructive">密码错误，请重试。</p>}
          <Button
            type="submit"
            disabled={busy || !password}
            className="mt-4 w-full rounded-lg"
          >
            {busy && <Loader2 className="size-4 animate-spin" />}
            进入后台
          </Button>
        </form>
      </div>
    );
  }

  const data = rows.data ?? [];

  return (
    <div className="min-h-screen bg-background">
      <header className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-4 py-4 sm:px-8">
        <div>
          <h1 className="text-lg font-bold text-foreground">活动报名管理</h1>
          <p className="text-sm text-muted-foreground">
            共 {data.length} 条登记 · Qube × Apple 金秋臻耀礼遇
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Button
            type="button"
            variant="outline"
            onClick={() => rows.refetch()}
            className="rounded-lg"
          >
            <RefreshCw className={`size-4 ${rows.isFetching ? "animate-spin" : ""}`} />
            刷新
          </Button>
          <Button
            type="button"
            onClick={download}
            disabled={!data.length}
            className="rounded-lg"
          >
            <Download className="size-4" />
            导出 CSV
          </Button>
          <Button
            type="button"
            variant="outline"
            onClick={async () => {
              await logout({});
              await queryClient.invalidateQueries();
            }}
            className="rounded-lg"
          >
            <LogOut className="size-4" />
            退出
          </Button>
        </div>
      </header>

      <main className="px-4 py-6 sm:px-8">
        {rows.isLoading ? (
          <div className="grid place-items-center py-20">
            <Loader2 className="size-6 animate-spin text-muted-foreground" />
          </div>
        ) : data.length === 0 ? (
          <p className="py-20 text-center text-sm text-muted-foreground">暂无报名数据。</p>
        ) : (
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full min-w-[760px] text-left text-sm">
              <thead className="bg-muted/60 text-xs uppercase text-muted-foreground">
                <tr>
                  {["提交时间", "姓名", "邮箱", "电话", "交易账号", "备注", "语言"].map(
                    (h) => (
                      <th key={h} className="whitespace-nowrap px-3 py-3 font-semibold">
                        {h}
                      </th>
                    ),
                  )}
                </tr>
              </thead>
              <tbody>
                {data.map((r) => (
                  <tr key={r.id} className="border-t border-border align-top">
                    <td className="whitespace-nowrap px-3 py-3 text-muted-foreground">
                      {new Date(r.created_at).toLocaleString("zh-CN")}
                    </td>
                    <td className="px-3 py-3 font-medium">{r.full_name}</td>
                    <td className="px-3 py-3">{r.email}</td>
                    <td className="whitespace-nowrap px-3 py-3">{r.phone}</td>
                    <td className="whitespace-nowrap px-3 py-3">{r.account_number}</td>
                    <td className="max-w-[200px] px-3 py-3 text-muted-foreground">{r.note}</td>
                    <td className="px-3 py-3 uppercase">{r.lang}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </div>
  );
}
