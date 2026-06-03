import { FaChurch, FaCode, FaReadme, FaTractor, FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaPython, FaGithub, FaAws, FaReact, FaNodeJs, FaDocker, FaGraduationCap, FaCertificate } from "react-icons/fa";
import { SiDjango, SiMongodb, SiMysql, SiExpress, SiCloudinary, SiMantine, SiTypescript, SiTailwindcss, SiNestjs, SiPostgresql } from "react-icons/si";
import imgCoding from '../assets/Coding.png';
import imgReading from '../assets/reading.png';
import imgChurch from '../assets/church.jpg';
import imgTraveling from '../assets/travelling.jpg';

  export const skills = [
    { name: 'Frontend Development', percent: 85, color: '#61DAFB' },
    { name: 'Backend Developer', percent: 90, color: '#F0DB4F' },
    { name: 'UI/UX Design', percent: 78, color: '#FF4081' },
    { name: 'FullStack Development', percent: 87.5, color: '#68A063' },
    { name: 'Project Management', percent: 85, color: '#000000' },
    { name: 'Technology Consulting', percent: 87, color: '#4E71FF' },
  ];

  export const groupedTechSkills = [
    {
      category: 'Frontend',
      skills: [
        { name: 'HTML', percent: 95, color: '#E34F26', icon: <FaHtml5 /> },
        { name: 'Manual Css', percent: 90, color: '#1572B6', icon: <FaCss3Alt /> },
        { name: 'JavaScript', percent: 85, color: '#F7DF1E', icon: <FaJs /> },
        { name: 'React', percent: 90, color: '#61DAFB', icon: <FaReact /> },
        { name: 'Bootstrap', percent: 80, color: '#7952B3', icon: <FaBootstrap /> },
        { name: 'Mantine UI', percent: 75, color: '#339AF0', icon: <SiMantine /> },
        { name: 'TailwindCSS', percent: 95, color: '#38BDF8', icon: <SiTailwindcss /> },
        { name: 'TypeScript', percent: 85, color: '#007ACC', icon: <SiTypescript /> },
      ]
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Node.js', percent: 85, color: '#339933', icon: <FaNodeJs /> },
        { name: 'Expressjs', percent: 85, color: '#000000', icon: <SiExpress /> },
        { name: 'NestJS', percent: 80, color: '#E0234E', icon: <SiNestjs /> },
        { name: 'PostgreSQL', percent: 85, color: '#336791', icon: <SiPostgresql /> },
        { name: 'Python', percent: 75, color: '#3776AB', icon: <FaPython /> },
        { name: 'Django', percent: 70, color: '#092E20', icon: <SiDjango /> },
        { name: 'Mongo Db', percent: 80, color: '#47A248', icon: <SiMongodb /> },
        { name: 'MySQL', percent: 85, color: '#4479A1', icon: <SiMysql /> },
         ]
    },
    {
      category: 'DevOps',
      skills: [
        { name: 'Github', percent: 85, color: '#181717', icon: <FaGithub /> },
        { name: 'AWS', percent: 70, color: '#232F3E', icon: <FaAws /> },
        { name: 'Cloudinary', percent: 75, color: '#3448C5', icon: <SiCloudinary /> },
        { name: 'Docker', percent: 70, color: '#2496ED', icon: <FaDocker /> },
      ]
    }
  ];
  
export const favorites = [
  { id:1,
    image: imgCoding,
    icon: <FaCode />, 
    title: 'Coding', 
    qoute: 'Turning ideas into Reality through Code',
    description: 'I am passionate about coding and love turning ideas into real-world applications through clean, efficient code. I spend most of my time building modern web systems and Applications, solving problems, and learning new technologies. I enjoy working on both the frontend and backend. Collaboration is key for me, and I thrive in team environments where innovation and sharing knowledge are encouraged. I’m constantly exploring new frameworks and tools to stay ahead in the tech world. For me, coding isn’t just a skill—it’s a creative channel and a way to make a meaningful impact.',
    color: "#FF6B6B",
    year: "2013 - Present", 
  },
  
  { id:2,
    color: "#BB86FC",
    image: imgReading,
    icon: <FaReadme />,
    year: "2007- Present", 
    title: 'Reading',
    qoute: 'Books are My quietest and most constant  friends',
    description: 'Reading is one of my favorite ways to grow, reflect, and explore new ideas. I enjoy diving into books that expand my knowledge, whether it`s about technology, leadership,Church or personal development. Libraries and quiet corners are my comfort zones, where I can get lost in the pages for hours. Reading helps me stay having a strong desire to learn and fuels my imagination and creativity. It also sharpens my focus and deepens my understanding of the world around me. For me, books are not just stories—they’re gateways to growth and lifelong learning.'
  },
   { 
    id:3,
    color: "#B71C1C",
    year: "2010- Present", 
    qoute: 'Faith is taking the first step even when I don’t see the whole staircase',
    image: imgChurch,
    icon: <FaChurch />, 
    title: 'Church', 
    description: 'I actively participate in church service with a heart full of dedication and faith. All Most all day, I arrive early to pray, to help with preparations. I am involved in various Church Activities, including youth leadership and technical support during worship sessions. My role allows me to serve others while growing spiritually and deepening my relationship with God. I value teamwork and always encourage unity and respect among fellow members. Serving in church brings me peace, purpose, and a strong sense of community.'
  },
  { id:4,
    color: "#4FC3F7",
    year: "2015- Present", 
    qoute: 'Life is a Journey, not a Destination',
    image: imgTraveling,
    icon: <FaTractor />, 
    title: 'Traveling',
    description: 'Traveling is one of my favorite ways to Look Nature, reflect, and explore new ideas. I enjoy to travel and explore new places. It helps me to relax, recharge, and get inspired. I also enjoy learning about different cultures and meeting new people. Traveling has taught me to be more open-minded, adaptable, and confident. It has also helped me to appreciate the beauty of the world and the diversity of its people. For me, traveling is not just a hobby—it’s a way of life.'
  },
 ]
