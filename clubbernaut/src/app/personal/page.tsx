'use client'

import { Component } from 'react'
import classes from './personal.module.css'
import Link from 'next/link';
import { Text, ScrollArea, Title, Container, Stack, Paper, Group, Button, Space } from '@mantine/core'
import { PersonalCalendar } from '@/components/PersonalCalendar/PersonalCalendar';
import { useContext, useEffect,useState } from 'react';
import { UserContext } from '../../controllers/UserInfo';

export default function personal() {
    return (
        <div>
            <Group>
            <Title className={classes.title}>
                Your Clubs
            </Title>
            <Stack>
                <ScrollArea className={classes.scroll} w={300} h={500}>
                    <Paper style={{backgroundColor: "#971B2F"}} shadow="lg" p={50} radius={50}>
                        <Text> Club 1</Text>
                    </Paper>
                    <Space h='md'/>
                    <Paper style={{backgroundColor: "#971B2F"}} shadow="lg" p={50} radius={50}>
                        <Text> Club 2</Text>
                    </Paper>
                    <Space h='md'/>
                    <Paper style={{backgroundColor: "#971B2F"}} shadow="lg" p={50} radius={50}>
                        <Text> Club 3</Text>
                    </Paper>
                    <Space h='md'/>
                    <Paper style={{backgroundColor: "#971B2F"}} shadow="lg" p={50} radius={50}>
                        <Text> Club 4</Text>
                    </Paper>
                    <Space h='md'/>
                    <Paper style={{backgroundColor: "#971B2F"}} shadow="lg" p={50} radius={50}>
                        <Text> Club 5</Text>
                    </Paper>
                </ScrollArea>
                <Button className={classes.button} component={Link} href='/clubcreation' variant="default">Create Club</Button>
            </Stack>
            </Group>
            <Container className={classes.border} />
            <Container className={classes.calendar}>
            <PersonalCalendar/>
            </Container>
        </div>
    )
}