<script lang="ts">
    import Head from '$doc/Head.svelte'
    import Body from '$doc/Body.svelte'
    import Sign from '$doc/routes/Sign.svelte'
    import Organizations from '$doc/routes/Organizations.svelte'

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
    <Organizations/>
{/if}