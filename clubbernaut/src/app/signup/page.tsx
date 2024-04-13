'use client';
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
  import SignUp from './Signup';
  import Link from 'next/link';


  
  export default function signup() {
    return (
      <div className={classes.container}>
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
          <TextInput label="First Name" id="firstName" required />
          <TextInput label="Last Name" id="lastName" required mt="md"/>
          <TextInput label="Email" placeholder="Your email" id="email" required mt="md"/>
          <PasswordInput label="Password" placeholder="Your password" id="password" required mt="md" />
          <PasswordInput label="Confirm Password" placeholder="Your password" id="confirm_password" required mt="md" />
          <Group justify="space-between" mt="lg">
            <Checkbox label="Remember me" />
          </Group>
         
          <Button onClick={() => console.log(SignUp((document.getElementById("firstName") as HTMLInputElement)!.value + (document.getElementById("lastName") as HTMLInputElement)!.value, (document.getElementById("password")! as HTMLInputElement).value, (document.getElementById("confirm_password")! as HTMLInputElement).value, (document.getElementById("email")! as HTMLInputElement).value ))} fullWidth mt="xl">
            Sign up
          </Button>
          
        </Paper>
      </Container>
      </div>
    );
  }