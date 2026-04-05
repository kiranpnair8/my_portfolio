import { TimelineItem } from '../ui/TimelineItem';
import { cvData } from '../../data/cv';

function renderBioText(text: string, links: Record<string, string>) {
  const parts = text.split(/\{([^}]+)\}/);
  return parts.map((part, i) => {
    if (i % 2 === 1 && links[part]) {
      return (
        <a
          key={i}
          href={links[part]}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          {part}
        </a>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

export function About() {
  const { personal, bioParagraphs, education } = cvData;

  return (
    <section id="about" className="py-6 md:py-8 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Bio text on left, Photo on right */}
        <div className="flex flex-col-reverse md:flex-row gap-8 md:gap-12 items-start">
          {/* Bio */}
          <div className="flex-1 space-y-4">
            {bioParagraphs.map((para, i) => (
              <p key={i} className="text-base leading-relaxed text-gray-600 dark:text-gray-300">
                {renderBioText(para.text, para.links)}
              </p>
            ))}
          </div>

          {/* Photo on right */}
          <div className="shrink-0 mx-auto md:mx-0">
            <img
              src={personal.profileImage || ''}
              alt={personal.name}
              className="w-52 h-52 md:w-64 md:h-64 rounded object-cover"
            />
          </div>
        </div>

        {/* Education */}
        <div className="mt-8 max-w-2xl">
          <h2 className="text-base font-semibold text-gray-900 dark:text-white mb-4">Education</h2>
          {education.map((edu, i) => (
            <TimelineItem
              key={i}
              title={edu.degree}
              subtitle={`${edu.institution}, ${edu.location}`}
              date={edu.year}
              index={i}
            >
              <p className="text-sm text-gray-500 dark:text-gray-400">{edu.field}</p>
            </TimelineItem>
          ))}
        </div>
      </div>
    </section>
  );
}
