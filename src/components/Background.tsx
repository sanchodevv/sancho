export default function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-gradient-to-tr from-slate-50 via-slate-100/50 to-indigo-50/30 transition-colors duration-300 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950">
      {/* Top Left Blob */}
      <div className="absolute -top-32 -left-32 h-[350px] w-[350px] rounded-full bg-sky-400/20 mix-blend-multiply filter blur-3xl opacity-80 animate-blob dark:bg-sky-500/10 dark:mix-blend-normal dark:opacity-40" />
      
      {/* Bottom Right Blob */}
      <div className="absolute -bottom-32 -right-32 h-[350px] w-[350px] rounded-full bg-emerald-400/20 mix-blend-multiply filter blur-3xl opacity-80 animate-blob-slow dark:bg-emerald-500/10 dark:mix-blend-normal dark:opacity-40" />
      
      {/* Middle Right Blob */}
      <div className="absolute top-1/4 -right-20 h-[300px] w-[300px] rounded-full bg-rose-400/15 mix-blend-multiply filter blur-3xl opacity-75 animate-blob dark:bg-rose-500/5 dark:mix-blend-normal dark:opacity-30" />
      
      {/* Middle Left Blob */}
      <div className="absolute top-1/2 -left-20 h-[300px] w-[300px] rounded-full bg-violet-400/15 mix-blend-multiply filter blur-3xl opacity-75 animate-blob-slow dark:bg-violet-500/5 dark:mix-blend-normal dark:opacity-30" />
    </div>
  );
}

