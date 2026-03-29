import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import galleryPreshoot from "@/assets/gallery-preshoot.jpg";
import galleryParty from "@/assets/gallery-party.jpg";
import galleryModel from "@/assets/gallery-model.jpg";
import galleryWedding2 from "@/assets/gallery-wedding2.jpg";
import galleryStudio from "@/assets/gallery-studio.jpg";
import galleryOutdoor from "@/assets/gallery-outdoor.jpg";
import heroWedding from "@/assets/hero-wedding.jpg";

const images = [
  { src: heroWedding, alt: "Wedding Photography", category: "Wedding", wide: true },
  { src: galleryPreshoot, alt: "Pre-shoot Photography", category: "Pre-shoot", wide: false },
  { src: galleryModel, alt: "Model Photography", category: "Model", wide: false },
  { src: galleryParty, alt: "Party Photography", category: "Party", wide: true },
  { src: galleryWedding2, alt: "Wedding Details", category: "Wedding", wide: false },
  { src: galleryOutdoor, alt: "Outdoor Photography", category: "Outdoor", wide: false },
  { src: galleryStudio, alt: "Studio Photography", category: "Studio", wide: true },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-24 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

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
          <p className="text-sm tracking-[0.3em] uppercase text-primary font-body font-medium mb-3">Portfolio</p>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold text-foreground">Selected Works</h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Every frame tells a story. Explore our finest captures.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className={`group relative overflow-hidden rounded-sm cursor-pointer ${img.wide ? "md:col-span-2 lg:col-span-2" : ""}`}
            >
              {/* Glowing border on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-primary/50 via-primary to-primary/50 blur-sm -z-10" />

              <div className={`overflow-hidden ${img.wide ? "aspect-[21/9]" : "aspect-[3/4]"} relative`}>
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-75"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
              </div>

              <div className="absolute inset-0 flex items-end">
                <div className="p-6 w-full">
                  <motion.div
                    initial={{ opacity: 0.7, y: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="transform group-hover:-translate-y-2 transition-transform duration-500"
                  >
                    <span className="inline-block px-3 py-1 text-xs tracking-[0.2em] uppercase text-primary-foreground bg-primary/90 font-body mb-2">
                      {img.category}
                    </span>
                    <p className="font-heading text-xl text-foreground">{img.alt}</p>
                  </motion.div>
                </div>
              </div>

              {/* View icon on hover */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <div className="w-10 h-10 rounded-full bg-primary/90 flex items-center justify-center">
                  <ArrowRight className="w-4 h-4 text-primary-foreground -rotate-45" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-16"
        >
          <Link to="/gallery">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-10 py-4 bg-transparent border-2 border-primary text-primary text-sm tracking-widest uppercase font-body font-medium overflow-hidden transition-all duration-300 hover:text-primary-foreground"
            >
              <span className="relative z-10 flex items-center gap-3">
                View All Collections
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-primary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
