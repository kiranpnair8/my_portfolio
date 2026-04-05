import { FiFileText, FiExternalLink, FiCode } from 'react-icons/fi';
import type { Publication } from '../../data/cv';

interface Props {
  pub: Publication;
  index: number;
}

function highlightAuthor(authors: string) {
  return authors.split(/(Kiran Nair|K\.Nair|K\. Nair)/).map((part, i) =>
    /Kiran Nair|K\.?Nair|K\. Nair/.test(part) ? (
      <span key={i} className="font-semibold text-gray-900 dark:text-white">
        {part}
      </span>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}

const statusConfig = {
  published: { label: 'Published', className: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' },
  'in-revision': { label: 'In Revision', className: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400' },
  'in-review': { label: 'In Review', className: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400' },
  'in-preparation': { label: 'In Preparation', className: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400' },
};

const linkIcons = {
  pdf: FiFileText,
  arxiv: FiExternalLink,
  code: FiCode,
  doi: FiExternalLink,
};

export function PublicationCard({ pub }: Props) {
  const status = statusConfig[pub.status];

  return (
    <div className="pb-5 mb-5 border-b border-gray-100 dark:border-gray-800 last:border-b-0 last:mb-0 last:pb-0">
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            {highlightAuthor(pub.authors)}
          </p>
          <h3 className="mt-1 text-base font-medium text-gray-900 dark:text-white leading-snug">
            <em>"{pub.title}"</em>
          </h3>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            {pub.venue}, <span className="font-medium text-blue-600 dark:text-blue-400">{pub.year}</span>
          </p>
        </div>
        <span className="shrink-0 mt-1 text-xs text-gray-400 dark:text-gray-500 italic">
          {status.label}
        </span>
      </div>

      {pub.links && pub.links.length > 0 && (
        <div className="mt-2 flex gap-2">
          {pub.links.map((link) => {
            const Icon = linkIcons[link.type];
            return (
              <a
                key={link.type}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
              >
                <Icon size={14} />
                {link.type.toUpperCase()}
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}
