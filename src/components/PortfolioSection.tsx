import { motion } from "framer-motion";
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
    <section id="portfolio" className="py-24 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-primary font-body font-medium mb-3">Portfolio</p>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold text-foreground">Selected Works</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group relative overflow-hidden ${img.wide ? "md:col-span-2 lg:col-span-2" : ""}`}
            >
              <div className={`overflow-hidden ${img.wide ? "aspect-[21/9]" : "aspect-[3/4]"}`}>
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/60 transition-all duration-500 flex items-end">
                <div className="p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-xs tracking-[0.2em] uppercase text-primary font-body">{img.category}</p>
                  <p className="font-heading text-xl text-foreground mt-1">{img.alt}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
