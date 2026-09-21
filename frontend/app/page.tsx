export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 p-8">
      <div className="mx-auto max-w-7xl">
        
        {/* Header */}
        <header className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">
              Queue
            </h1>
            <p className="mt-1 text-slate-500">
              Simple scheduling for growing businesses.
            </p>
          </div>

          <button className="rounded-lg bg-slate-900 px-5 py-3 text-sm font-medium text-white hover:bg-slate-800">
            + New Appointment
          </button>
        </header>

        {/* Stats */}
        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <p className="text-sm text-slate-500">Today</p>
            <p className="mt-2 text-3xl font-bold text-slate-900">12</p>
            <p className="mt-1 text-sm text-slate-500">
              appointments
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <p className="text-sm text-slate-500">Upcoming</p>
            <p className="mt-2 text-3xl font-bold text-slate-900">28</p>
            <p className="mt-1 text-sm text-slate-500">
              this week
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <p className="text-sm text-slate-500">Confirmed</p>
            <p className="mt-2 text-3xl font-bold text-slate-900">9</p>
            <p className="mt-1 text-sm text-slate-500">
              appointments
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <p className="text-sm text-slate-500">Pending</p>
            <p className="mt-2 text-3xl font-bold text-slate-900">3</p>
            <p className="mt-1 text-sm text-slate-500">
              need attention
            </p>
          </div>
        </section>

        {/* Appointments */}
        <section className="mt-8 rounded-xl border border-slate-200 bg-white">
          <div className="flex items-center justify-between border-b border-slate-200 p-6">
            <div>
              <h2 className="text-lg font-semibold text-slate-900">
                Today&apos;s Appointments
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Manage your upcoming appointments.
              </p>
            </div>

            <button className="text-sm font-medium text-slate-700 hover:text-slate-900">
              View all
            </button>
          </div>

          <div className="divide-y divide-slate-100">
            <div className="flex items-center justify-between p-6">
              <div>
                <p className="font-medium text-slate-900">
                  Sarah Ahmed
                </p>
                <p className="mt-1 text-sm text-slate-500">
                  Consultation · 10:00 AM
                </p>
              </div>

              <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                Confirmed
              </span>
            </div>

            <div className="flex items-center justify-between p-6">
              <div>
                <p className="font-medium text-slate-900">
                  Mohammed Ali
                </p>
                <p className="mt-1 text-sm text-slate-500">
                  Follow-up · 11:30 AM
                </p>
              </div>

              <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-medium text-yellow-700">
                Pending
              </span>
            </div>

            <div className="flex items-center justify-between p-6">
              <div>
                <p className="font-medium text-slate-900">
                  Reem Khalid
                </p>
                <p className="mt-1 text-sm text-slate-500">
                  Consultation · 1:00 PM
                </p>
              </div>

              <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                Confirmed
              </span>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}