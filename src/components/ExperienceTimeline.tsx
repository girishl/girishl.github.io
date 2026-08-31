import React, { useState } from 'react';
import { experiences, educations, awards } from '../data/portfolioData';
import { Briefcase, Building, MapPin, Calendar, GraduationCap, Award, BookOpen, Globe, CheckCircle2, Sparkles, Plane, Trophy, Tag } from 'lucide-react';

export const ExperienceTimeline: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'experience' | 'awards' | 'education'>('all');

  return (
    <section id="experience" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
        
        {/* ================= WORK EXPERIENCE SECTION ================= */}
        <div>
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold mb-3">
                <Briefcase className="w-3.5 h-3.5" />
                <span>Career Journey & Leadership Track</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
                Work Experience
              </h2>
              <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
                Academic leadership as Director of Skill Training and Head of Dept (AI&DS & AI&ML), international postgraduate thesis supervision, corporate IT consulting, and open-source fellowship.
              </p>
            </div>
          </div>

          {/* Timeline Layout */}
          <div className="relative border-l-2 border-slate-800/80 ml-4 md:ml-6 pl-6 md:pl-8 space-y-8">
            {experiences.map((exp) => (
              <div
                key={exp.id}
                id={`experience-item-${exp.id}`}
                className="relative group"
              >
                {/* Timeline Node Icon */}
                <div className={`absolute -left-[35px] md:-left-[43px] top-1.5 w-6 h-6 rounded-full bg-slate-950 border-2 ${exp.current ? 'border-cyan-400 shadow-cyan-500/30' : 'border-slate-600'} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                  <span className={`w-2 h-2 rounded-full ${exp.current ? 'bg-cyan-400' : 'bg-slate-400'}`} />
                </div>

                {/* Card */}
                <div className="p-6 rounded-3xl bg-slate-900/70 hover:bg-slate-900/90 border border-slate-800/80 hover:border-slate-700/80 backdrop-blur-xl transition-all duration-200 space-y-3">
                  {/* Header row */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {exp.role}
                      </h3>
                      <div className="text-xs font-semibold text-cyan-400 flex items-center gap-1.5 mt-0.5">
                        <Building className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span>{exp.organization}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-xs font-mono text-slate-300 shrink-0">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      <span className="font-semibold text-slate-200">{exp.period}</span>
                      {exp.current && (
                        <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-[10px] font-sans font-semibold">
                          Active
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                    <MapPin className="w-3 h-3 text-slate-500" />
                    <span>{exp.location}</span>
                  </div>

                  {/* Responsibilities list */}
                  <ul className="space-y-2 pt-1 text-xs text-slate-300">
                    {exp.description.map((desc, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-cyan-400 font-bold shrink-0 mt-0.5">▹</span>
                        <span className="leading-relaxed">{desc}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Skill tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/80">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-0.5 rounded-lg bg-slate-950 border border-slate-800 text-[11px] font-mono text-slate-400"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= AWARDS AND ACHIEVEMENTS SECTION ================= */}
        <div id="awards">
          {/* Section Header */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold mb-3">
              <Trophy className="w-3.5 h-3.5" />
              <span>Honors, Grants & Fellowships</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
              Awards and Achievements
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
              International travel and accommodation grants from the Linux Foundation, research fellowships, and state-level recognition for machine learning innovations.
            </p>
          </div>

          {/* Awards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {awards.map((award) => (
              <div
                key={award.id}
                id={`award-card-${award.id}`}
                className="p-6 sm:p-7 rounded-3xl bg-slate-900/70 hover:bg-slate-900/90 border border-slate-800/80 hover:border-amber-500/40 backdrop-blur-xl transition-all duration-200 flex flex-col justify-between space-y-4 group shadow-lg shadow-slate-950/40"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-lg bg-amber-500/10 border border-amber-500/30 text-xs font-mono font-bold text-amber-300">
                      {award.year}
                    </span>
                    {award.type && (
                      <span className="px-2.5 py-0.5 rounded-full bg-slate-950 border border-slate-800 text-[10px] font-semibold text-slate-300">
                        {award.type}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                    {award.title}
                  </h3>

                  <div className="text-xs font-semibold text-amber-400/90 flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>{award.organization}</span>
                  </div>

                  {award.grantInfo && (
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-cyan-300">
                      <Sparkles className="w-3 h-3 text-cyan-400" />
                      <span>{award.grantInfo}</span>
                    </div>
                  )}

                  <p className="text-xs text-slate-300 leading-relaxed pt-1">
                    {award.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= EDUCATION SECTION ================= */}
        <div>
          {/* Section Header */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold mb-3">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Academic Pedigree & Degrees</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
              Education & Doctoral Research
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
              Academic qualifications from undergraduate foundation to doctoral research in Data Analytics and Virtualized Network Functions.
            </p>
          </div>

          {/* Education Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {educations.map((edu, idx) => (
              <div
                key={edu.id}
                id={`education-card-${edu.id}`}
                className={`p-6 sm:p-7 rounded-3xl bg-slate-900/70 hover:bg-slate-900/90 border ${idx === 0 ? 'border-cyan-500/40 shadow-xl shadow-cyan-950/20' : 'border-slate-800/80'} hover:border-slate-700 backdrop-blur-xl transition-all duration-200 flex flex-col justify-between space-y-4 group`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800 text-xs font-mono font-bold text-cyan-300">
                      {edu.period}
                    </span>
                    {idx === 0 && (
                      <span className="px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 text-[10px] font-semibold">
                        Doctorate
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {edu.degree}
                  </h3>

                  <div className="text-xs font-semibold text-slate-300 flex items-start gap-1.5">
                    <Building className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{edu.institution}</span>
                  </div>

                  {edu.thesis && (
                    <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-300 space-y-1">
                      <div className="text-[10px] font-semibold text-cyan-400 uppercase tracking-wider">
                        Doctoral Thesis:
                      </div>
                      <p className="italic text-slate-300 font-mono text-[11px] leading-relaxed">
                        "{edu.thesis}"
                      </p>
                    </div>
                  )}

                  {edu.description && !edu.thesis && (
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {edu.description}
                    </p>
                  )}
                </div>

                {edu.field && (
                  <div className="pt-3 border-t border-slate-800/80 text-[11px] font-mono text-slate-400">
                    <span className="text-slate-500">Domain: </span>
                    <span className="text-slate-300 font-medium">{edu.field}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
