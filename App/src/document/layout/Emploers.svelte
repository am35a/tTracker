<script lang="ts">
    import Main from '$cmp/authorized/Main.svelte'
    import Header from '$cmp/authorized/header/Header.svelte'
    import Section from '$cmp/authorized/section/Section.svelte'
    import Footer from '$cmp/authorized/footer/Footer.svelte'
    import Calendar from '$cmp/calendar/Calendar.svelte'
    import Filter from '$cmp/filters/Type1.svelte'
</script>

<Main>
    <Header/>
    <Section>
        <Calendar slot="calendar"/>
        <div class="card">
            emploer card
        </div>
        <Filter slot="filter"/>
    </Section>
    <Footer/>
</Main>
