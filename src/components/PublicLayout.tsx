import { useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { brand } from '../config/brand';
import { EmailCapture } from './Shared';

const nav = [{ to: '/portfolio', label: 'Portfolio' }, { to: '/research', label: 'Research' }, { to: '/markets', label: 'Markets' }, { to: '/about', label: 'About' }];
export function PublicLayout() {
  const [open, setOpen] = useState(false);
  return <><a className="skip-link" href="#main-content">Skip to content</a><header className="public-nav"><Link to="/" className="wordmark" aria-label="Venture Native home">{brand.name}</Link><nav className="desktop-nav" aria-label="Main navigation">{nav.map((item) => <NavLink key={item.to} to={item.to}>{item.label}</NavLink>)}</nav><div className="nav-actions"><Link className="button nav-cta" to="/research">Explore Research</Link><button className="menu-button" aria-label="Open menu" aria-expanded={open} onClick={() => setOpen(!open)}><span /><span /></button></div>{open && <nav className="mobile-nav" aria-label="Mobile navigation">{[...nav, { to: '/thesis', label: 'Thesis' }, { to: '/newsletter', label: 'Newsletter' }].map((item) => <NavLink key={item.to} to={item.to} onClick={() => setOpen(false)}>{item.label}</NavLink>)}</nav>}</header><main id="main-content"><Outlet /></main><Footer /></>;
}
function Footer() { return <footer className="site-footer"><div className="footer-grid"><div><Link to="/" className="wordmark">{brand.name}</Link><p>{brand.description}</p></div><div className="footer-links"><Link to="/portfolio">Portfolio</Link><Link to="/research">Research</Link><Link to="/markets">Markets</Link><Link to="/thesis">Thesis</Link><Link to="/about">About</Link><Link to="/newsletter">Newsletter</Link></div><div><p className="footer-label">Notes, when there is something worth sharing.</p><EmailCapture compact /></div></div><div className="footer-bottom"><p>© {new Date().getFullYear()} Venture Native</p><a href={brand.social.instagram} target="_blank" rel="noreferrer">Instagram</a><p>{brand.disclosure}</p></div></footer>; }
