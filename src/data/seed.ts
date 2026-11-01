import type { ActivityEvent, Company, Decision, MarketMap, Milestone, NewsletterIssue, ResearchMemo, Task, WorkItem } from '../models';
import { radiantOpsCompany, radiantOpsDecision, radiantOpsMemo } from './radiantops';

const source = (id: string, title: string, verification: 'Verified public fact' | 'Company-reported' | 'Analysis' | 'Unverified' = 'Analysis') => ({ id, title, verification });

const illustrativeCompanies: Company[] = [
  {
    id: 'co-kite', slug: 'kite-layer', name: 'Kite Layer', initials: 'KL', illustrative: true, sector: 'AI infrastructure', stage: 'Seed', geography: 'India', headquarters: 'Bengaluru, India', founded: 2024, founders: ['Not yet verified'], researchStatus: 'Diligence', dealStatus: 'Diligence', dateAdded: '2026-07-12', lastReviewed: '2026-10-14', nextReview: '2026-11-15',
    overview: { problem: 'Teams lack a reliable way to evaluate changing language-model behaviour in production.', product: 'An illustrative evaluation and observability workspace for AI product teams.', customer: 'Engineering and AI product teams', businessModel: 'Not yet verified', market: 'Growing tooling layer around production AI systems.', competition: 'Crowded but evolving observability category.', differentiation: 'Potentially opinionated workflows for small AI teams.', team: 'Not yet verified', traction: 'No verified public metrics in this prototype.', risks: 'Crowded category, platform consolidation, unclear willingness to pay.', questions: 'Can evaluation become a recurring operational workflow?' },
    thesis: { initial: 'If AI evaluation becomes a required operating practice, focused workflow software may become durable infrastructure.', bull: 'A deeply embedded review loop earns expansion across engineering teams.', bear: 'Model providers and general observability platforms absorb the category.', whyNow: 'AI teams need more reliable release and monitoring processes.', worksIf: 'The product shortens the path from model change to confident deployment.', invalidatedBy: 'Customers treat evaluation as an occasional consulting task rather than software.', milestones: ['Validate buyer ownership', 'Review product workflow', 'Track evaluation cadence'] },
    sources: [source('s-kite-1', 'Internal research notes', 'Analysis')]
  },
  {
    id: 'co-relay', slug: 'relay-studio', name: 'Relay Studio', initials: 'RS', illustrative: true, sector: 'Developer tools', stage: 'Pre-seed', geography: 'United States', headquarters: 'Not yet verified', researchStatus: 'Researching', dealStatus: 'Researching', dateAdded: '2026-08-02', lastReviewed: '2026-10-11', nextReview: '2026-11-10',
    overview: { problem: 'Developers spend time translating product intent into repetitive integration work.', product: 'An illustrative agent-assisted integration workspace.', customer: 'Product-minded software teams', businessModel: 'Not yet verified', market: 'Developer workflow tools are being reshaped by AI-assisted building.', competition: 'Incumbent IDEs and coding assistants.', differentiation: 'Potential focus on repeatable integrations rather than general code generation.', team: 'Not yet verified', traction: 'Not yet verified', risks: 'Feature commoditisation and fast-moving platform roadmaps.', questions: 'Does the workflow compound with usage?' },
    thesis: { initial: 'Workflow-specific developer tools can be more defensible than generic assistants when they capture context and review loops.', bull: 'Teams standardise repeatable integrations in the product.', bear: 'General coding agents make specialised tooling unnecessary.', whyNow: 'AI-assisted development has lowered the cost of experimentation.', worksIf: 'It owns a recurring, high-context development workflow.', invalidatedBy: 'Users only return for one-off generation.', milestones: ['Map alternatives', 'Clarify user workflow'] },
    sources: [source('s-relay-1', 'Illustrative company brief', 'Unverified')]
  },
  {
    id: 'co-signal', slug: 'signal-loom', name: 'Signal Loom', initials: 'SL', illustrative: true, sector: 'Vertical AI', stage: 'Seed', geography: 'India', headquarters: 'Mumbai, India', researchStatus: 'Paper invest', dealStatus: 'Paper portfolio', dateAdded: '2026-05-20', lastReviewed: '2026-10-18', nextReview: '2026-12-01',
    overview: { problem: 'Operations teams lose time turning fragmented documents and conversations into auditable workflows.', product: 'An illustrative workflow assistant for back-office operations.', customer: 'Operations leaders at service businesses', businessModel: 'Not yet verified', market: 'Vertical AI may win where workflows are repetitive, data-rich, and accountable.', competition: 'Legacy workflow software and horizontal AI assistants.', differentiation: 'Potential domain-specific process design.', team: 'Not yet verified', traction: 'No verified public data in this sample.', risks: 'Services-heavy onboarding, data access, low trust in automation.', questions: 'Can implementation become repeatable without a large services layer?' },
    thesis: { initial: 'A vertical workflow product can earn trust by keeping humans in the review loop while compressing manual reconciliation.', bull: 'Clear ROI and recurring workflow ownership enable durable expansion.', bear: 'Workflow variance makes every deployment bespoke.', whyNow: 'Teams are ready to trial bounded automation after widespread AI exposure.', worksIf: 'Time-to-value is measurable and the product has a clear owner.', invalidatedBy: 'High implementation burden remains after early customers.', milestones: ['Test implementation repeatability', 'Review customer proof points'] },
    sources: [source('s-signal-1', 'Paper portfolio rationale', 'Analysis')]
  },
  {
    id: 'co-morrow', slug: 'morrow-data', name: 'Morrow Data', initials: 'MD', illustrative: true, sector: 'Data infrastructure', stage: 'Seed', geography: 'Europe', headquarters: 'London, UK', researchStatus: 'Watchlist', dealStatus: 'Watchlist', dateAdded: '2026-06-07', lastReviewed: '2026-09-28', nextReview: '2026-10-28',
    overview: { problem: 'Data teams struggle to understand what context AI systems used for a given output.', product: 'An illustrative lineage layer for retrieval-augmented AI applications.', customer: 'Data and AI platform teams', businessModel: 'Not yet verified', market: 'Data governance requirements are extending into AI application context.', competition: 'Data catalogues and AI observability tools.', differentiation: 'Could connect lineage directly to application evidence.', team: 'Not yet verified', traction: 'Not yet verified', risks: 'Long enterprise sales cycles and shifting standards.', questions: 'Will lineage be a standalone category or feature?' },
    thesis: { initial: 'As AI systems make consequential recommendations, teams will need traceability across context and outputs.', bull: 'Governance requirements create a category tailwind.', bear: 'Existing data platforms bundle the capability.', whyNow: 'Enterprise AI adoption is moving beyond experiments.', worksIf: 'The product connects governance to a daily workflow.', invalidatedBy: 'Data leaders see no separate budget for AI lineage.', milestones: ['Interview data leaders'] },
    sources: [source('s-morrow-1', 'Market notes', 'Analysis')]
  },
  {
    id: 'co-patch', slug: 'patchwork-health', name: 'Patchwork Health', initials: 'PH', illustrative: true, sector: 'Healthcare AI', stage: 'Pre-seed', geography: 'United States', headquarters: 'Not yet verified', researchStatus: 'Discovery', dealStatus: 'Inbox', dateAdded: '2026-10-16', lastReviewed: '2026-10-16', nextReview: '2026-11-18',
    overview: { problem: 'Clinical teams face information overload in administrative workflows.', product: 'Illustrative concept; product details not yet verified.', customer: 'Not yet verified', businessModel: 'Not yet verified', market: 'Healthcare operations software.', competition: 'Not yet researched', differentiation: 'Not yet researched', team: 'Not yet verified', traction: 'Not yet verified', risks: 'Regulation, privacy, and long procurement cycles.', questions: 'What is the first narrow workflow?' },
    thesis: { initial: 'Too early for a thesis.', bull: 'Not yet assessed.', bear: 'Not yet assessed.', whyNow: 'Not yet assessed.', worksIf: 'Not yet assessed.', invalidatedBy: 'Not yet assessed.', milestones: ['Complete screening'] },
    sources: [source('s-patch-1', 'Submission queue entry', 'Unverified')]
  },
  {
    id: 'co-arch', slug: 'archway-agents', name: 'Archway Agents', initials: 'AA', illustrative: true, sector: 'Agent infrastructure', stage: 'Seed', geography: 'India', headquarters: 'Pune, India', researchStatus: 'Passed', dealStatus: 'Passed', dateAdded: '2026-04-14', lastReviewed: '2026-09-15', nextReview: '2027-01-15',
    overview: { problem: 'Teams need reliable ways to coordinate agent actions across internal systems.', product: 'An illustrative orchestration layer for operational agents.', customer: 'Mid-market operations teams', businessModel: 'Not yet verified', market: 'Agent orchestration tools.', competition: 'Workflow automation and agent frameworks.', differentiation: 'Not yet verified', team: 'Not yet verified', traction: 'Not yet verified', risks: 'Horizontal competition and unclear ownership.', questions: 'Can the product prove control and reliability?' },
    thesis: { initial: 'The problem matters, but the initial wedge is too broad.', bull: 'A specific workflow could create focus.', bear: 'The platform landscape evolves faster than product learning.', whyNow: 'Agent adoption is increasing.', worksIf: 'A narrow buyer and workflow emerge.', invalidatedBy: 'Continued lack of clear customer ownership.', milestones: ['Revisit if a vertical wedge appears'] },
    sources: [source('s-arch-1', 'Decision journal', 'Analysis')]
  }
];

