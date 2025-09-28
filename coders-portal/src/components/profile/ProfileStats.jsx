import ProgressBar from "./ProgressBar.jsx";
import HeatMap from "@uiw/react-heat-map";
import Tooltip from "@uiw/react-tooltip";
import { useTheme } from "../../hooks/useTheme.js";

export default function ProfileStats() {
  const { theme } = useTheme();

  //Statistic text
  const solved = 30;
  const total = 50;
  const percent = Math.round((solved / total) * 100);

  //Dynamically calculating the range
  //end date
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  //start date
  const daysToGoBack = 360;
  const millisecondsInOneDay = 24 * 60 * 60 * 1000;
  const durationInMilliseconds = daysToGoBack * millisecondsInOneDay;
  const pastTimeMs = today.getTime() - durationInMilliseconds;
  const pastDate = new Date(pastTimeMs);

  const value = [
    ...[...Array(17)].map((_, idx) => ({
      date: `${year}/${month}/${idx + 10}`,
      count: idx,
    })),
    ...[...Array(5)].map((_, idx) => ({
      date: `${year}/${month - 3}/${idx + 10}`,
      count: idx,
    })),
    ...[...Array(44)].map((_, idx) => ({
      date: `${year}/${month - 4}/${idx + 15}`,
      count: idx,
    })),

    { date: "2025/04/02", count: 5 },
    { date: "2025/04/03", count: 2 },
    { date: "2025/05/03", count: 1 },
  ];

  //color mode intensity obj
  const pannelColor = {
    dark: {
      0: "#fadfc3",
      2: "#fcca95",
      4: "#fcbc77",
      10: "#ffaf59",
      20: "#fc9b32",
      30: "#fa5902",
    },
    light: {
      0: "#b89ffc",
      2: "#916afc",
      4: "#7e52f7",
      10: "#6f3cfa",
      20: "#5a1fff",
      30: "#2f03ad",
    },
  };

  const panelColors = theme === "dark" ? pannelColor.dark : pannelColor.light;

  return (
    <div className="w-full rounded-lg shadow-[1px_3px_15px_rgba(0,0,0,0.45)] p-6">
      <div
        className="rounded-lg shadow-[1px_3px_10px_rgba(0,0,0,0.45)] p-6"
        style={{
          backgroundColor: "var(--top-coders-bg)",
        }}>
        <h2 className="text-xl font-bold mb-4">Completed Challeges</h2>

        <ProgressBar
          label="Easy"
          percent={60}
          color="aqua"
        />
        <ProgressBar
          label="Moderate"
          percent={20}
          color="orange"
        />
        <ProgressBar
          label="Hard"
          percent={5}
          color="crimson"
        />

        <p className="mt-7 font-bold">Statistics</p>
        <p>
          Challenges Solved: {solved} / {total} ({percent}%)
        </p>
      </div>

      <div className="mt-9 overflow-scroll lg:overflow-hidden">
        <HeatMap
          value={value}
          style={{
            color: "#ad001d",
            "--rhm-rect-active": "blue",
            minWidth: "900px",
          }}
          startDate={pastDate}
          endDate={today}
          panelColors={panelColors}
          rectProps={{
            rx: 5, //Cell radius
          }}
          rectSize={13}
          rectRender={(props, data) => {
            return (
              <Tooltip
                placement="top"
                content={`count: ${data.count || 0}`}>
                <rect {...props} />
              </Tooltip>
            );
          }}
        />
      </div>
    </div>
  );
}
