import { useId, type ReactNode } from 'react';
import { TriangleAlert } from 'lucide-react';

interface NumberFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  unit?: string;
  hint?: string;
}

export const NumberField: React.FC<NumberFieldProps> = ({ label, value, onChange, unit, hint }) => {
  const id = useId();
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-slate-700 mb-1.5">
        {label}
      </label>
      <div className="flex rounded-lg border border-slate-300 bg-white transition focus-within:border-primary-500 focus-within:ring-2 focus-within:ring-primary-100">
        <input
          id={id}
          type="number"
          inputMode="decimal"
          step="any"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full min-w-0 px-3 py-2 bg-transparent text-slate-900 tabular-nums rounded-l-lg focus:outline-none"
        />
        {unit && (
          <span className="flex items-center px-3 text-sm text-slate-500 border-l border-slate-200 bg-slate-50 rounded-r-lg whitespace-nowrap">
            {unit}
          </span>
        )}
      </div>
      {hint && <p className="mt-1 text-xs text-slate-500">{hint}</p>}
    </div>
  );
};

interface SegmentedProps<T extends string> {
  label: string;
  options: { value: T; label: string }[];
  value: T;
  onChange: (value: T) => void;
}

export function Segmented<T extends string>({ label, options, value, onChange }: SegmentedProps<T>) {
  return (
    <div>
      <div className="text-sm font-medium text-slate-700 mb-1.5">{label}</div>
      <div role="radiogroup" aria-label={label} className="inline-flex flex-wrap gap-1 p-1 rounded-lg bg-slate-100 border border-slate-200">
        {options.map((opt) => (
          <button
            key={opt.value}
            type="button"
            role="radio"
            aria-checked={value === opt.value}
            onClick={() => onChange(opt.value)}
            className={`px-3 py-1.5 rounded-md text-sm font-medium transition ${
              value === opt.value ? 'bg-blue-900 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export const Panel: React.FC<{ title: string; children: ReactNode }> = ({ title, children }) => (
  <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
    <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-5">{title}</h3>
    <div className="space-y-5">{children}</div>
  </div>
);

export const FieldGroup: React.FC<{ title?: string; children: ReactNode }> = ({ title, children }) => (
  <div>
    {title && <div className="text-sm font-semibold text-slate-900 mb-3">{title}</div>}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">{children}</div>
  </div>
);

interface ResultProps {
  label: string;
  value: string;
  unit?: string;
  primary?: boolean;
}

export const Result: React.FC<ResultProps> = ({ label, value, unit, primary }) => (
  <div
    className={
      primary
        ? 'sm:col-span-2 rounded-xl bg-blue-900 text-white p-5 shadow-sm'
        : 'rounded-xl bg-slate-50 border border-slate-200 p-4'
    }
  >
    <div className={`text-xs font-semibold uppercase tracking-wider ${primary ? 'text-blue-100' : 'text-slate-500'}`}>
      {label}
    </div>
    <div className="mt-1.5 flex items-baseline gap-1.5">
      <span className={`font-bold tabular-nums ${primary ? 'text-3xl' : 'text-xl text-slate-900'}`}>{value}</span>
      {unit && <span className={`text-sm ${primary ? 'text-blue-100' : 'text-slate-500'}`}>{unit}</span>}
    </div>
  </div>
);

export const Results: React.FC<{ children: ReactNode }> = ({ children }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">{children}</div>
);

export const Warning: React.FC<{ children: ReactNode }> = ({ children }) => (
  <div className="flex gap-2 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-sm text-amber-800">
    <TriangleAlert className="w-4 h-4 mt-0.5 flex-shrink-0" />
    <span>{children}</span>
  </div>
);

/** Equations and assumptions shown under the results. */
export const Method: React.FC<{ equations: string[]; notes?: ReactNode[] }> = ({ equations, notes }) => (
  <div className="rounded-2xl border border-slate-200 bg-white/70 p-6">
    <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">How it's calculated</h3>
    <div className="space-y-1.5 overflow-x-auto">
      {equations.map((eq) => (
        <code key={eq} className="block font-mono text-sm text-slate-800 whitespace-pre">
          {eq}
        </code>
      ))}
    </div>
    {notes && notes.length > 0 && (
      <ul className="mt-4 space-y-1.5 text-sm text-slate-600 list-disc pl-5">
        {notes.map((note, i) => (
          <li key={i}>{note}</li>
        ))}
      </ul>
    )}
  </div>
);

/** Standard two-column calculator body: inputs left, results + method right. */
export const CalculatorLayout: React.FC<{ inputs: ReactNode; results: ReactNode; method: ReactNode }> = ({
  inputs,
  results,
  method,
}) => (
  <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 items-start">
    <Panel title="Inputs">{inputs}</Panel>
    <div className="space-y-6">
      <Panel title="Results">{results}</Panel>
      {method}
    </div>
  </div>
);
