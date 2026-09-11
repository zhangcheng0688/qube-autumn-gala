import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Download,
  HelpCircle,
  Mail,
  UserRound,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { content, termsSections, tiers, type Lang } from "@/content/promo";
import { RegistrationForm } from "@/components/RegistrationForm";
import heroProducts from "@/assets/hero-products-v2.png.asset.json";
import heroBg from "@/assets/hero-bg-highres.png.asset.json";
import gift1 from "@/assets/gift-1-new.jpg";
import gift2 from "@/assets/gift-2-new.jpg";
import gift3Asset from "@/assets/apple-watch-series-12.png.asset.json";
import gift4Asset from "@/assets/apple-watch-ultra-4.png.asset.json";
import gift5Asset from "@/assets/iphone-18-pro-max.png.asset.json";
import gift6Asset from "@/assets/iphone-ultra.png.asset.json";
import qubeLogo from "@/assets/qube-logo.png.asset.json";
import { Button } from "@/components/ui/button";

const giftImages = [gift1, gift2, gift3Asset.url, gift4Asset.url, gift5Asset.url, gift6Asset.url];

function Logo({ className = "h-8 w-auto" }: { className?: string }) {
  return (
    <a
      href="https://www.qubemarkets.com/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="QUBE Markets 官网"
    >
      <img src={qubeLogo.url} alt="QUBE Markets" width={793} height={197} className={className} />
    </a>
  );
}

export function PromoLanding({ canonicalPath }: { canonicalPath: string }) {
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
      <header
        className="relative bg-ink bg-cover bg-bottom bg-no-repeat text-ink-foreground"
        style={{ backgroundImage: `url(${heroBg.url})` }}
      >
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
            <h1 className="mt-3 text-4xl font-semibold leading-[1.1] tracking-tight text-gold sm:text-5xl lg:text-6xl">
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

          <div className="flex justify-center">
            <img
              src={heroProducts.url}
              alt={lang === "zh" ? "Apple 新品礼遇示意图" : "Apple reward products"}
              width={900}
              height={860}
              className="w-[78%] max-w-[520px] lg:w-[88%]"
            />
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
              className="mt-1 inline-block border-b-2 border-primary pb-0.5 text-lg font-bold leading-none"
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
          <p className="mt-5 flex max-w-5xl gap-2 text-xs leading-relaxed text-muted-foreground">
            <HelpCircle className="mt-0.5 size-3.5 shrink-0" />
            <span>
              <span className="font-bold text-foreground">{t.gifts.noteTitle}</span> {t.gifts.note}
            </span>
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
                  <span className="text-[11px] text-muted-foreground">{t.gifts.taglines[i]}</span>
                </div>
                <div className="mt-2 aspect-[4/2.45] overflow-hidden px-5">
                  <img
                    src={giftImages[i]}
                    alt={t.gifts.names[i]}
                    width={1024}
                    height={768}
                    loading="lazy"
                    className="h-full w-full object-contain"
                  />
                </div>
                <div className="pb-4" />
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
                      <p className="text-lg font-bold">
                        {tier.lots} {t.gifts.lotsUnit}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-8 max-w-5xl text-xs leading-relaxed text-muted-foreground">
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
            </div>
            <div className="max-w-sm sm:text-right">
              <p className="text-xs leading-relaxed text-muted-foreground">{t.rules.aside}</p>
              <a
                href="#terms"
                className="mt-3 inline-flex items-center gap-1 text-xs font-bold underline decoration-primary decoration-2 underline-offset-4"
              >
                {t.rules.link}
                <ArrowRight className="size-3.5" />
              </a>
            </div>
          </div>

          <div className="mt-2 grid md:grid-cols-2 md:gap-x-12">
            {t.rules.items.map((item) => (
              <article key={item.no} className="border-b border-border py-7">
                <h3 className="flex items-center gap-3 text-base font-bold">
                  <span className="grid size-6 shrink-0 place-items-center rounded bg-primary/25 text-[11px] font-extrabold text-foreground">
                    {item.no}
                  </span>
                  {item.q}
                </h3>
                <p className="mt-3 pl-9 text-xs leading-relaxed text-muted-foreground">{item.a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Terms */}
      <section id="terms" className="bg-surface py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="section-index">
                <span className="h-px w-8 bg-primary" />
                {t.terms.index}
              </p>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
                {t.terms.title}
              </h2>
            </div>
            <a
              href={
                lang === "zh"
                  ? "/downloads/qube-apple-autumn-gala-terms-zh.pdf"
                  : "/downloads/qube-apple-autumn-gala-terms-en.pdf"
              }
              download
              className="inline-flex w-fit items-center gap-2 text-xs font-bold underline decoration-primary decoration-2 underline-offset-4"
            >
              {t.terms.download}
              <Download className="size-3.5" />
            </a>
          </div>
          <p className="mt-3 max-w-3xl text-sm text-muted-foreground">{t.terms.lead}</p>

          <Accordion
            type="single"
            collapsible
            className="mt-8 rounded-xl border border-border bg-background px-5"
          >
            {termsSections[lang].map((section) => (
              <AccordionItem key={section.no} value={section.no}>
                <AccordionTrigger className="text-left text-sm font-semibold">
                  <span className="flex items-center gap-4">
                    <span className="grid size-6 shrink-0 place-items-center rounded bg-primary/25 text-[11px] font-extrabold text-foreground">
                      {section.no}
                    </span>
                    {section.title}
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3 pl-0 sm:pl-10">
                    {section.body.map((para) => (
                      <p
                        key={para.slice(0, 24)}
                        className="text-xs leading-relaxed text-muted-foreground"
                      >
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
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-14 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs opacity-75">{t.contact.lead}</p>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl">
              {t.contact.title}
            </h2>
          </div>
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:gap-10">
            <div>
              <a href={emailHref} className="text-lg font-bold">
                {t.contact.email}
              </a>
              <p className="mt-1 text-xs opacity-75">{t.contact.hours}</p>
            </div>
            <a
              href={emailHref}
              className="inline-flex w-fit items-center gap-2 rounded-full bg-background px-7 py-3.5 text-xs font-bold text-foreground shadow-sm"
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
            <Logo className="h-7 w-auto" />
            <p className="text-xs">{t.footer.rights}</p>
          </div>
          <div className="mt-8 space-y-2 border-t border-white/10 pt-6">
            <p className="max-w-5xl text-[11px] leading-relaxed opacity-70">{t.footer.legal}</p>
            <p className="max-w-5xl text-[11px] leading-relaxed opacity-70">{t.footer.legal2}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
