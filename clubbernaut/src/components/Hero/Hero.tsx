import cx from 'clsx';
import { Title, Text, Container, Button, Overlay } from '@mantine/core';
import classes from './Hero.module.css';
import Link from 'next/link';

export function Hero() {
  return (
    <div className={classes.wrapper}>
      <Overlay color="#000" backgroundOpacity={0.15} blur={3} zIndex={1} />

      <div className={classes.inner}>
        <Title className={classes.title}>
          <Text component="span" inherit className={classes.highlight}>
            Welcome to Clubbernaut!
          </Text>
        </Title>

        <Container size={640}>
          <Text size = "lg" className ={classes.description}>
            
          </Text>
        </Container>

        <div className={classes.controls}>
          <Button component={Link} href='/login' className={classes.control} variant="white" size="lg">
            Login
          </Button>
          <Button component={Link} href='/signup'className={classes.control} size="lg">
            Signup
          </Button>
        </div>
      </div>
    </div>
  );
}