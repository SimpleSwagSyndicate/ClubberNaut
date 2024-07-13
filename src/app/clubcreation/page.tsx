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
  Text,
  rem,
} from '@mantine/core';
import { IconUpload, IconPhoto, IconX } from '@tabler/icons-react';
import { Dropzone, DropzoneProps, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import classes from './clubcreation.module.css';
import MakeClub from './clubcreate';
import React, { useState, useEffect } from 'react';
import { getTags, handleCheck } from './handleCheck';
import { TagBox } from './CheckBox';

export default function clubcreation() {
  const [acceptedFiles, setAcceptedFile] = useState<File[]>([]);
  const [rejectedFiles, setRejectedFiles] = useState<File[]>([]);
  const [club_name, setClubName] = useState('');
  const [club_description, setClubDescription] = useState('');

  const handleDrop = (files: File[]) => {
    setAcceptedFile(files);
    console.log('accepted file', files[0]);
  };

  const handleReject = (files: any) => {
    setRejectedFiles(files);
    console.log('rejected files', files);
  };

  const handleCreateClub = async () => {
    const res = await MakeClub(club_name, getTags(), club_description, acceptedFiles[0]);
    alert(res.msg);
    console.log();
  };

  return (
    <div>
      <Title className={classes.title}>Club Creation</Title>
      <Container>
        <Paper shadow="lg" withBorder>
          <Stack>
            <TextInput
              label="Club Name"
              placeholder="Club Name"
              variant="filled"
              className={classes.section}
              onChange={e => setClubName(e.target.value)}
            />

            <Group align="center" className={classes.section}>
              <TagBox label={'Computer Science'} handleCheck={handleCheck} />
              <TagBox label={'AI'} handleCheck={handleCheck} />
              <TagBox label={'Security'} handleCheck={handleCheck} />
              <TagBox label={'Programming'} handleCheck={handleCheck} />
              <TagBox label={'Gaming'} handleCheck={handleCheck} />
              <TagBox label={'Esports'} handleCheck={handleCheck} />
              <TagBox label={'English'} handleCheck={handleCheck} />
              <TagBox label={'Literature'} handleCheck={handleCheck} />
              <TagBox label={'Books'} handleCheck={handleCheck} />
              <TagBox label={'Outdoor'} handleCheck={handleCheck} />
              <TagBox label={'Music'} handleCheck={handleCheck} />
              <TagBox label={'Sport'} handleCheck={handleCheck} />
              <TagBox label={'Adventure'} handleCheck={handleCheck} />
              <TagBox label={'Dance'} handleCheck={handleCheck} />
              <TagBox label={'Environment'} handleCheck={handleCheck} />
              <TagBox label={'Animal'} handleCheck={handleCheck} />
              <TagBox label={'Debate'} handleCheck={handleCheck} />
            </Group>
          </Stack>
          <Textarea
            mt="md"
            label="Description"
            placeholder="Description"
            maxRows={10}
            minRows={5}
            autosize
            name="message"
            variant="filled"
            className={classes.section}
            onChange={e => setClubDescription(e.target.value)}
          />
          <Dropzone
            onDrop={handleDrop}
            onReject={handleReject}
            maxSize={5 * 1024 ** 2}
            accept={IMAGE_MIME_TYPE}
          >
            <Group justify="center" gap="xl" mih={220} style={{ pointerEvents: 'none' }}>
              <Dropzone.Accept>
                <IconUpload
                  style={{ width: rem(52), height: rem(52), color: 'var(--mantine-color-blue-6)' }}
                  stroke={1.5}
                />
              </Dropzone.Accept>
              <Dropzone.Reject>
                <IconX
                  style={{ width: rem(52), height: rem(52), color: 'var(--mantine-color-red-6)' }}
                  stroke={1.5}
                />
              </Dropzone.Reject>
              <Dropzone.Idle>
                <IconPhoto
                  style={{ width: rem(52), height: rem(52), color: 'var(--mantine-color-dimmed)' }}
                  stroke={1.5}
                />
              </Dropzone.Idle>

              <div>
                <Text size="xl" inline>
                  Drag images here or click to select files
                </Text>
                <Text size="sm" c="dimmed" inline mt={7}>
                  Attach as many files as you like, each file should not exceed 5mb
                </Text>
              </div>
            </Group>
            <div>
              <h4>Accepted File</h4>
              <ul>
                {rejectedFiles.map((file, index) => (
                  <li key={index}>{file.name}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4>Rejected Files:</h4>
              <ul>
                {rejectedFiles.map((file, index) => (
                  <li key={index}>{file.name}</li>
                ))}
              </ul>
            </div>
          </Dropzone>
          <Group justify="center" mt="xl" className={classes.button}>
            <Button type="submit" onClick={handleCreateClub} size="lg" color="#971B2F">
              Create Club
            </Button>
          </Group>
        </Paper>
      </Container>
    </div>
  );
}
