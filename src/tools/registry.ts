import type { LucideIcon } from 'lucide-react';
import { Target, Flame, Layers, RotateCw, ArrowLeftRight } from 'lucide-react';
import { DepositionEfficiency } from './calculators/DepositionEfficiency';
import { PlasmaEnthalpy } from './calculators/PlasmaEnthalpy';
import { ThicknessPerPass } from './calculators/ThicknessPerPass';
import { SurfaceSpeed } from './calculators/SurfaceSpeed';
import { GasFlowConverter } from './calculators/GasFlowConverter';

export interface ThermalSprayTool {
  /** URL slug: #/thermal-spray-tools/<id> */
  id: string;
  name: string;
  summary: string;
  icon: LucideIcon;
  Component: React.FC;
}

/** To add a calculator, create a component in ./calculators and register it here. */
export const thermalSprayTools: ThermalSprayTool[] = [
  {
    id: 'deposition-efficiency',
    name: 'Deposition Efficiency',
    summary: 'Fraction of fed powder that ends up in the coating, from coupon weight gain and powder feed.',
    icon: Target,
    Component: DepositionEfficiency,
  },
  {
    id: 'plasma-enthalpy',
    name: 'Approximate Plasma Enthalpy',
    summary: 'Mass-averaged specific enthalpy of the plasma jet from arc power, torch cooling losses and gas flows.',
    icon: Flame,
    Component: PlasmaEnthalpy,
  },
  {
    id: 'thickness-per-pass',
    name: 'Thickness per Pass',
    summary: 'Estimated coating build-up per pass, passes needed and spray time from feed rate, DE and robot path.',
    icon: Layers,
    Component: ThicknessPerPass,
  },
  {
    id: 'surface-speed',
    name: 'Surface Speed & Pitch',
    summary: 'Surface speed and helical pitch for rotating parts, and the RPM needed for a target surface speed.',
    icon: RotateCw,
    Component: SurfaceSpeed,
  },
  {
    id: 'gas-flow-converter',
    name: 'Gas Flow Converter',
    summary: 'Convert process gas flows between SLPM, SCFH, SCFM and Sm³/h.',
    icon: ArrowLeftRight,
    Component: GasFlowConverter,
  },
];

export const TOOLS_ROUTE = '#/thermal-spray-tools';
