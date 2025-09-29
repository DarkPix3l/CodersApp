import { Link } from "react-router-dom";
import DropdownMenu from "./DropdownMenu";
import ThemeToggleButton from "./ToggleButton";
import logo from "/img/logo.svg"
import avatar from "/img/cat.png"

export default function NavMenu() {
  return (
    <nav
      className="flex justify-between p-5 shadow-xl transition-colors duration-500 ease-in-out"
      style={{
        color: "var(--text-color)",
        backgroundColor: "var(--bg-navbar)",
      }}
    >
      <div className="flex items-center gap-4 lg:gap-15">
        <div className="flex items-center gap-5 ">
          <img src={logo} alt="logo img" className="size-9 dark:bg-amber-50 dark:rounded-full" />
          <p className="text-xl hidden lg:block">CodeCla</p>
        </div>

        <ul className="flex gap-5 text-sm md:text-base">
          <li>
            <Link to="/challenges">Challenges</Link>
          </li>
          <li>
            <Link to="/leaderboard">Leaderboard</Link>
          </li>
        </ul>
      </div>
      <div className="flex gap-5">
        <Link to="/profile">
          <img src={avatar} alt="avatar" className="size-9" />
        </Link>
        <DropdownMenu />
        <ThemeToggleButton />
      </div>
    </nav>
  );
}
