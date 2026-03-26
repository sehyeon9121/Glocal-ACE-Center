import { useState } from 'react';
import { motion } from 'framer-motion';
import { Image } from '@/components/atoms/Image';
import { Link } from '@/components/atoms/Link';
import { cn } from '@/utils/cn';
import { staggerItem } from '@/utils/animations';
import type { BigQuestion } from '@/types';

export interface BigQuestionCardProps extends BigQuestion {
  className?: string;
  index?: number;
}

export function BigQuestionCard({
  id,
  question,
  content,
  image,
  className,
  index = 0,
}: BigQuestionCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={cn('flex flex-col', className)}>
      {/* Card */}
      <motion.article
        variants={staggerItem}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        whileHover={{ y: -4, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={cn(
          'group bg-white overflow-hidden',
          'border border-[#DDE1E7]',
          'transition-shadow duration-300',
          'hover:shadow-lg',
          'cursor-pointer',
        )}
        style={{ transitionDelay: `${index * 0.05}s` }}
      >
        <Link href={`/big-questions/${id}`} className="flex flex-col md:flex-row" disableAnimation>
          {/* Image */}
          {image && (
            <div className="flex-shrink-0 bg-gray-50 overflow-hidden w-full md:w-[240px]">
              <div style={{ aspectRatio: '3 / 2' }} className="w-full h-full flex items-center justify-center">
                <Image
                  src={image}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}

          {/* Text */}
          <div className="flex-1 p-5 md:p-8 flex flex-col justify-center">
            <p className="text-base md:text-xl font-bold text-black leading-snug group-hover:text-[#00380A] transition-colors mb-2 md:mb-3 font-[Inter,Pretendard,sans-serif]">
              {question}
            </p>
            {content && content.length > 0 && (
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed line-clamp-3 font-[Inter,Pretendard,sans-serif]">
                {content[0]}
              </p>
            )}
          </div>
        </Link>

        {/* Progress Bar */}
        <div className="w-full">
          <div className="h-[3px] w-full bg-gray-200 overflow-hidden">
            <motion.div
              className="h-full"
              initial={{ width: 0 }}
              animate={{ width: isHovered ? '100%' : 0 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              style={{
                background: 'linear-gradient(90deg, #dc2626 0%, #16a34a 100%)',
              }}
            />
          </div>
        </div>
      </motion.article>
    </div>
  );
}
