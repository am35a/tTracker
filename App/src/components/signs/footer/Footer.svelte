<footer>
    <slot name="footerLeft"></slot>
    <div>
        <slot name="footerRight"></slot>
    </div>
</footer>

<style lang="sass">
    footer
        display: flex
        justify-content: space-between
        padding-left: var(--padding-sm)
        padding-right: var(--padding-sm)
        > div
            display: flex
            gap: var(--gap-sm)
</style>