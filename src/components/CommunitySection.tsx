import React from 'react';
import { communityEvents } from '../data/portfolioData';
import { Users, Calendar, Sparkles, Mic, Award, Code2 } from 'lucide-react';

export const CommunitySection: React.FC = () => {
  return (
    <section id="community" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold mb-3">
            <Users className="w-3.5 h-3.5" />
            <span>Developer Ecosystem & Outreach</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            Community, DevFests & Keynotes
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
            Empowering students, developers, and educators through TensorFlow User Group (TFUG) Tumkur, faculty development programs, and hackathon judging.
          </p>
        </div>

        {/* Community Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {communityEvents.map((item) => (
            <div
              key={item.id}
              id={`community-event-${item.id}`}
              className="p-6 rounded-3xl bg-slate-900/70 hover:bg-slate-900/90 border border-slate-800/80 hover:border-slate-700 backdrop-blur-xl transition-all duration-200 flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-semibold font-mono">
                    {item.type}
                  </span>
                  <span className="flex items-center gap-1 text-slate-400 font-mono text-[11px]">
                    <Calendar className="w-3 h-3 text-slate-500" />
                    {item.date}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>

                <div className="text-xs font-medium text-cyan-400">
                  {item.role} • {item.event}
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1 pt-3 border-t border-slate-800/80">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-[10px] font-mono text-slate-400"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
