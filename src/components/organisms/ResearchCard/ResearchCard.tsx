import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';

export interface ResearchCardProps {
  id: string;
  title: string;
  description: string;
  backgroundImage: string;
  href?: string;
  index?: number;
  className?: string;
}

export function ResearchCard({
  title,
  description,
  href = '#',
  index = 0,
  className,
}: ResearchCardProps) {
  return (
    <motion.a
      href={href}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.25, delay: index * 0.1 }}
      whileHover={{
        scale: [1, 0.9, 1.02],
        transition: {
          duration: 1.4,
          times: [0, 0.2, 1],
          ease: "easeOut"
        }
      }}
      className={cn(
        'relative block overflow-hidden rounded-lg',
        'w-full',
        'group cursor-pointer',
        'bg-gray-100',
        className
      )}
    >
      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-start text-left" style={{ padding: '40px 16px' }}>
        <h2 className="font-lato text-[15px] font-semibold text-gray-900 md:text-[18px] lg:text-[22px]" style={{ marginBottom: 10 }}>
          {title}
        </h2>
        <p className="font-open-sans text-[12px] leading-[1.6] text-gray-600 md:text-[13px] lg:text-[15px] md:leading-[1.7]">
          {description}
        </p>
      </div>
    </motion.a>
  );
}
