import { useParams } from "react-router-dom";
import MarkdownPreview from "@uiw/react-markdown-preview";
import challengesList from "../api/mock/challengesList.js";
import Menu from "../components/UI/Menu.jsx";
import "./workspace.css";

export default function Workspace() {
  const { slug } = useParams();
  const challenge = challengesList.find((item) => item.slug === slug);

  if (!challenge) return <p>Challenge not found</p>;

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
        <div className="p-4">
          <h2 className="text-xl font-bold mb-2">{challenge.title}</h2>
          <p className="mb-4">Difficulty: {challenge.difficulty}</p>
          {/* need component style override */}
          <MarkdownPreview source={challenge.description} />
        </div>
        <div className="p-4">{/* Playground  */}</div>
      </main>
    </>
  );
}
