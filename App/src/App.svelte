<script lang="ts">
    import Head from './document/Head.svelte'
    import Body from './document/Body.svelte'
    import SignInPhone from './document/layout/SignInPhone.svelte'
    import SignInEmail from './document/layout/SignInEmail.svelte'
    import SignUp from './document/layout/SignUp.svelte';

    import {
        appData,
        user
    } from './store/store'
</script>

<Head/>
<Body/>

{#if !$user.isAuthorized}
    <SignInEmail />
    <!-- {#if $user.signType === 'email'}
        <SignInEmail />
    {:else}
        <SignInPhone />
    {/if} -->
{:else}
    isAuthorized = true
    <!-- <SignUp /> -->
{/if}