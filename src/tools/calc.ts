/** Parse a text-field value; empty input becomes NaN so results show as "—". */
export const num = (value: string): number => (value.trim() === '' ? NaN : Number(value));

export const allPositive = (...values: number[]) => values.every((v) => Number.isFinite(v) && v > 0);

export const fmt = (value: number, digits = 2): string =>
  Number.isFinite(value)
    ? value.toLocaleString('en-US', { minimumFractionDigits: digits, maximumFractionDigits: digits })
    : '—';

/** Gas densities at 0 °C, 1 atm (kg/m³). */
export const GAS_DENSITY_STP = {
  Ar: 1.7837,
  N2: 1.2506,
  H2: 0.08988,
  He: 0.1785,
} as const;

export type PlasmaGas = keyof typeof GAS_DENSITY_STP;

/** Ideal-gas density at 1 atm and the given reference temperature (°C). */
export const gasDensity = (gas: PlasmaGas, refTempC: number) =>
  GAS_DENSITY_STP[gas] * (273.15 / (273.15 + refTempC));

export const WATER_CP = 4.186; // kJ/(kg·K)
export const WATER_DENSITY = 1.0; // kg/L
