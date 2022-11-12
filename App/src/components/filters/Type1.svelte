<script lang="ts">
    import Input from '../../components/forms/Input.svelte' 

    export let valueText = '' as string 
</script>

<div class="filter">
    <div class="container">
        <Input bind:value={valueText} class="sm" type={'search'} />
        <hr>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
        </svg>
    </div>
</div>

<style lang="sass">
    .filter
        grid-column: 1/2
        grid-row: 2/3
        align-self: end
        padding: var(--padding-xs)
        .container
            display: grid
            gap: var(--gap-xs)
            grid-template-columns: 1fr repeat(2, min-content) 
            padding: var(--padding-xs)
            align-items: center
            border-radius: var(--border-radius-md)
            background-color: var(--face-background-color)
            box-shadow: var(--box-shadow-sm)
            color: var(--color-button)
            hr
                height: 100%
                color: var(--hr-color)
                border-bottom: 0
                border-right: 0
        
</style>