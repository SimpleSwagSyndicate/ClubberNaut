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
  Space,
} from '@mantine/core';
import classes from './login.module.css';
import Link from 'next/link';
import logIn from './login';
import React, { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/navigation';
import { UserContext } from '@/controllers/UserInfo';

const { createClient } = require('@supabase/supabase-js');
const supabaseURL = process.env.SUPABASE_URL;
const supabaseKEY = process.env.SUPABASE_KEY;
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
        user.updateEmail(email);
        user.updateUserId(fetchedUserId);
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
          <Anchor c="#E20025" size="sm" component={Link} href="/signup">
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
            <Anchor c="#E20025" component="button" size="sm">
              Forgot password?
            </Anchor>
          </Group>
          <Space h={30} />
          <Button
            color="#971B2F"
            className={classes.login}
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
