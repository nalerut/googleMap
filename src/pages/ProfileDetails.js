import React from 'react';

export const ProfileDetailsPage = ({ profile }) => {
  return (
    <div>
      <h1>{profile.name}</h1>
      <img src={profile.photo} alt={profile.name} />
      <p>{profile.description}</p>
      <p>Contact: {profile.contact}</p>
      <p>Interests: {profile.interests.join(', ')}</p>
    </div>
  );
};
