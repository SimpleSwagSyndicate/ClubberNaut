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
import logIn from "./login"
import React, { useState, useEffect} from 'react';

export default function login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log("Email:", email);
    console.log("Password:", password);
    logIn(email, password);
  };

  useEffect(() => {
    setEmail('');
    setPassword('');
  }, []); 


  return (
    <div className={classes.container}>
    <Container size={420} >
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
        onChange={(e) => setEmail(e.target.value)} 
      />
       <PasswordInput 
        label="Password" 
        placeholder="Your password" 
        id="pwd" 
        required 
        mt="md" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
      />
        <Group justify="space-between" mt="lg">
          <Checkbox label="Remember me" />
          <Anchor component="button" size="sm">
            Forgot password?
          </Anchor>
        </Group>
        <button onClick={handleLogin}>
        Log in
      </button>
      </Paper>
    </Container>
    </div>
  );
}