import { motion } from "framer-motion";
import { Camera, Heart, PartyPopper, User, Printer, Image, ArrowUpRight } from "lucide-react";

const services = [
  { icon: Heart, title: "Wedding Photography", desc: "Capturing every magical moment of your special day with cinematic storytelling." },
  { icon: Camera, title: "Pre-shoot Sessions", desc: "Beautiful couple sessions in stunning outdoor and indoor locations." },
  { icon: PartyPopper, title: "Event & Party", desc: "Professional coverage for birthdays, corporate events, and celebrations." },
  { icon: User, title: "Model & Portrait", desc: "High-end editorial and portfolio shoots with dramatic studio lighting." },
  { icon: Printer, title: "Instant Photo Prints", desc: "On-the-spot photo printing for events and studio sessions." },
  { icon: Image, title: "Photo Editing", desc: "Professional retouching and color grading to make every image perfect." },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 px-4 bg-secondary/50 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto relative z-10">
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
          <p className="text-sm tracking-[0.3em] uppercase text-primary font-body font-medium mb-3">What We Offer</p>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold text-foreground">Our Services</h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            From weddings to portraits, we bring your vision to life with professional excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative p-8 border border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-500 overflow-hidden"
            >
              {/* Hover gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Icon with glow effect */}
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <s.icon className="w-7 h-7 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>

              {/* Content */}
              <div className="relative">
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                  {s.title}
                  <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-primary" />
                </h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">{s.desc}</p>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-primary/50 w-0 group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-16"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-body tracking-wide group"
          >
            <span>Discuss your project with us</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
