import { SectionHeading } from '../ui/SectionHeading';
import { cvData } from '../../data/cv';

export function Skills() {
  const { skills, certifications } = cvData;

  return (
    <section id="skills" className="py-8 md:py-10 px-4 border-t border-gray-100 dark:border-gray-800/50">
      <div className="max-w-5xl mx-auto">
        <SectionHeading title="Skills & Tools" />

        <div className="space-y-5">
          {skills.map((category, i) => (
            <div key={i}>
              <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">
                {category.category}
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                {category.items.join(' · ')}
              </p>
            </div>
          ))}

          <div>
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">
              Certifications
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              {certifications.join(' · ')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
