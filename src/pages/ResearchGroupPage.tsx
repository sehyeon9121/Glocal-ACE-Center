import { DetailPageLayout } from '@/components/templates/DetailPageLayout';
import { ContentSection } from '@/components/templates/ContentSection';
import { Container } from '@/components/atoms/Container';
import { SectionHeader } from '@/components/molecules/SectionHeader';
import { ProfessorProfileCard } from '@/components/organisms/ProfessorProfileCard';
import { researchGroups } from '@/data/researchGroupData';
import { useLanguage } from '@/contexts/LanguageContext';

export function ResearchGroupPage() {
  const { t } = useLanguage();

  return (
    <DetailPageLayout
      title={t('researchGroup.pageTitle')}
      heroImage="/images/leeseunglab/people-hero.png"
    >
      <ContentSection background="white" padding="lg" style={{ paddingTop: 80, paddingBottom: 80 }}>
        <Container maxWidth="none" className="max-w-[900px]">
          <SectionHeader title={t('researchGroup.sectionTitle')} />

          <div className="mt-12 flex flex-col gap-8">
            {researchGroups.flatMap((group) => group.members).map((researcher) => (
              <ProfessorProfileCard key={researcher.email} researcher={researcher} />
            ))}
          </div>
        </Container>
      </ContentSection>
    </DetailPageLayout>
  );
}
