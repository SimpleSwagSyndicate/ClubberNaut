'use client';
import {
  Group,
  Button,
  Box,
  Image,
  useMantineColorScheme,
  useComputedColorScheme,
  Text,
  ActionIcon,
} from '@mantine/core';
import cx from 'clsx';
import classes from './Header.module.css';
import Link from 'next/link';
import { UserContext, UserInfo } from '@/controllers/UserInfo';
import { useContext } from 'react';
import { useEffect, useState } from 'react';
const { createClient } = require('@supabase/supabase-js');
const supabaseURL = 'https://fricdlpilwnfjdmtvvle.supabase.co';
const supabaseKEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZyaWNkbHBpbHduZmpkbXR2dmxlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg2MzQ1NzEsImV4cCI6MjAyNDIxMDU3MX0.PWWh9fYaHNEOoEC61p7k4TcdmrYwe-M5EWV5mwBC-Xk';
const supabase = createClient(supabaseURL, supabaseKEY);
// Function to fetch username based on email
const fetchUsernameByEmail = async (email: any) => {
  try {
    const { data, error } = await supabase
      .from('User Profile V1a')
      .select('name')
      .eq('email', email)
      .single(); // Assuming there is only one user with the given email

    if (error) {
      throw error;
    }

    if (data) {
      return data.name; // Return the username if found
    } else {
      return null; // Return null if no user found with the given email
    }
  } catch (error) {
    console.error('Error fetching username:', error.message);
    return null;
  }
};
export function Header() {
  const user = useContext(UserContext);
  const [email, setEmail] = [user.email, user.setEmail];
  let [name, setName] = useState('');
  useEffect(() => {
    const fetch = async () => {
      let Name = await fetchUsernameByEmail(email);
      setName(Name);
    };
    fetch();
  }, [email]);
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('dark', { getInitialValueInEffect: true });
  return (
    <UserInfo>
      <Box pb={120}>
        <header className={classes.header}>
          <Group justify="space-between" h="100%">
            <Group h="100%" gap={0} visibleFrom="sm">
              <Image
                className={classes.logo}
                src="/clubbernaut-high-resolution-logo-transparent.png"
                alt="Logo"
              />
              <a href="/" className={classes.link}>
                Home
              </a>
              <a href="/personal" className={classes.link}>
                Personal
              </a>
              <a href="/clubsearch" className={classes.link}>
                Search
              </a>
            </Group>

            <Group visibleFrom="sm">
              <ActionIcon
                color="#971B2F"
                onClick={() => setColorScheme(computedColorScheme === 'dark' ? 'light' : 'dark')}
                variant="default"
              >
                <Text className={cx(classes.icon, classes.light)}>L</Text>
                <Text className={cx(classes.icon, classes.dark)}>D</Text>
              </ActionIcon>
              <div>
                {email ? (
                  <span>Welcome, {name}</span>
                ) : (
                  <>
                    <Group>
                      <Button component={Link} href="/login" variant="default">
                        Log in
                      </Button>
                      <Button color="#971B2F" component={Link} href="signup">
                        Sign up
                      </Button>
                    </Group>
                  </>
                )}
              </div>
            </Group>
          </Group>
        </header>
      </Box>
    </UserInfo>
  );
}
