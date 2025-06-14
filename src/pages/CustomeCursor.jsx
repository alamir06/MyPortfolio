import { useEffect, useRef } from 'react';
import { FaAccessibleIcon, FaCircle, FaRegCommentDots } from 'react-icons/fa';
import { FaArrowDown91 } from 'react-icons/fa6';

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
      <FaAccessibleIcon className="custom-icon" />
    </div>
  );
}
