import React, { useState } from 'react';

export const AdminPanel = ({ profiles, setProfiles }) => {
  const [newProfile, setNewProfile] = useState({ name: '', photo: '', description: '' });

  const handleAddProfile = () => {
    setProfiles([...profiles, newProfile]);
    setNewProfile({ name: '', photo: '', description: '' }); // Reset form
  };

  return (
    <div>
      <h2>Admin Panel</h2>
      <input value={newProfile.name} onChange={(e) => setNewProfile({ ...newProfile, name: e.target.value })} placeholder="Name" />
      <input value={newProfile.photo} onChange={(e) => setNewProfile({ ...newProfile, photo: e.target.value })} placeholder="Photo URL" />
      <input value={newProfile.description} onChange={(e) => setNewProfile({ ...newProfile, description: e.target.value })} placeholder="Description" />
      <button onClick={handleAddProfile}>Add Profile</button>
    </div>
  );
};


