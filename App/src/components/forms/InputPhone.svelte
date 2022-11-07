<script lang="ts">
    import Input from "./Input.svelte"
    import SelectPCC from "./SelectPCC.svelte"

    export let code = '' as string
    export let number = '' as string
</script>

<div>
    <SelectPCC value={code} />
    <Input value={number} type={'tel'}/>
</div>

<style lang="sass">
    div
        display: flex
        gap: var(--gap-sm)
</style>