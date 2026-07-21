import { motion } from 'framer-motion';

export default function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-gradient-to-tr from-slate-50 via-slate-100/60 to-indigo-50/40 transition-colors duration-500 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950">
      {/* Animated Glowing Orb 1 - Cyan/Indigo */}
      <motion.div
        animate={{
          x: [0, 80, -40, 0],
          y: [0, -60, 50, 0],
          scale: [1, 1.25, 0.9, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -top-24 -left-24 h-[420px] w-[420px] rounded-full bg-gradient-to-br from-cyan-400/30 via-indigo-500/25 to-purple-500/20 blur-3xl opacity-80 dark:from-cyan-500/20 dark:via-indigo-500/20 dark:to-purple-600/15 dark:opacity-60"
      />

      {/* Animated Glowing Orb 2 - Rose/Fuchsia */}
      <motion.div
        animate={{
          x: [0, -90, 60, 0],
          y: [0, 70, -50, 0],
          scale: [1, 1.15, 1.3, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -bottom-28 -right-28 h-[450px] w-[450px] rounded-full bg-gradient-to-tr from-pink-500/25 via-rose-400/25 to-amber-300/20 blur-3xl opacity-80 dark:from-pink-600/20 dark:via-rose-500/15 dark:to-amber-500/10 dark:opacity-50"
      />

      {/* Animated Glowing Orb 3 - Emerald/Teal */}
      <motion.div
        animate={{
          x: [0, 60, -70, 0],
          y: [0, -80, -40, 0],
          scale: [1, 1.3, 0.95, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/3 -right-20 h-[360px] w-[360px] rounded-full bg-gradient-to-bl from-emerald-400/25 via-teal-500/20 to-cyan-400/15 blur-3xl opacity-70 dark:from-emerald-500/15 dark:via-teal-600/15 dark:to-cyan-600/10 dark:opacity-40"
      />

      {/* Animated Glowing Orb 4 - Violet/Blue Center Accent */}
      <motion.div
        animate={{
          x: [0, -50, 70, 0],
          y: [0, 60, -60, 0],
          scale: [1, 0.85, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/2 -left-20 h-[380px] w-[380px] rounded-full bg-gradient-to-r from-violet-500/20 via-blue-500/20 to-indigo-400/15 blur-3xl opacity-75 dark:from-violet-600/15 dark:via-blue-600/15 dark:to-indigo-500/10 dark:opacity-50"
      />

      {/* Subtle Ambient Radial Light Spotlight */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent dark:from-indigo-900/10 dark:via-transparent dark:to-transparent" />
    </div>
  );
}

