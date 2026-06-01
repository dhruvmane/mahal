<script>
    import { UI_CONFIG, setUIState } from '../../../modules/globals.svelte';

    let { playlist_details = undefined } = $props()
    
    
    
    import placeholder_1 from '$lib/assets/placeholder/playlist/1.jpg'
    let cover = playlist_details.cover
    let id = playlist_details.id

    if (cover == "") {
        cover = placeholder_1
    }

</script>

<button class="hover:cursor-pointer" onclick={() => {setUIState("PLAYLIST", playlist_details.id)}}>
    <div title="{playlist_details.title}" class="mt-2 md-2 h-full w-full bg-white/5 border border-white/10 shadow-xl backdrop-blur-xl hover:bg-white/30 transition duration-300 ease-in-out">
        <img class="w-full h-full" src={cover} alt="COVER">
    </div>
</button>