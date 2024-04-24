import { Paper, Stack, TextInput, Textarea, Container, Group, Title, Button, Checkbox} from '@mantine/core';
import classes from './clubcreation.module.css'
export default function clubcreation() {
    // Tags will be imported from database.
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
        <Checkbox label='tag 1'/>
        <Checkbox label='tag 2'/>
        <Checkbox label='tag 3'/>
        <Checkbox label='tag 4'/>
        <Checkbox label='tag 5'/>
        <Checkbox label='tag 6'/>
        <Checkbox label='tag 7'/>
        <Checkbox label='tag 8'/>
        <Checkbox label='tag 9'/>
        <Checkbox label='tag 10'/>
        <Checkbox label='tag 11'/>
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