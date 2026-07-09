interface PriorityBadgeProps {
  priority: string;
}

export default function PriorityBadge({
  priority,
}: PriorityBadgeProps) {

  const styles =
    priority === "High"
      ? "bg-red-500/20 text-red-400"
      : priority === "Medium"
      ? "bg-yellow-500/20 text-yellow-400"
      : "bg-blue-500/20 text-blue-400";


  return (
    <span
      className={`
        rounded-full
        px-3
        py-1
        text-xs
        font-semibold
        ${styles}
      `}
    >
      {priority}
    </span>
  );
}