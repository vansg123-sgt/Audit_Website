import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface EmptyStateProps {
  icon: LucideIcon;
  title: string;
  description: string;
  buttonText?: string;
  onClick?: () => void;
}

export default function EmptyState({
  icon: Icon,
  title,
  description,
  buttonText,
  onClick,
}: EmptyStateProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col items-center justify-center py-16 text-center"
    >
      <div className="mb-6 rounded-2xl bg-indigo-500/20 p-5">
        <Icon className="h-10 w-10 text-indigo-400" />
      </div>

      <h2 className="text-2xl font-semibold text-white">
        {title}
      </h2>

      <p className="mt-3 max-w-md text-gray-400">
        {description}
      </p>

      {buttonText && (
        <button
          onClick={onClick}
          className="
            mt-8
            rounded-xl
            bg-indigo-600
            px-6
            py-3
            font-medium
            text-white
            transition
            hover:bg-indigo-500
          "
        >
          {buttonText}
        </button>
      )}
    </motion.div>
  );
}