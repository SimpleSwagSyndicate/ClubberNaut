'use client';
import { Checkbox } from '@mantine/core';
import { useState } from 'react';

//tagbox component that updates tags and stores the current check value
export const TagBox = props => {
  const [isChecked, setChecked] = useState(false);

  const handle = event => {
    setChecked(event.currentTarget.checked);
    props.handleCheck(isChecked, props.label);
  };

  return <Checkbox label={props.label} checked={isChecked} onChange={handle} />;
};
