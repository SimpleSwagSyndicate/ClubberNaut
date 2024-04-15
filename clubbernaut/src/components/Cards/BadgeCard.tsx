import { Card, Image, Text, Group, Badge, Button, CardSection } from '@mantine/core';
import classes from './BadgeCard.module.css';

const mockdata = {
  image:
    'https://upload.wikimedia.org/wikipedia/commons/4/4f/UMass_Seal_Medium_PMS_202.png',
  title: 'Club',
  description:
    'This is a sample club',
  tags: [
    { emoji: '☀️', label: 'Sunny weather' },
    { emoji: '🦓', label: 'Onsite zoo' },
    { emoji: '🌊', label: 'Sea' },
    { emoji: '🌲', label: 'Nature' },
    { emoji: '🤽', label: 'Water sports' },
  ],
};

export function BadgeCard() {
  const { image, title, description, tags } = mockdata;
  const features = tags.map((tag) => (
    <Badge color='white' variant="light" key={tag.label} leftSection={tag.emoji}>
      {tag.label}
    </Badge>
  ));

  return (
    <Card withBorder radius="md" p="md" className={classes.card}>
      <CardSection>
        <Image src={image} alt={title} height={150} />
      </CardSection>
    
      <CardSection className={classes.section} mt="md">
        <Group justify="apart">
          <Text fz="lg" fw={500}>
            {title}
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