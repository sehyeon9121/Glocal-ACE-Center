import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';
import { DivisionCard } from '@/components/molecules/DivisionCard';
import { director, viceDirector, divisions } from '@/data/organizationData';
import { useLanguage } from '@/contexts/LanguageContext';

export interface OrganizationChartProps {
  className?: string;
}

export function OrganizationChart({ className }: OrganizationChartProps) {
  const { language } = useLanguage();
  return (
    <div className={cn('w-full', className)}>
      {/* Director Card - Top Center */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="flex justify-center" style={{ marginBottom: 20 }}
      >
        <div
          className={cn(
            'bg-[#1B3A4B] rounded-2xl',
            'flex flex-col items-center justify-center',
            'shadow-sm min-w-[200px]'
          )}
          style={{ padding: 12 }}
        >
          <div className="text-xl font-bold text-white font-[Inter,Pretendard,sans-serif]" style={{ marginBottom: 4 }}>
            {director.name[language]}
          </div>
          <div className="text-xs font-semibold tracking-[0.15em] uppercase text-gray-300 font-[Inter,Pretendard,sans-serif]">
            {director.title}
          </div>
        </div>
      </motion.div>

      {/* Connecting Line: Director → Vice Director */}
      <div className="flex justify-center">
        <div className="w-px bg-gray-300" style={{ height: 20 }} />
      </div>

      {/* Vice Director Card */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="flex justify-center" style={{ marginBottom: 20 }}
      >
        <div
          className={cn(
            'bg-[#2D5A6B] rounded-2xl',
            'flex flex-col items-center justify-center',
            'shadow-sm min-w-[200px]'
          )}
          style={{ padding: 12 }}
        >
          <div className="text-xl font-bold text-white font-[Inter,Pretendard,sans-serif]" style={{ marginBottom: 4 }}>
            {viceDirector.name[language]}
          </div>
          <div className="text-xs font-semibold tracking-[0.15em] uppercase text-gray-300 font-[Inter,Pretendard,sans-serif]">
            {viceDirector.title}
          </div>
        </div>
      </motion.div>

      {/* Connecting Line: Vice Director → Divisions */}
      <div className="flex justify-center">
        <div className="w-px bg-gray-300" style={{ height: 20 }} />
      </div>

      {/* Horizontal bar + vertical drops (Desktop) / vertical chain (Mobile) */}
      <div className="relative">
        {/* Desktop: horizontal connector from 1st to 3rd division center */}
        <div
          className="hidden md:block absolute top-0 h-px bg-gray-300"
          style={{
            left: 'calc(100% / 6)',
            right: 'calc(100% / 6)',
          }}
        />

        {/* Mobile: vertical connector */}
        <div className="md:hidden flex justify-center">
          <div className="w-px h-6 bg-gray-300" />
        </div>

        {/* Division Cards */}
        <div className="flex flex-col md:flex-row md:items-stretch gap-5 md:gap-5">
          {divisions.map((division, index) => (
            <div key={division.id} className="flex-1 flex flex-col items-center">
              {/* Desktop: vertical drop from horizontal bar to card */}
              <div className="hidden md:block w-px bg-gray-300" style={{ height: 20 }} />

              {/* Mobile: connector between cards (not on first) */}
              {index > 0 && (
                <div className="md:hidden w-px h-4 bg-gray-300" />
              )}

              <DivisionCard division={division} index={index} className="w-full flex-1" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
