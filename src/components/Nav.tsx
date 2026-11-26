import { useState, useEffect, useRef } from 'react';
import { Menu, X, FileText, Compass, Zap, Award, GraduationCap, Mail } from 'lucide-react';

interface NavProps {
  onTools?: boolean;
}

export const Nav: React.FC<NavProps> = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  const navLinkClass =
    'text-slate-600 hover:text-slate-900 hover:bg-slate-50 px-3 py-2 rounded-md text-sm font-medium whitespace-nowrap transition-colors';

  // Close mobile menu when clicking outside or pressing Escape
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    };
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Resume', href: '/Shalaka_Shinde_Resume.pdf', external: true, icon: FileText },
    { label: 'Expertise', href: '#expertise', external: false, icon: Compass },
    { label: 'Impact', href: '#impact', external: false, icon: Zap },
    { label: 'Credentials', href: '#credentials', external: false, icon: Award },
    {
      label: 'Google Scholar',
      href: 'https://scholar.google.com/citations?user=NbHWfiMAAAAJ&hl=en&authuser=1',
      external: true,
      icon: GraduationCap,
    },
    { label: 'Contact', href: '#contact', external: false, icon: Mail },
  ];

  return (
    <nav ref={navRef} className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#/" className="font-bold text-slate-900 text-xl tracking-tight hover:text-blue-900 transition-colors">
              S. Shinde
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-1 xl:space-x-4">
            <a
              href="/Shalaka_Shinde_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={navLinkClass}
            >
              Resume
            </a>
            <a href="#expertise" className={navLinkClass}>
              Expertise
            </a>
            <a href="#impact" className={navLinkClass}>
              Impact
            </a>
            <a href="#credentials" className={navLinkClass}>
              Credentials
            </a>
            <a
              href="https://scholar.google.com/citations?user=NbHWfiMAAAAJ&hl=en&authuser=1"
              target="_blank"
              rel="noopener noreferrer"
              className={navLinkClass}
            >
              Google Scholar
            </a>
            <a
              href="#contact"
              className="text-white bg-blue-900 hover:bg-blue-800 px-4 py-2 rounded-md text-sm font-medium whitespace-nowrap transition-colors shadow-sm ml-2"
            >
              Contact
            </a>
          </div>

          {/* Mobile/Tablet Controls */}
          <div className="flex items-center space-x-2 lg:hidden">
            {/* Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-900/30 transition-colors"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-slate-900" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6 text-slate-900" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md border-b border-slate-200 px-4 pt-2 pb-6 shadow-lg animate-in fade-in duration-150">
          <div className="flex flex-col space-y-1">
            {navLinks.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-3 py-3 rounded-lg text-base font-medium transition-colors ${
                    item.label === 'Contact'
                      ? 'bg-blue-900 text-white hover:bg-blue-800 mt-2 justify-center'
                      : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <Icon className={`w-5 h-5 ${item.label === 'Contact' ? 'text-white' : 'text-blue-900'}`} />
                  <span>{item.label}</span>
                  {item.external && (
                    <span className="text-xs text-slate-400 ml-auto uppercase tracking-wider">External</span>
                  )}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};
