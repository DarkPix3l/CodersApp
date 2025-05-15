import React from "react";
import Menu from "../components/UI/Menu";

// Dummy data
const data = [
  {
    rank: 1,
    first_name: "John",
    last_name: "Doe",
    score: 400,
    solved_challenges: 150,
  },
  {
    rank: 2,
    first_name: "Alice",
    last_name: "Smith",
    score: 350,
    solved_challenges: 140,
  },
  {
    rank: 3,
    first_name: "Emma",
    last_name: "Johnson",
    score: 320,
    solved_challenges: 135,
  },
];

export default function Leaderboard() {
  return (
    <>
      <Menu />

      <section className="bg-[#E5E7EB] min-h-svh">
        <div className="p-6">
          <h1 className="font-medium">Leaderboard</h1>
        </div>

        <table className="w-full text-center shadow-[10px_5px_35px_rgba(0,0,0,0.25)]">
          <thead>
            <tr>
              <th className="p-3 border-b border-gray-400">Rank</th>
              <th className="p-3 border-b border-gray-400">Name</th>
              <th className="p-3 border-b border-gray-400">Score</th>
              <th className="p-3 border-b border-gray-400">Solved Challenges</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user) => (
              <tr key={user.rank}>
                <td className="p-3 border-b border-gray-400">{user.rank}</td>
                <td className="p-3 border-b border-gray-400">
                  {user.first_name} {user.last_name}
                </td>
                <td className="p-3 border-b border-gray-400">{user.score}</td>
                <td className="p-3 border-b border-gray-400">{user.solved_challenges}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
}
