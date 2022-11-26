<script lang="ts">
    import Cap from '$cmp/cap/Cap.svelte'
    import Input from '$cmp/forms/Input.svelte'
    import Button from '$cmp/buttons/Button.svelte'
    import Section from './section/Section.svelte'

    import { user } from '$str/store'
</script>

<Section>
    <Cap slot="header"/>
    <div class="body">
        <Input bind:value={$user.info.firstName} type={'text'} placeholder="Fist name"/>
        <Input bind:value={$user.info.lastName} type={'text'}  placeholder="Last name"/>
        <Button>SAVE</Button>
    </div>
    <div class="signout" slot="footer">
        <Button on:click={() => $user.isAuthorized = false}>SIGN OUT</Button>
    </div>
</Section>

<style lang="sass">
    .body
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
        padding: var(--padding-xs)
</style>