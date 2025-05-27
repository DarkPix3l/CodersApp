import { Button } from "../_components/Button";
import Menu from "../_components/Menu";
import ChallengesTable from "../_components/ChallengesTable";
import Link from "next/link";
/* import { getChallenges, deleteChallenge } from '../../actions/challenges'; */

export default async function ChallengesPage() {
  /*     const challenges = await getChallenges();

  async function handleDelete(formData) {
    'use server';
    const id = formData.get('id');
    await deleteChallenge(id);
  } */
  return (
    <>
      <Menu />
      <main>
        <h1>Your Challenges</h1>
        <Link href="challenges/create">
          <Button>New Challenge</Button>
        </Link>
        <ChallengesTable />
      </main>
    </>
  );
}
