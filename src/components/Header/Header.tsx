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
import { useRouter } from 'next/navigation';

const { createClient } = require('@supabase/supabase-js');
const supabaseURL = process.env.SUPABASE_URL;
const supabaseKEY = process.env.SUPABASE_KEY;
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
  const router = useRouter();
  useEffect(() => {
    const fetch = async () => {
      let Name = await fetchUsernameByEmail(user.email);
      user.updateName(Name);
    };
    fetch();
  }, [user.email]);
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('dark', { getInitialValueInEffect: true });

  const handleSignOutClick = () => {
    useEffect(() => {
      const fetch = async () => {
        let Name = await fetchUsernameByEmail(user.email);
        user.updateName("");
      };
      fetch();
    }, []);
  }

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
              <a
                onClick={() => {
                  router.push('/');
                }}
                className={classes.link}
              >
                Home
              </a>
              <a
                onClick={() => {
                  router.push('/personal');
                }}
                className={classes.link}
              >
                Personal
              </a>
              <a
                onClick={() => {
                  router.push('/clubsearch');
                }}
                className={classes.link}
              >
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
                {user.email ? (
                  <>
                  <Group>
                    <span>
                      Welcome, {user.name}
                    </span> 
                    <Button 
                      color="#971B2F" 
                      component = {Link} 
                      onClick = {handleSignOutClick} 
                      href="/login"
                    > 
                      Sign Out
                    </Button>
                    </Group>
                  </>
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
