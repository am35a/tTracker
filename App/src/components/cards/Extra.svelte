<script lang="ts">
    import { onMount } from 'svelte'
    import { get } from 'svelte/store'

    import { user, organization, job } from '$str/store'
    import { axiosPrivate } from "../../assets/ts/api"


    export let jobObj: any = {}

    onMount(async () => {
        const _job = get(job)
        const _url = `/job/${_job.id}/`
        const response = await axiosPrivate().get(_url);
        jobObj = response.data;
    });

//     I. показываем всегда:
//   number, text_type, time_type, short_descriptio(это title), long description, address, created
// II. В зависимотсти от type:
//   если тип Fix - to cost, если Hours - то duration и при этом cost - это рассчитанная стоимость по твоему rate per hour
// III. В зависимости от status:
//   1. Если работа назначена (assign) - можем принять её или отклонить. confirm/decline
//   2. Если работа принята (status: assepted) -   Мы можем её start/pause/finish
//   3. Статус Require conformation и action status == finish - мы больше ничего не можем - ждем ответа от менеджера

    function jobConfirm() {
        jobObj.status = 'a'
        jobObj.status_text = 'Accepted'
    }
    function jobDecline() {
        
    }
    function jobStart() {
        jobObj.action_status = '1'
        jobObj.action_status_text = 'start'
        console.log(jobObj.action_status_text, jobObj.status)
    }
    function jobPause() {
        jobObj.action_status = '2'
        jobObj.action_status_text = 'pause'
        console.log(jobObj.action_status_text, jobObj.status)
    }

    function closeExtra() {
        $user.modalWindow = ''
    }
    function jobFinish() {
        jobObj.status = '3'
        jobObj.status_text = 'Require confirmation'
        jobObj.action_status = '3'
        jobObj.action_status_text = 'finish'
    }

</script>

<div class="extra">
    <div
        {...$$restProps}
        class:card={true}
    >
        <div class="header">
            {jobObj.short_description}
        </div>
        <div class="body">
            {jobObj.long_description}
        </div>
        <div class="adds">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8.39 12.648a1.32 1.32 0 0 0-.015.18c0 .305.21.508.5.508.266 0 .492-.172.555-.477l.554-2.703h1.204c.421 0 .617-.234.617-.547 0-.312-.188-.53-.617-.53h-.985l.516-2.524h1.265c.43 0 .618-.227.618-.547 0-.313-.188-.524-.618-.524h-1.046l.476-2.304a1.06 1.06 0 0 0 .016-.164.51.51 0 0 0-.516-.516.54.54 0 0 0-.539.43l-.523 2.554H7.617l.477-2.304c.008-.04.015-.118.015-.164a.512.512 0 0 0-.523-.516.539.539 0 0 0-.531.43L6.53 5.484H5.414c-.43 0-.617.22-.617.532 0 .312.187.539.617.539h.906l-.515 2.523H4.609c-.421 0-.609.219-.609.531 0 .313.188.547.61.547h.976l-.516 2.492c-.008.04-.015.125-.015.18 0 .305.21.508.5.508.265 0 .492-.172.554-.477l.555-2.703h2.242l-.515 2.492zm-1-6.109h2.266l-.515 2.563H6.859l.532-2.563z"/>
                </svg>
                {jobObj.number}
            </div>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                </svg>
                {jobObj.address}
            </div>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                </svg>
                {jobObj.created}
            </div>
        </div>
        <div>
            Information status box
        </div>
        <div class="actions">
            {#if jobObj.status === '2'}
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <svg
                    on:click={jobDecline}
                    class=""
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    width="32" height="32" viewBox="0 0 16 16"
                >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7z"/>
                </svg>
            {:else}
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <svg
                    on:click={jobFinish}
                    class:disabled={jobObj.action_status === null}
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    width="32" height="32" viewBox="0 0 16 16"
                >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                </svg>
            {/if}

            {#if jobObj.status === '2'}
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <svg
                    on:click={jobConfirm}
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    width="56" height="56" viewBox="0 0 16 16"
                >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
                </svg>
            {:else if jobObj.status === 'a'}
                {#if jobObj.action_status === null || jobObj.action_status === '2'}
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <svg
                        on:click={jobStart}
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        width="56" height="56" viewBox="0 0 16 16"
                    >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"/>
                    </svg>
                {:else}
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <svg
                        on:click={jobPause}
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        width="56" height="56" viewBox="0 0 16 16"
                    >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.25 5C5.56 5 5 5.56 5 6.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C7.5 5.56 6.94 5 6.25 5zm3.5 0c-.69 0-1.25.56-1.25 1.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C11 5.56 10.44 5 9.75 5z"/>
                    </svg>
                {/if}
            {/if}

            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <svg
                on:click={closeExtra}
                class=""
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                width="32" height="32" viewBox="0 0 16 16"
            >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
            </svg>
        </div>
    </div>
</div>

<style lang="sass">
    .extra
        position: fixed
        top: 0
        left: 0
        right: 0
        bottom: 0
        display: grid
        padding: var(--padding-md)
        background: var(--extra-background-color)
        z-index: 1
        .card
            display: flex
            flex-direction: column
            gap: var(--gap-sm)
            border-radius: var(--border-radius-md)
            padding: var(--padding-sm)
            box-shadow: var(--box-shadow-md)
            // cursor: pointer
            outline-offset: -2px
            outline: 2px solid transparent
            border: var(--border-radius-md)
            &.color
                outline-color: var(--color)
                background-color: var(--color-light)
            .header
                color: var(--main-color-75)
                font-size: var(--font-size-lg)
                font-weight: 700
            .body
                flex-grow: 1
            .adds
                display: grid
                gap: var(--gap-xs)
                > *
                    display: flex
                    gap: var(--gap-xs)
                    align-items: center
                    color: var(--main-color-75)
                    font-size: var(--font-size-sm)
                    font-weight: 600
            .actions
                display: flex
                align-items: center
                justify-content: space-around
                svg
                    &:not(.disabled)
                        color: var(--color)
                        cursor: pointer
                    &.disabled
                        color: var(--mute-color-25)

</style>