export const companies: Company[] = [radiantOpsCompany];

const illustrativeDecisions: Decision[] = [
  { id: 'd1', companyId: 'co-signal', date: '2026-09-02', decision: 'Continue research', conviction: 'Medium', rationale: 'Workflow is clear, but implementation repeatability needs more evidence.', evidence: 'Internal problem framing and market research.', counterarguments: 'May be services-heavy.', assumptions: 'A focused operational buyer exists.', invalidation: 'Deployments require substantial custom work.', nextReview: '2026-10-18' },
  { id: 'd2', companyId: 'co-signal', date: '2026-10-18', decision: 'Paper invest', conviction: 'Medium', rationale: 'A bounded workflow and human review loop make the initial thesis worth tracking.', evidence: 'Paper portfolio analysis.', counterarguments: 'Data access and onboarding remain open risks.', assumptions: 'Time-to-value can be measured.', invalidation: 'No repeatable implementation motion appears.', nextReview: '2026-12-01' },
  { id: 'd3', companyId: 'co-arch', date: '2026-09-15', decision: 'Passed', conviction: 'Medium', rationale: 'The company appears to be addressing too many agent workflows at once.', evidence: 'Research notes.', counterarguments: 'Large market if focus sharpens.', assumptions: 'A narrower wedge is necessary.', invalidation: 'A strong focused buyer motion appears.', nextReview: '2027-01-15' },
  { id: 'd4', companyId: 'co-kite', date: '2026-10-14', decision: 'Continue research', conviction: 'Medium', rationale: 'Evaluation is a meaningful workflow; buyer ownership remains unresolved.', evidence: 'Market map and internal analysis.', counterarguments: 'Incumbents may bundle the feature.', assumptions: 'Teams pay for confidence in model behaviour.', invalidation: 'No clear recurring workflow emerges.', nextReview: '2026-11-15' }
];

