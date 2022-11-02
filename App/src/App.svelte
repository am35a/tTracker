<script lang="ts">
    import Head from './document/Head.svelte'
    import SignInPhone from './document/layout/SignInPhone.svelte'
    import SignInEmail from './document/layout/SignInEmail.svelte'
    import SignUp from './document/layout/SignUp.svelte';

    import {
        appData,
        user
    } from './store/store'
</script>

<Head/>

{#if !$user.isAuthorized}
    {#if $user.signType === 'email'}
        <SignInEmail />
    {:else}
        <SignInPhone />
    {/if}
{:else}
    <SignUp />
{/if}