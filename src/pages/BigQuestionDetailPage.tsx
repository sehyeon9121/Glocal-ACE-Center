import { useParams, Navigate, Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PageLayout } from '@/components/templates/PageLayout';
import { ContentSection } from '@/components/templates/ContentSection';
import { Container } from '@/components/atoms/Container';
import { Link } from '@/components/atoms/Link';
import { Icon } from '@/components/atoms/Icon';
import { getBigQuestions } from '@/data/bigQuestions';
import { useLanguage } from '@/contexts/LanguageContext';

export function BigQuestionDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { t, language } = useLanguage();
  const bigQuestions = getBigQuestions(language);

  const question = bigQuestions.find(q => q.id === Number(id));

  if (!question) {
    return <Navigate to="/" replace />;
  }

  // Get adjacent questions for navigation
  const currentIndex = bigQuestions.findIndex(q => q.id === question.id);
  const prevQuestion = currentIndex > 0 ? bigQuestions[currentIndex - 1] : null;
  const nextQuestion = currentIndex < bigQuestions.length - 1 ? bigQuestions[currentIndex + 1] : null;

  return (
    <PageLayout>
      {/* Back Link - 메인 페이지로 이동 */}
      <ContentSection background="white" padding="sm" className="pt-24">
        <RouterLink
          to="/"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-[var(--color-primary)] transition-colors font-[Inter,Pretendard,sans-serif]"
        >
          <Icon name="ArrowLeft" size={16} />
          {t('bigQuestions.backTo')}
        </RouterLink>
      </ContentSection>

      {/* Main Content */}
      <ContentSection background="white" padding="lg">
        <Container maxWidth="none" className="max-w-[900px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* 제목 */}
            <h1 className="text-3xl font-extrabold text-gray-900 mb-4 font-[Inter,Pretendard,sans-serif]">
              {question.question}
            </h1>

            <hr className="border-gray-200" style={{ marginBottom: 14 }} />

            {/* 핵심 연구 내용 */}
            <h2 className="text-2xl font-bold text-[#00380A] mb-6 font-[Inter,Pretendard,sans-serif]">
              {t('bigQuestions.goal')}
            </h2>

            {/* 연구 설명 */}
            <div className="space-y-5">
              {question.content.map((paragraph, idx) => (
                <p
                  key={idx}
                  className="text-base text-gray-700 leading-relaxed font-[Inter,Pretendard,sans-serif]"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* 핵심 포인트 */}
            {question.bulletPoints && question.bulletPoints.length > 0 && (
              <div style={{ marginTop: 18 }}>
                <h3 className="text-xl font-bold text-gray-800 mb-4 font-[Inter,Pretendard,sans-serif]">
                  {t('bigQuestions.keyResearch')}
                </h3>
                <ul className="space-y-3">
                  {question.bulletPoints.map((point, idx) => (
                    <li
                      key={idx}
                      className="flex gap-3 text-base text-gray-700 font-[Inter,Pretendard,sans-serif]"
                    >
                      <span className="text-[#00380A] font-bold flex-shrink-0">•</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* 하이라이트 인용 */}
            {question.highlights && question.highlights.length > 0 && (
              <div className="mt-10 p-6 bg-gray-50 rounded-xl border-l-4 border-[#00380A]">
                {question.highlights.map((highlight, idx) => (
                  <p
                    key={idx}
                    className="text-base text-gray-800 leading-relaxed italic font-[Inter,Pretendard,sans-serif]"
                  >
                    {highlight}
                  </p>
                ))}
              </div>
            )}

            {/* 참여 기관 */}
            {question.participatingInstitutions && question.participatingInstitutions.length > 0 && (
              <div className="mt-12">
                <h3 className="text-xl font-bold text-gray-800 mb-6 font-[Inter,Pretendard,sans-serif]">
                  {t('bigQuestions.participants')}
                </h3>
                <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
                  {question.participatingInstitutions.map((inst, idx) => {
                    const card = (
                      <div
                        key={idx}
                        className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 flex flex-col items-center justify-center aspect-square hover:shadow-md transition-shadow"
                      >
                        <img
                          src={`/images/leeseunglab/${inst.logo}`}
                          alt={inst.name}
                          className="max-w-full max-h-[55%] object-contain mb-2"
                        />
                        <span className="text-xs text-gray-600 text-center line-clamp-2 font-[Inter,Pretendard,sans-serif]">
                          {inst.name}
                        </span>
                      </div>
                    );
                    return inst.url ? (
                      <a key={idx} href={inst.url} target="_blank" rel="noopener noreferrer">
                        {card}
                      </a>
                    ) : (
                      <div key={idx}>{card}</div>
                    );
                  })}
                </div>
              </div>
            )}
          </motion.div>
        </Container>
      </ContentSection>

      {/* Navigation */}
      <ContentSection background="light" padding="lg" style={{ marginTop: 20 }}>
        <Container maxWidth="none" className="max-w-[900px]">
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            {prevQuestion ? (
              <Link
                href={`/big-questions/${prevQuestion.id}`}
                variant="muted"
                className="flex items-center gap-2 hover:text-[var(--color-primary)]"
              >
                <Icon name="ArrowLeft" size={16} />
                <span className="line-clamp-1">{prevQuestion.question}</span>
              </Link>
            ) : (
              <div />
            )}

            {nextQuestion && (
              <Link
                href={`/big-questions/${nextQuestion.id}`}
                variant="muted"
                className="flex items-center gap-2 hover:text-[var(--color-primary)] text-right"
              >
                <span className="line-clamp-1">{nextQuestion.question}</span>
                <Icon name="ArrowRight" size={16} />
              </Link>
            )}
          </div>
        </Container>
      </ContentSection>
    </PageLayout>
  );
}
