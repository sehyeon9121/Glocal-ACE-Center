import { Link } from 'react-router-dom';
import { DetailPageLayout } from '@/components/templates/DetailPageLayout';
import { ContentSection } from '@/components/templates/ContentSection';
import { Container } from '@/components/atoms/Container';
import { useLanguage } from '@/contexts/LanguageContext';

export function GreetingPage() {
  const { t } = useLanguage();

  const renderCardDescription = (n: number) => {
    const desc = t(`greeting.card${n}.description`);
    if (n === 2) {
      const superscripts: [string, string][] = [['Carbon', '-'], ['Energy', '+']];
      const regex = new RegExp(`(${superscripts.map(([t]) => t).join('|')})`, 'gi');
      const parts = desc.split(regex);
      if (parts.length > 1) {
        return (
          <>
            {parts.map((part, i) => {
              const match = superscripts.find(([term]) => term.toLowerCase() === part.toLowerCase());
              return match ? <span key={i}>{match[0]}<sup>{match[1]}</sup></span> : part;
            })}
          </>
        );
      }
    }
    return desc;
  };

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

          {/* 하단: ACE Cards 섹션 */}
          <div style={{ marginTop: 20 }}>
            <p className="text-2xl font-bold text-gray-800 font-[Inter,Pretendard,sans-serif]" style={{ marginBottom: 20 }}>
              {t('greeting.promiseTitle')}
            </p>
            <hr className="border-gray-300" style={{ marginBottom: 20 }} />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {([1, 2, 3] as const).map((n) => (
                <div
                  key={n}
                  className="rounded-lg border border-gray-200 bg-gray-50 text-center hover:shadow-lg transition-shadow duration-200"
                  style={{ padding: '12px 16px' }}
                >
                  <h3 className="text-xl font-extrabold text-[#00380A] mb-3 font-[Inter,Pretendard,sans-serif]">
                    {t(`greeting.card${n}.title`)}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed font-[Inter,Pretendard,sans-serif] text-left">
                    {renderCardDescription(n)}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 text-right text-gray-800 font-semibold font-[Inter,Pretendard,sans-serif]" style={{ marginBottom: 20 }}>
            <p>{t('greeting.signature')}</p>
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