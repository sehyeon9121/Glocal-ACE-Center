import { DetailPageLayout } from '@/components/templates/DetailPageLayout';
import { GridSection } from '@/components/templates/GridSection';
import { ContentSection } from '@/components/templates/ContentSection';
import { BigQuestionCard } from '@/components/organisms/BigQuestionCard';
import { Paragraph } from '@/components/atoms/Paragraph';
import { getBigQuestions } from '@/data/bigQuestions';
import { useLanguage } from '@/contexts/LanguageContext';

export function BigQuestionsPage() {
  const { t, language } = useLanguage();
  const translatedQuestions = getBigQuestions(language);

  return (
    <DetailPageLayout
      title={t('bigQuestions.title')}
      subtitle={t('bigQuestions.subtitle')}
    >
      {/* Introduction */}
      <ContentSection background="white" padding="md">
        <div className="max-w-3xl">
          <Paragraph color="light" size="lg" className="leading-relaxed">
            {t('bigQuestions.intro')}
          </Paragraph>
        </div>
      </ContentSection>

      {/* Questions Grid */}
      <GridSection
        columns={2}
        gap="lg"
        background="light"
        padding="xl"
      >
        {translatedQuestions.map((question, index) => (
          <BigQuestionCard
            key={question.id}
            {...question}
            index={index}
          />
        ))}
      </GridSection>
    </DetailPageLayout>
  );
}
