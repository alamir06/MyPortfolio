import { FaChurch, FaCode, FaReadme, FaTractor } from "react-icons/fa";

 export const skills = [
    { name: 'Frontend Development', percent: 85, color: '#61DAFB' },
    { name: 'Backend Developer', percent: 90, color: '#F0DB4F' },
    { name: 'UI/UX Design', percent: 70, color: '#FF4081' },
    { name: 'FullStack Development', percent: 87.5, color: '#68A063' },
    { name: 'Project Management', percent: 85, color: '#000000' },
    { name: 'Technology Consulting', percent: 87, color: '#4E71FF' },
  ];
  
export const favorites = [
  { id:1,
    icon: <FaCode />, 
    title: 'Coding', 
    qoute: 'Turning ideas into reality through code',
    description: 'I am passionate about coding and love turning ideas into real-world applications through clean, efficient code. I spend most of my time building modern web systems and Applications, solving problems, and learning new technologies. I enjoy working on both the frontend and backend, especially with React, NestJS, and PostgreSQL. Collaboration is key for me, and I thrive in team environments where innovation and sharing knowledge are encouraged. I’m constantly exploring new frameworks and tools to stay ahead in the tech world. For me, coding isn’t just a skill—it’s a creative outlet and a way to make a meaningful impact.',
    color: "#FF6B6B",
    year: "2013 - Present", 
  },
  { id:2,
    color: "#BB86FC",
    icon: <FaReadme />,
    year: "2007- Present", 
    title: 'Reading',
    qoute: 'Books are the My quietest and most constant of friends',
    description: 'Reading is one of my favorite ways to grow, reflect, and explore new ideas. I enjoy diving into books that expand my knowledge, whether it`s about technology, leadership,Church or personal development. Libraries and quiet corners are my comfort zones, where I can get lost in the pages for hours. Reading helps me stay curious and fuels my imagination and creativity. It also sharpens my focus and deepens my understanding of the world around me. For me, books are not just stories—they’re gateways to growth and lifelong learning.'
  },
   { 
    id:3,
    color: "#B71C1C",
    year: "2010- Present", 
    qoute: 'Faith is taking the first step even when you don’t see the whole staircase',
    icon: <FaChurch />, 
    title: 'Church', 
    description: 'I actively participate in church service with a heart full of dedication and faith. All Most all day, I arrive early to pray, to help with preparations. I am involved in various ministries, including youth leadership and technical support during worship sessions. My role allows me to serve others while growing spiritually and deepening my relationship with God. I value teamwork and always encourage unity and respect among fellow members. Serving in church brings me peace, purpose, and a strong sense of community.'
  },
  { id:4,
    color: "#4FC3F7",
    year: "2015- Present", 
    qoute: 'Life is a journey, not a destination',
    icon: <FaTractor />, 
    title: 'Traveling',
    description: ' Traveling is one of my greatest passions! It opens my mind, refreshes my spirit, and connects me with diverse cultures. I love discovering new places, whether it`s a quiet rural village, a bustling city, or a breathtaking natural landscape. Each trip teaches me something valuable, from historical insights to everyday local customs. I enjoy meeting new people along the way and listening to their stories, which often broaden my perspective. Traveling also fuels my creativity and helps me appreciate the beauty in simplicity. Every journey becomes a memory that shapes who I am and how I see the world.'
  },
 ];