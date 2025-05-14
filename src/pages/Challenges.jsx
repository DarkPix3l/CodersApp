import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";
import { useParams, useLocation } from "react-router-dom";
import challengesData from "../api/mock/challengesData.json";
import { BsCheck2Circle } from "react-icons/bs";
import { LuFileSpreadsheet } from "react-icons/lu";
import { FaRegHourglass } from "react-icons/fa";
import TrendingCategories from "../components/challenge/TrendingCategories";

// Simulating backend request
function fetchArticle(slug) {
  return challengesData.find((item) => item.slug == slug);
}

export default function Challenges() {
  let { id, title } = useParams();
  console.log(id, title);

  let location = useLocation();
  const challenge = fetchArticle(id);

  //filterBar
  const [selectedCategory, setSelectedCategory] = useState("All");
  const filteredChallenges =
    selectedCategory === "All" ? challengesData : challengesData.filter((item) => item.category === selectedCategory);

  return (
    <>
      <Menu />

      <section className="p-5">
        <div className="mb-5">
          <h1> Challenges</h1>
          <p>Select Category</p>
        </div>

        <nav className="flex gap-4 mb-4">
          {["All", "Data structure", "Graphs", "Databases"].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2.5 rounded-lg ${
                selectedCategory === cat ? "bg-indigo-500 text-white" : "bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </nav>
<div className="grid grid-cols-2">
        <div className="w-fit rounded-xl overflow-clip"> {/* Mask */}
          <table className="data-table text-center rounded-2xl shadow-[10px_5px_35px_rgba(0,0,0,0.25)] border-separate border-spacing-0">
            <thead className="bg-gray-400">
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
                <tr key={item.id} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                  <td></td>
                  <td>{item.title}</td>
                  <td>{item.category}</td>
                  <td>{item.Difficulty}</td>
                  <td>{item.solutionRate}</td>
                </tr>
              ))}
              {/*             <BsCheck2Circle />
            <LuFileSpreadsheet />
            <FaRegHourglass /> */}
            </tbody>
          </table>
        </div>{" "}
        {/* Mask */}
        <TrendingCategories />
        </div>
      </section>

      <Link to="/profile" className="bg-indigo-400 p-2 m-9 rounded-md">
        Go Back
      </Link>
    </>
  );
}
