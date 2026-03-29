import { motion } from "framer-motion";
import { Camera, Heart, PartyPopper, User, Printer, Image } from "lucide-react";

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
    <section id="services" className="py-24 px-4 bg-secondary/50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-primary font-body font-medium mb-3">What We Offer</p>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold text-foreground">Our Services</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-8 border border-border bg-card hover:border-primary/30 transition-all duration-300"
            >
              <s.icon className="w-8 h-8 text-primary mb-5 group-hover:scale-110 transition-transform" />
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{s.title}</h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
