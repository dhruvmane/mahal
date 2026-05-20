<script>
    import { UI_CONFIG } from '../globals.svelte';
    
    let { playlist_details = undefined } = $props()

    // Import placeholder Images (for testing)
    import placeholder_1 from '$lib/assets/placeholder/playlist/1.jpg'
    
    let cover = playlist_details.cover
    let id = playlist_details.id

    if (cover == "") {
        const randomValue = Math.floor(Math.random() * 6);
        // cover = placeholders[randomValue]
        cover = placeholder_1
    }

    function setState() {
        const _state = "PLAYLIST"
        // Set State Globally
        UI_CONFIG.MIDDLE_WINDOW_STATE = _state
    }

</script>


<button class="hover:cursor-pointer" onclick={setState}>
    <div class="rounded-2xl mt-2 md-2 gap-1 gap-x-10 h-12.5 min-w-43 bg-white/5 border border-white/10 shadow-xl backdrop-blur-xl hover:bg-white/30 transition duration-300 ease-in-out">
        <div class="flex overflow-hidden">
            <img class="ml-4 mt-1.5 size-9 rounded" src={cover} alt="cover">
            <div class="flex items-center overflow-y-hidden m-3">
                <h1 class=" text-white overflow-hidden whitespace-nowrap">{playlist_details.title}</h1>
            </div>
        </div>
    </div>
</button>
