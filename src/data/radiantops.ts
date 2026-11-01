import type { Company, Decision, ResearchMemo } from '../models';

export const radiantOpsCompany: Company = {
  id: 'co-radiantops',
  slug: 'radiantops',
  name: 'RadiantOps',
  initials: 'RO',
  website: 'https://radiantops.com/',
  sector: 'AI-native enterprise software / Developer tools',
  stage: 'Seed',
  geography: 'United States',
  headquarters: 'Durango, Colorado',
  founded: 2024,
  founders: ['Travis Kimmel', 'Ben Thompson', 'Sigmon Myers'],
  researchStatus: 'Watchlist',
  dealStatus: 'Watchlist',
  dateAdded: '2026-11-01',
  lastReviewed: '2026-11-01',
  nextReview: '2027-02-01',
  overview: {
    problem: 'As AI generates more software, engineering leaders need to understand whether the work is useful, secure, maintainable, and contributing to business outcomes.',
    product: 'An engineering intelligence platform that connects repository, collaboration, ticket, and AI-agent activity into episodes of work and a Daily Signal report.',
    customer: 'Software-intensive organisations with 100+ engineers, multiple engineering teams or repositories, meaningful AI-coding adoption, and a budget for workflow intelligence or AI ROI.',
    businessModel: 'Appears to be enterprise SaaS. Pricing and monetisation are not publicly disclosed in the memo source.',
    market: 'A growing category for measuring engineering work as AI takes on more implementation. Serviceable market and willingness to pay remain unproven.',
    competition: 'LinearB, Jellyfish, GitHub Copilot, and Atlassian represent direct or platform competition.',
    differentiation: 'Potential cross-platform context, work-level intelligence, trustworthy measurement, and historical insight across human and agent-driven work.',
    team: 'Travis Kimmel and Ben Thompson previously founded GitPrime. The announcement names Sigmon Myers as a co-founder; public material does not provide independently verified detail on the broader team.',
    traction: 'Public product capabilities and a $7M seed announcement are available. Paying customers, ARR, retention, and measured ROI are not publicly disclosed in this review.',
    risks: 'Feature bundling, weak willingness to pay, unproven ROI, data accuracy, adoption resistance, enterprise sales cycles, founder concentration, and valuation uncertainty.',
    questions: 'Can RadiantOps show regular paid use, measurable ROI, clear differentiation against incumbents, retention and expansion, credible unit economics, and attractive financing terms?'
  },
  thesis: {
    initial: 'The underlying problem is real: code generation is easier, but understanding the value of human and AI-generated work is harder. The investment case depends on whether RadiantOps can own the intelligence layer.',
    bull: 'A trusted cross-platform data layer makes AI-driven engineering work actionable, earns enterprise expansion, and becomes difficult for individual platforms to reproduce.',
    bear: 'The product becomes another analytics dashboard whose visible features can be bundled by platforms that already own workflow data and distribution.',
    whyNow: 'AI coding assistants and autonomous agents change how implementation, review, cost, rework, and productivity should be measured.',
    worksIf: 'Customers repeatedly use the product to make better decisions and can demonstrate ROI, retention, expansion, and a differentiated workflow.',
    invalidatedBy: 'Evidence shows no distinct buyer, no repeatable paid usage, insufficient customer outcomes, or capability parity with incumbent platforms.',
    milestones: ['Five to ten paying target customers', 'Measured customer ROI', 'A direct differentiated comparison with incumbents', 'Retention and added-team expansion', 'Repeatable unit economics', 'Attractive financing terms']
  },
  sources: [
    { id: 'ro-source-1', title: 'RadiantOps official press announcement and company facts', url: 'https://radiantops.com/press', verification: 'Company-reported' },
    { id: 'ro-source-2', title: 'RadiantOps investment memo — verification limitations and research notes', verification: 'Analysis' }
  ]
};

