<script lang="ts">
    import Main from '$cmp/authorized/Main.svelte'
    import Header from '$cmp/authorized/header/Header.svelte'
    import Section from '$cmp/authorized/section/Section.svelte'
    import Card from '$cmp/authorized/section/card/Card.svelte'
    import Footer from '$cmp/authorized/footer/Footer.svelte'
    import Calendar from '$cmp/calendar/Calendar.svelte'
    import Filter from '$cmp/filters/Type1.svelte'
</script>

<Main>
    <Header/>
    <Section>
        <Calendar slot="calendar"/>
        <!-- {#each Array(55) as _, i } -->
            <Card>
                <svelte:fragment slot="aside">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="m.334 0 4.358 4.359h7.15v7.15l4.358 4.358V0H.334ZM.2 9.72l4.487-4.488v6.281h6.28L6.48 16H.2V9.72Z"/>
                    </svg>
                </svelte:fragment>
                <svelte:fragment slot="header">
                    AMD
                </svelte:fragment>
                <svelte:fragment slot="body">
                    Here will be extra info or atension message.
                </svelte:fragment>
                <svelte:fragment slot="jobs">
                    21
                </svelte:fragment>
            </Card>
        <!-- {/each} -->
        <Filter slot="filter"/>
    </Section>
    <Footer/>
</Main>
