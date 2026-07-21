import {
  Instagram,
  Send,
  Github,
  Globe,
  type LucideIcon,
} from 'lucide-react';

export interface PhotoItem {
  id: string;
  url: string;
  title: string;
  description?: string;
}

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
  bio: '',
  avatarFallback: 'SD',
  location: 'Xiva, Uzbekistan',
  email: 'sanchodevv@email.com',
  photos: [
    {
      id: 'photo1',
      url: '/photo1.png',
      title: 'Ish stolim',
      description: 'Dasturlash va dizayn jarayoni uchun qulay sharoit'
    },
    {
      id: 'photo2',
      url: '/photo2.png',
      title: 'Tabiat manzarasi',
      description: 'Tog‘lar bag‘ridagi tungi osmon go‘zalligi'
    },
    {
      id: 'photo3',
      url: '/photo3.png',
      title: 'Abstrakt dizayn',
      description: 'Neon ranglar va 3D geometrik shakllar uyg‘unligi'
    }
  ] as PhotoItem[]
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
];
