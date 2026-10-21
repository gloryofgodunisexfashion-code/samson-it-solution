import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDown, ArrowDownRight, ArrowRight, ArrowUpRight, Menu, X, Code2, PanelsTopLeft, Smartphone, Database, Sparkles, ShieldCheck, Zap, Star, Send, CheckCircle2, Github, Linkedin, Mail, Globe2, Layers3, MoveUpRight, Play, MousePointer2, Workflow, ChevronRight } from 'lucide-react';
import './style.css';

const projects = [
  { no: '01', category: 'WEB EXPERIENCE', title: 'A digital home for ambitious businesses.', type: 'Business website concept', tone: 'commerce', image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=85', tags: ['Brand experience', 'Responsive design', 'SEO'], description: 'A confident, conversion-focused web presence with a clear story and a considered visual system.' },
  { no: '02', category: 'PRODUCT DESIGN · ENGINEERING', title: 'Complex work, made beautifully simple.', type: 'SaaS dashboard concept', tone: 'product', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=85', tags: ['Product UI', 'Analytics', 'Automation'], description: 'A dashboard concept that turns busy data into a calm, useful workspace.' },
  { no: '03', category: 'COMMERCE · DIGITAL STORYTELLING', title: 'A better way to discover the good stuff.', type: 'E-commerce concept', tone: 'retail', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1400&q=85', tags: ['Online store', 'Mobile-first', 'Customer journey'], description: 'A product-led shopping experience built around discovery, trust and effortless browsing.' }
];
const services = [
  { icon: PanelsTopLeft, n: '01', title: 'Websites & digital presence', desc: 'Distinctive, fast websites that tell your story clearly and help the right people take action.' },
  { icon: Code2, n: '02', title: 'Web apps & platforms', desc: 'Useful digital products, portals and dashboards designed around real people and real workflows.' },
  { icon: Smartphone, n: '03', title: 'Mobile-first experiences', desc: 'Responsive interfaces that feel natural on phones, tablets, laptops and beyond.' },
  { icon: Database, n: '04', title: 'Backend & integrations', desc: 'Secure data, APIs, databases and connected services that help your product work end to end.' }
];
const technologies = ['React', 'Next.js', 'JavaScript', 'TypeScript', 'Node.js', 'MongoDB', 'Supabase', 'Firebase', 'Tailwind CSS', 'Vercel'];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [reviewSent, setReviewSent] = useState(false);
  const [rating, setRating] = useState(5);
  const [review, setReview] = useState({ name: '', text: '' });
  const [contact, setContact] = useState({ name: '', email: '', service: 'Website design & development', details: '' });
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const nodes = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) { nodes.forEach(n => n.classList.add('is-visible')); return; }
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
    }), { threshold: 0.12 });
    nodes.forEach(node => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  const submitContact = (e) => { e.preventDefault(); setSent(true); };
  const submitReview = (e) => { e.preventDefault(); setReviewSent(true); };
  return <div className="site-shell">
    <div className="announcement"><span className="pulse-dot" /> INDEPENDENT DIGITAL STUDIO <span className="announce-divider">/</span> BUILDING WITH PURPOSE <ArrowUpRight size={13}/></div>
    <header className="nav-wrap">
      <a className="brand" href="#home" onClick={closeMenu} aria-label="Samson IT Solution home"><span className="brand-symbol">S<span>.</span></span><span className="brand-name">SAMSON <b>IT SOLUTION</b></span></a>
      <nav className={'nav-links ' + (menuOpen ? 'nav-open' : '')} aria-label="Main navigation">
        <a href="#services" onClick={closeMenu}>Services</a><a href="#work" onClick={closeMenu}>Selected work</a><a href="#about" onClick={closeMenu}>About</a><a href="#reviews" onClick={closeMenu}>Reviews</a><a href="#contact" className="nav-cta" onClick={closeMenu}>Start a project <ArrowUpRight size={15}/></a>
      </nav>
      <button className="mobile-menu" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={23}/> : <Menu size={23}/>}</button>
    </header>
    <main>
      <section className="hero" id="home">
        <div className="hero-noise" aria-hidden="true"/><div className="hero-glow glow-one"/><div className="hero-glow glow-two"/>
        <div className="hero-inner">
          <div className="hero-copy reveal">
            <div className="eyebrow"><span className="eyebrow-line"/> DESIGN-LED. TECHNOLOGY-POWERED.</div>
            <h1>Make your next<br/>move <span className="hero-gradient">mean more.</span></h1>
            <p className="hero-lede">We turn bold ideas into thoughtful digital experiences — websites, products and software built to move your business forward.</p>
            <div className="hero-actions"><a href="#contact" className="btn btn-primary">Let’s build something <ArrowUpRight size={17}/></a><a href="#work" className="btn btn-quiet">Explore our work <ArrowDownRight size={17}/></a></div>
            <div className="hero-proof"><div className="proof-avatars"><span>S</span><span>✳</span><span>↗</span></div><div><b>Small studio. Big-picture thinking.</b><small>Purposeful digital work, from idea to launch.</small></div></div>
          </div>
          <div className="hero-visual reveal">
            <div className="visual-orbit orbit-a"/><div className="visual-orbit orbit-b"/>
            <div className="visual-label label-top"><span className="label-dot"/> DIGITAL EXPERIENCES <span>01 — 03</span></div>
            <div className="showcase-window">
              <div className="window-top"><div className="window-controls"><i/><i/><i/></div><span className="window-url"><ShieldCheck size={11}/> samson.studio / preview</span><MoveUpRight size={13}/></div>
              <div className="showcase-content">
                <div className="showcase-nav"><span className="mini-brand">S<span>.</span></span><span>WORK&nbsp;&nbsp; ABOUT&nbsp;&nbsp; CONTACT</span><span className="mini-menu">☰</span></div>
                <div className="showcase-copy"><span className="showcase-kicker">BUILT FOR WHAT'S NEXT</span><h2>Good ideas<br/>deserve <em>great</em><br/>digital homes.</h2><span className="showcase-link">EXPLORE THE EXPERIENCE <ArrowUpRight size={11}/></span></div>
                <div className="showcase-image"><img src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=85" alt="Bright contemporary creative workspace"/><div className="image-index">01 / DIGITAL STUDIO</div></div>
                <div className="showcase-bottom"><span>STRATEGY / DESIGN / DEVELOPMENT</span><span>MADE WITH INTENTION ↗</span></div>
              </div>
            </div>
            <div className="floating-note note-speed"><span className="float-icon"><Zap size={16}/></span><span><b>Made to move</b><small>Fast. Fluid. Focused.</small></span></div>
            <div className="floating-note note-stack"><span className="stack-mark"><Layers3 size={17}/></span><span><b>One clear vision</b><small>Design meets technology</small></span></div>
            <div className="visual-caption"><span>01</span><span>IDEA → EXPERIENCE → IMPACT</span><span className="caption-line"/></div>
          </div>
        </div>
        <div className="hero-bottom section-pad"><span>INDEPENDENT BY DESIGN</span><span className="hero-bottom-center"><span className="scroll-line"/> SCROLL TO EXPLORE</span><span>LAGOS, NIGERIA · WORKING WORLDWIDE</span></div>
      </section>
      <section className="statement section-pad reveal"><div className="statement-index">01 / THE BELIEF</div><p>Good technology should feel <span>less like technology</span> — and more like the thing that finally makes everything click.</p><a href="#about" className="round-link" aria-label="Learn about us"><ArrowDown size={20}/></a></section>
      <section className="value-strip section-pad"><div><span className="strip-icon"><Workflow size={18}/></span><span>Strategy before pixels</span></div><div><span className="strip-icon"><ShieldCheck size={18}/></span><span>Built with care</span></div><div><span className="strip-icon"><Zap size={18}/></span><span>Speed with purpose</span></div><div><span className="strip-icon"><Globe2 size={18}/></span><span>Every screen, considered</span></div></section>
      <section className="section-pad services-section" id="services">
        <div className="section-heading reveal"><div><div className="eyebrow"><span className="eyebrow-line"/> WHAT WE DO</div><h2>From first thought<br/>to <span className="muted-heading">finished product.</span></h2></div><p>Clear thinking, considered design and dependable technology — working together to solve the right problem.</p></div>
        <div className="services-grid">{services.map((s,i) => <article className="service-card reveal" style={{'--delay': i * 90 + 'ms'}} key={s.n}><div className="service-top"><span className="service-icon"><s.icon size={21}/></span><span className="service-no">{s.n}</span></div><h3>{s.title}</h3><p>{s.desc}</p><a href="#contact" className="circle-arrow" aria-label={'Ask about ' + s.title}><ArrowUpRight size={17}/></a></article>)}</div>
      </section>
      <section className="work-section section-pad" id="work">
        <div className="section-heading reveal"><div><div className="eyebrow"><span className="eyebrow-line"/> SELECTED CONCEPTS</div><h2>Ideas, given<br/><span className="muted-heading">a place to live.</span></h2></div><p>A glimpse of the experiences we love to create. These are visual concepts, not claimed client projects — your real work can take centre stage here.</p></div>
        <div className="project-list">{projects.map((p,i) => <article className={'project-row reveal project-' + p.tone} style={{'--delay': i * 100 + 'ms'}} key={p.no}><a href="#contact" className="project-art" aria-label={'Discuss a project like ' + p.type}><img src={p.image} alt="" loading="lazy"/><div className="project-image-overlay"/><span className="project-number">{p.no} <span> / 03</span></span><span className="project-image-label">{p.category}</span><span className="project-open"><ArrowUpRight size={22}/></span><span className="project-art-caption">{p.tone === 'commerce' ? 'A digital home for business' : p.tone === 'product' ? 'Clarity through data' : 'An experience worth exploring'}</span></a><div className="project-info"><div className="project-category">{p.category}</div><h3>{p.title}</h3><span className="project-type">{p.type}</span><p>{p.description}</p><div className="tag-list">{p.tags.map(t => <span key={t}>{t}</span>)}</div><a href="#contact" className="project-link">Discuss a similar project <ArrowUpRight size={16}/></a></div></article>)}</div>
        <div className="work-note reveal"><span className="note-star">✳</span><p><b>Your real projects deserve the spotlight.</b> Send over your live websites, screenshots or project images and we’ll replace these concept visuals with your actual portfolio.</p></div>
      </section>
      <section className="process-section section-pad"><div className="section-heading reveal"><div><div className="eyebrow"><span className="eyebrow-line"/> HOW WE WORK</div><h2>Clear steps.<br/><span className="muted-heading">Better outcomes.</span></h2></div><p>No mystery process. Just shared goals, thoughtful execution and a focus on the details that matter.</p></div><div className="process-grid">{[{n:'01',t:'Discover',d:'Understand the people, problem and outcome before jumping into solutions.'},{n:'02',t:'Shape',d:'Turn the brief into a clear plan, a strong visual direction and a useful experience.'},{n:'03',t:'Build',d:'Develop, test and refine with performance, accessibility and reliability in mind.'},{n:'04',t:'Launch & grow',d:'Put it into the world, learn from real use and keep making it better.'}].map((p,i)=><div className="process-item reveal" style={{'--delay':i*80+'ms'}} key={p.n}><span className="process-number">{p.n}</span><div className="process-arrow"><ArrowUpRight size={18}/></div><h3>{p.t}</h3><p>{p.d}</p></div>)}</div></section>
      <section className="tech-section section-pad"><div className="tech-intro reveal"><div className="eyebrow"><span className="eyebrow-line"/> THE TOOLKIT</div><h2>Thoughtful design.<br/><span className="muted-heading">Solid foundations.</span></h2><p>We choose tools for the job — creating digital products that are maintainable, responsive and ready to evolve.</p></div><div className="tech-list reveal">{technologies.map((t,i)=><span key={t} style={{'--delay':i*45+'ms'}}>{t}<ArrowUpRight size={12}/></span>)}</div></section>
      <section className="about-section section-pad" id="about"><div className="about-visual reveal"><div className="about-orb"><div className="orb-ring"/><div className="orb-ring ring-two"/><div className="orb-text">THOUGHTFUL<br/>BY DESIGN<span>✳</span></div><div className="orb-cross cross-a">+</div><div className="orb-cross cross-b">+</div></div><div className="about-visual-caption">INDEPENDENT STUDIO / EST. WITH INTENTION</div></div><div className="about-copy reveal"><div className="eyebrow"><span className="eyebrow-line"/> A LITTLE ABOUT US</div><h2>Technology should make things <span className="gradient-text">feel simpler.</span></h2><p>SAMSON IT SOLUTION brings design and development together to create digital tools that are useful, clear and built around people. No unnecessary complexity. Just purposeful work, done with care.</p><div className="about-stats"><div><b>01<span>—</span></b><small>Listen first</small></div><div><b>02<span>—</span></b><small>Build thoughtfully</small></div><div><b>03<span>—</span></b><small>Improve together</small></div></div><a href="#contact" className="text-link">Let’s build something useful <ArrowRight size={16}/></a></div></section>
      <section className="review-section section-pad" id="reviews"><div className="section-heading reveal"><div><div className="eyebrow"><span className="eyebrow-line"/> CLIENT FEEDBACK</div><h2>Trust is earned.<br/><span className="muted-heading">One project at a time.</span></h2></div><p>Have we worked together? Your honest feedback helps future clients understand what it’s like to work with us.</p></div><div className="review-content"><div className="review-promise reveal"><div className="stars">{[1,2,3,4,5].map(n => <Star key={n} size={17} fill="currentColor"/>)}</div><h3>Have we worked together?</h3><p>Share an honest review about your experience working with us.</p><div className="review-quote-mark">“</div><small>Reviews are submitted for review; public moderation will be connected in the full build.</small></div><form className="review-form reveal" onSubmit={e=>{e.preventDefault();setReviewSent(true);}}>{reviewSent ? <div className="success-state"><CheckCircle2 size={30}/><h3>Thanks for your feedback.</h3><p>This prototype does not yet store reviews on a server. A secure, moderated review system is part of the next phase.</p><button className="btn btn-secondary" type="button" onClick={() => {setReviewSent(false);setReview({name:'',text:''})}}>Write another</button></div> : <><label>Your name<input required value={review.name} onChange={e=>setReview({...review,name:e.target.value})} placeholder="Name or business"/></label><label>Your rating<div className="rating-select">{[1,2,3,4,5].map(n=><button type="button" key={n} className={n<=rating?'selected':''} aria-label={n+' stars'} onClick={()=>setRating(n)}><Star size={22} fill={n<=rating?'currentColor':'none'}/></button>)}</div></label><label>Your review<textarea required minLength={10} rows="3" value={review.text} onChange={e=>setReview({...review,text:e.target.value})} placeholder="Tell us about your experience…"/></label><button className="btn btn-primary form-submit" type="submit">Submit review <Send size={15}/></button></>}</form></div></section>
      <section className="contact-section section-pad" id="contact"><div className="contact-head reveal"><div className="eyebrow"><span className="eyebrow-line"/> HAVE A PROJECT IN MIND?</div><h2>Let’s make your<br/><span className="gradient-text">next idea real.</span></h2><p>Tell us what you’re working on. We’ll take it from there, one thoughtful step at a time.</p><a href="mailto:hello@samsonitsolution.com" className="contact-email-link">Prefer email? Let’s talk <ArrowUpRight size={15}/></a></div><div className="contact-grid"><div className="contact-aside reveal"><div className="contact-detail"><span className="contact-icon"><Mail size={18}/></span><div><small>EMAIL</small><b>Start a conversation</b><span>Use the form to tell us about your project.</span></div></div><div className="contact-detail"><span className="contact-icon"><Globe2 size={18}/></span><div><small>LOCATION</small><b>Lagos, Nigeria</b><span>Available for remote projects worldwide.</span></div></div><div className="contact-socials"><a href="https://github.com" aria-label="GitHub"><Github size={17}/></a><a href="https://linkedin.com" aria-label="LinkedIn"><Linkedin size={17}/></a><a href="mailto:hello@samsonitsolution.com" aria-label="Email"><Mail size={17}/></a><span>Replace these with your official social links.</span></div></div><form className="contact-form reveal" onSubmit={submitContact}>{sent ? <div className="success-state"><CheckCircle2 size={32}/><h3>Thanks — your idea is noted.</h3><p>This prototype does not send messages to a server yet. We’ll connect secure enquiry delivery when the backend is ready.</p><button className="btn btn-secondary" type="button" onClick={()=>setSent(false)}>Send another message</button></div> : <><div className="form-two"><label>Your name<input required value={contact.name} onChange={e=>setContact({...contact,name:e.target.value})} placeholder="What should we call you?"/></label><label>Email address<input type="email" required value={contact.email} onChange={e=>setContact({...contact,email:e.target.value})} placeholder="you@company.com"/></label></div><label>What do you need?<select value={contact.service} onChange={e=>setContact({...contact,service:e.target.value})}><option>Website design & development</option><option>Web application</option><option>E-commerce website</option><option>Backend & integrations</option><option>Something else</option></select></label><label>Tell us a little about it<textarea required rows="4" value={contact.details} onChange={e=>setContact({...contact,details:e.target.value})} placeholder="The idea, the challenge, the dream…"/></label><button className="btn btn-primary form-submit" type="submit">Send project enquiry <ArrowUpRight size={16}/></button><small className="form-disclaimer"><ShieldCheck size={13}/> Your details stay in this demo until secure message delivery is connected.</small></>}</form></div></section>
    </main>
    <footer className="footer"><a className="brand" href="#home"><span className="brand-symbol">S<span>.</span></span><span className="brand-name">SAMSON <b>IT SOLUTION</b></span></a><span>© {new Date().getFullYear()} SAMSON IT SOLUTION. Built with purpose.</span><a href="#home" className="back-top">BACK TO TOP ↑</a></footer>
  </div>;
}
createRoot(document.getElementById('root')).render(<App/>);
