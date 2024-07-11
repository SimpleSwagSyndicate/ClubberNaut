import { Checkbox, Stack, Title, Paper, Container, Grid } from '@mantine/core';
import classes from './checklist.module.css';
import { TagBox } from './CheckBox';
import { tagHandleCheck } from './handleCheck';

//Component with multiple child checkboxes.
//NOTE: for procedurally populating the container, we should have a list of tags that we can grab
//and iterate through. We can then append tagboxes with those tags to the parent. Should be chillllllllll
export const Checklist = (props: any) => {
  return (
    <div>
      <Container>
        <Paper withBorder shadow="md" p="md" mt="xl" radius="md" w={175}>
          <Stack className={classes.container} gap="xl">
            <Title className={classes.title}>Tags</Title>
            <TagBox label={'Computer Science'} handleCheck={tagHandleCheck} search={props.search} setFiltData={props.setFiltData}/>
            <TagBox label={'Math'} handleCheck={tagHandleCheck} search={props.search} setFiltData={props.setFiltData}/>
            <TagBox label={'Cyber'} handleCheck={tagHandleCheck} search={props.search} setFiltData={props.setFiltData}/>
            <TagBox label={'AI'} handleCheck={tagHandleCheck} search={props.search} setFiltData={props.setFiltData}/>
            <TagBox label={'Programming'} handleCheck={tagHandleCheck} search={props.search} setFiltData={props.setFiltData}/>
            <TagBox label={'Literature'} handleCheck={tagHandleCheck} search={props.search} setFiltData={props.setFiltData}/>
            <TagBox label={'Sport'} handleCheck={tagHandleCheck} search={props.search} setFiltData={props.setFiltData}/>
            <TagBox label={'Outdoor'} handleCheck={tagHandleCheck} search={props.search} setFiltData={props.setFiltData}/>
            <TagBox label={'Esports'} handleCheck={tagHandleCheck} search={props.search} setFiltData={props.setFiltData}/>
            <TagBox label={'English'} handleCheck={tagHandleCheck} search={props.search} setFiltData={props.setFiltData}/>
            <TagBox label={'Literature'} handleCheck={tagHandleCheck} search={props.search} setFiltData={props.setFiltData}/>
            <TagBox label={'Books'} handleCheck={tagHandleCheck} search={props.search} setFiltData={props.setFiltData}/>
            <TagBox label={'Music'} handleCheck={tagHandleCheck} search={props.search} setFiltData={props.setFiltData}/>
          </Stack>
        </Paper>
      </Container>
    </div>
  );
}
