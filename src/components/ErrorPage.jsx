export default function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
      <div className="bg-white p-6 rounded shadow-md">
        <h1 className="text-3xl font-bold text-red-600 mb-4">
          Oops! Something went wrong
        </h1>
        <p className="text-gray-700 mb-6">
          We encountered an error while processing your request. Please try
          again later.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Reload Page
        </button>
      </div>
    </div>
  );
}
