import React, { useState } from 'react';
import { ProfileList } from '../components/ProfileList';
import { MapView } from '../components/MapComponents';
import { SearchBox, Stack, Text } from '@fluentui/react'; 
import { profiles } from './mockProfiles';

export const HomePage = () => {
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleProfileSelect = (profile) => {
    setSelectedProfile(profile);
  };

  const filteredProfiles = profiles.filter(profile =>
    profile.position.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Stack tokens={{ childrenGap: 20}} styles={{ root: {margin: '20px'}}}>
      <Text variant="xxLarge">Employee Directory</Text>
      <SearchBox
        placeholder="Search by position..."
        value={searchTerm}
        onChange={(e, newValue) => setSearchTerm(newValue || '')}
        styles={{ root: { width: 300 } }}
      />
      <ProfileList profiles={filteredProfiles} onProfileSelect={handleProfileSelect} />
      <MapView profile={selectedProfile} />
    </Stack>
      
  );
};
