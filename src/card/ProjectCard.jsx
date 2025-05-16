import { useEffect, useRef, useState } from 'react';
import '../styles/project.css';

export default function ProjectCard({ id, title, description, imgSrc }) {
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
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
