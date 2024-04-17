'use client'

import { Image, Paper, ScrollArea, Text, Title , Space} from '@mantine/core';
import classes from './Hero.module.css';
import { useContext, useEffect } from 'react';
import { UserContext } from '../../controllers/UserInfo';

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