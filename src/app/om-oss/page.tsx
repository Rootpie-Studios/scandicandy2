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
            <div className="rounded-2xl p-8 flex flex-col gap-4" style={{ backgroundColor: "#2A2A2A" }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: "#2E7D32" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M9 12l2 2 4-4" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 2a10 10 0 100 20A10 10 0 0012 2z" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <p className="font-extrabold text-xl text-white">FSSC 22000</p>
                <p className="text-sm mt-2" style={{ color: "rgba(255,255,255,0.5)" }}>
                  Foundation for Food Safety Systems Certification — internationellt erkänt ledningssystem för livsmedelssäkerhet.
                </p>
              </div>
            </div>

            {/* UC Sigill — both in one card */}
            <div className="rounded-2xl p-8 flex flex-col items-center justify-center gap-6" style={{ backgroundColor: "#fff" }}>
              <p className="text-xs font-bold tracking-widest uppercase" style={{ color: "rgba(30,30,30,0.4)" }}>
                UC Kreditvärdighet
              </p>
              <div className="flex items-center justify-center gap-8">
                <Image src="/imgs/UC_SIGILL-01-1.png" alt="UC Sigill — Högsta kreditvärdighet" width={400} height={400} className="object-contain" />
                <Image src="/imgs/UC_SIGILL-02.png" alt="UC Sigill — Highest creditworthiness" width={400} height={400} className="object-contain" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LOCATION POINTER ── */}
      <section className="pb-12 max-w-7xl mx-auto px-6">
        <div className="rounded-2xl p-10 flex flex-col md:flex-row items-center justify-between gap-6" style={{ backgroundColor: "#FBBC0F" }}>
          <div>
            <p className="text-xs font-bold tracking-[0.25em] uppercase mb-2" style={{ color: "rgba(30,30,30,0.5)" }}>Besök oss</p>
            <p className="font-extrabold text-xl" style={{ color: "#1E1E1E" }}>Bruksvägen 11, Hököpinge</p>
            <a href="tel:040370550" className="text-sm font-bold mt-1 hover:opacity-70 transition-opacity block" style={{ color: "rgba(30,30,30,0.7)" }}>040-370550</a>
          </div>
          <Link
            href="/kontakt"
            className="shrink-0 inline-flex items-center gap-2 px-8 py-4 font-bold text-sm tracking-wider uppercase hover:opacity-85 transition-opacity rounded-full"
            style={{ backgroundColor: "#1E1E1E", color: "#FBBC0F" }}
          >
            Karta &amp; öppettider
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
