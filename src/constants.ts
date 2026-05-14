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
    link: '/About',
    dropdown: [
      { name: 'Founder & Story', link: '/About#story' },
      { name: "Principal's Message", link: '/About#principal' },
      { name: 'Vision & Mission', link: '/About#vision-mission' },
      { name: 'Affiliation & NCERT', link: '/About#affiliation' },
      { name: 'Our Facilities', link: '/About#facilities' },
      { name: 'Achievements', link: '/About#achievements' },
      { name: 'Our Alumni', link: '/About#alumni' },
      { name: 'Visionary Team', link: '/About#team' }
    ]
  },
  {
    name: 'Academics',
    link: '/#admissions',
    dropdown: [
      { name: 'Pre-Primary', link: '/Admissions' },
      { name: 'Primary', link: '/Admissions' },
      { name: 'High School', link: '/Admissions' },
      { name: 'PUC', link: '/Admissions' },
      { name: 'Degree', link: '/Admissions' }
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
  { name: 'Admissions', link: '/Admissions' },
  { name: 'Gallery', link: '/Gallery' },
  { name: 'News & Events', link: '/News' },
  { name: 'Contact Us', link: '/#contact' },
];
