'use client';

import {
  Paper,
  Stack,
  TextInput,
  Textarea,
  Container,
  Group,
  Title,
  Button,
  Checkbox,
} from '@mantine/core';
import '@mantine/dates/styles.css';
import classes from './updatecreation.module.css';
import { useState } from 'react';
import { DatePickerInput } from '@mantine/dates';

export default function updatecreation() {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <div>
      <Title className={classes.title}>Write an Update</Title>
      <Container>
        <Paper shadow="lg" withBorder>
        <Stack 
        gap='xs'
        align="stretch"
      justify="center">
          <TextInput
            label="Club Name"
            placeholder="Club Name"
            variant="filled"
            className={classes.section}
          />
          <DatePickerInput
            label="Date"
            placeholder="Date"
            value={value}
            onChange={setValue}
            className={classes.section}
          />
          <TextInput
            label="Update Title"
            placeholder="Update Title"
            variant="filled"
            className={classes.section}
          />
          <Textarea
            mt="md"
            label="Update Description"
            placeholder="Update Description"
            maxRows={10}
            minRows={5}
            autosize
            name="message"
            variant="filled"
            className={classes.section}
          />
          </Stack>
          <Group justify="center" mt="xl" className={classes.button}>
            <Button type="submit"  size="lg" color="#971B2F">
              Write Update
            </Button>
          </Group>
        </Paper>
      </Container>
    </div>
  );
}
