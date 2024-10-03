export const getAppleDevices = async (isOnServer:boolean = false): Promise<{devices: Array<string>}> => {
    return fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT_BASE_DOCKER}/apple`)
        .then(res => res.json());
}