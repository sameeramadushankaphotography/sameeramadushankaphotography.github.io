import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 bg-secondary/50">
      <div className="container mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm tracking-[0.3em] uppercase text-primary font-body font-medium mb-3">About</p>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold text-foreground mb-8">
            The Photographer Behind the Lens
          </h2>
          <p className="text-muted-foreground font-body text-lg leading-relaxed mb-6">
            I'm Sameera Madushanka — a passionate photographer dedicated to capturing the beauty
            in every moment. From the intimate emotions of a wedding to the energy of a celebration,
            I believe every story deserves to be told through stunning imagery.
          </p>
          <p className="text-muted-foreground font-body leading-relaxed">
            With years of experience in wedding, portrait, event, and model photography,
            I bring a blend of artistic vision and technical expertise to every shoot.
            At 3rd Eye Studio, we go beyond just taking photos — we create memories that last forever.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
