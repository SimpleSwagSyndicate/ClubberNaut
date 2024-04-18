'use client'

import { Image, Paper, ScrollArea, Text, Title , Space} from '@mantine/core';
import classes from './Hero.module.css';
import { useContext, useEffect } from 'react';
import { UserContext } from '../../controllers/UserInfo';
import { resolve } from 'path';

const {createClient} = require('@supabase/supabase-js')
const supabaseURL = '***REMOVED***'
const supabaseKEY = '***REMOVED***'
const supabase = createClient(supabaseURL,supabaseKEY)

async function retrieve_updates(user_id:number){
  const {data: clubs,error} = await supabase
  .from('User Profile V1a')
  .select('clubs')
  .eq('userid',user_id)

  const user_clubs = clubs[0].clubs
  const updates = []
  for (let i = 0; i < user_clubs.length;i++){
    const club_name = user_clubs[i]

    const {data: update,error} = await supabase
    .from('Club Profile')
    .select('recent_update')
    .eq('name',club_name)

    const club_updates = update[0].recent_update

    updates.push([club_name,club_updates])
  }
  return updates
}

export function Hero() {
  const user = useContext(UserContext)
  const user_id = user.userid

  return (
    <div>
     <Title className={classes.update}>
      Here's what's going on in your communities...
     </Title>
     <div>
      <Image
       className={classes.logo}
       src='/clubbernaut-high-resolution-logo-transparent.png'
       alt='Logo'
       />
     <div className={classes.scroll}>
     <ScrollArea w={600} h={450}>
      <Paper style={{backgroundColor: "#FFFFFF"}} shadow="lg" withBorder p={50} radius={50}>
        <Text c='black'> This is an update</Text>
      </Paper>
      <Space h="md" />
      <Paper style={{backgroundColor: "#FFFFFF"}} shadow="lg" withBorder p={50} radius={50}>
        <Text c='black'> This is an update</Text>
      </Paper>
      <Space h="md" />
      <Paper style={{backgroundColor: "#FFFFFF"}} shadow="lg" withBorder p={50} radius={50}>
        <Text c='black'> This is an update</Text>
      </Paper>
      <Space h="md" />
      <Paper style={{backgroundColor: "#FFFFFF"}} shadow="lg" withBorder p={50} radius={50}>
        <Text c='black'> This is an update</Text>
      </Paper>
      <Space h="md" />
      <Paper style={{backgroundColor: "#FFFFFF"}} shadow="lg" withBorder p={50} radius={50}>
        <Text c='black'> This is an update</Text>
      </Paper>
      <Space h="md" />
      <Paper style={{backgroundColor: "#FFFFFF"}} shadow="lg" withBorder p={50} radius={50}>
        <Text c='black'> This is an update</Text>
      </Paper>
     </ScrollArea>
     </div>
     </div>
     </div>
  );
}