import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  MousePointer2, Database, LineChart, Cpu,
  Lightbulb, MousePointerClick, Zap, BadgeCheck, Award
} from 'lucide-react';
import './Intro.css';

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { id: 'dax',     icon: <LineChart size={24} />,         title: 'Advanced DAX',        desc: 'Complex measures & calculated columns' },
  { id: 'sql',     icon: <Database size={24} />,          title: 'Data Modeling & SQL',  desc: 'Star schemas, joins & CTEs' },
  { id: 'drill',   icon: <MousePointerClick size={24} />, title: 'Drill-through',       desc: 'Interactive navigation paths' },
  { id: 'tooltip', icon: <Lightbulb size={24} />,         title: 'Custom Tooltips',     desc: 'Rich context on hover' },
  { id: 'ai',      icon: <Cpu size={24} />,               title: 'AI Insights',         desc: 'Key Influencers & Decomposition Trees' },
  { id: 'theme',   icon: <Zap size={24} />,               title: 'Rich Themes',         desc: 'Custom branded dashboards' },
];

const certs = [
  {
    icon: <BadgeCheck size={28} strokeWidth={1.5} />,
    title: 'Microsoft Certified: Power BI Data Analyst Associate',
    code: 'PL-300',
    color: '#60a5fa',
  },
  {
    icon: <Award size={28} strokeWidth={1.5} />,
    title: 'Microsoft Office Specialist: Excel Expert 2019',
    code: 'MOS Expert',
    color: '#34d399',
  }
];

const Intro = () => {
  const sectionRef = useRef(null);
  const heroTextRef = useRef(null);
  const subtitleRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero entrance
      const tl = gsap.timeline({ defaults: { ease: 'power4.out', duration: 1.5 } });
      tl.fromTo(heroTextRef.current,
        { y: 120, opacity: 0, scale: 0.92 },
        { y: 0, opacity: 1, scale: 1, delay: 0.2 }
      )
      .fromTo(subtitleRef.current.children,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.08 },
        '-=1.0'
      )
      .fromTo(scrollRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 2 },
        '-=0.5'
      );

      // Skills entrance
      gsap.fromTo('.skill-item',
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, stagger: 0.07, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: '.skills-grid', start: 'top 85%' }
        }
      );

      // Certs entrance
      gsap.fromTo('.cert-card',
        { opacity: 0, x: -30 },
        {
          opacity: 1, x: 0, stagger: 0.12, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: '.cert-row', start: 'top 85%' }
        }
      );

      // Mouse parallax on hero text
      const handleMouse = (e) => {
        const xPos = (e.clientX / window.innerWidth - 0.5) * 30;
        const yPos = (e.clientY / window.innerHeight - 0.5) * 30;
        gsap.to(heroTextRef.current, {
          backgroundPosition: `${50 + xPos}% ${50 + yPos}%`,
          duration: 1, ease: 'power2.out'
        });
      };
      window.addEventListener('mousemove', handleMouse);
      return () => window.removeEventListener('mousemove', handleMouse);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="intro">

      {/* Background gradient orbs */}
      <div className="intro__bg">
        <div className="intro__orb intro__orb--1" />
        <div className="intro__orb intro__orb--2" />
        <div className="intro__orb intro__orb--3" />
      </div>

      {/* ===== HERO BLOCK ===== */}
      <div className="intro__hero">
        <h1 ref={heroTextRef} className="intro__name">AZIZ.</h1>
        <div ref={subtitleRef} className="intro__subtitle">
          <p className="intro__role">Strategic Data Analyst</p>
          <div className="intro__divider" />
          <p className="intro__tagline">Transforming raw complexity into spatial clarity.</p>
        </div>
        <div ref={scrollRef} className="intro__scroll">
          <MousePointer2 size={18} strokeWidth={1.5} />
          <span>Scroll to Explore</span>
        </div>
      </div>

      {/* ===== SKILLS GRID ===== */}
      <div className="intro__section container">
        <div className="section-label">
          <span className="label">Toolbox</span>
          <h2 className="heading-2">What I Bring.</h2>
        </div>

        <div className="skills-grid">
          {skills.map(s => (
            <div key={s.id} className="skill-item">
              <div className="skill-icon">{s.icon}</div>
              <div>
                <h3 className="skill-title">{s.title}</h3>
                <p className="skill-desc">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== CERTIFICATIONS ===== */}
      <div className="intro__section container">
        <div className="section-label">
          <span className="label">Validation</span>
          <h2 className="heading-2">Certified Expertise.</h2>
        </div>

        <div className="cert-row">
          {certs.map((c, i) => (
            <div key={i} className="cert-card">
              <div className="cert-icon" style={{ color: c.color }}>{c.icon}</div>
              <div className="cert-info">
                <span className="cert-code" style={{ color: c.color }}>{c.code}</span>
                <p className="cert-title">{c.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Intro;
