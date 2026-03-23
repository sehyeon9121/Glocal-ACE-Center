/**
 * ACE Center 조직도 데이터
 * 데이터와 UI를 분리하여, 특정 부서 수정 시 이 파일만 변경하면 됩니다.
 */

export interface OrganizationMember {
  name: string;
  role?: string;
  affiliation?: string;
  profileUrl?: string;
}

export interface DivisionData {
  id: string;
  badge: string;
  label: string;
  title: string;
  color: string;
  members: OrganizationMember[];
}

export interface DirectorData {
  title: string;
  name: string;
  profileUrl?: string;
}

export const director: DirectorData = {
  title: 'Director',
  name: '이승재',
};

export const divisions: DivisionData[] = [
  {
    id: 'a-division',
    badge: 'A',
    label: 'A Division',
    title: 'AI-Based Carbon Neutral Design',
    color: '#22C55E',
    members: [
      { name: '이승재', role: 'Director', affiliation: '건축공학과' },
      { name: '이진강', affiliation: '건축공학과' },
    ],
  },
  {
    id: 'c-division',
    badge: 'C-',
    label: 'C- Division',
    title: 'Carbon Reduction & Decarbonization Systems',
    color: '#3B82F6',
    members: [
      { name: '곽병창', role: 'Director', affiliation: '건축공학과' },
      { name: '박수완', affiliation: '건축공학과' },
    ],
  },
  {
    id: 'e-division',
    badge: 'E+',
    label: 'E+ Division',
    title: 'Energy Positive & Sustainable Systems',
    color: '#F97316',
    members: [
      { name: '김태용', role: 'Director', affiliation: '건축공학과' },
      { name: '배진우', affiliation: '건축공학과' },
    ],
  },
];
