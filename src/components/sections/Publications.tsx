import { SectionHeading } from '../ui/SectionHeading';
import { PublicationCard } from '../ui/PublicationCard';
import { cvData } from '../../data/cv';

export function Publications() {
  const published = cvData.publications.filter((p) => p.status !== 'in-preparation');
  const inPrep = cvData.publications.filter((p) => p.status === 'in-preparation');

  return (
    <section id="publications" className="py-8 md:py-10 px-4 border-t border-gray-100 dark:border-gray-800/50">
      <div className="max-w-5xl mx-auto">
        <SectionHeading title="Publications" subtitle={`${published.length} published · ${inPrep.length} in preparation`} />

        <div className="space-y-4">
          {published.map((pub, i) => (
            <PublicationCard key={i} pub={pub} index={i} />
          ))}
        </div>

        {inPrep.length > 0 && (
          <div className="mt-10">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">In Preparation</h3>
            <div className="space-y-4">
              {inPrep.map((pub, i) => (
                <PublicationCard key={i} pub={pub} index={published.length + i} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
