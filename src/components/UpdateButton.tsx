'use client';
import { updateUser } from '@/api/auth';
import React from 'react';

type Props = {};

const handleClick = async (
  e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
) => {
  const res = await updateUser();
  const data = await res.json();
  console.log(data);
};

export const UpdateButton = (props: Props) => {
  return (
    <>
      <button onClick={handleClick}>update user</button>
    </>
  );
};
