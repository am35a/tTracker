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
            email: 'goto@ttracker.dev' as string,
            password: '123456' as string
        } as any,
        phone: {
            country: 'ru' as string,
            code: '7' as string,
            number: '9629651050' as string,
            password: '12345' as string
        } as any,
        modalWindow: '' as string // searchPCC 
    }
)