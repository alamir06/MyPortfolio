import { useEffect, useRef, useState } from 'react';
import '../styles/project.css';
import { FaClipboardCheck, FaEye, FaEyeDropper, FaFolder } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FaUsersViewfinder } from 'react-icons/fa6';

export default function ProjectCard({ id, title, description, imgSrc,link }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => ref.current && observer.unobserve(ref.current);
  }, []);

  return (
    <div
      ref={ref}
      className={`project-card ${id % 2 === 0 ? 'horizontal' : 'reverse'} ${
        visible ? 'visible' : 'hidden'
      }`}
    >
 <svg className="card-border" viewBox="0 0 100 100" preserveAspectRatio="none">
  <rect x="1" y="1" width="98" height="98" rx="8" ry="8" />
</svg>
      <div className="card-image-container">
        <img src={imgSrc} alt={title} className="project-img" />
        <div className="overlay">
  
<Link to={link} className="eye">
  <h3 className="eye yellow-folder"><FaFolder /></h3>
</Link>


          </div>
        </div>
    </div>
  );
}
