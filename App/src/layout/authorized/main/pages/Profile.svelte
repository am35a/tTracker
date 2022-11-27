<script lang="ts">
    import Cap from '$cmp/cap/Cap.svelte'
    import Input from '$cmp/forms/Input.svelte'
    import Button from '$cmp/buttons/Button.svelte'
    import Section from './section/Section.svelte'

    import { user } from '$str/store'

    let isUserInfoSaveble: boolean = false,
        isUserInfoToggleBtn: boolean = true,
        firstName: string = $user.info.firstName,
        lastName: string = $user.info.lastName

    function userDataFn(){
        $user.info.firstName = firstName
        $user.info.lastName = lastName
    }

    $: isUserInfoSaveble = $user.info.firstName != firstName ||  $user.info.lastName != lastName ? true : false
</script>

<Section>
    <Cap slot="header"/>
    <div class="user-data">
        <Input bind:value={firstName} type={'text'} placeholder="Fist name" disabled={isUserInfoToggleBtn}/>
        <Input bind:value={lastName} type={'text'} placeholder="Last name" disabled={isUserInfoToggleBtn}/>
        {#if isUserInfoToggleBtn}
            <Button
                on:click={() => isUserInfoToggleBtn = !isUserInfoToggleBtn}
            >EDIT</Button>
        {:else}
            <Button
                on:click={userDataFn}
                class={isUserInfoSaveble || 'mute'}
                disabled={!isUserInfoSaveble}
            >SAVE</Button>
        {/if}
    </div>
    <div class="signout" slot="footer">
        <Button on:click={() => $user.isAuthorized = false}>SIGN OUT</Button>
    </div>
</Section>

<style lang="sass">
    .user-data
        grid-row: 2/3
        grid-column: 1/2
        display: grid
        gap: var(--gap-md)
        justify-self: center
        width: var(--section-width)
        padding: var(--padding-md) var(--padding-lg)
        background-color: var(--face-background-color)
        border-radius: var(--border-radius-md)
        box-shadow: var(--box-shadow-lg)
    .signout
        display: grid
        justify-self: center
        width: var(--section-width)
        padding: var(--padding-xs)
</style>