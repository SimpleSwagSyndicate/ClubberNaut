import { Checkbox, Group } from '@mantine/core';

export function Checklist() {
  return (
    <Checkbox.Group
      label="Club Tags"
    >
      <Group mt="xs">
        <Checkbox value="eSports" label="eSports" />
        <Checkbox value="Awesome" label="Awesome" />
        <Checkbox value="New Students" label="New Students" />
      </Group>
    </Checkbox.Group>
  );
}