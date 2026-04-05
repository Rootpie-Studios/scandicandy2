import Image from "next/image";
import Link from "next/link";

export default function OmOssPage() {
  return (
    <div style={{ backgroundColor: "#F9F6F0" }} className="min-h-screen">

      {/* ── HERO BAND ── */}
      <section style={{ backgroundColor: "#1E1E1E" }} className="py-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-xs font-bold tracking-[0.25em] uppercase mb-4" style={{ color: "#FBBC0F" }}>
              Vår historia
            </p>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-3">
              Om oss.
            </h1>
            <p className="text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
              Scandi Candy är ett lokalt godisetillverkare baserat i Hököpinge,
              Vellinge — specialiserade på gelatinfria konfektyrer som kombinerar
              skandinavisk enkelhet med äkta smaker.
            </p>
          </div>
          <div className="flex justify-center md:justify-end">
            <Image src="/logo.png" alt="Scandi Candy" width={240} height={168} className="object-contain opacity-90" />
          </div>
        </div>
      </section>

      {/* ── STORY ── */}
      <section className="py-12 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              label: "Gelatinfritt",
              color: "#FBBC0F",
              text: "Alla våra produkter är gelatinfria — tillgängliga för fler och bättre för alla.",
            },
            {
              label: "Tillverkat i Sverige",
              color: "#2E7D32",
              text: "Allt produceras i vår anläggning i Hököpinge, Vellinge. Kortare transportkedjor, lokal stolthet och full kontroll över kvaliteten.",
            },
            {
              label: "Kontraktstillverkning",
              color: "#C62828",
              text: "Förutom vår egna kollektion erbjuder vi kontraktstillverkning till andra aktörer inom livsmedelsbranschen från vår moderna, certifierade anläggning.",
            },
          ].map(({ label, color, text }) => (
            <div key={label} className="rounded-2xl p-8" style={{ backgroundColor: "#F5EDD8" }}>
              <div className="w-2 h-8 rounded-full mb-5" style={{ backgroundColor: color }} />
              <h3 className="font-extrabold text-xl mb-3" style={{ color: "#1E1E1E" }}>{label}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(30,30,30,0.65)" }}>{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CERTIFICATIONS ── */}
      <section className="py-12" style={{ backgroundColor: "#1E1E1E" }}>
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[0.25em] uppercase mb-6" style={{ color: "rgba(255,255,255,0.35)" }}>
            Certifieringar &amp; kreditvärdighet
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* FSSC */}
            <div className="rounded-2xl p-8 flex flex-col justify-between gap-8" style={{ backgroundColor: "#F5EDD8" }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: "#2E7D32" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M9 12l2 2 4-4" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 2a10 10 0 100 20A10 10 0 0012 2z" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <p className="font-extrabold text-2xl mb-2" style={{ color: "#1E1E1E" }}>FSSC 22000</p>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(30,30,30,0.5)" }}>
                  Foundation for Food Safety Systems Certification — internationellt erkänt ledningssystem för livsmedelssäkerhet.
                </p>
              </div>
            </div>

            {/* UC Sigill */}
            <div className="rounded-2xl p-8 flex flex-col justify-between gap-8" style={{ backgroundColor: "#F5EDD8" }}>
              <p className="text-xs font-bold tracking-[0.25em] uppercase" style={{ color: "rgba(30,30,30,0.35)" }}>
                UC Kreditvärdighet
              </p>
              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 flex items-center justify-center shrink-0">
                    <Image src="/imgs/uc-sigill-5.webp" alt="UC Sigill — Högsta kreditvärdighet" width={56} height={56} className="object-contain" />
                  </div>
                  <div>
                    <p className="font-extrabold text-base" style={{ color: "#1E1E1E" }}>Högsta kreditvärdighet</p>
                    <p className="text-sm mt-0.5" style={{ color: "rgba(30,30,30,0.45)" }}>UC Sigill</p>
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <div className="w-20 h-20 flex items-center justify-center shrink-0">
                    <Image src="/imgs/uc-growth-cert.webp" alt="UC — Nordiskt tillväxtcertifikat" width={70} height={70} className="object-contain" />
                  </div>
                  <div>
                    <p className="font-extrabold text-base" style={{ color: "#1E1E1E" }}>Nordiskt tillväxtcertifikat</p>
                    <p className="text-sm mt-0.5" style={{ color: "rgba(30,30,30,0.45)" }}>UC Sigill</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
