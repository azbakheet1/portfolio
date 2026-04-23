import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { MousePointer2 } from 'lucide-react';
import config from '../config';
import './Hero.css';

const Hero = () => {
  const heroRef = useRef(null);
  const nameRef = useRef(null);
  const cursorRef = useRef(null);
  const subtitleRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    const letters = nameRef.current.querySelectorAll('.hero__letter');
    const cursor = cursorRef.current;

    gsap.set(letters, { opacity: 0, display: 'inline-block' });
    gsap.set(cursor, { opacity: 1 });

    const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

    // Typewriter: reveal each letter — FAST
    letters.forEach((letter, i) => {
      tl.to(letter, { opacity: 1, duration: 0.04 }, 0.1 + i * 0.05);
    });

    // Blink cursor briefly then hide
    tl.to(cursor, {
      opacity: 0, repeat: 3, yoyo: true,
      duration: 0.25, ease: 'steps(1)',
    }, '+=0.05');
    tl.to(cursor, { opacity: 0, duration: 0.2 });

    // Subtitle entrance — appears quickly
    tl.fromTo(subtitleRef.current.children,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.08, duration: 0.5, ease: 'power3.out' },
      '-=0.6'
    );

    // Scroll prompt — fades in fast
    tl.fromTo(scrollRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.8 },
      '-=0.3'
    );

    // Mouse parallax
    const handleMouse = (e) => {
      const xPos = (e.clientX / window.innerWidth - 0.5) * 30;
      const yPos = (e.clientY / window.innerHeight - 0.5) * 30;
      gsap.to(nameRef.current, {
        backgroundPosition: `${50 + xPos}% ${50 + yPos}%`,
        duration: 1, ease: 'power2.out'
      });
    };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  const displayName = config.heroDisplay;

  return (
    <section ref={heroRef} className="hero">
      <div className="hero__bg">
        <div className="hero__orb hero__orb--1" />
        <div className="hero__orb hero__orb--2" />
      </div>

      <div className="hero__container">
        <h1 ref={nameRef} className="hero__name">
          {displayName.split('').map((ch, i) => (
            <span key={i} className="hero__letter">{ch === ' ' ? '\u00A0' : ch}</span>
          ))}
          <span ref={cursorRef} className="hero__cursor">|</span>
        </h1>

        <div ref={subtitleRef} className="hero__subtitle">
          <p className="hero__role">{config.role}</p>
          <div className="hero__divider" />
          <p className="hero__tagline">{config.tagline}</p>
        </div>
      </div>

      <div ref={scrollRef} className="hero__scroll">
        <MousePointer2 size={18} strokeWidth={1.5} />
        <span>Scroll to Explore</span>
      </div>
    </section>
  );
};

export default Hero;
