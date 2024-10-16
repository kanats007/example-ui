'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export const useSetToken = () => {
  const router = useRouter();
  useEffect(() => {
    const token = window.location.hash.substring(1);
    if (token === '') return router.push('/login');
    localStorage.setItem('token', token);
    router.push('/');
  }, [router]);
};
