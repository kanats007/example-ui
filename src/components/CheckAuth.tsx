'use client';
import { useEffect, useState } from "react";
import { usePathname, useRouter } from 'next/navigation'
import { getUser } from "@/api/auth";

export const CheckAuth = ({children}: Readonly<{children: React.ReactNode;}>) => {
    const pathName = usePathname();
    const router = useRouter();
    const [isAuth, setIsAuth] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    console.log('pathName', pathName);

    useEffect(() => {
        getUser(localStorage.getItem('token')).then((res) => {
            setIsAuth(res.ok);
        }).catch((res) => {
            setIsAuth(false);
        }).finally(() => {
            setIsLoading(false);
        });
    }, [pathName]);

    useEffect(() => {
        if (!isLoading && !isAuth && pathName !== '/login' && pathName !== '/token' && pathName !== '/logout') {
            router.push('/login');
        };
    }, [isAuth, isLoading]);

    if (isLoading || (!isLoading && !isAuth && pathName !== '/login' && pathName !== '/token' && pathName !== '/logout')) {
        return (<h1>loading ...</h1>);
    }

    return (
        children
    );
};
