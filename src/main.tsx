import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { PrototypeProvider } from './app/PrototypeContext';
import { AdminLayout } from './components/AdminLayout';
import { PublicLayout } from './components/PublicLayout';
import { AboutPage, CompaniesPage, CompanyDetailPage, HomePage, MarketDetailPage, MarketsPage, NewsletterPage, PortfolioPage, ResearchDetailPage, ResearchPage, SubmitPage, ThesisPage } from './pages/PublicPages';
import { AdminCompaniesPage, AdminMarketsPage, AdminOverviewPage, AdminResearchPage, DealflowPage, DecisionsPage, MilestonesPage, SettingsPage, TasksPage } from './pages/AdminPages';
import { ArrowLink, PageMeta } from './components/Shared';
import './styles.css';

function NotFound() { return <div className="not-found"><PageMeta title="Page not found" /><p className="eyebrow">404</p><h1>That page is not in the research archive.</h1><ArrowLink to="/">Return home</ArrowLink></div>; }
createRoot(document.getElementById('root')!).render(<StrictMode><PrototypeProvider><BrowserRouter><Routes><Route element={<PublicLayout />}><Route path="/" element={<HomePage />} /><Route path="/portfolio" element={<PortfolioPage />} /><Route path="/companies" element={<CompaniesPage />} /><Route path="/companies/:slug" element={<CompanyDetailPage />} /><Route path="/research" element={<ResearchPage />} /><Route path="/research/:slug" element={<ResearchDetailPage />} /><Route path="/markets" element={<MarketsPage />} /><Route path="/markets/:slug" element={<MarketDetailPage />} /><Route path="/thesis" element={<ThesisPage />} /><Route path="/about" element={<AboutPage />} /><Route path="/newsletter" element={<NewsletterPage />} /><Route path="/submit" element={<SubmitPage />} /></Route><Route path="/admin" element={<AdminLayout />}><Route index element={<AdminOverviewPage />} /><Route path="dealflow" element={<DealflowPage />} /><Route path="companies" element={<AdminCompaniesPage />} /><Route path="research" element={<AdminResearchPage />} /><Route path="decisions" element={<DecisionsPage />} /><Route path="markets" element={<AdminMarketsPage />} /><Route path="milestones" element={<MilestonesPage />} /><Route path="tasks" element={<TasksPage />} /><Route path="settings" element={<SettingsPage />} /></Route><Route path="/workspace" element={<Navigate to="/admin" replace />} /><Route path="*" element={<NotFound />} /></Routes></BrowserRouter></PrototypeProvider></StrictMode>);
