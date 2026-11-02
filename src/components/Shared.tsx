import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';
import { brand } from '../config/brand';
import { classNames } from '../lib/format';

type StructuredData = Record<string, unknown>;

const setMeta = (attribute: 'name' | 'property', key: string, content: string) => {
  let meta = document.querySelector(`meta[${attribute}="${key}"]`) as HTMLMetaElement | null;
  if (!meta) { meta = document.createElement('meta'); meta.setAttribute(attribute, key); document.head.append(meta); }
  meta.content = content;
};
const removeMeta = (attribute: 'name' | 'property', key: string) => document.querySelector(`meta[${attribute}="${key}"]`)?.remove();

export function PageMeta({ title, description = brand.description, noIndex = false, type = 'website', publishedTime, modifiedTime, schema }: { title: string; description?: string; noIndex?: boolean; type?: 'website' | 'article'; publishedTime?: string; modifiedTime?: string; schema?: StructuredData | StructuredData[] }) {
  const fullTitle = `${title} — Venture Native`;
  const canonicalUrl = new URL(window.location.pathname, brand.siteUrl).toString();
  document.title = fullTitle;
  setMeta('name', 'description', description);
  setMeta('name', 'author', brand.founder);
  setMeta('name', 'robots', noIndex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
  setMeta('property', 'og:type', type);
  setMeta('property', 'og:site_name', brand.name);
  setMeta('property', 'og:title', fullTitle);
  setMeta('property', 'og:description', description);
  setMeta('property', 'og:url', canonicalUrl);
  if (publishedTime) setMeta('property', 'article:published_time', publishedTime); else removeMeta('property', 'article:published_time');
  if (modifiedTime) setMeta('property', 'article:modified_time', modifiedTime); else removeMeta('property', 'article:modified_time');
  setMeta('name', 'twitter:card', 'summary');
  setMeta('name', 'twitter:title', fullTitle);
  setMeta('name', 'twitter:description', description);
  let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.append(canonical); }
  canonical.href = canonicalUrl;
  const globalSchema: StructuredData[] = [
    { '@context': 'https://schema.org', '@type': 'WebSite', name: brand.name, url: brand.siteUrl, description: brand.description, publisher: { '@type': 'Organization', name: brand.name } },
    { '@context': 'https://schema.org', '@type': 'Organization', name: brand.name, url: brand.siteUrl, founder: { '@type': 'Person', name: brand.founder } }
  ];
  const pageSchema = schema ? (Array.isArray(schema) ? schema : [schema]) : [];
  let structuredData = document.getElementById('venture-native-structured-data') as HTMLScriptElement | null;
  if (!structuredData) { structuredData = document.createElement('script'); structuredData.id = 'venture-native-structured-data'; structuredData.type = 'application/ld+json'; document.head.append(structuredData); }
  structuredData.textContent = JSON.stringify([...globalSchema, ...pageSchema]);
  return null;
}

export function Eyebrow({ children }: { children: ReactNode }) { return <p className="eyebrow">{children}</p>; }
export function ArrowLink({ to, children, className }: { to: string; children: ReactNode; className?: string }) { return <Link className={classNames('arrow-link', className)} to={to}>{children}<ArrowRight size={16} strokeWidth={1.5} /></Link>; }
export function TextButton({ children, type = 'button', onClick, className }: { children: ReactNode; type?: 'button' | 'submit'; onClick?: () => void; className?: string }) { return <button type={type} onClick={onClick} className={classNames('button', className)}>{children}</button>; }
export function BackLink({ to, children = 'Back' }: { to: string; children?: ReactNode }) { return <Link className="back-link" to={to}>← {children}</Link>; }
export function StatusPill({ children, tone }: { children: ReactNode; tone?: string }) { return <span className={classNames('status-pill', tone && `status-${tone.toLowerCase().replaceAll(' ', '-')}`)}>{children}</span>; }
export function EmptyState({ title, body }: { title: string; body: string }) { return <div className="empty-state"><h3>{title}</h3><p>{body}</p></div>; }
export function SectionHeading({ label, title, copy, action }: { label?: string; title: string; copy?: string; action?: ReactNode }) { return <div className="section-heading"><div>{label && <Eyebrow>{label}</Eyebrow>}<h2>{title}</h2>{copy && <p>{copy}</p>}</div>{action}</div>; }

export function EmailCapture({ compact = false }: { compact?: boolean }) {
  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const field = form.elements.namedItem('email') as HTMLInputElement;
    const message = form.querySelector('[role="status"]') as HTMLElement;
    if (!field.validity.valid) { message.textContent = 'Enter a valid email address to continue.'; return; }
    message.textContent = 'Demo subscription confirmed locally — no email was sent.';
    form.reset();
  };
  return <form className={classNames('email-capture', compact && 'compact')} onSubmit={submit} noValidate><label className="sr-only" htmlFor={compact ? 'footer-email' : 'newsletter-email'}>Email address</label><input id={compact ? 'footer-email' : 'newsletter-email'} name="email" type="email" placeholder="Email address" required /><TextButton type="submit">Subscribe</TextButton><p role="status" aria-live="polite" className="form-message" /></form>;
}
