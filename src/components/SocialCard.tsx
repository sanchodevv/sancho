import { ArrowUpRight } from 'lucide-react';
import type { SocialLink } from '../data/profile';
import { motion } from 'framer-motion';

interface Props {
  link: SocialLink;
  index: number;
}

export default function SocialCard({ link, index }: Props) {
  const Icon = link.icon;

  return (
    <motion.a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02, x: 4 }}
      transition={{
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1]
      }}
      className="glass group relative flex items-center gap-3.5 md:gap-4 overflow-hidden rounded-2xl px-4 py-3 md:px-5 md:py-3.5 transition-all duration-300 hover:bg-white/80 dark:hover:bg-white/[0.09] hover:border-indigo-500/30 dark:hover:border-white/20 hover:shadow-xl hover:shadow-indigo-500/10 dark:hover:shadow-black/50"
    >
      {/* Subtle Glass Top Highlight Line */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/50 dark:via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Light Sweep Reflection Effect on Hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 dark:via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out pointer-events-none" />

      {/* Brand Icon Circle */}
      <div className="relative flex h-9 w-9 md:h-10 md:w-10 shrink-0 items-center justify-center rounded-xl shadow-sm transition-transform duration-300 group-hover:scale-110">
        <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${link.gradient}`} />
        <Icon className="relative h-4.5 w-4.5 md:h-5 md:w-5 text-white" />
      </div>

      {/* Text Info */}
      <div className="relative flex min-w-0 flex-1 flex-col">
        <span className="text-sm md:text-base font-semibold text-slate-800 dark:text-white transition-colors duration-300">
          {link.name}
        </span>
        <span className="truncate text-xs md:text-sm text-slate-500 dark:text-neutral-400 transition-colors duration-300">
          {link.handle}
        </span>
      </div>

      {/* Arrow Indicator */}
      <div className="relative flex h-7 w-7 md:h-8 md:w-8 items-center justify-center rounded-full bg-slate-100/70 dark:bg-white/5 group-hover:bg-indigo-500/10 dark:group-hover:bg-white/15 transition-all duration-300">
        <ArrowUpRight className="h-4 w-4 md:h-4.5 md:w-4.5 text-slate-500 dark:text-neutral-400 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-indigo-600 dark:group-hover:text-white" />
      </div>
    </motion.a>
  );
}
