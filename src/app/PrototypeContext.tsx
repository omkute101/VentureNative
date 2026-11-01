import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import type { Company, Decision, MarketMap, Milestone, PrototypeData, ResearchMemo, Task } from '../models';
import { addCompany, addDecision, newId, prototypeStore, updateCompany, updateMarket, updateMilestone, updateTask, upsertResearch } from '../services/prototype-store';

interface PrototypeContextValue {
  data: PrototypeData;
  saveCompany: (company: Company) => void;
  createCompany: (name: string) => Company;
  setDealStatus: (id: string, status: Company['dealStatus']) => void;
  saveMemo: (memo: ResearchMemo) => void;
  toggleTask: (id: string) => void;
  saveDecision: (decision: Decision) => void;
  saveMarket: (market: MarketMap) => void;
  saveMilestone: (milestone: Milestone) => void;
  reset: () => void;
}
const PrototypeContext = createContext<PrototypeContextValue | null>(null);

export function PrototypeProvider({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState<PrototypeData>(() => prototypeStore.load());
  useEffect(() => { prototypeStore.save(data); }, [data]);
  const value = useMemo<PrototypeContextValue>(() => ({
    data,
    saveCompany: (company) => setData((current) => updateCompany(current, company)),
    createCompany: (name) => {
      const id = newId('co');
      const slug = `${name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') || 'new-company'}-${id.slice(-4)}`;
      const created: Company = { id, slug, name, initials: name.split(/\s+/).map((part) => part[0]).join('').slice(0, 2).toUpperCase() || 'NC', illustrative: true, sector: 'Uncategorized', stage: 'Not yet verified', geography: 'Not yet verified', researchStatus: 'Discovery', dealStatus: 'Inbox', dateAdded: new Date().toISOString().slice(0, 10), lastReviewed: new Date().toISOString().slice(0, 10), nextReview: '', overview: { problem: '', product: '', customer: '', businessModel: '', market: '', competition: '', differentiation: '', team: '', traction: '', risks: '', questions: '' }, thesis: { initial: '', bull: '', bear: '', whyNow: '', worksIf: '', invalidatedBy: '', milestones: [] }, sources: [] };
      setData((current) => addCompany(current, created));
      return created;
    },
    setDealStatus: (id, status) => setData((current) => updateCompany(current, { ...current.companies.find((company) => company.id === id)!, dealStatus: status })),
    saveMemo: (memo) => setData((current) => upsertResearch(current, memo)),
    toggleTask: (id) => setData((current) => {
      const task = current.tasks.find((item) => item.id === id);
      if (!task) return current;
      const complete = task.status !== 'Complete';
      return updateTask(current, { ...task, status: complete ? 'Complete' : 'Open', completedDate: complete ? new Date().toISOString().slice(0, 10) : undefined });
    }),
    saveDecision: (decision) => setData((current) => addDecision(current, decision)),
    saveMarket: (market) => setData((current) => updateMarket(current, market)),
    saveMilestone: (milestone) => setData((current) => updateMilestone(current, milestone)),
    reset: () => setData(prototypeStore.reset())
  }), [data]);
  return <PrototypeContext.Provider value={value}>{children}</PrototypeContext.Provider>;
}

export function usePrototype() {
  const context = useContext(PrototypeContext);
  if (!context) throw new Error('usePrototype must be used inside PrototypeProvider');
  return context;
}
