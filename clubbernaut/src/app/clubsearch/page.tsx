import { Checklist } from '@/components/Checklist/Checklist';
import { BadgeCard } from '@/components/Cards/BadgeCard'
import {
    Container, Title, Anchor, Text, Paper, Grid,
    Stack, Group, Input
} from '@mantine/core'
import classes from './clubsearch.module.css'
export default function clubsearch() {
  return (
    <div>
      <>
      <Checklist />
      </>
      <Stack align='center' pos='relative'>
        <Input radius='md' placeholder="Search" size='md'/>
        <Container>
          <Paper withBorder shadow="md" p='md' mt='xl' radius="md" pos='relative'>
            <Grid columns={4} pos='relative'>
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
            </Grid>
          </Paper>
        </Container>
      </Stack>
    </div>
  );
}