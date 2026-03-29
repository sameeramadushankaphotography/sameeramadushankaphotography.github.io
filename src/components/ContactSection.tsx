import { motion } from "framer-motion";
import { Facebook, Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-primary font-body font-medium mb-3">Get in Touch</p>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold text-foreground">Let's Create Together</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid sm:grid-cols-2 gap-6"
        >
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-6 border border-border bg-card hover:border-primary/30 transition-all group"
          >
            <Facebook className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
            <div>
              <p className="font-heading text-foreground font-semibold">Facebook</p>
              <p className="text-muted-foreground text-sm font-body">Sameera Madushanka Photography</p>
            </div>
          </a>

          <a
            href="mailto:hello@3rdeyestudio.com"
            className="flex items-center gap-4 p-6 border border-border bg-card hover:border-primary/30 transition-all group"
          >
            <Mail className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
            <div>
              <p className="font-heading text-foreground font-semibold">Email</p>
              <p className="text-muted-foreground text-sm font-body">hello@3rdeyestudio.com</p>
            </div>
          </a>

          <a
            href="tel:+94771234567"
            className="flex items-center gap-4 p-6 border border-border bg-card hover:border-primary/30 transition-all group"
          >
            <Phone className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
            <div>
              <p className="font-heading text-foreground font-semibold">Phone</p>
              <p className="text-muted-foreground text-sm font-body">+94 77 123 4567</p>
            </div>
          </a>

          <div className="flex items-center gap-4 p-6 border border-border bg-card">
            <MapPin className="w-6 h-6 text-primary" />
            <div>
              <p className="font-heading text-foreground font-semibold">Studio</p>
              <p className="text-muted-foreground text-sm font-body">3rd Eye Studio, Sri Lanka</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
