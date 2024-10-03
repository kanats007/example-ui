'use client';
import { getLoginUrl } from "@/api/auth";
import { useEffect } from "react";

export const useLogin = () => {
    useEffect(()=> {
        const abortController = new AbortController();
        getLoginUrl().then( async (res) => {
            const json = await res.json();
            window.location.assign(json.redirectUrl);
        });
        return () => {
            abortController.abort();
        };
    }, []);
}
