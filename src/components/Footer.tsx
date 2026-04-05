import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#1E1E1E" }} className="mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand */}
        <div>
          <Image src="/logo.png" alt="Scandi Candy" width={90} height={63} className="mb-4 object-contain" />
          <p className="text-sm leading-relaxed max-w-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
            Gelatinfritt godis tillverkat med omsorg i Hököpinge, Vellinge.
          </p>
        </div>

        {/* Shop hours */}
        <div>
          <h3 className="text-xs font-bold tracking-widest uppercase mb-5" style={{ color: "rgba(255,255,255,0.35)" }}>
            Butikstider
          </h3>
          <ul className="space-y-3 text-sm">
            {[
              ["Torsdag", "16:00 – 18:00"],
              ["Fredag", "12:00 – 17:00"],
              ["Sista lördagen/mån", "12:00 – 15:00"],
            ].map(([day, hours]) => (
              <li key={day} className="flex justify-between gap-6">
                <span style={{ color: "rgba(255,255,255,0.5)" }}>{day}</span>
                <span className="font-semibold text-white">{hours}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xs font-bold tracking-widest uppercase mb-5" style={{ color: "rgba(255,255,255,0.35)" }}>
            Hitta oss
          </h3>
          <address className="not-italic text-sm space-y-1">
            <p className="font-semibold text-white">Scandi Candy</p>
            <p style={{ color: "rgba(255,255,255,0.5)" }}>Bruksvägen 11</p>
            <p style={{ color: "rgba(255,255,255,0.5)" }}>Hököpinge, Vellinge</p>
            <a
              href="tel:040370550"
              className="block mt-4 font-bold text-white hover:opacity-70 transition-opacity"
              style={{ color: "#FBBC0F" }}
            >
              040-370550
            </a>
          </address>
          <Link
            href="/kontakt"
            className="inline-flex items-center gap-2 mt-5 text-xs font-bold tracking-wider uppercase hover:opacity-70 transition-opacity"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            Kontakta oss →
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-6 flex items-center justify-between border-t pt-6" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
        <p className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
          © {new Date().getFullYear()} Scandi Candy AB
        </p>
        <p className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>Hököpinge, Sverige</p>
      </div>
    </footer>
  );
}
