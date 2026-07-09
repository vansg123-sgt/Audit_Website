interface StatusBadgeProps {
  status: string;
}

export default function StatusBadge({
  status,
}: StatusBadgeProps) {

  const styles =
    status === "Completed"
      ? "bg-green-500/20 text-green-400"
      : status === "Pending"
      ? "bg-red-500/20 text-red-400"
      : "bg-yellow-500/20 text-yellow-400";


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
      {status}
    </span>
  );
}