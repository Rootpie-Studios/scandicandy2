"use client";

export default function KontaktPage() {
  return (
    <div style={{ backgroundColor: "#F9F6F0" }} className="min-h-screen">
      <div className="py-8 max-w-7xl mx-auto px-6">
        <p className="text-xs font-bold tracking-[0.25em] uppercase mb-4" style={{ color: "#2E7D32" }}>
          Kontakt
        </p>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-2" style={{ color: "#1E1E1E" }}>
          Hör av dig.
        </h1>
        <p className="text-lg mb-6" style={{ color: "rgba(30,30,30,0.55)" }}>
          Vi svarar så snart vi kan.
        </p>
      </div>

      <section className="pb-0 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Left: info + map */}
        <div className="space-y-8">
          <div className="grid grid-cols-2 gap-6">
            <div className="rounded-2xl p-6" style={{ backgroundColor: "#F5EDD8" }}>
              <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "rgba(30,30,30,0.4)" }}>Adress</p>
              <p className="font-bold" style={{ color: "#1E1E1E" }}>Scandi Candy</p>
              <p className="text-sm mt-1" style={{ color: "rgba(30,30,30,0.6)" }}>Bruksvägen 11</p>
              <p className="text-sm" style={{ color: "rgba(30,30,30,0.6)" }}>Hököpinge, Vellinge</p>
            </div>
            <div className="rounded-2xl p-6" style={{ backgroundColor: "#F5EDD8" }}>
              <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "rgba(30,30,30,0.4)" }}>Telefon</p>
              <a href="tel:040370550" className="font-bold text-lg hover:opacity-70 transition-opacity" style={{ color: "#1E1E1E" }}>
                040-370550
              </a>
            </div>
          </div>

          <div className="rounded-2xl p-6" style={{ backgroundColor: "#F5EDD8" }}>
            <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: "rgba(30,30,30,0.4)" }}>Butikstider</p>
            <table className="text-sm w-full">
              <tbody className="divide-y" style={{ borderColor: "rgba(30,30,30,0.08)" }}>
                {[
                  ["Torsdag", "16:00 – 18:00"],
                  ["Fredag", "12:00 – 17:00"],
                  ["Sista lördagen i månaden", "12:00 – 15:00"],
                ].map(([day, hours]) => (
                  <tr key={day}>
                    <td className="py-2.5" style={{ color: "rgba(30,30,30,0.6)" }}>{day}</td>
                    <td className="py-2.5 font-bold text-right" style={{ color: "#1E1E1E" }}>{hours}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Interactive map */}
          <div className="rounded-2xl overflow-hidden" style={{ height: "320px" }}>
            <iframe
              title="Scandi Candy karta"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2249.8!2d12.9969!3d55.4432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4653a0a0a0a0a0a1%3A0x0!2sBruksv%C3%A4gen%2011%2C%20230%2093%20H%C3%B6k%C3%B6pinge!5e0!3m2!1ssv!2sse!4v1775415672"
            />
          </div>
        </div>

        {/* Right: contact form */}
        <form className="space-y-5 pb-12">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold tracking-wider uppercase mb-2" style={{ color: "rgba(30,30,30,0.5)" }}>
                Förnamn
              </label>
              <input
                type="text"
                autoComplete="given-name"
                className="w-full px-4 py-3.5 rounded-xl text-sm font-medium outline-none transition-all border-2"
                style={{ backgroundColor: "#fff", border: "2px solid transparent", color: "#1E1E1E" }}
                onFocus={(e) => (e.target.style.borderColor = "#FBBC0F")}
                onBlur={(e) => (e.target.style.borderColor = "transparent")}
                placeholder="Anna"
              />
            </div>
            <div>
              <label className="block text-xs font-bold tracking-wider uppercase mb-2" style={{ color: "rgba(30,30,30,0.5)" }}>
                Efternamn
              </label>
              <input
                type="text"
                autoComplete="family-name"
                className="w-full px-4 py-3.5 rounded-xl text-sm font-medium outline-none transition-all border-2"
                style={{ backgroundColor: "#fff", border: "2px solid transparent", color: "#1E1E1E" }}
                onFocus={(e) => (e.target.style.borderColor = "#FBBC0F")}
                onBlur={(e) => (e.target.style.borderColor = "transparent")}
                placeholder="Svensson"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold tracking-wider uppercase mb-2" style={{ color: "rgba(30,30,30,0.5)" }}>
              E-post
            </label>
            <input
              type="email"
              autoComplete="email"
              className="w-full px-4 py-3.5 rounded-xl text-sm font-medium outline-none transition-all border-2"
              style={{ backgroundColor: "#fff", border: "2px solid transparent", color: "#1E1E1E" }}
              onFocus={(e) => (e.target.style.borderColor = "#FBBC0F")}
              onBlur={(e) => (e.target.style.borderColor = "transparent")}
              placeholder="anna@exempel.se"
            />
          </div>

          <div>
            <label className="block text-xs font-bold tracking-wider uppercase mb-2" style={{ color: "rgba(30,30,30,0.5)" }}>
              Ämne
            </label>
            <input
              type="text"
              className="w-full px-4 py-3.5 rounded-xl text-sm font-medium outline-none transition-all border-2"
              style={{ backgroundColor: "#fff", border: "2px solid transparent", color: "#1E1E1E" }}
              onFocus={(e) => (e.target.style.borderColor = "#FBBC0F")}
              onBlur={(e) => (e.target.style.borderColor = "transparent")}
              placeholder="Kontraktstillverkning / Fråga om produkter"
            />
          </div>

          <div>
            <label className="block text-xs font-bold tracking-wider uppercase mb-2" style={{ color: "rgba(30,30,30,0.5)" }}>
              Meddelande
            </label>
            <textarea
              rows={6}
              className="w-full px-4 py-3.5 rounded-xl text-sm font-medium outline-none transition-all border-2 resize-none"
              style={{ backgroundColor: "#fff", border: "2px solid transparent", color: "#1E1E1E" }}
              onFocus={(e) => (e.target.style.borderColor = "#FBBC0F")}
              onBlur={(e) => (e.target.style.borderColor = "transparent")}
              placeholder="Berätta vad du vill veta..."
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 font-bold text-sm tracking-wider uppercase hover:opacity-85 transition-opacity rounded-full cursor-pointer"
            style={{ backgroundColor: "#FBBC0F", color: "#1E1E1E" }}
          >
            Skicka meddelande
          </button>
        </form>
      </section>
    </div>
  );
}
