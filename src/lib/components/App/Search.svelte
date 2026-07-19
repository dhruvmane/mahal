<!-- SEARCH BAR -->

<script lang=ts>
    import Search from '$lib/assets/icons/search.svg'
    import { PLAYLISTS, UI_CONFIG } from '../../modules/globals.svelte';
    import type { PlaylistsInterface, Song, Podcast } from '../../modules/globals.svelte';
    import Fuse from 'fuse.js'    

    import Details from './Search/Details.svelte';

    // Toggle Results Dropdown.
    let isSearching = $derived(UI_CONFIG.isSearching)
    
    // When Searching, it can show results from both Playlist Titles, Songs Titles, Podcast Titles.
    let searchResultsPlaylists: PlaylistsInterface[] = $state([])
    let searchResultsSongs: Song[] = $state([])
    let searchResultsPodcast: Podcast[] = $state([])

    const fusePlaylists = $derived(
        new Fuse(PLAYLISTS, {keys: ['title', 'subtitle'], threshold: 0.3})
    )

    
    let searchBarRef: HTMLInputElement;
    let query: string = $derived(UI_CONFIG.SEARCH_QUERY);
    
    export function clearSearch() {
        query = ""
    }

    $effect(() => {
        if (query !== "") {

            console.log("query:", query);
            console.log("snapshot:", PLAYLISTS);

            // Toggle Dropdown Menu
            isSearching = true

            searchResultsPlaylists = fusePlaylists.search(query).map(r => r.item)

        } else {
            isSearching = false
            searchResultsPlaylists = []
            searchResultsSongs = []
            searchResultsPodcast = []
        }
    })

</script>

<div class="grid grid-cols-1 z-10">
    <!-- Search Bar -->
    <div class="hidden mahalmd:flex justify-self-center">
            <button class="z-13 hover:cursor-pointer hover:scale-106 translate-x-16">
                <img class="invert-20 size-8" src={Search} alt="SearchIcon">
            </button>
            <input 
                bind:this={searchBarRef} 
                bind:value={UI_CONFIG.SEARCH_QUERY} 
                class="ease-in-out flex bg-[#141414] border-0 text-white shadow-taupe-800 focus:ring-0 box-border m-4 p-3 pl-14 w-[400px] rounded-3xl" 
                type="text" 
                placeholder="Search Playlists, Songs, Podcasts & More..">
    </div>

</div> 

{#if isSearching && query !== ""}
    <div class="z-99999 fixed top-[80px] p-2 translate-x-5 w-[450px] rounded-b-3xl bg-[#141414]">
        
        <!-- Playlists -->
        {#if searchResultsPlaylists[0]}
        <div class="flex flex-col p-4">
            <h1 class="text-neutral-500 text-2xl">Playlists</h1>
            <div class="flex flex-col gap-1 py-2">
                {#each searchResultsPlaylists as playlist}
                    <Details details={playlist} />
                {/each}
            </div>
        </div>
        {/if}
        
        <!-- Songs -->
        {#if searchResultsSongs[0]}
        <div>
            <h1 class="text-neutral-500 text-2xl m-4">Songs</h1>
        </div>
        {/if}
        
        <!-- Podcasts -->
        {#if searchResultsPodcast[0]}
        <div>
            <h1 class="text-neutral-500 text-2xl m-4">Podcasts</h1>
        </div>
        {/if}
    </div>
{/if}