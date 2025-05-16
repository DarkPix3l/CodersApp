import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Menu from "../components/UI/Menu";
import challengesData from "../api/mock/challengesData.json";
import { BsCheck2Circle } from "react-icons/bs";
import { LuFileSpreadsheet } from "react-icons/lu";
import { FaRegHourglass } from "react-icons/fa";
import TrendingCategories from "../components/challenge/TrendingCategories";
import TopCodersList from "../components/challenge/TopCodersList";

export default function Challenges() {
  const navigate = useNavigate();

  const handleRowClick = (slug) => {
    navigate(`/challenge/${slug}`);
  };

  //filterBar
  const [selectedCategory, setSelectedCategory] = useState("All");
  const filteredChallenges =
    selectedCategory === "All" ? challengesData : challengesData.filter((item) => item.category === selectedCategory);

  /* deterministic approach better then Math.Random in this case, it isn't an elegant way but it works*/
  /* getting 1 function from this is that I will not be able to assign the color to the right propriety" */
  const getIconById = (id) => {
    const icons = [<BsCheck2Circle />, <LuFileSpreadsheet />, <FaRegHourglass />];
    return icons[id % icons.length];
  };
  const getColorById = (id) => {
    const colors = ["text-green-500", "text-blue-500", "text-yellow-500"];
    return colors[id % colors.length];
  };

  return (
    <>
      <Menu />

      <main
        className="wrap min-h-screen p-5 md:p-10 transition-colors duration-500 ease-in-out"
        style={{
          color: "var(--text-color)",
          backgroundImage: "var(--bg-gradient)",
        }}
      >
        <div className="mb-5">
          <h1> Challenges</h1>
          <p>Select Category</p>
        </div>

        <nav className="flex flex-col gap-4 mb-4 md:flex-row">
          {["All", "Data structure", "Graphs", "Databases"].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className="px-6 py-2.5 rounded-lg"
    
              style={{
                backgroundColor: selectedCategory === cat ? "var(--btn-bg-selected)" : "var(--btn-bg-default)",
                color: selectedCategory === cat ? "var(--btn-text-selected)" : "var(--btn-text-default)",
              }}
            >
              {cat}
            </button>
          ))}
        </nav>

        <div className="flex flex-col lg:flex-row gap-4">
          <div className="w-full h-fit lg:w-1/2 rounded-xl overflow-hidden shadow-[1px_3px_15px_rgba(0,0,0,0.35)]">
            {/* Table Mask */}
            <div className="overflow-x-auto w-full">
              <table className="data-table text-left w-full min-w-full">
                <thead
                  style={{
                    backgroundColor: "var(--table-head)",
                  }}
                >
                  <tr>
                    <th>Status</th>
                    <th>Title</th>
                    <th>Category</th>
                    <th>Difficulty</th>
                    <th>Solution Rate</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredChallenges.map((item) => (
                    <tr
                      key={item.id}
                      className="group cursor-pointer"
                      onClick={() => handleRowClick(item.slug)}
                      title={item.title}
                    >
                      <td className={`text-2xl ${getColorById(item.id)}`}>{getIconById(item.id)}</td>
                      <td>{item.title}</td>
                      <td>{item.category}</td>
                      <td className={`bg-[${item.color}]`}>{item.Difficulty}</td>
                      <td>{item.solutionRate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="flex-1">
            <TrendingCategories />
            <TopCodersList />
          </div>
        </div>
      </main>
    </>
  );
}
