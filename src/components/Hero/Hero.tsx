'use client';

import { Image, Paper, ScrollArea, Text, Title, Space, Container } from '@mantine/core';
import classes from './Hero.module.css';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../controllers/UserInfo';
import { useRouter } from 'next/navigation';
import { resolve } from 'path';

const { createClient } = require('@supabase/supabase-js');
const supabaseURL = process.env.SUPABASE_URL;
const supabaseKEY = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseURL, supabaseKEY);

const retrieve_club_id = async (club_name:string) => {
  const {data: clubid, error} = await supabase
    .from('Club Profile')
    .select('clubid')
    .eq('name',club_name)
  const club_id = clubid[0].clubid
  return club_id
}

const retrieve_updates = async (user_id: number) => {
  const { data: clubs, error } = await supabase
    .from('User Profile V1a')
    .select('clubs')
    .eq('userid', user_id);

  if (clubs === null){
    return [];
  }

  const user_clubs = clubs[0]?.clubs;
  const updates = [];
  for (let i = 0; i < user_clubs?.length; i++) {
    const club_name = user_clubs[i];

    const { data: update, error } = await supabase
      .from('Club Profile')
      .select('recent_update')
      .eq('name', club_name);

    if (update[0] === undefined) {
      continue;
    }
    const club_updates = update[0].recent_update;

    updates.push([club_name, club_updates[0]]);
  }
  return updates;
};

export function Hero() {
  const user = useContext(UserContext);
  const [updates, setUpdates] = useState<any[][]>([]);

  useEffect(() => {
    console.log('USER ID: ' + user.userid);
    const fetch = async () => {
      let updates = await retrieve_updates(user.userid);
      setUpdates(updates);
    };
    fetch();
  }, [user.userid]);

  const content = updates
    .map(u => {
      const club = u[0];
      const content = u[1];
      if (content == null) {
        return [];
      }
      const content_with_club = Object.values(content).map((c: any) => ({ ...c, club: club }));
      return content_with_club;
    })
    .flat();
    
  const router = useRouter();

  return (
    <div>
      <text className={classes.update}>Here's what's going on in your communities...</text>
      <div>
        <Image
          className={classes.logo}
          src="/clubbernaut-high-resolution-logo-transparent.png"
          alt="Logo"
        />

        <div className={classes.scroll}>
          {user.email ? (
          <div>  
          {content.length != 0 ? (
          <ScrollArea w={600} h={600}>
            {content.map((c: any, index) => (
              <div key={index}>
                <Paper style={{ backgroundColor: '#971B2F' }} onClick={async () => {
              const club_id = await retrieve_club_id(c.club)
              user.updateClubId(club_id)
              router.push('/clubhome');
            }} shadow="lg" p={50} radius={50}>
                  <text className={classes.club}>
                    {' '}
                    {c.club}{' '}
                  </text>
                  <br/>
                  <br/>
                  <text className={classes.content}>
                    {' '}
                    {c.date}{' '}
                  </text>
                  <br/>
                  <text className={classes.content}>
                    {' '}
                    {c.title}{' '}
                  </text>
                  <br/>
                  <br/>
                  <text className={classes.content}>
                    {' '}
                    {c.description}{' '}
                  </text>
                </Paper>
                <Space h="md" />
              </div>
            ))}
          </ScrollArea>
          ) : (
            <div>
            <Paper className={classes.message} withBorder p="xl">
            <text className={classes.text1}>You have no new updates</text>
            </Paper>
            </div>
          )}
          </div>
        ):(
          <div>
            <Paper className={classes.message} withBorder p="xl">
            <text className={classes.text2}>Log in to see updates!</text>
            </Paper>
            </div>
        )}
        </div>
      </div>
    </div>
  );
}
