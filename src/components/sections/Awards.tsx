import { SectionHeading } from '../ui/SectionHeading';
import { cvData } from '../../data/cv';

export function Awards() {
  const { awards } = cvData;

  return (
    <section id="awards" className="py-8 md:py-10 px-4 border-t border-gray-100 dark:border-gray-800/50">
      <div className="max-w-5xl mx-auto">
        <SectionHeading title="Awards & Honors" />

        <div className="space-y-4">
          {awards.map((award, i) => (
            <div key={i}>
              <div className="flex flex-wrap items-baseline gap-x-3">
                <h3 className="text-base font-semibold text-gray-900 dark:text-white">{award.name}</h3>
                <span className="text-sm text-blue-600 dark:text-blue-400">{award.date}</span>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">{award.institution}</p>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{award.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
