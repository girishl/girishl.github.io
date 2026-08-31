import React, { useState } from 'react';
import { repositories, institutionalProjects, personalInfo } from '../data/portfolioData';
import { Code2, Github, ExternalLink, Sparkles, Server, Layers, Star, GitFork } from 'lucide-react';

export const RepositoriesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'institutional' | 'opensource'>('all');

  return (
    <section id="repositories" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>Engineering, Cloud Infrastructure & Code</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
              Projects & Open-Source Repositories
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
              Institutional cloud laboratory setups, campus-wide OpenStack private cloud deployments, Moodle e-learning automation, and research-grade ML GitHub repositories.
            </p>
          </div>

          {/* GitHub Profile Button & Tab Filters */}
          <div className="flex flex-wrap items-center gap-2 self-start md:self-auto">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-cyan-500 text-slate-950 font-bold'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setActiveTab('institutional')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition cursor-pointer ${
                activeTab === 'institutional'
                  ? 'bg-cyan-500 text-slate-950 font-bold'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              Institutional Infra ({institutionalProjects.length})
            </button>
            <button
              onClick={() => setActiveTab('opensource')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition cursor-pointer ${
                activeTab === 'opensource'
                  ? 'bg-cyan-500 text-slate-950 font-bold'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              GitHub Repos ({repositories.length})
            </button>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              id="all-repos-btn"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-xs font-medium text-slate-200 hover:text-white transition shadow-sm ml-1"
            >
              <Github className="w-3.5 h-3.5 text-cyan-400" />
              <span>GitHub</span>
              <ExternalLink className="w-3 h-3 text-slate-500" />
            </a>
          </div>
        </div>

        {/* 1. Institutional Projects (when 'all' or 'institutional' active) */}
        {(activeTab === 'all' || activeTab === 'institutional') && (
          <div className="space-y-6">
            <div className="flex items-center gap-2 border-b border-slate-800 pb-3">
              <Server className="w-4 h-4 text-cyan-400" />
              <h3 className="text-lg font-bold text-white font-display">
                Institutional & Cloud Infrastructure Projects
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {institutionalProjects.map((proj) => (
                <div
                  key={proj.id}
                  id={`inst-project-${proj.id}`}
                  className="p-6 rounded-3xl bg-slate-900/70 hover:bg-slate-900/90 border border-slate-800/80 hover:border-cyan-500/40 backdrop-blur-xl transition-all duration-200 flex flex-col justify-between space-y-4 shadow-lg shadow-slate-950/40"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono text-[11px] font-semibold">
                        {proj.role}
                      </span>
                      {proj.period && (
                        <span className="text-[11px] font-mono text-slate-400">
                          {proj.period}
                        </span>
                      )}
                    </div>

                    <h4 className="text-lg font-bold text-white group-hover:text-cyan-300 transition">
                      {proj.title}
                    </h4>

                    {proj.impactHighlight && (
                      <div className="p-3 rounded-2xl bg-slate-950/80 border border-slate-800/90 text-xs text-cyan-300 space-y-1">
                        <div className="text-[10px] font-semibold text-emerald-400 uppercase tracking-wider">
                          Key Outcome & Impact:
                        </div>
                        <p className="text-slate-300 text-[11px] leading-relaxed">
                          {proj.impactHighlight}
                        </p>
                      </div>
                    )}

                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {proj.description.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-cyan-400 font-bold shrink-0 mt-0.5">▹</span>
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/80">
                    {proj.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 rounded-lg bg-slate-950 border border-slate-800 text-[11px] font-mono text-slate-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 2. Open-Source Repositories (when 'all' or 'opensource' active) */}
        {(activeTab === 'all' || activeTab === 'opensource') && (
          <div className="space-y-6 pt-4">
            <div className="flex items-center gap-2 border-b border-slate-800 pb-3">
              <Code2 className="w-4 h-4 text-cyan-400" />
              <h3 className="text-lg font-bold text-white font-display">
                Open-Source Research & Courseware Repositories
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {repositories.map((repo) => {
                return (
                  <div
                    key={repo.id}
                    id={`repo-card-${repo.name}`}
                    className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800/80 hover:border-cyan-500/50 hover:bg-slate-900/90 backdrop-blur-md flex flex-col justify-between transition-all duration-200 group"
                  >
                    <div className="space-y-3">
                      {/* Top bar with language tag */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Code2 className="w-4 h-4 text-cyan-400" />
                          <span className="text-xs font-mono text-slate-400">{repo.language}</span>
                        </div>

                        <span className="px-2.5 py-0.5 rounded-full bg-slate-950 border border-slate-800 text-[10px] font-mono text-cyan-400 font-medium">
                          Open Source
                        </span>
                      </div>

                      {/* Title & Link */}
                      <a
                        href={repo.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-base font-bold text-white group-hover:text-cyan-300 transition"
                      >
                        <span>{repo.name}</span>
                        <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-300 transition" />
                      </a>

                      {/* Description */}
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {repo.description}
                      </p>
                    </div>

                    {/* Bottom Tags & Links */}
                    <div className="pt-4 mt-4 border-t border-slate-800/80 space-y-3">
                      <div className="flex flex-wrap gap-1">
                        {repo.topics.slice(0, 3).map((topic) => (
                          <span
                            key={topic}
                            className="px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-[10px] font-mono text-slate-400"
                          >
                            #{topic}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between pt-1">
                        <span className="text-[11px] font-mono text-slate-500">GitHub Public Repo</span>

                        <a
                          href={repo.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs text-cyan-400 hover:text-cyan-300 font-semibold"
                        >
                          <span>View on GitHub</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
