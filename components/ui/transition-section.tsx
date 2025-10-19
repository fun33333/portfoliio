'use client';

import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { cn } from '@/lib/utils';

interface TransitionSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export function TransitionSection({
  children,
  className,
  delay = 0,
  direction = 'up',
  ...props
}: TransitionSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  const directionStyles = {
    up: 'translate-y-20',
    down: '-translate-y-20',
    left: 'translate-x-20',
    right: '-translate-x-20'
  };

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all duration-1000 ease-out',
        isInView ? 'opacity-100 transform-none' : `opacity-0 ${directionStyles[direction]}`,
        className
      )}
      style={{
        transitionDelay: `${delay}s`
      }}
      {...props}
    >
      {children}
    </div>
  );
}
