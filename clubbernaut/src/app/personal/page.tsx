import { Component } from 'react'
import classes from './personal.module.css'
import Link from 'next/link';
import { Text, ScrollArea, Title, Container, Stack, Paper, Group, Button, Space } from '@mantine/core'
export default function personal() {
    return (
        <div>
            <Group>
            <Title className={classes.title}>
                Your Clubs
            </Title>
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
            </Group>
            <Container className={classes.border} />
        </div>
    )
}