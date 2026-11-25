import type { HeroContent } from '../data/content';
import { Mail, BookOpen, Globe, FileText } from 'lucide-react';

interface HeroProps {
  content: HeroContent;
}

export const Hero: React.FC<HeroProps> = ({ content }) => {
  return (
    <section className="relative pt-20 pb-32 overflow-hidden bg-white/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-12 lg:gap-16 items-center">
          {/* Text */}
          <div className="order-2 text-center lg:text-left max-w-3xl mx-auto lg:mx-0">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 text-slate-900">
              {content.name}
            </h1>
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8">
              {content.titles.map((title, idx) => (
                <span key={idx} className="px-4 py-1.5 rounded-full bg-blue-900/10 text-blue-900 text-sm font-medium border border-blue-900/20">
                  {title}
                </span>
              ))}
            </div>
            <p className="mt-4 text-xl text-slate-600 leading-relaxed mb-10">
              {content.summary}
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <a href={`https://linkedin.com/in/${content.contact.linkedin}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 border border-blue-900/30 text-base font-medium rounded-md text-blue-900 bg-white/50 hover:bg-blue-900 hover:text-white transition-all shadow-sm backdrop-blur-sm">
                <Globe className="w-5 h-5 mr-2" />
                LinkedIn
              </a>
              <a href={content.contact.scholar} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 border border-blue-900/30 text-base font-medium rounded-md text-blue-900 bg-white/50 hover:bg-blue-900 hover:text-white transition-all shadow-sm backdrop-blur-sm">
                <BookOpen className="w-5 h-5 mr-2" />
                Google Scholar
              </a>
              <a href="/Shalaka_Shinde_Resume.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 border border-blue-900/30 text-base font-medium rounded-md text-blue-900 bg-white/50 hover:bg-blue-900 hover:text-white transition-all shadow-sm backdrop-blur-sm">
                <FileText className="w-5 h-5 mr-2" />
                Resume
              </a>
              <a href="#contact" className="inline-flex items-center px-6 py-3 border border-blue-900/30 text-base font-medium rounded-md text-blue-900 bg-white/50 hover:bg-blue-900 hover:text-white transition-all shadow-sm backdrop-blur-sm">
                <Mail className="w-5 h-5 mr-2" />
                Contact
              </a>
            </div>
          </div>

          {/* Portrait */}
          <div className="order-1 flex justify-center">
            <div className="relative w-56 sm:w-64 lg:w-80">
              {/* Offset accent frame */}
              <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl border-2 border-blue-900/30" aria-hidden="true" />
              <div className="relative p-1.5 rounded-2xl bg-white/70 ring-1 ring-blue-900/20 shadow-lg backdrop-blur-sm">
                <img
                  src="/shalaka-shinde.jpg"
                  alt={`Portrait of ${content.name}`}
                  className="w-full aspect-[4/5] rounded-xl object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
