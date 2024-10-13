import React from 'react';
import { Stack, Text, Image, PrimaryButton } from '@fluentui/react';

export const ProfileCard = ({ profile, onSelect }) => {
  const handleSummaryClick = () => {
    onSelect(profile);
  };

  return (
    <Stack
      styles={{
        root: {
          border: '1px solid #eaeaea',
          padding: '10px',
          borderRadius: '8px',
          textAlign: 'center',
          alignItems: 'center', 
        },
      }}
      verticalAlign="center"
    >
      <Image
        src={profile.imageUrl}
        alt={profile.name}
        width={100}
        height={100}
        styles={{ root: { margin: '0 auto' } }} 
      />
      <Text variant="large">{profile.name}</Text>
      <Text variant="mediumPlus">{profile.position}</Text>
      <Text variant="medium">{profile.description}</Text>
      <PrimaryButton onClick={handleSummaryClick}>Summary</PrimaryButton>
    </Stack>
  );
};
