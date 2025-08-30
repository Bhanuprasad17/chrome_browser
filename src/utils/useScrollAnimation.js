import { useEffect, useRef, useState } from 'react';

export const useScrollAnimation = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once visible, we can disconnect the observer
          observer.disconnect();
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  return [ref, isVisible];
};

export const useStaggeredAnimation = (items, staggerDelay = 0.1) => {
  const [animatedItems, setAnimatedItems] = useState(
    items.map(() => false)
  );

  const triggerAnimation = (index) => {
    setTimeout(() => {
      setAnimatedItems(prev => {
        const newItems = [...prev];
        newItems[index] = true;
        return newItems;
      });
    }, index * staggerDelay * 1000);
  };

  return [animatedItems, triggerAnimation];
};
