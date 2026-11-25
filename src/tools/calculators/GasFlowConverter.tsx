import { useState } from 'react';
import { num, fmt } from '../calc';
import { CalculatorLayout, FieldGroup, Method, NumberField, Result, Results, Segmented } from '../ui';

type FlowUnit = 'SLPM' | 'SCFH' | 'SCFM' | 'Sm3h';

/** Litres per minute represented by one unit (same standard reference conditions). */
const TO_SLPM: Record<FlowUnit, number> = {
  SLPM: 1,
  SCFH: 28.316847 / 60,
  SCFM: 28.316847,
  Sm3h: 1000 / 60,
};

const LABELS: Record<FlowUnit, string> = {
  SLPM: 'SLPM',
  SCFH: 'SCFH',
  SCFM: 'SCFM',
  Sm3h: 'Sm³/h',
};

const UNITS = Object.keys(TO_SLPM) as FlowUnit[];

export const GasFlowConverter: React.FC = () => {
  const [value, setValue] = useState('100');
  const [unit, setUnit] = useState<FlowUnit>('SCFH');

  const slpm = num(value) * TO_SLPM[unit];

  return (
    <CalculatorLayout
      inputs={
        <>
          <Segmented
            label="Convert from"
            value={unit}
            onChange={setUnit}
            options={UNITS.map((u) => ({ value: u, label: LABELS[u] }))}
          />
          <FieldGroup>
            <NumberField label="Flow rate" unit={LABELS[unit]} value={value} onChange={setValue} />
          </FieldGroup>
        </>
      }
      results={
        <Results>
          {UNITS.map((u) => (
            <Result
              key={u}
              primary={u === 'SLPM' && unit !== 'SLPM'}
              label={u === unit ? `${LABELS[u]} (input)` : LABELS[u]}
              value={fmt(slpm / TO_SLPM[u], u === 'SCFM' ? 3 : 2)}
              unit={LABELS[u]}
            />
          ))}
        </Results>
      }
      method={
        <Method
          equations={['1 SCFH  = 0.4719 SLPM', '1 SCFM  = 28.317 SLPM', '1 Sm³/h = 16.667 SLPM']}
          notes={[
            'These conversions assume both units use the same standard temperature and pressure.',
            'Imperial "standard" conditions are often 60 °F or 70 °F, while metric normal conditions are usually 0 °C. If they differ, scale by the absolute temperature ratio.',
            'Older rotameter-based consoles often read in arbitrary flow units (FMR). Use the manufacturer’s conversion chart for those.',
          ]}
        />
      }
    />
  );
};
