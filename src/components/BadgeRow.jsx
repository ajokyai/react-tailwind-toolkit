export default function BadgeRow({ badges }) {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {badges.map((badge) => (
        <span
          key={badge}
          className="bg-slate-700 text-cyan-300 text-xs font-mono font-semibold px-3 py-1 rounded-full border border-slate-600"
        >
          {badge}
        </span>
      ))}
    </div>
  );
}
