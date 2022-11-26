<script lang="ts">
    import Button from '$cmp/buttons/Button.svelte'

    let
        months:string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'Decembe'],
        Calendar: Date = new Date(),
        currentYear = Calendar.getFullYear(),
        currentMonth: number = Calendar.getMonth(),
        currentDate: number = Calendar.getDate(),
        daysInThisMonth: number

    export let date: any = {
        month: undefined as number,
        date: undefined as number
    }
    
    $: {
        daysInThisMonth = new Date(currentYear, currentMonth + 1, 0).getDate()
        date.month = currentMonth
        date.date = currentDate        
    }

</script>

<div class="calendar">
    <div class="months">
        {#each months as month, i }
            <Button on:click={() => currentMonth = i} class="sm transparent" disabled={currentMonth === i}>{month}</Button>
        {/each}
    </div>
    <div class="days">
        {#each Array(daysInThisMonth) as _, i }
            <Button on:click={() => currentDate = i + 1} class="lg" disabled={currentDate === i + 1}>{i + 1}</Button>
        {/each}
    </div>
    <div class="handle">
        <hr>
    </div>
</div>

<style lang="sass">
    .calendar
        grid-column: 1/2
        grid-row: 1/2
        align-self: start
        display: grid
        gap: var(--gap-xs)
        background-color: var(--face-background-color)
        border-bottom-left-radius: var(--border-radius-lg)
        border-bottom-right-radius: var(--border-radius-lg)
        box-shadow: var(--box-shadow-md)
        z-index: 1
        .months,
        .days
            display: inline-flex
            gap: var(--gap-xs)
            padding: 0 var(--padding-xs)
            overflow-y: hidden
            overflow-x: auto // will to hidden
            touch-action: pan-x
            scrollbar-width: none
            &::-webkit-scrollbar
                display: none
        .handle
            display: grid
            height: 16px
            hr
                width: 48px
                margin: auto
                border: 2px solid currentColor
                border-radius: 2px
                color: var(--color-button)                
</style>