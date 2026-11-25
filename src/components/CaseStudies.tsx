import type { IndustrialProblem } from '../data/content';
import { Flame, Database, Cpu, FlaskConical, Leaf, Settings } from 'lucide-react';

interface CaseStudiesProps {
  problems: IndustrialProblem[];
  intro: string;
}

const problemIcons: Record<string, React.ReactNode> = {
  'thermal-protection': <Flame className="w-6 h-6" />,
  'legacy-data': <Database className="w-6 h-6" />,
  'automation': <Cpu className="w-6 h-6" />,
  'turbine-environments': <FlaskConical className="w-6 h-6" />,
  'sustainable-materials': <Leaf className="w-6 h-6" />,
  'simulation': <Settings className="w-6 h-6" />,
};

export const CaseStudies: React.FC<CaseStudiesProps> = ({ problems, intro }) => {
  return (
    <section id="impact" className="py-24 bg-slate-50/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">Industry Impact</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Industrial Problems I Solve
          </p>
        </div>

        {/* Intro Paragraph */}
        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-lg text-slate-600 leading-relaxed text-center">
            {intro}
          </p>
        </div>

        {/* Problem Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {problems.map((problem, idx) => (
            <div
              key={problem.id}
              className="group bg-white rounded-2xl shadow-sm border border-slate-200 p-8 transition-all duration-300 hover:shadow-lg hover:border-primary-200 hover:-translate-y-1 relative overflow-hidden"
            >
              {/* Subtle background number */}
              <div
                aria-hidden="true"
                className="absolute -right-4 -top-4 text-[8rem] font-black text-slate-50 leading-none select-none pointer-events-none transition-colors duration-300 group-hover:text-primary-50"
              >
                {`0${idx + 1}`}
              </div>

              <div className="relative z-10">
                {/* Icon + Number row */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-primary-50 text-primary-600 transition-colors duration-300 group-hover:bg-primary-100">
                    {problemIcons[problem.id] || <Flame className="w-6 h-6" />}
                  </div>
                  <span className="text-sm font-semibold text-slate-400 tracking-wider uppercase">
                    {`0${idx + 1}`}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 mb-3 leading-snug">
                  {problem.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 leading-relaxed">
                  {problem.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
