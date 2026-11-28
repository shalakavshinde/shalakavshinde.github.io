import type { FocusArea } from '../data/content';
import { Layers, Zap, CheckCircle, Database, TrendingUp } from 'lucide-react';
import PlasmaTorchIllustration from './PlasmaTorchIllustration';

interface FocusAreasProps {
  areas: FocusArea[];
}

const getIcon = (index: number) => {
  const icons = [Layers, Zap, CheckCircle, Database, TrendingUp];
  const Icon = icons[index % icons.length];
  return <Icon className="w-8 h-8 text-primary-600" />;
};

export const FocusAreas: React.FC<FocusAreasProps> = ({ areas }) => {
  return (
    <section id="expertise" className="py-24 bg-white/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">Core Competencies</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            How I Create Value
          </p>
        </div>

        <div className="xl:grid xl:grid-cols-[1fr_20%] xl:gap-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {areas.map((area, idx) => (
              <div key={idx} className="relative p-6 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 inline-flex items-center justify-center rounded-xl bg-primary-50 mb-6">
                  {getIcon(idx)}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{area.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {area.description}
                </p>
              </div>
            ))}
          </div>

          <div className="hidden xl:flex items-center justify-center">
            <PlasmaTorchIllustration className="h-full max-h-[640px] w-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};
