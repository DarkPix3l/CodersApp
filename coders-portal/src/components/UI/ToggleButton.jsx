import { useTheme } from "../../hooks/useTheme";
import { useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export default function ThemeToggleButton() {
  const { theme, toggle } = useTheme();

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <button
      onClick={toggle}
      className="rounded-full bg-gray-200"
      aria-label="Toggle theme">
      {theme === "dark" ? (
        <FaSun className="text-yellow-400" />
      ) : (
        <FaMoon className="text-gray-800" />
      )}
    </button>
  );
}
