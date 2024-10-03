'use client';
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const useLogout = () => {
    const router = useRouter();
    useEffect(()=> {
        localStorage.removeItem('token');
        router.push('/login');
    }, [router]);
}
