interface Props {
  title: string;
  subtitle?: string;
}

export function SectionHeading({ title, subtitle }: Props) {
  return (
    <div className="mb-5">
      <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 dark:text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-1 text-gray-500 dark:text-gray-400 text-sm">
          {subtitle}
        </p>
      )}
    </div>
  );
}
