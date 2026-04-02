import type { BigQuestion } from '@/types';
import type { Language } from '@/contexts/LanguageContext';

const bigQuestionsKO: BigQuestion[] = [
  {
    id: 1,
    question: '1단계: 기초 구축 및 핵심기술 확보 (2026~2028)',
    icon: 'Sprout',
    image: '/images/leeseunglab/11111111.png',
    content: [
      '',
      'Ai 기반 탄소중립 설계 인프라 구축 및 지역 협력 기반 조성',
    ],
    highlights: [''],
    bulletPoints: [
      'Ai: 탄소중립 건축 데이터베이스(DB) 구축 및 기초 구조 최적화 알고리즘 개발',
      '탄소중립: 저탄소 하이브리드 재료 및 구조 시스템 기초 성능 검증',
      '글로컬: 중부권 지자체 및 산업체와의 ACE 파트너십 체결 및 지역 현안 발굴',
      '성과 지표: 국내 특허 출원, 핵심 연구 인력 확보, 중부권 산학협력 거점 마련',
    ],
  },
  {
    id: 2,
    question: '2단계: 기술 고도화 및 실증 연구 (2029~2031)',
    icon: 'TreeDeciduous',
    image: '/images/leeseunglab/2222.png',
    content: [
      '',
      'Ai-탄소중립 기술 융합 및 중부권 테스트베드(Test-bed) 적용',
    ],
    highlights: [''],
    bulletPoints: [
      'Ai: 디지털 트윈 기반 실시간 탄소 배출 및 구조 안전 모니터링 시스템 고도화',
      '탄소중립: 대공간 목조 및 저탄소 구조물의 시공 자동화 및 에너지 효율 최적화 기술',
      '성과 지표: 국제 저명 학술지(JCR 상위) 논문 게재, 기술 이전(Tech-Transfer), 실증 모델 구축',
      '글로컬: 중부권 주요 공공건축물 및 산업단지에 ACE 기술 실증 적용',
    ],
  },
  {
    id: 3,
    question: '3단계: 기술 확산 및 글로벌 표준화 (2032~2034)',
    icon: 'Leaf',
    image: '/images/leeseunglab/icon-absorb.png',
    content: [
      '',
      '글로벌 표준 수립 및 지속 가능한 연구소 자립 체계 완성',
    ],
    highlights: [''],
    bulletPoints: [
      'Ai: 생성형 Ai 기반 탄소중립 건축 자동 설계 플랫폼 완성 및 상용화',
      '탄소중립: 글로벌 탄소 인증(LEED 등) 연계 ACE 기술 표준화 및 정책 제안',
      '글로컬: 글로벌 공동 연구 센터 운영 및 중부권 특화 탄소중립 건축 밸리 주도',
      '성과 지표: 글로벌 표준 특허 확보, 연구소 수익 모델(기술료 등) 자립화, 세계 10대 탄소중립 연구소 진입',
    ],
  },
  {
    id: 4,
    question: '4단계: 지속가능 운영 및 미래 비전 (2035~)',
    icon: 'Thermometer',
    image: '/images/leeseunglab/4444444.png',
    content: [
      '',
      '연구 성과의 지속가능한 운영 체계를 확립하고, Ai 기반 탄소중립 건축 기술의 미래 확장과 글로벌 리더십을 강화',
    ],
    highlights: [''],
    bulletPoints: [
      'Ai: 자율 학습 기반 Ai 설계 플랫폼 고도화 및 차세대 지능형 건축 시스템으로 확장',
      '탄소중립: 건축물 전 생애주기 통합 관리 시스템 구축 및 실시간 탄소중립 운영 기술 개발',
      '글로컬: 글로벌 협력 네트워크 확대 및 지역 기반 탄소중립 산업 생태계 지속 운영',
      '성과 지표: 스마트시티, 디지털 트윈, 에너지 자립 건축을 통합한 미래형 건축 기술 연구',
    ],
  },
  {
    id: 5,
    question: '[4세부] 목조 대공간 건축물 스마트 시공 및 유지관리 기술 개발',
    icon: 'Mountain',
    image: '/images/leeseunglab/icon-ecosystem.png',
    content: [
      '초대형 목조 대공간 건축물의 안정적인 운영을 위해서는 시공 단계부터 유지관리까지 고려한 통합적인 접근이 필요합니다.',
      '본 세부과제는 스마트 기술을 활용하여 시공 과정의 효울성과 신뢰성을 높이고, 건축물의 장기적인 성능 유지를 지원하는 관리 체계를 구축하는 것을 목표로 합니다.',
    ],
    highlights: [],
    bulletPoints: [],
  },
  {
    id: 6,
    question: '학술 공동 연구 기관',
    icon: 'CloudLightning',
    image: '/images/leeseunglab/icon-storm.jpg',
    content: [
      '본 연구는 대학과의 학술 공동 연구를 통해 초대형 목조 대공간 건축 기술의 연구 기반과 전문성을 강화합니다.',
      '다양한 전공과 연구 역량을 연계하여 구조, 설계, 환경, 시공 분야를 아우르는 통합적 연구 협력 체계를 구축합니다.',
    ],
    highlights: [],
    bulletPoints: [],
    participatingInstitutions: [
      { name: '서울대학교', logo: 'logo-university1.png', url: 'https://www.snu.ac.kr' },
      { name: '연세대학교', logo: 'logo-university2.png', url: 'https://www.yonsei.ac.kr' },
      { name: '한양대학교', logo: 'logo-university3.png', url: 'https://www.hanyang.ac.kr' },
      { name: '부산대학교', logo: 'logo-university4.png', url: 'https://www.pusan.ac.kr' },
      { name: '서울시립대학교', logo: 'logo-university5.png', url: 'https://www.uos.ac.kr' },
      { name: '전북대학교', logo: 'logo-university6.png', url: 'https://www.jbnu.ac.kr' },
      { name: '전남대학교', logo: 'logo-university7.png', url: 'https://www.jnu.ac.kr' },
      { name: '숭실대학교', logo: 'logo-university8.jpg', url: 'https://ssu.ac.kr' },
      { name: '한밭대학교', logo: 'logo-university9.png', url: 'https://www.hanbat.ac.kr' },
    ],
  },
  {
    id: 7,
    question: '연구·시험·실증 협력 기관',
    icon: 'FlaskConical',
    image: '/images/leeseunglab/icon-sprout.png',
    content: [
      '본 연구는 국가 연구기관 및 전문 연구소와의 협력을 통해 초대형 목조 대공간 건축 기술에 대한 시험, 평가, 실증 기반을 강화합니다.',
      '이를 통해 핵심 기술의 신뢰성과 공공적 활용 가능성을 확보하고, 국가 차원의 탄소중립 건설 기술 확산에 기여하고자 합니다.',
    ],
    highlights: [],
    bulletPoints: [],
    participatingInstitutions: [
      { name: '한국건설기술연구원', logo: 'logo-research1.png', url: 'https://www.kict.re.kr/' },
      { name: '국립산림과학원', logo: 'logo-research2.png', url: 'https://nifos.forest.go.kr/kfsweb/kfs/subIdx/Index.do?mn=UKFR' },
      { name: '한국건설생활경시험연구원', logo: 'logo-research3.png', url: 'https://www.kcl.re.kr/site/main/index001.do' },
      { name: '건설기술정책연구원', logo: 'logo-research4.png', url: 'https://www.ricon.re.kr/' },
      { name: '한국강구조학회', logo: 'logo-research5.jpg', url: 'https://kssc.or.kr/home/' },
    ],
  },
  {
    id: 8,
    question: '산업 연계 및 기술 확산 파트너',
    icon: 'Droplets',
    image: '/images/leeseunglab/icon-carbon.png',
    content: [
      '본 연구는 건설 및 엔지니어링 산업체와의 협력을 통해 초대형 목조 대공간 건축 기술의 현장 적용 가능성과 실현성을 검토합니다.',
      '이를 바탕으로 설계·시공·사업화 단계까지 연계되는 협력 체계를 구축하여 연구 성과의 실질적인 활용과 기술 확산을 추진합니다.',
    ],
    highlights: [],
    bulletPoints: [],
    participatingInstitutions: [
      { name: '포스코 이앤씨', logo: 'logo-institute1.png', url: 'https://www.example-institute1.org' },
      { name: '아리수 엔지니어링', logo: 'logo-institute2.jpg', url: 'https://www.example-institute2.org' },
      { name: '(주)하이멕', logo: 'logo-institute3.png', url: 'https://www.example-institute3.org' },
      { name: 'dA architecture group', logo: 'logo-institute4.jpg' },
      { name: '티아이구조기술사사무소', logo: 'logo-institute5.jpg', url: 'https://www.example-institute5.org' },
      { name: 'CS구조엔지니어링', logo: 'logo-institute6.png', url: 'https://www.example-institute5.org' },
    ],
  },
];

