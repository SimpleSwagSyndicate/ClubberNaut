'use client';
import React, { useState, createContext, useRef } from 'react';

export const UserContext = createContext();

export function UserInfo({ children }) {
  const [userid, setUserId] = useState(3521);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [clubid, setClubId] = useState(6)

  const updateUserId = id => {
    console.log('update id to ' + id);
    setUserId(id);
  };

  const updateName = name => {
    console.log('update name to ' + name);
    setName(name);
  };

  const updateEmail = email => {
    console.log('update email to: ' + email);
    setEmail(email);
  };

  const updateClubId = clubid => {
    console.log('update club id to: '+ clubid);
    setClubId(clubid)
  }

  return (
    <UserContext.Provider value={{ userid, name, email, clubid, updateUserId, updateEmail, updateName, updateClubId }}>
      {children}
    </UserContext.Provider>
  );
}
