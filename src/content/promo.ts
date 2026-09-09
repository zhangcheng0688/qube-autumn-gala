export type Lang = "zh" | "en";

export const tiers = [
  { id: 1, deposit: "3,000", lots: "20", value: "150" },
  { id: 2, deposit: "5,000", lots: "40", value: "350" },
  { id: 3, deposit: "10,000", lots: "80", value: "420" },
  { id: 4, deposit: "30,000", lots: "150", value: "850" },
  { id: 5, deposit: "50,000", lots: "288", value: "1,400" },
  { id: 6, deposit: "100,000", lots: "450", value: "2,400" },
];

export const content = {
  zh: {
    nav: [
      { href: "#gifts", label: "活动礼遇" },
      { href: "#join", label: "参与方式" },
      { href: "#terms", label: "活动条款" },
    ],
    navCta: "联系客户经理",
    langLabel: "EN",
    hero: {
      kicker: "Qube × Apple",
      title: "金秋臻耀礼遇",
      lead: "活动期内净入金与有效交易手数双重达标，即可申请对应档位 Apple 新品好礼。",
      periodLabel: "活动周期",
      period: "2026.09.15 — 10.14",
      periodNote: "MT5 服务器时间（GMT+3）00:00 至 23:59",
      cta: "查看礼遇档位",
      ctaSub: "报名参与",
      disclaimer:
        "参与前请仔细阅读活动条件与条款。差价合约（CFD）交易具有高杠杆风险。",
      imageNote: "图片仅供示意参考，实物以 Apple 正式上市版本为准。",
    },
    join: {
      index: "01 / 活动参与方式",
      title: "活动报名",
      lead: "参与本次活动可通过以下方式完成报名：",
      cards: [
        {
          no: "01",
          title: "邮件报名",
          body: "使用开户预留邮箱发送邮件至",
          email: "support@qubemarkets.com",
          fieldLabel: "邮件标题",
          field: "活动名称 + 姓名 + 交易账号",
          foot: "平台确认后即报名成功",
        },
        {
          no: "02",
          title: "客户经理报名",
          steps: ["联系所属客户经理，提交报名申请", "由客户经理协助完成登记"],
        },
      ],
      deadline:
        "报名须于 2026 年 10 月 14 日 23:59（MT4/MT5 服务器时间）前完成，逾期不再受理。未报名客户即使达标亦不具备兑换资格。",
    },
    gifts: {
      index: "02 / 档位礼遇",
      title: "六档好礼 一目了然",
      note: "礼品参考价值为 Apple 新品海外市场预估美元售价，仅作档位匹配参考，非官方定价，实物以 Apple 正式上市版本为准。按达标标准兑换对应礼品，不可跨档叠加、不可拆分档位。",
      tierLabel: "礼遇",
      depositLabel: "净入金 USD",
      lotsLabel: "有效手数",
      valueLabel: "预估价值",
      names: [
        "Apple 官方配件礼包",
        "AirPods Pro 4",
        "Apple Watch Series 12",
        "Apple Watch Ultra 4",
        "iPhone 18 Pro Max",
        "iPhone Ultra",
      ],
      subs: [
        "MagSafe 充电器 + AirTag",
        "2026 新款",
        "铝金属 GPS 版",
        "钛金属",
        "1TB · 2026 秋季新品",
        "折叠屏 256GB",
      ],
      footnote:
        "同一客户、同一身份信息、同一银行卡 / 收款渠道、同一 IP 地址、同一设备指纹下的多个账户，仅认定为一个参与主体，仅可兑换一份礼品。",
    },
    rules: {
      index: "03 / 参与规则",
      title: "重要规则 了解清楚",
      aside: "以下为核心规则摘要，完整条件与条款请见下方条款专区。",
      items: [
        {
          no: "01",
          q: "哪些账户可以参与？",
          a: "本次活动面向大中华区所有客户开放，客户须为年满 18 周岁的完全民事行为能力人。仅适用于标准账户与 ECN 账户；美分账户、PAMM 账户、MAM 账户、代理账户及各类机构账户不在参与范围内。每位客户仅限使用一个账户参加。",
        },
        {
          no: "02",
          q: "净入金如何计算？",
          a: "活动周期内，客户账户累计入金总额减去累计出金总额。仅统计真实跨境 / 渠道入金；内部转账、账户资金互转、代理佣金不计入净入金。",
        },
        {
          no: "03",
          q: "哪些交易计入有效手数？",
          a: "仅统计已平仓的标准手交易，零散手数合并计算。单笔订单持仓需满 3 分钟及以上；对冲交易量占总交易量比例不得超过 50%。套利、高频刷单、对倒、EA / API 高频自动交易等不计入并可能被判定违规。",
        },
        {
          no: "04",
          q: "达标后出金会有影响吗？",
          a: "达标客户的净入金须保持至活动结束且礼品兑换申请提交之时。若出金导致净入金低于已达标档位标准，平台有权取消或降级礼品兑换资格。",
        },
      ],
    },
    terms: {
      index: "04 / 详细条款",
      title: "活动条件与条款",
      lead: "活动时间：2026 年 9 月 15 日 00:00 至 10 月 14 日 23:59（MT5 服务器时间，GMT+3），并于上述期限内完成报名及兑换。",
      priority:
        "本条款英文版本具备法律约束力，任何翻译文本仅供参考。中英文版本如有不一致之处，以英文版本为准。",
    },
    contact: {
      title: "联系 QUBE Markets 客服",
      lead: "如对活动条款或活动内容有任何疑问，欢迎随时联系我们。",
      email: "support@qubemarkets.com",
      hours: "官网在线客服：周一至周五，MT5 服务器时间 09:00–18:00",
      cta: "发邮件",
    },
    footer: {
      rights: "© 2026 QUBE Markets. All rights reserved.",
      legal:
        "本活动由 Qube Markets Global Fintech Limited（注册编号 16389，昂儒昂离岸金融局牌照编号 L16389/QMGFL）主办。Apple Inc. 不是本次活动的赞助商、合作伙伴或管理员，也未以其他方式参与本次活动。Apple 及相关 Apple 产品名称是 Apple Inc. 的商标。差价合约（CFD）及保证金外汇交易具有高杠杆风险，可能导致损失全部本金。请勿仅为获取活动福利而进行存款或交易。",
    },
  },
  en: {
    nav: [
      { href: "#gifts", label: "Rewards" },
      { href: "#join", label: "How to join" },
      { href: "#terms", label: "Terms" },
    ],
    navCta: "Contact your manager",
    langLabel: "中文",
    hero: {
      kicker: "Qube × Apple",
      title: "Autumn Exclusive Rewards",
      lead: "Meet both the Net Deposit and Valid Trading Volume requirements during the Promotion Period to claim the new Apple reward for your tier.",
      periodLabel: "Promotion period",
      period: "15 Sep — 14 Oct 2026",
      periodNote: "00:00 to 23:59, MT5 Server Time (GMT+3)",
      cta: "View reward tiers",
      ctaSub: "Register now",
      disclaimer:
        "Read the full Terms and Conditions before taking part. CFD trading carries a high level of leverage risk.",
      imageNote:
        "Images are for illustration only. Actual rewards follow the version officially released by Apple.",
    },
    join: {
      index: "01 / How to take part",
      title: "Registration",
      lead: "You can register for this promotion in either of the following ways:",
      cards: [
        {
          no: "01",
          title: "Register by email",
          body: "Email us from your registered account address at",
          email: "support@qubemarkets.com",
          fieldLabel: "Subject line",
          field: "Activity Name + Full Name + Trading Account Number",
          foot: "Registration is confirmed upon platform verification",
        },
        {
          no: "02",
          title: "Register via your account manager",
          steps: [
            "Contact your account manager and submit your application",
            "Your account manager completes the registration for you",
          ],
        },
      ],
      deadline:
        "Registration must be completed by 23:59 on 14 October 2026 (MT4/MT5 server time). Late registrations are not accepted. Clients who fail to register are not eligible to redeem a reward, even if they meet the criteria.",
    },
    gifts: {
      index: "02 / Reward tiers",
      title: "Six tiers, one clear view",
      note: "Estimated values are projected USD overseas market prices for the relevant new Apple products, provided solely as a tier-matching reference. They are not official Apple prices. Rewards must be redeemed at the tier achieved; tiers cannot be combined or split.",
      tierLabel: "Tier",
      depositLabel: "Net deposit USD",
      lotsLabel: "Valid lots",
      valueLabel: "Est. value",
      names: [
        "Apple Official Accessories Bundle",
        "AirPods Pro 4",
        "Apple Watch Series 12",
        "Apple Watch Ultra 4",
        "iPhone 18 Pro Max",
        "iPhone Ultra",
      ],
      subs: [
        "MagSafe Charger + AirTag",
        "2026 new model",
        "Aluminium, GPS",
        "Titanium",
        "1TB · 2026 autumn model",
        "Foldable, 256GB",
      ],
      footnote:
        "Multiple accounts linked to the same client, identity, bank card or payment channel, IP address, or device fingerprint are treated as one participant and may redeem only one reward.",
    },
    rules: {
      index: "03 / Key rules",
      title: "The rules, in plain terms",
      aside:
        "A summary of the core rules. The complete Terms and Conditions are set out below.",
      items: [
        {
          no: "01",
          q: "Which accounts can take part?",
          a: "The promotion is open to all clients in the Greater China region who are at least 18 years of age with full legal capacity. Standard and ECN accounts only; Cent, PAMM, MAM, Agent and all institutional accounts are excluded. Each client may use one account only.",
        },
        {
          no: "02",
          q: "How is Net Deposit calculated?",
          a: "Total cumulative deposits minus total cumulative withdrawals during the Promotion Period. Only genuine cross-border/channel deposits count; internal transfers, transfers between accounts and agent commissions are excluded.",
        },
        {
          no: "03",
          q: "Which trades count as valid lots?",
          a: "Only closed standard-lot trades count, with partial lots aggregated. Each order must be held for at least 3 minutes. Hedging volume must not exceed 50% of total volume. Arbitrage, high-frequency sham trading, wash trading and EA/API high-frequency automated trading are excluded and may be treated as violations.",
        },
        {
          no: "04",
          q: "Can I withdraw after qualifying?",
          a: "Your Net Deposit must be maintained until the promotion ends and your redemption application is submitted. If a withdrawal takes your Net Deposit below the qualifying tier, the Platform may cancel or downgrade your redemption eligibility.",
        },
      ],
    },
    terms: {
      index: "04 / Full terms",
      title: "Terms and Conditions",
      lead: "Promotion Period: 00:00 on 15 September 2026 to 23:59 on 14 October 2026, MT5 Server Time (GMT+3). Registration and redemption must be completed within these deadlines.",
      priority:
        "The English version of these Terms and Conditions is legally binding. Any translated version is for reference only; in the event of inconsistency, the English version prevails.",
    },
    contact: {
      title: "Contact QUBE Markets support",
      lead: "Any questions about the promotion or these terms? Get in touch.",
      email: "support@qubemarkets.com",
      hours: "Live chat: Monday to Friday, 09:00–18:00 MT5 Server Time",
      cta: "Email us",
    },
    footer: {
      rights: "© 2026 QUBE Markets. All rights reserved.",
      legal:
        "This promotion is organized by Qube Markets Global Fintech Limited (company number 16389, licence no. L16389/QMGFL, Anjouan Offshore Finance Authority). Apple Inc. is not a sponsor, partner or administrator of, or otherwise associated with, this promotion. Apple and the relevant Apple product names are trademarks of Apple Inc. CFDs and margin FX trading carry a high level of leverage risk and may result in the loss of all capital. Do not deposit or trade solely to obtain a promotional benefit.",
    },
  },
} as const;

