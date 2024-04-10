import { Checklist } from '@/components/Checklist/Checklist';
import {
    Container, Title, Anchor, Text, Paper, Grid
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

                </Grid>
            </Paper>
        </Container>
    </div>
  );
}