'use client'

import { Component } from 'react'
import classes from './personal.module.css'
import Link from 'next/link';
import { Text, ScrollArea, Title, Container, Stack, Paper, Group, Button, Space } from '@mantine/core'
import { PersonalCalendar } from '@/components/PersonalCalendar/PersonalCalendar';
import { useContext, useEffect,useState } from 'react';
import { UserContext } from '../../controllers/UserInfo';

const {createClient} = require('@supabase/supabase-js')
const supabaseURL = '***REMOVED***'
const supabaseKEY = '***REMOVED***'
const supabase = createClient(supabaseURL,supabaseKEY)

const retrieve_followed_clubs = async(user_id: number) => {
    const { data: clubs, error} = await supabase
    .from('User Profile V1a')
    .select('clubs')
    .eq('userid', user_id)
    return clubs
}

export default function personal() {
    const user = useContext(UserContext)
    const user_id = user.userid
    const [clubs, setClubs] = useState<any[]>([])
    useEffect(() => {
        const fetch = async () => {
            let clubs = await retrieve_followed_clubs(user_id)
            setClubs(clubs)
        }   
        fetch()
    }, [])

    const content = clubs.flat()
    return (
        <div>
            <Group>
            <Title className={classes.title}>
                Your Clubs
            </Title>
            <Stack>
                <ScrollArea className={classes.scroll} w={300} h={500}>
                    { content.map((c: any,index:number) => (
                        <div key = { index }>
                            <Paper style={{backgroundColor: "#971B2F"}} shadow="lg" p={50} radius={50}>
                                <Text c='#FFFFFF'>{c.club}</Text>
                            </Paper>
                        </div>
                    ))}
                    {/*<Paper style={{backgroundColor: "#971B2F"}} shadow="lg" p={50} radius={50}>
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
                </Paper>*/}
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