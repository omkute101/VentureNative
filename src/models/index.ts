export type ResearchStatus = 'Discovery' | 'Researching' | 'Diligence' | 'Paper invest' | 'Watchlist' | 'Passed' | 'Thesis invalidated';
export type DealStatus = 'Inbox' | 'Screening' | 'Researching' | 'Diligence' | 'Paper portfolio' | 'Watchlist' | 'Passed';
export type DecisionType = 'Paper invest' | 'Watchlist' | 'Passed' | 'Continue research';
export type PublicationStatus = 'Draft' | 'In review' | 'Published';
export type TaskStatus = 'Open' | 'In progress' | 'Complete';
export type WorkStatus = 'Planned' | 'In progress' | 'In review' | 'Completed' | 'Published' | 'Archived';

export interface Source { id: string; title: string; url?: string; date?: string; verification: 'Verified public fact' | 'Company-reported' | 'Analysis' | 'Unverified'; }
export interface Company {
  id: string; slug: string; name: string; initials: string; illustrative?: boolean; website?: string;
  sector: string; stage: string; geography: string; headquarters?: string; founded?: number; founders?: string[];
  researchStatus: ResearchStatus; dealStatus: DealStatus; dateAdded: string; lastReviewed: string; nextReview: string;
  overview: { problem: string; product: string; customer: string; businessModel: string; market: string; competition: string; differentiation: string; team: string; traction: string; risks: string; questions: string };
  thesis: { initial: string; bull: string; bear: string; whyNow: string; worksIf: string; invalidatedBy: string; milestones: string[] };
  sources: Source[];
}
export interface Decision { id: string; companyId: string; date: string; decision: DecisionType; conviction: 'Low' | 'Medium' | 'High'; rationale: string; evidence: string; counterarguments: string; assumptions: string; invalidation: string; nextReview: string; }
export interface MemoTable { caption?: string; columns: string[]; rows: string[][]; }
export interface MemoFact { label: string; value: string; }
export interface MemoDownload { href: string; label: string; description: string; details: string; }
export interface ResearchMemo { id: string; slug: string; title: string; type: 'Investment memo' | 'Industry deep dive' | 'Market map' | 'Thesis' | 'Competitive analysis' | 'Financial analysis' | 'Learning note' | 'Portfolio review'; sector: string; companyId?: string; abstract: string; status: PublicationStatus; date: string; lastReviewed: string; readingTime: number; content: MemoSection[]; sources: Source[]; decision?: { label: string; summary: string }; facts?: MemoFact[]; download?: MemoDownload; }
export interface MemoSection { heading: string; body: string; paragraphs?: string[]; bullets?: string[]; tables?: MemoTable[]; }
export interface MarketMap { id: string; slug: string; title: string; sector: string; scope: string; created: string; reviewed: string; thesis: string; categories: { name: string; companyIds: string[]; notes: string }[]; sources: Source[]; }
export interface Task { id: string; title: string; description: string; companyId?: string; memoId?: string; priority: 'Low' | 'Medium' | 'High'; dueDate: string; status: TaskStatus; completedDate?: string; }
export interface Milestone { id: string; companyId: string; title: string; expectedDate: string; actualDate?: string; status: 'Upcoming' | 'Completed' | 'Missed' | 'Unverified'; evidence: string; notes: string; }
export interface WorkItem { id: string; title: string; category: string; description: string; status: WorkStatus; priority: 'Low' | 'Medium' | 'High'; created: string; updated: string; dueDate?: string; companyId?: string; researchId?: string; visibility: 'Public' | 'Private'; outputUrl?: string; notes: string; }
export interface ActivityEvent { id: string; date: string; text: string; kind: string; }
export interface NewsletterIssue { id: string; title: string; date: string; abstract: string; }
export interface PrototypeData { companies: Company[]; decisions: Decision[]; research: ResearchMemo[]; markets: MarketMap[]; tasks: Task[]; milestones: Milestone[]; workItems: WorkItem[]; activities: ActivityEvent[]; }
