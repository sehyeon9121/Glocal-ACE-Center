import { Link } from 'react-router-dom';
import { Mail, Globe, GraduationCap } from 'lucide-react';
import { cn } from '@/utils/cn';
import type { ResearcherProfile } from '@/data/researchGroupData';

export interface ProfessorProfileCardProps {
  researcher: ResearcherProfile;
  className?: string;
}

export function ProfessorProfileCard({
  researcher,
  className,
}: ProfessorProfileCardProps) {
  return (
    <div
      className={cn(
        'flex flex-col md:flex-row gap-5 md:gap-8 bg-white border border-gray-200 rounded-lg p-4',
        className
      )}
    >
      {/* Left: Photo + Icons */}
      <div className="flex flex-col items-center flex-shrink-0">
        {/* Profile Photo */}
        <div className="w-28 h-36 md:w-44 md:h-52 rounded border border-gray-200 overflow-hidden flex-shrink-0 bg-gray-200">
          {researcher.image && (
            <img
              src={researcher.image}
              alt={researcher.name}
              className="w-full h-full object-cover"
            />
          )}
        </div>

        {/* Functional Icons */}
        <div className="flex justify-center gap-5" style={{ marginTop: 18 }}>
          {/* Email */}
          <a
            href={`mailto:${researcher.email}`}
            className="text-gray-500 hover:text-gray-900 transition-colors duration-200"
            title={researcher.email}
          >
            <Mail size={29} strokeWidth={1.5} />
          </a>

          {/* Website */}
          {researcher.website && (
            <a
              href={researcher.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-900 transition-colors duration-200"
              title="Website"
            >
              <Globe size={29} strokeWidth={1.5} />
            </a>
          )}

          {/* Scholar / Papers */}
          {researcher.selectedPapers && researcher.selectedPapers.length > 0 && (
            <Link
              to={`/research-group/${encodeURIComponent(researcher.email)}/publications`}
              className="text-gray-500 hover:text-gray-900 transition-colors duration-200"
              title="Publications"
            >
              <GraduationCap size={29} strokeWidth={1.5} />
            </Link>
          )}
        </div>
      </div>

      {/* Right: Name, Title, Bio */}
      <div className="flex-1 min-w-0 flex flex-col">
        {/* Name & Degree - top */}
        <div>
          <h3 className="text-lg md:text-2xl font-bold text-black mb-2 md:mb-3 font-[Inter,Pretendard,sans-serif]">
            {researcher.name}
          </h3>
          <p className="text-sm font-semibold text-emerald-800 tracking-tight font-[Inter,Pretendard,sans-serif]">
            {researcher.degree} · {researcher.affiliation}
          </p>
        </div>

        {/* Introduction & History - vertically centered */}
        <div className="flex-1 flex flex-col justify-center">
          {researcher.introduction && (
            <p className="text-sm text-gray-700 leading-relaxed mt-4 font-[Inter,Pretendard,sans-serif]">
              {researcher.introduction}
            </p>
          )}

          {researcher.history.length > 0 && (
            <ul className="mt-4 space-y-1">
              {researcher.history.map((item) => (
                <li
                  key={item}
                  className="text-sm text-gray-500 leading-relaxed font-[Inter,Pretendard,sans-serif]"
                >
                  • {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
