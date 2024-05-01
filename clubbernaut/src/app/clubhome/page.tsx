"use client"
import classes from './clubhome.module.css'
import { Button, Stack, Text, Title, Input, Image, Paper, ScrollArea, ActionIcon, Group, Space } from '@mantine/core'
import { IconBellRinging, IconBell } from '@tabler/icons-react'
import cx from 'clsx'
export default function clubhome(id: any) {
    return (
        <div>
            <Stack className={ classes.section }>
            <Title className={ classes.title }>Welcome to the club!</Title>
            <Text style={{textAlign: 'center'}}>description</Text>
            <ScrollArea className={ classes.scroll } w={700} h={500}>
                <Paper style={{backgroundColor: "#971B2F"}} shadow="lg" p={50} radius={50}>update!</Paper>
                <Space h='lg' />
                <Paper style={{backgroundColor: "#971B2F"}} shadow="lg" p={50} radius={50}>update!</Paper>
                <Space h='lg' />
                <Paper style={{backgroundColor: "#971B2F"}} shadow="lg" p={50} radius={50}>update!</Paper>
                <Space h='lg' />
                <Paper style={{backgroundColor: "#971B2F"}} shadow="lg" p={50} radius={50}>update!</Paper>
                <Space h='lg' />
                <Paper style={{backgroundColor: "#971B2F"}} shadow="lg" p={50} radius={50}>update!</Paper>
                <Space h='lg' />
                <Paper style={{backgroundColor: "#971B2F"}} shadow="lg" p={50} radius={50}>update!</Paper>
                <Space h='lg' />
                <Paper style={{backgroundColor: "#971B2F"}} shadow="lg" p={50} radius={50}>update!</Paper>
                <Space h='lg' />
            </ScrollArea>
            </Stack>
            <Paper className={ classes.icon } shadow='lg'
            style={{backgroundColor: "#971B2F"}} radius='lg'>
            <Stack>
                <Image 
                src='https://upload.wikimedia.org/wikipedia/commons/4/4f/UMass_Seal_Medium_PMS_202.png'
                fit='cover'
                />
                <Group>
                <Button color="#971B2F" w={295} >Follow</Button>
                <ActionIcon h={35} w={35} style={{backgroundColor: 'black'}}
                >
                    {/*<IconBellRinging />*/}
                    <IconBell />
                </ActionIcon>
                </Group>
                Full tag list
                <Text style={{textAlign: 'center'}}>contact 1</Text>
                <Text style={{textAlign: 'center'}}>contact 2</Text> 
                </Stack>
            </Paper>
        </div>
    )
}

