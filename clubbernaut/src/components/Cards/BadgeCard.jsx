import { Card, Image, Text, Group, Badge, Button, CardSection } from '@mantine/core';
import classes from './BadgeCard.module.css';

export const BadgeCard = (props) => {

  const features = props.tags.map((tag) => (
    <Badge color='white' variant="light" key={tag}>
      {tag}
    </Badge>
  ));

  return (
    <Card withBorder radius="md" p="md" className={classes.card}>
      <CardSection>
        <Image src={props.image} alt={props.name} height={150} />
      </CardSection>
    
      <CardSection className={classes.section} mt="md">
        <Group justify="apart">
          <Text fz="lg" fw={500}>
            {props.name}
          </Text>
        </Group>
      </CardSection>

      <CardSection className={classes.section}>
        <Text mt="md" className={classes.label} c="dimmed">
          Perfect for you, if you enjoy
        </Text>
        <Group gap={7} mt={5}>
          {features}
        </Group>
      </CardSection>
      <CardSection className={classes.section}>
        <Group mt="xs">
          <Button color='#971B2F'radius="md" style={{ flex: 1 }}>
            Follow
          </Button>
        </Group>
      </CardSection>
    </Card>
  );
}