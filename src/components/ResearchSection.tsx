import React, { useState, useMemo } from 'react';
import { publications, patents, personalInfo } from '../data/portfolioData';
import { Publication, Patent } from '../types';
import { BookOpen, Search, ExternalLink, Quote, Calendar, Award, ShieldCheck, ChevronDown, ChevronUp, FileText, Sparkles, Filter } from 'lucide-react';

interface ResearchSectionProps {
  onOpenBibtex: (pub: Publication) => void;
}

export const ResearchSection: React.FC<ResearchSectionProps> = ({ onOpenBibtex }) => {
  const [selectedType, setSelectedType] = useState<string>('All');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showAllPublications, setShowAllPublications] = useState<boolean>(false);

  const publicationTypes = [
    { label: 'All Publications', value: 'All', count: publications.length },
    { label: 'Journal Articles', value: 'Journal', count: publications.filter(p => p.type === 'Journal').length },
    { label: 'Conference Proceedings', value: 'Conference', count: publications.filter(p => p.type === 'Conference').length },
  ];

  const categories = [
    'All',
    'Deep Learning & NLP',
    'Cloud & Anomaly',
    'Networks & SDN',
    'DevOps & Systems',
    'AgriTech & Healthcare',
    'General AI'
  ];

  const filteredPublications = useMemo(() => {
    return publications.filter((pub) => {
      const matchesType = selectedType === 'All' || pub.type === selectedType;
      const matchesCategory = selectedCategory === 'All' || pub.category === selectedCategory;
      const matchesSearch =
        pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pub.venue.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pub.authors.some((a) => a.toLowerCase().includes(searchQuery.toLowerCase())) ||
        pub.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (pub.doi && pub.doi.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesType && matchesCategory && matchesSearch;
    });
  }, [selectedType, selectedCategory, searchQuery]);

  // If search or specific filter is active, or user expanded, show all filtered results; otherwise show top 5 picks
  const displayedPublications = useMemo(() => {
    if (showAllPublications || searchQuery.trim() !== '' || selectedType !== 'All' || selectedCategory !== 'All') {
      return filteredPublications;
    }
    // Default top 5 picks
    return filteredPublications.slice(0, 5);
  }, [filteredPublications, showAllPublications, searchQuery, selectedType, selectedCategory]);

  const isShowingSubset = !showAllPublications && searchQuery.trim() === '' && selectedType === 'All' && selectedCategory === 'All' && filteredPublications.length > 5;

  return (
    <section id="research" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* ================= SECTION HEADER ================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold mb-3">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Intellectual Property & Scholarly Output</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
              Research Papers, Publications & Patents
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
              Doctoral and post-doctoral research contributions indexed in IEEE Xplore, Springer, Scopus, and published intellectual property patents in Deep Learning, Cloud Computing, and Networks.
            </p>
          </div>

          {/* External Profile Links */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={personalInfo.vidwan}
              target="_blank"
              rel="noopener noreferrer"
              id="vidwan-research-btn"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-emerald-500/50 text-xs font-medium text-slate-300 hover:text-white transition shadow-sm"
            >
              <div className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Vidwan ID: {personalInfo.vidwanId}</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
            </a>

            <a
              href={personalInfo.scholar}
              target="_blank"
              rel="noopener noreferrer"
              id="scholar-header-link"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 text-xs font-medium text-slate-300 hover:text-white transition shadow-sm"
            >
              <Award className="w-3.5 h-3.5 text-cyan-400" />
              <span>Google Scholar</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
            </a>
          </div>
        </div>

        {/* ================= PATENTS SECTION ================= */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Patents & Intellectual Property ({patents.length})
                </h3>
                <p className="text-xs text-slate-400">
                  Published official patent applications filed in Deep Learning and Transformers applications
                </p>
              </div>
            </div>
            <span className="hidden sm:inline-flex px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-[11px] font-mono text-cyan-400">
              3 Official Filings
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {patents.map((patent, index) => (
              <div
                key={patent.id}
                id={`patent-card-${patent.id}`}
                className="p-5 sm:p-6 rounded-2xl bg-slate-900/80 border border-slate-800/90 hover:border-cyan-500/40 backdrop-blur-sm transition duration-200 flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono text-[11px] font-semibold">
                      Patent #{index + 1}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">
                      {patent.year}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                    “{patent.title}”
                  </h4>

                  <div className="space-y-1.5 text-xs">
                    <div className="text-slate-300 font-medium">
                      <span className="text-slate-400">Inventors: </span>
                      {patent.authors.map((a, i) => (
                        <span key={i} className={a === 'G. L' ? 'text-cyan-300 font-bold' : 'text-slate-300'}>
                          {a}{i < patent.authors.length - 1 ? ', ' : ''}
                        </span>
                      ))}
                    </div>

                    <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-[11px] font-mono text-cyan-400 break-all">
                      <span className="text-slate-400 block text-[10px] font-sans uppercase tracking-wider mb-0.5">Application No:</span>
                      {patent.applicationNumber}
                    </div>
                  </div>

                  {patent.description && (
                    <p className="text-xs text-slate-400 leading-relaxed pt-1">
                      {patent.description}
                    </p>
                  )}
                </div>

                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px]">
                  <span className="text-emerald-400 font-medium flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    {patent.status}
                  </span>
                  {patent.category && (
                    <span className="text-slate-500 font-mono text-[10px]">
                      {patent.category}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= RESEARCH PUBLICATIONS SECTION ================= */}
        <div className="space-y-8 pt-6 border-t border-slate-800/80">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    Research Publications ({publications.length})
                  </h3>
                  <p className="text-xs text-slate-400">
                    20 Journal Articles & 6 Conference Proceedings across Springer, IEEE, and VTU publications
                  </p>
                </div>
              </div>
            </div>

            {/* Resume Mode View Button */}
            <button
              id="toggle-all-pubs-btn"
              onClick={() => setShowAllPublications(!showAllPublications)}
              className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold transition shadow-lg shadow-cyan-500/20 cursor-pointer self-start md:self-auto"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>
                {showAllPublications
                  ? 'Showing All 26 Papers (Click to Show Top 5)'
                  : 'View All 26 Publications as in Resume'}
              </span>
              {showAllPublications ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>
          </div>

          {/* Filter Row: Type Pills, Category Dropdown/Pills & Search */}
          <div className="space-y-4">
            <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
              {/* Type Pills */}
              <div className="flex items-center gap-2 overflow-x-auto pb-1 lg:pb-0 scrollbar-none">
                {publicationTypes.map((t) => (
                  <button
                    key={t.value}
                    id={`type-btn-${t.value.toLowerCase()}`}
                    onClick={() => {
                      setSelectedType(t.value);
                    }}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition cursor-pointer flex items-center gap-1.5 ${
                      selectedType === t.value
                        ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                        : 'bg-slate-900/90 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <span>{t.label}</span>
                    <span className={`px-1.5 py-0.2 rounded-full text-[10px] ${selectedType === t.value ? 'bg-slate-950/20 text-slate-950 font-bold' : 'bg-slate-800 text-slate-400'}`}>
                      {t.count}
                    </span>
                  </button>
                ))}
              </div>

              {/* Search Bar */}
              <div className="relative w-full lg:w-80">
                <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  id="search-publications-input"
                  type="text"
                  placeholder="Search 26 papers by title, topic, DOI..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition"
                />
              </div>
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none text-xs">
              <span className="text-[11px] text-slate-500 font-medium flex items-center gap-1 shrink-0 mr-1">
                <Filter className="w-3 h-3" /> Topic:
              </span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  id={`cat-btn-${cat.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1 rounded-lg text-[11px] font-medium whitespace-nowrap transition cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-slate-700 text-cyan-300 font-semibold border border-cyan-500/50'
                      : 'bg-slate-900/60 text-slate-400 hover:text-slate-200 border border-slate-800'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Status Subheader Banner */}
          {isShowingSubset && (
            <div className="p-3.5 rounded-2xl bg-cyan-950/30 border border-cyan-500/20 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-cyan-300">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                <span>Showing <strong>Top 5 Highlighted Publications</strong>. Access the complete record of 26 journal articles and conference proceedings below.</span>
              </div>
              <button
                onClick={() => setShowAllPublications(true)}
                className="underline hover:text-cyan-200 font-semibold cursor-pointer shrink-0 text-left sm:text-right"
              >
                Expand all 26 papers →
              </button>
            </div>
          )}

          {/* Publication Cards List */}
          <div className="space-y-4">
            {displayedPublications.map((pub, index) => {
              const globalIndex = publications.findIndex(p => p.id === pub.id) + 1;
              return (
                <article
                  key={pub.id}
                  id={`publication-${pub.id}`}
                  className="p-5 sm:p-6 rounded-2xl bg-slate-900/70 hover:bg-slate-900/90 border border-slate-800/80 hover:border-slate-700/90 backdrop-blur-md transition-all duration-200 space-y-3 group"
                >
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                    <div className="space-y-2 max-w-3xl">
                      {/* Meta Tags Row (No Citation Count) */}
                      <div className="flex flex-wrap items-center gap-2 text-[11px] font-mono">
                        <span className="px-2 py-0.5 rounded-md bg-slate-950 border border-slate-800 text-slate-400 font-bold">
                          #{globalIndex}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-semibold">
                          {pub.category}
                        </span>
                        <span className={`px-2.5 py-0.5 rounded-full ${pub.type === 'Journal' ? 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/30' : 'bg-violet-500/10 text-violet-300 border border-violet-500/30'}`}>
                          {pub.type === 'Journal' ? 'Journal Article' : 'Conference Paper'}
                        </span>
                        <span className="flex items-center gap-1 text-slate-400">
                          <Calendar className="w-3 h-3 text-slate-500" />
                          {pub.year}
                        </span>
                        {pub.isTopPick && !showAllPublications && (
                          <span className="px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/30 text-[10px]">
                            ★ Top Pick
                          </span>
                        )}
                      </div>

                      {/* Paper Title */}
                      <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                        “{pub.title}”
                      </h4>

                      {/* Authors and Venue */}
                      <p className="text-xs text-slate-300 font-medium">
                        {pub.authors.map((a, i) => (
                          <span
                            key={i}
                            className={
                              a.includes('Girish') || a === 'G. L' || a === 'L. Girish'
                                ? 'text-cyan-300 font-bold underline underline-offset-2'
                                : 'text-slate-400'
                            }
                          >
                            {a}{i < pub.authors.length - 1 ? ', ' : ''}
                          </span>
                        ))}
                      </p>
                      
                      <p className="text-xs text-slate-400 italic">
                        {pub.venue}
                      </p>

                      {pub.doi && (
                        <p className="text-[11px] font-mono text-slate-500">
                          DOI: <span className="text-cyan-400/90">{pub.doi}</span>
                        </p>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center md:flex-col gap-2 shrink-0 pt-2 md:pt-0">
                      <button
                        id={`cite-btn-${pub.id}`}
                        onClick={() => onOpenBibtex(pub)}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-medium text-slate-200 transition cursor-pointer"
                        title="View and Copy BibTeX citation"
                      >
                        <Quote className="w-3.5 h-3.5 text-cyan-400" />
                        <span>Cite (BibTeX)</span>
                      </button>

                      {pub.url && (
                        <a
                          href={pub.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-xs font-medium text-cyan-300 transition"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>View Article</span>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Keyword Tags */}
                  {pub.tags && pub.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/60">
                      {pub.tags.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 rounded bg-slate-950 border border-slate-800/80 text-[10px] font-mono text-slate-400"
                        >
                          #{t}
                        </span>
                      ))}
                    </div>
                  )}
                </article>
              );
            })}

            {filteredPublications.length === 0 && (
              <div className="text-center py-12 rounded-2xl bg-slate-900/40 border border-slate-800 text-slate-400">
                <p className="text-sm">No publications found matching "{searchQuery}".</p>
                <button
                  onClick={() => {
                    setSelectedType('All');
                    setSelectedCategory('All');
                    setSearchQuery('');
                  }}
                  className="mt-2 text-xs text-cyan-400 hover:underline cursor-pointer"
                >
                  Clear search & filters
                </button>
              </div>
            )}
          </div>

          {/* Bottom Expand / Collapse Button if viewing top 5 */}
          {isShowingSubset && (
            <div className="text-center pt-4">
              <button
                id="expand-all-pubs-bottom-btn"
                onClick={() => setShowAllPublications(true)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-slate-900 hover:bg-slate-800 border border-cyan-500/40 text-cyan-300 hover:text-white text-xs font-bold transition shadow-lg cursor-pointer"
              >
                <span>View All 26 Research Papers (20 Journals + 6 Conferences)</span>
                <ChevronDown className="w-4 h-4 text-cyan-400" />
              </button>
            </div>
          )}

          {showAllPublications && (
            <div className="text-center pt-4">
              <button
                id="collapse-pubs-bottom-btn"
                onClick={() => setShowAllPublications(false)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-white text-xs font-medium transition cursor-pointer"
              >
                <span>Show Top 5 Highlights Only</span>
                <ChevronUp className="w-4 h-4 text-slate-400" />
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
