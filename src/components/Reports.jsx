import { HiDocumentReport, HiCash, HiChartBar, HiClock } from "react-icons/hi";

export default function Reports() {
  const reports = [
    {
      title: "Financial Statements",
      icon: HiDocumentReport,
      description: "Balance sheets, income statements, and cash flow reports",
    },
    {
      title: "Tax Reports",
      icon: HiCash,
      description: "Annual and quarterly tax summaries and filings",
    },
    {
      title: "Budget Analysis",
      icon: HiChartBar,
      description: "Comparison of actual spending against budgeted amounts",
    },
    {
      title: "Accounts Receivable Aging",
      icon: HiClock,
      description: "Overview of unpaid customer invoices by time periods",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-900 text-center mb-10">
          Accounting Reports
        </h1>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reports.map((report, index) => (
            <div
              key={index}
              className="bg-white overflow-hidden shadow rounded-lg"
            >
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <report.icon
                      className="h-6 w-6 text-indigo-600"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        {report.title}
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900">
                        {report.description}
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-5 py-3">
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    View report
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
