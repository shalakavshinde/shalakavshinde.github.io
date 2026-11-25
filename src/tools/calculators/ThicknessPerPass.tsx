import { useState } from 'react';
import { num, fmt, allPositive } from '../calc';
import { CalculatorLayout, FieldGroup, Method, NumberField, Result, Results, Warning } from '../ui';

const formatDuration = (seconds: number) => {
  if (!Number.isFinite(seconds)) return '—';
  const m = Math.floor(seconds / 60);
  const s = Math.round(seconds % 60);
  return m > 0 ? `${m} min ${s} s` : `${s} s`;
};

export const ThicknessPerPass: React.FC = () => {
  const [feedRate, setFeedRate] = useState('45');
  const [de, setDe] = useState('60');
  const [density, setDensity] = useState('6.0');
  const [porosity, setPorosity] = useState('10');
  const [speed, setSpeed] = useState('1000');
  const [step, setStep] = useState('5');
  const [target, setTarget] = useState('300');
  const [area, setArea] = useState('500');

  const depositGPerS = (num(feedRate) / 60) * (num(de) / 100);
  const coverageMm2PerS = num(speed) * num(step);
  const coatingGPerMm3 = (num(density) / 1000) * (1 - num(porosity) / 100);
  const valid = allPositive(depositGPerS, coverageMm2PerS, coatingGPerMm3);

  const umPerPass = valid ? (depositGPerS / coverageMm2PerS / coatingGPerMm3) * 1000 : NaN;
  const passes = valid && allPositive(num(target)) ? Math.ceil(num(target) / umPerPass) : NaN;
  const secondsPerPass = allPositive(num(area), coverageMm2PerS) ? (num(area) * 100) / coverageMm2PerS : NaN;

  return (
    <CalculatorLayout
      inputs={
        <>
          <FieldGroup title="Powder & deposition">
            <NumberField label="Powder feed rate" unit="g/min" value={feedRate} onChange={setFeedRate} />
            <NumberField label="Deposition efficiency" unit="%" value={de} onChange={setDe} />
          </FieldGroup>
          <FieldGroup title="Coating">
            <NumberField
              label="Material density"
              unit="g/cm³"
              value={density}
              onChange={setDensity}
              hint="e.g. 7YSZ ≈ 6.0, NiCoCrAlY ≈ 7.3"
            />
            <NumberField label="Coating porosity" unit="%" value={porosity} onChange={setPorosity} />
          </FieldGroup>
          <FieldGroup title="Robot path">
            <NumberField label="Gun traverse speed" unit="mm/s" value={speed} onChange={setSpeed} />
            <NumberField label="Step (raster pitch)" unit="mm" value={step} onChange={setStep} />
          </FieldGroup>
          <FieldGroup title="Job">
            <NumberField label="Target thickness" unit="µm" value={target} onChange={setTarget} />
            <NumberField label="Area to coat" unit="cm²" value={area} onChange={setArea} />
          </FieldGroup>
        </>
      }
      results={
        <>
          <Results>
            <Result primary label="Thickness per pass" value={fmt(umPerPass, 1)} unit="µm" />
            <Result label="Passes to target" value={fmt(passes, 0)} />
            <Result label="Thickness after passes" value={fmt(passes * umPerPass, 0)} unit="µm" />
            <Result label="Deposition rate" value={fmt(depositGPerS * 60)} unit="g/min" />
            <Result label="Coverage rate" value={fmt((coverageMm2PerS * 60) / 1e6, 3)} unit="m²/min" />
            <Result label="Time per pass" value={formatDuration(secondsPerPass)} />
            <Result label="Total spray time" value={formatDuration(passes * secondsPerPass)} />
          </Results>
          {valid && num(porosity) >= 100 && <Warning>Porosity must be below 100 %.</Warning>}
        </>
      }
      method={
        <Method
          equations={[
            'ṁ_dep  = ṁ_powder × DE',
            't_pass = ṁ_dep / (v × p × ρ × (1 − φ))',
            'N      = ⌈ t_target / t_pass ⌉',
          ]}
          notes={[
            'v = traverse speed, p = step, ρ = bulk density of the coating material, φ = porosity.',
            'Assumes a uniform raster over the area. Edges, overspray and turnarounds are ignored, so compare against a measured coupon.',
          ]}
        />
      }
    />
  );
};
