"use client";
import React, { useState, createContext, useRef } from "react";

export const UserContext = createContext();

export function UserInfo({ children }) {
  const [userid, setUserId] = useState(3521);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const updateUserId = id => {
    console.log('update id to ' + id);
    setUserId(id);
  };

  const updateName = name => {
    console.log('update name to ' + name);
    setName(name);
  }

  const updateEmail = email => {
    console.log('update email to: '+ email);
    setEmail(email)
  }

  return (
    <UserContext.Provider value={{ userid, name, email, updateUserId, updateEmail, updateName }}>
      {children}
    </UserContext.Provider>
  );
}
