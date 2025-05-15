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
    .map(([category, count], index) => ({ category, count, id:index }))
    .sort((a, b) => b.count - a.count);

  return (
    <div className="bg-[#E5E7EB] dark:bg-[#4322C9A3] p-5 shadow-[1px_1px_7px_rgba(0,0,0,0.45)] rounded-2xl">
     
        <h2 className="mb-5 text-center">Trending Categories</h2>
      
      <div className="flex flex-col gap-4 md:flex-row ">
        {sortedCategories.map((item) => (
          <span key={item.id} className="p-3 rounded-xl bg-amber-200 dark:bg-[#9378ffb4]">
            <p>
              {item.category} <span className="bg-amber-600 dark:bg-indigo-50 dark:text-black rounded-2xl px-4 py-1 ml-2">{item.count}</span>
            </p>
          </span>
        ))}
      </div>
    </div>
  );
}
