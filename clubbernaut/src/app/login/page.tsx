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
import classes from './login.module.css';
import Link from 'next/link';
import logIn from './login';
import React, { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/navigation';
import { UserContext } from '@/controllers/UserInfo';

const { createClient } = require('@supabase/supabase-js');
const supabaseURL = 'https://fricdlpilwnfjdmtvvle.supabase.co';
const supabaseKEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZyaWNkbHBpbHduZmpkbXR2dmxlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg2MzQ1NzEsImV4cCI6MjAyNDIxMDU3MX0.PWWh9fYaHNEOoEC61p7k4TcdmrYwe-M5EWV5mwBC-Xk';
const supabase = createClient(supabaseURL, supabaseKEY);

const fetchUserIdByEmail = async (email: any) => {
  try {
    const { data, error } = await supabase
      .from('User Profile V1a')
      .select('userid')
      .eq('email', email)
      .single(); // Assuming there is only one user with the given email

    if (error) {
      throw error;
    }

    if (data) {
      return data.userid; // Return the username if found
    } else {
      return null; // Return null if no user found with the given email
    }
  } catch (error) {
    console.error('Error fetching username:', error.message);
    return null;
  }
};

export default function login() {
  const user = useContext(UserContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  useEffect(() => {
    setEmail('');
    setPassword('');
  }, []);

  const handleLogin = async () => {
    const res = await logIn(email, password);
    let fetchedUserId = await fetchUserIdByEmail(email);

    try {
      if (res.status == 'Success' && fetchedUserId != null) {
        user.setEmail(email);
        user.updateUserId(100);
        router.push('/');
      } else {
        alert('Incorrect password. Please try again.');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={classes.container}>
      <Container size={420}>
        <Title ta="center" className={classes.title}>
          Welcome back!
        </Title>
        <Text c="dimmed" size="sm" ta="center" mt={5}>
          Do not have an account yet?{' '}
          <Anchor size="sm" component={Link} href="/signup">
            Create account
          </Anchor>
        </Text>

        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <TextInput
            label="Email"
            placeholder="Your email"
            id="email"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <PasswordInput
            label="Password"
            placeholder="Your password"
            id="pwd"
            required
            mt="md"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <Group justify="space-between" mt="lg">
            <Checkbox label="Remember me" />
            <Anchor component="button" size="sm">
              Forgot password?
            </Anchor>
          </Group>
          <Button
            onClick={() => {
              handleLogin();
            }}
          >
            Log in
          </Button>
        </Paper>
      </Container>
    </div>
  );
}
