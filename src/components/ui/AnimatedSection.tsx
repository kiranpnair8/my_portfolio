import type { ReactNode } from 'react';

interface Props {
  id?: string;
  className?: string;
  children: ReactNode;
  delay?: number;
}

export function AnimatedSection({ id, className = '', children }: Props) {
  return (
    <section id={id} className={className}>
      {children}
    </section>
  );
}
