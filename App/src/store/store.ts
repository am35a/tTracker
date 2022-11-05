import { writable } from 'svelte/store'

export const appData = writable(
    {
        title: 'tTracker' as string,
        initialScale: 1 as number,
    } as any
)

export let user: any = writable(
    {
        isAuthorized: false as boolean, // false as default
        signType: 'phone' as string,
        email: {
            email: 's4@mobitoon.ru' as string,
            password: '123456' as string
        } as any,
        phone: {
            countryCode: '7' as string,
            phoneNumber: '9629651050' as string,
            verifyCode: '12345' as string
        } as any,
        modalWindow: 'searchPCC' as string 
    }
)