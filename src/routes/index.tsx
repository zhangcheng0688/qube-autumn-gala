import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, ArrowUpRight, Check, Download, Mail, UserRound } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { content, termsSections, tiers, type Lang } from "@/content/promo";
import { RegistrationForm } from "@/components/RegistrationForm";
import heroDevices from "@/assets/hero-devices-final.jpg";
import gift1 from "@/assets/gift-1-new.jpg";
import gift2 from "@/assets/gift-2-new.jpg";
import gift3 from "@/assets/gift-3-new.jpg";
import gift4 from "@/assets/gift-4-new.jpg";
import gift5 from "@/assets/gift-5-new.jpg";
import gift6 from "@/assets/gift-6-new.jpg";
import qubeLogo from "@/assets/qube-markets-logo.svg";
import { Button } from "@/components/ui/button";

const giftImages = [gift1, gift2, gift3, gift4, gift5, gift6];

const SITE = "https://qubemarkets.com";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "QUBE Markets",
      url: SITE,
      email: "support@qubemarkets.com",
      description:
        "QUBE Markets 是一家在线差价合约（CFD）交易服务商，提供外汇、指数、大宗商品等多品种交易。",
    },
    {
      "@type": "Event",
      name: "Qube × Apple 金秋臻耀礼遇 (Autumn Gala Rewards)",
      description:
        "活动期内净入金与有效交易手数双重达标，即可申请对应档位 Apple 新品好礼，共六个档位。",
      startDate: "2026-09-15T00:00:00+03:00",
      endDate: "2026-10-14T23:59:00+03:00",
      eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
      eventStatus: "https://schema.org/EventScheduled",
      location: { "@type": "VirtualLocation", url: SITE },
      organizer: { "@type": "Organization", name: "QUBE Markets", url: SITE },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "活动时间是什么时候？",
          acceptedAnswer: {
            "@type": "Answer",
            text: "活动期为 2026 年 9 月 15 日至 10 月 14 日，以 MT4/MT5 服务器时间（GMT+3）00:00 至 23:59 计算。",
          },
        },
        {
          "@type": "Question",
          name: "如何报名参加？",
          acceptedAnswer: {
            "@type": "Answer",
            text: "可在本页在线登记表单提交报名，或使用开户预留邮箱发送“活动名称 + 姓名 + 交易账号”至 support@qubemarkets.com，也可联系所属客户经理协助登记。报名须在 2026 年 10 月 14 日 23:59 前完成。",
          },
        },
        {
          "@type": "Question",
          name: "达标条件是什么？",
          acceptedAnswer: {
            "@type": "Answer",
            text: "需同时满足对应档位的净入金金额（3,000 至 100,000 美元）与有效交易手数（20 至 450 手）两项条件，档位不可跨档叠加或拆分。",
          },
        },
        {
          "@type": "Question",
          name: "有哪些礼品档位？",
          acceptedAnswer: {
            "@type": "Answer",
            text: "共六档：Apple 官方配件礼包、AirPods Pro 4、Apple Watch Series 12、Apple Watch Ultra 4、iPhone 18 Pro Max 1TB、iPhone Ultra 折叠屏 256GB。礼品价值为预估参考价，非官方定价。",
          },
        },
      ],
    },
  ],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Qube × Apple 金秋臻耀礼遇 | 六档 Apple 好礼 | QUBE Markets" },
      {
        name: "description",
        content:
          "2026.09.15–10.14 Qube × Apple 金秋臻耀礼遇：净入金与有效交易手数双重达标，即可申请六档 Apple 新品好礼，含 iPhone 18 Pro Max、Apple Watch Ultra 4 等。",
      },
      {
        name: "keywords",
        content:
          "QUBE Markets, Qube Apple 活动, 金秋臻耀礼遇, 交易返礼, iPhone 18 Pro Max 活动, Apple Watch Ultra 4, CFD 交易活动, Autumn Gala Rewards",
      },
      { property: "og:title", content: "Qube × Apple 金秋臻耀礼遇 | QUBE Markets" },
      {
        property: "og:description",
        content:
          "Meet the Net Deposit and trading volume targets between 15 Sep and 14 Oct 2026 to claim an Apple reward across six tiers.",
      },
      { property: "og:locale", content: "zh_CN" },
      { property: "og:locale:alternate", content: "en_US" },
      { property: "og:site_name", content: "QUBE Markets" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1" },
    ],
    links: [{ rel: "canonical", href: `${SITE}/` }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(jsonLd) }],
  }),
  component: Promo,
});


