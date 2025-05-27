import Link from "next/link";
import { Button } from "./Button";

export default function Menu() {
  return (
    <nav
      className="flex justify-between p-5 shadow-xl transition-colors duration-500 ease-in-out"
      style={{
        color: "var(--text-color)",
        backgroundColor: "var(--bg-navbar)",
      }}
    >
      <Link href={"/challenges"}>
        <p className="text-xl font-bold ">Challenges</p>
      </Link>
      <Button>Logout</Button>
    </nav>
  );
}
