import { useEffect, useRef, useState } from 'react';

/**
 * useVideoAutoplay
 *
 * Attaches an IntersectionObserver to `sectionRef`. Once the section
 * reaches the `threshold` visibility (default 20%), sets `shouldPlay` to
 * true and immediately disconnects the observer so it never fires again.
 *
 * @param {number} threshold - 0..1 fraction of the element that must be
 *                             visible before triggering. Defaults to 0.2.
 * @returns {{ sectionRef: React.RefObject, shouldPlay: boolean }}
 */
const useVideoAutoplay = (threshold = 0.2, autoPlayOnMount = false) => {
  const sectionRef = useRef(null);
  const [shouldPlay, setShouldPlay] = useState(autoPlayOnMount);
  const observerRef = useRef(null);
  const hasTriggered = useRef(autoPlayOnMount);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el || hasTriggered.current) return;

    // If autoPlayOnMount is true, we already set hasTriggered and shouldPlay in state
    if (autoPlayOnMount && hasTriggered.current) {
      return;
    }

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasTriggered.current) {
          hasTriggered.current = true;
          setShouldPlay(true);
          if (observerRef.current) {
            observerRef.current.disconnect();
          }
        }
      });
    };

    observerRef.current = new IntersectionObserver(handleIntersection, { 
      threshold 
    });

    observerRef.current.observe(el);

    // Also check immediately if element is already visible on mount
    const rect = el.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
    if (isVisible && !hasTriggered.current) {
      hasTriggered.current = true;
      setShouldPlay(true);
      observerRef.current.disconnect();
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [threshold, autoPlayOnMount]);

  return { sectionRef, shouldPlay };
};

export default useVideoAutoplay;
