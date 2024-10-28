import { CSSProperties, useEffect, useRef, useState, useMemo } from "react";

interface AnimateInStyles extends CSSProperties {
  opacity: number;
  filter: string;
  transform: string;
  transition: string;
  willChange: string;
}

interface UseAnimateInOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  delay?: number;
  immediate?: boolean; // New option for immediate animation on load
}

export const useAnimateIn = (
  manualTrigger?: boolean,
  options: UseAnimateInOptions = {}
): [AnimateInStyles, (node: HTMLElement | null) => void] => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLElement | null>(null);
  const hasIntersected = useRef(false);

  const defaultOptions = useMemo(() => ({
    threshold: 0.1,
    rootMargin: "0px",
    triggerOnce: true,
    delay: 0,
    immediate: false, // Default to false
    ...options,
  }), [options]);

  // Handle initial load
  useEffect(() => {
    if (defaultOptions.immediate) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, defaultOptions.delay);
      return () => clearTimeout(timer);
    }
  }, [defaultOptions.immediate, defaultOptions.delay]);

  useEffect(() => {
    if (manualTrigger !== undefined) {
      setIsVisible(manualTrigger);
      return;
    }

    // Skip intersection observer if immediate animation is requested
    if (defaultOptions.immediate) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasIntersected.current) {
        hasIntersected.current = true;
        setIsVisible(true);
        
        // Cleanup observer if triggerOnce is true
        if (defaultOptions.triggerOnce && elementRef.current) {
          observer.unobserve(elementRef.current);
        }
      }
    }, {
      threshold: defaultOptions.threshold,
      rootMargin: defaultOptions.rootMargin,
    });

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [manualTrigger, defaultOptions.threshold, defaultOptions.rootMargin, defaultOptions.triggerOnce, defaultOptions.immediate]);

  const styles: AnimateInStyles = useMemo(() => ({
    opacity: isVisible ? 1 : 0,
    filter: isVisible ? "blur(0px)" : "blur(8px)",
    transform: isVisible ? "translateY(0)" : "translateY(10px)",
    transition: `opacity 0.3s ease-in-out ${defaultOptions.delay}ms, 
                 filter 0.3s ease-in-out ${defaultOptions.delay}ms, 
                 transform 0.3s ease-in-out ${defaultOptions.delay}ms`,
    willChange: 'opacity, filter, transform',
  }), [isVisible, defaultOptions.delay]);

  const ref = (node: HTMLElement | null) => {
    elementRef.current = node;
  };

  return [styles, ref];
};
