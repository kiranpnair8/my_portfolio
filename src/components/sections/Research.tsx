import { SectionHeading } from '../ui/SectionHeading';
import { cvData } from '../../data/cv';

export function Research() {
  const { research, researchInterests } = cvData;

  return (
    <section id="research" className="py-8 md:py-10 px-4 border-t border-gray-100 dark:border-gray-800/50">
      <div className="max-w-5xl mx-auto">
        <SectionHeading title="Research" subtitle="Current positions & areas of interest" />

        <div className="space-y-8 mb-10">
          {research.map((pos, i) => (
            <div key={i}>
              <h3 className="font-semibold text-gray-900 dark:text-white">{pos.lab}, <span className="font-normal text-gray-500 dark:text-gray-400">{pos.institution}</span></h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{pos.role} · {pos.startDate} – {pos.endDate} · Advisor: <span className="text-blue-600 dark:text-blue-400">{pos.advisor}</span></p>
              <ul className="mt-2 space-y-1">
                {pos.bullets.map((bullet, j) => (
                  <li key={j} className="text-sm text-gray-600 dark:text-gray-300 pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-gray-400">
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div>
          <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2">Research Interests</h3>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            {researchInterests.join(' · ')}
          </p>
        </div>
      </div>
    </section>
  );
}
