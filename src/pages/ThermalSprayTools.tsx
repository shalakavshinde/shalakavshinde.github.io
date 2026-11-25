import { ArrowLeft, Info } from 'lucide-react';
import { thermalSprayTools, TOOLS_ROUTE } from '../tools/registry';

interface ThermalSprayToolsProps {
  activeId?: string;
}

export const ThermalSprayTools: React.FC<ThermalSprayToolsProps> = ({ activeId }) => {
  const active = thermalSprayTools.find((t) => t.id === activeId) ?? thermalSprayTools[0];
  const ActiveIcon = active.icon;

  return (
    <section className="py-16 bg-white/60 min-h-[70vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <a href="#/" className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-blue-900 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-1.5" />
          Back to home
        </a>

        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mt-6 mb-12">
          <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">Engineering Calculators</h2>
          <h1 className="mt-2 text-3xl leading-tight font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Thermal Spray Tools
          </h1>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed">
            Quick calculators for everyday thermal-spray process work. Each one shows the equations and assumptions behind its results.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[16rem_minmax(0,1fr)] gap-8 items-start">
          {/* Tool list */}
          <nav aria-label="Calculators" className="lg:sticky lg:top-24">
            <ul className="flex lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0 -mx-4 px-4 lg:mx-0 lg:px-0">
              {thermalSprayTools.map((tool) => {
                const Icon = tool.icon;
                const isActive = tool.id === active.id;
                return (
                  <li key={tool.id} className="flex-shrink-0">
                    <a
                      href={`${TOOLS_ROUTE}/${tool.id}`}
                      aria-current={isActive ? 'page' : undefined}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl border text-sm font-medium transition-all whitespace-nowrap ${
                        isActive
                          ? 'bg-blue-900 text-white border-blue-900 shadow-sm'
                          : 'bg-white/70 text-slate-700 border-slate-200 hover:border-blue-900/30 hover:text-blue-900'
                      }`}
                    >
                      <Icon className="w-5 h-5 flex-shrink-0" />
                      {tool.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Active calculator */}
          <div>
            <div className="flex items-start gap-4 mb-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary-50 text-primary-600 flex-shrink-0">
                <ActiveIcon className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900">{active.name}</h2>
                <p className="mt-1 text-slate-600 leading-relaxed">{active.summary}</p>
              </div>
            </div>
            <active.Component key={active.id} />
          </div>
        </div>

        <p className="mt-12 flex gap-2 max-w-3xl mx-auto text-sm text-slate-500 leading-relaxed">
          <Info className="w-4 h-4 mt-0.5 flex-shrink-0" />
          These tools give engineering estimates for process planning and learning. Validate results against measured
          coupons and your equipment manufacturer’s data before production use.
        </p>
      </div>
    </section>
  );
};
