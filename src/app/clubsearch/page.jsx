'use client';
import { Checklist } from '@/components/Checklist/Checklist';
// import { BadgeCard } from '@/components/Cards/BadgeCard';
import {
  Container,
  Title,
  Anchor,
  Text,
  Paper,
  SimpleGrid,
  Stack,
  Group,
  Input,
  MantineProvider,
  createTheme,
} from '@mantine/core';
import { useInputState } from '@mantine/hooks';
import classes from './clubsearch.module.css';
import { clubSearch } from './clubSearch';
import { useEffect, useRef, useState } from 'react';
import { getTags } from '@/components/Checklist/handleCheck';
import { SearchGrid } from './SearchGrid';

export default function clubsearch() {
  const [value, setValue] = useInputState('');
  const [filtData, setFiltData] = useState([]);

  const initialize = async () => {
    setFiltData(await clubSearch('', []));
  };

  useEffect(() => {
    initialize();
  }, []);

  return (
    <div>
      <Group>
        <Group className={classes.postags}>
          <Checklist />
        </Group>
        <Stack className={classes.posclubs} align="center" pos="relative">
          <Container bottom={60} size="xl">
            <Input
              radius="md"
              placeholder="Search"
              size="md"
              bottom={30}
              value={value}
              className={classes.search}
              //changes value variable when something is typed
              onChange={event => setValue(event.currentTarget.value)}
              //On enter, retrieve the club based on current queries.
              onKeyDown={async event => {
                if (event.key === 'Enter') {
                  let filteredSearch = await clubSearch(value, await getTags());
                  setFiltData(filteredSearch);
                }
              }}
            />
            <SearchGrid filteredData={filtData} />
          </Container>
        </Stack>
      </Group>
    </div>
  );
}
