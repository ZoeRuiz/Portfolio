import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const scrollElRef = useRef(window);

  useEffect(() => {
    let frame;

    const checkScroll = () => {
      const mainEl = document.querySelector('main');
      const candidates = [
        { el: window, value: window.pageYOffset },
        { el: document.documentElement, value: document.documentElement.scrollTop },
        { el: document.body, value: document.body.scrollTop },
        { el: mainEl, value: mainEl ? mainEl.scrollTop : 0 }
      ];
      const max = candidates.reduce((maxSoFar, curr) =>
        curr.value > maxSoFar.value ? curr : maxSoFar
      );
      scrollElRef.current = max.el;
      setVisible(max.value > 100);

      frame = requestAnimationFrame(checkScroll);
    };

    frame = requestAnimationFrame(checkScroll);
    return () => cancelAnimationFrame(frame);
  }, []);

  const scrollToTop = () => {
    const sc = scrollElRef.current;
    if (sc === window) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (sc && typeof sc.scrollTo === 'function') {
      sc.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (sc) {
      sc.scrollTop = 0;
    }
  };

  if (!visible) return null;

  const style = {
    position: 'fixed',
    bottom: '1.5rem',
    right: '1.5rem',
    width: '3rem',
    height: '3rem',
    background: 'var(--primary-color)',
    color: 'var(--btn-text)',
    border: 'none',
    borderRadius: '50%',
    fontSize: '1.5rem',
    lineHeight: 1,
    cursor: 'pointer',
    boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9999
  };

  return createPortal(
    <button style={style} onClick={scrollToTop} aria-label="Volver arriba">
      ↑
    </button>,
    document.body
  );
}