const bigQuestionsEN: BigQuestion[] = [
  {
    id: 1,
    question: 'Phase 1: Foundation Building & Core Technology Development (2026~2028)',
    icon: 'Sprout',
    image: '/images/leeseunglab/11111111.png',
    content: [
      '',
      'Building Ai-based carbon-neutral design infrastructure and establishing regional cooperation foundations',
    ],
    highlights: [''],
    bulletPoints: [
      'Ai: Building a carbon-neutral architecture database (DB) and developing basic structural optimization algorithms',
      'Carbon-neutral: Verifying basic performance of low-carbon hybrid materials and structural systems',
      'Glocal: Establishing ACE partnerships with central region municipalities and industries, identifying local issues',
      'Performance Indicators: Domestic patent applications, securing core research personnel, establishing industry-academia cooperation hub in the central region',
    ],
  },
  {
    id: 2,
    question: 'Phase 2: Technology Advancement & Demonstration Research (2029~2031)',
    icon: 'TreeDeciduous',
    image: '/images/leeseunglab/2222.png',
    content: [
      '',
      'Ai-carbon neutral technology convergence and central region test-bed application',
    ],
    highlights: [''],
    bulletPoints: [
      'Ai: Advancing digital twin-based real-time carbon emission and structural safety monitoring systems',
      'Carbon-neutral: Construction automation and energy efficiency optimization for large-span timber and low-carbon structures',
      'Performance Indicators: Publication in top-tier international journals (JCR), technology transfer, building demonstration models',
      'Glocal: Demonstration of ACE technologies in major public buildings and industrial complexes in the central region',
    ],
  },
  {
    id: 3,
    question: 'Phase 3: Technology Expansion & Global Standardization (2032~2034)',
    icon: 'Leaf',
    image: '/images/leeseunglab/icon-absorb.png',
    content: [
      '',
      'Establishing global standards and completing a sustainable self-sustaining research institute system',
    ],
    highlights: [''],
    bulletPoints: [
      'Ai: Completing and commercializing a generative Ai-based automatic carbon-neutral architecture design platform',
      'Carbon-neutral: Standardization of ACE technologies linked to global carbon certification (LEED, etc.) and policy proposals',
      'Glocal: Operating global joint research centers and leading a carbon-neutral architecture valley specialized in the central region',
      'Performance Indicators: Securing global standard patents, achieving self-sustaining revenue model (technology licensing fees, etc.), entering the world\'s top 10 carbon-neutral research institutes',
    ],
  },
  {
    id: 4,
    question: 'Phase 4: Sustainable Operation & Future Vision (2035~)',
    icon: 'Thermometer',
    image: '/images/leeseunglab/4444444.png',
    content: [
      '',
      'Establishing a sustainable operational framework for research outcomes, and strengthening future expansion and global leadership of Ai-based carbon-neutral architecture technology',
    ],
    highlights: [''],
    bulletPoints: [
      'Ai: Advancing self-learning Ai design platforms and expanding to next-generation intelligent building systems',
      'Carbon-neutral: Building integrated lifecycle management systems for buildings and developing real-time carbon-neutral operation technologies',
      'Glocal: Expanding global cooperation networks and sustaining regional carbon-neutral industrial ecosystems',
      'Performance Indicators: Research on future building technologies integrating smart cities, digital twins, and energy-independent architecture',
    ],
  },
  {
    id: 5,
    question: '[Subtask 4] Development of Smart Construction and Maintenance Technologies for Large-Span Timber Buildings',
    icon: 'Mountain',
    image: '/images/leeseunglab/icon-ecosystem.png',
    content: [
      'For the stable operation of ultra-large timber large-span buildings, an integrated approach considering everything from construction to maintenance is required.',
      'This subtask aims to enhance the efficiency and reliability of construction processes using smart technologies and to build a management system that supports long-term performance maintenance of buildings.',
    ],
    highlights: [],
    bulletPoints: [],
  },
  {
    id: 6,
    question: 'Academic Research Partners',
    icon: 'CloudLightning',
    image: '/images/leeseunglab/icon-storm.jpg',
    content: [
      'This research strengthens the research foundation and expertise in ultra-large timber large-span architecture technology through academic collaboration with universities.',
      'By linking diverse disciplines and research capabilities, we build an integrated research cooperation system spanning structural, design, environmental, and construction fields.',
    ],
    highlights: [],
    bulletPoints: [],
    participatingInstitutions: [
      { name: 'Seoul National University', logo: 'logo-university1.png', url: 'https://www.snu.ac.kr' },
      { name: 'Yonsei University', logo: 'logo-university2.png', url: 'https://www.yonsei.ac.kr' },
      { name: 'Hanyang University', logo: 'logo-university3.png', url: 'https://www.hanyang.ac.kr' },
      { name: 'Pusan National University', logo: 'logo-university4.png', url: 'https://www.pusan.ac.kr' },
      { name: 'University of Seoul', logo: 'logo-university5.png', url: 'https://www.uos.ac.kr' },
      { name: 'Jeonbuk National University', logo: 'logo-university6.png', url: 'https://www.jbnu.ac.kr' },
      { name: 'Chonnam National University', logo: 'logo-university7.png', url: 'https://www.jnu.ac.kr' },
      { name: 'Soongsil University', logo: 'logo-university8.jpg', url: 'https://ssu.ac.kr' },
      { name: 'Hanbat National University', logo: 'logo-university9.png', url: 'https://www.hanbat.ac.kr' },
    ],
  },
  {
    id: 7,
    question: 'Research, Testing & Demonstration Partners',
    icon: 'FlaskConical',
    image: '/images/leeseunglab/icon-sprout.png',
    content: [
      'This research strengthens the testing, evaluation, and demonstration foundation for ultra-large timber large-span architecture technology through cooperation with national research institutions and specialized institutes.',
      'Through this, we aim to secure the reliability and public applicability of core technologies and contribute to the national-level dissemination of carbon-neutral construction technologies.',
    ],
    highlights: [],
    bulletPoints: [],
    participatingInstitutions: [
      { name: 'Korea Institute of Civil Engineering and Building Technology', logo: 'logo-research1.png', url: 'https://www.kict.re.kr/' },
      { name: 'National Institute of Forest Science', logo: 'logo-research2.png', url: 'https://nifos.forest.go.kr/kfsweb/kfs/subIdx/Index.do?mn=UKFR' },
      { name: 'Korea Conformity Laboratories', logo: 'logo-research3.png', url: 'https://www.kcl.re.kr/site/main/index001.do' },
      { name: 'Research Institute of Construction Policy', logo: 'logo-research4.png', url: 'https://www.ricon.re.kr/' },
      { name: 'Korean Society of Steel Construction', logo: 'logo-research5.jpg', url: 'https://kssc.or.kr/home/' },
    ],
  },
  {
    id: 8,
    question: 'Industry Partners for Technology Transfer and Dissemination',
    icon: 'Droplets',
    image: '/images/leeseunglab/icon-carbon.png',
    content: [
      'This research reviews the on-site applicability and feasibility of ultra-large timber large-span architecture technology through cooperation with construction and engineering companies.',
      'Based on this, we build a cooperative system that links design, construction, and commercialization stages to promote practical utilization and technology dissemination of research outcomes.',
    ],
    highlights: [],
    bulletPoints: [],
    participatingInstitutions: [
      { name: 'POSCO E&C', logo: 'logo-institute1.png', url: 'https://www.example-institute1.org' },
      { name: 'Arisu Engineering', logo: 'logo-institute2.jpg', url: 'https://www.example-institute2.org' },
      { name: 'HiMEC Co., Ltd.', logo: 'logo-institute3.png', url: 'https://www.example-institute3.org' },
      { name: 'dA architecture group', logo: 'logo-institute4.jpg' },
      { name: 'TI Structural Engineers', logo: 'logo-institute5.jpg', url: 'https://www.example-institute5.org' },
      { name: 'CS Structural Engineering', logo: 'logo-institute6.png', url: 'https://www.example-institute5.org' },
    ],
  },
];

const bigQuestionsMap: Record<Language, BigQuestion[]> = {
  KO: bigQuestionsKO,
  EN: bigQuestionsEN,
};

export function getBigQuestions(language: Language): BigQuestion[] {
  return bigQuestionsMap[language];
}

// 기본 export (기존 호환용 - KO)
export const bigQuestions = bigQuestionsKO;
