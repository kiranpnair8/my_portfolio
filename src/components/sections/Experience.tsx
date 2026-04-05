import { SectionHeading } from '../ui/SectionHeading';
import { TimelineItem } from '../ui/TimelineItem';
import { cvData } from '../../data/cv';

export function Experience() {
  const { teaching, experience, talks, presentations } = cvData;

  return (
    <section id="experience" className="py-8 md:py-10 px-4 border-t border-gray-100 dark:border-gray-800/50">
      <div className="max-w-5xl mx-auto">
        <SectionHeading title="Experience" subtitle="Teaching, industry & talks" />

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-4">Teaching</h3>
            {teaching.map((pos, i) => (
              <TimelineItem key={i} title={pos.title} subtitle={pos.institution} date={pos.date} index={i}>
                <ul className="space-y-1">
                  {pos.bullets.map((b, j) => (
                    <li key={j} className="text-sm text-gray-600 dark:text-gray-300 pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-gray-400">
                      {b}
                    </li>
                  ))}
                </ul>
              </TimelineItem>
            ))}

            <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-4 mt-8">Industry</h3>
            {experience.map((exp, i) => (
              <TimelineItem key={i} title={exp.title} subtitle={`${exp.company}, ${exp.location}`} date={exp.date} index={i}>
                <ul className="space-y-1">
                  {exp.bullets.map((b, j) => (
                    <li key={j} className="text-sm text-gray-600 dark:text-gray-300 pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-gray-400">
                      {b}
                    </li>
                  ))}
                </ul>
              </TimelineItem>
            ))}
          </div>

          <div>
            <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-4">Invited Talks</h3>
            {talks.map((talk, i) => (
              <div key={i} className="mb-4">
                <p className="text-sm font-medium text-gray-900 dark:text-white">"{talk.title}"</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{talk.venue} · {talk.date}</p>
              </div>
            ))}

            <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-4 mt-8">Selected Presentations</h3>
            {presentations.slice(0, 4).map((pres, i) => (
              <div key={i} className="mb-3">
                <div className="flex items-start gap-2">
                  <span className={`shrink-0 mt-0.5 px-1.5 py-0.5 text-[10px] font-semibold rounded uppercase ${
                    pres.type === 'oral'
                      ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400'
                      : 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400'
                  }`}>
                    {pres.type}
                  </span>
                  <div>
                    <p className="text-xs font-medium text-gray-800 dark:text-gray-200 leading-snug">{pres.title}</p>
                    <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-0.5">{pres.venue} · {pres.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
