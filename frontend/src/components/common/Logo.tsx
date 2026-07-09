function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-xl font-bold text-white">
        A
      </div>

      <div>
        <h2 className="text-2xl font-bold text-slate-900">
          AuditFlow
        </h2>

        <p className="text-sm text-slate-500">
          Audit Management Platform
        </p>
      </div>
    </div>
  );
}

export default Logo;