import React, { useState } from 'react';

const Leaderboard = () => {
  const [region, setRegion] = useState('');
  const [timeRange, setTimeRange] = useState('weekly');

  const leaderboardData = [
    { rank: 1, name: 'Aarav Singh', coins: 1850 },
    { rank: 2, name: 'Neha Kapoor', coins: 1720 },
    { rank: 3, name: 'Rohit Sharma', coins: 1640 },
    { rank: 4, name: 'Ananya Das', coins: 1500 },
    { rank: 5, name: 'Kabir Joshi', coins: 1390 },
  ];

  const userRank = { rank: 12, name: 'You', coins: 890 };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-green-600 text-center mb-8">
        🌿 Punya Leaderboard
      </h1>

      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
        <select
          value={region}
          onChange={(e) => setRegion(e.target.value)}
          className="px-4 py-2 rounded border shadow-sm w-full sm:w-auto"
        >
          <option value="">Select Region</option>
          <option value="Mathura">Mathura</option>
          <option value="Delhi">Delhi</option>
          <option value="Mumbai">Mumbai</option>
        </select>

        <select
          value={timeRange}
          onChange={(e) => setTimeRange(e.target.value)}
          className="px-4 py-2 rounded border shadow-sm w-full sm:w-auto"
        >
          <option value="weekly">This Week</option>
          <option value="monthly">This Month</option>
          <option value="yearly">This Year</option>
          <option value="all">All Time</option>
        </select>
      </div>

      <div className="bg-green-100 border border-green-300 p-6 rounded-xl text-center shadow-md max-w-md mx-auto mb-10">
        <p className="text-lg font-medium text-green-700">🥇 Top Donor</p>
        <h2 className="text-2xl font-bold text-gray-800 mt-2">Aarav Singh</h2>
        <p className="text-sm text-gray-600">1,850 Punya Coins</p>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm border rounded-md overflow-hidden">
          <thead className="bg-gray-100 text-gray-700 text-left">
            <tr>
              <th className="px-4 py-2">Rank</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Punya Coins</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {leaderboardData.map((user) => (
              <tr key={user.rank}>
                <td className="px-4 py-2 font-medium text-green-600">{user.rank}</td>
                <td className="px-4 py-2">{user.name}</td>
                <td className="px-4 py-2">{user.coins}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-8 text-center bg-white shadow-sm p-4 rounded-md border">
        <p className="text-sm text-gray-500 mb-2">Your Rank</p>
        <p className="text-lg font-semibold text-green-700">
          #{userRank.rank} • {userRank.coins} Punya Coins
        </p>
      </div>
    </div>
  );
};

export default Leaderboard;
