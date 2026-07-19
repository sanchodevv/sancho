import { socialLinks } from './data/profile';
import { useTheme } from './hooks/useTheme';
import Background from './components/Background';
import ThemeToggle from './components/ThemeToggle';
import ProfileCard from './components/ProfileCard';
import SocialCard from './components/SocialCard';

function App() {
  const { theme, toggle } = useTheme();

  return (
    <div className="relative min-h-screen text-slate-900 transition-colors duration-300 dark:text-white">
      <Background />
      <ThemeToggle theme={theme} toggle={toggle} />

      <main className="relative z-10 mx-auto flex max-w-sm flex-col gap-10 px-5 pb-16 pt-24">
        <ProfileCard />

        <div className="flex flex-col gap-2.5">
          {socialLinks.map((link, i) => (
            <SocialCard key={link.id} link={link} index={i} />
          ))}
        </div>

        <footer className="pt-4 text-center text-xs text-neutral-400 dark:text-neutral-600">
          © {new Date().getFullYear()} {''}
        </footer>
      </main>
    </div>
  );
}

export default App;
