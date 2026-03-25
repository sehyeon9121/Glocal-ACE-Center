import { Link } from 'react-router-dom';
import { DetailPageLayout } from '@/components/templates/DetailPageLayout';
import { ContentSection } from '@/components/templates/ContentSection';
import { Container } from '@/components/atoms/Container';
import { useLanguage } from '@/contexts/LanguageContext';

export function GreetingPage() {
  const { t } = useLanguage();

  return (
    <DetailPageLayout
      title={t('greeting.pageTitle')}
      heroImage="/images/leeseunglab/people-hero.png"
    >
      <ContentSection background="white" padding="lg" style={{ paddingTop: 80, paddingBottom: 80 }}>
        <Container maxWidth="none" className="max-w-[900px]">
          {/* 상단: 인삿말 섹션 */}
          <h2 className="text-3xl font-bold text-gray-900 font-[Inter,Pretendard,sans-serif]" style={{ marginBottom: 20 }}>
            {t('greeting.title')}
          </h2>

          <div className="space-y-6 text-base text-gray-700 leading-relaxed font-[Inter,Pretendard,sans-serif]">
            <p>{t('greeting.paragraph1')}</p>
            <p>{t('greeting.paragraph2')}</p>
            <p>{t('greeting.paragraph3')}</p>
          </div>

          <div className="mt-8 text-right text-gray-800 font-semibold font-[Inter,Pretendard,sans-serif]" style={{ marginBottom: 20 }}>
            <p>{t('greeting.signature')}</p>
          </div>

          {/* 하단: ACE Cards 섹션 */}
          <div>
            <p className="text-2xl font-bold text-gray-800 font-[Inter,Pretendard,sans-serif]" style={{ marginBottom: 20 }}>
              안전하고 지속 가능한 미래를 위한 세 가지 약속을 드립니다.
            </p>
            <hr className="border-gray-300" style={{ marginBottom: 20 }} />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {([1, 2, 3] as const).map((n) => (
                <div
                  key={n}
                  className="rounded-lg border border-gray-200 bg-gray-50 px-6 text-center hover:shadow-lg transition-shadow duration-200"
                  style={{ paddingTop: 20, paddingBottom: 20 }}
                >
                  <h3 className="text-xl font-extrabold text-[#00380A] mb-3 font-[Inter,Pretendard,sans-serif]">
                    {t(`greeting.card${n}.title`)}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed font-[Inter,Pretendard,sans-serif]">
                    {t(`greeting.card${n}.description`)}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 돌아가기 버튼 */}
          <div style={{ marginTop: 20 }}>
            <Link
              to="/"
              className="text-blue-600 hover:underline font-[Inter,Pretendard,sans-serif]"
            >
              ← {t('greeting.backToHome')}
            </Link>
          </div>
        </Container>
      </ContentSection>
    </DetailPageLayout>
  );
}