import {
    Group,
    Button,
    Box,
    Image
  } from '@mantine/core';

  import classes from './Header.module.css';
  import Link from 'next/link';
  
  export function Header() {
  
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
              <a href="/" className={classes.link}>
                Personal
              </a>
              <a href="/clubsearch" className={classes.link}>
                Search
              </a>
            </Group>
  
            <Group visibleFrom="sm">
              <Button component={Link} href='/login' variant="default">Log in</Button>
              <Button color='#971B2F' component={Link} href='signup'>Sign up</Button>
            </Group>
  
          </Group>
        </header>
      </Box>
    );
  }