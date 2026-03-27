import { useState } from 'react';
import { motion } from 'framer-motion';
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
          {/* Text */}
          <div className="flex-1 p-[18px] flex flex-col justify-center items-center text-center min-h-[120px] md:min-h-[160px]">
            <p className="text-lg md:text-2xl font-bold text-black leading-snug group-hover:text-[#00380A] transition-colors mb-3 md:mb-4 font-[Inter,Pretendard,sans-serif]">
              {question}
            </p>
            {content && content.length > 0 && (
              <p className="text-sm md:text-base text-gray-600 leading-relaxed line-clamp-3 font-[Inter,Pretendard,sans-serif]">
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
