import React from 'react';
import Menu from '../components/Menu';
import ProfileForm from '../components/profile/ProfileForm';
import ProfileStats from '../components/profile/ProfileStats';

export default function Profile() {
  return (
    <>
    <Menu />
    <section className="wrap dark:text-white dark:bg-gradient-to-b from-[#4322C9A3] to-[#787cb6e3] min-h-screen p-5 md:p-10">
      <h1 className="text-3xl font-bold mb-6">Profile</h1>
      <div className="flex flex-col lg:flex-row gap-8">
        <ProfileForm />
        <ProfileStats />
      </div>
    </section>
    </>
  );
}