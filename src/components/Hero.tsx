import React from 'react';
import ShinyText from './ShinyText';

export interface HeroProps {
  onNavigate: (sectionId: string, e?: React.MouseEvent) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const handleClick = (sectionId: string, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(sectionId, e);
  };

  return (
    <main className="hero">
      <div className="hero-brand">
        <h1 className="hero-brand-title">Zyni</h1>
      </div>

      <div className="hero-body">
        <p className="hero-headline">
          เบื่อขั้นตอนเยอะ? มาลุย{' '}
          <ShinyText
            text='"งานเว็บไซต์คุณ"'
            className="highlight"
            color="#cccccc"
            shineColor="#ffffff"
            speed={2.5}
            spread={120}
          />{' '}
          แบบคุยตรงกับ Dev
        </p>

        <p className="hero-desc">
          เพราะดีไซน์ที่ดีต้องมาพร้อมระบบที่เสถียร เราพัฒนาและออกแบบดิจิทัลแพลตฟอร์ม
          <br />
          ที่ตอบโจทย์ทั้งความสวยงามและการเติบโตของธุรกิจคุณ
        </p>

        <div className="hero-actions">
          <a
            href="/"
            className="btn-depth btn-depth-primary"
            onClick={(e) => handleClick('services', e)}
          >
            <span className="btn-depth-shadow" aria-hidden="true" />
            <span className="btn-depth-face">บริการต่างๆ</span>
          </a>
          <a
            href="/"
            className="btn-depth btn-depth-outline"
            onClick={(e) => handleClick('portfolio', e)}
          >
            <span className="btn-depth-shadow" aria-hidden="true" />
            <span className="btn-depth-face">ดูผลงาน</span>
          </a>
        </div>
      </div>

      <a
        href="/"
        className="hero-scroll-hint"
        aria-label="เลื่อนลง"
        onClick={(e) => handleClick('services', e)}
      >
        <span className="hero-scroll-line" aria-hidden="true" />
        <span className="hero-scroll-chevron" aria-hidden="true">
          <svg width="14" height="8" viewBox="0 0 14 8" fill="none">
            <path
              d="M1 1.5L7 6.5L13 1.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </a>
    </main>
  );
}
