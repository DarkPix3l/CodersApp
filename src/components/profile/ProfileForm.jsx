import React, { useState } from 'react';
import { FiEdit2 } from 'react-icons/fi';


export default function ProfileForm() {
  const [avatar, setAvatar] = useState(null);
  const [about, setAbout] = useState('');

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAvatar(URL.createObjectURL(file));
    }
  };
  console.log("Selected avatar:", avatar);
  return (
    <form className="w-full max-w-none rounded-lg shadow-[10px_5px_35px_rgba(0,0,0,0.25)] p-6">
      
        <p className="font-semibold ml-auto w-fit">Rank: #42</p>
      <div className="relative w-24 h-24 mb-4">
        <img
          src={avatar || '/img/cat.png'}
          alt="Avatar"
          className="w-24 h-24 object-cover rounded-full border-2 border-gray-300 dark:border-gray-600 "
        />
        <label className="absolute bottom-0 right-0 rounded-full p-1 cursor-pointer">
          <FiEdit2 className="text-white text-xl"/>
          <input type="file" accept="image/*" onChange={handleAvatarChange} className="hidden" />
        </label>
      </div>

      <div className="mb-4">
        <label>First Name</label>
        <input type="text" readOnly value="Cortisol"/>
      </div>

      <div className="mb-4">
        <label>Last Name</label>
        <input type="text" readOnly value="Fluff"/>
      </div>

      <div className="mb-4">
        <label>Email</label>
        <input type="email" readOnly value="cortisol.fluff@example.com" />
      </div>

      <div className="mb-4">
        <label>About</label>
        <textarea
          rows="4"
          value={about}
          onChange={(e) => setAbout(e.target.value)}
        ></textarea>
      </div>

    </form>
  );
}
