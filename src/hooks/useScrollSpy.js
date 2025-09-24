import { useState, useEffect } from 'react';

export default function useScrollSpy(sectionIds, options = {}) {
  const [activeId, setActiveId] = useState(sectionIds[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) {
          setActiveId(visible.target.id);
        }
      },
      {
        root: null,
        rootMargin: options.rootMargin || '0px 0px -50% 0px',
        threshold: options.threshold ?? [0.1, 0.5, 1.0],
      }
    );

    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds, options.rootMargin, options.threshold]);

  return activeId;
}