export const decisions: Decision[] = [radiantOpsDecision];

const memoSections = (companyName: string): ResearchMemo['content'] => [
  { heading: 'Executive summary', body: `This sample memo examines ${companyName} as an illustrative research case. It records a provisional view, the evidence available, and the questions that remain—not a recommendation or claim of investment.` },
  { heading: 'Company overview', body: 'The current record is intentionally limited to research notes and unverified or analytical information where marked. Missing facts are not filled with assumptions.' },
  { heading: 'Problem and solution', body: 'The central question is whether the proposed workflow removes a high-frequency, expensive source of friction for a defined user. A useful product needs to fit how that user already makes decisions.' },
  { heading: 'Why now?', body: 'AI capabilities have made more workflow experiments possible, but adoption depends on reliability, data access, and a practical route from pilot to daily use.' },
  { heading: 'Market sizing and assumptions', body: 'No market-size figure is presented in this prototype. The opportunity should be tested from buyer budgets, workflow frequency, and willingness to change existing systems.' },
  { heading: 'Competitive landscape', body: 'Competition may include incumbents, adjacent tools, internal builds, and the status quo. Differentiation must be visible in the user workflow, not only in a feature list.' },
  { heading: 'Bull case', body: 'A focused product becomes part of a recurring operating loop, develops richer context over time, and earns expansion through measurable outcomes.' },
  { heading: 'Bear case', body: 'The category is bundled into an existing platform or remains too bespoke to become repeatable software.' },
  { heading: 'Key risks', body: 'Evidence quality, buyer clarity, implementation burden, and platform dependence are all open risk areas to revisit.' },
  { heading: 'Thesis invalidation criteria', body: 'The thesis should change when evidence shows that the workflow lacks repeatable pull, has no durable owner, or cannot be delivered with reliable economics.' },
  { heading: 'Final decision and conviction', body: 'This is a dated, hypothetical research decision. Conviction is deliberately provisional and should move as evidence changes.' }
];

