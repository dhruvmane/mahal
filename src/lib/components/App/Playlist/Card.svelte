<script>
    import { UI_CONFIG } from '../globals.svelte';
    let { playlist_details = undefined } = $props()
    
    // Import placeholder Images (for testing)
    import placeholder_1 from '$lib/assets/placeholder/playlist/1.jpg'
    // import placeholder_2 from '$lib/assets/placeholder/playlist/2.jpg'
    // import placeholder_3 from '$lib/assets/placeholder/playlist/3.jpg'
    // import placeholder_4 from '$lib/assets/placeholder/playlist/4.jpg'
    // import placeholder_5 from '$lib/assets/placeholder/playlist/5.jpg'
    // import placeholder_6 from '$lib/assets/placeholder/playlist/6.jpg'

    // const placeholders = [placeholder_1, placeholder_2, placeholder_3, placeholder_4, placeholder_5, placeholder_6]

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
    <div class="overflow-hidden rounded-2xl h-[calc(100% + 10%)] w-full bg-mahal-playlist-bg border border-mahal-border-color shadow-xl backdrop-blur-xl hover:bg-white/30 transition duration-300 ease-in-out">
        <img class="" src={cover} alt="title">
        <div class="m-3 text-center">
            <h1 class="text-white text-[20px]">{playlist_details.title}</h1>
            <p class="text-white">{playlist_details.subtitle}</p>
        </div>
    </div>
</button>