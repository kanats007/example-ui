'use client';
import { getLoginUrl } from '@/api/auth';
import React from 'react'

export const LoginButton = () => {
    const handleClick = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const res = await getLoginUrl();
        const json = await res.json();
        window.location.assign(json.redirectUrl);
    };
    return (
        <button onClick={handleClick}>Login</button>
    )
}