export const research: ResearchMemo[] = [
  radiantOpsMemo,
  { id: 'r1', slug: 'kite-layer-evaluating-the-evaluation-layer', title: 'Evaluating the evaluation layer', type: 'Investment memo', sector: 'AI infrastructure', companyId: 'co-kite', abstract: 'A preliminary view on where evaluation workflows may become essential infrastructure for AI product teams.', status: 'Published', date: '2026-10-15', lastReviewed: '2026-10-15', readingTime: 8, content: memoSections('Kite Layer'), sources: [source('rs1', 'Internal research notes', 'Analysis')] },
  { id: 'r2', slug: 'the-operating-system-for-agent-work', title: 'The operating system for agent work', type: 'Industry deep dive', sector: 'Agent infrastructure', abstract: 'A starting framework for separating agent frameworks, orchestration, memory, evaluation, and governance.', status: 'Published', date: '2026-10-09', lastReviewed: '2026-10-09', readingTime: 11, content: memoSections('agent infrastructure'), sources: [source('rs2', 'Market research notes', 'Analysis')] },
  { id: 'r3', slug: 'signal-loom-paper-portfolio-decision', title: 'Signal Loom: paper portfolio decision', type: 'Investment memo', sector: 'Vertical AI', companyId: 'co-signal', abstract: 'Why a human-in-the-loop operations thesis is worth tracking in the paper portfolio.', status: 'Published', date: '2026-10-18', lastReviewed: '2026-10-18', readingTime: 7, content: memoSections('Signal Loom'), sources: [source('rs3', 'Paper portfolio rationale', 'Analysis')] },
  { id: 'r4', slug: 'developer-tools-after-the-copilot', title: 'Developer tools after the copilot', type: 'Competitive analysis', sector: 'Developer tools', abstract: 'A reading list and evolving framework for workflow-specific AI developer products.', status: 'In review', date: '2026-10-12', lastReviewed: '2026-10-12', readingTime: 6, content: memoSections('developer tools'), sources: [source('rs4', 'Working notes', 'Analysis')] },
  { id: 'r5', slug: 'thesis-v1-ai-native-workflows', title: 'Thesis v1: AI-native workflows', type: 'Thesis', sector: 'AI-native software', abstract: 'The initial hypotheses guiding what Venture Native studies and what could change them.', status: 'Published', date: '2026-09-24', lastReviewed: '2026-10-01', readingTime: 5, content: memoSections('AI-native workflows'), sources: [source('rs5', 'Venture Native thesis notes', 'Analysis')] },
  { id: 'r6', slug: 'paper-portfolio-october-review', title: 'October paper portfolio review', type: 'Portfolio review', sector: 'Portfolio', abstract: 'A transparent look at changed views, open questions, and the next review cycle.', status: 'Draft', date: '2026-10-19', lastReviewed: '2026-10-19', readingTime: 4, content: memoSections('the paper portfolio'), sources: [source('rs6', 'Decision journal', 'Analysis')] }
];

