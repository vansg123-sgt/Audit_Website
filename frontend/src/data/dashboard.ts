import {
  ClipboardCheck,
  Users,
  FileText,
  TrendingUp,
} from "lucide-react";

export const dashboardStats = [
  {
    title: "Total Audits",
    value: 124,
    change: "+12%",
    color: "bg-indigo-500",
    icon: ClipboardCheck,
  },
  {
    title: "Completed Audits",
    value: 98,
    change: "+8%",
    color: "bg-green-500",
    icon: TrendingUp,
  },
  {
    title: "Reports Generated",
    value: 56,
    change: "+5%",
    color: "bg-purple-500",
    icon: FileText,
  },
  {
    title: "Active Users",
    value: 18,
    change: "+2%",
    color: "bg-blue-500",
    icon: Users,
  },
];

export const recentActivities = [
  {
    id: 1,
    title: "Audit #102 completed",
    time: "5 min ago",
  },
  {
    id: 2,
    title: "New user added",
    time: "25 min ago",
  },
  {
    id: 3,
    title: "Compliance report generated",
    time: "1 hour ago",
  },
  {
    id: 4,
    title: "Audit assigned to QA Team",
    time: "Yesterday",
  },
];

export const auditChartData = [
  { month: "Jan", audits: 20 },
  { month: "Feb", audits: 28 },
  { month: "Mar", audits: 35 },
  { month: "Apr", audits: 31 },
  { month: "May", audits: 45 },
  { month: "Jun", audits: 52 },
];