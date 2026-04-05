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
    <div className="group bg-white overflow-hidden">
      {/* Transparent PNG on neutral background */}
      <div
        className="aspect-square relative"
        style={{ backgroundColor: "#F9F6F0" }}
      >
        <Image
          src={src}
          alt={name}
          fill
          className="object-contain p-6 transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-4 border-t border-black/5">
        <p className="font-semibold text-sm">{name}</p>
      </div>
    </div>
  );
}

export default function ProdukterPage() {
  return (
    <div style={{ backgroundColor: "#F9F6F0" }} className="min-h-screen">
      {/* Page header */}
      <div className="py-10 max-w-7xl mx-auto px-6">
        <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-4" style={{ color: "#FBBC0F" }}>
          Sortiment
        </p>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight max-w-xl">
          Våra produkter.
        </h1>
        <p className="mt-6 text-black/60 text-lg max-w-md leading-relaxed">
          Gelatinfritt godis från Hököpinge och Vellinge.
        </p>
      </div>

      {/* Gummi section */}
      <section className="pb-12 max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-6 mb-8">
          <h2 className="text-2xl font-bold tracking-tight">Gummisnacks</h2>
          <div className="flex-1 h-px" style={{ backgroundColor: "#FBBC0F", opacity: 0.4 }} />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {gummiProducts.map((p) => (
            <ProductCard key={p.name} {...p} />
          ))}
        </div>
      </section>

      {/* Lakrits section */}
      <section className="pb-12 max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-6 mb-8">
          <h2 className="text-2xl font-bold tracking-tight">Lakrits</h2>
          <div className="flex-1 h-px" style={{ backgroundColor: "#FBBC0F", opacity: 0.4 }} />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {lakritsProducts.map((p) => (
            <ProductCard key={p.name} {...p} />
          ))}
        </div>
      </section>

      {/* Bulk CTA */}
      <div className="py-8" style={{ backgroundColor: "#111" }}>
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-2" style={{ color: "#FBBC0F" }}>
              Lösviktsgodis
            </p>
            <p className="text-white text-xl font-semibold">
              Besök vår butik för lösvikt och nyheter
            </p>
          </div>
          <Link
            href="/kontakt"
            className="shrink-0 inline-flex items-center gap-2 px-8 py-4 font-semibold text-sm tracking-wider uppercase transition-colors"
            style={{ backgroundColor: "#FBBC0F", color: "#111" }}
          >
            Hitta butiken
          </Link>
        </div>
      </div>
    </div>
  );
}
