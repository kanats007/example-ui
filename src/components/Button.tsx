'use client';
import { getUser } from '@/api/auth';
import React from 'react';

type Props = {};

const handleClick = async (
  e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
) => {
  const res = await getUser();
  const data = await res.json();
  console.log(data);
};

export const Button = (props: Props) => {
  return (
    <>
      <button onClick={handleClick}>get user</button>
    </>
  );
};
