import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award, BadgeCheck } from 'lucide-react';
import config from '../config';
import './Certifications.css';

gsap.registerPlugin(ScrollTrigger);

const iconForIndex = (i) => i === 0
  ? <BadgeCheck size={36} strokeWidth={1.5} />
  : <Award size={36} strokeWidth={1.5} />;

const Certifications = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.cert-card', { opacity: 0, y: 50 }, {
        opacity: 1, y: 0, stagger: 0.15, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="certs section-spacer">
      <div className="container">
        
        <div className="section-label">
          <span className="label gradient-label">Validation</span>
          <h2 className="heading-2">Certified Expertise.</h2>
          <p className="body-lg" style={{ maxWidth: 500, marginTop: '0.5rem' }}>
            Industry-recognized certifications confirming expertise in scalable data architecture and analytics.
          </p>
        </div>

        <div className="cert-grid">
          {config.certifications.map((cert, i) => (
            <div key={i} className="bento-card cert-card">
              <div className="cert-icon" style={{ color: cert.color }}>
                {iconForIndex(i)}
              </div>
              <div className="cert-info">
                <span className="label" style={{ color: cert.color, letterSpacing: '0.1em' }}>{cert.code}</span>
                <h3 className="heading-3">{cert.title}</h3>
                <span className="body-lg" style={{ fontSize: '0.9rem' }}>{cert.issuer}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certifications;
