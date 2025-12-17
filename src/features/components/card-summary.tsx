type CardSummary = {
  icon?: React.ReactNode;
  count: number;
  colorBackgroundIcon: string;
  statusSummary: string;
};

export function CardSummary({
  icon,
  count,
  colorBackgroundIcon,
  statusSummary,
}: CardSummary) {
  return (
    <div className="border-2 border-slate-300 rounded-xl p-2 flex items-center gap-2">
      <div
        className={`w-10 h-10 flex items-center justify-center rounded-lg ${colorBackgroundIcon}`}
      >
        {icon}
      </div>
      <div>
        <h2 className="font-semibold text-slate-700">
          {count} {statusSummary}
        </h2>
        <p className="text-xs text-slate-500">in the last 7 days</p>
      </div>
    </div>
  );
}
