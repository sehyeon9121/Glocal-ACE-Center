import { Link } from 'react-router-dom';
import { DetailPageLayout } from '@/components/templates/DetailPageLayout';
import { ContentSection } from '@/components/templates/ContentSection';
import { Container } from '@/components/atoms/Container';
import { SectionHeader } from '@/components/molecules/SectionHeader';
import { ResearcherProfileCard } from '@/components/organisms/ResearcherProfileCard';
import { researchGroups } from '@/data/researchGroupData';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/utils/cn';

export function ResearchGroupPage() {
  const { t } = useLanguage();

  return (
    <DetailPageLayout
      title={t('researchGroup.pageTitle')}
      heroImage="/images/leeseunglab/people-hero.jpg"
    >
      <ContentSection background="white" padding="lg" style={{ paddingTop: 80, paddingBottom: 80 }}>
        <Container maxWidth="none" className="max-w-[900px]">
          <SectionHeader title={t('researchGroup.sectionTitle')} />

          <div className="mt-10 flex flex-col gap-32">
            {researchGroups.map((group) => (
              <div key={group.groupName}>
                {/* Folder Tab Header */}
<div
  className="flex items-center px-10 py-6 font-bold text-xl tracking-tight text-white relative z-10 shadow-sm font-[Inter,Pretendard,sans-serif]"
  style={{ backgroundColor: group.color }}
>
  {group.groupName}
</div>

{/* Tree Container: vertical line + cards */}
{/* 👇 여기 className에서 py-8을 삭제하고 pt-16을 추가했습니다. */}
<div
  className="ml-8 pl-12 pt-16 pb-8 flex flex-col gap-12 relative"
  style={{ borderLeft: `2px solid ${group.color}` }}
>
  {group.members.map((researcher, index) => (
    // ... 이하 동일
                    <div key={researcher.email} className="relative flex flex-col gap-5">

                      <ResearcherProfileCard
                        researcher={researcher}
                        index={index}
                      />

                      {researcher.selectedPapers && researcher.selectedPapers.length > 0 && (
                        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                          <h4 className="text-sm font-bold text-gray-900 mb-3 font-[Inter,Pretendard,sans-serif]">
                            Selected Publications
                          </h4>
                          <ul className="space-y-2">
                            {researcher.selectedPapers.map((paper) => (
                              <li
                                key={paper}
                                className="flex items-start gap-2 text-sm text-gray-600 leading-relaxed font-[Inter,Pretendard,sans-serif]"
                              >
                                <span className="mt-1.5 flex-shrink-0">•</span>
                                <span>{paper}</span>
                              </li>
                            ))}
                          </ul>
                          <Link
                            to="/publications"
                            className={cn(
                              'inline-flex items-center gap-1 mt-3',
                              'text-sm font-medium text-blue-600',
                              'hover:text-blue-800 hover:underline',
                              'transition-colors duration-200'
                            )}
                          >
                            출판물 더보기
                            <span aria-hidden="true">→</span>
                          </Link>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </Container>
      </ContentSection>
    </DetailPageLayout>
  );
}
