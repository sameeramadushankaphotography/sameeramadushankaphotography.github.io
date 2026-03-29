import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Image as ImageIcon, Calendar } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Lightbox from "@/components/Lightbox";
import { usePhotos } from "@/hooks/use-gallery";
import { GALLERY_CONFIG } from "@/config/gallery";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";

const Collection = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, error } = usePhotos(id);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentPhotoIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-24 px-4">
        <div className="container mx-auto">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="mb-8"
          >
            <Link to="/gallery">
              <Button variant="ghost" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Gallery
              </Button>
            </Link>
          </motion.div>

          {isLoading && (
            <>
              <div className="mb-12">
                <Skeleton className="h-6 w-24 mb-2" />
                <Skeleton className="h-10 w-80 mb-4" />
                <Skeleton className="h-4 w-48" />
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {Array.from({ length: 12 }).map((_, i) => (
                  <Skeleton key={i} className="aspect-square rounded-lg" />
                ))}
              </div>
            </>
          )}

          {error && (
            <div className="text-center py-12">
              <p className="text-destructive">Failed to load collection. Please try again later.</p>
            </div>
          )}

          {data && (
            <>
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-12"
              >
                <p className="text-sm tracking-[0.3em] uppercase text-primary font-body font-medium mb-2">
                  {data.collection.category}
                </p>
                <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-4">
                  {data.collection.title}
                </h1>
                <div className="flex items-center gap-6 text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <ImageIcon className="w-4 h-4" />
                    {data.total} photos
                  </span>
                </div>
              </motion.div>

              {GALLERY_CONFIG.demoMode && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4 mb-8 text-center"
                >
                  <p className="text-amber-600 dark:text-amber-400 text-sm">
                    Demo Mode - These are placeholder images
                  </p>
                </motion.div>
              )}

              {/* Photo Grid */}
              {data.photos.length === 0 ? (
                <div className="text-center py-12">
                  <ImageIcon className="w-16 h-16 mx-auto text-muted-foreground/50 mb-4" />
                  <p className="text-muted-foreground">No photos in this collection yet.</p>
                </div>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {data.photos.map((photo, i) => (
                    <motion.div
                      key={photo.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.05 }}
                      className="group relative aspect-square overflow-hidden rounded-lg bg-muted cursor-pointer"
                      onClick={() => openLightbox(i)}
                    >
                      <img
                        src={photo.thumbnailUrl}
                        alt={photo.name}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                    </motion.div>
                  ))}
                </div>
              )}

              {/* Lightbox */}
              <Lightbox
                photos={data.photos}
                currentIndex={currentPhotoIndex}
                isOpen={lightboxOpen}
                onClose={() => setLightboxOpen(false)}
                onNavigate={setCurrentPhotoIndex}
              />
            </>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Collection;
