
import { Checklist } from '@/components/Checklist/Checklist';
import { BadgeCard } from '@/components/Cards/BadgeCard'
import {
    Container, Title, Anchor, Text, Paper, SimpleGrid,
    Stack, Group, Input, MantineProvider, createTheme   
} from '@mantine/core'
import classes from './clubsearch.module.css'

export default function clubsearch() {
  return (
    <div>
      <Group>
      <Group className={classes.postags} >
        <Checklist />
      </Group>
      <Stack className={classes.posclubs} align='center' pos='relative'>
        <Container className={classes.pos} bottom={60} size='xl'>
        <Input radius='md' placeholder="Search" size='md' bottom={30}/>
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