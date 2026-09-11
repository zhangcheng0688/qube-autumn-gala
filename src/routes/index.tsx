import { createFileRoute } from "@tanstack/react-router";
import { PromoLanding } from "@/components/PromoLanding";

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
      location: { "@type": "VirtualLocation", url: `${SITE}/` },
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
            text: "共六档：Apple 官方配件礼包、AirPods Pro 4、Apple Watch Series 12、Apple Watch Ultra 4、iPhone 18 Pro Max、iPhone Ultra 折叠屏 256GB。礼品价值为预估参考价，非官方定价。",
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
  component: () => <PromoLanding canonicalPath="/" />,
});
