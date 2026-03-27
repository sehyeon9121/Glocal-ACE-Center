import { motion } from 'framer-motion';
import { AboutTextBox } from '@/components/molecules/AboutTextBox';
import { cn } from '@/utils/cn';

export interface AboutContentProps {
  image?: string;
  imageAlt?: string;
  title: string;
  description: string;
  className?: string;
}

export function AboutContent({
  title,
  description,
  className,
}: AboutContentProps) {
  return (
    <div
      className={cn('w-full', className)}
      style={{ maxWidth: '1200px', margin: '0 auto' }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.25 }}
      >
        <AboutTextBox title={title} description={description} />
      </motion.div>
    </div>
  );
}
