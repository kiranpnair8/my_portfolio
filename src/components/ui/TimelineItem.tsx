import type { ReactNode } from 'react';

interface Props {
  title: string;
  subtitle: string;
  date: string;
  children?: ReactNode;
  index?: number;
}

export function TimelineItem({ title, subtitle, date, children }: Props) {
  return (
    <div className="mb-6 last:mb-0">
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <h3 className="text-base font-semibold text-gray-900 dark:text-white">{title}</h3>
        <span className="text-sm text-blue-600 dark:text-blue-400">{date}</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">{subtitle}</p>
      {children && <div className="mt-2">{children}</div>}
    </div>
  );
}
