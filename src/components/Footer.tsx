import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { Github, Twitter, Linkedin, Award, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-slate-950/95 text-slate-400 py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center space-y-6 pb-8 border-b border-slate-800/80">
          
          {/* Centered Logo & Identity */}
          <div className="flex flex-col items-center gap-3">
            <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-cyan-500 via-blue-500 to-indigo-600 p-[2px] overflow-hidden shadow-xl shadow-cyan-950/40">
              <img
                src="https://shrideviengineering.org/wp-content/uploads/2025/04/66200630952.png"
                alt="Dr. Girish L"
                className="w-full h-full object-cover rounded-full"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="space-y-1">
              <div className="font-bold text-white text-lg font-display">
                Dr. Girish L
              </div>
              <div className="text-xs sm:text-sm font-semibold text-cyan-400">
                Director, Skill Training and Placement & Head
              </div>
              <div className="text-xs text-slate-400 font-medium">
                Dept of AI&DS & AI&ML • Shridevi Institute of Engg, and Technology, Tumkur
              </div>
            </div>
          </div>

          {/* Centered Social & Profile Links */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-cyan-500/40 transition"
              title="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.scholar}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-amber-400 hover:border-amber-500/40 transition"
              title="Google Scholar Profile"
            >
              <Award className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-blue-400 hover:border-blue-500/40 transition"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition"
              title="Twitter / X Profile"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              id="footer-scroll-top-btn"
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 hover:text-white hover:border-cyan-500/50 transition cursor-pointer"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>

        {/* Centered Copyright & Info */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-xs text-slate-500 text-center">
          <div>
            © {new Date().getFullYear()} Dr. Girish L. All rights reserved.
          </div>
          <div className="hidden sm:inline">•</div>
          <div className="font-mono">
            <a href="https://girishl.github.io" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition">
              girishl.github.io
            </a>
          </div>
          <div className="hidden sm:inline">•</div>
          <div>
            <span>Vidwan ID: </span>
            <a href={personalInfo.vidwan} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline font-mono">
              {personalInfo.vidwanId}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
