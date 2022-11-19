<script lang="ts">
    import Head from './document/Head.svelte'
    import Body from './document/Body.svelte'
    import Sign from './document/layout/Sign.svelte'
    import Organization from './document/layout/Organization.svelte'

    import LogoHalf from '$cmp/logo/LogoHalf.svelte'
    import ListPCC from '$cmp/lists/ListPCC.svelte'
    import ModalAlert from '$cmp/modals/Alert.svelte'

    import {
        appData,
        user
    } from '$str/store'
</script>

<Head/>
<Body/>

{#if !$user.isAuthorized}
    <Sign/>
    <LogoHalf/>
    <ListPCC/>
    <ModalAlert/>
{:else}
    <Organization/>
{/if}