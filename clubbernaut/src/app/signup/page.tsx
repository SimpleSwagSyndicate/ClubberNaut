import {
    TextInput,
    PasswordInput,
    Checkbox,
    Anchor,
    Paper,
    Title,
    Text,
    Container,
    Group,
    Button,
  } from '@mantine/core';
  import classes from './signup.module.css';
  import Link from 'next/link';

  
  export default function signup() {
    return (
      <div>
      <Button component={Link} href='/'>
        Home
      </Button>
      <div>
      <Container size={420} my={40}>
        <Title ta="center" className={classes.title}>
          Create an Account!
        </Title>
        <Text c="dimmed" size="sm" ta="center" mt={5}>
          Already have an account?{' '}
          <Anchor size="sm" component={Link} href="/login">
            Login
          </Anchor>
        </Text>
  
        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <TextInput label="First Name" required />
          <TextInput label="Last Name" required mt="md"/>
          <TextInput label="Email" placeholder="Your email" required mt="md"/>
          <PasswordInput label="Password" placeholder="Your password" required mt="md" />
          <PasswordInput label="Confirm Password" placeholder="Your password" required mt="md" />
          <Group justify="space-between" mt="lg">
            <Checkbox label="Remember me" />
          </Group>
          <Button fullWidth mt="xl">
            Sign up
          </Button>
        </Paper>
      </Container>
      </div>
      </div>
    );
  }