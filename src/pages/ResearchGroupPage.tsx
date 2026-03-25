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

          <div className="mt-12 flex flex-col gap-20">
            {researchGroups.map((group) => (
              <div
                key={group.groupName}
                className="border border-gray-200 rounded-xl bg-gray-50/50 pb-8 flex flex-col gap-6"
                style={{ paddingTop: 18, paddingLeft: 10, paddingRight: 10 }}
              >
                <h3 className="text-2xl font-extrabold text-gray-900 font-[Inter,Pretendard,sans-serif]">
                  {group.groupName
                    .replace(/^([ACE])([-+i])/g, '$1|||$2|||')
                    .split('|||')
                    .map((part, i) =>
                      /^[ACE]$/.test(part) ? (
                        <span key={i} style={{ color: group.color }}>{part}</span>
                      ) : /^[-+]$/.test(part) ? (
                        <sup key={i} className="text-sm" style={{ color: group.color }}>{part}</sup>
                      ) : (
                        <span key={i}>{part}</span>
                      )
                    )}
                </h3>
                {group.members.map((researcher) => (
                  <ProfessorProfileCard key={researcher.email} researcher={researcher} />
                ))}
              </div>
            ))}
          </div>
        </Container>
      </ContentSection>
    </DetailPageLayout>
  );
}
