<script lang=ts>
    
    import { UI_CONFIG } from '../../../modules/globals.svelte.js'
    import { onMount, untrack } from 'svelte'
    import Lenis from 'lenis';
    import Fuse from 'fuse.js';

    import createPlaylist from '../../../modules/create/playlist.ts'    

    import Create from '$lib/assets/icons/plus.svg'
    import Search from '$lib/assets/icons/search.svg'
    import Filter from '$lib/assets/icons/filter.svg'

    import { PLAYLISTS } from '../../../modules/globals.svelte.js'
    import type { PlaylistsInterface } from '../../../modules/globals.svelte.js';

    import Playlist from '../Playlist/LeftSidebar.svelte';

    // Left Sidebar Playlist Search/Sort by Title.
    let searchBarRef: HTMLInputElement
    let isSearching = $state(false)

    let playlistSection: HTMLElement;
    
    onMount(() => {
    	const lenis = new Lenis({autoRaf: true, wrapper: playlistSection})
    })

    let SORTED_LIST: PlaylistsInterface[] = $state([])

    function fuzzySearch() {
        if (searchBarRef.value !== "") {
            
            let query: string = searchBarRef.value
            
            // Disable Default Lists.
            isSearching = true

            let _playlists = PLAYLISTS

            const fuse = new Fuse(_playlists, {
                keys: ['title', 'subtitle']
            })

            let _SORTED_LIST: PlaylistsInterface[] = fuse.search(query).map(result => result.item)

            SORTED_LIST = _SORTED_LIST
            console.log(`Fuzzy Searching for Text: ${fuse}`)

            // "UNPIN the Playlist."
            for (let i in SORTED_LIST) {
                SORTED_LIST[i].isPinned = false
            }

        } else {
            isSearching = false
            SORTED_LIST = []
        }
    }
    let PINNED_PLAYLISTS: PlaylistsInterface[] = $derived(PLAYLISTS.filter(p => p.isPinned));
    let REST_PLAYLISTS: PlaylistsInterface[] = $derived(PLAYLISTS.filter(p => !p.isPinned));

</script>

<div class="hidden 2xl:flex flex-col justify-start w-120 bg-black transition duration-500 ease-in-out">

<div class="bg-neutral-950 ml-4 mr-4 rounded-2xl h-[90%]">
    <div class="flex text-white text-2xl mt-5 w-full h-12">
        <!-- "YOUR LIBRARY                [+ CREATE] " -->
        <h1 class="ml-5 undeline underline-offset-4 w-full text-neutral-500">Your Library</h1>
        <button onclick={createPlaylist} class="mr-3 hover:cursor-pointer bg-neutral-800 hover:border-neutral-500 transition duration-300 ease-in-out box-border flex justify-end rounded-[1000px] border-2 border-transparent pl-10 pr-5 -translate-y-1 scale-80">
            <img class="m-1.5 invert-60 size-8" src={Create} alt="createIcon">
            <h1 class="m-1 hover:cursor-pointer text-neutral-500">Create</h1>
        </button>        
        <!-- ----------------------------------------- -->
    </div>

    <div class="flex">
        <!-- SEARCH BAR               SORT-BY -->
        <div class="flex ml-5 mt-2 bg-none box-border">
            <button class="z-101 hover:cursor-pointer hover:scale-110 hover:invert-40">
                <img class="z-100 invert-20 size-10 translate-y-0.5 translate-x-0.5 scale-60" src={Search} alt="Search">
            </button>
            <input bind:this={searchBarRef} oninput={fuzzySearch} class="z-99 ml-10 text-white focus:ring-0 border-2 rounded-l-[1000px] border-transparent hover:border-neutral-900 bg-neutral-900 -translate-x-20 pl-10 w-95" type=text>
            
            <!-- Playlist Filter Sort Button -->
            <button class="hover:cursor-pointer z-100 hover:bg-neutral-800 -translate-x-38 flex bg-neutral-900 pr-10 rounded-r-[1000px] border-2 border-transparent transition duration-500 ease-in-out">
                <img class="size-10 invert-20 ml-3 scale-80" src={Filter} alt="Filter Icon">
                <h1 class="text-neutral-700 text-2xl pl-1 pt-0.5 scale-80">Recent</h1>
            </button>
        </div>
    </div>

    <!-- Playlists Section -->
    <div bind:this={playlistSection} class="playlistsSection overflow-auto h-[calc(100%-21%)] rounded-b-2xl mt-6">
        {#if !isSearching}
        <h1 class="text-green-700 text-2xl m-4 border-b-2 w-1/2 border-green-900/50 pb-0.5 outline-offset-8">pinned playlists.</h1>
        <div class="text-neutral-500">
            {#each PINNED_PLAYLISTS as playlist}
                <Playlist playlist_details={playlist}/>
            {/each}
        </div>
        
        <div class="overflow-auto overflow-y-auto mt-4">
            {#each REST_PLAYLISTS as playlist}
                <Playlist playlist_details={playlist}/>
            {/each}
        </div>

        {:else}
            <!-- Fuzzy Search Show Results. -->
            <div class="overflow-auto overflow-y-auto mt-4">
                {#each SORTED_LIST as playlist}
                    <Playlist playlist_details={playlist}/>
                {/each}
            </div>
        {/if}
    </div>

</div>

</div>

<style>
    .playlistsSection {
        scrollbar-width: none;
    }
</style>
