<script lang="ts">
    import type { Talk } from '$lib/types';
    export let talks: Talk[];
</script>

<div class="container mx-auto bg-yellow-400-m-4">
    {#each talks as talk }
        <h3>{talk.time} | {talk.title}</h3>
        <h4>{talk.speaker}</h4>
    {/each}
</div>
