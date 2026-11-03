import React from 'react';

export interface StreamPercentageBarProps {
  streamedAmount: number;
  totalAmount: number;
}

export const StreamPercentageBar: React.FC<StreamPercentageBarProps> = ({ streamedAmount, totalAmount }) => {
  if (totalAmount <= 0) {
    return <div className="w-full h-2 bg-gray-200 rounded-full" aria-hidden="true" />;
  }

  const streamedPct = Math.min(100, Math.max(0, (streamedAmount / totalAmount) * 100));
  const refundedPct = Math.max(0, 100 - streamedPct);

  return (
    <div className="w-full flex flex-col gap-1">
      <div className="flex justify-between text-xs text-gray-600 font-medium">
        <span>{streamedPct.toFixed(1)}% Streamed</span>
        <span>{refundedPct.toFixed(1)}% Refunded</span>
      </div>
      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden flex" role="progressbar" aria-valuenow={streamedPct} aria-valuemin={0} aria-valuemax={100}>
        <div style={{ width: `${streamedPct}%` }} className="bg-primary-500 h-full transition-all duration-300" />
        <div style={{ width: `${refundedPct}%` }} className="bg-gray-400 h-full transition-all duration-300" />
      </div>
    </div>
  );
};
