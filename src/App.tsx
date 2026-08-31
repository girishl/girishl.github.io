/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ThreeBackground } from './components/ThreeBackground';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ResearchSection } from './components/ResearchSection';
import { RepositoriesSection } from './components/RepositoriesSection';
import { TeachingSection } from './components/TeachingSection';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { CommunitySection } from './components/CommunitySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BibtexModal } from './components/BibtexModal';
import { Publication, ThreeSceneMode, ColorTheme } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('top');
  const [sceneMode, setSceneMode] = useState<ThreeSceneMode>('hybrid');
  const [colorTheme, setColorTheme] = useState<ColorTheme>('cyan');
  const [selectedBibtexPub, setSelectedBibtexPub] = useState<Publication | null>(null);

  // Section scroll spy observer
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['top', 'about', 'research', 'repositories', 'teaching', 'experience', 'community', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 relative selection:bg-cyan-500 selection:text-slate-950">
      {/* Dynamic 3D WebGL Background Engine */}
      <ThreeBackground
        currentMode={sceneMode}
        onModeChange={setSceneMode}
        colorTheme={colorTheme}
        onThemeChange={setColorTheme}
      />

      {/* Floating Navigation Bar */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        {/* 1. Hero Section */}
        <HeroSection />

        {/* 2. About Me, Research Philosophy & Technical Stack */}
        <AboutSection />

        {/* 3. Research Publications & BibTeX Citations */}
        <ResearchSection onOpenBibtex={(pub) => setSelectedBibtexPub(pub)} />

        {/* 4. GitHub Repositories & VTU ML Lab Open-Source */}
        <RepositoriesSection />

        {/* 5. Teaching & VTU Courseware */}
        <TeachingSection />

        {/* 6. Academic Experience & Leadership */}
        <ExperienceTimeline />

        {/* 7. Developer Community & Keynotes (TFUG Tumkur) */}
        <CommunitySection />

        {/* 8. Contact & Collaboration Coordinates */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* BibTeX Citation Modal */}
      <BibtexModal
        publication={selectedBibtexPub}
        onClose={() => setSelectedBibtexPub(null)}
      />
    </div>
  );
}
