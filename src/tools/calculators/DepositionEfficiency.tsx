import { useState } from 'react';
import { num, fmt, allPositive } from '../calc';
import { CalculatorLayout, FieldGroup, Method, NumberField, Result, Results, Segmented, Warning } from '../ui';

type FeedMode = 'rate' | 'mass';

export const DepositionEfficiency: React.FC = () => {
  const [mode, setMode] = useState<FeedMode>('rate');
  const [massBefore, setMassBefore] = useState('152.40');
  const [massAfter, setMassAfter] = useState('156.85');
  const [feedRate, setFeedRate] = useState('45');
  const [sprayTime, setSprayTime] = useState('10');
  const [powderMass, setPowderMass] = useState('7.5');

  const deposited = num(massAfter) - num(massBefore);
  const fed = mode === 'rate' ? (num(feedRate) * num(sprayTime)) / 60 : num(powderMass);
  const valid = allPositive(fed) && Number.isFinite(deposited);
  const de = valid ? (deposited / fed) * 100 : NaN;

  return (
    <CalculatorLayout
      inputs={
        <>
          <FieldGroup title="Coupon / part mass">
            <NumberField label="Mass before spraying" unit="g" value={massBefore} onChange={setMassBefore} />
            <NumberField label="Mass after spraying" unit="g" value={massAfter} onChange={setMassAfter} />
          </FieldGroup>
          <Segmented
            label="Powder fed is known from"
            value={mode}
            onChange={setMode}
            options={[
              { value: 'rate', label: 'Feed rate × time' },
              { value: 'mass', label: 'Weighed mass' },
            ]}
          />
          {mode === 'rate' ? (
            <FieldGroup title="Powder feed">
              <NumberField label="Powder feed rate" unit="g/min" value={feedRate} onChange={setFeedRate} />
              <NumberField
                label="Spray time on target"
                unit="s"
                value={sprayTime}
                onChange={setSprayTime}
                hint="Time the plume is directed at the coupon"
              />
            </FieldGroup>
          ) : (
            <FieldGroup title="Powder feed">
              <NumberField label="Powder mass fed" unit="g" value={powderMass} onChange={setPowderMass} />
            </FieldGroup>
          )}
        </>
      }
      results={
        <>
          <Results>
            <Result primary label="Deposition efficiency" value={fmt(de, 1)} unit="%" />
            <Result label="Mass deposited" value={fmt(deposited)} unit="g" />
            <Result label="Powder fed" value={fmt(fed)} unit="g" />
            <Result label="Powder not deposited" value={fmt(valid ? fed - deposited : NaN)} unit="g" />
          </Results>
          {valid && deposited < 0 && <Warning>Mass after spraying is lower than before — check the weighings.</Warning>}
          {valid && de > 100 && (
            <Warning>DE above 100 % is not physical. Check the feed rate calibration or spray time.</Warning>
          )}
        </>
      }
      method={
        <Method
          equations={['DE = (m_after − m_before) / m_fed × 100 %', 'm_fed = ṁ_powder × t / 60']}
          notes={[
            'Use a coupon larger than the spray footprint so all deposited material is captured.',
            'Calibrate the powder feed rate by collecting and weighing powder over a timed interval.',
            'ISO 17836 describes a standardised method for determining deposition efficiency.',
          ]}
        />
      }
    />
  );
};
