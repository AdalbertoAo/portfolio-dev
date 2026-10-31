import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
}

export const ReactIcon: React.FC<IconProps> = ({ className = "w-5 h-5", size }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(0 12 12)" className="stroke-sky-400" />
    <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)" className="stroke-sky-400" />
    <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)" className="stroke-sky-400" />
    <circle cx="12" cy="12" r="2" className="fill-sky-400" />
  </svg>
);

export const NextIcon: React.FC<IconProps> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 180 180" fill="none">
    <mask id="mask0" maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180">
      <circle cx="90" cy="90" r="90" fill="black"/>
    </mask>
    <g mask="url(#mask0)">
      <circle cx="90" cy="90" r="90" className="fill-white"/>
      <path d="M149.508 157.52L69.142 54H54V125.97H66.8136V69.216L137.263 160.281C141.603 159.507 145.696 158.58 149.508 157.52Z" className="fill-brand-bg"/>
      <rect x="115" y="54" width="13" height="72" className="fill-brand-bg"/>
    </g>
  </svg>
);

export const TSIcon: React.FC<IconProps> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path className="text-blue-500" d="M1.5 0h21A1.5 1.5 0 0 1 24 1.5v21a1.5 1.5 0 0 1-1.5 1.5h-21A1.5 1.5 0 0 1 0 22.5v-21A1.5 1.5 0 0 1 1.5 0z"/>
    <path className="fill-white" d="M12 9.75H9v8.25H6.75V9.75H3.75V7.5H12v2.25zm8.55 3.9c0-1.875-1.425-2.55-3.375-2.925l-.75-.15c-.75-.15-1.05-.375-1.05-.75 0-.45.45-.675 1.05-.675.825 0 1.65.3 2.175.75l1.05-1.425C18.825 7.8 17.55 7.35 16.2 7.35c-2.25 0-3.675 1.2-3.675 2.85 0 1.725 1.2 2.475 3.15 2.85l.75.15c.9.15 1.2.45 1.2.825 0 .525-.6.825-1.35.825-1.05 0-2.1-.45-2.775-1.125l-1.125 1.5c.975.9 2.4 1.35 3.9 1.35 2.4 0 4.125-1.125 4.125-3.075z"/>
  </svg>
);

export const TailwindIcon: React.FC<IconProps> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path className="text-sky-400" d="M12 6c-3.314 0-5.5 1.657-6.5 4.971 1.326-1.326 2.826-1.826 4.5-1.5 1.143.223 1.96 1.053 2.864 1.972C14.331 12.92 16.037 14.65 21 14.65c3.314 0 5.5-1.657 6.5-4.971-1.326 1.326-2.826 1.826-4.5 1.5-1.143-.223-1.96-1.053-2.864-1.972C18.669 7.73 16.963 6 12 6zm-7 7c-3.314 0-5.5 1.657-6.5 4.971 1.326-1.326 2.826-1.826 4.5-1.5 1.143.223 1.96 1.053 2.864 1.972C7.331 19.92 9.037 21.65 14 21.65c3.314 0 5.5-1.657 6.5-4.971-1.326 1.326-2.826 1.826-4.5 1.5-1.143-.223-1.96-1.053-2.864-1.972C11.669 14.73 9.963 13 5 13z" transform="scale(0.8) translate(2,2)"/>
  </svg>
);

export const NodeIcon: React.FC<IconProps> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path className="text-emerald-500" d="M12 2L2 7.7v11.5L12 25l10-5.8V7.7L12 2zm7.5 16.1l-7.5 4.3-7.5-4.3V9.2l7.5-4.3 7.5 4.3v8.9z"/>
  </svg>
);

export const NestIcon: React.FC<IconProps> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path className="text-rose-500" d="M19.8 12.3c0-4.6-3.8-8.3-8.3-8.3C7 4 3.2 7.7 3.2 12.3c0 2.2.8 4.2 2.2 5.7L3.6 20c-.3.4 0 1 .5.9l2.5-.5c1.4.9 3.1 1.4 4.9 1.4 4.5 0 8.3-3.7 8.3-8.3v-1.2z"/>
  </svg>
);

export const PostgresIcon: React.FC<IconProps> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path className="text-blue-400" d="M12 2a10 10 0 0 0-10 10 10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
  </svg>
);

export const CIcon: React.FC<IconProps> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path className="text-blue-300" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 16c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78l-1.41 1.41C14.1 8.48 13.1 8 12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4c1.1 0 2.1-.48 2.81-1.19l1.41 1.41C15.14 17.31 13.66 18 12 18z"/>
  </svg>
);

export const DockerIcon: React.FC<IconProps> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path className="text-sky-500" d="M13.98 11.08h1.96v1.83h-1.96v-1.83zm-2.3 0h1.97v1.83h-1.97v-1.83zm-2.3 0h1.96v1.83H9.38v-1.83zm-2.3 0h1.97v1.83H7.08v-1.83zm6.9-2.22h1.96v1.83h-1.96V8.86zm-2.3 0h1.97v1.83h-1.97V8.86zm-2.3 0h1.96v1.83H9.38V8.86zm-2.3 0h1.97v1.83H7.08V8.86zm4.6-2.21h1.97v1.83h-1.97V6.65z"/>
  </svg>
);

export const FigmaIcon: React.FC<IconProps> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path className="text-purple-400" d="M12 12c0-1.66 1.34-3 3-3s3 1.34 3 3-1.34 3-3 3-3-1.34-3-3zm-6 6c0-1.66 1.34-3 3-3h3v3c0 1.66-1.34 3-3 3s-3-1.34-3-3zm0-6c0-1.66 1.34-3 3-3h3v6H9c-1.66 0-3-1.34-3-3zm0-6c0-1.66 1.34-3 3-3h3v6H9C7.34 6 6 4.66 6 3zm6-3h3c1.66 0 3 1.34 3 3s-1.34 3-3 3h-3V0z"/>
  </svg>
);

export const GitIcon: React.FC<IconProps> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path className="text-orange-500" d="M23.54 11.41l-10.95-10.95c-.59-.59-1.54-.59-2.12 0L8.12 2.8 11 5.67c.65-.22 1.4.08 1.72.72.33.65.17 1.45-.37 1.91-.54.46-1.33.46-1.88 0-.39-.33-.56-.86-.47-1.36L7.6 4.54 1.46 10.68c-.59.59-.59 1.54 0 2.12l10.95 10.95c.59.59 1.54.59 2.12 0l10.01-10.01c.59-.58.59-1.53 0-2.33z"/>
  </svg>
);