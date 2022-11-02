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
        signType: 'email' as string,
        email: {
            email: 's4@mobitoon.ru' as string,
            password: '123456' as string
        } as any,
        phone: {
            code: '12345' as string
        } as any
    }
)