function Logo() {
  return (
    <img src={qubeLogo} alt="QUBE Markets" width={142} height={38} className="h-9 w-auto" />
  );
}

function Promo() {
  const [lang, setLang] = useState<Lang>("zh");
  const t = content[lang];
  const emailHref = `mailto:${t.contact.email}?subject=${encodeURIComponent(
    lang === "zh" ? "Qube × Apple 金秋臻耀礼遇活动咨询" : "Qube × Apple Autumn Rewards enquiry",
  )}`;
  const registrationEmailHref = `mailto:${t.join.cards[0].email}?subject=${encodeURIComponent(
    t.join.cards[0].field,
  )}`;

  return (
    <div className="min-h-screen bg-background font-sans">
      {/* Header + hero */}
      <header className="bg-ink text-ink-foreground">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5">
          <Logo />
          <div className="hidden items-center gap-8 text-sm text-ink-muted md:flex">
            {t.nav.map((item) => (
              <a key={item.href} href={item.href} className="transition-colors hover:text-primary">
                {item.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => setLang(lang === "zh" ? "en" : "zh")}
              className="h-9 rounded-full border-ink-border bg-transparent px-3 text-xs text-ink-foreground hover:border-primary hover:bg-transparent hover:text-primary"
            >
              {t.langLabel}
            </Button>
            <a
              href={emailHref}
              className="hidden items-center gap-2 rounded-full border border-ink-border px-4 py-2 text-xs font-semibold text-ink-foreground transition-colors hover:border-primary hover:text-primary sm:inline-flex"
            >
              {t.navCta}
              <ArrowUpRight className="size-3.5" />
            </a>
          </div>
        </nav>

        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-16 pt-6 lg:grid-cols-[1.05fr_1fr] lg:pb-24 lg:pt-10">
          <div>
            <p className="text-lg font-medium tracking-wide text-ink-foreground/80">
              {t.hero.kicker}
            </p>
            <h1 className="mt-3 text-5xl font-black leading-[1.05] tracking-tight text-gold sm:text-6xl lg:text-7xl">
              {t.hero.title}
            </h1>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-ink-muted">{t.hero.lead}</p>

            <div className="mt-8">
              <p className="text-[11px] uppercase tracking-[0.2em] text-ink-muted">
                {t.hero.periodLabel}
              </p>
              <p className="mt-2 text-2xl font-bold text-ink-foreground">{t.hero.period}</p>
              <p className="mt-1 text-xs text-ink-muted">{t.hero.periodNote}</p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#gifts"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                {t.hero.cta}
                <ArrowRight className="size-4" />
              </a>
              <a
                href="#join"
                className="inline-flex items-center gap-2 text-sm font-semibold text-ink-muted transition-colors hover:text-primary"
              >
                {t.hero.ctaSub}
                <ArrowUpRight className="size-4" />
              </a>
            </div>

            <p className="mt-10 max-w-md text-[11px] leading-relaxed text-ink-muted/70">
              {t.hero.disclaimer}
            </p>
          </div>

          <div>
            <img
              src={heroDevices}
              alt={lang === "zh" ? "Apple 新品礼遇示意图" : "Apple reward products"}
              width={1408}
              height={1200}
              className="w-full"
            />
            <p className="mt-2 text-center text-[11px] text-ink-muted/70">{t.hero.imageNote}</p>
          </div>
        </div>
      </header>

      {/* Registration */}
      <section id="join" className="mx-auto max-w-6xl px-5 py-20">
        <p className="section-index">
          <span className="h-px w-8 bg-primary" />
          {t.join.index}
        </p>
        <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">{t.join.title}</h2>
        <p className="mt-3 text-sm text-muted-foreground">{t.join.lead}</p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-border p-6">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <span className="rounded bg-primary px-2 py-1 text-[11px] font-bold text-primary-foreground">
                  {t.join.cards[0].no}
                </span>
                <h3 className="text-xl font-bold">{t.join.cards[0].title}</h3>
              </div>
              <Mail className="size-5 text-primary" />
            </div>
            <p className="mt-5 text-sm text-muted-foreground">{t.join.cards[0].body}</p>
            <a
              href={registrationEmailHref}
              className="mt-1 inline-block text-lg font-bold underline decoration-primary decoration-2 underline-offset-4"
            >
              {t.join.cards[0].email}
            </a>
            <p className="mt-6 text-xs text-muted-foreground">{t.join.cards[0].fieldLabel}</p>
            <p className="mt-2 rounded-md border border-border bg-surface px-4 py-3 text-sm">
              {t.join.cards[0].field}
            </p>
            <p className="mt-5 flex items-center gap-2 text-xs text-muted-foreground">
              <Check className="size-4 text-primary" />
              {t.join.cards[0].foot}
            </p>
          </div>

          <div className="rounded-xl border border-border bg-surface p-6">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <span className="rounded bg-primary px-2 py-1 text-[11px] font-bold text-primary-foreground">
                  {t.join.cards[1].no}
                </span>
                <h3 className="text-xl font-bold">{t.join.cards[1].title}</h3>
              </div>
              <UserRound className="size-5 text-primary" />
            </div>
            <ol className="mt-6 space-y-5">
              {t.join.cards[1].steps.map((step, i) => (
                <li key={step} className="flex gap-4">
                  <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full border border-border bg-background text-xs font-bold">
                    {i + 1}
                  </span>
                  <span className="text-sm text-muted-foreground">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="mt-6">
          <RegistrationForm lang={lang} />
        </div>

        <p className="mt-8 text-xs leading-relaxed text-muted-foreground">{t.join.deadline}</p>
      </section>

      {/* Gifts */}
      <section id="gifts" className="bg-surface py-20">
        <div className="mx-auto max-w-6xl px-5">
          <p className="section-index">
            <span className="h-px w-8 bg-primary" />
            {t.gifts.index}
          </p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
            {t.gifts.title}
          </h2>
          <p className="mt-4 max-w-3xl text-xs leading-relaxed text-muted-foreground">
            {t.gifts.note}
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {tiers.map((tier, i) => (
              <article
                key={tier.id}
                className="flex flex-col overflow-hidden rounded-xl border border-border bg-background transition-shadow hover:shadow-lg"
              >
                <div className="flex items-center justify-between px-5 pt-5">
                  <span className="rounded bg-primary px-2 py-1 text-[11px] font-bold text-primary-foreground">
                    {t.gifts.tierLabel} 0{tier.id}
                  </span>
                  <span className="text-[11px] text-muted-foreground">
                    {t.gifts.valueLabel} ${tier.value}
                  </span>
                </div>
                <div className="mt-2 aspect-[4/2.45] overflow-hidden px-5">
                  <img
                    src={giftImages[i]}
                    alt={t.gifts.names[i]}
                    width={1024}
                    height={768}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="border-t border-border px-5 py-5">
                  <h3 className="text-lg font-bold">{t.gifts.names[i]}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{t.gifts.subs[i]}</p>
                  <div className="mt-5 flex items-end justify-between border-t border-border pt-4">
                    <div>
                      <p className="text-[11px] text-muted-foreground">{t.gifts.depositLabel}</p>
                      <p className="text-lg font-bold">${tier.deposit}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[11px] text-muted-foreground">{t.gifts.lotsLabel}</p>
                      <p className="text-lg font-bold">{tier.lots}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className="mx-auto mt-8 max-w-5xl text-center text-xs leading-relaxed text-muted-foreground">
            {t.gifts.footnote}
          </p>
        </div>
      </section>

      {/* Rules */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="flex flex-col gap-6 border-b border-border pb-9 sm:flex-row sm:items-end sm:justify-between">
            <div>
            <p className="section-index">
              <span className="h-px w-8 bg-primary" />
              {t.rules.index}
            </p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
              {t.rules.title}
            </h2>
            <p className="mt-4 max-w-xl text-xs leading-relaxed text-muted-foreground">
              {t.rules.aside}
            </p>
          </div>
            <Button asChild className="h-11 shrink-0 rounded-full px-5 font-bold">
              <a
                href={
                  lang === "zh"
                    ? "/downloads/qube-apple-autumn-gala-terms-zh.pdf"
                    : "/downloads/qube-apple-autumn-gala-terms-en.pdf"
                }
                download
              >
                <Download className="size-4" />
                {lang === "zh" ? "下载完整活动条款" : "Download full terms"}
              </a>
            </Button>
          </div>

          <div className="mt-8 grid border-l border-t border-border md:grid-cols-2">
            {t.rules.items.map((item) => (
              <article key={item.no} className="border-b border-r border-border p-6 sm:p-7">
                <p className="grid size-9 place-items-center rounded-full bg-primary text-xs font-extrabold text-primary-foreground">
                  {item.no}
                </p>
                <h3 className="mt-6 text-base font-bold">{item.q}</h3>
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{item.a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Terms */}
      <section id="terms" className="bg-surface py-20">
        <div className="mx-auto max-w-6xl px-5">
          <p className="section-index">
            <span className="h-px w-8 bg-primary" />
            {t.terms.index}
          </p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
            {t.terms.title}
          </h2>
          <p className="mt-3 max-w-3xl text-sm text-muted-foreground">{t.terms.lead}</p>

          <Accordion type="single" collapsible className="mt-8 rounded-xl border border-border bg-background px-5">
            {termsSections[lang].map((section) => (
              <AccordionItem key={section.no} value={section.no}>
                <AccordionTrigger className="text-left text-sm font-semibold">
                  <span className="flex items-center gap-4">
                    <span className="text-[11px] font-bold tracking-[0.15em] text-muted-foreground">
                      {section.no}
                    </span>
                    {section.title}
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3 pl-0 sm:pl-10">
                    {section.body.map((para) => (
                      <p key={para.slice(0, 24)} className="text-xs leading-relaxed text-muted-foreground">
                        {para}
                      </p>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <p className="mt-6 text-xs text-muted-foreground">{t.terms.priority}</p>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-12 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs opacity-70">{t.contact.lead}</p>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight">{t.contact.title}</h2>
          </div>
          <div className="flex flex-col gap-3 md:items-end">
            <a href={emailHref} className="text-lg font-bold underline underline-offset-4">
              {t.contact.email}
            </a>
            <p className="text-xs opacity-70">{t.contact.hours}</p>
            <a
              href={emailHref}
              className="inline-flex w-fit items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-xs font-bold text-ink-foreground"
            >
              {t.contact.cta}
              <ArrowUpRight className="size-3.5" />
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-ink py-12 text-ink-muted">
        <div className="mx-auto max-w-6xl px-5">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Logo />
            <p className="text-xs">{t.footer.rights}</p>
          </div>
          <p className="mt-6 max-w-4xl text-[11px] leading-relaxed opacity-70">{t.footer.legal}</p>
        </div>
      </footer>
    </div>
  );
}
