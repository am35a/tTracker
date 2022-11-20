<script lang="ts">
    import Head from '$doc/Head.svelte'
    import Body from '$doc/Body.svelte'
    import Sign from '$doc/routes/Sign.svelte'
    import Organizations from '$doc/routes/Organizations.svelte'
    import Jobs from '$doc/routes/Jobs.svelte'
    import Confirmed from '$doc/routes/Confirmed.svelte'
    import InProgress from '$doc/routes/InProgress.svelte'
    import Statistics from '$doc/routes/Statistics.svelte'
    import Profile from '$doc/routes/Profile.svelte'

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
    {#if $user.page.current === 1}
        <Organizations/>
    {:else if $user.page.current === 2}
        <Jobs/>
    {:else if $user.page.current === 3}
        <Confirmed/>
    {:else if $user.page.current === 4}
        <InProgress/>
    {:else if $user.page.current === 5}
        <Statistics/>
    {:else if $user.page.current === 6}
        <Profile/>
    {/if}
{/if}