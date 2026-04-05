import Image from "next/image";
import Link from "next/link";

const gummiProducts = [
  { src: "/imgs/Apelsinflaska.png", name: "Apelsinflaska" },
  { src: "/imgs/Blandade fiskar.png", name: "Blandade fiskar" },
  { src: "/imgs/Colaflaska.png", name: "Cola-flaska" },
  { src: "/imgs/Hallon Mega.png", name: "Hallon Mega" },
  { src: "/imgs/Kola Megasize.png", name: "Kola Megasize" },
  { src: "/imgs/Kolaskruv.png", name: "Kolaskruv" },
  { src: "/imgs/Päronflaska.png", name: "Päronflaska" },
  { src: "/imgs/Skogsbär.png", name: "Skogsbär" },
  { src: "/imgs/Sura blåbärsflaskor.png", name: "Sura blåbärsflaskor" },
  { src: "/imgs/Tropiska bär Vego.png", name: "Tropiska bär Vego" },
];

const lakritsProducts = [
  { src: "/imgs/Big Salt.png", name: "Big Salt" },
  { src: "/imgs/Salta fiskar.png", name: "Salta fiskar" },
  { src: "/imgs/Saltlakritsskruv.png", name: "Saltlakritsskruv" },
  { src: "/imgs/Söt Big.png", name: "Söt Big" },
];

function ProductCard({ src, name }: { src: string; name: string }) {
  return (
    <div
      className="group rounded-2xl overflow-hidden transition-shadow duration-300 hover:shadow-lg"
      style={{ backgroundColor: "#F5EDD8" }}
    >
      <div className="aspect-square relative">
        <Image
          src={src}
          alt={name}
          fill
          className="object-contain p-8 transition-transform duration-500 group-hover:scale-108"
        />
      </div>
      <div className="px-5 py-4" style={{ borderTop: "1px solid rgba(30,30,30,0.07)" }}>
        <p className="font-bold text-sm" style={{ color: "#1E1E1E" }}>{name}</p>
      </div>
    </div>
  );
}

export default function ProdukterPage() {
  return (
    <div style={{ backgroundColor: "#F9F6F0" }} className="min-h-screen">
      {/* Page header */}
      <div className="py-10 max-w-7xl mx-auto px-6">
        <p className="text-xs font-bold tracking-[0.25em] uppercase mb-4" style={{ color: "#2E7D32" }}>
          Sortiment
        </p>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight max-w-xl" style={{ color: "#1E1E1E" }}>
          Våra produkter.
        </h1>
        <p className="mt-4 text-lg max-w-md leading-relaxed" style={{ color: "rgba(30,30,30,0.6)" }}>
          Gelatinfritt godis från Hököpinge och Vellinge.
        </p>
      </div>

      {/* Gelégodis section */}
      <section className="pb-14 max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-6 mb-8">
          <h2 className="text-2xl font-extrabold tracking-tight whitespace-nowrap" style={{ color: "#1E1E1E" }}>Gelégodis</h2>
          <div className="flex-1 h-px" style={{ backgroundColor: "#FBBC0F", opacity: 0.5 }} />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {gummiProducts.map((p) => (
            <ProductCard key={p.name} {...p} />
          ))}
        </div>
      </section>

      {/* Lakrits section */}
      <section className="pb-14 max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-6 mb-8">
          <h2 className="text-2xl font-extrabold tracking-tight whitespace-nowrap" style={{ color: "#1E1E1E" }}>Lakrits</h2>
          <div className="flex-1 h-px" style={{ backgroundColor: "#FBBC0F", opacity: 0.5 }} />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {lakritsProducts.map((p) => (
            <ProductCard key={p.name} {...p} />
          ))}
        </div>
      </section>

      {/* Bulk CTA */}
      <div className="py-10" style={{ backgroundColor: "#1E1E1E" }}>
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-xs font-bold tracking-[0.25em] uppercase mb-2" style={{ color: "#FBBC0F" }}>
              Lösviktsgodis
            </p>
            <p className="text-white text-xl font-bold">
              Besök vår butik för lösvikt och nyheter
            </p>
          </div>
          <Link
            href="/kontakt"
            className="shrink-0 inline-flex items-center gap-2 px-8 py-4 font-bold text-sm tracking-wider uppercase hover:opacity-85 transition-opacity rounded-full"
            style={{ backgroundColor: "#FBBC0F", color: "#1E1E1E" }}
          >
            Hitta butiken
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