export const markets: MarketMap[] = [
  { id: 'm1', slug: 'ai-agent-infrastructure', title: 'AI agent infrastructure', sector: 'Agent infrastructure', scope: 'A sample map of the layers required to build, operate, evaluate, and govern agentic systems. Entries are illustrative research examples.', created: '2026-10-09', reviewed: '2026-10-15', thesis: 'The lasting value may accrue to products that make agents reliable inside specific organisational workflows—not simply to broad frameworks.', categories: [{ name: 'Infrastructure', companyIds: ['co-kite'], notes: 'Runtime, observability, and evaluation layers.' }, { name: 'Developer tooling', companyIds: ['co-relay'], notes: 'Tools that help teams build and integrate agents.' }, { name: 'Data and memory', companyIds: ['co-morrow'], notes: 'Context, lineage, and durable data layers.' }, { name: 'Applications', companyIds: ['co-signal', 'co-arch'], notes: 'Workflow-specific applications and orchestration.' }], sources: [source('ms1', 'Market research notes', 'Analysis')] },
  { id: 'm2', slug: 'vertical-ai-workflows', title: 'Vertical AI workflows', sector: 'Vertical AI', scope: 'An early map of applications that pair domain-specific workflow design with accountable human review.', created: '2026-09-28', reviewed: '2026-10-18', thesis: 'The strongest vertical products may start with a high-frequency decision, show measurable time savings, and earn trust through reviewable outputs.', categories: [{ name: 'Operations', companyIds: ['co-signal'], notes: 'Back-office process automation.' }, { name: 'Healthcare', companyIds: ['co-patch'], notes: 'Sample emerging workflow category.' }, { name: 'Governance', companyIds: ['co-morrow'], notes: 'Evidence and lineage layer.' }], sources: [source('ms2', 'Venture Native analysis', 'Analysis')] }
];

export const tasks: Task[] = [
  { id: 't1', title: 'Review Kite Layer buyer map', description: 'Clarify whether AI evaluation has a clear budget owner.', companyId: 'co-kite', priority: 'High', dueDate: '2026-10-24', status: 'In progress' },
  { id: 't2', title: 'Publish agent infrastructure map', description: 'Review sample labels and known gaps before publishing.', memoId: 'r2', priority: 'Medium', dueDate: '2026-10-25', status: 'Open' },
  { id: 't3', title: 'Reassess Signal Loom thesis', description: 'Check implementation repeatability criteria.', companyId: 'co-signal', priority: 'High', dueDate: '2026-12-01', status: 'Open' },
  { id: 't4', title: 'Complete developer tools comparison', description: 'Map adjacent and incumbent approaches.', companyId: 'co-relay', priority: 'Medium', dueDate: '2026-10-29', status: 'Open' },
  { id: 't5', title: 'Archive October source notes', description: 'Attach evidence links to draft research.', priority: 'Low', dueDate: '2026-10-20', status: 'Complete', completedDate: '2026-10-19' }
];

