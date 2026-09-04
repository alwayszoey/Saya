import { DeveloperProfile, PortfolioProject, ServiceItem, SocialLink, TeamHighlight } from './types';

export const servicesData: ServiceItem[] = [
  {
    title: 'บริการรับทำเว็บไซต์ครบวงจร',
    desc: 'ดูแลคุณตั้งแต่ขั้นตอนการออกแบบ พัฒนาระบบ ไปจนถึงเปิดใช้งานจริง ด้วยเทคโนโลยีที่ทันสมัยและทีมงานมืออาชีพที่พร้อมดูแลธุรกิจคุณด้วยความจริงใจ',
    priceTiers: [
      { note: 'เริ่มต้นเพียง', price: '2,000 บาท' },
      { note: 'เว็บไซต์ขนาดใหญ่', price: '15,000 บาท' }
    ],
    showHands: true
  },
  {
    title: 'ดีไซน์ UI/UX สำหรับเว็บไซต์',
    desc: 'ออกแบบ UI/UX สวยงาม ทันสมัย ใช้งานง่าย ลื่นไหล ตอบโจทย์ผู้ใช้จริง พร้อมยกระดับภาพลักษณ์ธุรกิจคุณให้โดดเด่น',
    price: '1,000 บาท',
    showHands: false,
    splitLayout: true,
    uiUxBadges: true
  }
];

export const portfolioProjects: PortfolioProject[] = [
  {
    title: 'HappyDonate',
    logo: '/happydonate-logo.png',
    categories: ['WEB APPLICATION', 'FINTECH', 'CREATOR ECONOMY'],
    desc: 'ระบบโดเนทของแฮปปี้โดเนท รับเงินเข้าบัญชีโดยตรงของคุณ ค่าธรรมเนียม 0% พร้อม UI การใช้งานสวยงาม และทันสมัย ปรับแต่งหน้าตาโดเนทให้เข้ากับสไตล์ของคุณ',
    features: [
      'เงินเข้าบัญชีผู้สตรีมทันที (Direct Transfer)',
      'วิดเจ็ตแจ้งเตือนและระบบอ่านข้อความอัจฉริยะ',
      'ปรับแต่งหน้าโปรไฟล์รับโดเนทได้อย่างอิสระ',
      'ระบบAPIเช็คสลิปเช็คสลิปไม่อั้นby Zyni.DEV'
    ],
    slides: [
      '/portfolio/slide-6.png',
      '/portfolio/slide-1.png',
      '/portfolio/slide-2.png',
      '/portfolio/slide-3.png',
      '/portfolio/slide-4.png',
      '/portfolio/slide-5.png'
    ],
    url: 'https://happydonate.app'
  },
  {
    title: 'Fusions',
    logo: '/fusions-logo.png',
    categories: ['WEB APPLICATION', 'LINK IN BIO', 'CREATOR TOOLS'],
    desc: 'แพลตฟอร์มรวมลิงก์สำหรับครีเอเตอร์และธุรกิจ ปรับแต่งธีม วิดเจ็ต และ Showcase Mode ได้อิสระ ดีไซน์สวย ใช้งานง่าย ตั้งค่าจบในไม่กี่คลิก',
    features: [
      'รวมลิงก์โซเชียลและวิดเจ็ตในหน้าเดียว',
      'ปรับธีมและเอฟเฟกต์ได้ลึก',
      'เริ่มใช้ฟรี ไม่ต้องเขียนโค้ด',
      'ระบบAPI วิตเจตเชื่อมต่อReal-time'
    ],
    slides: [
      '/portfolio/fusions/slide-1.png',
      '/portfolio/fusions/slide-2.png',
      '/portfolio/fusions/slide-3.png',
      '/portfolio/fusions/slide-4.png',
      '/portfolio/fusions/slide-5.png'
    ],
    url: 'https://fusions.info/',
    imagePosition: 'left'
  },
  {
    title: 'VEXZY',
    logo: '/vexzy-logo.png',
    logoSize: 'sm',
    categories: ['WEB APPLICATION', 'SAAS', 'E-COMMERCE'],
    desc: 'แพลตฟอร์มเช่าเว็บไซต์ร้านค้าออนไลน์ สมัครและเปิดร้านบน Subdomain ได้ทันที พร้อมระบบจัดการสินค้า ออเดอร์ และการชำระเงินครบวงจร',
    features: [
      'เปิดร้านและสร้าง Subdomain อัตโนมัติ',
      'รองรับ PromptPay และ TrueMoney สแกนจ่าย',
      'ปรับแต่งธีม สินค้า และระบบภายในร้านได้',
      'สถาปัตยกรรม Multi-tenancy พร้อมระบบสำรองข้อมูล'
    ],
    slides: [
      '/portfolio/vexzy/slide-1.png',
      '/portfolio/vexzy/slide-2.png',
      '/portfolio/vexzy/slide-3.png',
      '/portfolio/vexzy/slide-4.png',
      '/portfolio/vexzy/slide-5.png',
      '/portfolio/vexzy/slide-6.png'
    ],
    url: 'https://vexzy.net/'
  }
];

