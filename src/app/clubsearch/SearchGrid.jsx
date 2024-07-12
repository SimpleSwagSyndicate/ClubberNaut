import { SimpleGrid } from '@mantine/core';
import { useEffect, useState } from 'react';
import { BadgeCard } from '@/components/Cards/BadgeCard';

export const SearchGrid = props => {
  console.log(props.filteredData);
  return (
    <SimpleGrid cols={3} spacing="xl" verticalSpacing="sm">
      {props.filteredData.length !== 0 ? (
        props.filteredData.map(data => (
          <BadgeCard
            key={data.id}
            image={
              'https://hwifvhkdngdxtmbvymlx.supabase.co/storage/v1/object/public/club_thumbnails/' + data.clubid + '/avatar.jpg'
            }
            name={data.name}
            tags={data.tags}
          />
        ))
      ) : (
        <div>No Matching Results</div>
      )}
    </SimpleGrid>
  );
};
