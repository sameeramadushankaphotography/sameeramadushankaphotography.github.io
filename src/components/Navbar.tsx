import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-3rdeye.png";

const navLinks = [
  { label: "Home", href: "#home", isAnchor: true },
  { label: "Portfolio", href: "#portfolio", isAnchor: true },
  { label: "Gallery", href: "/gallery", isAnchor: false },
  { label: "Services", href: "#services", isAnchor: true },
  { label: "Studio", href: "#studio", isAnchor: true },
  { label: "About", href: "#about", isAnchor: true },
  { label: "Contact", href: "#contact", isAnchor: true },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const handleAnchorClick = (href: string) => {
    if (!isHomePage && href.startsWith("#")) {
      // Navigate to home page first, then scroll
      window.location.href = "/" + href;
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Studio 3rd Eye" className="h-10 w-20" />
          <div className="leading-tight">
            <span className="font-heading text-lg font-semibold text-gradient-gold">Studio 3rd Eye</span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            l.isAnchor ? (
              <a
                key={l.href}
                href={isHomePage ? l.href : "/" + l.href}
                onClick={() => handleAnchorClick(l.href)}
                className="text-sm font-body font-medium tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors"
              >
                {l.label}
              </a>
            ) : (
              <Link
                key={l.href}
                to={l.href}
                className="text-sm font-body font-medium tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors"
              >
                {l.label}
              </Link>
            )
          ))}
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border px-4 pb-6 pt-2 space-y-4">
          {navLinks.map((l) => (
            l.isAnchor ? (
              <a
                key={l.href}
                href={isHomePage ? l.href : "/" + l.href}
                onClick={() => {
                  setOpen(false);
                  handleAnchorClick(l.href);
                }}
                className="block text-sm font-body font-medium tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors"
              >
                {l.label}
              </a>
            ) : (
              <Link
                key={l.href}
                to={l.href}
                onClick={() => setOpen(false)}
                className="block text-sm font-body font-medium tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors"
              >
                {l.label}
              </Link>
            )
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
