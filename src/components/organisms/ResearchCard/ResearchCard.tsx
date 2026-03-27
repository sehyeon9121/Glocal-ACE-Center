import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';

// public 폴더 이미지에 base URL 자동 추가
const getImageSrc = (src: string): string => {
  if (src.startsWith('http') || src.startsWith('data:')) {
    return src;
  }
  const baseUrl = import.meta.env.BASE_URL || '/';
  if (src.startsWith('/') && !src.startsWith(baseUrl)) {
    return `${baseUrl.replace(/\/$/, '')}${src}`;
  }
  return src;
};

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
  backgroundImage,
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
        'relative block overflow-hidden',
        'h-[250px] md:h-[350px] lg:h-[420px] w-full',
        'group cursor-pointer',
        className
      )}
      style={{
        backgroundImage: `url(${getImageSrc(backgroundImage)})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-center items-center text-center px-[18px] py-6 md:py-10">
        <h2 className="font-lato text-[15px] font-semibold text-white md:text-[18px] lg:text-[22px] mb-3 md:mb-4">
          {title}
        </h2>
        <p className="font-open-sans text-[12px] leading-[1.6] text-white/90 md:text-[13px] lg:text-[15px] md:leading-[1.7]">
          {description}
        </p>
      </div>
    </motion.a>
  );
}
