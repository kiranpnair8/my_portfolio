import { motion } from 'framer-motion';

interface Props {
  label: string;
  index: number;
}

export function SkillBadge({ label, index }: Props) {
  return (
    <motion.span
      className="inline-flex items-center px-3.5 py-1.5 rounded-full text-sm font-medium border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 hover:border-accent-400 dark:hover:border-accent-500 hover:text-accent-700 dark:hover:text-accent-400 transition-colors cursor-default"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.04, ease: 'easeOut' }}
      whileHover={{ scale: 1.05 }}
    >
      {label}
    </motion.span>
  );
}
