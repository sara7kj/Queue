import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="flex min-h-screen w-64 flex-col border-r border-slate-200 bg-white p-6">
      
      {/* Logo */}
      <div className="mb-10">
        <h1 className="text-2xl font-bold text-slate-900">
          Queue
        </h1>
        <p className="mt-1 text-xs text-slate-500">
          Scheduling Platform
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-2">
        <Link
          href="/"
          className="rounded-lg bg-slate-100 px-4 py-3 text-sm font-medium text-slate-900"
        >
          Dashboard
        </Link>

        <Link
          href="/appointments"
          className="rounded-lg px-4 py-3 text-sm font-medium text-slate-600 hover:bg-slate-50"
        >
          Appointments
        </Link>

        <Link
          href="/customers"
          className="rounded-lg px-4 py-3 text-sm font-medium text-slate-600 hover:bg-slate-50"
        >
          Customers
        </Link>
      </nav>

      {/* User */}
      <div className="mt-auto border-t border-slate-200 pt-4">
        <p className="text-sm font-medium text-slate-900">
          Demo User
        </p>
        <p className="mt-1 text-xs text-slate-500">
          Administrator
        </p>
      </div>

    </aside>
  );
}
