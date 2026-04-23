import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Play } from 'lucide-react';
import config from '../config';
import './Projects.css';

gsap.registerPlugin(ScrollTrigger);

/* Default native resolution — override per-project via nativeW/nativeH in config */
const DEFAULT_W = 1920;
const DEFAULT_H = 1080;

const Projects = () => {
  const triggerRef = useRef(null);
  const trackRef = useRef(null);

  /* ---- Horizontal scroll (desktop only) with snap ---- */
  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    if (isMobile) return;

    const ctx = gsap.context(() => {
      const slides = trackRef.current.querySelectorAll('.proj-slide');
      const numSlides = slides.length;
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
        scrub: 0.6,
        snap: {
          snapTo: 1 / (numSlides - 1),
          duration: { min: 0.25, max: 0.6 },
          ease: 'power2.inOut',
        },
        invalidateOnRefresh: true,
      });

    }, triggerRef);

    return () => ctx.revert();
  }, []);

  /* ---- Iframe scaling: render at native res, CSS-scale to fit container ---- */
  useEffect(() => {
    const scaleIframes = () => {
      const isMobile = window.innerWidth <= 768;

      document.querySelectorAll('.iframe-wrapper').forEach(wrapper => {
        const nw = parseInt(wrapper.dataset.nativeW) || DEFAULT_W;
        const nh = parseInt(wrapper.dataset.nativeH) || DEFAULT_H;
        const containerW = wrapper.offsetWidth;

        if (isMobile) {
          const scale = containerW / nw;
          wrapper.style.setProperty('--iframe-scale', scale);
          wrapper.style.height = `${nh * scale}px`;
        } else {
          // Scale to fill width — overflow hidden crops any extra height
          const scale = containerW / nw;
          wrapper.style.setProperty('--iframe-scale', scale);
          wrapper.style.height = '';  // Let flex handle it
        }
      });
    };

    // Initial + debounced resize
    scaleIframes();
    let timeout;
    const onResize = () => {
      clearTimeout(timeout);
      timeout = setTimeout(scaleIframes, 100);
    };
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
      clearTimeout(timeout);
    };
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
                  <div
                    className="iframe-wrapper"
                    data-native-w={p.nativeW || DEFAULT_W}
                    data-native-h={p.nativeH || DEFAULT_H}
                    style={{
                      '--native-w': `${p.nativeW || DEFAULT_W}px`,
                      '--native-h': `${p.nativeH || DEFAULT_H}px`,
                    }}
                  >
                    <iframe
                      title={p.title}
                      src={`${p.iframe}&navContentPaneEnabled=false&filterPaneEnabled=false`}
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
