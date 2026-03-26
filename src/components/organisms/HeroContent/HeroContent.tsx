import { motion } from 'framer-motion';
import { Heading } from '@/components/atoms/Heading';
import { Paragraph } from '@/components/atoms/Paragraph';
import { Span } from '@/components/atoms/Span';
import { Spacer } from '@/components/atoms/Spacer';
import { cn } from '@/utils/cn';
import { heroTitle, heroSubtitle, heroDescription } from '@/utils/animations';

export interface HeroContentProps {
  subtitle: string;
  title: string;
  description: string;
  className?: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

export function HeroContent({
  subtitle,
  title,
  description,
  className,
}: HeroContentProps) {
  return (
    <motion.div
      className={cn('flex flex-col items-center text-center md:items-start md:text-left w-full md:w-[80%] lg:w-[67.5%] xl:w-[60%]', className)}
      variants={containerVariants}
      initial={false}
      animate="visible"
    >
      <motion.div variants={heroSubtitle}>
        <Span
          size="sm"
          color="white"
          uppercase
          letterSpacing="wider"
          className="font-semibold md:text-[1.05em]"
        >
          {subtitle}
        </Span>
      </motion.div>

      <Spacer size="md" />

      <motion.div variants={heroTitle}>
        <Heading level={1} color="white" className="text-[1.1rem] md:text-[2.2em] leading-[1.3] text-white">
          {title}
        </Heading>
      </motion.div>

      <Spacer size="sm" />

      <motion.div variants={heroDescription}>
        <Paragraph color="white" size="sm" className="opacity-90 md:text-[1.4em] md:leading-[1.3]">
          {description}
        </Paragraph>
      </motion.div>

    </motion.div>
  );
}
