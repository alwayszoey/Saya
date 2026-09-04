export interface PriceTier {
  note: string;
  price: string;
}

export interface ServiceItem {
  title: string;
  desc: string;
  price?: string;
  priceTiers?: PriceTier[];
  showHands?: boolean;
  splitLayout?: boolean;
  uiUxBadges?: boolean;
}

export interface PortfolioProject {
  title: string;
  logo?: string;
  logoSize?: 'sm' | 'md' | 'lg';
  categories: string[];
  desc: string;
  features: string[];
  slides: string[];
  url: string;
  imagePosition?: 'left' | 'right';
  spatialTilt?: 'left' | 'right';
}

export interface DeveloperProfile {
  name: string;
  image: string;
  frame: string;
  role: string;
  desc: string;
  tags: string[];
}

export interface SocialLink {
  label: string;
  detail: string;
  href: string;
  action: string;
  icon: 'instagram' | 'facebook';
}

export interface TeamHighlight {
  title: string;
  desc: string;
  type: 'discord' | 'contact';
}

export interface DiscordInviteData {
  name: string;
  onlineCount: number;
  memberCount: number;
  iconUrl: string | null;
  inviteUrl: string;
}
