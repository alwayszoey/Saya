import React from 'react';
import {
  developerInfo,
  socialLinks,
  teamHighlights
} from '../data';
import DiscordWidget from './DiscordWidget';
import FadeContent from './FadeContent';
import StoreStatusBadge from './StoreStatusBadge';

function SocialIcon({ type }: { type: 'instagram' | 'facebook' }) {
  if (type === 'instagram') {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
        <circle cx="12" cy="12" r="4.2" />
        <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
      </svg>
    );
  }
  if (type === 'facebook') {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" />
      </svg>
    );
  }
  return null;
}

function ContactWidget() {
  return (
    <div className="team-widget team-widget--contact">
      <StoreStatusBadge variant="card" className="team-contact-status-card" />
      {socialLinks.map((item) => (
        <a
          key={item.label}
          href={item.href}
          className="team-contact-item"
          target="_blank"
          rel="noreferrer"
        >
          <div className="team-contact-icon" aria-hidden="true">
            <SocialIcon type={item.icon} />
          </div>
          <div className="team-contact-body">
            <p className="team-contact-label">{item.label}</p>
            <p className="team-contact-detail">{item.detail}</p>
          </div>
          <span className="team-contact-action">{item.action}</span>
        </a>
      ))}
    </div>
  );
}

export default function TeamSection() {
  return (
    <section className="team" id="team">
      <div className="team-banner">
        <h2 className="team-heading">ผู้พัฒนา</h2>
        <p className="team-subtitle">
          ทำคนเดียว ครบทุกขั้นตอน — คุยตรงกับคนทำจริง ไม่ผ่านคนกลาง
        </p>
      </div>

      <FadeContent
        className="team-solo-wrap"
        blur
        duration={1000}
        delay={80}
        threshold={0.12}
      >
        <article className="team-card--solo">
          <div className="team-card-avatar">
            <img
              src={developerInfo.image}
              alt=""
              className="team-card-avatar-img"
              aria-hidden="true"
            />
            <img
              src={developerInfo.frame}
              alt={developerInfo.name}
              className="team-card-avatar-frame"
            />
          </div>

          <div className="team-card-body">
            <h3 className="team-card-name">{developerInfo.name}</h3>
            <p className="team-card-role">{developerInfo.role}</p>
            <p className="team-card-desc">{developerInfo.desc}</p>
            <ul className="team-card-tags">
              {developerInfo.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </div>
        </article>
      </FadeContent>

      <div className="team-highlights">
        {teamHighlights.map((hl, idx) => (
          <FadeContent
            key={hl.title}
            className="team-highlight-col"
            blur
            duration={1000}
            delay={120 + idx * 120}
            threshold={0.12}
          >
            <h3 className="team-highlight-title">{hl.title}</h3>
            <p className="team-highlight-desc">{hl.desc}</p>
            {hl.type === 'discord' ? <DiscordWidget /> : <ContactWidget />}
          </FadeContent>
        ))}
      </div>
    </section>
  );
}
