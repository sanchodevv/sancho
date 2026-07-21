import { profile } from "../data/profile";
import { MapPin, Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function ProfileCard() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.015, y: -3 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="glass group relative flex flex-row items-center text-left rounded-3xl p-4 sm:p-5 md:p-6 gap-4 sm:gap-6 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/15 dark:hover:shadow-black/60 hover:border-indigo-500/30 dark:hover:border-white/20 overflow-hidden"
    >
      {/* Decorative top glass border highlighting with animated shine */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500 opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Light Reflection Sweep Effect on Hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 dark:via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />

      {/* Avatar Container on Left with Animated Glow */}
      <div className="relative shrink-0 group-hover:scale-105 transition-transform duration-500">
        <div className="absolute -inset-2.5 rounded-2xl sm:rounded-3xl bg-gradient-to-tr from-cyan-400 via-emerald-500 to-indigo-600 opacity-75 blur-lg group-hover:opacity-95 group-hover:scale-110 transition-all duration-500 animate-pulse" />
        <div className="relative h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32 overflow-hidden rounded-2xl sm:rounded-3xl border-2 border-white/90 bg-white shadow-xl dark:border-white/10 dark:bg-neutral-900">
          <img
            src="/avatar.jpg"
            alt={profile.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            onError={(e) => {
              const t = e.currentTarget;
              t.style.display = "none";
              const fb = t.nextElementSibling as HTMLElement | null;
              if (fb) fb.style.display = "flex";
            }}
          />
          <div className="absolute inset-0 hidden items-center justify-center bg-gradient-to-br from-cyan-500 to-indigo-600 text-xl sm:text-2xl font-bold text-white">
            {profile.avatarFallback}
          </div>
        </div>
      </div>

      {/* Title / Name Info Container on Right */}
      <div className="relative flex flex-col items-start min-w-0 flex-1">
        <div className="inline-flex items-center gap-1 rounded-full bg-indigo-500/10 px-2.5 py-0.5 sm:px-3 sm:py-1 text-[11px] sm:text-xs font-semibold text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-300 mb-1.5 backdrop-blur-sm border border-indigo-500/15">
          <Zap className="h-3 w-3 sm:h-3.5 sm:w-3.5 animate-pulse text-amber-500" />
          <span>Faol dasturchi</span>
        </div>

        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-slate-800 dark:text-white transition-colors duration-300 truncate w-full">
          {profile.name}
        </h1>

        <p className="mt-0.5 bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500 bg-[length:200%_auto] animate-gradient bg-clip-text text-xs sm:text-sm md:text-base font-semibold text-transparent truncate w-full">
          {profile.title}
        </p>

        {/* Metadata Badges */}
        <div className="mt-2.5 sm:mt-3 flex items-center">
          <div className="flex items-center gap-1.5 rounded-xl bg-slate-100/70 dark:bg-white/5 border border-slate-200/50 dark:border-white/5 px-2.5 py-1 sm:px-3 sm:py-1.5 text-xs sm:text-sm text-slate-600 dark:text-neutral-400">
            <MapPin className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-rose-500" />
            <span>{profile.location}</span>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

