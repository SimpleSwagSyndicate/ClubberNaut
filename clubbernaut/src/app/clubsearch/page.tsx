import { Checklist } from '@/components/Checklist/Checklist';
import { BadgeCard } from '@/components/Cards/BadgeCard'
import {
    Container, Title, Anchor, Text, Paper, Grid,
    Badge
} from '@mantine/core'
import classes from './clubsearch.module.css'
export default function clubsearch() {
  return (
    <div>
        <>
        <Checklist />
        </>
        <Container>
            <Paper withBorder>
                <Grid>
                  <>
                  <BadgeCard />
                  </>
                </Grid>
            </Paper>
        </Container>
    </div>
  );
}