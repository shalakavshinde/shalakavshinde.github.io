import { useState } from 'react';
import { num, fmt, allPositive, gasDensity, WATER_CP, WATER_DENSITY, type PlasmaGas } from '../calc';
import { CalculatorLayout, FieldGroup, Method, NumberField, Result, Results, Segmented, Warning } from '../ui';

type LossMode = 'water' | 'efficiency';
type RefTemp = '0' | '20' | '21.1';

const GASES: { key: PlasmaGas; label: string }[] = [
  { key: 'Ar', label: 'Argon (Ar)' },
  { key: 'N2', label: 'Nitrogen (N₂)' },
  { key: 'H2', label: 'Hydrogen (H₂)' },
  { key: 'He', label: 'Helium (He)' },
];

export const PlasmaEnthalpy: React.FC = () => {
  const [voltage, setVoltage] = useState('65');
  const [current, setCurrent] = useState('600');
  const [lossMode, setLossMode] = useState<LossMode>('water');
  const [waterFlow, setWaterFlow] = useState('18');
  const [waterIn, setWaterIn] = useState('18');
  const [waterOut, setWaterOut] = useState('33');
  const [efficiency, setEfficiency] = useState('55');
  const [refTemp, setRefTemp] = useState<RefTemp>('0');
  const [flows, setFlows] = useState<Record<PlasmaGas, string>>({ Ar: '40', N2: '0', H2: '8', He: '0' });

  const grossKW = (num(voltage) * num(current)) / 1000;
  const coolingKW =
    lossMode === 'water'
      ? ((num(waterFlow) * WATER_DENSITY) / 60) * WATER_CP * (num(waterOut) - num(waterIn))
      : grossKW * (1 - num(efficiency) / 100);
  const netKW = grossKW - coolingKW;
  const eta = (netKW / grossKW) * 100;

  // SLPM → m³/s → kg/s, summed over all gases
  const gasKgPerS = GASES.reduce((sum, { key }) => {
    const slpm = num(flows[key]);
    return sum + (Number.isFinite(slpm) ? (slpm / 60000) * gasDensity(key, Number(refTemp)) : 0);
  }, 0);

  const valid = allPositive(grossKW, netKW, gasKgPerS);
  const enthalpyMJkg = valid ? netKW / gasKgPerS / 1000 : NaN;

  return (
    <CalculatorLayout
      inputs={
        <>
          <FieldGroup title="Torch electrical input">
            <NumberField label="Arc voltage" unit="V" value={voltage} onChange={setVoltage} />
            <NumberField label="Arc current" unit="A" value={current} onChange={setCurrent} />
          </FieldGroup>
          <Segmented
            label="Thermal losses from"
            value={lossMode}
            onChange={setLossMode}
            options={[
              { value: 'water', label: 'Cooling-water balance' },
              { value: 'efficiency', label: 'Assumed efficiency' },
            ]}
          />
          {lossMode === 'water' ? (
            <FieldGroup title="Torch cooling water">
              <NumberField label="Water flow rate" unit="L/min" value={waterFlow} onChange={setWaterFlow} />
              <div className="hidden sm:block" />
              <NumberField label="Inlet temperature" unit="°C" value={waterIn} onChange={setWaterIn} />
              <NumberField label="Outlet temperature" unit="°C" value={waterOut} onChange={setWaterOut} />
            </FieldGroup>
          ) : (
            <FieldGroup title="Torch efficiency">
              <NumberField
                label="Thermal efficiency"
                unit="%"
                value={efficiency}
                onChange={setEfficiency}
                hint="Typically 40–70 % for DC plasma torches"
              />
            </FieldGroup>
          )}
          <FieldGroup title="Plasma gas flows">
            {GASES.map(({ key, label }) => (
              <NumberField
                key={key}
                label={label}
                unit="SLPM"
                value={flows[key]}
                onChange={(v) => setFlows((f) => ({ ...f, [key]: v }))}
              />
            ))}
          </FieldGroup>
          <Segmented
            label="Flowmeter standard reference temperature"
            value={refTemp}
            onChange={setRefTemp}
            options={[
              { value: '0', label: '0 °C' },
              { value: '20', label: '20 °C' },
              { value: '21.1', label: '21.1 °C (70 °F)' },
            ]}
          />
        </>
      }
      results={
        <>
          <Results>
            <Result primary label="Approx. specific enthalpy" value={fmt(enthalpyMJkg, 1)} unit="MJ/kg" />
            <Result label="Gross electrical power" value={fmt(grossKW)} unit="kW" />
            <Result label="Net power to gas" value={fmt(netKW)} unit="kW" />
            <Result label="Cooling losses" value={fmt(coolingKW)} unit="kW" />
            <Result label="Thermal efficiency" value={fmt(eta, 1)} unit="%" />
            <Result label="Total gas mass flow" value={fmt(gasKgPerS * 1000, 3)} unit="g/s" />
          </Results>
          {Number.isFinite(netKW) && netKW <= 0 && (
            <Warning>Cooling losses meet or exceed the electrical input — check the water flow and temperatures.</Warning>
          )}
          {Number.isFinite(gasKgPerS) && gasKgPerS <= 0 && <Warning>Enter at least one plasma gas flow.</Warning>}
        </>
      }
      method={
        <Method
          equations={[
            'P_gross = V × I',
            'P_loss  = ṁ_water × c_p × (T_out − T_in)      (c_p = 4.186 kJ/kg·K)',
            'P_net   = P_gross − P_loss',
            'ṁ_gas   = Σ (Q_i / 60 000) × ρ_i(T_ref, 1 atm)',
            'h       = P_net / ṁ_gas',
          ]}
          notes={[
            'This is the mass-averaged enthalpy at the nozzle exit. The real jet has steep radial gradients, so treat it as a process index, not a local value.',
            'Gas densities assume ideal gas at 1 atm. Pick the reference temperature your mass-flow controllers are calibrated to.',
            'Water-balance losses ignore radiation and convection from the torch body, so efficiency is slightly overestimated.',
          ]}
        />
      }
    />
  );
};
