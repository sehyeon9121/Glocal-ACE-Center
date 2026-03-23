import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';
import { DivisionCard } from '@/components/molecules/DivisionCard';
import { director, divisions } from '@/data/organizationData';

export interface OrganizationChartProps {
  className?: string;
}

export function OrganizationChart({ className }: OrganizationChartProps) {
  return (
    <div className={cn('w-full', className)}>
      {/* Director Card - Top Center */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="flex justify-center mb-0"
      >
        <div
          className={cn(
            'bg-[#1B3A4B] rounded-2xl',
            'px-12 py-6',
            'flex flex-col items-center justify-center',
            'shadow-sm min-w-[200px]'
          )}
        >
          <div className="text-xs font-semibold tracking-[0.15em] uppercase text-gray-300 mb-1 font-[Inter,Pretendard,sans-serif]">
            {director.title}
          </div>
          <div className="text-xl font-bold text-white font-[Inter,Pretendard,sans-serif]">
            {director.name}
          </div>
        </div>
      </motion.div>

      {/* Connecting Lines: Director → Divisions */}
      {/* Vertical line down from Director */}
      <div className="flex justify-center">
        <div className="w-px h-10 bg-gray-300" />
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
              <div className="hidden md:block w-px h-10 bg-gray-300" />

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
