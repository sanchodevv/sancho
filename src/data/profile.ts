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
  rgb: string;
}

export const profile = {
  name: 'Sancho Dev',
  title: 'Developer',
  bio: 'Men yosh dasturchi. Web dasturlash va ochiq kod loyihalari bilan shug‘ullanaman. Bu yerda meni barcha ijtimoiy tarmoqlarda topishingiz mumkin.',
  avatarFallback: 'SI',
  location: 'Khorezm, O‘zbekiston',
  email: 'sanchodevv@email.com',
};

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
    rgb: '236, 72, 153',
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
    rgb: '14, 165, 233',
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
    rgb: '100, 116, 139',
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
    rgb: '16, 185, 129',
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
    rgb: '239, 68, 68',
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    handle: 'linkedin.com/in/sizning',
    description: 'Professional profil va ish tajribam',
    url: 'https://www.linkedin.com/in/sancho-dev-3010403bb/',
    icon: Linkedin,
    gradient: 'from-blue-500 to-indigo-700',
    accent: '#3b82f6',
    rgb: '59, 130, 246',
  },
  {
    id: 'email',
    name: 'Email',
    handle: 'sanchodevv@email.com',
    description: 'Hamkorlik va takliflar uchun yozing',
    url: 'mailto:sizning@email.com',
    icon: Mail,
    gradient: 'from-violet-400 to-purple-600',
    accent: '#8b5cf6',
    rgb: '139, 92, 246',
  },
];
