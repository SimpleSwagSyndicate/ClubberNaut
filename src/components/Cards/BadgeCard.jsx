import { Card, Image, Text, Group, Badge, Button, CardSection, Anchor } from '@mantine/core';
import classes from './BadgeCard.module.css';
import { Link } from 'next/link';
import { UserContext } from '@/controllers/UserInfo';
import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const { createClient } = require('@supabase/supabase-js');
const supabaseURL = 'https://fricdlpilwnfjdmtvvle.supabase.co';
const supabaseKEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZyaWNkbHBpbHduZmpkbXR2dmxlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg2MzQ1NzEsImV4cCI6MjAyNDIxMDU3MX0.PWWh9fYaHNEOoEC61p7k4TcdmrYwe-M5EWV5mwBC-Xk'
const supabase = createClient(supabaseURL, supabaseKEY);

const retrieve_club_id = async (club_name) => {
  const {data: clubid, error} = await supabase
    .from('Club Profile')
    .select('clubid')
    .eq('name',club_name)
  const club_id = clubid[0].clubid
  return club_id
}

export const BadgeCard = props => {
  const user = useContext(UserContext);
  const features = props.tags.map(tag => (
    <Badge color="white" variant="light" key={tag}>
      {tag}
    </Badge>
  ));
  const router = useRouter();
  return (
    <Card withBorder radius="md" p="md" className={classes.card}>
      <CardSection>
        <Image src={props.image} alt={props.name} height={150} />
      </CardSection>

      <CardSection className={classes.section} mt="md">
        <Group justify="apart">
          <Anchor
            variant="gradient"
            gradient={{ from: 'white', to: '#971B2F' }}
            fz="lg"
            fw={500}
            onClick={async () => {
              const club_id = await retrieve_club_id(props.name)
              user.updateClubId(club_id)
              router.push('/clubhome');
            }}
            underline="never"
          >
            {props.name}
          </Anchor>
        </Group>
      </CardSection>

      <CardSection className={classes.tagsection}>
        <Text mt="md" className={classes.label} c="dimmed">
          Perfect for you, if you enjoy
        </Text>
        <Group gap={7} mt={5}>
          {features}
        </Group>
      </CardSection>
      <CardSection className={classes.buttonsection}>
        <Group mt="xs">
          <Button color="#971B2F" radius="md" style={{ flex: 1 }}>
            Follow
          </Button>
        </Group>
      </CardSection>
    </Card>
  );
};
