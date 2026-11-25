import { useState } from 'react';
import type { Publication, Award, Education, Service } from '../data/content';
import { FileText, Trophy, GraduationCap, Users, ExternalLink } from 'lucide-react';

interface CredentialsProps {
  publications: Publication[];
  awards: Award[];
  education: Education[];
  serviceList: Service[];
}

export const Credentials: React.FC<CredentialsProps> = ({ publications, awards, education, serviceList }) => {
  const [activeTab, setActiveTab] = useState<'publications' | 'awards' | 'education' | 'service'>('publications');

  return (
    <section id="credentials" className="py-24 bg-white/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">Evidence of Excellence</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Track Record & Credibility
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12 border-b border-slate-200 pb-px">
          <button 
            onClick={() => setActiveTab('publications')}
            className={`px-4 py-3 font-medium text-sm rounded-t-lg transition-colors flex items-center gap-2 ${activeTab === 'publications' ? 'bg-primary-50 text-primary-700 border-b-2 border-primary-600' : 'text-slate-500 hover:text-slate-700 hover:bg-slate-50'}`}
          >
            <FileText className="w-4 h-4" /> Publications
          </button>
          <button 
            onClick={() => setActiveTab('awards')}
            className={`px-4 py-3 font-medium text-sm rounded-t-lg transition-colors flex items-center gap-2 ${activeTab === 'awards' ? 'bg-primary-50 text-primary-700 border-b-2 border-primary-600' : 'text-slate-500 hover:text-slate-700 hover:bg-slate-50'}`}
          >
            <Trophy className="w-4 h-4" /> Awards
          </button>
          <button 
            onClick={() => setActiveTab('education')}
            className={`px-4 py-3 font-medium text-sm rounded-t-lg transition-colors flex items-center gap-2 ${activeTab === 'education' ? 'bg-primary-50 text-primary-700 border-b-2 border-primary-600' : 'text-slate-500 hover:text-slate-700 hover:bg-slate-50'}`}
          >
            <GraduationCap className="w-4 h-4" /> Education
          </button>
          <button 
            onClick={() => setActiveTab('service')}
            className={`px-4 py-3 font-medium text-sm rounded-t-lg transition-colors flex items-center gap-2 ${activeTab === 'service' ? 'bg-primary-50 text-primary-700 border-b-2 border-primary-600' : 'text-slate-500 hover:text-slate-700 hover:bg-slate-50'}`}
          >
            <Users className="w-4 h-4" /> Service
          </button>
        </div>

        <div className="max-w-4xl mx-auto">
          {activeTab === 'publications' && (
            <div className="space-y-6">
              {publications.map((pub) => (
                <div key={pub.id} className="p-6 rounded-xl border border-slate-200 hover:border-primary-300 transition-colors bg-white">
                  {pub.link ? (
                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-lg font-bold text-slate-900 hover:text-primary-600 transition-colors group mb-2"
                    >
                      {pub.title}
                      <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                    </a>
                  ) : (
                    <h4 className="text-lg font-bold text-slate-900 mb-2">{pub.title}</h4>
                  )}
                  <p className="text-slate-700 mb-2">{pub.authors}</p>
                  <p className="text-sm text-slate-500 font-medium">
                    <span className="text-primary-600">{pub.journal}</span> • {pub.year} • {pub.details}
                  </p>
                  {pub.awards && pub.awards.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {pub.awards.map((award, idx) => (
                        <span key={idx} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                          {award}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {activeTab === 'awards' && (
            <div className="space-y-6">
              {awards.map((award) => (
                <div key={award.id} className="flex gap-6 p-6 rounded-xl border border-slate-200 bg-white items-start">
                  <div className="bg-primary-100 text-primary-700 p-3 rounded-lg shrink-0">
                    <Trophy className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h4 className="text-lg font-bold text-slate-900">{award.title}</h4>
                      <span className="px-2 py-1 rounded text-xs font-semibold bg-slate-100 text-slate-600">{award.year}</span>
                    </div>
                    <p className="text-slate-600">{award.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'education' && (
            <div className="space-y-6">
              {education.map((edu, idx) => (
                <div key={idx} className="p-6 rounded-xl border border-slate-200 bg-white">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-bold text-slate-900">{edu.degree}</h4>
                    <span className="text-sm font-medium text-slate-500">{edu.period}</span>
                  </div>
                  <p className="text-primary-600 font-medium mb-3">{edu.institution}</p>
                  <p className="text-slate-600">{edu.details}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'service' && (
            <div className="space-y-6">
              {serviceList.map((service, idx) => (
                <div key={idx} className="p-6 rounded-xl border border-slate-200 bg-white">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-bold text-slate-900">{service.role}</h4>
                    <span className="text-sm font-medium text-slate-500">{service.years}</span>
                  </div>
                  <p className="text-primary-600 font-medium mb-2">{service.organization}</p>
                  <p className="text-slate-600">{service.details}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
