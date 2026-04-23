import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Play } from 'lucide-react';
import config from '../config';
import './Projects.css';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const triggerRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    // Only enable horizontal scroll on desktop
    const isMobile = window.innerWidth <= 768;
    if (isMobile) return;

    const ctx = gsap.context(() => {
      const amountToScroll = trackRef.current.offsetWidth - window.innerWidth;

      ScrollTrigger.create({
        trigger: triggerRef.current,
        start: 'top top',
        end: () => `+=${amountToScroll}`,
        pin: true,
        animation: gsap.to(trackRef.current, {
          x: -amountToScroll,
          ease: 'none',
        }),
        scrub: 1,
        invalidateOnRefresh: true,
      });

    }, triggerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={triggerRef} className="projects-trigger">

      <div ref={trackRef} className="projects-track">
        {config.projects.map((p, i) => (
          <div key={p.id} className="proj-slide">

            {/* Ambient color glow */}
            <div className="proj-ambient">
              <div className="proj-ambient__orb proj-ambient__orb--1"
                style={{ background: p.glow1 }} />
              <div className="proj-ambient__orb proj-ambient__orb--2"
                style={{ background: p.glow2 }} />
            </div>

            <div className="proj-slide__inner">

              <div className="proj-header">
                <span className="proj-label" style={{ color: p.accent }}>0{i + 1} — {p.pill}</span>
                <h3 className="proj-title">{p.title}</h3>
                <p className="proj-tagline">{p.tagline}</p>
              </div>

              <div className="proj-content-split">

                <div className="proj-iframe-bento">
                  <div className="bento-glass-header">
                    <span>Interactive Workspace</span>
                    <div className="traffic-dots">
                      <i></i><i></i><i></i>
                    </div>
                  </div>
                  <div className="iframe-wrapper">
                    <iframe
                      title={p.title}
                      src={`${p.iframe}&navContentPaneEnabled=false&filterPaneEnabled=false&fitToWidth=true`}
                      allowFullScreen={true}
                    />
                  </div>
                </div>

                {p.video && (
                  <div className="proj-video-bento" style={{ '--accent': p.accent }}>
                    <div className="video-bento-label">
                      <Play size={14} /> Feature Demo
                    </div>
                    <div className="video-wrapper">
                      <video controls preload="metadata" playsInline autoPlay muted loop>
                        <source src={p.video} type="video/mp4" />
                      </video>
                    </div>
                  </div>
                )}
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
