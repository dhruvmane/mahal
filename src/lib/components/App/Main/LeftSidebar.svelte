<script lang=ts>
    
    import { onMount, untrack } from 'svelte'
    import Lenis from 'lenis';
    import Fuse from 'fuse.js';

    import createPlaylist from '../../../modules/create/playlist.ts'    

    // Import Icons
    import Create from '$lib/assets/icons/plus.svg'
    import Search from '$lib/assets/icons/search.svg'
    import Filter from '$lib/assets/icons/filter.svg'
    import Pinned from "$lib/assets/icons/pinned.svg"

    import { PLAYLISTS } from '../../../modules/globals.svelte.js'
    import type { PlaylistsInterface } from '../../../modules/globals.svelte.js';

    import Playlist from '../Playlist/LeftSidebar.svelte';

    // Left Sidebar Playlist Search/Sort by Title.
    let searchBarRef: HTMLInputElement
    let isSearching = $state(false)
    let searchQuery = $state("")

    let playlistSection: HTMLElement;
    
    onMount(() => {
    	const lenis = new Lenis({autoRaf: true, wrapper: playlistSection})
    })

    let SORTED_LIST: PlaylistsInterface[] = $state([])

    const searchLeftSidebarfuse = new Fuse(PLAYLISTS, {
        keys: ['title', 'subtitle']
    })

    function fuzzySearch(searchQuery: string) {
        let query: string = searchQuery
        SORTED_LIST = searchLeftSidebarfuse.search(query).map(result => result.item)
        console.log(`Fuzzy Searching for Text: ${query}`)
    }

    let PINNED_PLAYLISTS: PlaylistsInterface[] = $derived(PLAYLISTS.filter(p => p.isPinned));
    let REST_PLAYLISTS: PlaylistsInterface[] = $derived(PLAYLISTS.filter(p => !p.isPinned));

    $effect(() => {
        if (searchQuery === "") {
            isSearching = false
            SORTED_LIST = []
        } else {
            fuzzySearch(searchQuery)
            // Disable Default Lists.
            isSearching = true
        }
    })


</script>

<div class="hidden 2xl:flex flex-col justify-start w-90 bg-black transition duration-500 ease-in-out">

<div class="bg-neutral-950 mx-4 py-2 px-4 rounded-2xl h-[90%]">
    <div class="flex text-white text-2xl w-full h-12 items-center">
        <!-- "YOUR LIBRARY                [+ CREATE] " -->
        <h1 class="undeline underline-offset-4 w-full px-1 text-neutral-500">your library</h1>
        <button onclick={createPlaylist} class="items-center gap-2 bg-neutral-900 hover:border-neutral-800 transition duration-300 ease-in-out flex rounded-full h-9 border-2 border-transparent p-3">
            <img class="invert-40 size-4" src={Create} alt="createIcon">
        </button>        
        <!-- ----------------------------------------- -->
    </div>

    <div class="flex my-1 w-full">
        <!-- SEARCH BAR               SORT-BY -->
        <div class="flex items-center bg-none box-border bg-neutral-900 flex-1 rounded-2xl">
            <input bind:this={searchBarRef} bind:value={searchQuery} class="z-99 bg-transparent text-white focus:ring-0 border-2 border-transparent rounded-2xl w-full flex-4" type=text>
            
            <button class="hover:scale-105 min-w-10 hover:bg-neutral-800 transition duration-100 flex-1 m-auto">
                <img class="invert-20 size-10 scale-60" src={Search} alt="Search">
            </button>
            
            <!-- Playlist Filter Sort Button -->
            <button class="hover:bg-neutral-800 m-auto min-w-10 rounded-r-2xl flex flex-1 px-1 items-center h-full border-2 border-transparent transition duration-500 ease-in-out">
                <img class="size-8 invert-20 translate-x-1" src={Filter} alt="Filter Icon">
            </button>
        </div>
    </div>

    <!-- Playlists Section -->
    <div bind:this={playlistSection} class="overflow-auto h-[79%] rounded-b-2xl mt-6">
        {#if !isSearching}
        <h1 class="text-mahal-maintheme text-2xl border-b-2 w-1/2 border-mahal-maintheme/50 pb-0.5 outline-offset-8 flex items-center">your pins.</h1>
        <div class="text-neutral-500 my-3">
            {#each PINNED_PLAYLISTS as playlist}
                <Playlist playlist_details={playlist}/>
            {/each}
        </div>
        
        <div class="overflow-auto overflow-y-auto flex flex-col gap-1">
            {#each REST_PLAYLISTS as playlist}
                <Playlist playlist_details={playlist}/>
            {/each}
        </div>

        {:else if SORTED_LIST.length > 0}
            <!-- Fuzzy Search Show Results. -->
            <div class="overflow-auto overflow-y-auto">
                {#each SORTED_LIST as playlist}
                    <Playlist playlist_details={playlist}/>
                {/each}
            </div>
        {:else if SORTED_LIST.length === 0}
            <h1 class="text-neutral-700 text-center text-[10px]">No Playlist, Song or Podcast found</h1>
            <h1 class="text-neutral-700 text-center text-[10px]">for '{searchQuery}'</h1>
        {/if}
    </div>

</div>

</div>
