import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';

export type Language = 'EN' | 'KO';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// 번역 데이터
const translations: Record<Language, Record<string, string>> = {
  EN: {
    // Navigation
    'nav.home': 'Home',
    'nav.research': 'Research',
    'nav.publications': 'Publications',
    'nav.people': 'People',
    'nav.news': 'News',
    'nav.ourTeam': 'Organization Chart',
    'nav.researchGroup': 'Research Group',
    'nav.joinUs': 'ACT INSTITUTE',
    'nav.newsUpdates': 'News & Updates',
    'nav.climateSnacks': 'Climate Snacks',

    // Home Page - Hero
    'home.hero.subtitle': 'Glocal Neutral ACE Center',
    'home.hero.title': 'Ai-Based Neutral Glocal ACE Center',
    'home.hero.description': 'Opening the future of carbon neutrality with Ai, a glocal innovation hub connecting the central region to the world.',
    // Home Page - About
    'home.about.title': 'Glocal ACE Center',
    'home.about.description': 'Welcome to the Ai-based Neutral Glocal ACE Research Center. Our institute conducts research on sustainable architecture and future technology innovation based on Ai technology and carbon-neutral solutions. Starting from local foundations, we aim to become a glocal research hub that expands toward global standards.',
    'home.research.title': 'Research Topics',
    'home.research.subtitle': 'Research for the Future',
    'home.bigQuestions.title': 'Standardization and Globalization of Glocal Carbon-Neutral Architecture through Ai Technology',
    'home.bigQuestions.subtitle': 'Mid-to-Long-Term Research Roadmap',
    'home.bigQuestions.q1': 'Phase 1: Foundation Building & Core Technology Development (2026~2028)',
    'home.bigQuestions.q2': 'Phase 2: Technology Advancement & Demonstration Research (2029~2031)',
    'home.bigQuestions.q3': 'Phase 3: Technology Expansion & Global Standardization (2032~2034)',
    'home.bigQuestions.q4': 'Phase 4: Sustainable Operation & Future Vision (2035~)',
    'home.bigQuestions.q5': '[Subtask 4] Development of Smart Construction and Maintenance Technologies for Large-Span Timber Buildings',
    'home.bigQuestions.q6': 'Academic Research Partners',
    'home.bigQuestions.q7': 'Research, Testing & Demonstration Partners',
    'home.bigQuestions.q8': 'Industry Partners for Technology Transfer and Dissemination',

    // Greeting Page
    'greeting.pageTitle': 'Greeting',
    'greeting.title': 'Welcome to Glocal ACE Center',
    'greeting.paragraph1': 'We sincerely welcome you to the Ai-based Glocal Carbon-Neutral ACE Research Center website.',
    'greeting.paragraph2': 'Today, the world stands at a great technological inflection point driven by the shared challenge of climate crisis response and artificial intelligence (Ai). In response to these demands, our institute inherits the values of safety and structural engineering accumulated by the former Disaster Prevention and Safety Research Institute, and has been newly launched by expanding them with Ai technology and carbon-neutral solutions.',
    'greeting.paragraph3': 'The name ACE stands for Ai (Artificial Intelligence), Carbon-neutral, and Excellence. Based on the strong industrial infrastructure of the central region, we aim to build a locally-rooted innovation model (Local) and elevate it into globally recognized standard technologies (Global), serving as a frontline base for glocal research.',
    'greeting.signature': 'Glocal ACE Center',
    'greeting.backToHome': 'Back to Home',
    'greeting.readMore': 'Read More',
    'greeting.promiseTitle': 'We make three promises for a safe and sustainable future.',
    'greeting.card1.title': 'First',
    'greeting.card1.description': 'We will present a new paradigm for architecture and industry through Ai-based intelligent technologies.',
    'greeting.card2.title': 'Second',
    'greeting.card2.description': 'We will dedicate ourselves to innovative system research that achieves practical carbon reduction.',
    'greeting.card3.title': 'Third',
    'greeting.card3.description': 'We will grow together with the local community and nurture professionals with global competitiveness.',

    // Research Themes
    'research.terrestrialCarbon.title': 'Advanced Ai: Leading Intelligent Design and Structural Optimization Based on Artificial Intelligence',
    'research.terrestrialCarbon.description': 'We conduct research to intelligently improve the architectural design process and optimize structural efficiency and performance using artificial intelligence technologies.',
    'research.naturalClimate.title': 'Carbon-neutral Excellence: Low-Carbon Systems and Energy Innovation for Carbon Neutrality',
    'research.naturalClimate.description': 'We conduct research to achieve carbon neutrality through low-carbon systems that minimize carbon emissions and energy efficiency improvement technologies.',
    'research.smartEnergy.title': 'Expandable Glocalism: Scalability in Establishing Global Standards Based on Regional Industrial Infrastructure',
    'research.smartEnergy.description': 'We conduct research to expand research outcomes based on regional industrial infrastructure and establish global-level technologies and standards.',

    // Research Page
    'research.title': 'Research',
    'research.subtitle': 'We conduct research to understand how terrestrial ecosystems respond to global change',
    'research.intro': 'The Glocal ACE Center advances knowledge about ecological dynamics impacting terrestrial carbon storage in a climate change context. We combine experimental data synthesis with modeling approaches to reduce key uncertainties about the terrestrial carbon sink.',
    'research.themesTitle': 'Research Themes',
    'research.bigQuestionsTitle': 'Key Questions',
    'research.bigQuestionsSubtitle': 'The fundamental questions driving our research',

    // Big Questions Page
    'bigQuestions.title': 'Mid-to-Long-Term Research Roadmap',
    'bigQuestions.subtitle': 'Structure of research projects within a national government-funded research program.',
    'bigQuestions.intro': 'Our research is driven by fundamental questions regarding the feasibility of 200-meter-class large-span timber buildings and the future of carbon-neutral construction technologies. These questions define an integrated research direction encompassing structural systems, modular design, environmental and energy performance, as well as construction and maintenance technologies.',
    'bigQuestions.backTo': 'Back to Home',
    'bigQuestions.goal': 'Goal',
    'bigQuestions.keyResearch': 'Key Research Areas',
    'bigQuestions.participants': 'Participating Institutions',

    // Publications Page
    'publications.title': 'Publications',
    'publications.subtitle': 'Explore our published research and scientific contributions',

    // People Page
    'people.title': 'Lab Members',
    'people.subtitle': 'Meet our team of researchers and students',
    'people.principalInvestigator': 'Principal Investigator',
    'people.phdStudents': 'PhD Students',
    'people.masterStudents': 'Master Students',
    'people.researchAssistants': 'Research Assistants',

    // Team Page
    'team.title': 'Introducing GLOCAL ACE CENTER',
    'team.team': 'Team',
    'team.alumni': 'Undergraduate Student',

    // Research Group Page
    'researchGroup.pageTitle': 'Research Group',
    'researchGroup.sectionTitle': 'Glocal ACE Center',

    // Join Us Page
    'joinUs.title': 'GLOCAL ACE CENTER',
    'joinUs.subtitle': 'The Attitude of GLOCAL ACE CENTER',
    'joinUs.values': 'Values',
    'joinUs.valuesIntro': 'In science, inclusion begins with inclusion in the research environment.',
    'joinUs.valuesDescription': 'At ACT Institute, research begins with mindset before it becomes technology. The challenges of climate change and carbon neutrality cannot be addressed through a single solution, and we believe that diverse perspectives and backgrounds are essential resources for solving structural problems. Through collaboration that transcends disciplinary boundaries, roles, and levels of experience, ACT Institute explores new possibilities for large-span timber structures.',
    'joinUs.belonging1': 'We value problems over affiliations and questions over titles.',
    'joinUs.belonging2': 'ACT Institute fosters an open research environment where diverse',
    'joinUs.belonging3': 'expertise and perspectives are respected.',

    // Contact Page
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Get in touch with the Glocal ACE Center team.',
    'contact.address': 'Address',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.followUs': 'Follow Us',
    'contact.ourLocation': 'Our Location',
    'contact.joinTeam': 'Join Our Team',
    'contact.joinTeamDescription': 'We are always looking for talented researchers passionate about carbon-neutral architecture and Ai-based sustainable technology innovation.',
    'contact.contactOpportunities': 'Contact Us About Opportunities',

    // News Page
    'news.title': 'News',
    'news.subtitle': 'Check out the latest updates from the Glocal ACE Center',
    'news.latestNews': 'Latest News',

    // Climate Snacks Page
    'climateSnacks.title': 'Climate Snacks',
    'climateSnacks.subtitle': 'Climate Snacks are accessible conversations about climate change',
    'climateSnacks.description': 'Our goal is to attract a wide audience, including curious non-academics, academics from other disciplines, and specialists. You can see the previous sessions recordings here:',

    // Common
    'common.readMore': 'Read More',
    'common.viewAll': 'View All',
    'common.backToTop': 'Back to Top',

    // Language
    'language.english': 'English',
    'language.korean': 'Korean',

    // Footer
    'footer.copyright': '© 2026 GLOCAL ACE CENTER. All rights reserved.',
    'footer.contact': 'Contact',
    'footer.location': 'Location',
  },
  KO: {
    // Navigation
    'nav.home': '홈',
    'nav.research': '연구',
    'nav.publications': '출판물',
    'nav.people': '구성원',
    'nav.news': '뉴스',
    'nav.ourTeam': '센터 구성',
    'nav.researchGroup': '사람들',
    'nav.joinUs': 'ACT INSTITUTE',
    'nav.newsUpdates': '뉴스 및 업데이트',
    'nav.climateSnacks': '기후 스낵',

    // Home Page - Hero
    'home.hero.subtitle': '한국기술교육대학교',
    'home.hero.title': 'Ai 기반 글로컬 탄소중립 ACE 센터',
    'home.hero.description': 'Ai로 열어가는 탄소중립의 미래, 충남과 세계를 잇는 글로컬 혁신 거점',
    // Home Page - About
    'home.about.title': 'Glocal ACE Center',
    'home.about.description': 'Ai 기반 탄소중립 글로컬 ACE 센터에 오신 것을 환영합니다. 우리 센터는 Ai 기술과 탄소중립 솔루션을 바탕으로 지속가능한 건축과 미래 기술 혁신을 연구합니다. 충남에서 시작해 글로벌 표준으로 확장되는 글로컬 탄소중립의 연구 거점으로 나아가고자 합니다. 오늘날 전 세계는 기후 위기 대응이라는 인류 공동의 과제와 인공지능(Ai)이 주도하는 거대한 기술적 변곡점에 서 있습니다. 우리 센터는 이러한 시대적 요구에 부응하여, 기존의 방재안전연구소가 축적해 온 건축의 안전과 구조의 가치를 계승하고, 이를 Ai 기술과 탄소중립 솔루션으로 확장하여 새롭게 출범하였습니다.',
    'home.research.title': '연구 주제',
    'home.research.subtitle': '미래를 위한 연구',
    'home.bigQuestions.title': 'Ai 기술로 실현하는 글로컬 탄소중립 건축의 표준화 및 세계화',
    'home.bigQuestions.subtitle': '중장기 연구 로드맵',
    'home.bigQuestions.q1': '1단계: 기초 구축 및 핵심기술 확보 (2026~2028)',
    'home.bigQuestions.q2': '2단계: 기술 고도화 및 실증 연구 (2029~2031)',
    'home.bigQuestions.q3': '3단계: 기술 확산 및 글로벌 표준화 (2032~2034)',
    'home.bigQuestions.q4': '4단계: 지속가능 운영 및 미래 비전 (2035~)',
    'home.bigQuestions.q5': '[4세부] 목조 대공간 건축물 스마트 시공 및 유지관리 기술 개발',
    'home.bigQuestions.q6': '학술 공동 연구 기관',
    'home.bigQuestions.q7': '연구·시험·실증 협력 기관',
    'home.bigQuestions.q8': '산업 연계 및 기술 확산 파트너',

    // Greeting Page
    'greeting.pageTitle': '인삿말',
    'greeting.title': 'Glocal ACE Center에 오신 것을 환영합니다',
    'greeting.paragraph1': 'Ai 기반 글로컬 탄소중립 ACE 센터 홈페이지를 방문해 주신 여러분을 진심으로 환영합니다.',
    'greeting.paragraph2': '오늘날 전 세계는 기후 위기 대응이라는 인류 공동의 과제와 인공지능(Ai)이 주도하는 거대한 기술적 변곡점에 서 있습니다. 우리 연구소는 이러한 시대적 요구에 부응하여, 기존의 방재안전연구소가 축적해 온 건축의 안전과 구조의 가치를 계승하고, 이를 Ai 기술과 탄소중립 솔루션으로 확장하여 새롭게 출범하였습니다.',
    'greeting.paragraph3': '센터의 명칭의 ACE는 Ai(인공지능), Carbon-neutral(탄소중립), 그리고 Enviromemt & Energy(환경)을 의미합니다. 대한민국의 중심인 충남의 강력한 산업 인프라를 바탕으로 지역 밀착형 ACE 탄소중립 혁신 모델을 구축하고(Local), 이를 세계 무대에서 통용되는 글로벌 표준 기술로 승화시키는(Global) 글로컬(Glocal) 연구의 전초기지가 되고자 합니다.',
    'greeting.signature': 'Glocal ACE Center',
    'greeting.backToHome': '홈으로 돌아가기',
    'greeting.readMore': '인삿말 더보기',
    'greeting.promiseTitle': '지속 가능한 미래를 위한 세 가지 약속을 드립니다.',
    'greeting.card1.title': '첫째',
    'greeting.card1.description': 'Ai 기반의 건축물 탄소중립 설계의 새로운 패러다임을 제시하겠습니다.',
    'greeting.card2.title': '둘째',
    'greeting.card2.description': '도시와 건축의 Carbon 및 Energy를 실현하는 혁신적인 탄소저감 융합 시스템 연구에 매진하겠습니다.',
    'greeting.card3.title': '셋째',
    'greeting.card3.description': '지역 사회와 함께 성장하며 글로벌 경쟁력을 갖춘 전문 인력을 양성하겠습니다.',

    // Research Themes
    'research.terrestrialCarbon.title': 'Advanced Ai: 인공지능 기반의 지능형 설계 및 구조 최적화 기술 선도',
    'research.terrestrialCarbon.description': '인공지능 기술을 활용하여 건축 설계 과정을 지능적으로 개선하고, 구조의 효율성과 성능을 최적화하는 연구를 수행합니다.',
    'research.naturalClimate.title': 'Carbon-neutral Excellence: 탄소중립 실현을 위한 저탄소 시스템 및 에너지 혁신',
    'research.naturalClimate.description': '탄소 배출을 최소화하는 저탄소 시스템과 에너지 효율 향상 기술을 통해 탄소중립을 실현하는 연구를 수행합니다.',
    'research.smartEnergy.title': 'Expandable Glocalism: 지역 산업 인프라를 바탕으로 글로벌 표준을 수립하는 확장성',
    'research.smartEnergy.description': '지역 산업 인프라를 기반으로 연구 성과를 확장하고, 글로벌 수준의 기술과 표준을 수립하는 연구를 수행합니다.',
    // Research Page
    'research.title': '연구',
    'research.subtitle': '육상 생태계가 전지구적 변화에 어떻게 반응하는지 이해하는 연구를 수행합니다',
    'research.intro': 'Terrer Lab은 기후 변화 맥락에서 육상 탄소 저장에 영향을 미치는 생태학적 역학에 대한 지식을 발전시킵니다. 실험 데이터 종합과 모델링 접근법을 결합하여 육상 탄소 흡수원에 대한 주요 불확실성을 줄입니다.',
    'research.themesTitle': '연구 주제',
    'research.bigQuestionsTitle': '큰 질문들',
    'research.bigQuestionsSubtitle': '우리 연구를 이끄는 근본적인 질문들',

    // Big Questions Page
    'bigQuestions.title': '중장기 연구 로드맵',
    'bigQuestions.subtitle': '국책 연구과제에서의 연구 과제 구성.',
    'bigQuestions.intro': '우리의 연구는 200m급 목조 대공간 건축물의 실현 가능성과 탄소중립 건설 기술의 미래라는 근본적인 질문에 의해 이끌립니다. 이러한 질문들은 구조 시스템, 모듈화 설계, 환경·에너지 성능, 그리고 시공 및 유지관리 기술에 대한 통합적인 연구 방향을 제시합니다.',
    'bigQuestions.backTo': '홈으로 돌아가기',
    'bigQuestions.goal': '목표',
    'bigQuestions.keyResearch': '핵심 연구 내용',
    'bigQuestions.participants': '참여 기관',

    // Publications Page
    'publications.title': '출판물',
    'publications.subtitle': '출판된 연구 성과와 학술적 기여를 확인하세요',

    // People Page
    'people.title': '연구실 구성원',
    'people.subtitle': '연구원과 학생들을 소개합니다',
    'people.principalInvestigator': '책임 연구원',
    'people.phdStudents': '박사과정',
    'people.masterStudents': '석사과정',
    'people.researchAssistants': '연구 조교',

    // Team Page
    'team.title': 'GLOCAL ACE CENTER을 소개합니다',
    'team.team': '팀',
    'team.alumni': '학부생',

    // Research Group Page
    'researchGroup.pageTitle': '연구단',
    'researchGroup.sectionTitle': 'Glocal ACE Center',
    

    // Join Us Page
    'joinUs.title': 'GLOCAL ACE CENTER',
    'joinUs.subtitle': 'GLOCAL ACE CENTER 의 태도',
    'joinUs.values': '가치',
    'joinUs.valuesIntro': '과학에서의 포용은 연구실에서의 포용에서 시작됩니다.',
    'joinUs.valuesDescription': 'ACT Institute의 연구는 구조 기술 이전에 태도에서 시작됩니다. 기후 위기와 탄소 중립이라는 과제는 단일한 해법으로 해결될 수 없으며, 우리는 다양한 관점과 배경이 구조적 문제 해결의 핵심 자원이라고 믿습니다. ACT Institute는 전공, 역할, 경험의 경계를 넘는 협업을 통해 목구조 대공간 기술의 새로운 가능성을 탐구합니다.',

    'joinUs.belonging1': '우리는 소속보다 문제를, 직함보다 질문을 중요하게 여깁니다.',
    'joinUs.belonging2': 'ACT Institute는 열린 연구 환경 속에서',
    'joinUs.belonging3': '각자의 전문성과 관점이 존중받는 공간을 지향합니다.',

    // Contact Page
    'contact.title': '연락처',
    'contact.subtitle': 'Terrer Lab 팀에 연락하세요.',
    'contact.address': '주소',
    'contact.email': '이메일',
    'contact.phone': '전화',
    'contact.followUs': '팔로우하기',
    'contact.ourLocation': '위치',
    'contact.joinTeam': '팀에 합류하세요',
    'contact.joinTeamDescription': '육상 탄소 역학과 자연 기후 솔루션을 이해하는 데 열정적인 재능 있는 연구원을 항상 찾고 있습니다.',
    'contact.contactOpportunities': '기회에 대해 문의하기',

    // News Page
    'news.title': '뉴스',
    'news.subtitle': 'Terrer Lab의 최신 소식을 확인하세요',
    'news.latestNews': '최신 뉴스',

    // Climate Snacks Page
    'climateSnacks.title': '기후 스낵',
    'climateSnacks.subtitle': '기후 스낵은 기후 변화에 대한 접근하기 쉬운 대화입니다',
    'climateSnacks.description': '우리의 목표는 호기심 많은 비전문가, 다른 분야의 학자, 전문가를 포함한 폭넓은 청중을 끌어들이는 것입니다. 이전 세션 녹화본은 여기에서 볼 수 있습니다:',

    // Common
    'common.readMore': '더 보기',
    'common.viewAll': '전체 보기',
    'common.backToTop': '맨 위로',

    // Language
    'language.english': '영어',
    'language.korean': '한국어',

    // Footer
    'footer.copyright': '© 2024 GLOCAL ACE CENTER. All rights reserved.',
    'footer.contact': '연락처',
    'footer.location': '위치',
  },
};

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguageState] = useState<Language>(() => {
    // localStorage에서 저장된 언어 불러오기
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('language') as Language;
      if (saved === 'EN' || saved === 'KO') {
        return saved;
      }
    }
    return 'EN';
  });

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  }, []);

  const t = useCallback((key: string): string => {
    return translations[language][key] || key;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
