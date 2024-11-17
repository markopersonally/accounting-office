import {
  RiPieChartLine,
  RiLineChartLine,
  RiMoneyDollarCircleLine,
} from "react-icons/ri";

export default function Dashboard() {
  return (
    <div className="min-h-screen flex-1 overflow-x-hidden overflow-y-auto bg-gray-200 p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-700">Revenue</h2>
            <RiPieChartLine className="text-blue-500 text-2xl" />
          </div>
          <p className="text-3xl font-bold text-gray-800 mt-2">$24,780</p>
          <p className="text-sm text-green-500 mt-2">+12% from last month</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-700">Expenses</h2>
            <RiLineChartLine className="text-red-500 text-2xl" />
          </div>
          <p className="text-3xl font-bold text-gray-800 mt-2">$12,560</p>
          <p className="text-sm text-red-500 mt-2">+5% from last month</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-700">Profit</h2>
            <RiMoneyDollarCircleLine className="text-green-500 text-2xl" />
          </div>
          <p className="text-3xl font-bold text-gray-800 mt-2">$12,220</p>
          <p className="text-sm text-green-500 mt-2">+8% from last month</p>
        </div>
      </div>

      <div className="mt-8 bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Recent Transactions
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="text-gray-500 border-b">
                <th className="pb-3 font-medium">Date</th>
                <th className="pb-3 font-medium">Description</th>
                <th className="pb-3 font-medium">Amount</th>
                <th className="pb-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-3">2023-05-01</td>
                <td className="py-3">Invoice #1234</td>
                <td className="py-3">$1,200.00</td>
                <td className="py-3">
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Paid
                  </span>
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-3">2023-04-28</td>
                <td className="py-3">Office Supplies</td>
                <td className="py-3">$350.00</td>
                <td className="py-3">
                  <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Pending
                  </span>
                </td>
              </tr>
              <tr>
                <td className="py-3">2023-04-25</td>
                <td className="py-3">Utility Bill</td>
                <td className="py-3">$280.00</td>
                <td className="py-3">
                  <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Overdue
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
