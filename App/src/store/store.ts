import { writable } from 'svelte/store'

export const appData = writable(
    {
        title: 'tTracker' as string,
        initialScale: 1 as number,
    } as any
)

export let user: any = writable(
    {
        isAuthorized: true as boolean, // false as default
        signType: 'email' as string,
        email: {
            address: 'goto@ttracker.dev' as string,
            password: '123456' as string
        } as any,
        phone: {
            country: 'ru' as string,
            code: '7' as string,
            number: '9629651050' as string,
            password: '12345' as string
        } as any,
        modalWindow: '' as string, // searchPCC
        modal: {
            type: '',
            title: '',
            text: ''
        } as any,
        page: {
            current: 1 as number, // 1 is organizations and as default
            calendar: false as boolean,
            filter: false as boolean
        } as any
    }
)