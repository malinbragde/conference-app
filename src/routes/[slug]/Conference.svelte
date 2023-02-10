<script lang="ts">
    import type { Conference } from '$lib/types';
    export let conference: Conference;
</script>

<div class="container mx-auto bg-yellow-400-m-4">
    <h1 class="text-2xl uppercase text-center m-3">Konferens</h1>
    <h2> {conference.description} </h2>
    <h3><span>{conference.location}</span></h3>
</div>
