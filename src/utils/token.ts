

export const setTokenFromFragment = () => {
    const token = window.location.hash.substring(1);
    if (token === '') return false;
    localStorage.setItem('token', token);
    return true;
};
