<header>
    <slot name="headerTitle"></slot>
    <slot name="headerSubtitle"></slot>
</header>

<style lang="sass">
    header
        padding-left: var(--padding-sm)
        padding-right: var(--padding-sm)
        color: var(--header-color)
        font-size: 12px
        :global(span)
            color: var(--header-title-color)
            font-size: 18px
            font-weight: 700
</style>