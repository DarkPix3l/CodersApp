import React from "react";
import challengesData from "../../api/mock/challengesData.json";

export default function TrendingCategories() {
  // Count category frequency
  const categoryCounts = challengesData.reduce((acc, curr) => {
    acc[curr.category] = (acc[curr.category] || 0) + 1;
    return acc;
  }, {});

  // Convert to array and sort by count descending
  const sortedCategories = Object.entries(categoryCounts)
    .map(([category, count], index) => ({ category, count, id: index }))
    .sort((a, b) => b.count - a.count);

  return (
    <div className="p-5 shadow-[1px_1px_7px_rgba(0,0,0,0.45)] rounded-xl transition-colors duration-500 ease-in-out">
      <h2 className="mb-5 text-center">Trending Categories</h2>

      <div className="flex flex-col gap-4 md:flex-row ">
        {sortedCategories.map((item) => (
          <span
            key={item.id}
            className="p-3 rounded-xl"
            style={{
              backgroundColor: "var(--span-bg)",
            }}
          >
            <p>
              {item.category}{" "}
              <span
                className="rounded-xl px-4 py-1 ml-2"
                style={{
                  backgroundColor: "var(--categories-num-bg)",
                  color: "var(--span-text)",
                }}
              >
                {item.count}
              </span>
            </p>
          </span>
        ))}
      </div>
    </div>
  );
}
