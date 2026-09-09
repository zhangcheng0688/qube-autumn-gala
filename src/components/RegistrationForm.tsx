import { useState } from "react";
import { Check, Loader2, Send } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { type Lang } from "@/content/promo";
import { Button } from "@/components/ui/button";

const copy = {
  zh: {
    title: "在线登记",
    lead: "填写以下信息即可完成活动报名，我们会在审核后通过邮件与您联系。",
    name: "姓名（须与开户资料一致）",
    email: "注册邮箱",
    phone: "联系电话",
    account: "交易账户号（MT4 / MT5）",
    note: "备注（选填，可备注意向礼品）",
    notePlaceholder: "例如：意向礼品为 Apple Watch Ultra 4",
    agree: "我已阅读并同意本次活动条款与细则。",
    submit: "提交登记",
    submitting: "提交中…",
    successTitle: "登记成功",
    successBody: "我们已收到您的报名信息，审核结果将通过注册邮箱通知您。",
    again: "再登记一位账户",
    error: "提交失败，请稍后重试或发送邮件至 support@qubemarkets.com。",
    required: "请完整填写必填项并同意活动条款。",
  },
  en: {
    title: "Register online",
    lead: "Complete the form to enter the promotion. We will contact you by email once your entry is reviewed.",
    name: "Full name (as per account records)",
    email: "Registered email",
    phone: "Phone number",
    account: "Trading account number (MT4 / MT5)",
    note: "Notes (optional — you may note your preferred reward)",
    notePlaceholder: "For example: Preferred reward — Apple Watch Ultra 4",
    agree: "I have read and agree to the promotion terms and conditions.",
    submit: "Submit registration",
    submitting: "Submitting…",
    successTitle: "Registration received",
    successBody: "Thank you. We will notify you of the review result by email.",
    again: "Register another account",
    error: "Submission failed. Please try again or email support@qubemarkets.com.",
    required: "Please complete all required fields and accept the terms.",
  },
} as const;

const field =
  "mt-1.5 w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm outline-none transition-colors focus:border-primary";

export function RegistrationForm({ lang }: { lang: Lang }) {
  const c = copy[lang];
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");
  const [error, setError] = useState<string | null>(null);
  const [agree, setAgree] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const get = (k: string) => String(data.get(k) ?? "").trim();

    if (!get("full_name") || !get("email") || !get("account_number") || !agree) {
      setError(c.required);
      return;
    }

    setError(null);
    setStatus("sending");
    const { error: dbError } = await supabase.from("promo_registrations").insert({
      full_name: get("full_name"),
      email: get("email"),
      phone: get("phone") || null,
      account_number: get("account_number"),
      tier: null,
      country: null,
      address: null,
      note: get("note") || null,
      lang,
    });

    if (dbError) {
      setStatus("idle");
      setError(c.error);
      return;
    }
    form.reset();
    setAgree(false);
    setStatus("done");
  }

  if (status === "done") {
    return (
      <div className="rounded-xl border border-border bg-background p-8 text-center">
        <span className="mx-auto grid size-12 place-items-center rounded-full bg-primary text-primary-foreground">
          <Check className="size-6" />
        </span>
        <h3 className="mt-5 text-xl font-bold">{c.successTitle}</h3>
        <p className="mx-auto mt-2 max-w-sm text-sm text-muted-foreground">{c.successBody}</p>
        <Button
          type="button"
          variant="outline"
          onClick={() => setStatus("idle")}
          className="mt-6 rounded-full px-5"
        >
          {c.again}
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-xl border border-border bg-background p-6 sm:p-8">
      <h3 className="text-xl font-bold">{c.title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{c.lead}</p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className="block text-xs font-semibold">
          {c.name} *
          <input name="full_name" required className={field} autoComplete="name" />
        </label>
        <label className="block text-xs font-semibold">
          {c.account} *
          <input name="account_number" required className={field} inputMode="numeric" />
        </label>
        <label className="block text-xs font-semibold">
          {c.email} *
          <input name="email" type="email" required className={field} autoComplete="email" />
        </label>
        <label className="block text-xs font-semibold">
          {c.phone}
          <input name="phone" className={field} autoComplete="tel" />
        </label>
        <label className="block text-xs font-semibold sm:col-span-2">
          {c.note}
          <textarea name="note" rows={3} className={field} placeholder={c.notePlaceholder} />
        </label>
      </div>

      <label className="mx-auto mt-5 flex w-fit max-w-full items-start justify-center gap-3 text-xs text-muted-foreground">
        <input
          type="checkbox"
          checked={agree}
          onChange={(e) => setAgree(e.target.checked)}
          className="mt-0.5 size-4 accent-primary"
        />
        <a href="#terms" className="underline decoration-primary underline-offset-2 hover:text-foreground">
          {c.agree}
        </a>
      </label>

      {error && <p className="mt-4 text-center text-xs font-semibold text-destructive">{error}</p>}

      <Button
        type="submit"
        disabled={status === "sending"}
        className="mx-auto mt-6 flex h-11 rounded-full px-6 font-bold transition-transform hover:-translate-y-0.5"
      >
        {status === "sending" ? <Loader2 className="size-4 animate-spin" /> : <Send className="size-4" />}
        {status === "sending" ? c.submitting : c.submit}
      </Button>
    </form>
  );
}
