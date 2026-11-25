import { useState } from 'react';
import { num, fmt, allPositive } from '../calc';
import { CalculatorLayout, FieldGroup, Method, NumberField, Result, Results } from '../ui';

export const SurfaceSpeed: React.FC = () => {
  const [diameter, setDiameter] = useState('100');
  const [rpm, setRpm] = useState('300');
  const [traverse, setTraverse] = useState('10');
  const [targetSpeed, setTargetSpeed] = useState('1.0');

  const d = num(diameter);
  const revPerS = num(rpm) / 60;
  const surfaceMmPerS = allPositive(d, revPerS) ? Math.PI * d * revPerS : NaN;
  const pitch = allPositive(num(traverse), revPerS) ? num(traverse) / revPerS : NaN;
  const rpmForTarget = allPositive(d, num(targetSpeed)) ? (num(targetSpeed) * 1000 * 60) / (Math.PI * d) : NaN;

  return (
    <CalculatorLayout
      inputs={
        <>
          <FieldGroup title="Rotating part">
            <NumberField label="Part diameter" unit="mm" value={diameter} onChange={setDiameter} />
            <NumberField label="Rotation speed" unit="RPM" value={rpm} onChange={setRpm} />
          </FieldGroup>
          <FieldGroup title="Gun motion">
            <NumberField
              label="Axial traverse speed"
              unit="mm/s"
              value={traverse}
              onChange={setTraverse}
              hint="Gun speed along the part axis"
            />
            <NumberField
              label="Target surface speed"
              unit="m/s"
              value={targetSpeed}
              onChange={setTargetSpeed}
              hint="Used to back-calculate RPM"
            />
          </FieldGroup>
        </>
      }
      results={
        <Results>
          <Result primary label="Surface speed" value={fmt(surfaceMmPerS / 1000)} unit="m/s" />
          <Result label="Surface speed" value={fmt((surfaceMmPerS * 60) / 1000, 1)} unit="m/min" />
          <Result label="Helical pitch" value={fmt(pitch)} unit="mm/rev" />
          <Result label="RPM for target speed" value={fmt(rpmForTarget, 0)} unit="RPM" />
        </Results>
      }
      method={
        <Method
          equations={['v_s   = π × D × RPM / 60', 'pitch = v_axial / (RPM / 60)', 'RPM   = 60 × v_target / (π × D)']}
          notes={[
            'Keep the helical pitch below the spray-spot width so passes overlap and the coating stays even.',
          ]}
        />
      }
    />
  );
};
