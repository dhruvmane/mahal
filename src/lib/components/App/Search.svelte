<script lang=ts>
    import Search from '$lib/assets/icons/search.svg'
    import { PLAYLISTS } from './globals.svelte';
    import type { PlaylistsInterface, Song, Podcast } from './globals.svelte';
    import Fuse from 'fuse.js'    

    import Details from './Search/Details.svelte';

    // Toggle Results Dropdown.
    let isSearching = $state(false)
    
    // When Searching, it can show results from both Playlist Titles, Songs Titles, Podcast Titles.
    let searchResultsPlaylists: PlaylistsInterface[] = $state([])
    let searchResultsSongs: Song[] = $state([])
    let searchResultsPodcast: Podcast[] = $state([])

    let searchBarRef: HTMLInputElement
    let miniSearchBarRef: HTMLInputElement

    function search(event: Event) {
        // console.log(searchBarRef.value)
        const query: string = (event.target as HTMLInputElement).value;
        if (query !== "") {

            console.log("query:", query);
            console.log("snapshot:", $state.snapshot(PLAYLISTS));

            // Toggle Dropdown Menu
            isSearching = true

            const fusePlaylists = new Fuse($state.snapshot(PLAYLISTS), { keys: ['title', 'subtitle'], threshold: 0.3 });
            searchResultsPlaylists = [...fusePlaylists.search(query).map(r => r.item)];
            console.log("raw fuse results:", searchResultsPlaylists);
        
            console.log(searchResultsPlaylists)

        } else {
            isSearching = false
            searchResultsPlaylists = []
            searchResultsSongs = []
            searchResultsPodcast = []
        }
    }

</script>

<div class="grid grid-cols-1 z-10">
    <!-- Search Bar -->
    <div class="hidden mahalmd:flex justify-self-center">
            <button class="z-13 hover:cursor-pointer hover:scale-106 translate-x-16">
                <img class="invert-20 size-8" src={Search} alt="SearchIcon">
            </button>
            <input bind:this={searchBarRef} oninput={search} class="transition duration-600 ease-in-out flex bg-[#141414] border-0 text-white shadow-taupe-800 focus:ring-0 box-border m-4 p-3 pl-14 w-[400px] rounded-3xl" type="text" placeholder="Search">
    </div>

    <!-- Mini Search Bar
    <div class="flex mahalmd:hidden ml-15 mr-20 w-100">
        <button class="z-13 hover:cursor-pointer hover:scale-106 translate-x-14">
            <img class="invert-40 size-8" src={Search} alt="SearchIcon">
        </button>
        <input bind:this={miniSearchBarRef} oninput={search} class="transition duration-600 ease-in-out flex bg-[#141414] border-0 text-white shadow-taupe-800 focus:ring-0 box-border m-4 p-3 pl-14 w-[400px] rounded-3xl" type="text" placeholder="Search">
    </div> -->
</div> 

{#if isSearching}
    <div class="z-99999 fixed top-[80px] p-2 translate-x-5 w-[450px] rounded-b-3xl bg-[#141414]">
        
        <!-- Playlists -->
        {#if searchResultsPlaylists[0]}
        <div>
            <h1 class="text-neutral-500 text-2xl m-4">Playlists</h1>
            <div>
                {#each searchResultsPlaylists as playlist}
                    <Details details={playlist}/>
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