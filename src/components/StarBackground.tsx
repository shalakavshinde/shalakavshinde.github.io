import { useEffect, useRef } from 'react';

// ---------------------------------------------------------------------------
// STAR DATA — Real J2000 RA/Dec coordinates for stars visible on Mar 29 1994
// Spring sky, mid-northern latitudes (~11 PM local time)
// RA in decimal hours (0–24), Dec in decimal degrees (-90 to +90)
// mag: smaller = brighter
// ---------------------------------------------------------------------------

interface StarDef {
  name: string;
  ra: number;
  dec: number;
  mag: number;
}

const STARS: StarDef[] = [
  // ── GEMINI (setting in west) ──────────────────────────────────────────────
  { name: 'Castor',       ra:  7.576, dec: 31.88,  mag: 1.6  },
  { name: 'Pollux',       ra:  7.755, dec: 28.02,  mag: 1.2  },
  { name: 'Alhena',       ra:  6.629, dec: 16.40,  mag: 1.9  },
  { name: 'Wasat',        ra:  7.335, dec: 21.98,  mag: 3.5  },
  { name: 'Mebsuda',      ra:  6.731, dec: 25.13,  mag: 3.1  },
  { name: 'PropusA',      ra:  6.383, dec: 22.51,  mag: 3.3  },
  { name: 'Alzirr',       ra:  6.755, dec: 12.90,  mag: 3.4  },
  // ── CANCER ───────────────────────────────────────────────────────────────
  { name: 'AsellBor',     ra:  8.721, dec: 21.47,  mag: 4.7  },
  { name: 'AsellAus',     ra:  8.745, dec: 18.15,  mag: 3.9  },
  { name: 'Acubens',      ra:  8.973, dec: 11.86,  mag: 4.3  },
  { name: 'IotaCnc',      ra:  8.778, dec: 28.76,  mag: 4.0  },
  // ── LEO ──────────────────────────────────────────────────────────────────
  { name: 'Regulus',      ra: 10.139, dec: 11.97,  mag: 1.4  },
  { name: 'Denebola',     ra: 11.817, dec: 14.57,  mag: 2.1  },
  { name: 'Algieba',      ra: 10.333, dec: 19.84,  mag: 2.1  },
  { name: 'Zosma',        ra: 11.235, dec: 20.52,  mag: 2.6  },
  { name: 'EpsLeo',       ra:  9.764, dec: 23.77,  mag: 3.0  },
  { name: 'EtaLeo',       ra: 10.122, dec: 16.76,  mag: 3.5  },
  { name: 'ThetaLeo',     ra: 11.237, dec: 15.43,  mag: 3.3  },
  { name: 'MuLeo',        ra:  9.879, dec: 26.00,  mag: 3.9  },
  // ── HYDRA ────────────────────────────────────────────────────────────────
  { name: 'Alphard',      ra:  9.460, dec: -8.66,  mag: 2.0  },
  { name: 'GamHya',       ra: 13.315, dec:-23.17,  mag: 3.0  },
  { name: 'NuHya',        ra: 10.828, dec:-16.19,  mag: 3.1  },
  { name: 'XiHya',        ra: 11.550, dec:-31.86,  mag: 3.5  },
  { name: 'DelHya',       ra:  8.628, dec:  5.70,  mag: 4.2  },
  { name: 'EpsHya',       ra:  8.779, dec:  6.42,  mag: 3.4  },
  { name: 'ZetHya',       ra:  8.923, dec:  5.95,  mag: 3.1  },
  // ── CORVUS ───────────────────────────────────────────────────────────────
  { name: 'GamCrv',       ra: 12.264, dec:-17.54,  mag: 2.6  },
  { name: 'DelCrv',       ra: 12.498, dec:-16.52,  mag: 3.0  },
  { name: 'BetCrv',       ra: 12.573, dec:-23.40,  mag: 2.7  },
  { name: 'EpsCrv',       ra: 12.168, dec:-22.62,  mag: 3.0  },
  // ── VIRGO ────────────────────────────────────────────────────────────────
  { name: 'Spica',        ra: 13.420, dec:-11.16,  mag: 1.0  },
  { name: 'Porrima',      ra: 12.694, dec: -1.45,  mag: 3.4  },
  { name: 'Vindemiatrix', ra: 13.036, dec: 10.96,  mag: 2.8  },
  { name: 'ZetVir',       ra: 13.578, dec: -0.60,  mag: 3.4  },
  { name: 'DelVir',       ra: 12.926, dec:  3.40,  mag: 3.4  },
  // ── URSA MAJOR (Big Dipper) ───────────────────────────────────────────────
  { name: 'Dubhe',        ra: 11.062, dec: 61.75,  mag: 1.8  },
  { name: 'Merak',        ra: 11.031, dec: 56.38,  mag: 2.4  },
  { name: 'Phecda',       ra: 11.897, dec: 53.69,  mag: 2.4  },
  { name: 'Megrez',       ra: 12.257, dec: 57.03,  mag: 3.3  },
  { name: 'Alioth',       ra: 12.900, dec: 55.96,  mag: 1.8  },
  { name: 'Mizar',        ra: 13.399, dec: 54.92,  mag: 2.1  },
  { name: 'Alkaid',       ra: 13.792, dec: 49.31,  mag: 1.9  },
  { name: 'Muscida',      ra:  8.504, dec: 60.72,  mag: 3.4  },
  { name: 'Talitha',      ra:  8.987, dec: 48.02,  mag: 3.1  },
  { name: 'LamUMa',       ra: 10.285, dec: 42.91,  mag: 3.5  },
  { name: 'MuUMa',        ra: 10.372, dec: 41.50,  mag: 3.1  },
  { name: 'NuUMa',        ra: 11.308, dec: 33.09,  mag: 3.5  },
  // ── BOÖTES (rising in east) ───────────────────────────────────────────────
  { name: 'Arcturus',     ra: 14.261, dec: 19.18,  mag: -0.1 },
  { name: 'Izar',         ra: 14.749, dec: 27.07,  mag: 2.4  },
  { name: 'EtaBoo',       ra: 13.911, dec: 18.40,  mag: 2.7  },
  { name: 'GamBoo',       ra: 14.534, dec: 38.31,  mag: 3.0  },
  { name: 'DelBoo',       ra: 15.258, dec: 33.31,  mag: 3.5  },
  { name: 'BetBoo',       ra: 15.032, dec: 40.39,  mag: 3.5  },
];

