import React from 'react';
import { ProfileCard } from './ProfileCard';
import './ProfileList.css';

export const ProfileList = ({ profiles, onProfileSelect }) => {
  return (
    <div className="profile-grid">
      {profiles.map((profile) => (
        <ProfileCard key={profile.id} profile={profile} onSelect={onProfileSelect} />
      ))}
    </div>
  );
};
