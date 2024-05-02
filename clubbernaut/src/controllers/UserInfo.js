'use client';
import React, { useState, createContext } from 'react';

export const UserContext = createContext();

export function UserInfo({ children }) {
  const [userid, setUserId] = useState(3521);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const updateUserId = id => {
    console.log('update id to ' + id);
    setUserId(id);
  };

  return (
    <UserContext.Provider value={{ userid, name, email, updateUserId, setName, setEmail }}>
      {children}
    </UserContext.Provider>
  );
}
