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
        height: var(--height-form-md)
        margin: unset
        padding: 0 var(--padding-xs)
        border: none
        border-radius: var(--border-radius-xs)
        font-size: var(--font-size-sm)
        font-weight: 600
        line-height: 1
        text-decoration: none
        user-select: none
        &.sm
            height: var(--height-form-sm)
            font-size: var(--font-size-xs)
        &.lg
            min-width: 24px
            height: var(--height-form-lg)
            font-size: var(--font-size-md)
        &:not(:disabled)
            color: var(--color-button)
            background-color: var(--background-color-button)
            cursor: pointer
        &:disabled
            color: var(--color-button-disabled)
            background-color: var(--background-color-button-disabled)
            cursor: not-allowed
</style>