// ---------------------------------------------------------------------------
// CONSTELLATION LINES — pairs of star names to connect
// ---------------------------------------------------------------------------
const LINES: [string, string][] = [
  // Gemini
  ['Castor', 'Pollux'], ['Castor', 'Mebsuda'], ['Mebsuda', 'PropusA'],
  ['Pollux', 'Wasat'], ['Wasat', 'Alzirr'], ['Alzirr', 'Alhena'],
  ['Mebsuda', 'Wasat'],
  // Cancer
  ['AsellBor', 'AsellAus'], ['AsellBor', 'IotaCnc'], ['AsellAus', 'Acubens'],
  // Leo sickle + body
  ['Regulus', 'EtaLeo'], ['EtaLeo', 'Algieba'], ['Algieba', 'EpsLeo'],
  ['EpsLeo', 'MuLeo'], ['Algieba', 'Zosma'], ['Zosma', 'Denebola'],
  ['Zosma', 'ThetaLeo'], ['ThetaLeo', 'Denebola'],
  // Hydra
  ['DelHya', 'EpsHya'], ['EpsHya', 'ZetHya'], ['ZetHya', 'Alphard'],
  ['Alphard', 'NuHya'], ['NuHya', 'XiHya'],
  // Corvus
  ['EpsCrv', 'GamCrv'], ['GamCrv', 'DelCrv'], ['DelCrv', 'BetCrv'],
  ['BetCrv', 'EpsCrv'],
  // Virgo
  ['Spica', 'ZetVir'], ['ZetVir', 'Porrima'], ['Porrima', 'DelVir'],
  ['DelVir', 'Vindemiatrix'],
  // Ursa Major (Big Dipper)
  ['Dubhe', 'Merak'], ['Merak', 'Phecda'], ['Phecda', 'Megrez'],
  ['Megrez', 'Dubhe'], ['Megrez', 'Alioth'], ['Alioth', 'Mizar'],
  ['Mizar', 'Alkaid'],
  ['Muscida', 'Talitha'], ['LamUMa', 'MuUMa'], ['MuUMa', 'NuUMa'],
  // Boötes kite
  ['Arcturus', 'EtaBoo'], ['EtaBoo', 'Izar'], ['Izar', 'GamBoo'],
  ['GamBoo', 'BetBoo'], ['BetBoo', 'DelBoo'], ['DelBoo', 'Arcturus'],
];

