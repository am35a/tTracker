<script lang="ts">
    import Main from './main/Main.svelte'
    import Header from './main/header/Header.svelte'
    import Footer from './main/footer/Footer.svelte'

    import Organizations from './main/pages/Organizations.svelte'
    import Jobs from './main/pages/Jobs.svelte'
    import Confirmed from './main/pages/Confirmed.svelte'
    import InProgress from './main/pages/InProgress.svelte'
    import Statistics from './main/pages/Statistics.svelte'
    import Profile from './main/pages/Profile.svelte'

    import { user } from '$str/store'
</script>

<Main>
    <Header/>
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
