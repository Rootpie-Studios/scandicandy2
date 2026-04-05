import Image from "next/image";
import Link from "next/link";

const featuredProducts = [
  { src: "/imgs/Colaflaska.png", name: "Cola-flaska" },
  { src: "/imgs/Hallon Mega.png", name: "Hallon Mega" },
  { src: "/imgs/Kolaskruv.png", name: "Kolaskruv" },
  { src: "/imgs/Skogsbär.png", name: "Skogsbär" },
  { src: "/imgs/Päronflaska.png", name: "Päronflaska" },
  { src: "/imgs/Tropiska bär Vego.png", name: "Tropiska bär Vego" },
];

const lakritsProducts = [
  { src: "/imgs/Big Salt.png", name: "Big Salt" },
  { src: "/imgs/Salta fiskar.png", name: "Salta fiskar" },
  { src: "/imgs/Saltlakritsskruv.png", name: "Saltlakritsskruv" },
  { src: "/imgs/Söt Big.png", name: "Söt Big" },
];

export default function HomePage() {
  return (
    <div style={{ backgroundColor: "#F9F6F0" }}>

      {/* ── HERO ── */}
      <section
        className="relative flex flex-col md:flex-row items-center overflow-hidden min-h-[90svh]"
        style={{ backgroundColor: "#F9F6F0" }}
      >
        {/* Left: text */}
        <div className="flex-1 flex flex-col justify-center px-8 md:px-16 py-20 md:py-0 text-left max-w-2xl">
          <p className="text-xs font-bold tracking-[0.25em] uppercase mb-4" style={{ color: "#2E7D32" }}>
            Hököpinge &amp; Vellinge
          </p>
          <h1
            className="text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight mb-5"
            style={{ color: "#1E1E1E" }}
          >
            Godis som
            <br />
            <span
              className="px-3 py-1 inline-block rounded-xl"
              style={{ backgroundColor: "#FBBC0F", color: "#1E1E1E" }}
            >
              alla kan äta.
            </span>
          </h1>
          <p className="text-lg mb-8 max-w-sm leading-relaxed" style={{ color: "rgba(30,30,30,0.6)" }}>
            Gelatinfritt, alltid. Tillverkat med omsorg i Hököpinge och Vellinge.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/produkter"
              className="inline-flex items-center gap-2 px-8 py-4 font-bold text-sm tracking-wider uppercase hover:opacity-85 transition-opacity rounded-full"
              style={{ backgroundColor: "#1E1E1E", color: "#FBBC0F" }}
            >
              Se våra produkter
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link
              href="/kontakt"
              className="inline-flex items-center px-8 py-4 font-bold text-sm tracking-wider uppercase border-2 hover:bg-black/5 transition-all rounded-full"
              style={{ borderColor: "rgba(30,30,30,0.2)", color: "#1E1E1E" }}
            >
              Kontakta oss
            </Link>
          </div>
        </div>

        {/* Right: logo on yellow panel */}
        <div
          className="w-full md:w-[42%] min-h-[40vh] md:min-h-[90svh] flex items-center justify-center p-12"
          style={{ backgroundColor: "#FBBC0F" }}
        >
          <Image
            src="/logo.png"
            alt="Scandi Candy"
            width={320}
            height={224}
            className="object-contain drop-shadow-lg"
            priority
          />
        </div>
      </section>

      {/* ── USP STRIP ── */}
      <section style={{ backgroundColor: "#1E1E1E" }} className="py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {[
            { icon: "✦", title: "Gelatinfritt", desc: "Allt godis är fritt från gelatin." },
            { icon: "⌘", title: "Tillverkat i Sverige", desc: "Producerat i vår fabrik i Hököpinge och Vellinge." },
            { icon: "◈", title: "FSSC 22000", desc: "Certifierade enligt internationell livsmedelssäkerhetsstandard." },
          ].map(({ icon, title, desc }) => (
            <div key={title} className="px-6 py-8 md:px-8">
              <div className="text-xl mb-3 font-bold" style={{ color: "#FBBC0F" }}>{icon}</div>
              <h3 className="text-white font-bold text-lg mb-2" style={{ fontFamily: "var(--font-rubik)" }}>{title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FEATURED PRODUCTS ── */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-extrabold tracking-tight" style={{ color: "#1E1E1E" }}>
                Geleprodukter
              </h2>
            </div>
            <Link
              href="/produkter"
              className="hidden md:inline-flex items-center gap-2 text-sm font-bold tracking-wider uppercase hover:opacity-70 transition-opacity"
              style={{ color: "#1E1E1E" }}
            >
              Se alla
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
            {featuredProducts.map((p) => (
              <Link
                key={p.name}
                href="/produkter"
                className="group overflow-hidden rounded-xl cursor-pointer"
                style={{ backgroundColor: "#F5EDD8" }}
              >
                <div className="aspect-square relative">
                  <Image
                    src={p.src}
                    alt={p.name}
                    fill
                    className="object-contain p-8 transition-transform duration-400 group-hover:scale-110"
                  />
                </div>
                <div className="px-4 pb-4 flex items-center justify-between">
                  <p className="font-bold text-sm" style={{ color: "#1E1E1E" }}>{p.name}</p>
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ backgroundColor: "#FBBC0F" }}
                  >
                    <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="#1E1E1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── LICORICE FEATURE ── */}
      <section className="py-20" style={{ backgroundColor: "#1E1E1E" }}>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-2 gap-3">
            {lakritsProducts.map((p) => (
              <div
                key={p.name}
                className="aspect-square relative rounded-2xl overflow-hidden"
                style={{ backgroundColor: "#F5EDD8" }}
              >
                <Image src={p.src} alt={p.name} fill className="object-contain p-5" />
              </div>
            ))}
          </div>
          <div className="md:pl-6">
            <p className="text-xs font-bold tracking-[0.25em] uppercase mb-4" style={{ color: "#C62828" }}>
              Lakritssortiment
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-5">
              Lakrits som smakar på riktigt.
            </h2>
            <p className="leading-relaxed mb-8 text-lg" style={{ color: "rgba(255,255,255,0.55)" }}>
              Söt och saltlakrits i många former och smaker.
            </p>
            <Link
              href="/produkter"
              className="inline-flex items-center gap-2 px-8 py-4 font-bold text-sm tracking-wider uppercase hover:opacity-85 transition-opacity rounded-full"
              style={{ backgroundColor: "#FBBC0F", color: "#1E1E1E" }}
            >
              Utforska lakrits
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CONTRACT MANUFACTURING ── */}
      <section className="py-20" style={{ backgroundColor: "#F9F6F0" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div
            className="relative overflow-hidden p-12 md:p-16 rounded-3xl"
            style={{ backgroundColor: "#FBBC0F" }}
          >
            <div className="absolute top-0 right-0 w-72 h-72 rounded-full opacity-15"
              style={{ backgroundColor: "#1E1E1E", transform: "translate(35%, -35%)" }} />
            <div className="relative max-w-xl">
              <p className="text-xs font-bold tracking-[0.25em] uppercase mb-4" style={{ color: "rgba(30,30,30,0.5)" }}>
                Kontraktstillverkning
              </p>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-5" style={{ color: "#1E1E1E" }}>
                Vi tillverkar ditt godis.
              </h2>
              <p className="text-lg leading-relaxed mb-8" style={{ color: "rgba(30,30,30,0.7)" }}>
                Vår FSSC 22000-certifierade anläggning erbjuder kontraktstillverkning
                för livsmedelsbranschen. Ta kontakt för att diskutera dina behov.
              </p>
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-2 px-8 py-4 font-bold text-sm tracking-wider uppercase hover:opacity-85 transition-opacity rounded-full"
                style={{ backgroundColor: "#1E1E1E", color: "#FBBC0F" }}
              >
                Diskutera samarbete
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
