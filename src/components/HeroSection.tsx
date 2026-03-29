import { motion } from "framer-motion";
import heroImg from "@/assets/hero-wedding.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      <img
        src={heroImg}
        alt="Wedding photography by Sameera Madushanka"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />

      <div className="relative z-10 flex flex-col items-center justify-end h-full pb-24 px-4 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-sm tracking-[0.35em] uppercase text-primary font-body font-medium mb-4"
        >
          3rd Eye Studio
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-heading text-4xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight"
        >
          Sameera Madushanka
          <br />
          <span className="text-gradient-gold">Photography</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 text-muted-foreground font-body text-lg max-w-xl"
        >
          Capturing timeless moments — weddings, portraits, events & more
        </motion.p>
        <motion.a
          href="#portfolio"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 inline-block px-8 py-3 border border-primary text-primary text-sm tracking-widest uppercase font-body font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300"
        >
          View Portfolio
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;
