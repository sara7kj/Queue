import Link from "next/link";
export default function AppointmentsPage() {
  const appointments = [
    {
      customer: "Sarah Ahmed",
      service: "Consultation",
      time: "10:00 AM",
      status: "Confirmed",
    },
    {
      customer: "Mohammed Ali",
      service: "Follow-up",
      time: "11:30 AM",
      status: "Pending",
    },
    {
      customer: "Reem Khalid",
      service: "Consultation",
      time: "1:00 PM",
      status: "Confirmed",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">
              Appointments
            </h1>
            <p className="mt-1 text-slate-500">
              Manage and track your appointments.
            </p>
          </div>

          <Link
  href="/appointments/new"
  className="rounded-lg bg-slate-900 px-5 py-3 text-sm font-medium text-white hover:bg-slate-800"
>
  + New Appointment
</Link>
        </div>

        {/* Appointments Table */}
        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
          <table className="w-full">
            <thead className="border-b border-slate-200 bg-slate-50">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-medium text-slate-500">
                  Customer
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-slate-500">
                  Service
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-slate-500">
                  Time
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-slate-500">
                  Status
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100">
              {appointments.map((appointment) => (
                <tr key={`${appointment.customer}-${appointment.time}`}>
                  <td className="px-6 py-4 font-medium text-slate-900">
                    {appointment.customer}
                  </td>

                  <td className="px-6 py-4 text-sm text-slate-600">
                    {appointment.service}
                  </td>

                  <td className="px-6 py-4 text-sm text-slate-600">
                    {appointment.time}
                  </td>

                  <td className="px-6 py-4">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-medium ${
                        appointment.status === "Confirmed"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {appointment.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}