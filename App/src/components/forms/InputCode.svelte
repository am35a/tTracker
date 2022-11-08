<script lang="ts">
    import Input from "./Input.svelte"

    export let value = '' as string

    let firstNumb = '-' as string
    let secondNumb = '-' as string
    let thirdNumb = '-' as string
    let fourthNumb = '-' as string
    let fifthNumb = '-' as string
    
    $: {
        value = `${firstNumb ? firstNumb : '-'}${secondNumb ? secondNumb : '-'}${thirdNumb ? thirdNumb : '-'}${fourthNumb ? fourthNumb : '-'}${fifthNumb ? fifthNumb : '-'}`
    }
</script>

<div>
    <Input bind:value={firstNumb} type="text" maxlength={1} style="padding:0;" />
    <Input bind:value={secondNumb} type="text" maxlength={1} style="padding:0;" />
    <Input bind:value={thirdNumb} type="text" maxlength={1} style="padding:0;" />
    <Input bind:value={fourthNumb} type="text" maxlength={1} style="padding:0;" />
    <Input bind:value={fifthNumb} type="text" maxlength={1} style="padding:0;" />
</div>

<style lang="sass">
    div
        display: flex
        gap: var(--gap-md)

</style>