import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Database, LineChart, Cpu, Lightbulb, MousePointerClick, Zap } from 'lucide-react';
import config from '../config';
import './Story.css';

gsap.registerPlugin(ScrollTrigger);

const iconMap = {
  dax: <LineChart size={28} />,
  sql: <Database size={28} />,
  drill: <MousePointerClick size={28} />,
  tooltip: <Lightbulb size={28} />,
  ai: <Cpu size={28} />,
  theme: <Zap size={28} />,
};

const Story = () => {
  const sectionRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(gridRef.current.children, 
        { opacity: 0, y: 100, rotateX: -15 },
        { 
          opacity: 1, y: 0, rotateX: 0, 
          stagger: 0.1, duration: 1.2, ease: 'power4.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="story section-spacer">
      <div className="container">
        <div className="section-label">
          <span className="label gradient-label">Toolbox</span>
          <h2 className="heading-2">What I Bring.</h2>
        </div>

        <div ref={gridRef} className="bento-grid">
          {/* Intro card */}
          <div data-id="intro" className="bento-card">
            <Zap className="bento-icon accent-blue" size={32} />
            <h2 className="heading-2" style={{ marginTop: 'auto' }}>Data is a story<br/>waiting to be told.</h2>
          </div>

          {/* Skill cards from config */}
          {config.skills.map((s) => (
            <div key={s.id} data-id={s.id} className="bento-card">
              <div className="bento-content">
                <div className="bento-icon">{iconMap[s.id]}</div>
                <h3 className="heading-3">{s.title}</h3>
                <p className="body-lg">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Story;
