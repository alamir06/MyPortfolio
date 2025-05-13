import { useEffect, useRef } from 'react';
import { FaRegCommentDots } from 'react-icons/fa';

export  function FloatingMessage() {
  const circleRef = useRef(null);
  const pos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const mouse = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const animate = () => {
      pos.current.x += (mouse.current.x - pos.current.x) * 0.1;
      pos.current.y += (mouse.current.y - pos.current.y) * 0.1;

      if (circleRef.current) {
        circleRef.current.style.transform = `translate(${pos.current.x - 30}px, ${pos.current.y - 30}px)`; // center correction
      }

      requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="floating-message" ref={circleRef}>
      <FaRegCommentDots className="floating-icon" />
    </div>
  );
}
