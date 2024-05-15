import React from 'react';
import { Modal, Text } from '@mantine/core';

function Popup({ events, onClose }) {
  return (
    <Modal
      opened
      onClose={onClose}
      title={events[0].date}
      size="md"
      padding="md"
    >
        {events.map((e, index) => (
    <div key={index} style={{ marginBottom: '20px' }}>
      <Text style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '5px' }}>{e.title}</Text>
      <Text>{e.description}</Text>
    </div>
  ))}
    </Modal>
  );
}

export default Popup;