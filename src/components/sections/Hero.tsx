import { FiGithub, FiMail, FiDownload, FiLinkedin } from 'react-icons/fi';
import { SiGooglescholar } from 'react-icons/si';
import { cvData } from '../../data/cv';

const iconLinkClass = "text-gray-500 dark:text-gray-400 hover:text-accent-600 dark:hover:text-accent-400 transition-colors";

export function Hero() {
  const { personal } = cvData;

  return (
    <section id="hero" className="pt-20 pb-2 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white tracking-tight">
          <span className="font-black">{personal.name.split(' ')[0]}</span>{' '}
          {personal.name.split(' ').slice(1).join(' ')}
        </h1>

        <p className="mt-1 text-gray-500 dark:text-gray-400 text-base md:text-lg">
          {personal.tagline}
        </p>
        <p className="mt-0.5 text-gray-400 dark:text-gray-500 text-sm">
          Brain-Inspired Computing · Energy-Efficient AI · Security & Privacy in AI
        </p>

        <div className="mt-3 flex flex-wrap items-center gap-4">
          <a
            href={`https://github.com/${personal.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className={iconLinkClass}
            aria-label="GitHub"
          >
            <FiGithub size={20} />
          </a>
          <a
            href={personal.googleScholar}
            target="_blank"
            rel="noopener noreferrer"
            className={iconLinkClass}
            aria-label="Google Scholar"
          >
            <SiGooglescholar size={20} />
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={iconLinkClass}
            aria-label="LinkedIn"
          >
            <FiLinkedin size={20} />
          </a>
          <a
            href={`mailto:${personal.email}`}
            className={iconLinkClass}
            aria-label="Email"
          >
            <FiMail size={20} />
          </a>
          <span className="text-gray-300 dark:text-gray-700">|</span>
          <a
            href={personal.cvFile}
            download
            className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-600 dark:text-accent-400 hover:text-accent-700 dark:hover:text-accent-300 transition-colors"
          >
            <FiDownload size={15} />
            CV
          </a>
        </div>
      </div>
    </section>
  );
}