export const miniProjects: PortfolioProject[] = [
  {
    title: 'Web SHOP',
    categories: ['WEB SHOP', 'E-COMMERCE', 'GAMING'],
    desc: 'ร้านค้าออนไลน์สำหรับขายสินค้าดิจิทัล รองรับระบบเติมเงิน ค้นหาสินค้า และจัดหมวดหมู่ พร้อมหน้าร้านที่ดูทันสมัยใช้งานง่าย',
    features: [
      'ระบบเติมเงินและกระเป๋าเงินผู้ใช้',
      'ค้นหาและจัดหมวดหมู่สินค้า',
      'แสดงสถิติยอดขายและสมาชิก',
      'ดีไซน์ธีมมืดเน้นเกมมิ่ง'
    ],
    slides: [
      '/portfolio/webshop/slide-1.png',
      '/portfolio/webshop/slide-2.png',
      '/portfolio/webshop/slide-3.png',
      '/portfolio/webshop/slide-4.png'
    ],
    url: '#',
    spatialTilt: 'right'
  },
  {
    title: 'BotPanel',
    categories: ['DISCORD BOT', 'WEB PANEL', 'AUTOMATION'],
    desc: '',
    features: [],
    slides: [
      '/portfolio/botpanel/slide-1.png',
      '/portfolio/botpanel/slide-2.png',
      '/portfolio/botpanel/slide-3.png',
      '/portfolio/botpanel/slide-4.png'
    ],
    url: '#',
    spatialTilt: 'left'
  }
];

export const developerInfo: DeveloperProfile = {
  name: '480p',
  image: '/bkron-profile.png',
  frame: '/profile-frame.png',
  role: 'Full-stack Developer',
  desc: 'ออกแบบ UI/UX พัฒนา Frontend & Backend ดูแลและส่งมอบงานให้คุณโดยตรง ทุกขั้นตอนอยู่ในมือคนเดียว — คุยตรง ไม่ผ่านคนกลาง แก้ไขเร็ว เข้าใจโจทย์ชัด',
  tags: ['UI/UX', 'Frontend', 'Backend', 'Full-stack']
};

export const discordGuildId = '1475039241011724461';
export const defaultDiscordInvite = 'https://discord.gg/ykav26jJTQ';
export const discordInviteCode = 'ykav26jJTQ';

export const discordApplicationId = '1455511992218419297';
export const discordClientId = '1455511992218419297';
export const discordAppIcon = 'https://cdn.discordapp.com/icons/1475039241011724461/38e200934615d7c0e54319c111f92fdf.png?size=128';
export const discordOAuthScopes = 'identify connections guilds messages.read webhook.incoming applications.builds.read role_connections.write';
export const defaultDiscordOAuthUrl = 'https://discord.com/oauth2/authorize?client_id=1455511992218419297&response_type=code&redirect_uri=http%3A%2F%2Fzynibase.vercel.app%2F&integration_type=0&scope=identify+connections+guilds+messages.read+webhook.incoming+applications.builds.read+role_connections.write';

export const discordServerConfig = {
  guildId: '1475039241011724461',
  name: 'ZYNI BASE',
  defaultInviteUrl: 'https://discord.gg/ykav26jJTQ',
  fallbackData: {
    name: 'ZYNI BASE',
    onlineCount: 1,
    memberCount: 7,
    iconUrl: 'https://cdn.discordapp.com/icons/1475039241011724461/38e200934615d7c0e54319c111f92fdf.png?size=128',
    inviteUrl: 'https://discord.gg/ykav26jJTQ'
  }
};


export const socialLinks: SocialLink[] = [
  {
    label: 'Instagram',
    detail: '@pluxkorn',
    href: 'https://www.instagram.com/pluxkorn?igsh=cmY3bHQxcnFqN2Vp&utm_source=qr',
    action: 'Follow',
    icon: 'instagram'
  },
  {
    label: 'Facebook',
    detail: 'Aitsarawut Autarmat',
    href: 'https://www.facebook.com/share/1D1uNmwfdi/?mibextid=wwXIfr',
    action: 'Follow',
    icon: 'facebook'
  }
];

export const teamHighlights: TeamHighlight[] = [
  {
    title: 'Discord',
    desc: 'Join our community on Discord—get updates, support, and connect with us directly.',
    type: 'discord'
  },
  {
    title: 'ช่องทางติดต่อ',
    desc: 'เลือกช่องทางที่สะดวก — ตอบกลับเร็ว คุยตรงกับคนทำจริง',
    type: 'contact'
  }
];

export const navItems = [
  { label: 'หน้าหลัก', sectionId: null },
  { label: 'บริการ', sectionId: 'services' },
  { label: 'ผลงาน', sectionId: 'portfolio' },
  { label: 'ผู้พัฒนา', sectionId: 'team' }
];
