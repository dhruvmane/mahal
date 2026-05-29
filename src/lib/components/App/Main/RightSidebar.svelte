<script>
  import { UI_CONFIG } from "../../../modules/globals.svelte";

</script>

<div class="hidden 2xl:flex h-full w-120 bg-black shrink-0">

    <!-- GRAY SUB-BOX -->
    <div class="grid z-100 bg-black h-full w-full ml-5 mr-5 rounded-2xl">
        {#if UI_CONFIG.showQueue}
            <!-- QUEUE DETAILS -->
            <div class="bg-neutral-950 border-2 border-transparent rounded-2xl w-full h-[calc(100%-10%)]">
                <h1 class="text-neutral-500 text-3xl m-3">queue.</h1>
            </div>
        {:else}
            <!-- CURRENT SONG DETAILS -->
            <div class="bg-neutral-950 border-2 border-transparent rounded-2xl w-full h-[calc(100%-10%)]">
                <h1 class="text-neutral-500 text-3xl m-3">now playing</h1>
            </div>
        {/if}
    </div>

</div>
