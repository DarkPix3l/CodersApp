import Menu from "src/app/_components/Menu";
import challenges from "@src/data/db.json";


export default async function ChallengesPage() {
  const item = challenges.challenges;
  return (
    <>
      <Menu />
      <main>
        <h1>Item {item.id}</h1>

      </main>
    </>
  );
}
