'use client';
import { useEffect, useState } from "react";
import { usePathname, useRouter } from 'next/navigation'
import { getUser } from "@/api/auth";

export const CheckAuth = ({children}: Readonly<{children: React.ReactNode;}>) => {
    const pathName = usePathname();
    const router = useRouter();
    const [isAuth, setIsAuth] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getUser().then((res) => {
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

        if (!isLoading && isAuth && pathName === '/login') {
            router.push('/');
        };
    }, [isAuth, isLoading]);

    // useEffect内の処理はレンダリング後に実行されるためリダイレクト前に本来見せるべきでない内容がちらついてしまうのを防ぐため
    if (
        isLoading // ロード中
        || (!isLoading && !isAuth && pathName !== '/login' && pathName !== '/token' && pathName !== '/logout') // 未認証＆認証が必要なページの場合
        || (!isLoading && isAuth && pathName === '/login') // 認証済み＆パスがログインページの場合
    ) {
        return (<h1>loading ...</h1>);
    }

    return (
        children
    );
};
