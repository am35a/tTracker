<script lang="ts">
    import Input from "./Input.svelte"
    import SelectPCC from "./SelectPCC.svelte"

    export let value = {
        code: undefined as number,
        phoneNumber: '' as string
    } as any
</script>

<div>
    <SelectPCC />
    <Input value={value.phoneNumber} type={'phone'} />
</div>

<style lang="sass">
    div
        display: flex
        gap: var(--gap-sm)
</style>