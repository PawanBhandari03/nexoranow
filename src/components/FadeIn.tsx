import React, { useMemo } from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';

interface FadeInProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  x?: number | string;
  y?: number | string;
  as?: any;
}

export const FadeIn: React.FC<FadeInProps> = ({
  children,
  delay = 0,
  duration = 0.9,
  x = 0,
  y = 30,
  as = "div",
  className,
  ...props
}) => {
  // Memoised so the element isn't remounted (and re-animated) on every parent render
  const Component = useMemo(() => motion.create(as as any), [as]);

  return (
    <Component
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px", amount: 0 }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
      {...props}
    >
      {children}
    </Component>
  );
};
