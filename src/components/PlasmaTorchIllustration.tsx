// Cascaded plasma spray torch — section view (vertical, labelled).
// Usage: <PlasmaTorchIllustration className="h-full max-h-[640px] w-auto" />
export default function PlasmaTorchIllustration({ className = "" }: { className?: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 10 318 680" fill="none" stroke="#1e3a8a" strokeWidth="1" role="img" aria-label="Section view of a cascaded plasma spray torch">
      <defs>
        <pattern id="torch-hh" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><path d="M0 0V6" stroke="#1e3a8a" strokeOpacity="0.5"/></pattern>
        <pattern id="torch-hx" width="4" height="4" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><path d="M0 0V4M0 0H4" stroke="#1e3a8a" strokeOpacity="0.6"/></pattern>
        <marker id="torch-ar" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M2 1L8 5L2 9" stroke="#1e3a8a"/></marker>
      </defs>

        <g transform="translate(230 0) rotate(90)">
            <g opacity="0.45">
          <path d="M20 130H680" strokeDasharray="14 4 2 4" strokeOpacity="0.5"/>
          <rect x="130" y="62" width="340" height="12" fill="url(#torch-hh)"/>
          <rect x="130" y="186" width="340" height="12" fill="url(#torch-hh)"/>
          <rect x="40" y="78" width="90" height="43" fill="url(#torch-hh)"/>
          <rect x="40" y="139" width="90" height="43" fill="url(#torch-hh)"/>
          <rect x="40" y="121" width="120" height="18"/>
          <path d="M160 121L178 126L184 130L178 134L160 139Z" fill="url(#torch-hx)"/>
          <path d="M130 74H190V122C178 118 160 108 130 108Z" fill="#1e3a8a" fillOpacity="0.12"/>
          <path d="M130 186H190V138C178 142 160 152 130 152Z" fill="#1e3a8a" fillOpacity="0.12"/>
          <g fill="url(#torch-hh)">
            <rect x="196" y="78" width="28" height="44"/><rect x="196" y="138" width="28" height="44"/>
            <rect x="230" y="78" width="28" height="44"/><rect x="230" y="138" width="28" height="44"/>
            <rect x="264" y="78" width="28" height="44"/><rect x="264" y="138" width="28" height="44"/>
            <rect x="298" y="78" width="28" height="44"/><rect x="298" y="138" width="28" height="44"/>
            <rect x="332" y="78" width="28" height="44"/><rect x="332" y="138" width="28" height="44"/>
            <rect x="366" y="78" width="28" height="44"/><rect x="366" y="138" width="28" height="44"/>
          </g>
          <g fill="#1e3a8a" fillOpacity="0.12">
            <rect x="190" y="80" width="6" height="42"/><rect x="190" y="138" width="6" height="42"/>
            <rect x="224" y="80" width="6" height="42"/><rect x="224" y="138" width="6" height="42"/>
            <rect x="258" y="80" width="6" height="42"/><rect x="258" y="138" width="6" height="42"/>
            <rect x="292" y="80" width="6" height="42"/><rect x="292" y="138" width="6" height="42"/>
            <rect x="326" y="80" width="6" height="42"/><rect x="326" y="138" width="6" height="42"/>
            <rect x="360" y="80" width="6" height="42"/><rect x="360" y="138" width="6" height="42"/>
            <rect x="394" y="80" width="6" height="42"/><rect x="394" y="138" width="6" height="42"/>
          </g>
          <path d="M400 78H470V116L440 120H400Z" fill="url(#torch-hh)"/>
          <path d="M400 182H470V144L440 140H400Z" fill="url(#torch-hh)"/>
          <path d="M150 40V104" markerEnd="url(#torch-ar)"/>
          <path d="M150 220V156" markerEnd="url(#torch-ar)"/>
        </g>

            <path d="M470 116Q570 98 680 74V186Q570 162 470 144Z" fill="#D4AF37" fillOpacity="0.16" stroke="none"/>
        <path d="M470 116Q570 98 680 74M470 144Q570 162 680 186" stroke="#C9A227" strokeDasharray="4 4" strokeWidth="1.2"/>
        <path d="M184 130C220 126 250 134 290 129S370 133 405 130S436 124 446 120" stroke="#C9A227" strokeWidth="5.8" strokeLinecap="round"/>

            <g fill="#1e3a8a" stroke="none" fillOpacity="0.45">
          <circle cx="512" cy="126" r="1.6"/><circle cx="530" cy="134" r="1.4"/><circle cx="552" cy="124" r="1.8"/>
          <circle cx="575" cy="138" r="1.4"/><circle cx="598" cy="120" r="1.6"/><circle cx="620" cy="132" r="1.8"/>
          <circle cx="642" cy="142" r="1.4"/><circle cx="636" cy="114" r="1.4"/><circle cx="664" cy="126" r="1.6"/>
        </g>
      </g>

        <g stroke="#1e3a8a" strokeOpacity="0.45" strokeWidth="0.8">
        <path d="M100 100H194"/>
        <path d="M138 172H194"/>
        <path d="M140 244H194"/>
        <path d="M101 290H194"/>
        <path d="M140 329H194"/>
        <path d="M154 385H194"/>
        <path d="M140 435H194"/>
        <path d="M146 600H194"/>
      </g>
      <g fill="#1e3a8a" stroke="none" fillOpacity="0.7">
        <circle cx="100" cy="100" r="1.8"/>
        <circle cx="138" cy="172" r="1.8"/>
        <circle cx="140" cy="244" r="1.8"/>
        <circle cx="101" cy="290" r="1.8"/>
        <circle cx="140" cy="329" r="1.8"/>
        <circle cx="154" cy="385" r="1.8"/>
        <circle cx="140" cy="435" r="1.8"/>
        <circle cx="146" cy="600" r="1.8"/>
      </g>

        <g fontFamily="Inter, system-ui, -apple-system, Segoe UI, sans-serif" fontSize="15" fontWeight="700" stroke="none" fill="#1e3a8a">
        <text x="200" y="105">Cathode</text>
        <text x="200" y="177">Gas inlet</text>
        <text x="200" y="249">Neutrodes</text>
        <text x="200" y="295">Arc</text>
        <text x="200" y="334">Insulators</text>
        <text x="200" y="390">Cooling water</text>
        <text x="200" y="440">Anode</text>
        <text x="200" y="605">Plasma jet</text>
      </g>
    </svg>
  );
}
