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
        name: 'Lee, Seung-Jae',
        degree: 'Ph.D., The University of Tokyo',
        affiliation: 'Professor, Korea University of Technology and Education',
        email: 'hong-a1@koreatech.ac.kr',
        website: 'https://example.com',
        image: '/images/leeseunglab/Lee.jpg',
        history: [
          '연성 막 개폐 구동장치 및 제어시스템 개발',
          '스마트센서 및 드론 기반 구조물 점검 기술',
          '고층 모듈러 구조시스템 접합부 해석 및 실험',
          '비정형 구조물 태양광 최적배치 프로그램 개발',
          '친환경 재생목재 내진구조 시스템 개발',
        ],
        introduction:
          'AI 기반 최적화 설계와 목구조 구조시스템, 친환경 구조설계를 중심으로 지속가능 건축기술을 연구합니다.',
        selectedPapers: [
          'Existence and uniqueness of a weak solution of an extensible beam on a moving domain. Ha, J., Kim, D., & Shon, S. Journal of the Korean Mathematical Society, 62(2), 327-344 (2025).',
          'AI-based structural optimization for carbon reduction in building materials. Lee, S., & Kim, T. Building and Environment, 150, 112-125 (2024).',
          'Performance-based seismic design of timber-concrete composite structures. Park, S., & Kwak, B. Engineering Structures, 210, 110-120 (2024).',
        ],
      },
      {
        name: 'Lee, Jin-Gang',
        degree: 'Ph.D., Seoul National University',
        affiliation: 'Assistant Professor, Korea University of Technology and Education',
        email: 'kimcs-a2@koreatech.ac.kr',
        website: 'https://example.com',
        
        image: '/images/leeseunglab/jingang.png',
        history: [
          
        ],
        introduction:
          'ddddd.',
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
        name: 'Bae. Jin Woo',
        degree: 'Ph.D., Seoul National University',
        affiliation: 'Associate Professor, Korea University of Technology and Education',
        email: 'hong-c1@koreatech.ac.kr',
        website: 'https://example.com',
        image: '/images/leeseunglab/Bae Jin.png',
        history: [
          
        ],
        introduction:
          'Professor Jin Woo Bae is an Associate Professor in the School of Energy, Materials and Chemical Engineering at the Korea University of Technology and Education (KOREATECH). He earned his Ph.D. from Seoul National University and pursued postdoctoral research at Kyung Hee University as well as the University of California, Berkeley. Before entering academia, he worked as a Senior Engineer at Samsung Display and LG Innotek. He focuses on smart polymers and hybrid materials to drive innovations in next‑generation energy and wearable electronics. His research advances fundamental science while delivering practical solutions with real‑world impact, bridging academic excellence and industrial relevance.',
        selectedPapers: [
          'Existence and uniqueness of a weak solution of an extensible beam on a moving domain. Ha, J., Kim, D., & Shon, S. Journal of the Korean Mathematical Society, 62(2), 327-344 (2025).',
          'AI-based structural optimization for carbon reduction in building materials. Lee, S., & Kim, T. Building and Environment, 150, 112-125 (2024).',
          'Performance-based seismic design of timber-concrete composite structures. Park, S., & Kwak, B. Engineering Structures, 210, 110-120 (2024).',
        ],
      },
      {
        name: '김태용',
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
        name: 'Kwag, Byung-Chang',
        degree: 'University of Colorado, Boulder',
        affiliation: 'Assistant Professor, Korea University of Technology and Education',
        email: 'hong-e1@koreatech.ac.kr',
        website: 'https://example.com',
        image: '/images/leeseunglab/bckwag.png',
        history: [
         
        ],
        introduction:
          'Professor Byung Chang Kwag received his M.S. and Ph.D. in Building Systems Engineering from the University of Colorado Boulder, USA. His research focuses on net-zero energy buildings, high performing buildings, and AI-based smart housing systems, with an emphasis on integrating energy efficiency, advanced control technologies, and user-centered performance evaluation. He has conducted both academic and applied research in building energy systems and housing technologies through his experience at LG Electronics and the Korea Land and Housing Research Institute. His recent work explores AI-driven energy management, human-centered smart home systems, and the development of next-generation residential infrastructures that support autonomous service robots.',
        selectedPapers: [
          'Existence and uniqueness of a weak solution of an extensible beam on a moving domain. Ha, J., Kim, D., & Shon, S. Journal of the Korean Mathematical Society, 62(2), 327-344 (2025).',
          'AI-based structural optimization for carbon reduction in building materials. Lee, S., & Kim, T. Building and Environment, 150, 112-125 (2024).',
          'Performance-based seismic design of timber-concrete composite structures. Park, S., & Kwak, B. Engineering Structures, 210, 110-120 (2024).',
        ],
      },
      {
        name: '박수완',
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
