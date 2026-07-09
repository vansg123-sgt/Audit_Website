import AppLayout from "../../layouts/AppLayout";
import PageHeader from "../../components/ui/PageHeader";
import StatCard from "../../components/ui/StatCard";

function DashboardPage() {
  return (
    <AppLayout>

      <PageHeader
        title="Dashboard"
        subtitle="Welcome back! Here's what's happening today."
      />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <StatCard
          title="Total Users"
          value="125"
          change="+12% this month"
        />

        <StatCard
          title="Clients"
          value="18"
          change="+3 this week"
        />

        <StatCard
          title="Audits"
          value="94"
          change="+15 completed"
        />

        <StatCard
          title="Reports"
          value="32"
          change="+5 generated"
        />

      </div>

    </AppLayout>
  );
}

export default DashboardPage;