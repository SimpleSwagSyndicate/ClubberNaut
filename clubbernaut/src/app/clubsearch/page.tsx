"use client";
import { Checklist } from '@/components/Checklist/Checklist';
import { BadgeCard } from '@/components/Cards/BadgeCard'
import {
    Container, Title, Anchor, Text, Paper, SimpleGrid,
    Stack, Group, Input, MantineProvider, createTheme  
} from '@mantine/core'
import { useInputState } from '@mantine/hooks';
import classes from './clubsearch.module.css'
import {clubSearch} from './clubSearch'
import { useState } from 'react';
import { getTags } from '@/components/Checklist/handleCheck';

export default function clubsearch() {

  const [value, setValue] = useInputState('');

  return (
    <div>
      <Group>
      <Group className={classes.postags} >
        <Checklist />
      </Group>
      <Stack className={classes.posclubs} align='center' pos='relative'>
        <Container className={classes.pos} bottom={60} size='xl'>
        <Input radius='md' 
        placeholder="Search" 
        size='md' 
        bottom={30} 
        value={value}
        //changes value variable when something is typed
        onChange={(event) => 
          setValue(event.currentTarget.value)
        } 
        //On enter, retrieve the club based on current queries. 
        onKeyDown={async (event) => {
          if (event.key === "Enter") {
            let filteredSearch = await clubSearch(value, await getTags())
            console.log(filteredSearch)
          }
        }}/>
            <SimpleGrid cols={3} spacing='xl' verticalSpacing='sm'>
              <>
              <BadgeCard />
              </>
              <>
              <BadgeCard />
              </>
              <>
              <BadgeCard />
              </>
              <>
              <BadgeCard />
              </>
              <>
              <BadgeCard />
              </>
              <>
              <BadgeCard />
              </>
            </SimpleGrid>
        </Container>
      </Stack> 
      </Group>
    </div>

  );
}