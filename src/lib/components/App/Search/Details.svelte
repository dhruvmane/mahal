<!-- PILLS AS SEARCH BAR RESULTS -->

<script>
    let { details } = $props()
    import placeholder from '$lib/assets/placeholder/playlist/2.jpg'
    import { setUIState, UI_CONFIG } from '$lib/modules/globals.svelte';
    import Search from '../Search.svelte';
    
    let _cover = placeholder
    let _title = $derived(details.title)
    let _id = $derived(details.id)

</script>

<button onclick={() => {setUIState('PLAYLIST', _id); UI_CONFIG.SEARCH_QUERY = "" }} class="hover:cursor-pointer rounded-2xl" >
    <div class="flex m-auto h-full">
        <div class="flex bg-white/5 border border-white/10 shadow-xl hover:bg-white/30 rounded w-full transition duration-300 ease-in-out">
            <img class="size-10" src={_cover} alt="Cover">
            <div>
                <h1 class="text-neutral-300 m-2">{_title}</h1>
            </div>
        </div>
    </div>
</button>