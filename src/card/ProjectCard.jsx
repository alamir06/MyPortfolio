import { useEffect, useRef, useState } from 'react';
import '../styles/project.css';

export default function ProjectCard({id, title, description, imgSrc }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => ref.current && observer.unobserve(ref.current);
  }, []);

  return (
    <div
      ref={ref}
      className={id%2===0 ? `project-card-horizontal ${visible ? 'visible' : 'hidden'}`:`project-card-reverse ${visible ? 'visible' : 'hidden'}`}
    >
      <img src={imgSrc} alt={title} className="project-img" />
      <div className="project-info">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
