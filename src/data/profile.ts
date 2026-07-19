import {
  Instagram,
  Send,
  Github,
  Globe,
  Youtube,
  Linkedin,
  Mail,
  type LucideIcon,
} from 'lucide-react';

export interface SocialLink {
  id: string;
  name: string;
  handle: string;
  description: string;
  url: string;
  icon: LucideIcon;
  gradient: string;
  accent: string;
  hoverGlowRgb?: string;
}

export const profile = {
  name: 'Sancho Dev',
  title: 'Developer',
  bio: 'Men yosh dasturchi. Web dasturlash va ochiq kod loyihalari bilan shug‘ullanaman. Bu yerda meni barcha ijtimoiy tarmoqlarda topishingiz mumkin.',
  avatarFallback: 'SI',
  location: 'Xiva, Uzbekistan',
  email: '[EMAIL_ADDRESS]',
}
export const socialLinks: SocialLink[] = [
  {
    id: 'instagram',
    name: 'Instagram',
    handle: '@sancho.dev',
    description: 'Kundalik hayot, loyihalar va ijodiy ishlarim',
    url: 'https://www.instagram.com/sancho.dev/',
    icon: Instagram,
    gradient: 'from-fuchsia-500 via-pink-500 to-amber-400',
    accent: '#ec4899',
  },
  {
    id: 'telegram',
    name: 'Telegram',
    handle: '@sanjarkomiIov',
    description: 'Tezkor bog‘lanish va yangiliklar kanalim',
    url: 'https://t.me/sanchodevv',
    icon: Send,
    gradient: 'from-sky-400 to-blue-600',
    accent: '#0ea5e9',
  },
  {
    id: 'github',
    name: 'GitHub',
    handle: '@sanchodevv',
    description: 'Ochiq kod loyihalarim va repositorylar',
    url: 'https://github.com/sanchodevv',
    icon: Github,
    gradient: 'from-slate-600 to-slate-900',
    accent: '#64748b',
  },
  {
    id: 'portfolio',
    name: 'Portfolio',
    handle: 'sancho-dev.uz',
    description: 'To‘liq ishlarim va loyihalarim to‘plami',
    url: 'https://samcho-dev-partfolio.vercel.app/',
    icon: Globe,
    gradient: 'from-emerald-400 to-teal-600',
    accent: '#10b981',
  },
  {
    id: 'youtube',
    name: 'YouTube',
    handle: '@sancho-dev',
    description: 'Dasturlash bo‘yicha videodarslar va tutoriallar',
    url: 'https://youtube.com',
    icon: Youtube,
    gradient: 'from-red-500 to-rose-600',
    accent: '#ef4444',
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    handle: 'linkedin.com/in/sanchodevv',
    description: 'Professional profil va ish tajribam',
    url: 'https://www.linkedin.com/in/sanchodevv/',
    icon: Linkedin,
    gradient: 'from-blue-500 to-indigo-700',
    accent: '#3b82f6',
  },
  {
    id: 'email',
    name: 'Email',
    handle: ' sanchodevv@email.com',
    description: 'Hamkorlik va takliflar uchun yozing',
    url: 'mailto:[EMAIL_ADDRESS]',
    icon: Mail,
    gradient: 'from-violet-400 to-purple-600',
    accent: '#8b5cf6',
  },
];
