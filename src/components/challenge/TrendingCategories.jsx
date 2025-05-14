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
    .map(([category, count]) => ({ category, count }))
    .sort((a, b) => b.count - a.count);

  return (
    <div className="bg-[#E5E7EB]">
      <div>
        <h2>Trending Cat</h2>
        <p>djdhfbgjh</p>
      </div>
      <div className="flex flex-row gap-4">
        {sortedCategories.map((item) => (
          <span className="p-3 rounded-2xl bg-amber-200">
            <p key={challengesData.id}>
              {item.category} <span className="bg-amber-600 rounded-2xl px-4 py-1 ml-2">{item.count}</span>
            </p>
          </span>
        ))}
      </div>
    </div>
  );
}
