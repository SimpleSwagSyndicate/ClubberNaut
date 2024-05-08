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
              'https://upload.wikimedia.org/wikipedia/commons/4/4f/UMass_Seal_Medium_PMS_202.png'
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
