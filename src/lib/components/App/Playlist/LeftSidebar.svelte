<script>
    import { setUIState } from '$lib/modules/globals.svelte';
    
    let { playlist_details = undefined } = $props()
    // Import placeholder Images (for testing)
    import placeholder_1 from '$lib/assets/placeholder/playlist/1.jpg'
    let cover = playlist_details.cover
    let id = playlist_details.id
    cover = placeholder_1

</script>

<button class="hover:cursor-pointer w-full" onclick={() => {setUIState('PLAYLIST', id)}}>
    {#if !playlist_details.isPinned}
    <div class="px-2 h-12.5 w-full bg-white/5 border border-white/10 shadow-xl backdrop-blur-xl hover:bg-white/30 transition duration-300 ease-in-out">
        <div class="flex items-center overflow-hidden">
            <img class="size-9 rounded" src={cover} alt="cover">
            <div class="flex items-center overflow-y-hidden m-3">
                <h1 class=" text-white overflow-hidden whitespace-nowrap text-ellipsis">{playlist_details.title}</h1>
            </div>
        </div>
    </div>
    {:else}
    <div class="px-2 gap-1 gap-x-10 h-12.5 w-full bg-mahal-maintheme/15 border border-white/10 shadow-xl backdrop-blur-xl hover:bg-mahal-maintheme/30 transition duration-300 ease-in-out">
        <div class="flex items-center overflow-hidden">
            <img class="size-9 rounded" src={cover} alt="cover">
            <div class="flex items-center overflow-y-hidden m-3">
                <h1 class=" text-white overflow-hidden whitespace-nowrap text-ellipsis">{playlist_details.title}</h1>
            </div>
        </div>
    </div>
    {/if}
</button>
