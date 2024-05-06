"use client";
import React, { useState, createContext } from "react";

export const UserContext = createContext();

export function UserInfo({ children }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <UserContext.Provider
      value={{ name, email, setName, setEmail }}
    >
      {children}
    </UserContext.Provider>
  );
}