// RA/Dec projection window — spring sky visible Mar 29 1994 ~11 PM
const RA_MIN = 6.0, RA_MAX = 15.5;
const DEC_MIN = -35, DEC_MAX = 70;

function project(ra: number, dec: number, W: number, H: number): [number, number] {
  const nx = (ra - RA_MIN) / (RA_MAX - RA_MIN);
  const ny = 1 - (dec - DEC_MIN) / (DEC_MAX - DEC_MIN);
  return [nx * W, ny * H];
}

function magToRadius(mag: number): number {
  const clamped = Math.max(-0.5, Math.min(5.0, mag));
  return 3.8 - (clamped + 0.5) * 0.55;
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------
export const StarBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef   = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let W = 0, H = 0;

    // Per-star animation state
    const starState = STARS.map(() => ({
      phase: Math.random() * Math.PI * 2,
      speed: 0.4 + Math.random() * 1.2,
    }));

    const resize = () => {
      W = canvas.offsetWidth;
      H = canvas.offsetHeight;
      canvas.width  = W;
      canvas.height = H;
    };
    resize();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas.parentElement ?? canvas);

    let t = 0;

    const draw = () => {
      if (!W || !H) { animRef.current = requestAnimationFrame(draw); return; }
      t += 0.016;
      ctx.clearRect(0, 0, W, H);

      // 1. Constellation lines — navy blue
      for (const [na, nb] of LINES) {
        const ai = STARS.findIndex(s => s.name === na);
        const bi = STARS.findIndex(s => s.name === nb);
        if (ai < 0 || bi < 0) continue;
        const [ax, ay] = project(STARS[ai].ra, STARS[ai].dec, W, H);
        const [bx, by] = project(STARS[bi].ra, STARS[bi].dec, W, H);
        ctx.beginPath();
        ctx.moveTo(ax, ay);
        ctx.lineTo(bx, by);
        ctx.strokeStyle = 'rgba(30, 58, 138, 0.22)';
        ctx.lineWidth = 0.9;
        ctx.stroke();
      }

      // 2. Stars
      for (let i = 0; i < STARS.length; i++) {
        const s = STARS[i];
        const st = starState[i];
        const [x, y] = project(s.ra, s.dec, W, H);

        const twinkle = 0.72 + 0.28 * Math.sin(t * st.speed + st.phase);
        const r  = magToRadius(s.mag) * twinkle;
        const a  = 0.55 + 0.45 * twinkle;

        // Soft navy glow for bright stars (mag < 2.5)
        if (s.mag < 2.5) {
          const glowR = r * 6;
          const glow = ctx.createRadialGradient(x, y, 0, x, y, glowR);
          glow.addColorStop(0, `rgba(30, 58, 138, ${(a * 0.30).toFixed(3)})`);
          glow.addColorStop(1, 'rgba(30, 58, 138, 0)');
          ctx.beginPath();
          ctx.arc(x, y, glowR, 0, Math.PI * 2);
          ctx.fillStyle = glow;
          ctx.fill();
        }

        // Core dot — navy blue radial gradient
        const core = ctx.createRadialGradient(x, y, 0, x, y, r);
        core.addColorStop(0,   `rgba(15,  23,  70,  ${a.toFixed(3)})`);
        core.addColorStop(0.5, `rgba(30,  58, 138, ${a.toFixed(3)})`);
        core.addColorStop(1,   'rgba(59, 100, 200, 0)');
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fillStyle = core;
        ctx.fill();
      }

      animRef.current = requestAnimationFrame(draw);
    };

    animRef.current = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(animRef.current);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 0,
      }}
      aria-hidden="true"
    />
  );
};
