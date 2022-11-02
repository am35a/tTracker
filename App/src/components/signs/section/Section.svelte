<section>
    <slot name="body"></slot>
</section>

<style lang="sass">
    section
        display: grid
        gap: var(--gap-md)
        min-width: 256px
        padding: var(--padding-md) var(--padding-lg) var(--padding-md) var(--padding-lg)
        background-color: var(--face-background-color)
        border-radius: var(--border-radius-md)
        box-shadow: var(--box-shadow-lg)
</style>