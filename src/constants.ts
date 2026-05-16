export const THEME = {
  primary: '#003366',
  primaryDark: '#002244',
  accent: '#c8922a',
  accentLight: '#e4a83c',
  lightBg: '#f5f7fa',
  border: '#e0e6ef',
  white: '#ffffff',
  black: '#000000',
  text: '#333333',
};

export const CONTACT = {
  phone: '8073799243',
  email: 'siddhartha.puc.bhatkal@gmail.com',
  address: 'Bhatkal, Uttara Kannada, Karnataka',
  hours: 'Mon–Sat 9AM–5PM',
  social: {
    facebook: 'https://facebook.com',
    twitter: 'https://twitter.com',
    instagram: 'https://instagram.com',
    youtube: 'https://youtube.com'
  }
};

export const NAVIGATION = [
  { name: 'Home', link: '/' },
  {
    name: 'About Us',
    link: '/about',
    dropdown: [
      { name: 'Founder & Story', link: '/about#story' },
      { name: "Principal's Message", link: '/about#principal' },
      { name: 'Vision & Mission', link: '/about#vision-mission' },
      { name: 'Affiliation & NCERT', link: '/about#affiliation' },
      { name: 'Our Facilities', link: '/about#facilities' },
      { name: 'Achievements', link: '/about#achievements' },
      { name: 'Our Alumni', link: '/about#alumni' },
      { name: 'Visionary Team', link: '/about#team' }
    ]
  },
  {
    name: 'Academics',
    link: '/#admissions',
    dropdown: [
      { name: 'Pre-Primary', link: '/admissions' },
      { name: 'Primary', link: '/admissions' },
      { name: 'High School', link: '/admissions' },
      { name: 'PUC', link: '/admissions' },
      { name: 'Degree', link: '/admissions' }
    ]
  },
  {
    name: 'Faculty',
    link: '/#faculty',
    dropdown: [
      { name: 'Physics', link: '/#faculty' },
      { name: 'Chemistry', link: '/#faculty' },
      { name: 'Maths', link: '/#faculty' },
      { name: 'Biology', link: '/#faculty' },
      { name: 'Commerce', link: '/#faculty' }
    ]
  },
  { name: 'Admissions', link: '/admissions' },
  { name: 'Gallery', link: '/gallery' },
  { name: 'News & Events', link: '/news' },
  { name: 'Contact Us', link: '/#contact' },
];
