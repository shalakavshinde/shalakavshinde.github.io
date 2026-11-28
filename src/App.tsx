import { useEffect } from 'react';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { FocusAreas } from './components/FocusAreas';
import { CaseStudies } from './components/CaseStudies';
import { Credentials } from './components/Credentials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ThermalSprayTools } from './pages/ThermalSprayTools';
import { useHashRoute } from './hooks/useHashRoute';
import { TOOLS_ROUTE } from './tools/registry';

import {
  heroContent,
  focusAreas,
  industrialProblems,
  industrialProblemsIntro,
  publications,
  awards,
  education,
  serviceList
} from './data/content';

function App() {
  const hash = useHashRoute();
  const onTools = hash === TOOLS_ROUTE || hash.startsWith(`${TOOLS_ROUTE}/`);
  const toolId = onTools ? hash.slice(TOOLS_ROUTE.length + 1) : undefined;

  // When switching pages, jump to the top of the tools page or to the home-page anchor (e.g. #impact)
  useEffect(() => {
    const anchor = window.location.hash.slice(1);
    if (!onTools && anchor && !anchor.startsWith('/')) {
      document.getElementById(anchor)?.scrollIntoView();
    } else {
      window.scrollTo(0, 0);
    }
  }, [onTools]);

  return (
    <div className="min-h-screen flex flex-col" style={{ background: '#eef0f5', position: 'relative' }}>
      <div className="relative flex flex-col flex-grow" style={{ zIndex: 1 }}>
        <Nav onTools={onTools} />
        <main className="flex-grow">
          {onTools ? (
            <ThermalSprayTools activeId={toolId} />
          ) : (
            <>
              <Hero content={heroContent} />
              <FocusAreas areas={focusAreas} />
              <CaseStudies problems={industrialProblems} intro={industrialProblemsIntro} />
              <Credentials
                publications={publications}
                awards={awards}
                education={education}
                serviceList={serviceList}
              />
              <Contact contact={heroContent.contact} />
            </>
          )}
        </main>
        <Footer contact={heroContent.contact} />
      </div>
    </div>
  );
}

export default App;
