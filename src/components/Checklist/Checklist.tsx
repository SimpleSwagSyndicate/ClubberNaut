import { Checkbox, Stack, Title, Paper, Container, Grid } from '@mantine/core';
import classes from './checklist.module.css';
import { TagBox } from './CheckBox';
import { handleCheck } from './handleCheck';

//Component with multiple child checkboxes.
//NOTE: for procedurally populating the container, we should have a list of tags that we can grab
//and iterate through. We can then append tagboxes with those tags to the parent. Should be chillllllllll
export function Checklist() {
  return (
    <div>
      <Container>
        <Paper withBorder shadow="md" p="md" mt="xl" radius="md" w={175}>
          <Stack className={classes.container} gap="xl">
            <Title className={classes.title}>Tags</Title>
            <TagBox label={'Computer Science'} handleCheck={handleCheck} />
            <TagBox label={'Math'} handleCheck={handleCheck} />
            <TagBox label={'Cyber'} handleCheck={handleCheck} />
            <TagBox label={'AI'} handleCheck={handleCheck} />
            <TagBox label={'Programming'} handleCheck={handleCheck} />
            <TagBox label={'Literature'} handleCheck={handleCheck} />
            <TagBox label={'Sport'} handleCheck={handleCheck} />
            <TagBox label={'Outdoor'} handleCheck={handleCheck} />
            <TagBox label={'Esports'} handleCheck={handleCheck} />
            <TagBox label={'English'} handleCheck={handleCheck} />
            <TagBox label={'Literature'} handleCheck={handleCheck} />
            <TagBox label={'Books'} handleCheck={handleCheck} />
            <TagBox label={'Music'} handleCheck={handleCheck} />
          </Stack>
        </Paper>
      </Container>
    </div>
  );
}
