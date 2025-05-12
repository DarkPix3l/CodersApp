import React from 'react'
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <nav className="flex justify-between p-5 bg-[#CBd5E1] shadow-xl">
        <div className="flex items-center gap-15">
          <div className="flex items-center gap-5 ">
            <img src="img/logo.svg" alt="logo img" className="size-9 " />
            <p className="text-xl">CodeCla</p>
          </div>

          <ul className="flex gap-5">
            <li>
              <Link to="/challenges">Challenges</Link>
            </li>
            <li>
              <Link to="/leaderboard">Leaderboard</Link>
            </li>
          </ul>
        </div>
        <img src="img/cat.png" alt="avatar" className="size-9" />
      </nav>
  )
}
