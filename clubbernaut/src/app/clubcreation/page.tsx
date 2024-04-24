import { Paper, Stack, TextInput, Textarea, Container, Group, Title, Button, Checkbox} from '@mantine/core';
import classes from './clubcreation.module.css'
export default function clubcreation() {
  return (
    <div>
        <Title className={classes.title} >
            Club Creation
        </Title>
        <Container >
        <Paper shadow='lg' withBorder>
        
        <Stack >
        <TextInput
          label="Club Name"
          placeholder="Club Name"
          variant="filled"
          className={classes.section}
        />

      <Group align='center'  className={classes.section}>
        <Checkbox label='Computer Science'/>
        <Checkbox label='AI'/>
        <Checkbox label='Security'/>
        <Checkbox label='Programming'/>
        <Checkbox label='Gaming'/>
        <Checkbox label='Esports'/>
        <Checkbox label='English'/>
        <Checkbox label='Literature'/>
        <Checkbox label='Books'/>
        <Checkbox label='Outdoor'/>
        <Checkbox label='Music'/>
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
      />
      <Group justify="center" mt="xl" className={classes.button}>
        <Button type="submit" size="lg" color='#971B2F'>
          Create Club
        </Button>
      </Group>
      </Paper>
    </Container>
      </div>
  );
}