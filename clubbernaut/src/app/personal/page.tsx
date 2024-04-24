import { Component } from 'react'
import classes from './personal.module.css'
import Link from 'next/link';
import { Title, Container, Stack, Paper, Group, Button } from '@mantine/core'
export default function personal() {
    return (
        <div>
            <Button component={Link} href='/clubcreation' variant="default">Create Club</Button>
            <Group>
            <Title className={classes.title}>
                Your Clubs
            </Title>
                <Stack className={classes.listClubs}>
                    <Paper className={classes.clubCard} style={{backgroundColor: "#971B2F"}} shadow="lg" p={50} radius={50} >
                        Club 1
                    </Paper>
                    <Paper style={{backgroundColor: "#971B2F"}} shadow="lg" p={50} radius={50} >
                        Club 2
                    </Paper>
                    <Paper style={{backgroundColor: "#971B2F"}} shadow="lg" p={50} radius={50} >
                        Club 3
                    </Paper>
                    <Paper style={{backgroundColor: "#971B2F"}} shadow="lg" p={50} radius={50} >
                        Club 4
                    </Paper>
                </Stack>
            </Group>
            <Container className={classes.border} />
        </div>
    )
}