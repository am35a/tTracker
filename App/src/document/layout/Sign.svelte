<script lang="ts">
    import Main from '../../components/signs/Main.svelte'
    import Header from '../../components/signs/header/Header.svelte'
    import Section from '../../components/signs/section/Section.svelte'
    import Footer from '../../components/signs/footer/Footer.svelte'

    import Button from '../../components/buttons/Button.svelte'
    import Input from '../../components/forms/Input.svelte'
    import InputPhone from '../../components/forms/InputPhone.svelte'

    import { user } from '../../store/store'

    let valuePhone: string = ''
    let valueEmail: string = ''
    let valuePassword: string = ''
</script>

<Main>
    {#if $user.signType === 'email'}
        <Header>
            <span slot="headerTitle">Sign In</span>
            <svelte:fragment slot="headerSubtitle">
                : by email and password
            </svelte:fragment>
        </Header>
        <Section>
            <svelte:fragment slot="body">
                <Input value={valueEmail} type={'email'} />
                <Input value={valuePassword} type={'password'} />
                <Button>SIGN IN</Button>
            </svelte:fragment>
        </Section>
    {:else if $user.signType === 'phone'}
        <Header>
            <span slot="headerTitle">Sign In</span>
            <svelte:fragment slot="headerSubtitle">
                : by phone and code
            </svelte:fragment>
        </Header>
        <Section>
            <svelte:fragment slot="body">
                <InputPhone value={valuePhone} />
                <Input value={valuePassword} type={'password'} />
                <Button>SIGN IN</Button>
            </svelte:fragment>
        </Section>
    {:else if $user.signType === 'welcome'}
        <Header>
            <span slot="headerTitle">Sign Up</span>
            <svelte:fragment slot="headerSubtitle">
                : by phone and email
            </svelte:fragment>
        </Header>
        <Section>
            <svelte:fragment slot="body">
                <Input value={valueEmail} type={'email'} />
                <InputPhone value={valuePhone} />
                <Button>SIGN IN</Button>
            </svelte:fragment>
        </Section>
    {/if}
    <Footer>
        <svelte:fragment slot="footerLeft">
            <Button on:click={() => $user.signType = 'welcome'} disabled = {$user.signType === 'welcome'}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                    <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
                </svg>
                Welcome
            </Button>
        </svelte:fragment>
        <svelte:fragment slot="footerRight">
            <Button on:click={() => $user.signType = 'phone'} disabled = {$user.signType === 'phone'}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                </svg>
            </Button>
            <Button on:click={() => $user.signType = 'email'} disabled = {$user.signType === 'email'}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
                </svg>
            </Button>
        </svelte:fragment>
    </Footer>
</Main>