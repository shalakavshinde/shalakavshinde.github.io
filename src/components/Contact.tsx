import { useState } from 'react';
import type { ContactInfo } from '../data/content';
import { Mail, Globe, MapPin, Copy, Check, ExternalLink, GraduationCap, FileText } from 'lucide-react';

interface ContactProps {
  contact: ContactInfo;
}

export const Contact: React.FC<ContactProps> = ({ contact }) => {
  const [emailCopied, setEmailCopied] = useState(false);

  const scholarUrl =
    contact.scholar ||
    'https://scholar.google.com/citations?view_op=list_works&hl=en&hl=en&user=NbHWfiMAAAAJ';

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(contact.email);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 bg-white/70 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base text-blue-900 font-semibold tracking-wide uppercase">Get In Touch</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl text-slate-900">
            Let's Collaborate
          </p>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed">
            Open to OEM partnerships, research collaborations, technical consulting, and speaking engagements across thermal spray technology and materials science.
          </p>
        </div>

        {/* 4 Interactive Action Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Email Card with Copy Option */}
          <div className="flex flex-col items-center p-6 bg-white/90 backdrop-blur-sm rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-900/30 transition-all text-center group">
            <div className="p-3 bg-blue-900/10 rounded-xl text-blue-900 mb-4 group-hover:scale-110 transition-transform">
              <Mail className="w-7 h-7" />
            </div>
            <h3 className="font-semibold text-slate-900 text-lg mb-1">Email</h3>
            <p className="text-xs text-slate-500 mb-3">Direct Correspondence</p>
            <p className="text-sm font-medium text-slate-800 break-all mb-4">{contact.email}</p>
            <div className="mt-auto w-full flex flex-col gap-2">
              <a
                href={`mailto:${contact.email}`}
                className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg bg-blue-900 text-white hover:bg-blue-800 transition-colors shadow-sm"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Open Mail App</span>
              </a>
              <button
                type="button"
                onClick={copyEmailToClipboard}
                className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-medium rounded-lg border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 transition-colors"
                aria-label="Copy email address to clipboard"
              >
                {emailCopied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700 font-semibold">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-500" />
                    <span>Copy Address</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* LinkedIn Card */}
          <a
            href={`https://linkedin.com/in/${contact.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-6 bg-white/90 backdrop-blur-sm rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-900/30 transition-all text-center group"
          >
            <div className="p-3 bg-blue-900/10 rounded-xl text-blue-900 mb-4 group-hover:scale-110 transition-transform">
              <Globe className="w-7 h-7" />
            </div>
            <h3 className="font-semibold text-slate-900 text-lg mb-1">LinkedIn</h3>
            <p className="text-xs text-slate-500 mb-3">Professional Network</p>
            <p className="text-sm font-semibold text-blue-900 mb-4 group-hover:underline">
              Shalaka Shinde
            </p>
            <div className="mt-auto w-full">
              <span className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg border border-blue-900/20 bg-blue-900/5 text-blue-900 group-hover:bg-blue-900 group-hover:text-white transition-all">
                <span>Connect on LinkedIn</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </span>
            </div>
          </a>

          {/* Google Scholar Card */}
          <a
            href={scholarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-6 bg-white/90 backdrop-blur-sm rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-900/30 transition-all text-center group"
          >
            <div className="p-3 bg-blue-900/10 rounded-xl text-blue-900 mb-4 group-hover:scale-110 transition-transform">
              <GraduationCap className="w-7 h-7" />
            </div>
            <h3 className="font-semibold text-slate-900 text-lg mb-1">Google Scholar</h3>
            <p className="text-xs text-slate-500 mb-3">Peer-Reviewed Papers</p>
            <p className="text-sm font-semibold text-blue-900 mb-4 group-hover:underline">
              Citations & Indices
            </p>
            <div className="mt-auto w-full">
              <span className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg border border-blue-900/20 bg-blue-900/5 text-blue-900 group-hover:bg-blue-900 group-hover:text-white transition-all">
                <span>View Publications</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </span>
            </div>
          </a>

          {/* Download Resume Card */}
          <a
            href="/Shalaka_Shinde_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-6 bg-white/90 backdrop-blur-sm rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-900/30 transition-all text-center group"
          >
            <div className="p-3 bg-blue-900/10 rounded-xl text-blue-900 mb-4 group-hover:scale-110 transition-transform">
              <FileText className="w-7 h-7" />
            </div>
            <h3 className="font-semibold text-slate-900 text-lg mb-1">Resume / CV</h3>
            <p className="text-xs text-slate-500 mb-3">Complete Track Record</p>
            <p className="text-sm font-semibold text-blue-900 mb-4 group-hover:underline">
              PDF Document
            </p>
            <div className="mt-auto w-full">
              <span className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg border border-blue-900/20 bg-blue-900/5 text-blue-900 group-hover:bg-blue-900 group-hover:text-white transition-all">
                <span>Download Resume</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </span>
            </div>
          </a>
        </div>

        {/* Location Indicator: Informative & clean */}
        <div className="flex items-center justify-center gap-2 text-sm text-slate-600 py-3 px-6 bg-slate-100/70 rounded-full max-w-fit mx-auto border border-slate-200">
          <MapPin className="w-4 h-4 text-blue-900 flex-shrink-0" />
          <span>
            Based in <strong className="text-slate-900">{contact.location}</strong> · Available for on-site & remote engagements worldwide
          </span>
        </div>
      </div>
    </section>
  );
};