type Section = { no: string; title: string; body: string[] };

export const termsSections: Record<Lang, Section[]> = {
  zh: [
    {
      no: "01",
      title: "总则",
      body: [
        "活动主体：本活动由 Qube Markets Global Fintech Limited（注册编号 16389，依据科摩罗联盟昂儒昂离岸金融局法律注册设立，持 AOFA 牌照编号 L16389/QMGFL，注册地址 Boulevard de Coalancanthe, Muthusamudu, Anjouan, Union of Comoros，以下简称"平台/我方"）主办。Apple Inc. 不是本次活动的赞助商、合作伙伴、管理员，也未以其他方式参与本次活动。",
        "活动时间：MT5 服务器时间（GMT+3）2026 年 9 月 15 日 00:00 至 2026 年 10 月 14 日 23:59，以平台系统时间为准，逾期不再受理参与及兑换申请。",
        "活动效力：客户一经参与，即视为已完整阅读、理解并同意本条款、平台客户协议、风险披露声明及 QUBE Markets 全部现行规章制度。",
        "规则调整权：平台有权根据实际情况调整、暂停或终止本活动规则。受苹果新品实际发售、供货、价格波动影响，平台有权调整礼品实物与参考估值；发生重大变更时将通过官网公告、站内信或电子邮件告知，已达标客户不因规则变更丧失已获得的兑奖资格。本平台拥有最终解释权。",
        "违规处置：若有合理证据怀疑客户存在虚假入金、虚假交易、刷单、对倒、恶意套利、市场操纵、串通作弊、借用他人账户参与等行为，平台有权取消资格、撤销权益、追回已发放礼品，且无需提前告知。",
        "免责声明：客户交易行为均基于自身独立判断，平台不对交易结果、盈亏承担责任；因不可抗力或平台无法合理控制的原因导致礼品延迟或无法发放的，平台不承担违约责任，但将及时通知并协商替代方案；因系统维护、网络故障或第三方服务商导致数据延迟或错误的，平台不承担间接损失，但将在合理期限内修复。",
      ],
    },
    {
      no: "02",
      title: "活动资格",
      body: [
        "参与对象：面向大中华区所有客户开放，须为年满 18 周岁的完全民事行为能力人。",
        "禁止参与人群：存在账户纠纷、账户受限、历史违规记录、风控标记的客户；利用多个账户或关联账户拆分资金 / 交易量套取礼品的客户；平台员工、代理商员工、介绍经纪人（IB）本人及其直系亲属。",
        "基础参与条件：仅适用于标准账户与 ECN 账户，美分账户、PAMM 账户、MAM 账户、代理账户及各类机构账户不在参与范围内。每位客户仅限使用一个账户参加，须同时满足对应档位的净入金标准与有效交易手数标准，两条件缺一不可。",
        "账户状态要求：参与账户在活动期间及礼品发放完成前须保持正常交易状态，不得存在冻结、风控限制、争议处理中等异常情形；状态异常的，平台有权暂停或取消兑换资格，直至异常解除并经审核确认。",
      ],
    },
    {
      no: "03",
      title: "活动档位及礼品规则",
      body: [
        "档位判定：按活动周期内累计净入金总额与累计有效交易手数匹配最高达标档位，每位客户仅可兑换一档礼品，不支持多档叠加或组合兑换。",
        "净入金定义：活动周期内累计入金总额减累计出金总额，仅统计真实跨境 / 渠道入金，内部转账、账户资金互转、代理佣金不计入。",
        "名额规则：受苹果新品首发产能限制，礼品数量有限，遵循先达标、先兑换、兑完即止原则；若对应新品缺货，平台可提供同价值苹果系备选礼品。",
        "重复参与：同一客户、同一身份信息、同一银行卡 / 收款渠道、同一 IP 地址、同一设备指纹下的多个账户仅认定为一个参与主体，仅可兑换一份礼品。",
        "礼品不可折现：所有礼品均以实物形式发放，不支持折现、抵扣交易保证金、转换为账户信用金或交易赠金。",
        "礼品价值确认：预估价值基于 2026 年 9 月 9 日苹果秋季发布会新品预估价设定，最终以苹果官方发售价格为准；如实际售价与预估价值偏差超过 ±20%，平台有权在同等价值范围内调整对应档位礼品型号。",
      ],
    },
    {
      no: "04",
      title: "交易统计规则（有效交易量定义）",
      body: [
        "统计范围：仅统计已平仓的标准手交易，零散手数合并计算；未平仓订单、挂单、撤销订单均不计入。同一客户名下多个账户的手数不可合并核算，单账户独立统计。",
        "持仓时长：单笔订单持仓需满 3 分钟及以上方可计入；不足 3 分钟的交易全部不计入，并判定为疑似刷单违规。同一账户不足 3 分钟的交易笔数累计超过总笔数 20% 的，平台有权启动风控审查。",
        "不计入的违规交易：双向对冲或恶意对冲；套利、高频刷单、对倒交易；人为制造虚假交易量、串通交易、借助第三方工具交易（含 EA 程序化高频交易、API 自动交易）；点差异常或流动性显著不足期间执行的交易；同一客户名下账户互为对手方的交易；平台合理认定的其他违规模式。",
        "对冲限制：对冲交易量占总交易量比例不得超过 50%，超标直接取消兑换资格。对冲交易量占比 = 对冲订单交易量 ÷ 总交易量 × 100%。",
        "出金与净入金锁定：达标客户的净入金须保持至活动结束且兑换申请提交之时；若出金导致净入金低于已达标档位标准，平台有权取消或降级兑换资格。出金后补足入金重新达标的，交易手数继续累计不受影响。",
      ],
    },
    {
      no: "05",
      title: "参与及礼品兑换流程",
      body: [
        "参与流程：活动周期内完成入金并开展交易，系统自动实时统计净入金与有效手数；活动结束后平台统一核验入金流水、交易记录与账户资质；核验通过的达标客户将通过站内信、邮件或客服通知兑换事宜。",
        "申请时效：活动结束后 14 个自然日内，达标客户需按平台指引将身份信息、收货地址、联系方式等兑换资料发送至 support@qubemarkets.com；逾期未提交或资料有误未按时补正的，视为自动放弃，权益作废不予补发。",
        "资料审核：兑换资料须与开户资料一致（含姓名、身份证件号码、联系方式）；平台有权要求补充身份验证材料，客户应在收到通知后 7 个自然日内提交；收货地址原则上须与开户登记的常驻国家 / 地区一致。",
        "礼品发放：资料核验无误且苹果新品已公开发售后，平台在 14–28 个工作日内安排发货；受海外采购与跨境物流影响，部分高端新品可能顺延。运输破损、丢失按物流承运方规则处理；因客户填写错误信息导致无法签收的由客户承担。任何厂商质保均受苹果适用保修条款、资格要求及地区服务限制约束。",
      ],
    },
    {
      no: "06",
      title: "违规行为与资格取消",
      body: [
        "违规行为包括：利用关联账户、多人合股、借用他人身份拆分资金与交易量套取礼品；短期入金后立即大额出金刷取净入金档位；单笔持仓不足 3 分钟高频开平仓、批量刷单虚增交易量；对冲占比超过 50%、恶意对冲、套利、对倒；提供虚假身份或收货信息、伪造交易 / 入金记录；账户被投诉或涉及第三方支付争议、退单（chargeback）；利用系统漏洞、技术故障或定价错误获取不正当优势；违反平台客户协议、交易规则及本条款的其他行为。",
        "判定与申诉：违规认定及处罚执行权归 QUBE Markets 所有，平台可直接执行处罚，无需提前通知；处罚后将通过邮件或站内信送达通知。客户有异议的，可在收到通知后 7 个工作日内提出书面申诉并提交证明材料；申诉期间不影响处罚执行，经申诉认定处罚错误的，平台应恢复相关权益或赔偿已追回礼品。",
      ],
    },
    {
      no: "07",
      title: "活动参与限制",
      body: [
        "本活动与平台同期开展的其他营销活动（含赠金、返利、交易竞赛、推荐奖励、积分计划等）互斥，同一账户仅可选择参与一项。",
        "礼品一经兑换、发出，非产品本身质量问题不支持退换、折现或替换其他品类；若苹果官方停产该型号，平台有权更换同等预估价值的 Apple 系列产品。",
        "礼品标注价值仅为参考估值，不构成交易对价或现金等价承诺；苹果新品的最终售价、配置与供货由苹果公司全权决定。",
        "本活动不构成平台对客户交易盈利的保证，活动期间的入金与交易决策均属客户自主行为；平台不对因参与活动产生的交易亏损提供补偿或返还。",
      ],
    },
    {
      no: "08",
      title: "税费与法律相关",
      body: [
        "税费承担：客户领取实物礼品所产生的全部税费（含进口关税、增值税、消费税、个人所得税）及申报义务均由客户自行承担，平台不代为扣缴、申报。如因客户未履行申报义务导致礼品被海关扣留、退回或销毁，平台不承担补发责任。",
        "法律管辖：本条款受科摩罗联盟昂儒昂离岸辖区法律管辖；客户个人信息按 QUBE Markets 隐私政策及适用数据保护法规处理。",
        "争议解决：争议应首先友好协商解决；协商不成的，可提交昂儒昂辖区有管辖权的法院诉讼解决。客户不得以参与活动为由提出超出本条款范围的索赔。",
        "条款优先级与文本效力：本活动专项条款优先于平台《客户协议》。本条款英文版本具备法律约束力，翻译文本仅供参考，中英文不一致的以英文版本为准。",
      ],
    },
    {
      no: "09",
      title: "风险提示",
      body: [
        "本次活动为平台客户回馈活动，参与活动不改变外汇、差价合约（CFD）产品本身的交易风险。",
        "实盘外汇及 CFD 交易存在高风险，亏损金额可能超过初始入金，客户须独立承担全部交易盈亏。",
        "Apple 礼品仅为平台福利，不构成投资建议或收益承诺；产品配置、发售时间与供货由苹果公司决定。",
        "客户不应以获取礼品为目的进行超出自身风险承受能力的入金或交易；杠杆交易可能导致本金快速亏损，请审慎决策。",
        "请勿仅为获取活动福利而进行存款或交易。参与活动属于自愿行为，不提升交易表现，也不降低交易风险。",
      ],
    },
  ],
  en: [
    {
      no: "01",
      title: "General provisions",
      body: [
        "Organizer: This promotion is organized by Qube Markets Global Fintech Limited, trading as QUBE MARKETS (company number 16389), incorporated under the laws of the Union of Comoros, Offshore Finance Authority, registered office Boulevard de Coalancanthe, Muthusamudu, Anjouan, Union of Comoros, licence no. L16389/QMGFL (the \u201CPlatform\u201D or \u201Cwe\u201D). Apple Inc. is not a sponsor, partner or administrator of, or otherwise associated with, this promotion.",
        "Promotion period: 00:00 on 15 September 2026 to 23:59 on 14 October 2026, MT5 Server Time (GMT+3). Start and end times are determined by the Platform's system time; no participation or redemption applications are accepted after expiry.",
        "Binding effect: By participating, a client is deemed to have fully read, understood and agreed to these Terms, the Client Agreement, the Risk Disclosure Statement and all other applicable QUBE Markets rules and policies.",
        "Right to amend: QUBE Markets may amend, suspend or terminate the promotion or these rules as it considers necessary, and may adjust physical rewards and reference values in light of Apple launch, availability and price movements. Material changes are notified by website announcement, in-platform message or email; clients who have already qualified do not lose eligibility as a result. The Platform reserves the right of final interpretation.",
        "Handling of violations: Where we have reasonable evidence of false deposits, sham trading, wash trading, malicious arbitrage, market manipulation, collusion, or participation using another person's account, we may cancel eligibility, revoke redemption rights and recover rewards already issued, without prior notice.",
        "Disclaimers: All trading is based on the client's own independent judgment and the Platform assumes no responsibility for trading results. The Platform is not liable for breach where rewards are delayed or unavailable due to force majeure or circumstances beyond its reasonable control, but will notify affected clients and discuss a reasonable alternative. The Platform is not liable for indirect losses from data delays or errors caused by system maintenance, network failures or third-party providers, but will repair and restore data within a reasonable period.",
      ],
    },
    {
      no: "02",
      title: "Eligibility",
      body: [
        "Eligible participants: Open to all clients in the Greater China region who are at least 18 years of age and have full legal capacity to act.",
        "Prohibited participants: clients with account disputes, restrictions, a history of violations or risk-control flags; clients using multiple or related accounts to split funds or volume; Platform employees, employees of agents, Introducing Brokers and their immediate family members.",
        "Basic requirements: Standard and ECN accounts only. Cent, PAMM, MAM, Agent and all institutional accounts are excluded. Each client may participate using one account only and must satisfy both the Net Deposit and Valid Trading Volume requirements of the relevant tier; both conditions are mandatory.",
        "Account status: The participating account must remain in normal trading status throughout the promotion and until the reward is fully delivered, and must not be frozen, restricted, disputed or otherwise abnormal. Where a status is abnormal, the Platform may suspend or cancel redemption eligibility until it is resolved and confirmed following review.",
      ],
    },
    {
      no: "03",
      title: "Tiers and reward rules",
      body: [
        "Tier determination: Based on cumulative Net Deposit and cumulative valid lots during the Promotion Period, matched to the highest tier achieved. Each client may redeem one tier only; tiers cannot be accumulated or combined.",
        "Net Deposit: Total cumulative deposits minus total cumulative withdrawals during the Promotion Period. Only genuine cross-border/channel deposits are counted; internal transfers, transfers between accounts and agent commissions are excluded.",
        "Availability: Due to limited initial production capacity, rewards are limited in quantity and allocated on a first-qualified, first-redeemed basis until stocks are exhausted. If a product is unavailable, the Platform may provide an alternative Apple product of equivalent value.",
        "Duplicate participation: Multiple accounts linked to the same client, identity, bank card/payment channel, IP address or device fingerprint are treated as one participant and may redeem only one reward.",
        "No cash alternative: All rewards are provided in physical form and cannot be exchanged for cash, used to offset trading margin, or converted into account credit or trading bonuses.",
        "Value confirmation: Estimated values are based on projected prices from the Apple event of 9 September 2026; the official Apple retail price prevails. Where the actual price deviates from the estimate by more than \u00B120%, the Platform may adjust the reward model within an equivalent value range.",
      ],
    },
    {
      no: "04",
      title: "Trading volume rules",
      body: [
        "Scope: Only closed standard-lot trades count, with partial lots aggregated. Open positions, pending orders and cancelled orders are excluded. Lots across multiple accounts of the same client cannot be combined; each account is counted independently.",
        "Holding period: Each order must be held for at least 3 minutes to count. Trades held for less than 3 minutes are excluded and treated as suspected sham trading. Where such trades exceed 20% of an account's total trades, the Platform may launch a risk-control review.",
        "Excluded and prohibited trading: two-way or malicious hedging; arbitrage, high-frequency sham trading, wash trading; artificially generated volume, collusive trading, or trading with third-party tools (including EA/programmatic high-frequency and API automated trading); trades executed during abnormal spreads or insufficient liquidity; trades between accounts of the same client acting as counterparties; any other pattern the Platform reasonably determines to be a violation.",
        "Hedging restriction: Hedging volume must not exceed 50% of total trading volume; exceeding this cancels redemption eligibility. Hedging Volume Ratio = Hedging Order Volume \u00F7 Total Trading Volume \u00D7 100%.",
        "Withdrawals and Net Deposit lock: Net Deposit must be maintained until the promotion ends and the redemption application is submitted. If a withdrawal takes Net Deposit below the qualifying tier, the Platform may cancel or downgrade eligibility. If a client tops up after a withdrawal and requalifies, accumulated lots are unaffected.",
      ],
    },
    {
      no: "05",
      title: "Participation and redemption",
      body: [
        "Process: Deposit and trade during the Promotion Period while the system tracks Net Deposit and valid lots in real time. After the promotion ends, the Platform verifies deposit records, trading records and account eligibility, and notifies qualified clients by in-platform message, email or customer service.",
        "Application period: Within 14 calendar days after the promotion ends, qualified clients must send identity information, delivery address and contact details to support@qubemarkets.com in line with the Platform's instructions. Failure to submit valid information in time, or uncorrected errors, is deemed an automatic forfeiture.",
        "Review: Submitted information must match the client's registered details (name, identification number, contact details). The Platform may request additional verification materials, to be provided within 7 calendar days. The delivery address should in principle match the country/region of residence registered at account opening.",
        "Delivery: Once information is verified and the Apple product is publicly released, the Platform arranges dispatch within 14\u201328 business days; overseas procurement and cross-border logistics may cause delays for some premium products. Damage or loss in transit is handled under the carrier's rules; clients bear responsibility for incorrect delivery details. Any manufacturer warranty is subject to Apple's applicable warranty terms, eligibility requirements and regional service limitations.",
      ],
    },
    {
      no: "06",
      title: "Violations and cancellation",
      body: [
        "Violations include: using related accounts, pooled funds or another person's identity to split funds or volume; making a large withdrawal immediately after a short-term deposit to qualify for a higher tier; high-frequency opening and closing with holding periods under 3 minutes or batch sham trading; hedging volume above 50%, malicious hedging, arbitrage or wash trading; providing false identity or delivery information or falsified records; complaints, third-party payment disputes or chargebacks during the promotion; exploiting system vulnerabilities, technical failures or pricing errors; any other breach of the Client Agreement, trading rules or these Terms.",
        "Determination and appeals: Determination and enforcement rest with QUBE Markets, which may act without prior notice, and will notify the client by email or in-platform message. A client may submit a written appeal with supporting materials within 7 business days of notice. An appeal does not suspend enforcement; where an appeal shows the penalty was incorrect, the Platform will restore entitlements or compensate for recovered rewards.",
      ],
    },
    {
      no: "07",
      title: "Participation restrictions",
      body: [
        "This promotion is mutually exclusive with other concurrent Platform campaigns (including bonus, rebate, trading contest, referral and loyalty programmes); one account may join one campaign only.",
        "Once redeemed and dispatched, a reward cannot be returned, exchanged or converted to cash except for a product quality issue. If Apple discontinues the model, the Platform may substitute an Apple product of equivalent estimated value.",
        "Stated reward values are estimates only and do not constitute trading consideration or a cash-equivalent commitment. Final retail price, specifications and availability are determined solely by Apple.",
        "The promotion does not constitute any guarantee of trading profits. Deposit and trading decisions are made independently by the client, and the Platform will not compensate or refund trading losses.",
      ],
    },
    {
      no: "08",
      title: "Taxes and legal matters",
      body: [
        "Taxes: All taxes and charges arising from receipt of a physical reward (including import duties, VAT, consumption tax and personal income tax) and any declaration obligations are borne by the client. The Platform does not withhold or file on the client's behalf and is not responsible for replacement where a reward is detained, returned or destroyed by customs.",
        "Governing law: These Terms are governed by the laws of the Anjouan offshore jurisdiction, Union of Comoros. Personal information is processed under the QUBE Markets Privacy Policy and applicable data protection law.",
        "Disputes: Disputes should first be resolved through friendly negotiation; failing that, either party may bring proceedings before a court of competent jurisdiction in Anjouan. Clients may not bring claims beyond the scope of these Terms on the basis of participation.",
        "Priority and language: These promotion-specific Terms prevail over the Client Agreement. The English version is legally binding; translations are for reference only and the English version prevails in case of inconsistency.",
      ],
    },
    {
      no: "09",
      title: "Risk disclosure",
      body: [
        "This promotion is a client rewards programme and does not alter the inherent trading risks of foreign exchange or CFD products.",
        "Live FX and CFD trading involve a high level of risk; losses may exceed the initial deposit and clients bear all trading results independently.",
        "Apple rewards are provided solely as a client benefit and do not constitute investment advice or a promise of returns. Specifications, launch dates and availability are determined by Apple.",
        "Clients should not deposit or trade beyond their risk tolerance in order to obtain a reward. Leveraged trading can lead to rapid loss of capital; decide carefully.",
        "Do not deposit or trade solely to obtain a promotional benefit. Participation is voluntary, does not improve trading performance and does not reduce trading risk.",
      ],
    },
  ],
};
