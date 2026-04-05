import { FiGithub, FiMail, FiLinkedin } from 'react-icons/fi';
import { SiGooglescholar } from 'react-icons/si';
import { cvData } from '../../data/cv';

export function Footer() {
  const { personal } = cvData;

  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} {personal.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href={`https://github.com/${personal.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              aria-label="GitHub"
            >
              <FiGithub size={18} />
            </a>
            <a
              href={personal.googleScholar}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              aria-label="Google Scholar"
            >
              <SiGooglescholar size={18} />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={18} />
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              aria-label="Email"
            >
              <FiMail size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
