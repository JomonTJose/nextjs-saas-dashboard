export default function DashboardPage() {
    return (
      <div className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-xl shadow dark:bg-gray-800 dark:text-white">Revenue</div>
          <div className="bg-white p-4 rounded-xl shadow dark:bg-gray-800 dark:text-white">Users</div>
          <div className="bg-white p-4 rounded-xl shadow dark:bg-gray-800 dark:text-white">Traffic</div>
          <div className="bg-white p-4 rounded-xl shadow dark:bg-gray-800 dark:text-white">Churn Rate</div>
        </div>
      </div>
    );
  }
  