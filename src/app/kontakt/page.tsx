"use client";

export default function KontaktPage() {
  return (
    <div style={{ backgroundColor: "#F9F6F0" }} className="min-h-screen">
      <div className="py-8 max-w-7xl mx-auto px-6">
        <p className="text-xs font-bold tracking-[0.25em] uppercase mb-3" style={{ color: "#2E7D32" }}>
          Kontakt
        </p>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-1" style={{ color: "#1E1E1E" }}>
          Hör av dig.
        </h1>
        <p className="text-base mb-0" style={{ color: "rgba(30,30,30,0.5)" }}>
          Vi svarar så snart vi kan.
        </p>
      </div>

      <section className="pb-12 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Left: info + map */}
        <div className="space-y-4">
          {/* Addresses */}
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl p-5" style={{ backgroundColor: "#F5EDD8" }}>
              <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: "rgba(30,30,30,0.4)" }}>Butik</p>
              <p className="font-bold text-sm" style={{ color: "#1E1E1E" }}>Scandi Candy AB</p>
              <p className="text-sm mt-0.5" style={{ color: "rgba(30,30,30,0.6)" }}>Bruksvägen 11</p>
              <p className="text-sm" style={{ color: "rgba(30,30,30,0.6)" }}>235 42 Vellinge</p>
            </div>
            <div className="rounded-2xl p-5" style={{ backgroundColor: "#F5EDD8" }}>
              <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: "rgba(30,30,30,0.4)" }}>Bolagsadress</p>
              <p className="font-bold text-sm" style={{ color: "#1E1E1E" }}>Scandi Candy AB</p>
              <p className="text-sm mt-0.5" style={{ color: "rgba(30,30,30,0.6)" }}>Terminalgatan 14</p>
              <p className="text-sm" style={{ color: "rgba(30,30,30,0.6)" }}>235 39 Vellinge</p>
            </div>
          </div>

          {/* Phone + Hours */}
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl p-5" style={{ backgroundColor: "#F5EDD8" }}>
              <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: "rgba(30,30,30,0.4)" }}>Telefon</p>
              <a href="tel:040370550" className="font-bold text-base hover:opacity-70 transition-opacity" style={{ color: "#1E1E1E" }}>
                040-370550
              </a>
            </div>
            <div className="rounded-2xl p-5" style={{ backgroundColor: "#F5EDD8" }}>
              <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: "rgba(30,30,30,0.4)" }}>Butikstider</p>
              <table className="text-xs w-full">
                <tbody>
                  {[
                    ["Torsdag", "16–18"],
                    ["Fredag", "12–17"],
                    ["Sista lördag", "12–15"],
                  ].map(([day, hours]) => (
                    <tr key={day}>
                      <td className="py-0.5 pr-2" style={{ color: "rgba(30,30,30,0.6)" }}>{day}</td>
                      <td className="py-0.5 font-bold text-right" style={{ color: "#1E1E1E" }}>{hours}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden" style={{ height: "280px" }}>
            <iframe
              title="Scandi Candy karta"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://maps.google.com/maps?q=Bruksv%C3%A4gen+11,+H%C3%B6k%C3%B6pinge,+Vellinge,+Sweden&hl=sv&z=13&output=embed"
            />
          </div>
        </div>

        {/* Right: contact form */}
        <form className="space-y-4 pb-12">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold tracking-wider uppercase mb-1.5" style={{ color: "rgba(30,30,30,0.5)" }}>
                Förnamn
              </label>
              <input
                type="text"
                autoComplete="given-name"
                className="w-full px-4 py-3 rounded-xl text-sm font-medium outline-none transition-all border-2"
                style={{ backgroundColor: "#fff", border: "2px solid transparent", color: "#1E1E1E" }}
                onFocus={(e) => (e.target.style.borderColor = "#FBBC0F")}
                onBlur={(e) => (e.target.style.borderColor = "transparent")}
                placeholder="Anna"
              />
            </div>
            <div>
              <label className="block text-xs font-bold tracking-wider uppercase mb-1.5" style={{ color: "rgba(30,30,30,0.5)" }}>
                Efternamn
              </label>
              <input
                type="text"
                autoComplete="family-name"
                className="w-full px-4 py-3 rounded-xl text-sm font-medium outline-none transition-all border-2"
                style={{ backgroundColor: "#fff", border: "2px solid transparent", color: "#1E1E1E" }}
                onFocus={(e) => (e.target.style.borderColor = "#FBBC0F")}
                onBlur={(e) => (e.target.style.borderColor = "transparent")}
                placeholder="Svensson"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold tracking-wider uppercase mb-1.5" style={{ color: "rgba(30,30,30,0.5)" }}>
              E-post
            </label>
            <input
              type="email"
              autoComplete="email"
              className="w-full px-4 py-3 rounded-xl text-sm font-medium outline-none transition-all border-2"
              style={{ backgroundColor: "#fff", border: "2px solid transparent", color: "#1E1E1E" }}
              onFocus={(e) => (e.target.style.borderColor = "#FBBC0F")}
              onBlur={(e) => (e.target.style.borderColor = "transparent")}
              placeholder="anna@exempel.se"
            />
          </div>

          <div>
            <label className="block text-xs font-bold tracking-wider uppercase mb-1.5" style={{ color: "rgba(30,30,30,0.5)" }}>
              Ämne
            </label>
            <input
              type="text"
              className="w-full px-4 py-3 rounded-xl text-sm font-medium outline-none transition-all border-2"
              style={{ backgroundColor: "#fff", border: "2px solid transparent", color: "#1E1E1E" }}
              onFocus={(e) => (e.target.style.borderColor = "#FBBC0F")}
              onBlur={(e) => (e.target.style.borderColor = "transparent")}
              placeholder="Kontraktstillverkning / Fråga om produkter"
            />
          </div>

          <div>
            <label className="block text-xs font-bold tracking-wider uppercase mb-1.5" style={{ color: "rgba(30,30,30,0.5)" }}>
              Meddelande
            </label>
            <textarea
              rows={5}
              className="w-full px-4 py-3 rounded-xl text-sm font-medium outline-none transition-all border-2 resize-none"
              style={{ backgroundColor: "#fff", border: "2px solid transparent", color: "#1E1E1E" }}
              onFocus={(e) => (e.target.style.borderColor = "#FBBC0F")}
              onBlur={(e) => (e.target.style.borderColor = "transparent")}
              placeholder="Berätta vad du vill veta..."
            />
          </div>

          <button
            type="submit"
            className="w-full py-3.5 font-bold text-sm tracking-wider uppercase hover:opacity-85 transition-opacity rounded-full cursor-pointer"
            style={{ backgroundColor: "#FBBC0F", color: "#1E1E1E" }}
          >
            Skicka meddelande
          </button>
        </form>
      </section>
    </div>
  );
}
