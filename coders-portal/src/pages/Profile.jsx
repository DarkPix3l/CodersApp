import Menu from "../components/UI/Menu";
import ProfileForm from "../components/profile/ProfileForm";
import ProfileStats from "../components/profile/ProfileStats";

export default function Profile() {
  return (
    <>
      <Menu />
      <main
        className="min-h-screen p-5 md:p-10 transition-colors duration-500 ease-in-out"
        style={{
          color: "var(--text-color)",
          backgroundImage: "var(--bg-gradient)",
        }}
      >
        <h1 className="text-3xl font-bold mb-6">Profile</h1>
        <div className="flex flex-col xl:flex-row gap-8">
          <ProfileForm />
          <ProfileStats />
        </div>
      </main>
    </>
  );
}
