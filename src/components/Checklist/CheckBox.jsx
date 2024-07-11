'use client';
import { Checkbox } from '@mantine/core';
import { useState } from 'react';
import { tagHandleCheck } from './handleCheck';

//tagbox component that updates tags and stores the current check value
export const TagBox = props => {
  const [isChecked, setChecked] = useState(false);

  const handle = event => {
    setChecked(event.currentTarget.checked);
    tagHandleCheck(isChecked, props.label, props.search, props.setFiltData);
  };

  return <Checkbox label={props.label} checked={isChecked} onChange={handle} />;
};
