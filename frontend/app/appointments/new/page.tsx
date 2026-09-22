import Link from "next/link";

export default function NewAppointmentPage() {
  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="mx-auto max-w-3xl">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">
            New Appointment
          </h1>

          <p className="mt-1 text-slate-500">
            Create a new appointment for a customer.
          </p>
        </div>

        {/* Form */}
        <div className="rounded-xl border border-slate-200 bg-white p-6">
          <form className="space-y-6">

            {/* Customer */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Customer
              </label>

              <select className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-slate-400">
                <option value="">Select a customer</option>
                <option value="sarah">Sarah Ahmed</option>
                <option value="mohammed">Mohammed Ali</option>
                <option value="reem">Reem Khalid</option>
              </select>
            </div>

            {/* Service */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Service
              </label>

              <input
                type="text"
                placeholder="e.g. Consultation"
                className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none focus:border-slate-400"
              />
            </div>

            {/* Date */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Date
              </label>

              <input
                type="date"
                className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none focus:border-slate-400"
              />
            </div>

            {/* Time */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Start Time
                </label>

                <input
                  type="time"
                  className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none focus:border-slate-400"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  End Time
                </label>

                <input
                  type="time"
                  className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none focus:border-slate-400"
                />
              </div>
            </div>

            {/* Actions */}
            <div className="flex justify-end gap-3 border-t border-slate-100 pt-6">
              <Link
  href="/appointments"
  className="rounded-lg border border-slate-200 px-5 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50"
>
  Cancel
</Link>

              <button
                type="submit"
                className="rounded-lg bg-slate-900 px-5 py-3 text-sm font-medium text-white hover:bg-slate-800"
              >
                Create Appointment
              </button>
            </div>

          </form>
        </div>

      </div>
    </div>
  );
}