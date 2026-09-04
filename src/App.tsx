import React, { useCallback, useEffect, useState } from 'react';
import Footer from './components/Footer';
import Hero from './components/Hero';
import IntroSplash from './components/IntroSplash';
import Iridescence from './components/Iridescence';
import Navbar from './components/Navbar';
import PortfolioSection from './components/PortfolioSection';
import ServicesSection from './components/ServicesSection';
import TeamSection from './components/TeamSection';

function cleanHash() {
  if (window.location.hash) {
    window.history.replaceState(
      null,
      '',
      `${window.location.pathname}${window.location.search}`
    );
  }
}

export default function App() {
  const isReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const [showSplash, setShowSplash] = useState(!isReducedMotion);
  const [isReady, setIsReady] = useState(isReducedMotion);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  // Scroll lock during intro
  useEffect(() => {
    if (isReady) return;
    const docEl = document.documentElement;
    docEl.classList.add('intro-active');
    document.body.classList.add('intro-active');

    const preventScroll = (e: Event) => e.preventDefault();
    const preventKeys = (e: KeyboardEvent) => {
      if (
        new Set([
          ' ',
          'ArrowUp',
          'ArrowDown',
          'PageUp',
          'PageDown',
          'Home',
          'End'
        ]).has(e.key)
      ) {
        e.preventDefault();
      }
    };

    window.addEventListener('wheel', preventScroll, { passive: false });
    window.addEventListener('touchmove', preventScroll, { passive: false });
    window.addEventListener('keydown', preventKeys);

    return () => {
      docEl.classList.remove('intro-active');
      document.body.classList.remove('intro-active');
      window.removeEventListener('wheel', preventScroll);
      window.removeEventListener('touchmove', preventScroll);
      window.removeEventListener('keydown', preventKeys);
    };
  }, [isReady]);

  // Initial hash scroll once ready
  useEffect(() => {
    if (!isReady) return;
    const hash = window.location.hash.replace('#', '');
    if (new Set(['home', 'services', 'portfolio', 'team']).has(hash)) {
      if (hash === 'home') {
        window.scrollTo({ top: 0, behavior: 'auto' });
      } else {
        document.getElementById(hash)?.scrollIntoView({ behavior: 'auto', block: 'start' });
      }
      cleanHash();
    }
  }, [isReady]);

  // Active section scroll spy
  useEffect(() => {
    if (!isReady) return;

    const sections = ['team', 'portfolio', 'services'];
    const updateActiveSection = () => {
      const scrollPos = window.scrollY + window.innerHeight * 0.38;
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && scrollPos >= el.getBoundingClientRect().top + window.scrollY) {
          setActiveSection(id);
          return;
        }
      }
      setActiveSection(null);
    };

    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('resize', updateActiveSection, { passive: true });

    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, [isReady]);

  const handleNavigate = useCallback(
    (sectionId: string | null, e?: React.MouseEvent) => {
      e?.preventDefault();
      if (!isReady) return;

      if (!sectionId) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        cleanHash();
      } else {
        document.getElementById(sectionId)?.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        cleanHash();
      }
    },
    [isReady]
  );

  const handleSplashComplete = useCallback(() => {
    setShowSplash(false);
    setIsReady(true);
  }, []);

  return (
    <div className="page">
      {showSplash && <IntroSplash onComplete={handleSplashComplete} />}

      <div className={`page-bg${isReady ? ' page-bg--ready' : ''}`} aria-hidden="true">
        <Iridescence
          colors={['#f0f0f0']}
          rotation={76}
          autoRotate={0}
          speed={0.14}
          scale={1.2}
          frequency={1}
          warpStrength={1}
          mouseInfluence={0.35}
          parallax={0.5}
          noise={0.07}
          iterations={1}
          intensity={1.5}
          bandWidth={5}
          transparent
        />
      </div>

      <div className={`page-content${isReady ? ' page-content--ready' : ''}`}>
        <Navbar
          activeSection={activeSection}
          onNavigate={handleNavigate}
          isReady={isReady}
        />
        <Hero onNavigate={handleNavigate} />
        <ServicesSection />
        <PortfolioSection />
        <TeamSection />
        <Footer />
      </div>
    </div>
  );
}
