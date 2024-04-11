import { Checkbox, Stack, Title, Paper, Container, Grid } from '@mantine/core';
import classes from './checklist.module.css';
export function Checklist() {
  return (
    <div>
      <Container size={250} className={classes.pos}>
        <Paper withBorder shadow="md" p='md' mt='xl' radius="md">
          <Stack className={classes.container}
            gap='xl' 
            >
            <Title className={classes.title}>
              Tags
            </Title>
            <Checkbox

                  label="tag 1"
            />
            <Checkbox
                  label="tag 2"
            />
            <Checkbox
                  label="tag 3"
            />
            <Checkbox
                  label="tag 4"
            />
            <Checkbox
                  label="tag 5"
            />
            <Checkbox
                  label="tag 6"
            />
            <Checkbox
                  label="tag 7"
            />
            <Checkbox
                  label="tag 8"
            />
          </Stack>
        </Paper>
      </Container>
    </div>
  );
}