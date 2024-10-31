'use client';
import { getUser } from '@/api/auth';
import React, { use, useEffect, useState } from 'react';

type User = {
  name: string,
  email: string,
}

export const UserInfo = () => {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    getUser().then(async (res) => {
      const user = await res.json();
      setUser(user);
    });
  }, []);
  return (
    <>
      <p>name: {user?.name}</p>
      <p>email: {user?.email}</p>
    </>
  )
};