export const radiantOpsDecision: Decision = {
  id: 'd-radiantops-1',
  companyId: 'co-radiantops',
  date: '2026-11-01',
  decision: 'Watchlist',
  conviction: 'Low',
  rationale: 'The founders and problem are credible, but public evidence is insufficient to underwrite paid customer traction, ROI, retention, or a defensible advantage over incumbent platforms.',
  evidence: 'Public product announcement, company-reported seed financing, founder history, and competitor documentation reviewed in the memo.',
  counterarguments: 'The category may become more valuable as AI-generated work increases, and work-level cross-platform intelligence could become a durable system of record.',
  assumptions: 'A differentiated buyer and repeatable enterprise sales motion can emerge if the product changes engineering decisions rather than merely reporting activity.',
  invalidation: 'Regular paid customer use, measurable ROI, differentiated capability, retention, and credible unit economics would justify reassessment.',
  nextReview: '2027-02-01'
};

export const radiantOpsMemo: ResearchMemo = {
  id: 'r-radiantops-1',
  slug: 'radiantops-engineering-intelligence-investment-memo',
  title: 'RadiantOps: Engineering intelligence for the age of AI-generated software',
  type: 'Investment memo',
  sector: 'AI-native enterprise software / Developer tools',
  companyId: 'co-radiantops',
  abstract: 'A public-evidence review of RadiantOps, its engineering-intelligence thesis, competitive risks, and the evidence required before a hypothetical investment decision could change.',
  status: 'Published',
  date: '2026-11-01',
  lastReviewed: '2026-11-01',
  readingTime: 24,
  decision: {
    label: 'PASS FOR NOW — Maintain on Watchlist',
    summary: 'No investment. The opportunity remains under review until stronger customer validation, differentiation, and underwriting evidence are available.'
  },
  facts: [
    { label: 'Company', value: 'RadiantOps' },
    { label: 'Sector', value: 'AI-native enterprise software / Developer tools' },
    { label: 'Founded', value: '2024 (company-reported)' },
    { label: 'Headquarters', value: 'Durango, Colorado (company-reported)' },
    { label: 'Stage', value: 'Seed' },
    { label: 'Funding announced', value: '$7M seed, 16 September 2026' },
    { label: 'Lead investor', value: 'Foundation Capital' },
    { label: 'Founders', value: 'Travis Kimmel, Ben Thompson, Sigmon Myers' },
    { label: 'Investment position', value: 'No investment' },
    { label: 'Conviction', value: 'Low to moderate' }
  ],
  content: [
    {
      heading: '1. The investment decision', body: '',
      paragraphs: [
        'RadiantOps is building an engineering intelligence platform for companies increasingly using AI coding assistants and autonomous coding agents.',
        'The underlying problem is real: generating code is becoming easier, but understanding whether that code is useful, secure, maintainable, and contributing to business outcomes is becoming harder. RadiantOps wants to give engineering leaders a clearer picture of what is happening across their teams, including work performed by AI agents.',
        'The founders\' previous experience building GitPrime makes the opportunity more credible. GitPrime was acquired by Pluralsight in 2019 for approximately $170 million, according to an SEC filing. They have built in this category once and return as software engineering workflows change significantly.',
        'But founder pedigree and a timely thesis are not enough to justify an investment. There is no publicly verifiable evidence of paid customer traction, retention, measurable customer ROI, or a defensible advantage over existing engineering intelligence platforms.',
        'Decision: pass for now and keep RadiantOps on the watchlist. This is not a rejection of the company. It is a judgment that the evidence currently available is insufficient to underwrite an investment.'
      ]
    },
    {
      heading: '2. Company and product', body: '',
      paragraphs: [
        'RadiantOps describes itself as a platform that connects engineering activity across code repositories, collaboration tools, tickets, and AI-agent runs. Rather than isolated metrics, it groups related activity into what it calls episodes of work.',
        'Its Daily Signal report surfaces important engineering activity and links each signal to the underlying work, rather than adding another metrics dashboard. These capabilities are described in the company\'s September 2026 launch announcement and are company-reported.',
        'Traditional engineering analytics were designed around human-led development. AI changes the equation: a developer can delegate implementation to an agent, receive hundreds of lines of code, and spend more time reviewing, testing, and correcting. Lines produced no longer indicate productivity, and a company may generate more code while increasing review overhead, technical debt, and rework.',
        'I agree with the problem. The question is whether RadiantOps can own the solution.'
      ],
      bullets: ['What work is actually happening.', 'Who or what produced it: a human developer or an AI agent.', 'Where work is getting stuck.', 'How much AI-generated work costs.', 'How frequently generated changes need to be redone.', 'What deserves management attention.']
    },
    {
      heading: '3. Founder assessment', body: '',
      paragraphs: [
        'The founding team is one of the strongest parts of the thesis. Travis Kimmel and Ben Thompson previously founded GitPrime, a developer productivity analytics company in Y Combinator\'s Winter 2016 batch. Pluralsight completed the acquisition on May 9, 2019, with an SEC filing reporting approximately $170 million in aggregate consideration, subject to customary adjustments.',
        'This matters because GitPrime operated in a closely related market. The founders have relevant experience, and RadiantOps argues that metrics need context: a slow code review may signal a bottleneck, or a careful architectural decision. That is a more thoughtful approach than measuring activity alone.',
        'My interpretation is that the founders have seen both the value and the limits of engineering analytics. This is a credible founder-market-fit argument, though the specific lessons need to be tested in founder interviews.',
        'A prior exit is a positive signal, not a guarantee. The GitPrime connection for Kimmel and Thompson is confirmed via Y Combinator; other founder information rests primarily on RadiantOps\' own announcement.',
        'Founder verdict: strong initial credibility. A meaningful advantage in understanding the problem, but not yet a proven advantage in building this specific product.'
      ],
      bullets: ['Repeatability: did GitPrime succeed because of a lasting product advantage, market timing, distribution, or a mix?', 'Technical leadership: public material does not provide independently verifiable detail on Sigmon Myers\' background or the team\'s engineering depth.', 'Founder dependence: how much of the product, customer relationships, and category understanding rests on Kimmel and Thompson?']
    },
    {
      heading: '4. Market opportunity', body: '',
      paragraphs: [
        'The opportunity is not simply the market for developer tools. It is the emerging market for understanding, measuring, and managing software engineering work as AI takes on more implementation. A large market does not guarantee a large addressable opportunity for the startup.',
        'Rather than multiplying global developer count by a per-seat price, this memo estimates from target organisations and annual contract value. This is an analyst-built scenario model, not a verified account count or RadiantOps pricing.',
        'The $600M base case is meaningful, but becomes more attractive only if RadiantOps expands into AI-agent performance and cost management, workflow orchestration, delivery-risk detection, capacity planning, AI productivity benchmarking, and enterprise-wide measurement of AI-generated work. That is an expansion thesis, not demonstrated market position.',
        'Market verdict: attractive and growing problem space. Serviceable market and willingness to pay remain unproven.'
      ],
      bullets: ['Software-intensive companies with roughly 100+ engineers.', 'Multiple engineering teams or repositories.', 'Meaningful adoption of AI coding tools.', 'Engineering leadership with budget for productivity, workflow intelligence, or AI ROI.'],
      tables: [{ caption: 'Bottom-up TAM — analyst scenario model', columns: ['Scenario', 'Target organisations', 'Assumed ACV', 'Implied TAM'], rows: [['Conservative', '5,000', '$25,000', '$125M'], ['Base', '15,000', '$40,000', '$600M'], ['Upside', '30,000', '$60,000', '$1.8B']] }]
    },
    {
      heading: '5. Competitive landscape and defensibility', body: '',
      paragraphs: [
        'This is the most important section of the memo. Incumbents already have engineering data, integrations, enterprise relationships, and distribution. The question is not whether the product is useful, but whether it is differentiated enough that customers buy it separately rather than use features in platforms they already own.',
        'My current view is that RadiantOps is entering an existing category undergoing major transformation, not creating a new one. GitHub can measure coding-agent usage because it owns the environment; LinearB analyses pull-request workflows; Jellyfish links AI spend to outcomes; and Atlassian owns key parts of work management. They can add functionality without asking customers to buy another product.',
        'The strongest case is the combination of trusted cross-platform context, work-level intelligence, measurement that separates useful work from superficial activity, and historical intelligence. A dashboard can be copied; a trusted data layer that understands how engineering work moves through an organisation is harder to reproduce.',
        'Defensibility verdict: not established. This is the biggest strategic risk in the thesis.'
      ],
      bullets: ['Cross-platform context across coding agents, repositories, tickets, and collaboration tools.', 'Work-level intelligence from task to generated code, review, rework, and outcome.', 'Trustworthy measurement that separates useful work from superficial activity.', 'Historical intelligence showing which AI workflows improve delivery.'],
      tables: [{ caption: 'Competitor review — public documentation', columns: ['Competitor', 'Position', 'Relevant capabilities', 'Threat type'], rows: [['LinearB', 'Direct competitor', 'Delivery metrics, workflow analytics, and AI Analytics across PRs, commits, and teams.', 'Existing workflow integrations'], ['Jellyfish', 'Direct competitor', 'AI impact, AI spend, productivity, workflow intelligence, and business alignment.', 'Broad enterprise product'], ['GitHub Copilot', 'Platform competitor', 'Enterprise usage, code-generation, and impact dashboards including agent-initiated activity.', 'Owns coding-agent telemetry'], ['Atlassian (Jira)', 'Platform threat', 'Coding-agent integrations, AI-assisted delivery coordination, and enterprise context.', 'Distribution and system-of-record advantage']] }]
    },
    {
      heading: '6. Traction and customer validation', body: '',
      paragraphs: [
        'This is where I am most cautious. RadiantOps announced a $7 million seed round on September 16, 2026, led by Foundation Capital, with participation from Vermilion Cliffs Ventures, Essence, Vela, and MKT1. That is a positive financing signal, but financing is not customer validation.',
        'The absence of public evidence does not mean RadiantOps has no customers or pilots. It means traction cannot be responsibly underwritten from public information. The most important test is whether the product changes decisions or merely presents information.',
        'Traction verdict: insufficient public evidence. A major reason for the current pass.'
      ],
      bullets: ['What problem made you look for RadiantOps?', 'What were you using before?', 'Does it reveal something your existing tools cannot?', 'Has it changed any engineering decisions?', 'Would you continue paying if the product disappeared from your workflow?', 'What would make you cancel?'],
      tables: [{ caption: 'Public evidence reviewed', columns: ['Evidence', 'Public status'], rows: [['Product announcement', 'Available (company-reported)'], ['Publicly presented product capabilities', 'Available (company-reported)'], ['$7M seed announcement', 'Available (company-reported)'], ['Named paying customers', 'Not found'], ['Paid contract value / ARR', 'Not disclosed'], ['Customer retention', 'Not disclosed'], ['Measurable customer ROI', 'Not found'], ['Independent customer testimonials', 'Not found']] }]
    },
    {
      heading: '7. Business model and unit economics', body: '',
      paragraphs: [
        'RadiantOps appears to be pursuing an enterprise SaaS model. Possible structures include headcount-based annual subscriptions, team or repository-based pricing, enterprise tiers with advanced analytics and integrations, and add-on modules for AI spend and agent intelligence. The company has not publicly disclosed enough pricing to establish its actual monetisation model.',
        'The base-case payback in this illustrative model is 15 months: $50,000 ACV × 80% gross margin equals $40,000 annual gross profit, or about $3,333 per month; a $50,000 customer-acquisition cost divided by $3,333 is approximately 15 months.',
        'This is plausible for enterprise SaaS, but not yet attractive without evidence of strong retention and expansion.'
      ],
      bullets: ['Does the product require heavy implementation and customer-success support?', 'How expensive is it to process large engineering datasets?', 'How much of the value is available through existing tools?', 'Can a small team sell it efficiently?', 'Does value compound as customers add repositories, teams, and agents?'],
      tables: [{ caption: 'Illustrative unit economics — underwriting assumptions, not company financial data', columns: ['Metric', 'Conservative', 'Base', 'Upside'], rows: [['Annual contract value', '$25K', '$50K', '$75K'], ['Gross margin', '70%', '80%', '85%'], ['Customer acquisition cost', '$60K', '$50K', '$45K'], ['Sales cycle', '9 months', '6 months', '4 months'], ['Annual logo retention', '85%', '90%', '95%'], ['Net revenue retention', '95%', '110%', '120%']] }]
    },
    {
      heading: '8. Funding and valuation', body: '',
      paragraphs: [
        'The $7 million seed round was announced by the company in September 2026. Pre-money or post-money valuation, share price, security structure, fully diluted share count, investor ownership, liquidation preferences, and option-pool size have not been publicly disclosed.',
        'Third-party private-company databases offer estimates, which should not be treated as verified terms. This memo does not assign a valuation based on a generic seed benchmark.',
        'Without the actual round valuation, we cannot assess whether upside compensates for risk. A 10x increase in company value is not automatically a 10x investor return: entry price and dilution determine the outcome.'
      ],
      tables: [
        { caption: 'Illustrative ownership sensitivity for a hypothetical $1M investment', columns: ['Scenario', 'Hypothetical entry post-money', 'Initial ownership', 'Ownership after 50% dilution'], rows: [['Lower entry', '$25M', '4.00%', '2.00%'], ['Mid entry', '$40M', '2.50%', '1.25%'], ['Higher entry', '$60M', '1.67%', '0.83%']] },
        { caption: 'Illustrative outcome sensitivity', columns: ['Scenario', 'Exit value', 'Ownership at exit', 'Proceeds', 'MOIC'], rows: [['Lower entry / modest exit', '$250M', '2.00%', '$5M', '5.0x'], ['Mid entry / strong exit', '$500M', '1.25%', '$6.25M', '6.25x'], ['Higher entry / large exit', '$1B', '0.83%', '$8.3M', '8.3x']] }
      ]
    },
    {
      heading: '9. Venture-scale potential', body: '',
      paragraphs: [
        'To be a meaningful venture outcome, RadiantOps must grow beyond a useful engineering dashboard. A $25M–$60M ARR business could support a substantial software outcome given strong growth, retention, and margins.',
        'The route is not straightforward: RadiantOps must win against companies that own critical parts of the engineering workflow and prove its intelligence justifies a separate budget. The concern is not that the market is too small; it is that the company may not capture enough of it before incumbents absorb the most valuable features.'
      ],
      tables: [{ caption: 'Illustrative scenarios — not company forecasts', columns: ['Paying customers', 'Average ACV', 'ARR'], rows: [['100', '$30K', '$3M'], ['250', '$40K', '$10M'], ['500', '$50K', '$25M'], ['1,000', '$60K', '$60M']] }]
    },
    {
      heading: '10. Key risks', body: '',
      paragraphs: ['The most important risk is competitive positioning. If RadiantOps becomes another analytics dashboard, it may struggle to justify its existence. If it becomes a trusted intelligence layer across human and agent-driven development, the opportunity becomes much more interesting.'],
      tables: [{ caption: 'Risk register', columns: ['Risk', 'Why it matters'], rows: [['Feature bundling', 'GitHub, Atlassian, LinearB, and Jellyfish can expand into overlapping use cases.'], ['Weak willingness to pay', 'Leaders may find it interesting but not essential enough to buy separately.'], ['Unproven ROI', 'The product must show insights improve decisions and outcomes, not just reporting.'], ['Data accuracy', 'AI attribution, cross-tool identity, and work-level context are difficult to measure reliably.'], ['Adoption resistance', 'Engineers may distrust tools that appear to monitor individual productivity.'], ['Enterprise sales', 'Long cycles and implementation requirements can raise CAC.'], ['Founder concentration', 'The company needs a team able to execute beyond the founders\' prior category experience.'], ['Valuation risk', 'Without round terms, return potential cannot be underwritten.']] }]
    },
    {
      heading: '11. What would change my mind', body: '',
      bullets: ['Paid customer validation: five to ten paying customers in the target market with evidence of regular use.', 'Measurable customer ROI: examples of reduced review bottlenecks, lower rework, improved throughput, or better AI-spend decisions.', 'Differentiation against incumbents: a direct comparison showing capabilities customers cannot get from GitHub, LinearB, Jellyfish, or Atlassian.', 'Retention and expansion: renewals, added teams, and rising ACV.', 'Credible unit economics: a repeatable sales process, healthy gross margins, and reasonable CAC payback.', 'Attractive terms: valuation, ownership, and financing terms that support a venture-scale return after future dilution.']
    },
    {
      heading: '12. Investment committee conclusion', body: '',
      paragraphs: [
        'PASS FOR NOW. Maintain on watchlist.',
        'RadiantOps presents an interesting early-stage opportunity at the intersection of AI and developer productivity. The founders\' GitPrime experience, combined with the growing need to measure AI\'s impact on engineering workflows, creates a credible initial thesis.',
        'However, the company has not yet demonstrated sufficient customer validation, repeatable willingness to pay, or a defensible advantage against established engineering analytics platforms. We would reconsider on evidence of paying enterprise customers, measurable productivity improvements, strong retention, and a differentiated product incumbents cannot easily replicate.',
        'Current position: no investment. Track for future evaluation.'
      ],
      tables: [{ caption: 'Decision assessment', columns: ['Decision factor', 'Assessment'], rows: [['Founder-market fit', 'Strong'], ['Problem relevance', 'Strong'], ['Market potential', 'Attractive, unproven'], ['Product differentiation', 'Unproven'], ['Customer validation', 'Insufficient evidence'], ['Unit economics', 'Not verified'], ['Valuation', 'Not publicly verified'], ['Investment conviction', 'Low to moderate']] }]
    },
    {
      heading: '13. Final perspective', body: '',
      paragraphs: [
        'What makes RadiantOps interesting is not that it uses AI. It is trying to solve a problem that grows as AI changes how software is produced: how do companies know whether the work being generated is creating value?',
        'The founders have relevant experience, the timing is compelling, and the product direction makes sense. But I am not yet convinced RadiantOps can build a sufficiently differentiated business in a category where established platforms already hold data, distribution, and customer relationships. That is the distinction between a promising startup and an investable opportunity.',
        'I would rather miss an early investment than invest without understanding why this company can win.'
      ]
    }
  ],
  sources: [
    { id: 'ro-memo-source-1', title: 'RadiantOps — official press announcement and company facts', url: 'https://radiantops.com/press', verification: 'Company-reported' },
    { id: 'ro-memo-source-2', title: 'Y Combinator — GitPrime company page', verification: 'Verified public fact' },
    { id: 'ro-memo-source-3', title: 'SEC — Pluralsight Form 8-K, May 2019', verification: 'Verified public fact' },
    { id: 'ro-memo-source-4', title: 'LinearB — AI Analytics documentation', verification: 'Verified public fact' },
    { id: 'ro-memo-source-5', title: 'Jellyfish — product platform pages', verification: 'Verified public fact' },
    { id: 'ro-memo-source-6', title: 'GitHub Docs — Copilot impact dashboard', verification: 'Verified public fact' },
    { id: 'ro-memo-source-7', title: 'Atlassian — Jira and coding-agent integration, October 2026', verification: 'Verified public fact' },
    { id: 'ro-memo-source-8', title: 'US Census Bureau — establishment and firm-size statistics', verification: 'Verified public fact' }
  ],
  download: {
    href: '/memos/radiantops-investment-memo.pdf',
    label: 'Download the full memo',
    description: 'Original Venture Native investment memo in PDF format.',
    details: '13 pages · PDF · 355 KB'
  }
};
