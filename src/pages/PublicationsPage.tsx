import { useMemo, useState } from 'react';
import { DetailPageLayout } from '@/components/templates/DetailPageLayout';
import { ContentSection } from '@/components/templates/ContentSection';
import { Container } from '@/components/atoms/Container';
import { researchGroups } from '@/data/researchGroupData';
import type { PaperEntry } from '@/data/researchGroupData';
import { useLanguage } from '@/contexts/LanguageContext';

const ITEMS_PER_PAGE = 20;

/** 확장된 논문 타입: 연구원 이름과 연도 포함 */
interface ExtendedPaper extends PaperEntry {
  researcherName: string;
  year: number;
}

/** journal 문자열에서 연도를 추출 (예: "(2025," → 2025) */
function extractYear(journal: string): number {
  const match = journal.match(/\((\d{4})/);
  return match ? parseInt(match[1], 10) : 0;
}

export function PublicationsPage() {
  const { t } = useLanguage();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedResearcher, setSelectedResearcher] = useState('All');
  const [selectedYear, setSelectedYear] = useState('All');

  // 모든 연구원의 selectedPapers를 모으고, researcherName·year 태깅 후 중복 제거
  const allPapers = useMemo(() => {
    const tagged: ExtendedPaper[] = researchGroups
      .flatMap((group) => group.members)
      .flatMap((member) =>
        (member.selectedPapers ?? []).map((paper) => ({
          ...paper,
          researcherName: member.name,
          year: extractYear(paper.journal),
        }))
      );

    // title 기준 중복 제거
    const seen = new Set<string>();
    const unique: ExtendedPaper[] = [];
    for (const paper of tagged) {
      if (!seen.has(paper.title)) {
        seen.add(paper.title);
        unique.push(paper);
      }
    }

    return unique.sort((a, b) => b.year - a.year);
  }, []);

  // 필터 옵션 목록 추출
  const researcherOptions = useMemo(() => {
    const names = [...new Set(allPapers.map((p) => p.researcherName))];
    return names.sort();
  }, [allPapers]);

  const yearOptions = useMemo(() => {
    const years = [...new Set(allPapers.map((p) => p.year).filter((y) => y > 0))];
    return years.sort((a, b) => b - a);
  }, [allPapers]);

  // 검색어 + 연구원 + 연도 필터 적용
  const filteredPapers = useMemo(() => {
    const term = searchTerm.toLowerCase();
    return allPapers.filter((paper) => {
      const matchesSearch =
        !term ||
        paper.title.toLowerCase().includes(term) ||
        paper.authors.toLowerCase().includes(term);
      const matchesResearcher =
        selectedResearcher === 'All' || paper.researcherName === selectedResearcher;
      const matchesYear =
        selectedYear === 'All' || paper.year === parseInt(selectedYear, 10);
      return matchesSearch && matchesResearcher && matchesYear;
    });
  }, [allPapers, searchTerm, selectedResearcher, selectedYear]);

  // 필터 변경 시 페이지 1로 리셋
  const totalPages = Math.ceil(filteredPapers.length / ITEMS_PER_PAGE);
  const safePage = Math.min(currentPage, totalPages || 1);
  const startIndex = (safePage - 1) * ITEMS_PER_PAGE;
  const currentPapers = filteredPapers.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const goToPage = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  const handleResearcherChange = (value: string) => {
    setSelectedResearcher(value);
    setCurrentPage(1);
  };

  const handleYearChange = (value: string) => {
    setSelectedYear(value);
    setCurrentPage(1);
  };

  return (
    <DetailPageLayout
      title={t('publications.title')}
      subtitle={t('publications.subtitle')}
      heroImage="/images/leeseunglab/people-hero.png"
    >
      <div style={{ height: 60 }} />
      <ContentSection background="white" padding="lg">
        <Container maxWidth="none" className="max-w-[920px]">
          {/* Search & Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-16 p-6 bg-gray-50 rounded-2xl border border-gray-200 shadow-sm">
            <input
              type="text"
              placeholder="Search by title or author..."
              value={searchTerm}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="flex-1 px-5 py-6 rounded-xl border border-gray-300 text-base focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all font-[Inter,Pretendard,sans-serif]"
            />
            <select
              value={selectedResearcher}
              onChange={(e) => handleResearcherChange(e.target.value)}
              className="px-5 py-3.5 rounded-xl border border-gray-300 text-base min-w-[200px] bg-white focus:ring-2 focus:ring-blue-500 outline-none font-[Inter,Pretendard,sans-serif]"
            >
              <option value="All">All Researchers</option>
              {researcherOptions.map((name) => (
                <option key={name} value={name}>
                  {name}
                </option>
              ))}
            </select>
            <select
              value={selectedYear}
              onChange={(e) => handleYearChange(e.target.value)}
              className="px-5 py-3.5 rounded-xl border border-gray-300 text-base min-w-[150px] bg-white focus:ring-2 focus:ring-blue-500 outline-none font-[Inter,Pretendard,sans-serif]"
            >
              <option value="All">All Years</option>
              {yearOptions.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>

          <h3 className="text-4xl font-extrabold text-gray-800 mt-12 mb-2 font-[Inter,Pretendard,sans-serif]">
            Publication
          </h3>
          <hr className="border-gray-300 mb-8" />

          {currentPapers.length > 0 ? (
            <>
              <ul className="divide-y divide-gray-200">
                {currentPapers.map((paper, i) => (
                  <li key={i} className="py-6 flex gap-4">
                    <span className="text-gray-400 font-bold flex-shrink-0 font-[Inter,Pretendard,sans-serif]">
                      {startIndex + i + 1}.
                    </span>
                    <div>
                      <p className="text-lg font-bold text-gray-900 mb-2 font-[Inter,Pretendard,sans-serif]">
                        {paper.title}
                      </p>
                      <p className="text-base text-gray-600 font-[Inter,Pretendard,sans-serif]">
                        {paper.authors}
                      </p>
                      <p className="text-base text-gray-600 italic font-[Inter,Pretendard,sans-serif]">
                        {paper.journal}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center gap-2 mt-10">
                  <button
                    type="button"
                    onClick={() => goToPage(safePage - 1)}
                    disabled={safePage === 1}
                    className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 disabled:text-gray-300 disabled:cursor-not-allowed font-[Inter,Pretendard,sans-serif]"
                  >
                    ← Prev
                  </button>

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      type="button"
                      onClick={() => goToPage(page)}
                      className={`w-9 h-9 rounded text-sm font-semibold transition-colors font-[Inter,Pretendard,sans-serif] ${
                        page === safePage
                          ? 'bg-gray-200 text-black'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      {page}
                    </button>
                  ))}

                  <button
                    type="button"
                    onClick={() => goToPage(safePage + 1)}
                    disabled={safePage === totalPages}
                    className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 disabled:text-gray-300 disabled:cursor-not-allowed font-[Inter,Pretendard,sans-serif]"
                  >
                    Next →
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-12 text-gray-500 font-[Inter,Pretendard,sans-serif]">
              검색 결과가 없습니다.
            </div>
          )}
          <div style={{ height: 60 }} />
        </Container>
      </ContentSection>
    </DetailPageLayout>
  );
}
