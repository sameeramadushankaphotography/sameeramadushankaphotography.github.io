import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Camera, Heart, Star } from "lucide-react";
import heroImg from "@/assets/hero-wedding.jpg";
import TypeWriter from "./TypeWriter";
import FloatingParticles from "./FloatingParticles";

const HeroSection = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.5,
        ease: [0.215, 0.61, 0.355, 1],
      },
    }),
  };

  const name = "Sameera Madushanka";

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Parallax Background Image */}
      <motion.div style={{ y }} className="absolute inset-0">
        <img
          src={heroImg}
          alt="Wedding photography by Sameera Madushanka"
          className="absolute inset-0 w-full h-full object-cover scale-110"
          width={1920}
          height={1080}
        />
      </motion.div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-background/50" />

      {/* Floating Particles */}
      <FloatingParticles count={25} />

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 opacity-20">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <Camera className="w-8 h-8 text-primary" />
        </motion.div>
      </div>
      <div className="absolute top-40 right-20 opacity-20">
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <Heart className="w-6 h-6 text-primary" />
        </motion.div>
      </div>
      <div className="absolute bottom-40 left-20 opacity-20">
        <motion.div
          animate={{ rotate: [0, 15, -15, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <Star className="w-5 h-5 text-primary" />
        </motion.div>
      </div>

      {/* Main Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center"
      >
        {/* Studio Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs tracking-[0.3em] uppercase text-primary font-body font-medium">
              Studio 3rd Eye
            </span>
          </span>
        </motion.div>

        {/* Animated Name - Letter by Letter */}
        <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-2">
          <span className="block overflow-hidden">
            {name.split("").map((letter, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                className="inline-block"
                style={{ display: letter === " " ? "inline" : "inline-block" }}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </span>
        </h1>

        {/* Typing Effect for Photography Styles */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="h-16 sm:h-20 flex items-center justify-center"
        >
          <span className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold">
            <TypeWriter
              texts={[
                "Photography",
                "Wedding Moments",
                "Pre-shoot Sessions",
                "Party Vibes",
                "Model Portfolios",
                "Studio Magic",
              ]}
              speed={80}
              deleteSpeed={40}
              delayBetween={2500}
              className="text-gradient-gold"
            />
          </span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mt-6 text-muted-foreground font-body text-lg sm:text-xl max-w-2xl leading-relaxed"
        >
          Capturing timeless moments with artistic vision
          <span className="hidden sm:inline"> — weddings, portraits, events & more</span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#portfolio"
            className="group relative px-8 py-4 bg-primary text-primary-foreground text-sm tracking-widest uppercase font-body font-medium overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_hsl(38_80%_55%_/_0.3)]"
          >
            <span className="relative z-10">View Portfolio</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border border-primary/50 text-primary text-sm tracking-widest uppercase font-body font-medium hover:bg-primary/10 hover:border-primary transition-all duration-300"
          >
            Book a Session
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 0.8 }}
          className="mt-16 flex items-center gap-8 sm:gap-12"
        >
          {[
            { value: "500+", label: "Photoshoots" },
            { value: "8+", label: "Years Experience" },
            { value: "100%", label: "Happy Clients" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="font-heading text-2xl sm:text-3xl font-bold text-primary">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <a href="#portfolio" className="flex flex-col items-center gap-2 group">
          <span className="text-xs tracking-widest uppercase text-muted-foreground group-hover:text-primary transition-colors">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-5 h-5 text-primary" />
          </motion.div>
        </a>
      </motion.div>

      {/* Corner Decorations */}
      <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-primary/20" />
      <div className="absolute top-0 right-0 w-32 h-32 border-r-2 border-t-2 border-primary/20" />
      <div className="absolute bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 border-primary/20" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-primary/20" />
    </section>
  );
};

export default HeroSection;
