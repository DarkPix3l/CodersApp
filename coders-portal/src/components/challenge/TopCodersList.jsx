import topCoders from "../../api/mock/topCoders.json";

export default function TopCodersList() {
  return (
    <div
      className="mt-5 p-5 flex flex-col gap-3 shadow-[1px_1px_7px_rgba(0,0,0,0.45)] rounded-xl transition-colors duration-500 ease-in-out"
      style={{
        backgroundColor: "var(--top-coders-bg)",
      }}
    >
      <h2 className="mb-3 text-center">Top 4 coders</h2>

      {topCoders.map((item) => (
        <div
          key={item.id}
          className="flex flex-row justify-between items-center p-2.5 rounded-xl shadow-[1px_5px_5px_rgba(0,0,0,0.35)]"
          style={{
            backgroundColor: "var(--top-coders-person-bg)",
          }}
        >
          <div className="flex items-center gap-5">
            <img
              src={item.avatar_url}
              alt={`${topCoders.first_name} ${item.last_name}`}
              className="rounded-full w-13 "
            />
            <p className="font-medium ">
              {item.first_name} <span>{item.last_name}</span>
            </p>
          </div>
          <p>Score: {item.score}</p>
        </div>
      ))}
    </div>
  );
}
