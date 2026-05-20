import webAnimation from '../assets/web.json';
import mobileAnimation from '../assets/mobile.json';
import consultingAnimation from '../assets/consulting.json';

export const ServiceData = [
  {
    title: 'Website Development',
    description: 'Building responsive and optimized web applications.',
    animation: webAnimation,
    link: '/web',
  },
  {
    title: 'Software Development',
    description: 'Delivering full-stack solutions and handling mobile app development.',
    animation: mobileAnimation,
    link: '/software',
  },
  {
    title: 'ML/AI Development',
    description: 'Developing intelligent systems powered by data-driven algorithms.',
    animation: consultingAnimation,
    link: '/ai',
  },
];