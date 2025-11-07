type Task = {
  title: string;
  statusName: string;
  description: string;
  className?: string | undefined;
  createdAt: string;
};

export function Task({
  title,
  statusName,
  description,
  className,
  createdAt,
}: Task) {
  return (
    <li className="mb-3 w-2xl  border-2 border-blue-300 rounded-lg p-2">
      <div className="flex items-center justify-between">
        <h2 className="text-slate-800 text-lg font-semibold">{title} </h2>
        <span className={className}>{statusName}</span>
      </div>
      <p className="text-slate-700 text-sm ">{description}</p>
      <p className="text-slate-600 text-xs mt-4 italic">Created {createdAt}</p>
    </li>
  );
}
