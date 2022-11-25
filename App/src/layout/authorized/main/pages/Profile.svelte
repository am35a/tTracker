<script lang="ts">
    // import Input from '$cmp/forms/Input.svelte'
    import Button from '$cmp/buttons/Button.svelte'
    import Section from './section/Section.svelte'

    // import { user } from '$str/store'
</script>

<Section>
    <div>
        <details>
            <summary>
                User data:
            </summary>
            Fist name
            Second name
            Registration date
            <hr>
            <Button>SAVE</Button>
        </details>
        <details>
            <summary>
                Privasy:
            </summary>
            Email
            Password
            Password
            <Button>SAVE</Button>
        </details>
        <Button>SIGN OUT</Button>
    </div>
</Section>