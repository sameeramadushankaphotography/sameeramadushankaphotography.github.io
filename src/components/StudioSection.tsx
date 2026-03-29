import { motion } from "framer-motion";
import { Check } from "lucide-react";
import studioImg from "@/assets/gallery-studio.jpg";

const features = [
  "Professional Lighting",
  "Multiple Backdrops",
  "Instant Prints",
  "Props & Accessories",
];

const StudioSection = () => {
  return (
    <section id="studio" className="py-24 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-1/2 h-96 bg-gradient-to-r from-primary/5 to-transparent -translate-y-1/2" />

      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative group"
          >
            {/* Decorative frame */}
            <div className="absolute -inset-4 border-2 border-primary/20 -z-10 group-hover:border-primary/40 transition-colors duration-500" />
            <div className="absolute -inset-4 border-2 border-primary/10 translate-x-4 translate-y-4 -z-20" />

            <div className="overflow-hidden">
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
                src={studioImg}
                alt="Studio 3rd Eye interior"
                loading="lazy"
                className="w-full aspect-[4/3] object-cover"
                width={1000}
                height={800}
              />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground px-6 py-4 shadow-lg"
            >
              <div className="text-3xl font-heading font-bold">8+</div>
              <div className="text-xs tracking-wider uppercase">Years</div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: "3rem" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="block h-0.5 bg-primary mb-6"
            />
            <p className="text-sm tracking-[0.3em] uppercase text-primary font-body font-medium mb-3">Our Space</p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Studio 3rd Eye
            </h2>
            <div className="space-y-4 text-muted-foreground font-body leading-relaxed text-lg">
              <p>
                Our fully-equipped studio is your creative playground. Whether you need professional portraits,
                model portfolio shoots, or product photography — we have the lighting, backdrops, and space
                to bring your vision to life.
              </p>
              <p>
                We also offer instant photo printing services, perfect for events, parties, and memorable
                occasions where you want to take your photos home right away.
              </p>
            </div>

            {/* Features */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              {features.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <span className="text-sm font-body text-foreground">{item}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.a
              href="#contact"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.4 }}
              className="inline-block mt-10 px-8 py-4 bg-primary text-primary-foreground text-sm tracking-widest uppercase font-body font-medium hover:shadow-[0_0_30px_hsl(38_80%_55%_/_0.3)] transition-shadow duration-300"
            >
              Book Studio Session
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StudioSection;
