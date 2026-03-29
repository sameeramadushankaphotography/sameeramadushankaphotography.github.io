import { motion } from "framer-motion";
import studioImg from "@/assets/gallery-studio.jpg";

const StudioSection = () => {
  return (
    <section id="studio" className="py-24 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="overflow-hidden"
          >
            <img
              src={studioImg}
              alt="3rd Eye Studio interior"
              loading="lazy"
              className="w-full aspect-[4/3] object-cover"
              width={1000}
              height={800}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm tracking-[0.3em] uppercase text-primary font-body font-medium mb-3">Our Space</p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-6">3rd Eye Studio</h2>
            <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
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
            <div className="mt-8 flex flex-wrap gap-4">
              {["Professional Lighting", "Multiple Backdrops", "Instant Prints", "Props & Accessories"].map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 text-xs tracking-wider uppercase font-body font-medium border border-border text-muted-foreground"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StudioSection;
