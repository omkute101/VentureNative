import type { Company, Decision, MarketMap, Milestone, PrototypeData, ResearchMemo, Task } from '../models';
import { initialData } from '../data/seed';

const storageKey = 'venture-native-prototype-v1';
const retiredSampleResearchIds = new Set(['r1', 'r2', 'r3', 'r4', 'r5', 'r6']);

const cloneInitial = (): PrototypeData => JSON.parse(JSON.stringify(initialData)) as PrototypeData;
const mergeSeedRecords = <T extends { id: string }>(seed: T[], stored: T[] | undefined): T[] => {
  if (!stored) return seed;
  const storedIds = new Set(stored.map((item) => item.id));
  return [...stored, ...seed.filter((item) => !storedIds.has(item.id))];
};

export const prototypeStore = {
  load(): PrototypeData {
    try {
      const raw = localStorage.getItem(storageKey);
      if (!raw) return cloneInitial();
      const parsed: unknown = JSON.parse(raw);
      if (!parsed || typeof parsed !== 'object') return cloneInitial();
      const candidate = parsed as Partial<PrototypeData>;
      if (!Array.isArray(candidate.companies) || !Array.isArray(candidate.research) || !Array.isArray(candidate.tasks)) return cloneInitial();
      const seed = cloneInitial();
      const storedCompanies = candidate.companies.filter((company) => !company.illustrative);
      const companies = mergeSeedRecords(seed.companies, storedCompanies);
      const companyIds = new Set(companies.map((company) => company.id));
      const storedDecisions = candidate.decisions?.filter((decision) => companyIds.has(decision.companyId));
      const storedResearch = candidate.research.filter((memo) => !retiredSampleResearchIds.has(memo.id));
      return {
        ...seed,
        ...candidate,
        companies,
        decisions: mergeSeedRecords(seed.decisions, storedDecisions),
        research: mergeSeedRecords(seed.research, storedResearch),
        markets: mergeSeedRecords(seed.markets, candidate.markets),
        tasks: mergeSeedRecords(seed.tasks, candidate.tasks),
        milestones: mergeSeedRecords(seed.milestones, candidate.milestones),
        workItems: mergeSeedRecords(seed.workItems, candidate.workItems),
        activities: mergeSeedRecords(seed.activities, candidate.activities)
      };
    } catch { return cloneInitial(); }
  },
  save(data: PrototypeData) { localStorage.setItem(storageKey, JSON.stringify(data)); },
  reset() { localStorage.removeItem(storageKey); return cloneInitial(); }
};

export const newId = (prefix: string) => `${prefix}-${Date.now().toString(36)}`;
export const addCompany = (data: PrototypeData, company: Company): PrototypeData => ({ ...data, companies: [company, ...data.companies] });
export const updateCompany = (data: PrototypeData, company: Company): PrototypeData => ({ ...data, companies: data.companies.map((item) => item.id === company.id ? company : item) });
export const updateTask = (data: PrototypeData, task: Task): PrototypeData => ({ ...data, tasks: data.tasks.map((item) => item.id === task.id ? task : item) });
export const upsertResearch = (data: PrototypeData, memo: ResearchMemo): PrototypeData => ({ ...data, research: data.research.some((item) => item.id === memo.id) ? data.research.map((item) => item.id === memo.id ? memo : item) : [memo, ...data.research] });
export const addDecision = (data: PrototypeData, decision: Decision): PrototypeData => ({ ...data, decisions: [decision, ...data.decisions] });
export const updateMarket = (data: PrototypeData, market: MarketMap): PrototypeData => ({ ...data, markets: data.markets.some((item) => item.id === market.id) ? data.markets.map((item) => item.id === market.id ? market : item) : [market, ...data.markets] });
export const updateMilestone = (data: PrototypeData, milestone: Milestone): PrototypeData => ({ ...data, milestones: data.milestones.map((item) => item.id === milestone.id ? milestone : item) });
