import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100">
      <div className="rounded-2xl bg-white p-10 shadow-xl">

        <h1 className="mb-6 text-4xl font-bold">
          AuditFlow
        </h1>

        <p className="mb-8 text-slate-500">
          Welcome to AuditFlow
        </p>

        <Link
          to="/dashboard"
          className="rounded-xl bg-blue-600 px-6 py-3 text-white"
        >
          Go to Dashboard
        </Link>

      </div>
    </div>
  );
}

export default LoginPage;