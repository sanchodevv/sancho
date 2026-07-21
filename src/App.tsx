import { socialLinks } from './data/profile';
import { useTheme } from './hooks/useTheme';
import Background from './components/Background';
import ThemeToggle from './components/ThemeToggle';
import ProfileCard from './components/ProfileCard';
import SocialCard from './components/SocialCard';

function App() {
  const { theme, toggle } = useTheme();

  return (
    <div className="relative h-screen h-[100dvh] w-full overflow-hidden text-slate-900 transition-colors duration-300 dark:text-white flex flex-col items-center justify-center">
      <Background />
      <ThemeToggle theme={theme} toggle={toggle} />

      <main className="relative z-10 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl flex flex-col gap-3.5 md:gap-4 px-4 py-2 my-auto">
        <ProfileCard />

        <div className="flex flex-col gap-2.5 md:gap-3">
          {socialLinks.map((link, i) => (
            <SocialCard key={link.id} link={link} index={i} />
          ))}
        </div>

        <footer className="pt-2 text-center text-xs md:text-sm text-neutral-400 dark:text-neutral-600">
          © {new Date().getFullYear()} Sancho Dev
        </footer>
      </main>
    </div>
  );
}

export default App;
