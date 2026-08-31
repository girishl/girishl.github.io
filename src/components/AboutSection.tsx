import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { 
  User, Award, BookOpen, Layers, CheckCircle2, Cpu, Database, 
  Network, Code2, Globe, ShieldCheck, Heart, Sparkles, ExternalLink,
  GraduationCap, Server
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  const [activeSkillTab, setActiveSkillTab] = useState<'all' | 'coding' | 'databases' | 'web' | 'subjects'>('all');

  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold mb-3">
              <User className="w-3.5 h-3.5" />
              <span>Academic & Leadership Profile</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
              About Dr. Girish L
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
              Academician, researcher, and technologist committed to student upskilling, open-source education, and cloud & network resilience.
            </p>
          </div>

          {/* Vidwan ID Quick Badge */}
          {personalInfo.vidwan && (
            <a
              href={personalInfo.vidwan}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-2xl bg-slate-900/90 border border-cyan-500/40 hover:border-cyan-400 text-xs font-mono text-cyan-300 hover:text-white transition shadow-lg shadow-cyan-950/20 self-start md:self-auto group"
              title="View Profile on INFLIBNET Vidwan Database"
            >
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Vidwan-ID: <strong className="text-white font-bold">{personalInfo.vidwanId}</strong></span>
              <ExternalLink className="w-3.5 h-3.5 text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          )}
        </div>

        {/* Highlight Banner: Areas of Interest */}
        <div className="p-5 sm:p-6 rounded-3xl bg-gradient-to-r from-slate-900/90 via-slate-900/80 to-slate-900/90 border border-slate-800 backdrop-blur-xl shadow-xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-cyan-400">Core Specialization</div>
                <h3 className="text-base sm:text-lg font-bold text-white font-display">Areas of Interest</h3>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {personalInfo.areasOfInterest.map((area, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-950/80 border border-cyan-500/30 text-xs font-medium text-slate-200 hover:border-cyan-400 transition"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span>{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Content Grid: Bio & Skills */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Biography & Research Pillars */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/70 border border-slate-800/80 backdrop-blur-xl space-y-6">
              
              {/* Profile Portrait & Intro Header */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 pb-5 border-b border-slate-800/80">
                <div className="relative shrink-0">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-600 p-[2.5px] shadow-xl shadow-cyan-950/40 overflow-hidden">
                    <img
                      src={personalInfo.aboutImageUrl}
                      alt="Dr. Girish L"
                      className="w-full h-full object-cover rounded-[14px]"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <span className="absolute -bottom-1 -right-1 flex h-4 w-4">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-cyan-500 border-2 border-slate-900"></span>
                  </span>
                </div>

                <div className="space-y-1.5 min-w-0">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white font-display">
                    Dr. Girish L
                  </h3>
                  <div className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                    Director, Skill Training and Placement & Head
                  </div>
                  <div className="text-xs text-slate-300 font-medium">
                    Dept of AI&DS & AI&ML • Shridevi Institute of Engg, and Technology
                  </div>
                  <div className="text-xs text-slate-400 font-mono pt-0.5">
                    Ph.D. in Computer Science (VTU) • TFUG Lead
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="text-lg font-bold text-white font-display">
                  Pedagogical Vision & Research Focus
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {personalInfo.aboutDetailed}
                </p>
                <p className="text-sm text-slate-300 leading-relaxed">
                  His doctoral investigations focus on data analytics in logically centralized control planes and Virtualized Network Function (VNF) deployments. By combining proactive failure forecasting with deep neural models, his work enhances reliability across telecommunication backbones and cloud infrastructure.
                </p>
              </div>

              {/* Research Pillars */}
              <div className="pt-4 border-t border-slate-800/80">
                <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-3">
                  Research Pillars & Investigation Domains
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {personalInfo.researchInterests.map((interest, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80 text-xs text-slate-200"
                    >
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{interest}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Certifications & Professional Memberships Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Certifications */}
              <div className="p-5 rounded-3xl bg-slate-900/70 border border-slate-800/80 backdrop-blur-xl space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-400">
                  <ShieldCheck className="w-4 h-4 text-cyan-400" />
                  <span>Certifications</span>
                </div>
                <div className="space-y-2">
                  {personalInfo.certifications.map((cert) => (
                    <div key={cert.id} className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80 text-xs space-y-0.5">
                      <div className="font-semibold text-slate-100 flex items-center justify-between">
                        <span>{cert.title}</span>
                        {cert.year && <span className="font-mono text-[10px] text-cyan-400 bg-cyan-950/50 px-1.5 py-0.5 rounded border border-cyan-800/50">{cert.year}</span>}
                      </div>
                      {cert.issuer && <div className="text-[11px] text-slate-400">{cert.issuer}</div>}
                    </div>
                  ))}
                </div>
              </div>

              {/* Memberships & Interests */}
              <div className="p-5 rounded-3xl bg-slate-900/70 border border-slate-800/80 backdrop-blur-xl space-y-4">
                {/* Professional Memberships */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-400">
                    <Award className="w-4 h-4 text-indigo-400" />
                    <span>Professional Memberships</span>
                  </div>
                  <div className="space-y-1.5">
                    {personalInfo.memberships.map((mem) => (
                      <div key={mem.id} className="flex items-center gap-2 p-2 rounded-xl bg-slate-950/60 border border-slate-800/80 text-xs">
                        <span className="px-2 py-0.5 rounded bg-indigo-500/10 border border-indigo-500/30 font-mono font-bold text-indigo-300 text-[11px]">
                          {mem.shortName}
                        </span>
                        <span className="text-slate-300 text-[11px] leading-tight">{mem.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Personal Interests */}
                <div className="pt-3 border-t border-slate-800/80 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-400">
                    <Heart className="w-3.5 h-3.5 text-rose-400" />
                    <span>Interests & Activities</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {personalInfo.personalInterests.map((interest, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800 text-[11px] text-slate-300"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Skills Matrix */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-3xl bg-slate-900/70 border border-slate-800/80 backdrop-blur-xl space-y-5">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-white font-display flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-cyan-400" />
                  <span>Technical Skills Matrix</span>
                </h3>
              </div>

              {/* Spoken Languages */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs text-slate-300 font-semibold">
                  <span className="flex items-center gap-1.5">
                    <Globe className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Languages</span>
                  </span>
                  <span className="font-mono text-[11px] text-cyan-400">Multilingual</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {personalInfo.skills.languages.map((lang) => (
                    <span
                      key={lang}
                      className="px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800 text-xs font-mono text-cyan-300 font-medium"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>

              {/* 1. Coding Languages */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs text-slate-300 font-semibold">
                  <span className="flex items-center gap-1.5">
                    <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Coding Languages</span>
                  </span>
                  <span className="font-mono text-[11px] text-cyan-400">Polyglot</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {personalInfo.skills.coding.map((lang) => (
                    <span
                      key={lang}
                      className="px-2.5 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-300 font-medium"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>

              {/* 2. Databases */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs text-slate-300 font-semibold">
                  <span className="flex items-center gap-1.5">
                    <Database className="w-3.5 h-3.5 text-blue-400" />
                    <span>Databases</span>
                  </span>
                  <span className="font-mono text-[11px] text-blue-400">RDBMS</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {personalInfo.skills.databases.map((db) => (
                    <span
                      key={db}
                      className="px-2.5 py-1 rounded-lg bg-blue-500/10 border border-blue-500/30 text-xs font-mono text-blue-300 font-medium"
                    >
                      {db}
                    </span>
                  ))}
                </div>
              </div>

              {/* 3. Web Development & Servers */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs text-slate-300 font-semibold">
                  <span className="flex items-center gap-1.5">
                    <Globe className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Web Dev & Web Servers</span>
                  </span>
                  <span className="font-mono text-[11px] text-emerald-400">Web Infra</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {personalInfo.skills.webDev.map((item) => (
                    <span
                      key={item}
                      className="px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono text-emerald-300 font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* 4. Core Subjects & Academic Domains */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs text-slate-300 font-semibold">
                  <span className="flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-violet-400" />
                    <span>Core Subjects & Disciplines</span>
                  </span>
                  <span className="font-mono text-[11px] text-violet-400">Domains</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {personalInfo.skills.subjects.map((sub) => (
                    <span
                      key={sub}
                      className="px-2.5 py-1 rounded-lg bg-violet-500/10 border border-violet-500/30 text-xs font-mono text-violet-300 font-medium"
                    >
                      {sub}
                    </span>
                  ))}
                </div>
              </div>

              {/* 5. Cloud, Virtualization & DevOps */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs text-slate-300 font-semibold">
                  <span className="flex items-center gap-1.5">
                    <Server className="w-3.5 h-3.5 text-amber-400" />
                    <span>Cloud, Containers & DevOps</span>
                  </span>
                  <span className="font-mono text-[11px] text-amber-400">Infra</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {personalInfo.skills.cloud_devops.map((tool) => (
                    <span
                      key={tool}
                      className="px-2.5 py-1 rounded-lg bg-amber-500/10 border border-amber-500/30 text-xs font-mono text-amber-300 font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* 6. Machine Learning Frameworks */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs text-slate-300 font-semibold">
                  <span className="flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                    <span>AI & ML Frameworks</span>
                  </span>
                  <span className="font-mono text-[11px] text-cyan-400">Deep Learning</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {personalInfo.skills.ml_frameworks.map((sk) => (
                    <span
                      key={sk}
                      className="px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800 text-xs font-mono text-slate-300"
                    >
                      {sk}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
