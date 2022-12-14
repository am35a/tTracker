<script lang="ts">
    import { onMount } from 'svelte';
    import Section from './section/Section.svelte'
    import Card from '$cmp/cards/Card.svelte'
    import Calendar from '$cmp/calendar/Calendar.svelte'
    import Filter from '$cmp/filters/Type1.svelte'

    import { access_token, user, organization } from '$str/store'
    import { axiosPrivate } from "../../../../assets/ts/api";

    function chooseOrganization(id: number, name: string, color: number) {
        $organization.id = id
        $organization.name = name
        $organization.color = color

        $user.page.current = 1
    }

    let organizationsArrObj: any = [];

    onMount(async () => {
        const response = await axiosPrivate().get('/organizations/');
        organizationsArrObj = response.data;
    });

</script>

<Section>
    <Calendar slot="header"/>
    {#each organizationsArrObj as obj, i}
        <Card
            on:click={() => chooseOrganization(obj.organization.id, obj.organization.name, i)}
            class="color {!($organization.id === obj.organization.id) || 'active'}"
            style="--color: var(--color-{i}); --color-light: var(--color-light-{i})"
        >
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
    <Filter slot="footer"/>
</Section>