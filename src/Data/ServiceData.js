import webAnimation from '../assets/web.json';
import mobileAnimation from '../assets/mobile.json';
import consultingAnimation from '../assets/consulting.json';

export const ServiceData = [
  {
    title: 'Web & Mobile Development',
    description: 'Building responsive and optimized web apps  and Creating  cross-platform mobile app modern technologies.',
    animation: webAnimation,
    link: '/web',
  },
  {
    title: 'Software & AI Development',
    description: 'Delivering full-stack solutions and Developing intelligent systems powered by machine learning and deep learning.',
    animation: mobileAnimation,
    link: '/software',
  },
  {
    title: 'Project Management & Tech Consulting',
    description: 'Leading full project lifecycles from  planning to deployment and Offering expert guidance to shape your technology strategy.',
    animation: consultingAnimation,
    link: '/consulting',
  },
];