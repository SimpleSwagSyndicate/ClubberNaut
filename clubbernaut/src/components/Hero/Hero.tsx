'use client'

import { Image, Paper, ScrollArea, Text, Title , Space} from '@mantine/core';
import classes from './Hero.module.css';
import { useContext, useEffect,useState } from 'react';
import { UserContext } from '../../controllers/UserInfo';
import { resolve } from 'path';

const {createClient} = require('@supabase/supabase-js')
const supabaseURL = 'https://fricdlpilwnfjdmtvvle.supabase.co'
const supabaseKEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZyaWNkbHBpbHduZmpkbXR2dmxlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg2MzQ1NzEsImV4cCI6MjAyNDIxMDU3MX0.PWWh9fYaHNEOoEC61p7k4TcdmrYwe-M5EWV5mwBC-Xk'
const supabase = createClient(supabaseURL,supabaseKEY)

const retrieve_updates = async (user_id:number) => {
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

    updates.push([club_name,club_updates[0]])
  }
  return updates
}

export function Hero() {
  const user = useContext(UserContext)
  const user_id = user.userid
  const [updates,setUpdates] = useState<any[][]>([])

  useEffect(() => {
    const fetch = async () => {
      let updates = await retrieve_updates(user_id)
      setUpdates(updates)
    }
    fetch()
  },[user_id])

  const content = updates.map(u => {
    const club = u[0]
    const content = u[1]
    const content_with_club = Object.values(content).map((c:any)=>({...c,club:club}))
    return content_with_club
  }).flat();

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
     <ScrollArea w={600} h={600}>
        {content.map((c:any,index)=>(
          <div key = {index} >
            <Paper style={{backgroundColor: "#971B2F"}} shadow="lg" p={50} radius={50}>
              <Text c='#FFFFFF' className = {classes.club}> {c.club} </Text>
              <br></br>
              <Text c='#FFFFFF' className = {classes.content}> {c.date} </Text>
              <Text c='#FFFFFF' className = {classes.content}> {c.title} </Text>
              <br></br>
              <Text c='#FFFFFF' className = {classes.content}> {c.description} </Text>
            </Paper> 
            <Space h="md" />
          </div>
        ))}
     </ScrollArea>
     </div>
     </div>
     </div>
  );
}