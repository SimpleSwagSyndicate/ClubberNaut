"use client"
import {
    Group,
    Button,
    Box,
    Image,
    useMantineColorScheme,
    useComputedColorScheme,
    Text,
    ActionIcon
  } from '@mantine/core';
  import cx from 'clsx';
  import classes from './Header.module.css';
  import Link from 'next/link';
  
  export function Header() {
    const { setColorScheme } = useMantineColorScheme();
    const computedColorScheme = useComputedColorScheme('dark', { getInitialValueInEffect: true })
    return (
      <Box pb={120}>
        <header className={classes.header}>
          <Group justify="space-between" h="100%">
            <Group h="100%" gap={0} visibleFrom="sm">
              <Image
                className={classes.logo}
                src='/clubbernaut-high-resolution-logo-transparent.png'
                alt='Logo'
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
              color='#971B2F'
              onClick={() => setColorScheme(computedColorScheme === 'dark' ? 'light' : 'dark')}
              variant='default'
              
              >
              <Text className={cx(classes.icon, classes.light)}>L</Text>
              <Text className={cx(classes.icon, classes.dark)}>D</Text>
              </ActionIcon>
              <Button component={Link} href='/login' variant="default">Log in</Button>
              <Button color='#971B2F' component={Link} href='signup'>Sign up</Button>
            </Group>
  
          </Group>
        </header>
      </Box>
    );
  }