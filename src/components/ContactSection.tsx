import { motion } from "framer-motion";
import { Facebook, Mail, Phone, MapPin, ArrowUpRight, Instagram, MessageCircle } from "lucide-react";

const contactLinks = [
  {
    icon: Facebook,
    title: "Facebook",
    subtitle: "Sameera Madushanka Photography",
    href: "https://www.facebook.com/sameeramadushankaphotograph",
    color: "group-hover:text-blue-500",
  },
  {
    icon: Instagram,
    title: "Instagram",
    subtitle: "@sameera.photography",
    href: "https://www.instagram.com/",
    color: "group-hover:text-pink-500",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    subtitle: "+94 71 171 8596",
    href: "https://wa.me/94711718596",
    color: "group-hover:text-green-500",
  },
  {
    icon: Mail,
    title: "Email",
    subtitle: "studio3rdeyephotography@gmail.com",
    href: "mailto:studio3rdeyephotography@gmail.com",
    color: "group-hover:text-primary",
  },
  {
    icon: Phone,
    title: "Phone",
    subtitle: "+94 71 171 8596",
    href: "tel:+94711718596",
    color: "group-hover:text-primary",
  },
  {
    icon: MapPin,
    title: "Studio",
    subtitle: "Studio 3rd Eye, Nonagama Rd, Padalangala, Embilipitiya",
    href: "https://maps.app.goo.gl/frqXGWbwQx5LD9n99",
    color: "group-hover:text-red-500",
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ width: 0 }}
            whileInView={{ width: "3rem" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="block h-0.5 bg-primary mx-auto mb-6"
          />
          <p className="text-sm tracking-[0.3em] uppercase text-primary font-body font-medium mb-3">Get in Touch</p>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold text-foreground mb-4">Let's Create Together</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Ready to capture your special moments? Reach out through any of these channels.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {contactLinks.map((item, i) => {
            const Content = (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={item.href ? { y: -5, transition: { duration: 0.2 } } : {}}
                className={`group relative flex items-center gap-4 p-6 border border-border bg-card/50 backdrop-blur-sm transition-all duration-300 ${
                  item.href ? "hover:border-primary/50 cursor-pointer" : ""
                }`}
              >
                {/* Hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Icon */}
                <div className="relative w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                  <item.icon className={`w-5 h-5 text-primary transition-colors duration-300 ${item.color}`} />
                </div>

                {/* Content */}
                <div className="relative flex-1 min-w-0">
                  <p className="font-heading text-foreground font-semibold flex items-center gap-2">
                    {item.title}
                    {item.href && (
                      <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}
                  </p>
                  <p className="text-muted-foreground text-sm font-body truncate">{item.subtitle}</p>
                </div>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 h-0.5 bg-primary w-0 group-hover:w-full transition-all duration-500" />
              </motion.div>
            );

            return item.href ? (
              <a
                key={i}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                {Content}
              </a>
            ) : (
              <div key={i}>{Content}</div>
            );
          })}
        </div>

        {/* Google Maps Embed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-12"
        >
          <div className="relative overflow-hidden border border-border bg-card/50">
            {/* Map header */}
            <div className="flex items-center justify-between p-4 border-b border-border">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-heading text-foreground font-semibold">Find Us Here</p>
                  <p className="text-muted-foreground text-sm">Studio 3rd Eye, Embilipitiya</p>
                </div>
              </div>
              <a
                href="https://maps.app.goo.gl/frqXGWbwQx5LD9n99"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-sm text-primary hover:text-primary/80 transition-colors"
              >
                <span>Get Directions</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
            {/* Map iframe */}
            <iframe
              src="https://maps.google.com/maps?q=Studio+3rd+Eye,Nonagama+Rd,Padalangala,Embilipitiya,Sri+Lanka&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Studio 3rd Eye Location"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-6">
            Prefer a direct conversation? Let's schedule a call!
          </p>
          <a
            href="tel:+94711718596"
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground text-sm tracking-widest uppercase font-body font-medium hover:shadow-[0_0_30px_hsl(38_80%_55%_/_0.3)] transition-shadow duration-300"
          >
            <Phone className="w-4 h-4" />
            Call Now
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
