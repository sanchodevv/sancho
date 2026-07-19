import { profile } from "../data/profile";
import { MapPin, Mail, Sparkles, Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function ProfileCard() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="glass relative flex flex-col items-center text-center rounded-3xl p-8 transition-all duration-500 hover:shadow-xl hover:shadow-indigo-500/5 dark:hover:shadow-black/40 group overflow-hidden"
    >
      {/* Decorative top glass border highlighting */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500 opacity-60" />

      {/* Avatar Container with Animated Glow */}
      <div className="relative mb-6 group-hover:scale-105 transition-transform duration-500">
        <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-cyan-400 via-emerald-500 to-indigo-600 opacity-75 blur-xl group-hover:opacity-90 group-hover:scale-110 transition-all duration-500 animate-pulse" />
        <div className="relative h-28 w-28 overflow-hidden rounded-3xl border-2 border-white/80 bg-white shadow-xl dark:border-white/10 dark:bg-neutral-900">
          <img
            src="/avatar.jpg"
            alt={profile.name}
            className="h-full w-full object-cover"
            onError={(e) => {
              const t = e.currentTarget;
              t.style.display = "none";
              const fb = t.nextElementSibling as HTMLElement | null;
              if (fb) fb.style.display = "flex";
            }}
          />
          <div className="absolute inset-0 hidden items-center justify-center bg-gradient-to-br from-cyan-500 to-indigo-600 text-xl font-bold text-white">
            {profile.avatarFallback}
          </div>
        </div>
      </div>

      {/* Title / Name Info */}
      <div className="relative flex flex-col items-center">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-300 mb-3 backdrop-blur-sm border border-indigo-500/15">
          <Zap className="h-3 w-3 animate-pulse" />
          <span>Faol dasturchi</span>
        </div>

        <h1 className="text-2xl font-bold tracking-tight text-slate-800 dark:text-white transition-colors duration-300">
          {profile.name}
        </h1>

        <p className="mt-1 bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500 bg-[length:200%_auto] animate-gradient bg-clip-text text-sm font-semibold text-transparent">
          {profile.title}
        </p>
      </div>

      <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-600 dark:text-neutral-300 transition-colors duration-300">
        {profile.bio}
      </p>

      {/* Metadata Badges */}
      <div className="mt-6 flex flex-wrap justify-center gap-2">
        <div className="flex items-center gap-1.5 rounded-xl bg-slate-100/60 dark:bg-white/5 border border-slate-200/50 dark:border-white/5 px-3 py-1.5 text-xs text-slate-600 dark:text-neutral-400">
          <MapPin className="h-3.5 w-3.5 text-rose-500" />
          <span>{profile.location}</span>
        </div>
        <a
          href={`mailto:${profile.email}`}
          className="flex items-center gap-1.5 rounded-xl bg-slate-100/60 hover:bg-slate-200/60 dark:bg-white/5 dark:hover:bg-white/10 border border-slate-200/50 dark:border-white/5 px-3 py-1.5 text-xs text-slate-600 dark:text-neutral-400 transition-all"
        >
          <Mail className="h-3.5 w-3.5 text-indigo-500" />
          <span>Bog‘lanish</span>
        </a>
      </div>
    </motion.section>
  );
}

