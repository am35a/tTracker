<script lang="ts">
    import Head from '$doc/Head.svelte'
    import Body from '$doc/Body.svelte'

    import Signs from '$lay/signs/Signs.svelte'
    import Authorized from '$lay/authorized/Authorized.svelte'

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
    <Signs/>
    <LogoHalf/>
    <ListPCC/>
    <ModalAlert/>
{:else}
    <Authorized/>
{/if}