import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';
import { Icon } from '@/components/atoms/Icon';
import type { ResearcherProfile } from '@/data/researchGroupData';

export interface ResearcherProfileCardProps {
  researcher: ResearcherProfile;
  index?: number;
  className?: string;
}

export function ResearcherProfileCard({
  researcher,
  index = 0,
  className,
}: ResearcherProfileCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className={cn(
        'bg-white rounded-2xl p-5 md:p-8',
        'border border-gray-100 shadow-sm',
        'transition-all duration-300 ease-out',
        'hover:shadow-md',
        className
      )}
    >
      <div className="flex flex-col md:flex-row gap-5 md:gap-8">
        {/* Left: Profile Image + Icons */}
        <div className="flex flex-col items-center flex-shrink-0">
          {/* Profile Image */}
          {researcher.image ? (
            <img
              src={researcher.image}
              alt={researcher.name}
              className="w-24 h-32 md:w-32 md:h-40 rounded-lg border border-gray-200 object-cover"
            />
          ) : (
            <div className="w-24 h-32 md:w-32 md:h-40 bg-gray-100 rounded-lg border border-gray-200" />
          )}

          {/* Contact Icons */}
          <div className="flex justify-center gap-5 mt-5">
            {/* Mail */}
            <a
              href={`mailto:${researcher.email}`}
              className="text-gray-400 hover:text-[#1B3A4B] transition-colors duration-200"
              title={researcher.email}
            >
              <Icon name="Mail" size={26} />
            </a>

            {/* Website */}
            {researcher.website && (
              <a
                href={researcher.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#1B3A4B] transition-colors duration-200"
                title="Website"
              >
                <Icon name="Globe" size={26} />
              </a>
            )}
          </div>
        </div>

        {/* Right: Details */}
        <div className="flex-1 min-w-0">
          {/* Name, Degree, Affiliation */}
          <div className="mb-1">
            <h3 className="text-lg md:text-2xl font-bold text-gray-900 font-[Inter,Pretendard,sans-serif]">
              {researcher.name}
            </h3>
          </div>
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <span className="text-sm font-medium text-gray-500 font-[Inter,Pretendard,sans-serif]">
              {researcher.degree}
            </span>
            <span className="text-gray-300">·</span>
            <span className="text-sm font-medium text-gray-500 font-[Inter,Pretendard,sans-serif]">
              {researcher.affiliation}
            </span>
          </div>

          {/* Divider */}
          <div className="border-b border-gray-200 my-4" />

          {/* History */}
          {researcher.history.length > 0 && (
            <ul className="list-disc list-inside space-y-1 mb-4">
              {researcher.history.map((item) => (
                <li
                  key={item}
                  className="text-sm text-gray-700 leading-relaxed font-[Inter,Pretendard,sans-serif]"
                >
                  {item}
                </li>
              ))}
            </ul>
          )}

          {/* Introduction */}
          {researcher.introduction && (
            <p className="text-base text-gray-800 font-[Inter,Pretendard,sans-serif] leading-relaxed">
              {researcher.introduction}
            </p>
          )}

        </div>
      </div>
    </motion.div>
  );
}
