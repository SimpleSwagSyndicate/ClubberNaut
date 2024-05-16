'use client';

import {
  Paper,
  Stack,
  TextInput,
  Textarea,
  Container,
  Group,
  Title,
  Button,
  Checkbox,
} from '@mantine/core';
import '@mantine/dates/styles.css';
import classes from './updatecreation.module.css';
import { useState } from 'react';
import { DatePickerInput } from '@mantine/dates';

const { createClient } = require('@supabase/supabase-js');
const supabaseURL = process.env.SUPABASE_URL;
const supabaseKEY = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseURL, supabaseKEY);

const MakeUpdate = async (club_name:string,date:string,title:string,description:string) => {
  const {data:update, error } = await supabase
    .from('Club Profile')
    .select('recent_update')
    .ilike('name','%' + club_name + '%')

  if (error){
    return { status : 'Error', msg: `${error}`}
  }

  if (update.length == 0){
    return { status : 'Error', msg: 'Club not found.'}
  }

  const obj = update[0].recent_update[0];

  if (obj === undefined){
    let update_list = [];
    const new_obj = {"Update 1": {
        "date": date,
        "title": title,
        "description": description,
    }}
    update_list.push(new_obj);

    const {data, error} = await supabase
        .from('Club Profile')
        .update({recent_update : update_list})
        .ilike('name','%' + club_name + '%')
    
    return { status : 'Success', msg: 'Update has been added.'}
  }

  else{
    let update_list = [];
    const update_no = Object.keys(obj).length + 1
    const key = 'Update ' + String(update_no)
    obj[key] = {
        "date": date,
        "title": title,
        "description": description,
    }
    update_list.push(obj);
    const {data, error} = await supabase
        .from('Club Profile')
        .update({recent_update : update_list})
        .ilike('name','%' + club_name + '%')

    return { status : 'Success', msg: 'Update has been added.'}
  }

}

const convertFormat = (value:string) => {
  const date = new Date(value);
  const day = date.getDate()
  let month = String(date.getMonth() + 1)
  if (month.length < 2){
    month = '0' + month
  }
  const year = date.getFullYear()

  return String(month)+"/"+String(day)+"/"+String(year)
}

export default function updatecreation() {
  const [value, setValue] = useState<Date | null>(null);
  const [club_name, setClubName] = useState('');
  const [title, setTitle] = useState('');
  const [description,setDescription] = useState('');

  const handleCreateUpdate = async () => {
    const res = await MakeUpdate(club_name.trim(),convertFormat(String(value)),title,description)
    alert(res.msg);
  }

  return (
    <div>
      <Title className={classes.title}>Write an Update</Title>
      <Container>
        <Paper shadow="lg" withBorder>
        <Stack 
        gap='xs'
        align="stretch"
      justify="center">
          <TextInput
            label="Club Name"
            placeholder="Club Name"
            variant="filled"
            onChange = {(e:any) => setClubName(e.target.value)}
            className={classes.section}
          />
          <DatePickerInput
            label="Date"
            placeholder="Date"
            value={value}
            onChange={setValue}
            className={classes.section}
          />
          <TextInput
            label="Update Title"
            placeholder="Update Title"
            variant="filled"
            onChange = {e => setTitle(e.target.value)}
            className={classes.section}
          />
          <Textarea
            mt="md"
            label="Update Description"
            placeholder="Update Description"
            maxRows={10}
            minRows={5}
            autosize
            name="message"
            variant="filled"
            onChange = {e => setDescription(e.target.value)}
            className={classes.section}
          />
          </Stack>
          <Group justify="center" mt="xl" className={classes.button}>
            <Button type="submit" onClick ={handleCreateUpdate} size="lg" color="#971B2F">
              Write Update
            </Button>
          </Group>
        </Paper>
      </Container>
    </div>
  );
}
