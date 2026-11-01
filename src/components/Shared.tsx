import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';
import { classNames } from '../lib/format';

export function PageMeta({ title, description }: { title: string; description?: string }) {
  document.title = `${title} — Venture Native`;
  const meta = document.querySelector('meta[name="description"]');
  if (meta && description) meta.setAttribute('content', description);
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
