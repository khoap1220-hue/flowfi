import React from 'react';

export interface PausedStreamsBadgeProps {
  count: number;
}

export const PausedStreamsBadge: React.FC<PausedStreamsBadgeProps> = ({ count }) => {
  if (!count || count <= 0) {
    return null;
  }

  return (
    <span
      className="ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-amber-100 text-amber-800"
      aria-label={`${count} paused streams`}
    >
      {count}
    </span>
  );
};
