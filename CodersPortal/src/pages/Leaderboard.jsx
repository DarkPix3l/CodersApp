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

      <main
        className="min-h-svh transition-colors duration-500 ease-in-out"
        style={{
          color: "var(--text-color)",
          backgroundImage: "var(--bg-gradient)",
        }}
      >
        <div className="min-h-screen p-5 md:p-10">
          <h1 className="font-medium">Leaderboard</h1>
        
        <div className="w-full h-fit  rounded-xl overflow-hidden shadow-[1px_3px_15px_rgba(0,0,0,0.35)]"> {/* tableMask */}
          <table
            className="data-table w-full text-center shadow-[10px_5px_35px_rgba(0,0,0,0.25)] "
            style={{
              backgroundColor: "var(--table-body)",
            }}
          >
            <thead
              style={{
                backgroundColor: "var(--table-head)",
              }}
            >
              <tr>
                <th>Rank</th>
                <th>Name</th>
                <th>Score</th>
                <th>Solved Challenges</th>
              </tr>
            </thead>
            <tbody>
              {data.map((user) => (
                <tr key={user.rank}>
                  <td>{user.rank}</td>
                  <td>
                    {user.first_name} {user.last_name}
                  </td>
                  <td>{user.score}</td>
                  <td>{user.solved_challenges}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        </div>
      </main>
    </>
  );
}
