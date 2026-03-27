/**
 * ACE Center 조직도 데이터
 * 데이터와 UI를 분리하여, 특정 부서 수정 시 이 파일만 변경하면 됩니다.
 */

import type { Language } from '@/contexts/LanguageContext';

export interface OrganizationMember {
  name: Record<Language, string>;
  role?: Record<Language, string>;
  affiliation?: Record<Language, string>;
  profileUrl?: string;
}

export interface DivisionData {
  id: string;
  badge: string;
  label: string;
  title: Record<Language, string>;
  color: string;
  members: OrganizationMember[];
}

export interface DirectorData {
  title: string;
  name: Record<Language, string>;
  profileUrl?: string;
}

export const director: DirectorData = {
  title: 'Director',
  name: { KO: '이승재', EN: 'Lee, Seung-Jae' },
};

export const viceDirector: DirectorData = {
  title: 'Vice Director',
  name: { KO: '곽병창', EN: 'Kwag, Byung-Chang' },
};

export const divisions: DivisionData[] = [
  {
    id: 'a-division',
    badge: 'Ai',
    label: 'Ai Division',
    title: { KO: 'AI 기반 탄소중립 설계', EN: 'AI-Based Carbon Neutral Design' },
    color: '#22C55E',
    members: [
      { name: { KO: '이승재', EN: 'Lee, Seung-Jae' }, role: { KO: '', EN: '' }, affiliation: { KO: '건축공학과', EN: 'Dept. of Architectural Engineering' } },
      { name: { KO: '이진강', EN: 'Lee, Jin-Gang' }, affiliation: { KO: '건축공학과', EN: 'Dept. of Architectural Engineering' } },
    ],
  },
  {
    id: 'c-division',
    badge: 'C-',
    label: 'C Division',
    title: { KO: '탄소 저감 및 탈탄소 시스템', EN: 'Carbon Reduction & Decarbonization Systems' },
    color: '#3B82F6',
    members: [
      { name: { KO: '곽병창', EN: 'Kwag, Byung-Chang' }, role: { KO: '', EN: '' }, affiliation: { KO: '건축공학과', EN: 'Dept. of Architectural Engineering' } },
      { name: { KO: '박수민', EN: 'Park, Soomin' }, affiliation: { KO: '화학생명공학과', EN: 'Dept. of Chemical & Biological Engineering' } },
    ],
  },
  {
    id: 'e-division',
    badge: 'E+',
    label: 'E Division',
    title: { KO: '에너지 플러스 및 지속가능 시스템', EN: 'Energy Positive & Sustainable Systems' },
    color: '#F97316',
    members: [
      { name: { KO: '김태용', EN: 'Kim, Tae-Yong' }, role: { KO: '', EN: '' }, affiliation: { KO: '화학생명공학과', EN: 'Dept. of Chemical & Biological Engineering' } },
      { name: { KO: '배진우', EN: 'Bae, Jin Woo' }, affiliation: { KO: '화학생명공학과', EN: 'Dept. of Chemical & Biological Engineering' } },
    ],
  },
];
