<script lang="ts">
    if ($$restProps.type != 'reset' && $$restProps.type != 'submit')
        $$restProps.type = 'button'
</script>

<button
    {...$$restProps}
    on:click
>
    <slot></slot>
</button>

<style lang="sass">
    button
        display: inline-grid
        grid-auto-flow: column
        gap: var(--gap-xs)
        justify-content: center
        align-items: center
        height: var(--height-form)
        margin: unset
        padding: 0 var(--padding-xs)
        border: none
        border-radius: var(--border-radius-form)
        font-size: var(--font-size-sm)
        font-weight: 600
        line-height: 1
        text-decoration: none
        user-select: none
        &:not(:disabled)
            color: var(--color-button)
            background-color: var(--background-color-button)
            cursor: pointer
        &:disabled
            color: var(--color-button-disabled)
            background-color: var(--background-color-button-disabled)
            cursor: not-allowed
</style>