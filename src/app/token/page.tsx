'use client';

import { setTokenFromFragment } from "@/utils/token";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Token() {
    const router = useRouter();
    useEffect(()=> {
        // setTokenFromFragment().then(result => result ? router.push('/') : router.push('/login'));
        setTokenFromFragment() ? router.push('/') : router.push('/login')
    }, [router]);
};