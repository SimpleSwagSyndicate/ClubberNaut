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
import classes from './clubcreation.module.css';
import MakeClub from './clubcreate';
import React, { useState, useEffect } from 'react';
import { getTags, handleCheck } from './handleCheck';
import { TagBox } from './CheckBox';

export default function clubcreation() {
  const [club_name, setClubName] = useState('');
  const [club_description, setClubDescription] = useState('');

  const handleCreateClub = async () => {
    const res = await MakeClub(club_name, getTags(), club_description);
    alert(res.msg);
    console.log();
  };

  return (
    <div>
      <Title className={classes.title}>Club Creation</Title>
      <Container>
        <Paper shadow="lg" withBorder>
          <Stack>
            <TextInput
              label="Club Name"
              placeholder="Club Name"
              variant="filled"
              className={classes.section}
              onChange={e => setClubName(e.target.value)}
            />

            <Group align="center" className={classes.section}>
              <TagBox label={'Computer Science'} handleCheck={handleCheck} />
              <TagBox label={'AI'} handleCheck={handleCheck} />
              <TagBox label={'Security'} handleCheck={handleCheck} />
              <TagBox label={'Programming'} handleCheck={handleCheck} />
              <TagBox label={'Gaming'} handleCheck={handleCheck} />
              <TagBox label={'Esports'} handleCheck={handleCheck} />
              <TagBox label={'English'} handleCheck={handleCheck} />
              <TagBox label={'Literature'} handleCheck={handleCheck} />
              <TagBox label={'Books'} handleCheck={handleCheck} />
              <TagBox label={'Outdoor'} handleCheck={handleCheck} />
              <TagBox label={'Music'} handleCheck={handleCheck} />
              <TagBox label={'Sport'} handleCheck={handleCheck} />
              <TagBox label={'Adventure'} handleCheck={handleCheck} />
              <TagBox label={'Dance'} handleCheck={handleCheck} />
              <TagBox label={'Environment'} handleCheck={handleCheck} />
              <TagBox label={'Animal'} handleCheck={handleCheck} />
              <TagBox label={'Debate'} handleCheck={handleCheck} />
            </Group>
          </Stack>
          <Textarea
            mt="md"
            label="Description"
            placeholder="Description"
            maxRows={10}
            minRows={5}
            autosize
            name="message"
            variant="filled"
            className={classes.section}
            onChange={e => setClubDescription(e.target.value)}
          />
          <Group justify="center" mt="xl" className={classes.button}>
            <Button type="submit" onClick={handleCreateClub} size="lg" color="#971B2F">
              Create Club
            </Button>
          </Group>
        </Paper>
      </Container>
    </div>
  );
}
