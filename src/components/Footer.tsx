import { Facebook } from "lucide-react";
import logo from "@/assets/logo-3rdeye.png";

const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src={logo} alt="3rd Eye Studio" className="h-8 w-8" />
          <span className="font-heading text-sm text-muted-foreground">
            © {new Date().getFullYear()} Sameera Madushanka Photography
          </span>
        </div>
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors"
          aria-label="Facebook"
        >
          <Facebook size={20} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
