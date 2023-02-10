<script lang="ts">
    import type { Day } from '$lib/types';
    import type Talks from './Talks.svelte';
    import type Speakers from './Speakers.svelte';
    export let days: Day[];
</script>

<div class="container mx-auto bg-yellow-400-m-4">
    <div class="text-center uppercase">Days</div>
</div>
<ul>
    {#each days as day}
    <li>
        <div class="container-mx-auto bg-yellow-400">
            <h2> {day.title} </h2>
            <h3><span>{day.speakers}</span></h3>
            <!-- <Talks talk = {day.talks}/>
            <Speakers speakers = {day.speakers}/> -->
        </div>
    </li>
    {/each}
</ul>

