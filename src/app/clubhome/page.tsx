'use client';
import classes from './clubhome.module.css';
import {
  Button,
  Stack,
  Text,
  Title,
  Container,
  Image,
  Paper,
  ScrollArea,
  ActionIcon,
  Group,
  Space,
  Badge,
} from '@mantine/core';
import { IconBellRinging, IconBell } from '@tabler/icons-react';
import cx from 'clsx';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '@/controllers/UserInfo';

const { createClient } = require('@supabase/supabase-js');
const supabaseURL = 'https://fricdlpilwnfjdmtvvle.supabase.co';
const supabaseKEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZyaWNkbHBpbHduZmpkbXR2dmxlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg2MzQ1NzEsImV4cCI6MjAyNDIxMDU3MX0.PWWh9fYaHNEOoEC61p7k4TcdmrYwe-M5EWV5mwBC-Xk'
const supabase = createClient(supabaseURL, supabaseKEY);

const retrieve_club = async (club_id:number) => {
  const {data:club, error} = await supabase
    .from('Club Profile')
    .select('*')
    .eq('clubid',club_id)

  if (error){
    console.log(`Error in retrieving club profile : ${error}`);
    return []
  }

  const club_data = club[0]

  const club_name = club_data.name
  const club_description = club_data.description
  const club_tags = club_data.tags

  const advisors = club_data.advisors
  const club_advisors = Object.entries(advisors)

  const updates = club_data.recent_update[0]
  const club_updates: any[] = Object.values(updates)

  return [club_name,club_description,club_tags,club_updates,club_advisors]
}

export default function clubhome(id: any) {
  const user = useContext(UserContext);
  const [club_data,setClub] = useState<any[]>([])

  useEffect(() => {
    console.log('club id: '+ user.clubid)
    const fetch = async () => {
      let club = await retrieve_club(user.clubid)
      setClub(club)
    }
    fetch()
  },[user.clubid])

  console.log(club_data)
  const club_name = club_data[0]
  const club_description = club_data[1]
  const club_tags = club_data[2]
  const club_updates = club_data[3]
  const club_advisors = club_data[4]

  return (
    <div>
      <Container>
      <Stack>
        <Title className={classes.title}>Welcome to {club_name}</Title>
        <Text className={classes.section}>{club_description}</Text>
        <ScrollArea className={classes.scroll} w={700} h={500}>
          {club_updates?.map((c:any,index:number) => (
            <div key = {index}>
              <Paper style={{ backgroundColor: '#971B2F' }} shadow="lg" p={50} radius={50}>
                  <Text c="#FFFFFF">
                    {' '}
                    {c.date}{' '}
                  </Text>
                  <Text c="#FFFFFF">
                    {' '}
                    {c.title}{' '}
                  </Text>
                  <br></br>
                  <Text c="#FFFFFF">
                    {' '}
                    {c.description}{' '}
                  </Text>
              </Paper>
              <Space h="md" />
            </div>
          ))}
        </ScrollArea>
      </Stack>
      </Container>
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
            <Button color="#971B2F" w={295}>
              Follow
            </Button>
            <ActionIcon h={35} w={35} style={{ backgroundColor: 'black' }}>
              {/*<IconBellRinging />*/}
              <IconBell />
            </ActionIcon>
          </Group>
          <Group>
          {club_tags?.map((tag:string) => (
            <Badge color="white" variant="light" key={tag}>
              {tag}
            </Badge>
            
          ))}
          </Group>
          {club_advisors?.map((advisor:any) => (
            <Text style={{ textAlign: 'center' }}>{advisor[0]}:  {advisor[1].name} {advisor[1].email}</Text>
          ))}
        </Stack>
      </Paper>
    </div>
  );
}
