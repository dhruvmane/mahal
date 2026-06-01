<script>
    import { setUIState } from '$lib/modules/globals.svelte';
    
    let { playlist_details = undefined } = $props()
    // Import placeholder Images (for testing)
    import placeholder_1 from '$lib/assets/placeholder/playlist/1.jpg'
    let cover = playlist_details.cover
    let id = playlist_details.id
    cover = placeholder_1

</script>

<button class="hover:cursor-pointer w-full" onclick={() => setUIState('PLAYLIST', id)}>
    {#if !playlist_details.isPinned}
    <div class="mt-2 md-2 ml-4 gap-1 gap-x-10 h-12.5 min-w-33 max-w-100 bg-white/5 border border-white/10 shadow-xl backdrop-blur-xl hover:bg-white/30 transition duration-300 ease-in-out">
        <div class="flex overflow-hidden">
            <img class="ml-4 mt-1.5 size-9 rounded" src={cover} alt="cover">
            <div class="flex items-center overflow-y-hidden m-3">
                <h1 class=" text-white overflow-hidden whitespace-nowrap">{playlist_details.title}</h1>
            </div>
        </div>
    </div>
    {:else}
    <div class="mt-2 md-2 ml-4 gap-1 gap-x-10 h-12.5 min-w-33 max-w-100 bg-green-200/20 border border-white/10 shadow-xl backdrop-blur-xl hover:bg-green-400/30 transition duration-300 ease-in-out">
        <div class="flex overflow-hidden">
            <img class="ml-4 mt-1.5 size-9 rounded" src={cover} alt="cover">
            <div class="flex items-center overflow-y-hidden m-3">
                <h1 class=" text-white overflow-hidden whitespace-nowrap">{playlist_details.title}</h1>
            </div>
        </div>
    </div>
    {/if}
</button>
