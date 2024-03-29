import cx from 'clsx';
import { Title, Text, Container, Button, Overlay } from '@mantine/core';
import classes from './Hero.module.css';

export function Hero() {
  return (
    <div className={classes.wrapper}>
      <Overlay color="#000" opacity={.65} zIndex={1} />

      <div className={classes.inner}>
        <Title className={classes.title}>
          <Text component="span" inherit className={classes.highlight}>
            Welcome to Clubbernaut!
          </Text>
        </Title>

        <Container size={640}>
          <Text size = "lg" className ={classes.description}>
            Find new clubs, follow your favorite clubs, receive updates and more!
          </Text>
        </Container>

        <div className={classes.controls}>
          <Button className={classes.control} variant="white" size="lg">
            Login
          </Button>
          <Button className={cx(classes.control, classes.secondaryControl)} size="lg">
            Signup
          </Button>
        </div>
      </div>
    </div>
  );
}