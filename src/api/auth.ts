export const getLoginUrl = async () => {
  return await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT_BASE}/login`, {
    credentials: 'include',
  });
};

export const getLogoutUrl = async () => {
  return await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT_BASE}/logout`);
};

export const getUser = async () => {
  return await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT_BASE}/user`, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  });
};

export const updateUser = async () => {
  return await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT_BASE}/user`, {
    method: "PUT",
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  });
};
