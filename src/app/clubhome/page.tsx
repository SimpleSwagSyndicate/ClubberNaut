'use client';
import classes from './clubhome.module.css';
import {
  Button,
  Stack,
  Text,
  Title,
  Input,
  Image,
  Paper,
  ScrollArea,
  ActionIcon,
  Group,
  Space,
  Badge,
  rem,
} from '@mantine/core';
import Link from 'next/link';
import { IconBellRinging, IconBell } from '@tabler/icons-react';
import cx from 'clsx';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '@/controllers/UserInfo';
import { FollowButton } from './FollowButton';
const { createClient } = require('@supabase/supabase-js');
const supabaseURL = process.env.SUPABASE_URL;
const supabaseKEY = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseURL, supabaseKEY);
const retrieve_club = async (club_id: number) => {
  const { data: club, error } = await supabase
    .from('Club Profile')
    .select('*')
    .eq('clubid', club_id);
  if (error) {
    console.log(`Error in retrieving club profile : ${error}`);
    return [];
  }
  const club_data = club[0];
  const club_name = club_data.name;
  const club_description = club_data.description;
  const club_tags = club_data.tags;
  const advisors = club_data.advisors;
  const club_advisors = Object.entries(advisors);
  const updates = club_data.recent_update[0];
  let club_updates: any[] = [];
  if (updates !== undefined) {
    club_updates = Object.values(updates);
  }
  return [club_name, club_description, club_tags, club_updates, club_advisors];
};

export default function clubhome(id: any) {
  const user = useContext(UserContext);
  const [club_data, setClub] = useState<any[]>([]);
  useEffect(() => {
    console.log('club id: ' + user.clubid);
    const fetch = async () => {
      let club = await retrieve_club(user.clubid);
      setClub(club);
    };
    fetch();
  }, [user.clubid, user.userid]);
  // console.log(club_data)
  const club_name = club_data[0];
  const club_description = club_data[1];
  const club_tags = club_data[2];
  const club_updates = club_data[3];
  const club_advisors = club_data[4];
  console.log(club_data[0] + ' clubnamepre');

  return (
    <div>
      <Stack className={classes.section}>
        <Title style={{ textAlign: 'center' }}>Welcome to {club_name}</Title>
        <Text style={{ textAlign: 'center' }}>{club_description}</Text>
        <ScrollArea className={classes.scroll} w={700} h={500}>
          {club_updates?.map((c: any, index: number) => (
            <div key={index}>
              <Paper style={{ backgroundColor: '#971B2F' }} shadow="lg" p={50} radius={50}>
                <Text c="#FFFFFF"> {c.date} </Text>
                <Text c="#FFFFFF"> {c.title} </Text>
                <br></br>
                <Text c="#FFFFFF"> {c.description} </Text>
              </Paper>
              <Space h="md" />
            </div>
          ))}
        </ScrollArea>
      </Stack>
      <Paper
        className={classes.icon}
        shadow="lg"
        style={{ backgroundColor: '#971B2F' }}
        radius="lg"
      >
        <Stack>
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/4/4f/UMass_Seal_Medium_PMS_202.png"
            fit="cover"
          />
          <Group>
            {club_data ? (
              <FollowButton clubName={club_data[0]} userID={user.userid} />
            ) : (
              <Button color="#971B2F" w={295}></Button>
            )}
            {user.email ? (
              <ActionIcon
                h={35}
                w={35}
                component={Link}
                href="/updatecreation"
                style={{ backgroundColor: 'white' }}
              >
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs5zjQLl6LKORaiXMgf6cd8IvGn-SFynjyCP2U9fqXHA&s"
                  width={20}
                  height={20}
                ></img>
              </ActionIcon>
            ) : (
              <ActionIcon
                h={35}
                w={35}
                component={Link}
                href="/login"
                style={{ backgroundColor: 'white' }}
              >
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs5zjQLl6LKORaiXMgf6cd8IvGn-SFynjyCP2U9fqXHA&s"
                  width={20}
                  height={20}
                ></img>
              </ActionIcon>
            )}
            <ActionIcon h={35} w={35} style={{ backgroundColor: 'black' }}>
              {/*<IconBellRinging />*/}
              <IconBell />
            </ActionIcon>
          </Group>
          {club_tags?.map((tag: string) => (
            <Badge color="white" variant="light" key={tag}>
              {tag}
            </Badge>
          ))}
          {club_advisors?.map((advisor: any) => (
            <Text style={{ textAlign: 'center' }}>
              {advisor[0]}: {advisor[1].name} {advisor[1].email}
            </Text>
          ))}
        </Stack>
      </Paper>
    </div>
  );
}
