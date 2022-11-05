<script lang="ts">
    import Head from './document/Head.svelte'
    import Body from './document/Body.svelte'
    import Sign from './document/layout/Sign.svelte'
    import LogoHalf from './components/logo/LogoHalf.svelte'
    import ListPCC from './components/lists/ListPCC.svelte'

    import {
        appData,
        user
    } from './store/store'
</script>

<Head/>
<Body/>

{#if !$user.isAuthorized}
    <Sign />
    <LogoHalf />
    <ListPCC />
{:else}
    isAuthorized = true
{/if}