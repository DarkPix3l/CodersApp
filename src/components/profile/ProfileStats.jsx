import { useState, useEffect } from "react";
import ProgressBar from "./ProgressBar.jsx";
import HeatMap from "@uiw/react-heat-map";
import Tooltip from '@uiw/react-tooltip';

export default function ProfileStats() {
  //Statistic text
  const solved = 30;
  const total = 50;
  const percent = Math.round((solved / total) * 100);

  const value = [
    { date: '2025/01/11', count:2 },
    ...[...Array(17)].map((_, idx) => ({ date: `2025/01/${idx + 10}`, count: idx, })),
    ...[...Array(17)].map((_, idx) => ({ date: `2025/02/${idx + 10}`, count: idx, })),
    { date: '2025/04/12', count:2 },
    { date: '2025/05/01', count:5 },
    { date: '2025/05/02', count:5 },
    { date: '2025/05/03', count:1 },
    { date: '2025/05/04', count:11 },
    { date: '2025/05/08', count:32 },
  ];
  

  const [range, setRange] = useState(5); //Cell radius



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


  //et voilà, js changing with color mode
  const [panelColors, setPanelColors] = useState(pannelColor.light); // default
  /* const [textColor, setTextColor] = useState("#000"); */

  useEffect(() => {
    const checkDarkMode = () => window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (checkDarkMode()) {
      setPanelColors(pannelColor.dark);
      console.log(checkDarkMode());
    } else {
      setPanelColors(pannelColor.light);
      console.log(checkDarkMode());
    }

    /* setTextColor(checkDarkMode() ? "#fff" : "#000"); */
  }, []);



  return (
    <div className="w-full rounded-lg shadow-[10px_5px_35px_rgba(0,0,0,0.25)] p-6">
      <div className="rounded-lg shadow-[1px_1px_5px_rgba(0,0,0,0.15)] p-6">
        <h2 className="text-xl font-bold mb-4">Completed Challeges</h2>

        <ProgressBar label="Easy" percent={60} color="aqua" />
        <ProgressBar label="Moderate" percent={20} color="orange" />
        <ProgressBar label="Hard" percent={5} color="crimson" />

        <p className="mt-7 font-bold">Statistics</p>
        <p>
          Challenges Solved: {solved} / {total} ({percent}%)
        </p>
      </div>

      <div className="mt-9">
        <HeatMap
          value={value}
          style={{ color: "#ad001d", "--rhm-rect-active": "blue", width: "100%" }}
          startDate={new Date("2025/01/01")}
          endDate={new Date("2025/12/31")}
          panelColors={panelColors}
          rectProps={{
            rx: range,
          }}
          rectSize={13}
          rectRender={(props, data) => {
            // if (!data.count) return <rect {...props} />;
            return (
              <Tooltip placement="top" content={`count: ${data.count || 0}`} >
                <rect {...props} />
              </Tooltip>
            );
          }}
        />
      </div>
    </div>
  );
}
