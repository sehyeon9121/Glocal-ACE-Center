import { DetailPageLayout } from '@/components/templates/DetailPageLayout';
import { GridSection } from '@/components/templates/GridSection';
import { ContentSection } from '@/components/templates/ContentSection';
import { ResearchThemeCard } from '@/components/organisms/ResearchThemeCard';
import { BigQuestionCard } from '@/components/organisms/BigQuestionCard';
import { Paragraph } from '@/components/atoms/Paragraph';
import { researchThemes } from '@/data/researchThemes';
import { getBigQuestions } from '@/data/bigQuestions';
import { useLanguage } from '@/contexts/LanguageContext';

export function ResearchPage() {
  const { t, language } = useLanguage();

  // 번역된 연구 주제 데이터
  const themeKeyMap: Record<string, string> = {
    'terrestrial-carbon': 'terrestrialCarbon',
    'natural-climate': 'naturalClimate',
    'smart-energy': 'smartEnergy',
  };
  const translatedResearchThemes = researchThemes.map((theme) => ({
    ...theme,
    title: t(`research.${themeKeyMap[theme.id]}.title`),
    description: t(`research.${themeKeyMap[theme.id]}.description`),
  }));

  // Big Questions 데이터
  const translatedQuestions = getBigQuestions(language);

  return (
    <DetailPageLayout
      title={t('research.title')}
      subtitle={t('research.subtitle')}
    >
      {/* Introduction */}
      <ContentSection background="white" padding="md">
        <div className="max-w-3xl">
          <Paragraph color="light" size="lg" className="leading-relaxed">
            {t('research.intro')}
          </Paragraph>
        </div>
      </ContentSection>

      {/* Research Themes */}
      <GridSection
        title={t('research.themesTitle')}
        columns={1}
        gap="lg"
        background="light"
        padding="lg"
      >
        {translatedResearchThemes.map((theme, index) => (
          <ResearchThemeCard
            key={theme.id}
            {...theme}
            index={index}
          />
        ))}
      </GridSection>

      {/* Big Questions */}
      <GridSection
        title={t('research.bigQuestionsTitle')}
        subtitle={t('research.bigQuestionsSubtitle')}
        columns={2}
        gap="md"
        background="white"
        padding="lg"
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
