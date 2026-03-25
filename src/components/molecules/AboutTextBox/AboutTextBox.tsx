import { Link } from 'react-router-dom';
import { Heading } from '@/components/atoms/Heading';
import { Paragraph } from '@/components/atoms/Paragraph';
import { Spacer } from '@/components/atoms/Spacer';
import { Divider } from '@/components/atoms/Divider';
import { cn } from '@/utils/cn';
import { useLanguage } from '@/contexts/LanguageContext';

export interface AboutTextBoxProps {
  title: string;
  description: string;
  className?: string;
}

export function AboutTextBox({
  title,
  description,
  className,
}: AboutTextBoxProps) {
  const { t } = useLanguage();

  return (
    <div
      className={cn(
        'p-8 bg-white',
        className
      )}
    >
      <Heading level={3} style={{ fontWeight: 700, color: '#00380A' }}>
        {title}
      </Heading>

      <Spacer size="md" />

      <Divider color="muted" thickness="thin" className="w-16" />

      <Spacer size="md" />

      <Paragraph color="dark" size="lg" className="leading-relaxed font-medium">
        {description}
      </Paragraph>

      <Spacer size="lg" />

      <Link
        to="/greeting"
        className="inline-block text-base font-semibold text-black hover:underline transition-colors duration-200 font-[Inter,Pretendard,sans-serif]"
      >
        {t('greeting.readMore')} →
      </Link>
    </div>
  );
}
