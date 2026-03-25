import { DetailPageLayout } from '@/components/templates/DetailPageLayout';
import { ContentSection } from '@/components/templates/ContentSection';
import { Container } from '@/components/atoms/Container';
import { OrganizationChart } from '@/components/organisms/OrganizationChart';
import { SectionHeader } from '@/components/molecules/SectionHeader';
import { useLanguage } from '@/contexts/LanguageContext';

export function TeamPage() {
  const { t } = useLanguage();

  return (
    <DetailPageLayout
      title={t('team.title')}
      heroImage="/images/leeseunglab/people-hero.png"
    >
      {/* Organization Chart Section */}
      <ContentSection background="light" padding="lg" style={{ paddingTop: 80, paddingBottom: 80 }}>
        <Container maxWidth="none" className="max-w-[900px]">
          <SectionHeader title="Organization" style={{ marginBottom: 20 }} />
          <OrganizationChart />
        </Container>
      </ContentSection>

    </DetailPageLayout>
  );
}
