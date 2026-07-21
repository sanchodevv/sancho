import { useState } from 'react';
import { Image, ChevronDown, X, Maximize2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { profile } from '../data/profile';

export default function PhotosCard() {
  const [isOpen, setIsOpen] = useState(false);
  const [activePhoto, setActivePhoto] = useState<string | null>(null);

  const photos = profile.photos || [];

  const handleCardClick = (e: React.MouseEvent) => {
    // Prevent toggling accordion if we clicked active elements inside it
    if ((e.target as HTMLElement).closest('.gallery-item') || (e.target as HTMLElement).closest('.lightbox-btn')) {
      return;
    }
    setIsOpen(!isOpen);
  };

  const selectedPhoto = photos.find(p => p.id === activePhoto);

  return (
    <>
      <motion.div
        layout="position"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          delay: 0.2,
          ease: [0.16, 1, 0.3, 1]
        }}
        className="glass group relative flex flex-col overflow-hidden rounded-2xl transition-all duration-300 border border-slate-200/50 dark:border-white/5 cursor-pointer shadow-sm hover:shadow-md"
        onClick={handleCardClick}
      >
        {/* Hover Background Accent Glow */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-rose-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none"
        />

        {/* Card Header (Matches SocialCard layout) */}
        <div className="flex items-center gap-3.5 px-4 py-3 select-none">
          {/* Brand Icon Circle */}
          <div className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-xl shadow-sm transition-transform duration-300 group-hover:scale-105">
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-pink-500 via-purple-500 to-rose-500" />
            <Image className="relative h-4.5 w-4.5 text-white" />
          </div>

          {/* Text Info */}
          <div className="relative flex min-w-0 flex-1 flex-col">
            <span className="text-sm font-semibold text-slate-800 transition-colors duration-300 dark:text-white">
              Rasmlar galereyasi
            </span>
            <span className="truncate text-xs text-slate-500 dark:text-neutral-400">
              Foto to‘plam va rasmlar
            </span>
          </div>

          {/* Expand Indicator */}
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="relative flex h-7 w-7 items-center justify-center rounded-full bg-slate-100/60 dark:bg-white/5 group-hover:bg-slate-200/60 dark:group-hover:bg-white/10 transition-colors duration-300"
          >
            <ChevronDown className="h-4 w-4 text-slate-500 dark:text-neutral-400" />
          </motion.div>
        </div>

        {/* Expandable Gallery Grid */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden border-t border-slate-100 dark:border-white/5 bg-slate-50/30 dark:bg-black/10"
            >
              <div className="p-4">
                {photos.length === 0 ? (
                  <p className="text-center text-xs text-slate-400 py-4">Hozircha rasmlar yo‘q</p>
                ) : (
                  <div className="grid grid-cols-2 gap-3">
                    {photos.map((photo) => (
                      <motion.div
                        key={photo.id}
                        layoutId={`photo-card-${photo.id}`}
                        onClick={() => setActivePhoto(photo.id)}
                        className="gallery-item group/item relative aspect-square overflow-hidden rounded-xl bg-slate-100 dark:bg-neutral-800 cursor-zoom-in border border-slate-200/40 dark:border-white/5 shadow-sm"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        <img
                          src={photo.url}
                          alt={photo.title}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover/item:scale-110"
                          loading="lazy"
                        />
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover/item:opacity-100 flex flex-col justify-end p-3 text-white">
                          <p className="text-xs font-bold truncate">{photo.title}</p>
                          {photo.description && (
                            <p className="text-[10px] text-white/80 line-clamp-1 mt-0.5">{photo.description}</p>
                          )}
                          <div className="absolute top-2 right-2 p-1.5 rounded-full bg-black/40 backdrop-blur-md opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">
                            <Maximize2 className="h-3 w-3 text-white" />
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox / Fullscreen Modal */}
      <AnimatePresence>
        {activePhoto && selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
            onClick={() => setActivePhoto(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setActivePhoto(null)}
              className="lightbox-btn absolute top-6 right-6 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-all backdrop-blur-md border border-white/15"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Lightbox Image Container */}
            <motion.div
              layoutId={`photo-card-${selectedPhoto.id}`}
              className="relative max-h-[80vh] max-w-full md:max-w-3xl overflow-hidden rounded-2xl bg-neutral-900 border border-white/10 shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedPhoto.url}
                alt={selectedPhoto.title}
                className="max-h-[65vh] w-full object-contain mx-auto"
              />
              <div className="bg-neutral-950/95 px-6 py-4 border-t border-white/5 text-left">
                <h3 className="text-base font-bold text-white">{selectedPhoto.title}</h3>
                {selectedPhoto.description && (
                  <p className="mt-1 text-sm text-neutral-400">{selectedPhoto.description}</p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
