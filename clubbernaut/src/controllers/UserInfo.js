"use client";
import React, { useState, createContext } from "react";

export const UserContext = createContext();

export function UserInfo({ children }) {
  const [userid, setUserId] = useState(54);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <UserContext.Provider
      value={{ userid, name, email, setUserId, setName, setEmail }}
    >
      {children}
    </UserContext.Provider>
  );
}
