import { useParams } from "react-router-dom";
import MarkdownPreview from "@uiw/react-markdown-preview";
import challengesList from "../api/mock/challengesList.js";
import "./workspace.css";
import { BsCheck2Circle } from "react-icons/bs";
import Playground from "../components/workspace/Playground.jsx";

export default function Workspace() {
  const { slug } = useParams();
  const challenge = challengesList.find((item) => item.slug === slug);

  if (!challenge) return <p>Challenge not found</p>;

  function ChallengeDescription({ challenge }) {
    return (
      <div className="p-4">
        <div className="flex justify-between">
          <h2 className="text-xl font-bold mb-2">{challenge.title}</h2>
          <div className="flex items-center gap-3">
            <p className="px-3 py-1 bg-green-500 rounded-full"> {challenge.difficulty}</p>
            <BsCheck2Circle style={{ color: "green", fontSize: "30px" }} />
          </div>
        </div>
        {/* need component style override */}
        <MarkdownPreview source={challenge.description} />
      </div>
    );
  }

  return (
    <main
      className="grid grid-cols-2 min-h-screen p-5 md:p-10 transition-colors duration-500 ease-in-out"
      style={{
        color: "var(--text-color)",
        backgroundImage: "var(--bg-gradient)",
      }}>
      <ChallengeDescription challenge={challenge} />
      <Playground />
    </main>
  );
}
