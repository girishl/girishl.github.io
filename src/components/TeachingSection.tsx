import React from 'react';
import { courses } from '../data/portfolioData';
import { GraduationCap, BookOpen, Layers, CheckCircle, ExternalLink, Bookmark } from 'lucide-react';

export const TeachingSection: React.FC = () => {
  return (
    <section id="teaching" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>VTU Curriculum & Pedagogy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            Teaching & Courseware
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
            Undergraduate and postgraduate courses instructed by Dr. Girish L at Shridevi Institute of Engineering & Technology under Visvesvaraya Technological University (VTU).
          </p>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              id={`course-card-${course.id}`}
              className="p-6 rounded-3xl bg-slate-900/70 hover:bg-slate-900/90 border border-slate-800/80 hover:border-slate-700 backdrop-blur-xl transition-all duration-200 flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                {/* Header tags */}
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono text-xs font-semibold">
                    {course.code}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">
                    {course.semester} • {course.level}
                  </span>
                </div>

                {/* Course Name */}
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {course.name}
                </h3>

                {/* Description */}
                <p className="text-xs text-slate-300 leading-relaxed">
                  {course.description}
                </p>
              </div>

              {/* Syllabus topics */}
              <div className="pt-3 border-t border-slate-800/80 space-y-2">
                <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                  Key Modules Covered:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {course.topics.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-[10px] font-mono text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
