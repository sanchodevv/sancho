import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

interface Props {
  theme: "light" | "dark";
  toggle: () => void;
}

export default function ThemeToggle({ theme, toggle }: Props) {
  const iconVariants = {
    initial: { opacity: 0, rotate: -180, scale: 0 },
    animate: { opacity: 1, rotate: 0, scale: 1 },
    exit: { opacity: 0, rotate: 180, scale: 0 },
  };

  return (
    <motion.button
      onClick={toggle}
      aria-label="Mavzuni almashtirish"
      className="fixed right-5 top-5 z-40 flex h-9 w-9 items-center justify-center rounded-full text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 200, damping: 10 }}
    >
      <motion.div
        key={theme}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={iconVariants}
        transition={{ duration: 0.3 }}
      >
        {theme === "light" ? (
          <Sun className="h-5 w-5" />
        ) : (
          <Moon className="h-5 w-5" />
        )}
      </motion.div>
    </motion.button>
  );
}
