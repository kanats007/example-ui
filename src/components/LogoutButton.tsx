'use client';
import { getLogoutUrl } from '@/api/auth';
import React from 'react';

type Props = {};

export const LogoutButton = (props: Props) => {
  const handleClick = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    const res = await getLogoutUrl();
    const json = await res.json();
    window.location.assign(json.redirectUrl);
  };
  return (
    <>
      <button onClick={handleClick}>logout</button>
    </>
  );
};
