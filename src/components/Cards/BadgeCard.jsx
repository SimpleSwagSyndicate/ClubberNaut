import { Card, Image, Text, Group, Badge, Button, CardSection, Anchor } from '@mantine/core';
import classes from './BadgeCard.module.css';
import { Link } from 'next/link';
import { useRouter } from 'next/navigation';

export const BadgeCard = props => {
  const features = props.tags.map(tag => (
    <Badge color="white" variant="light" key={tag}>
      {tag}
    </Badge>
  ));
  const router = useRouter();
  return (
    <Card withBorder radius="md" p="md" className={classes.card}>
      <CardSection>
        <Image src={props.image} alt={props.name} height={150} />
      </CardSection>

      <CardSection className={classes.section} mt="md">
        <Group justify="apart">
          <Anchor
            variant="gradient"
            gradient={{ from: 'white', to: '#971B2F' }}
            fz="lg"
            fw={500}
            onClick={() => {
              router.push('/clubhome');
            }}
            underline="never"
          >
            {props.name}
          </Anchor>
        </Group>
      </CardSection>

      <CardSection className={classes.tagsection}>
        <Text mt="md" className={classes.label} c="dimmed">
          Perfect for you, if you enjoy
        </Text>
        <Group gap={7} mt={5}>
          {features}
        </Group>
      </CardSection>
      <CardSection className={classes.buttonsection}>
        <Group mt="xs">
          <Button color="#971B2F" radius="md" style={{ flex: 1 }}>
            Follow
          </Button>
        </Group>
      </CardSection>
    </Card>
  );
};
