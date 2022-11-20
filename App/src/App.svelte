<script lang="ts">
    import Head from '$doc/Head.svelte'
    import Body from '$doc/Body.svelte'

    import Signs from './layout/signs/Signs.svelte'
    import Organizations from '$doc/routes/Organizations.svelte'
    import Jobs from '$doc/routes/Jobs.svelte'
    import Confirmed from '$doc/routes/Confirmed.svelte'
    import InProgress from '$doc/routes/InProgress.svelte'
    import Statistics from '$doc/routes/Statistics.svelte'
    import Profile from '$doc/routes/Profile.svelte'

    import Main from '$cmp/authorized/Main.svelte'
    import Header from '$cmp/authorized/header/Header.svelte'
    import Footer from '$cmp/authorized/footer/Footer.svelte'


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
    <Main>
        <Header title={$user.page.titlesArr[$user.page.current]}/>
        {#if $user.page.current === 0}
            <Organizations/>
        {:else if $user.page.current === 1}
            <Jobs/>
        {:else if $user.page.current === 2}
            <Confirmed/>
        {:else if $user.page.current === 3}
            <InProgress/>
        {:else if $user.page.current === 4}
            <Statistics/>
        {:else if $user.page.current === 5}
            <Profile/>
        {/if}
        <Footer/>
    </Main>
{/if}