export const milestones: Milestone[] = [
  { id: 'ml1', companyId: 'co-signal', title: 'Validate implementation repeatability', expectedDate: '2026-11-25', status: 'Upcoming', evidence: 'No public evidence recorded', notes: 'Review against initial thesis.' },
  { id: 'ml2', companyId: 'co-kite', title: 'Clarify evaluation workflow buyer', expectedDate: '2026-11-15', status: 'Upcoming', evidence: 'Research interview plan', notes: 'Open diligence question.' },
  { id: 'ml3', companyId: 'co-arch', title: 'Establish focused vertical wedge', expectedDate: '2026-09-01', status: 'Missed', evidence: 'Not yet verified', notes: 'Tracked as a thesis trigger, not a verified company commitment.' }
];

export const workItems: WorkItem[] = [
  { id: 'w1', title: '10 investment memos', category: 'Research target', description: 'Build a consistent investment memo practice.', status: 'In progress', priority: 'High', created: '2026-08-01', updated: '2026-10-18', dueDate: '2026-12-31', visibility: 'Private', notes: 'Target, not an achievement.' },
  { id: 'w2', title: '5 market maps', category: 'Research target', description: 'Map important emerging categories.', status: 'In progress', priority: 'High', created: '2026-08-01', updated: '2026-10-15', dueDate: '2026-12-31', visibility: 'Private', notes: 'Target, not an achievement.' },
  { id: 'w3', title: '3 industry deep dives', category: 'Research target', description: 'Develop sector-level views.', status: 'Planned', priority: 'Medium', created: '2026-08-01', updated: '2026-10-01', dueDate: '2027-01-31', visibility: 'Private', notes: 'Target, not an achievement.' },
  { id: 'w4', title: 'Sample cap-table analysis', category: 'Learning target', description: 'Practice ownership and dilution analysis.', status: 'Planned', priority: 'Medium', created: '2026-09-01', updated: '2026-09-01', visibility: 'Private', notes: 'Target, not an achievement.' },
  { id: 'w5', title: 'Sample financial model', category: 'Learning target', description: 'Practice model-building assumptions.', status: 'Planned', priority: 'Medium', created: '2026-09-01', updated: '2026-09-01', visibility: 'Private', notes: 'Target, not an achievement.' },
  { id: 'w6', title: 'Startup database foundation', category: 'System', description: 'Maintain a structured set of research records.', status: 'Completed', priority: 'High', created: '2026-08-10', updated: '2026-10-18', visibility: 'Private', notes: 'Prototype data system completed.' }
];

export const activities: ActivityEvent[] = [
  { id: 'a-radiantops-1', date: '2026-11-01', text: 'Published the RadiantOps investment memo and recorded a watchlist decision.', kind: 'Published' },
  { id: 'a1', date: '2026-10-19', text: 'Drafted the October paper portfolio review.', kind: 'Research' },
  { id: 'a2', date: '2026-10-18', text: 'Recorded a paper portfolio decision for Signal Loom.', kind: 'Decision' },
  { id: 'a3', date: '2026-10-15', text: 'Published an initial memo on the evaluation layer.', kind: 'Published' },
  { id: 'a4', date: '2026-10-14', text: 'Updated Kite Layer diligence notes.', kind: 'Research' }
];

export const newsletterIssues: NewsletterIssue[] = [
  { id: 'n1', title: 'The work behind a view', date: '2026-10-18', abstract: 'A note on paper decisions, evidence, and changing your mind.' },
  { id: 'n2', title: 'Where agent infrastructure gets interesting', date: '2026-10-09', abstract: 'A first map of the systems behind dependable agent work.' },
  { id: 'n3', title: 'Research as public practice', date: '2026-09-24', abstract: 'Why Venture Native is being built in the open.' }
];

export const initialData = { companies, decisions, research, markets, tasks, milestones, workItems, activities };
