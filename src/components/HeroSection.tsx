import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { BookOpen, Github, ArrowRight, Sparkles, MapPin, Award, Briefcase, CheckCircle2, Building, GraduationCap } from 'lucide-react';
import { HeroRobotics3D } from './HeroRobotics3D';

export const HeroSection: React.FC = () => {
  return (
    <section id="top" className="relative pt-28 pb-16 sm:pt-36 sm:pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* 3D AI Robotics Kinematics & LiDAR Background */}
      <HeroRobotics3D />

      <div className="max-w-7xl xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Hero Typography & Actions */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Main Headline */}
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white font-display leading-tight">
                Dr. Girish L
              </h1>

              {/* Exact Requested Designation Block */}
              <div className="space-y-1.5">
                <div className="text-lg sm:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-400 leading-snug">
                  Director, Skill Training and Placement & Head
                </div>
                <div className="text-sm sm:text-base font-semibold text-slate-200 flex flex-wrap items-center gap-1.5">
                  <span className="text-cyan-300 font-bold">Dept of AI&DS & AI&ML</span>
                  <span className="text-slate-500 hidden sm:inline">•</span>
                  <span className="text-slate-300">Shridevi Institute of Engg, and Technology, Tumkur</span>
                </div>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl font-medium pt-1">
                15+ Years of Transforming Education Through Technology, Research & Industry Partnerships
              </p>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-2xl font-normal">
                Academician, Ph.D. Researcher at VTU, and Google Developer Lead (TFUG Tumkur) at Shridevi Institute of Engineering & Technology (SIET), driving institutional initiatives across <strong className="text-white font-semibold">Artificial Intelligence</strong>, <strong className="text-white font-semibold">Machine Learning</strong>, and <strong className="text-white font-semibold">Next-Gen Industry Upskilling</strong>.
              </p>
            </div>

            {/* Quick Metadata Badges */}
            <div className="flex flex-wrap gap-2 pt-1 text-xs text-slate-300">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900/60 border border-slate-800">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>SIET, Tumkur, Karnataka</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900/60 border border-slate-800">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                <span>Ph.D., VTU</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900/60 border border-slate-800">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                <span>TFUG Tumkur Lead Organizer</span>
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#research"
                id="hero-research-btn"
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs sm:text-sm transition shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 cursor-pointer"
              >
                <BookOpen className="w-4 h-4" />
                <span>Explore Research Papers</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#experience"
                id="hero-experience-btn"
                className="flex items-center gap-2 px-4 sm:px-5 py-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 text-xs sm:text-sm font-semibold text-white transition shadow-sm cursor-pointer"
              >
                <Briefcase className="w-4 h-4 text-cyan-400" />
                <span>View Experience & Education</span>
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-github-btn"
                className="flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800 text-xs sm:text-sm font-medium text-slate-300 hover:text-white transition"
              >
                <Github className="w-4 h-4 text-slate-400" />
                <span>GitHub Repos</span>
              </a>
            </div>

            {/* Core Domain Pills */}
            <div className="pt-3 border-t border-slate-800/80">
              <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
                Specialized Research Domains:
              </div>
              <div className="flex flex-wrap gap-1.5">
                {[
                  "NFV Failure Prediction",
                  "Conditional GANs",
                  "Cloud Anomaly Detection",
                  "Graph Neural Networks",
                  "Distributed ML Systems",
                  "Agri-Tech Computer Vision"
                ].map((domain) => (
                  <span
                    key={domain}
                    className="px-2.5 py-1 rounded-md bg-slate-900/60 border border-slate-800 text-[11px] font-mono text-cyan-300"
                  >
                    #{domain}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Academic Profile Card */}
          <div className="lg:col-span-5 relative w-full">
            <div className="relative rounded-3xl bg-slate-900/70 border border-slate-800/90 p-5 sm:p-6 backdrop-blur-xl shadow-2xl shadow-cyan-950/30 space-y-5">
              
              {/* Profile Card Header */}
              <div className="flex items-center gap-4">
                <div className="relative shrink-0">
                  <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-full bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-700 p-1 shadow-xl shadow-cyan-500/20 overflow-hidden">
                    <img
                      src="https://shrideviengineering.org/wp-content/uploads/2025/04/66200630952.png"
                      alt="Dr. Girish L"
                      className="w-full h-full object-cover rounded-full"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <span className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-emerald-500 border-2 border-slate-950 flex items-center justify-center text-slate-950" title="Active Academic & Research Status">
                    <CheckCircle2 className="w-3.5 h-3.5 fill-current" />
                  </span>
                </div>

                <div className="min-w-0">
                  <h3 className="text-lg sm:text-xl font-bold text-white font-display truncate">
                    Dr. Girish L
                  </h3>
                  <p className="text-xs text-cyan-400 font-semibold leading-tight mt-0.5">
                    Director, Skill Training and Placement & Head
                  </p>
                  <p className="text-xs text-slate-300 font-medium mt-0.5">
                    Dept of AI&DS & AI&ML
                  </p>
                  <p className="text-[11px] text-slate-400 mt-0.5 truncate">
                    Shridevi Institute of Engg, and Technology, Tumkur
                  </p>
                </div>
              </div>

              {/* Department & Institution Highlights */}
              <div className="p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800/90 text-xs space-y-2">
                <div className="flex items-center gap-2 text-slate-300">
                  <Building className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span className="font-semibold text-slate-200">Shridevi Institute of Engg, and Technology, Tumkur</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400">
                  <GraduationCap className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Head, Dept of AI&DS & AI&ML | Director, Skill Training & Placement</span>
                </div>
              </div>

              {/* Live Stat Badges Grid */}
              <div className="grid grid-cols-2 gap-2.5 pt-1">
                {personalInfo.stats.map((st, i) => (
                  <div
                    key={i}
                    className="p-3 sm:p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 text-left transition hover:border-cyan-500/40"
                  >
                    <div className="text-xl sm:text-2xl font-black text-white font-display text-cyan-400">
                      {st.value}
                    </div>
                    <div className="text-[11px] text-slate-400 font-medium">
                      {st.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Links */}
              <div className="flex items-center justify-between text-xs text-slate-400 pt-1 border-t border-slate-800/80">
                <a
                  href={personalInfo.scholar}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition underline underline-offset-4"
                >
                  Google Scholar ↗
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition underline underline-offset-4"
                >
                  LinkedIn Profile ↗
                </a>
                <a
                  href={personalInfo.vidwan}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition underline underline-offset-4"
                >
                  Vidwan ID ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
