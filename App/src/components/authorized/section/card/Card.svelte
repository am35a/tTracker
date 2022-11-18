<script lang="ts">

</script>

<div class="card">
    <div class="aside">
        as
    </div>
    <div class="body">
        <slot></slot>
    </div>
    <div class="footer">
        footer
    </div>
</div>

<style lang="sass">
    .card
        background-color: var(--background-color-button)
        border-radius: var(--border-radius-md)
        padding: var(--padding-xs)
        box-shadow: var(--box-shadow-sm)
</style>