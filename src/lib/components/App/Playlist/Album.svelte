<script>
    import { UI_CONFIG, setUIState } from '../../../modules/globals.svelte';

    let { playlist_details = undefined } = $props()
    
    
    
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
        UI_CONFIG.SELECTED_PLAYLIST_ID = id
    }

</script>

<button class="hover:cursor-pointer" onclick={() => {setUIState("PLAYLIST")}}>
    <div title="{playlist_details.title}" class="mt-2 md-2 h-full w-full bg-white/5 border border-white/10 shadow-xl backdrop-blur-xl hover:bg-white/30 transition duration-300 ease-in-out">
        <img class="w-full h-full" src={cover} alt="COVER">
    </div>
</button>