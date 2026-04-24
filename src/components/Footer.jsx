import React from 'react';
import { Mail, ArrowUpRight } from 'lucide-react';
import config from '../config';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer section-spacer">
      <div className="container">
        
        <div className="footer-bento-grid">
          
          <div className="bento-card cta-card">
            <h2 className="heading-2">Ready to scale<br/>your data?</h2>
            {config.email && (
              <a href={`mailto:${config.email}`} className="pill contact-btn" style={{ marginTop: '2rem', textDecoration: 'none' }}>
                <Mail size={16} /> Get in touch <ArrowUpRight size={16} />
              </a>
            )}
            {!config.email && (
              <button className="pill contact-btn" style={{ marginTop: '2rem' }}>
                <Mail size={16} /> Get in touch <ArrowUpRight size={16} />
              </button>
            )}
          </div>

          <div className="bento-card info-card">
            <div>
              <span className="label">Location</span>
              <p className="body-lg" style={{ color: 'var(--text)' }}>{config.location}</p>
            </div>
            <div style={{ marginTop: '2rem' }}>
              <span className="label">Social</span>
              <div className="social-links">
                {config.github && <a href={config.github} target="_blank" rel="noopener noreferrer">GitHub</a>}
                {config.linkedin && <a href={config.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>}
              </div>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          <span className="brand">{config.heroDisplay}</span>
          <span className="body-lg" style={{ fontSize: '0.8rem' }}>{config.footerTagline}</span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
