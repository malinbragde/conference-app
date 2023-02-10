<script lang="ts">
    import type { Speaker } from '$lib/types';
    export let speakers: Speaker[];
</script>

<div class="container mx-auto bg-yellow-400-m-4">
    {#each speakers as speaker }
        <h3>{speaker.name} | {speaker.title}</h3>
    {/each}
</div>
