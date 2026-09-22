export default function CustomersPage() {
  const customers = [
    {
      name: "Sarah Ahmed",
      phone: "+966 50 123 4567",
      email: "sarah@example.com",
      appointments: 8,
    },
    {
      name: "Mohammed Ali",
      phone: "+966 55 234 5678",
      email: "mohammed@example.com",
      appointments: 5,
    },
    {
      name: "Reem Khalid",
      phone: "+966 54 345 6789",
      email: "reem@example.com",
      appointments: 12,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">
              Customers
            </h1>
            <p className="mt-1 text-slate-500">
              Manage your customers and their information.
            </p>
          </div>

          <button className="rounded-lg bg-slate-900 px-5 py-3 text-sm font-medium text-white hover:bg-slate-800">
            + Add Customer
          </button>
        </div>

        {/* Search */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search customers..."
            className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-slate-400 md:max-w-md"
          />
        </div>

        {/* Customers Table */}
        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
          <table className="w-full">
            <thead className="border-b border-slate-200 bg-slate-50">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-medium text-slate-500">
                  Customer
                </th>

                <th className="px-6 py-4 text-left text-sm font-medium text-slate-500">
                  Phone
                </th>

                <th className="px-6 py-4 text-left text-sm font-medium text-slate-500">
                  Email
                </th>

                <th className="px-6 py-4 text-left text-sm font-medium text-slate-500">
                  Appointments
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100">
              {customers.map((customer) => (
                <tr key={customer.email}>
                  <td className="px-6 py-4 font-medium text-slate-900">
                    {customer.name}
                  </td>

                  <td className="px-6 py-4 text-sm text-slate-600">
                    {customer.phone}
                  </td>

                  <td className="px-6 py-4 text-sm text-slate-600">
                    {customer.email}
                  </td>

                  <td className="px-6 py-4 text-sm text-slate-600">
                    {customer.appointments}
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