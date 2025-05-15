import React from "react";
import topCoders from "../../api/mock/topCoders.json";

export default function TopCodersList() {
  return (
    <div className="mt-5 p-5 flex flex-col gap-3 shadow-[1px_1px_7px_rgba(0,0,0,0.45)] rounded-2xl dark:bg-[#4322C9A3]">
      <h2 className="mb-3 text-center">Top 4 coders</h2>

      {topCoders.map((item) => (
        <div key={item.id} className="flex flex-row justify-between bg-[#E5E7EB] dark:bg-[#9378ffb4] items-center p-2.5 rounded-2xl shadow-[1px_5px_5px_rgba(0,0,0,0.35)]">
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
          <p className="text-gray-600 dark:text-white">Score: {item.score}</p>
        </div>
      ))}
    </div>
  );
}
