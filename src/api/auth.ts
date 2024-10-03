
export const getLoginUrl = async () => {
    return await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT_BASE}/login`, {'credentials': 'include'});
}


export const getLogoutUrl = async () => {
    return await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT_BASE}/logout`, {'credentials': 'include'});
}

export const getUser = async (token: string|null) => {
    return await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT_BASE}/user`, {
        headers: { 'Authorization': `Bearer ${token}` }
    });
};
