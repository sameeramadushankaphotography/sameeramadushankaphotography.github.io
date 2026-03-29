import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, Image as ImageIcon } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useCollections } from "@/hooks/use-gallery";
import { GALLERY_CONFIG } from "@/config/gallery";
import { Skeleton } from "@/components/ui/skeleton";

const Gallery = () => {
  const { data: collections, isLoading, error } = useCollections();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-24 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-sm tracking-[0.3em] uppercase text-primary font-body font-medium mb-3">
              Gallery
            </p>
            <h1 className="font-heading text-4xl sm:text-6xl font-bold text-foreground mb-4">
              Photo Collections
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Browse through our recent photoshoots. Each collection tells a unique story.
            </p>
          </motion.div>

          {GALLERY_CONFIG.demoMode && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4 mb-8 text-center"
            >
              <p className="text-amber-600 dark:text-amber-400 text-sm">
                Demo Mode - Configure your Google Apps Script URL to see your actual photos
              </p>
            </motion.div>
          )}

          {isLoading && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="space-y-3">
                  <Skeleton className="aspect-[4/3] w-full rounded-lg" />
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-3 w-1/2" />
                </div>
              ))}
            </div>
          )}

          {error && (
            <div className="text-center py-12">
              <p className="text-destructive">Failed to load collections. Please try again later.</p>
            </div>
          )}

          {collections && collections.length === 0 && (
            <div className="text-center py-12">
              <ImageIcon className="w-16 h-16 mx-auto text-muted-foreground/50 mb-4" />
              <p className="text-muted-foreground">No collections found. Add folders to your Google Drive to get started.</p>
            </div>
          )}

          {collections && collections.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {collections.map((collection, i) => (
                <motion.div
                  key={collection.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Link
                    to={`/gallery/${collection.id}`}
                    className="group block"
                  >
                    <div className="relative overflow-hidden rounded-lg aspect-[4/3] bg-muted">
                      {collection.coverImage ? (
                        <img
                          src={collection.coverImage}
                          alt={collection.title}
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <ImageIcon className="w-16 h-16 text-muted-foreground/30" />
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <span className="text-xs tracking-[0.2em] uppercase text-primary font-body font-medium">
                          {collection.category}
                        </span>
                        <h3 className="font-heading text-xl text-foreground mt-1 group-hover:text-primary transition-colors">
                          {collection.title}
                        </h3>
                      </div>
                    </div>
                    <div className="mt-3 flex items-center justify-between text-sm text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <ImageIcon className="w-4 h-4" />
                        {collection.photoCount} photos
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" />
                        {new Date(collection.createdAt).toLocaleDateString('en-US', {
                          month: 'short',
                          year: 'numeric',
                        })}
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
