import { useEffect, useRef } from 'react';
import { FaRegCommentDots } from 'react-icons/fa';

export  function CustomCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    document.addEventListener('mousemove', moveCursor);
    return () => document.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <div className="custom-cursor" ref={cursorRef}>
      <FaRegCommentDots className="custom-icon" />
    </div>
  );
}
