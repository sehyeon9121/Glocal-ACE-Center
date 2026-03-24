import { useParams, Link } from 'react-router-dom';
import { DetailPageLayout } from '@/components/templates/DetailPageLayout';
import { ContentSection } from '@/components/templates/ContentSection';
import { Container } from '@/components/atoms/Container';
import { researchGroups } from '@/data/researchGroupData';
import { useLanguage } from '@/contexts/LanguageContext';

export function ResearcherPublicationsPage() {
  const { t } = useLanguage();
  const { email } = useParams<{ email: string }>();

  const researcher = researchGroups
    .flatMap((group) => group.members)
    .find((m) => m.email === email);

  if (!researcher) {
    return (
      <DetailPageLayout
        title={t('researchGroup.pageTitle')}
        heroImage="/images/leeseunglab/people-hero.jpg"
      >
        <ContentSection background="white" padding="lg" style={{ paddingTop: 80, paddingBottom: 80 }}>
          <Container maxWidth="none" className="max-w-[900px]">
            <p className="text-gray-500 text-center font-[Inter,Pretendard,sans-serif]">
              연구원 정보를 찾을 수 없습니다.
            </p>
            <div className="text-center mt-6">
              <Link to="/research-group" className="text-blue-600 hover:underline font-[Inter,Pretendard,sans-serif]">
                ← 연구단 페이지로 돌아가기
              </Link>
            </div>
          </Container>
        </ContentSection>
      </DetailPageLayout>
    );
  }

  return (
    <DetailPageLayout
      title={`${researcher.name} - Publications`}
      heroImage="/images/leeseunglab/people-hero.jpg"
    >
      <ContentSection background="white" padding="lg" style={{ paddingTop: 80, paddingBottom: 80 }}>
        <Container maxWidth="none" className="max-w-[900px]">
          {/* Researcher Info Header */}
          <div className="flex items-center gap-6 mb-10">
            {researcher.image ? (
              <img
                src={researcher.image}
                alt={researcher.name}
                className="w-20 h-24 rounded object-cover border border-gray-200"
              />
            ) : (
              <div className="w-20 h-24 bg-gray-200 rounded border border-gray-200" />
            )}
            <div>
              <h2 className="text-2xl font-bold text-black font-[Inter,Pretendard,sans-serif]">
                {researcher.name}
              </h2>
              <p className="text-sm text-gray-500 mt-1 font-[Inter,Pretendard,sans-serif]">
                {researcher.degree} · {researcher.affiliation}
              </p>
            </div>
          </div>

          {/* Publications List */}
          <h3 className="text-xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-3 font-[Inter,Pretendard,sans-serif]">
            Selected Publications
          </h3>

          {researcher.selectedPapers && researcher.selectedPapers.length > 0 ? (
            <ol className="space-y-5">
              {researcher.selectedPapers.map((paper, index) => (
                <li
                  key={index}
                  className="flex gap-4 text-base text-gray-800 leading-relaxed font-[Inter,Pretendard,sans-serif]"
                >
                  <span className="text-gray-400 font-bold flex-shrink-0">{index + 1}.</span>
                  <span>{paper}</span>
                </li>
              ))}
            </ol>
          ) : (
            <p className="text-gray-500 font-[Inter,Pretendard,sans-serif]">
              등록된 논문이 없습니다.
            </p>
          )}

          {/* Back Link */}
          <div className="mt-12">
            <Link
              to="/research-group"
              className="text-blue-600 hover:underline font-[Inter,Pretendard,sans-serif]"
            >
              ← 연구단 페이지로 돌아가기
            </Link>
          </div>
        </Container>
      </ContentSection>
    </DetailPageLayout>
  );
}
