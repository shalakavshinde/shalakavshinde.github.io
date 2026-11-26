import type { ContactInfo } from '../data/content';
import { Globe, GraduationCap, FileText, Mail, MapPin } from 'lucide-react';

interface FooterProps {
  contact: ContactInfo;
}

export const Footer: React.FC<FooterProps> = ({ contact }) => {
  const currentYear = new Date().getFullYear();
  const scholarUrl =
    contact.scholar ||
    'https://scholar.google.com/citations?user=NbHWfiMAAAAJ';

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Column 1: Identity & Background */}
          <div className="lg:col-span-2">
            <a href="#/" className="text-2xl font-bold text-white tracking-tight hover:text-blue-400 transition-colors">
              Dr. Shalaka Vilas Shinde
            </a>
            <p className="mt-3 text-slate-400 text-sm leading-relaxed max-w-md">
              Materials Researcher and Technical Lead specializing in thermal spray coatings, microstructural design, process optimization, and production scaling for extreme industrial environments.
            </p>
            <div className="flex items-center gap-2 mt-4 text-xs text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-blue-400" />
              <span>{contact.location}</span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#expertise" className="hover:text-white transition-colors">
                  Core Competencies
                </a>
              </li>
              <li>
                <a href="#impact" className="hover:text-white transition-colors">
                  Industrial Impact
                </a>
              </li>
              <li>
                <a href="#credentials" className="hover:text-white transition-colors">
                  Credentials & Publications
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Get in Touch
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Connect & Research Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-4">
              Connect & Research
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href={`https://linkedin.com/in/${contact.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Globe className="w-4 h-4 text-blue-400" />
                  <span>LinkedIn Profile</span>
                </a>
              </li>
              <li>
                <a
                  href={scholarUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-white transition-colors"
                >
                  <GraduationCap className="w-4 h-4 text-blue-400" />
                  <span>Google Scholar</span>
                </a>
              </li>
              <li>
                <a
                  href="/Shalaka_Shinde_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-white transition-colors"
                >
                  <FileText className="w-4 h-4 text-blue-400" />
                  <span>Download Resume (PDF)</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="inline-flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-blue-400" />
                  <span>{contact.email}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom divider and copyright */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-4">
          <p>
            &copy; {currentYear} Dr. Shalaka Vilas Shinde. All rights reserved.
          </p>
          <p className="text-slate-400">
            Thermal Spray & Materials Science
          </p>
        </div>
      </div>
    </footer>
  );
};
