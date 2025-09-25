import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { usePrefersReducedMotion } from '@/hooks/use-prefers-reduced-motion';

interface CountUpProps {
  value: number;
  suffix?: string;
  duration?: number;
  className?: string;
}

const CountUp = ({ value, suffix = '', duration = 2, className }: CountUpProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const prefersReducedMotion = usePrefersReducedMotion();
  
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  });

  useEffect(() => {
    if (isInView && !prefersReducedMotion) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue, prefersReducedMotion]);

  useEffect(() => {
    springValue.on('change', (latest) => {
      if (ref.current) {
        const displayValue = prefersReducedMotion ? value : Math.round(latest);
        (ref.current as HTMLElement).textContent = `${displayValue.toLocaleString()}${suffix}`;
      }
    });
  }, [springValue, suffix, value, prefersReducedMotion]);

  return (
    <motion.span
      ref={ref}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className={className}
    >
      {prefersReducedMotion ? `${value.toLocaleString()}${suffix}` : '0'}
    </motion.span>
  );
};

export default CountUp;