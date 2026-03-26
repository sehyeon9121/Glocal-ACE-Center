import { PageLayout } from '@/components/templates/PageLayout';
import { ContentSection } from '@/components/templates/ContentSection';
import { GridSection } from '@/components/templates/GridSection';
import { LandingHero } from '@/components/organisms/LandingHero';
import { AboutContent } from '@/components/organisms/AboutContent';
import { ResearchCard } from '@/components/organisms/ResearchCard';
import { DecoratedSectionHeader } from '@/components/organisms/DecoratedSectionHeader';
import { BigQuestionCard } from '@/components/organisms/BigQuestionCard';
import { AffiliationsSection } from '@/components/organisms/AffiliationsSection';
import { Spacer } from '@/components/atoms/Spacer';
import { ChevronDown } from 'lucide-react';
import { researchThemes } from '@/data/researchThemes';
import { bigQuestions } from '@/data/bigQuestions';
import { useLanguage } from '@/contexts/LanguageContext';

export function HomePage() {
  const { t } = useLanguage();

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

  // 번역된 Big Questions 데이터 (앞 4개만)
  const translatedQuestions = bigQuestions.slice(0, 4).map((q, index) => ({
    ...q,
    question: t(`home.bigQuestions.q${index + 1}`),
  }));

  return (
    <PageLayout>
      {/* Hero Section */}
      <LandingHero />

      <Spacer size="4xl" />

      {/* About Section - Lab Introduction */}
      <ContentSection
        id="about"
        background="white"
        padding="xl"
      >
        <AboutContent
          image="/images/leeseunglab/test-homepage.png"
          imageAlt="Terrer Lab"
          title={t('home.about.title')}
          description={t('home.about.description')}
        />
      </ContentSection>

      <Spacer size="4xl" />

      {/* Research Themes Section */}
      <GridSection
        id="research"
        title={t('home.research.title')}
        subtitle={t('home.research.subtitle')}
        columns={1}
        gap="md"
        background="white"
        padding="xl"
      >
        {translatedResearchThemes.map((theme, index) => (
          <ResearchCard
            key={theme.id}
            id={theme.id}
            title={theme.title}
            description={theme.description}
            backgroundImage={theme.backgroundImage || '/images/leeseunglab/hero-background.jpg'}
            href={theme.href}
            index={index}
          />
        ))}
      </GridSection>


      <Spacer size="4xl" />

      {/* Big Questions Section */}
      <ContentSection
        id="big-questions"
        background="white"
        padding="xl"
      >
        <div className="w-full flex flex-col items-center">
          <div className="w-full max-w-6xl">
            <DecoratedSectionHeader
              title={t('home.bigQuestions.title')}
              subtitle={t('home.bigQuestions.subtitle')}
            />
          </div>
          <Spacer size="2xl" />

          {/* Questions List with Arrows */}
          <div className="flex flex-col items-center w-full max-w-6xl">
            {translatedQuestions.map((question, index) => (
              <div key={question.id} className="w-full">
                <BigQuestionCard
                  {...question}
                  index={index}
                />
                {index < translatedQuestions.length - 1 && (
                  <div className="flex justify-center py-6">
                    <ChevronDown size={32} className="text-gray-400" strokeWidth={2} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </ContentSection>

      {/* Affiliations Section */}
      <AffiliationsSection />
    </PageLayout>
  );
}
