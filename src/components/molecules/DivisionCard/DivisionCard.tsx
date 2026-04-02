import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';
import type { DivisionData } from '@/data/organizationData';
import { useLanguage } from '@/contexts/LanguageContext';

export interface DivisionCardProps {
  division: DivisionData;
  index?: number;
  className?: string;
}

export function DivisionCard({ division, index = 0, className }: DivisionCardProps) {
  const { language } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className={cn(
        'bg-white rounded-2xl p-4',
        'border border-gray-100',
        'shadow-sm',
        'transition-all duration-300 ease-out',
        'hover:-translate-y-1 hover:shadow-md',
        'flex flex-col h-full',
        className
      )}
    >
      {/* 전체 내용 컨테이너 */}
      <div className="bg-gray-50 rounded-xl border border-gray-100 flex flex-col flex-1" style={{ padding: 16 }}>
        {/* Header: Badge + Division Name */}
        <div className="flex items-start gap-3" style={{ marginBottom: 16 }}>
          {/* Color Badge - Rounded Square (30% smaller) */}
          <div
            className="w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0 text-white text-xl font-bold font-[Inter,Pretendard,sans-serif]"
            style={{ backgroundColor: division.color }}
          >
            {division.badge.length > 1 ? (
              <>
                {division.badge[0]}
                <span className="text-xs font-semibold">{division.badge.slice(1)}</span>
              </>
            ) : (
              division.badge
            )}
          </div>
          <div className="flex flex-col justify-center min-h-[2.75rem]">
            <div className="text-2xl font-bold text-[#1e293b] font-[Inter,Pretendard,sans-serif] leading-tight">
              {division.label}
            </div>
          </div>
        </div>

        {/* Division Subtitle */}
        <div className="flex-1 text-base font-medium text-gray-500 leading-snug font-[Inter,Pretendard,sans-serif] text-center mt-4">
          {division.title[language]}
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-200" style={{ marginTop: 16, marginBottom: 16 }} />

        {/* Members */}
        <div className="flex flex-col gap-4">
          {division.members.map((member) => (
            <div key={member.name[language]} className="flex items-center gap-3 p-4">
              {/* Profile Image */}
              {member.image ? (
                <img
                  src={member.image}
                  alt={member.name[language]}
                  className="w-10 h-10 rounded-md border border-gray-200 flex-shrink-0 object-cover"
                />
              ) : (
                <div className="w-10 h-10 bg-gray-100 rounded-md border border-gray-200 flex-shrink-0" />
              )}

              {/* Name + Role + Affiliation */}
              <div className="flex items-center gap-1.5 flex-wrap">
                <button
                  type="button"
                  onClick={() => {
                    if (member.profileUrl) {
                      window.location.href = member.profileUrl;
                    }
                  }}
                  className={cn(
                    'text-base font-bold text-[#1e293b] font-[Inter,Pretendard,sans-serif]',
                    'transition-colors duration-200',
                    'hover:text-[#1B3A4B]',
                    'bg-transparent border-none p-0 text-left',
                    member.profileUrl ? 'cursor-pointer' : 'cursor-default'
                  )}
                >
                  {member.name[language]}
                </button>
                {member.role && member.role[language] && (
                  <span className="text-xs font-medium text-gray-400 font-[Inter,Pretendard,sans-serif]">
                    {member.role[language]}
                  </span>
                )}
                {member.affiliation && (
                  <span className="text-xs font-medium text-gray-400 font-[Inter,Pretendard,sans-serif]">
                    · {member.affiliation[language]}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
