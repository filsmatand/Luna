import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className=" border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-8 md:flex-row">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Maarifa"
            className="h-12 w-auto"
          />
          <div>
            <h3 className="text-lg font-bold text-slate-900">
              Maarifa
            </h3>
            <p className="text-sm text-slate-500">
              Learn. Build. Innovate.
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-600">
          <a href="/" className="transition hover:text-amber-500">
            Accueil
          </a>
          <a href="/" className="transition hover:text-amber-500">
            Formations
          </a>
          <a href="/" className="transition hover:text-amber-500">
            Projets
          </a>
          <a href="/" className="transition hover:text-amber-500">
            Contact
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} Maarifa. Tous droits réservés.
        </p>

      </div>
    </footer>
  );
}