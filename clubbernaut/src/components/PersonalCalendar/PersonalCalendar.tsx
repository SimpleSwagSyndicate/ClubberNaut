import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import classes from './PersonalCalendar.module.css'

import { useState } from 'react';
import { Calendar } from '@mantine/dates';

export function PersonalCalendar() {
  const [value, setValue] = useState(new Date());
  function handleChange(e) {
    setValue(e.value)
  }

  return (
    <Calendar
      className={classes.calendar}
      size='xl'
      styles={(theme) => ({
        cell: {
          border: `1px solid ${
            theme.colors.dark[4]
          }`,
        },
        day: { borderRadius: 0, height: 70, fontSize: theme.fontSizes.lg },
        weekday: { fontSize: theme.fontSizes.lg },
        weekdayCell: {
          fontSize: theme.fontSizes.lg,
          backgroundColor:
            theme.colors.dark[5],
          border: `1px solid ${
            theme.colors.dark[4]
          }`,
          height: 70,
        },
      })}
    />
  );
}