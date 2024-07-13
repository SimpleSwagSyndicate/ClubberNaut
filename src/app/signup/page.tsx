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
import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';

export default function signup() {
  function useFormInput(initialValue: string) {
    const [value, setValue] = useState(initialValue);
    const handleChange = (e: any) => {
      setValue(e.target.value);
    };
    return {
      value,
      onChange: handleChange,
    };
  }

  // Component using custom hook

  const firstName = useFormInput('');
  const lastName = useFormInput('');
  const email = useFormInput('');
  const password = useFormInput('');
  const confirmPassword = useFormInput('');

  const router = useRouter();

  const handleSignup = async () => {
    const username: string = firstName.value + " " + lastName.value;
    const res = await SignUp(username, password.value, confirmPassword.value, email.value);
    if (res.status == 'Success') {
      router.push('/login');
    } else {
      alert(res.msg);
    }
    console.log();
  };

  return (
    <div className={classes.container}>
      <Container size={420} my={40}>
        <Title ta="center" className={classes.title}>
          Create an Account!
        </Title>
        <Text c="dimmed" size="sm" ta="center" mt={5}>
          Already have an account?{' '}
          <Anchor c='#E20025' size="sm" component={Link} href="/login">
            Login
          </Anchor>
        </Text>

        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <TextInput label="First Name" id="firstName" required {...firstName} />
          <TextInput label="Last Name" id="lastName" required mt="md" {...lastName} />
          <TextInput
            label="Email"
            placeholder="Your email"
            id="email"
            required
            mt="md"
            {...email}
          />
          <PasswordInput
            label="Password"
            placeholder="Your password"
            id="password"
            required
            mt="md"
            {...password}
          />
          <PasswordInput
            label="Confirm Password"
            placeholder="Your password"
            id="confirm_password"
            required
            mt="md"
            {...confirmPassword}
          />
          <Group justify="space-between" mt="lg">
            <Checkbox label="Remember me" />
          </Group>

          <Button color="#971B2F" onClick={handleSignup} fullWidth mt="xl">
            Sign up
          </Button>
        </Paper>
      </Container>
    </div>
  );
}
