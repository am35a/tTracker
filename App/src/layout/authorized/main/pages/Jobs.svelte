<script lang="ts">
    import { onMount } from 'svelte'
    import { get } from 'svelte/store'

    import Section from './section/Section.svelte'
    import Card from '$cmp/cards/Job.svelte'
    import Calendar from '$cmp/calendar/Calendar.svelte'
    import Filter from '$cmp/filters/Type1.svelte'

    import { user, organization } from '$str/store'
    import { axiosPrivate } from "../../../../assets/ts/api";


    let jobsArrObj: any = [
        /*{
            "id": 885,
            "token": "D5RJfC",
            "number": "TST-JB-111-220885",
            "type": "2",
            "type_text": "Fix",
            "time_type": "1",
            "time_type_text": "Shift",
            "open": "Open for user",
            "status": "a",
            "status_text": "Accepted",
            "action_status": "2", 
            "action_status_text": "Paused",
            "start_date": "2022-09-13T20:31:00+10:00",
            "end_date": "2022-09-14T12:33:00+10:00",
            "short_description": "dvdfv",
            "long_description": "",
            "address": "NSW, Address test",
            "cost": 10,
            "duration": "1.00",
            "bonus": 0,
            "created": "13-09-2022 20:32",
            "income": 10,
            "attachments": 3
        },
        {
            "id": 814,
            "token": "iJ3c0F",
            "number": "TST-JB-111-220814",
            "type": "3",
            "type_text": "Hours",
            "time_type": "T",
            "time_type_text": "Time frame",
            "open": "Open for user",
            "status": "a",
            "status_text": "Accepted",
            "action_status": "2",
            "action_status_text": "Paused",
            "start_date": "2022-08-24T17:05:00+10:00",
            "end_date": "2022-08-24T17:05:00+10:00",
            "short_description": "Job for Sergey (Conflict)",
            "long_description": "Test Conflict in Android",
            "address": "Address test",
            "cost": 45,
            "duration": "1.00",
            "bonus": 0,
            "created": "24-08-2022 17:05",
            "income": 45,
            "attachments": 0
        },
        {
            "id": 793,
            "token": "cYrA3e",
            "number": "TST-JB-111-220793",
            "type": "2",
            "type_text": "Fix",
            "time_type": "1",
            "time_type_text": "Shift",
            "open": "Open for user",
            "status": "3",
            "status_text": "Require confirmation",
            "action_status": "3",
            "action_status_text": "Finished",
            "start_date": "2022-08-16T00:45:00+10:00",
            "end_date": "2022-08-16T02:45:00+10:00",
            "short_description": "thyhy",
            "long_description": "asf\r\n\r\nas dasdasda",
            "address": "Address test",
            "cost": 13,
            "duration": "1.00",
            "bonus": 0,
            "created": "16-08-2022 00:46",
            "income": 13,
            "attachments": 0
        }*/

        // number, type_text, status, !short_description, !address, cost or duration, !created, !attachments
    ]

    onMount(async () => {
        const _org = get(organization)
        const _url = `/jobs/${_org.id}/`
        const response = await axiosPrivate().get(_url);
        jobsArrObj = response.data.results.jobs;
    });
 
</script>

<Section>
    <Calendar slot="header"/>
    {#each jobsArrObj as obj, i}
        <Card
            class="color"
            style="--color: var(--color-{i}); --color-light: var(--color-light-{i})"
        >
            <svelte:fragment slot="aside">
                <!-- <img src={obj.organization.logo} alt={obj.organization.name}> -->
            </svelte:fragment>
            <svelte:fragment slot="header">
                {obj.short_description} | {obj.number}
            </svelte:fragment>
            <svelte:fragment slot="body">
                {obj.address} 
            </svelte:fragment>
            <svelte:fragment slot="attachments">
                {obj.attachments || '-'}
            </svelte:fragment>
            <svelte:fragment slot="created">
                {obj.created}
            </svelte:fragment>
        </Card>
    {/each}
    <Filter slot="footer"/>
</Section>