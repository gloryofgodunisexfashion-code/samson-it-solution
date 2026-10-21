import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDownRight, ArrowRight, ArrowUpRight, Menu, X, Code2, PanelsTopLeft, Smartphone, Database, Sparkles, ShieldCheck, Zap, Star, Send, CheckCircle2, Github, Linkedin, Mail, Globe2, Layers3 } from 'lucide-react';
import './style.css';

const projects = [
  { no: '01', category: 'WEB DESIGN · DEVELOPMENT', title: 'Digital experiences that feel effortless.', type: 'Business website', tone: 'blue', mark: 'S', tags: ['React', 'Responsive UI', 'SEO'] },
  { no: '02', category: 'PRODUCT · ENGINEERING', title: 'A smarter way to manage the moving parts.', type: 'Web application', tone: 'violet', mark: '◈', tags: ['Dashboard', 'Automation', 'Analytics'] },
  { no: '03', category: 'E-COMMERCE · STRATEGY', title: 'Turning a great product into a great journey.', type: 'Online store', tone: 'orange', mark: '✳', tags: ['E-commerce', 'Payments', 'Mobile-first'] }
];
const services = [
  { icon: PanelsTopLeft, n: '01', title: 'Websites that work hard', desc: 'Fast, responsive websites that make your business look credible and help turn visitors into customers.' },
  { icon: Code2, n: '02', title: 'Web apps & platforms', desc: 'Thoughtful interfaces and reliable functionality for the tools your team or customers use every day.' },
  { icon: Smartphone, n: '03', title: 'Mobile-first experiences', desc: 'Clean, intuitive experiences designed to feel natural on phones, tablets, laptops and beyond.' },
  { icon: Database, n: '04', title: 'Backend & integrations', desc: 'Connect your product to the data, APIs, automations and services it needs to grow.' }
];
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [reviewSent, setReviewSent] = useState(false);
  const [rating, setRating] = useState(5);
  const [review, setReview] = useState({ name: '', text: '' });
  const [contact, setContact] = useState({ name: '', email: '', service: 'Website design & development', details: '' });
  const closeMenu = () => setMenuOpen(false);
  const submitContact = (e) => { e.preventDefault(); setSent(true); };
  const submitReview = (e) => { e.preventDefault(); setReviewSent(true); };
  return <div className="site-shell">
    <div className="announcement"><span className="pulse-dot" /> INDEPENDENT DIGITAL STUDIO <span className="announce-divider">/</span> OPEN FOR SELECT PROJECTS <ArrowUpRight size={13}/></div>
    <header className="nav-wrap">
      <a className="brand" href="#home" onClick={closeMenu}><span className="brand-symbol">S<span>.</span></span><span className="brand-name">SAMSON <b>IT SOLUTION</b></span></a>
      <button className="mobile-menu" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
      <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
        <a href="#services" onClick={closeMenu}>Services</a><a href="#work" onClick={closeMenu}>Selected work</a><a href="#about" onClick={closeMenu}>About</a><a href="#reviews" onClick={closeMenu}>Reviews</a>
        <a className="nav-cta" href="#contact" onClick={closeMenu}>Let’s talk <ArrowUpRight size={15}/></a>
      </nav>
    </header>
    <main>
      <section className="hero section-pad" id="home">
        <div className="hero-grid-glow" />
        <div className="eyebrow"><span className="eyebrow-line"/> DIGITAL CRAFT. REAL-WORLD IMPACT.</div>
        <h1>Good ideas deserve<br/> <span className="gradient-text">better technology.</span></h1>
        <div className="hero-bottom">
          <p className="hero-copy">We design and build thoughtful digital experiences — from standout websites to useful software — that help ambitious people and businesses move forward.</p>
          <div className="hero-actions"><a href="#work" className="btn btn-primary">Explore our work <ArrowUpRight size={17}/></a><a href="#services" className="text-link">What we do <ArrowDownRight size={16}/></a></div>
        </div>
        <div className="hero-art" aria-label="Abstract digital design illustration">
          <div className="orbit orbit-one"></div><div className="orbit orbit-two"></div><div className="orbit orbit-three"></div>
          <div className="art-core"><span>S</span><i>IT SOLUTION</i></div>
          <div className="float-card card-top"><span className="mini-icon"><Zap size={15}/></span><span><b>Built with purpose</b><small>Design meets engineering</small></span></div>
          <div className="float-card card-bottom"><span className="mini-icon green"><CheckCircle2 size={15}/></span><span><b>Ready to grow</b><small>Responsive by default</small></span></div>
          <div className="art-caption">IDEAS → INTERFACES → IMPACT</div>
        </div>
        <div className="hero-foot"><span><span className="scroll-mark">↓</span> SCROLL TO EXPLORE</span><span>LAGOS, NIGERIA · WORKING WORLDWIDE</span></div>
      </section>
      <section className="trust-strip"><div><span className="strip-icon"><Layers3 size={18}/></span><span>Strategy-led thinking</span></div><div><span className="strip-icon"><ShieldCheck size={18}/></span><span>Quality & care</span></div><div><span className="strip-icon"><Globe2 size={18}/></span><span>Built for every screen</span></div><div><span className="strip-icon"><Sparkles size={18}/></span><span>Made to stand out</span></div></section>
      <section className="section-pad services-section" id="services">
        <div className="section-heading"><div><div className="eyebrow"><span className="eyebrow-line"/> HOW WE HELP</div><h2>From first thought<br/>to <span className="muted-heading">finished product.</span></h2></div><p>Clear thinking, considered design and dependable technology — all working together to solve the right problem.</p></div>
        <div className="services-grid">{services.map(s => <article className="service-card" key={s.n}><div className="service-top"><span className="service-icon"><s.icon size={21}/></span><span className="service-no">{s.n}</span></div><h3>{s.title}</h3><p>{s.desc}</p><a href="#contact" className="circle-arrow" aria-label={'Ask about ' + s.title}><ArrowUpRight size={17}/></a></article>)}</div>
      </section>
      <section className="section-pad work-section" id="work">
        <div className="section-heading"><div><div className="eyebrow"><span className="eyebrow-line"/> SELECTED WORK</div><h2>Made with intent.<br/><span className="muted-heading">Built to matter.</span></h2></div><p>Every project starts with a real goal. These sample project concepts show how your portfolio can present your work once your real projects are added.</p></div>
        <div className="project-list">{projects.map(p => <article className="project-row" key={p.no}><div className={'project-art ' + p.tone}><div className="project-window"><div className="window-dots"><i/><i/><i/></div><div className="mock-layout"><div className="mock-sidebar"/><div className="mock-content"><span className="mock-line wide"/><span className="mock-line"/><div className="mock-panels"><i/><i/><i/></div><div className="mock-chart"><b/><b/><b/><b/><b/><b/><b/></div></div></div></div><span className="project-number">{p.no}</span><span className="project-mark">{p.mark}</span></div><div className="project-info"><div className="project-category">{p.category}</div><h3>{p.title}</h3><span className="project-type">{p.type}</span><div className="tag-list">{p.tags.map(t => <span key={t}>{t}</span>)}</div><a href="#contact" className="project-link">Discuss a similar project <ArrowUpRight size={16}/></a></div></article>)}</div>
        <div className="work-note"><span className="note-star">✳</span><p><b>Your work belongs here.</b> These are visual placeholders, not claimed client projects. We’ll replace them with your real projects, images and live links.</p></div>
      </section>
      <section className="about-section section-pad" id="about"><div className="about-orb"><div className="orb-ring"/><div className="orb-text">THOUGHTFUL<br/>BY DESIGN<span>✳</span></div></div><div className="about-copy"><div className="eyebrow"><span className="eyebrow-line"/> A LITTLE ABOUT US</div><h2>Technology should make things <span className="gradient-text">feel simpler.</span></h2><p>SAMSON IT SOLUTION brings design and development together to create digital tools that are useful, clear and built around people. No unnecessary complexity. Just purposeful work, done with care.</p><div className="about-stats"><div><b>01<span>—</span></b><small>Listen first</small></div><div><b>02<span>—</span></b><small>Build thoughtfully</small></div><div><b>03<span>—</span></b><small>Improve together</small></div></div><a href="#contact" className="text-link">Let’s build something useful <ArrowRight size={16}/></a></div></section>
      <section className="review-section section-pad" id="reviews"><div className="section-heading"><div><div className="eyebrow"><span className="eyebrow-line"/> CLIENT FEEDBACK</div><h2>Trust is earned.<br/><span className="muted-heading">One project at a time.</span></h2></div><p>Real feedback matters. Clients will be able to leave a review here; reviews should be verified and approved before they appear publicly.</p></div><div className="review-content"><div className="review-promise"><div className="stars">{[1,2,3,4,5].map(n => <Star key={n} size={17} fill="currentColor"/>)}</div><h3>Have we worked together?</h3><p>Your honest feedback helps future clients know what it’s like to work with us.</p><div className="review-quote-mark">“</div><small>Reviews submitted in this prototype are not published or stored yet.</small></div><form className="review-form" onSubmit={submitReview}>{reviewSent ? <div className="success-state"><CheckCircle2 size={30}/><h3>Thanks for your feedback.</h3><p>This demo has recorded your submission only in the current page session. A secure, moderated review system will be connected in the full build.</p><button className="btn btn-secondary" type="button" onClick={() => {setReviewSent(false);setReview({name:'',text:''})}}>Write another</button></div> : <><label>Your name<input required value={review.name} onChange={e=>setReview({...review,name:e.target.value})} placeholder="Name or business"/></label><label>Your rating<div className="rating-select">{[1,2,3,4,5].map(n=><button type="button" key={n} className={n<=rating?'selected':''} aria-label={n+' stars'} onClick={()=>setRating(n)}><Star size={22} fill={n<=rating?'currentColor':'none'}/></button>)}</div></label><label>Your review<textarea required minLength={10} rows="3" value={review.text} onChange={e=>setReview({...review,text:e.target.value})} placeholder="Tell us about your experience…"/></label><button className="btn btn-primary form-submit" type="submit">Submit review <Send size={15}/></button></>}</form></div></section>
      <section className="contact-section section-pad" id="contact"><div className="contact-head"><div className="eyebrow"><span className="eyebrow-line"/> HAVE A PROJECT IN MIND?</div><h2>Let’s make your<br/><span className="gradient-text">next idea real.</span></h2><p>Tell us what you’re working on. We’ll take it from there, one thoughtful step at a time.</p></div><div className="contact-grid"><div className="contact-aside"><div className="contact-detail"><span className="contact-icon"><Mail size={18}/></span><div><small>EMAIL</small><b>Let’s connect</b><span>Use the form and we’ll add your real email in the admin setup.</span></div></div><div className="contact-detail"><span className="contact-icon"><Globe2 size={18}/></span><div><small>LOCATION</small><b>Lagos, Nigeria</b><span>Available for remote projects worldwide.</span></div></div><div className="contact-socials"><a href="https://github.com" aria-label="GitHub"><Github size={17}/></a><a href="https://linkedin.com" aria-label="LinkedIn"><Linkedin size={17}/></a><a href="mailto:hello@example.com" aria-label="Email"><Mail size={17}/></a><span>Social links are placeholders for now.</span></div></div><form className="contact-form" onSubmit={submitContact}>{sent ? <div className="success-state"><CheckCircle2 size={32}/><h3>Thanks — your idea is noted.</h3><p>This is a front-end prototype. Your message has not been sent to a server yet; we’ll connect a secure contact backend in the next phase.</p><button className="btn btn-secondary" type="button" onClick={()=>setSent(false)}>Send another message</button></div> : <><div className="form-two"><label>Your name<input required value={contact.name} onChange={e=>setContact({...contact,name:e.target.value})} placeholder="What should we call you?"/></label><label>Email address<input type="email" required value={contact.email} onChange={e=>setContact({...contact,email:e.target.value})} placeholder="you@company.com"/></label></div><label>What do you need?<select value={contact.service} onChange={e=>setContact({...contact,service:e.target.value})}><option>Website design & development</option><option>Web application</option><option>E-commerce website</option><option>Backend & integrations</option><option>Something else</option></select></label><label>Tell us a little about it<textarea required rows="4" value={contact.details} onChange={e=>setContact({...contact,details:e.target.value})} placeholder="The idea, the challenge, the dream…"/></label><button className="btn btn-primary form-submit" type="submit">Send project enquiry <ArrowUpRight size={16}/></button><small className="form-disclaimer"><ShieldCheck size={13}/> Your details will be handled with care. Server-side delivery will be added in the full build.</small></>}</form></div></section>
    </main>
    <footer className="footer"><a className="brand" href="#home"><span className="brand-symbol">S<span>.</span></span><span className="brand-name">SAMSON <b>IT SOLUTION</b></span></a><span>© {new Date().getFullYear()} SAMSON IT SOLUTION. Built with purpose.</span><a href="#home" className="back-top">BACK TO TOP ↑</a></footer>
  </div>;
}
createRoot(document.getElementById('root')).render(<App/>);