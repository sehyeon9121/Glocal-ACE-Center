/**
 * 연구단 구성원 데이터
 * Division별 그룹 구조
 */

export interface ResearcherProfile {
  name: string;
  degree: string;
  affiliation: string;
  email: string;
  image?: string;
  website?: string;
  history: string[];
  introduction: string;
  selectedPapers?: string[];
}

export interface ResearchGroup {
  groupName: string;
  color: string;
  members: ResearcherProfile[];
}

export const researchGroups: ResearchGroup[] = [
  {
    groupName: 'A Division (AI-Based Carbon Neutral Design)',
    color: '#22C55E',
    members: [
      {
        name: '이승재',
        degree: '공학박사',
        affiliation: 'AI연구소',
        email: 'hong-a1@koreatech.ac.kr',
        website: 'https://example.com',
        history: [
          '한국기술교육대학교 건축공학과 졸업',
          '동경대학교 공학박사',
          'AI 기반 구조 최적화 연구',
        ],
        introduction:
          'AI 기반 탄소중립 건축 설계 및 구조 최적화 분야를 연구하고 있습니다.',
        selectedPapers: [
          'Existence and uniqueness of a weak solution of an extensible beam on a moving domain. Ha, J., Kim, D., & Shon, S. Journal of the Korean Mathematical Society, 62(2), 327-344 (2025).',
          'AI-based structural optimization for carbon reduction in building materials. Lee, S., & Kim, T. Building and Environment, 150, 112-125 (2024).',
          'Performance-based seismic design of timber-concrete composite structures. Park, S., & Kwak, B. Engineering Structures, 210, 110-120 (2024).',
        ],
      },
      {
        name: '곽병창',
        degree: '공학박사',
        affiliation: '구조공학연구실',
        email: 'kimcs-a2@koreatech.ac.kr',
        website: 'https://example.com',
        history: [
          '서울대학교 건축공학과 졸업',
          '한국기술교육대학교 공학박사',
          '내진 구조 설계 및 성능 평가 연구',
        ],
        introduction:
          '내진 구조 설계 및 탄소저감 건축 시스템 분야를 연구하고 있습니다.',
        selectedPapers: [
          'Existence and uniqueness of a weak solution of an extensible beam on a moving domain. Ha, J., Kim, D., & Shon, S. Journal of the Korean Mathematical Society, 62(2), 327-344 (2025).',
          'AI-based structural optimization for carbon reduction in building materials. Lee, S., & Kim, T. Building and Environment, 150, 112-125 (2024).',
          'Performance-based seismic design of timber-concrete composite structures. Park, S., & Kwak, B. Engineering Structures, 210, 110-120 (2024).',
        ],
      },
    ],
  },
  {
    groupName: 'C- Division (Carbon Reduction & Decarbonization Systems)',
    color: '#3B82F6',
    members: [
      {
        name: '홍길동',
        degree: '공학박사',
        affiliation: 'AI연구소',
        email: 'hong-c1@koreatech.ac.kr',
        website: 'https://example.com',
        history: [
          '한국기술교육대학교 건축공학과 졸업',
          '동경대학교 공학박사',
          'AI 기반 구조 최적화 연구',
        ],
        introduction:
          'AI 기반 탄소중립 건축 설계 및 구조 최적화 분야를 연구하고 있습니다.',
        selectedPapers: [
          'Existence and uniqueness of a weak solution of an extensible beam on a moving domain. Ha, J., Kim, D., & Shon, S. Journal of the Korean Mathematical Society, 62(2), 327-344 (2025).',
          'AI-based structural optimization for carbon reduction in building materials. Lee, S., & Kim, T. Building and Environment, 150, 112-125 (2024).',
          'Performance-based seismic design of timber-concrete composite structures. Park, S., & Kwak, B. Engineering Structures, 210, 110-120 (2024).',
        ],
      },
      {
        name: '김철수',
        degree: '공학박사',
        affiliation: '구조공학연구실',
        email: 'kimcs-c2@koreatech.ac.kr',
        website: 'https://example.com',
        history: [
          '서울대학교 건축공학과 졸업',
          '한국기술교육대학교 공학박사',
          '내진 구조 설계 및 성능 평가 연구',
        ],
        introduction:
          '내진 구조 설계 및 탄소저감 건축 시스템 분야를 연구하고 있습니다.',
        selectedPapers: [
          'Existence and uniqueness of a weak solution of an extensible beam on a moving domain. Ha, J., Kim, D., & Shon, S. Journal of the Korean Mathematical Society, 62(2), 327-344 (2025).',
          'AI-based structural optimization for carbon reduction in building materials. Lee, S., & Kim, T. Building and Environment, 150, 112-125 (2024).',
          'Performance-based seismic design of timber-concrete composite structures. Park, S., & Kwak, B. Engineering Structures, 210, 110-120 (2024).',
        ],
      },
    ],
  },
  {
    groupName: 'E+ Division (Energy Positive & Sustainable Systems)',
    color: '#F97316',
    members: [
      {
        name: '홍길동',
        degree: '공학박사',
        affiliation: 'AI연구소',
        email: 'hong-e1@koreatech.ac.kr',
        website: 'https://example.com',
        history: [
          '한국기술교육대학교 건축공학과 졸업',
          '동경대학교 공학박사',
          'AI 기반 구조 최적화 연구',
        ],
        introduction:
          'AI 기반 탄소중립 건축 설계 및 구조 최적화 분야를 연구하고 있습니다.',
        selectedPapers: [
          'Existence and uniqueness of a weak solution of an extensible beam on a moving domain. Ha, J., Kim, D., & Shon, S. Journal of the Korean Mathematical Society, 62(2), 327-344 (2025).',
          'AI-based structural optimization for carbon reduction in building materials. Lee, S., & Kim, T. Building and Environment, 150, 112-125 (2024).',
          'Performance-based seismic design of timber-concrete composite structures. Park, S., & Kwak, B. Engineering Structures, 210, 110-120 (2024).',
        ],
      },
      {
        name: '김철수',
        degree: '공학박사',
        affiliation: '구조공학연구실',
        email: 'kimcs-e2@koreatech.ac.kr',
        website: 'https://example.com',
        history: [
          '서울대학교 건축공학과 졸업',
          '한국기술교육대학교 공학박사',
          '내진 구조 설계 및 성능 평가 연구',
        ],
        introduction:
          '내진 구조 설계 및 탄소저감 건축 시스템 분야를 연구하고 있습니다.',
        selectedPapers: [
          'Existence and uniqueness of a weak solution of an extensible beam on a moving domain. Ha, J., Kim, D., & Shon, S. Journal of the Korean Mathematical Society, 62(2), 327-344 (2025).',
          'AI-based structural optimization for carbon reduction in building materials. Lee, S., & Kim, T. Building and Environment, 150, 112-125 (2024).',
          'Performance-based seismic design of timber-concrete composite structures. Park, S., & Kwak, B. Engineering Structures, 210, 110-120 (2024).',
        ],
      },
    ],
  },
];
