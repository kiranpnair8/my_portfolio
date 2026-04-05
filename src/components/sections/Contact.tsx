import { SectionHeading } from '../ui/SectionHeading';
import { cvData } from '../../data/cv';

export function Contact() {
  const { personal } = cvData;

  return (
    <section id="contact" className="py-8 md:py-10 px-4 border-t border-gray-100 dark:border-gray-800/50">
      <div className="max-w-5xl mx-auto">
        <SectionHeading title="Contact" />

        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Feel free to reach out for collaborations or questions.
        </p>

        <div className="space-y-2 text-sm">
          <p>
            <span className="text-gray-500 dark:text-gray-400 w-16 inline-block">Email:</span>
            <a href={`mailto:${personal.email}`} className="text-blue-600 dark:text-blue-400 hover:underline">{personal.email}</a>
          </p>
          <p>
            <span className="text-gray-500 dark:text-gray-400 w-16 inline-block">GitHub:</span>
            <a href={`https://github.com/${personal.github}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">github.com/{personal.github}</a>
          </p>
          <p>
            <span className="text-gray-500 dark:text-gray-400 w-16 inline-block">LinkedIn:</span>
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Kiran P Nair</a>
          </p>
          <p>
            <span className="text-gray-500 dark:text-gray-400 w-16 inline-block">Scholar:</span>
            <a href={personal.googleScholar} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Google Scholar</a>
          </p>
          <p>
            <span className="text-gray-500 dark:text-gray-400 w-16 inline-block">Location:</span>
            <span className="text-gray-700 dark:text-gray-300">{personal.location}</span>
          </p>
        </div>
      </div>
    </section>
  );
}
