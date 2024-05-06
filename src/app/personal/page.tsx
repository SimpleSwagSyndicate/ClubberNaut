'use client';

import { Component } from 'react';
import classes from './personal.module.css';
import Link from 'next/link';
import {
  Text,
  ScrollArea,
  Title,
  Container,
  Stack,
  Paper,
  Group,
  Button,
  Space,
} from '@mantine/core';
import { PersonalCalendar } from '@/components/PersonalCalendar/PersonalCalendar';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../controllers/UserInfo';
import { useRouter } from 'next/navigation';

const { createClient } = require('@supabase/supabase-js');
const supabaseURL = 'https://fricdlpilwnfjdmtvvle.supabase.co';
const supabaseKEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZyaWNkbHBpbHduZmpkbXR2dmxlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg2MzQ1NzEsImV4cCI6MjAyNDIxMDU3MX0.PWWh9fYaHNEOoEC61p7k4TcdmrYwe-M5EWV5mwBC-Xk';
const supabase = createClient(supabaseURL, supabaseKEY);

const retrieve_followed_clubs = async (user_id: number) => {
  const { data: clubs, error } = await supabase
    .from('User Profile V1a')
    .select('clubs')
    .eq('userid', user_id);

  const user_clubs = clubs[0].clubs;

  return user_clubs;
};

export default function personal() {
  const user = useContext(UserContext);
  const user_id = user.userid;
  const [clubs, setClubs] = useState<any[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetch = async () => {
      let clubs = await retrieve_followed_clubs(user_id);
      setClubs(clubs);
    };
    fetch();
  }, [user_id]);

  const content = clubs.flat();
  return (
    <div>
      <Group>
        <Title className={classes.title}>Your Clubs</Title>
        <Stack>
          <ScrollArea className={classes.scroll} w={300} h={500}>
            {content.map((c: any, index: number) => (
              <div key={index}>
                <Paper
                  style={{ backgroundColor: '#971B2F' }}
                  shadow="lg"
                  p={50}
                  radius={50}
                  onClick={() => {
                    router.push('/clubhome');
                  }}
                >
                  <Text c="#FFFFFF">{c}</Text>
                </Paper>
                <Space h="md" />
              </div>
            ))}
          </ScrollArea>
          <Button
            className={classes.button}
            component={Link}
            href="/clubcreation"
            variant="default"
          >
            Create Club
          </Button>
        </Stack>
      </Group>
      <Container className={classes.border} />
      <Container className={classes.calendar}>
        <PersonalCalendar />
      </Container>
    </div>
  );
}
