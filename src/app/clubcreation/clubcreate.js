import { useState } from 'react';
import uploadFile from './uploadFile.js';

const { createClient } = require('@supabase/supabase-js');
const supabaseURL = process.env.SUPABASE_URL;
const supabaseKEY = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseURL, supabaseKEY);
const uuid = require('uuid');

const MakeClub = async (club_name, club_tags, club_description, thumbnail) => {
  const { data: exist, error_exist } = await supabase
    .from('Club Profile')
    .select('*')
    .eq('name', club_name);

  if (error_exist) {
    return { status: 'Error', msg: `${error_exist}` };
  }

  if (exist.length !== 0) {
    return { status: 'Error', msg: `Club already exist` };
  }

  const id = uuid.v4();
  const data = await uploadFile(thumbnail, 'club_thumbnails', id)
  const { data_insert, error_insert } = await supabase.from('Club Profile').insert({
    clubid: parseInt(id),
    name: club_name,
    tags: club_tags,
    description: club_description,
    thumbnail: data.path,
  });

  if (error_insert) {
    return { status: 'Error', msg: `${error_insert}` };
  } else {
    return { status: 'Success', msg: 'Club has been created successfully' };
  }
};

export default MakeClub;
