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
      transition={{ 
        duration: 0.6, 
        delay: 0.1 + index * 0.08,
        ease: [0.16, 1, 0.3, 1] 
      }}
      style={{ '--hover-glow-rgb': link.rgb } as React.CSSProperties}
      className="glass glass-card-hover group relative flex items-center gap-4 overflow-hidden rounded-2xl px-5 py-4 transition-all duration-300"
    >
      {/* Dynamic Hover Background Gradient */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${link.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
      />

      {/* Brand Icon Circle */}
      <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl shadow-sm transition-transform duration-300 group-hover:scale-110">
        <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${link.gradient}`} />
        <Icon className="relative h-5 w-5 text-white" />
      </div>

      {/* Text Info */}
      <div className="relative flex min-w-0 flex-1 flex-col">
        <span className="text-sm font-semibold text-slate-800 transition-colors duration-300 group-hover:text-white dark:text-white">
          {link.name}
        </span>
        <span className="truncate text-xs text-slate-500 transition-colors duration-300 group-hover:text-white/80 dark:text-neutral-400">
          {link.handle}
        </span>
      </div>

      {/* Arrow Indicator */}
      <div className="relative flex h-7 w-7 items-center justify-center rounded-full bg-slate-100/60 dark:bg-white/5 group-hover:bg-white/20 transition-colors duration-300">
        <ArrowUpRight className="h-4 w-4 text-slate-500 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white dark:text-neutral-400" />
      </div>
    </motion.a>
  );
}
