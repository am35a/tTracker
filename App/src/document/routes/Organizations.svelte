<script lang="ts">
    import Section from '$cmp/authorized/section/Section.svelte'
    import Card from '$cmp/authorized/section/card/Card.svelte'
    import Calendar from '$cmp/calendar/Calendar.svelte'
    import Filter from '$cmp/filters/Type1.svelte'


    let organizationsArrObj: any = [
            {
                "organization": {
                    "id": 5,
                    "name": "theAD",
                    "logo": "http://127.0.0.1:8000/media/site_5/GIF_Loading_Animation_Transparent.gif"
                },
                "messages": 2,
                "tasks": 23,
                "jobs": 0
            },
            {
                "organization": {
                    "id": 6,
                    "name": "meMate",
                    "logo": "http://127.0.0.1:8000/media/site_6/img-logo.png"
                },
                "messages": 0,
                "tasks": 0,
                "jobs": 0
            },
            {
                "organization": {
                    "id": 61,
                    "name": "TEST",
                    "logo": "http://127.0.0.1:8000/media/no_org.png"
                },
                "messages": 0,
                "tasks": 0,
                "jobs": 2
            }
        ]
</script>

<Section>
    <Calendar slot="calendar"/>
    {#each organizationsArrObj as obj }
        <Card class="color-1 active">
            <svelte:fragment slot="aside">
                <img src={obj.organization.logo} alt={obj.organization.name}>
            </svelte:fragment>
            <svelte:fragment slot="header">
                {obj.organization.name}
            </svelte:fragment>
            <svelte:fragment slot="body">
                <!-- Here will be extra info or atension message. -->
            </svelte:fragment>
            <svelte:fragment slot="jobs">
                {obj.jobs}
            </svelte:fragment>
        </Card>
    {/each}
    <Filter slot="filter"/>
</Section>