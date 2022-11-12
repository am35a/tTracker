<script lang="ts">
    import Head from './document/Head.svelte'
    import Body from './document/Body.svelte'
    import Sign from './document/layout/Sign.svelte'
    import Emploers from './document/layout/Emploers.svelte'

    import LogoHalf from '$cmp/logo/LogoHalf.svelte'
    import ListPCC from '$cmp/lists/ListPCC.svelte'
    import ModalAlert from '$cmp/modals/Alert.svelte'

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
    <ModalAlert />
{:else}
    <Emploers />
{/if}