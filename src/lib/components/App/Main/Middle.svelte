<script lang=ts>

    import placeholder from '$lib/assets/placeholder/playlist/1.jpg'

    import PlaylistAlbum from '$lib/components/App/Playlist/Album.svelte'
    import PlaylistCard from '$lib/components/App/Playlist/Card.svelte'
    import PlaylistBars from '$lib/components/App/Playlist/Slab.svelte'
    
    import RecentlyPlayedAlbum from '$lib/components/App/Playlist/Album.svelte'
    import RecentlyPlayedCard from '$lib/components/App/Playlist/Card.svelte'
    import RecentlyPlayedBars from '$lib/components/App/Playlist/Slab.svelte'
    
    import Lenis from 'lenis';
    import gsap from 'gsap'
    import { onMount } from 'svelte';
    import ToggleDisplay from '../Playlist/ToggleDisplay.svelte';
    import { PLAYLISTS, RECENTLY_PLAYED, UI_CONFIG, setDisplayStyle, type PlaylistsInterface } from '../../../modules/globals.svelte'


    const colsMap: Record<number, string> = {
        3: 'grid grid-cols-1 mahalmd:grid-cols-3 justify-start gap-x-3 w-full',
        5: 'grid grid-cols-2 mahalmd:grid-cols-4 mb-[20px] justify-start gap-3 w-full',
        6: 'grid grid-cols-3 mahalmd:grid-cols-5 mb-[1000px] justify-items-start gap-3 w-full overflow-hidden',
    }

    let middleDoc: HTMLElement;
    let playlistSection: HTMLElement | undefined = $state();
    let playlistSectionColumns: number = $state(6);
    let playlistStringClass = $derived(colsMap[playlistSectionColumns])
    
    let recentlyPlayedSection: HTMLElement | undefined = $state();
    let recentlyPlayedSectionColumns: number = $state(6);
    let recentlyPlayedStringClass = $derived(colsMap[recentlyPlayedSectionColumns])
    
    let playlistDisplayStyle = $state(UI_CONFIG.playlistDisplayStyle)
    function setPlaylistDisplayStyle(style: string) {
        playlistDisplayStyle = style
        setDisplayStyle(style)
        if (style === 'BARS') playlistSectionColumns = 3
        if (style === 'ALBUM') playlistSectionColumns = 6
        if (style === 'CARD') playlistSectionColumns = 5
    }

    let recentlyPlayedDisplayStyle = $state('ALBUM')
    function setRecentlyPlayedDisplayStyle(style: string) {
        recentlyPlayedDisplayStyle = style
        if (style === 'BARS') recentlyPlayedSectionColumns = 3
        if (style === 'ALBUM') recentlyPlayedSectionColumns = 6
        if (style === 'CARD') recentlyPlayedSectionColumns = 5
    }


    // let PLAYLISTS: {cover: string, title: string, subtitle: string}[] = $state([])
    // let RECENTLY_PLAYED = $state([])

    // @ts-ignore

    $effect(() => {
        if (playlistDisplayStyle) {
            gsap.fromTo(playlistSection!, {opacity: 0}, {opacity: 1, duration: 1})
        }
        console.log('Changed Playlist Display Style')
    })

    $effect(() => {
        if (recentlyPlayedDisplayStyle) {
            gsap.fromTo(recentlyPlayedSection!, {opacity: 0}, {opacity: 1, duration: 1})
        }
        console.log('Changed Recently Played Display Style')
    })

    let _PLAYLIST_WINDOW: PlaylistsInterface | undefined = $state({cover: "", subtitle: "", title: "", id: "", songs: []})
    $effect(() => {
        // Data about the playlist opened in the window.
        _PLAYLIST_WINDOW = PLAYLISTS.find(item => item.id === UI_CONFIG.SELECTED_PLAYLIST_ID)
    })

    // Lenis for Scrolling in Middle Area
    onMount(() => {
    	const lenis = new Lenis({autoRaf: true, wrapper: middleDoc})
    })

</script>

<div bind:this={middleDoc} class="middleElement overflow-auto flex-1 min-w-0 h-200 bg-none rounded-2xl pb-1000">
{#if UI_CONFIG.MIDDLE_WINDOW_STATE === 'NONE'}

    <!-- Playlists Section -->
    {#if PLAYLISTS[0]}
    <div class="mt-6 ml-20 mr-20 p-4">
        <!-- Playlist Display Options -->
        <div class="flex text-neutral-600">
            <h1 class="text-neutral-600 w-1/2 border-b-2 border-neutral-800 text-3xl mb-6 pb-1.6">playlists.</h1>
            <ToggleDisplay setState={setPlaylistDisplayStyle} />
        </div>

        <!-- Show Playlists -->
        <div bind:this={playlistSection} class="{playlistStringClass}">
            {#each PLAYLISTS as playlist}
                {#if playlistDisplayStyle === 'ALBUM'}
                    <PlaylistAlbum playlist_details={playlist}/>
                {:else if playlistDisplayStyle === 'CARD'}
                    <PlaylistCard playlist_details={playlist}/>
                {:else if playlistDisplayStyle === 'BARS'}
                    <PlaylistBars playlist_details={playlist}/>
                {/if}
            {/each}
        </div>
    </div>
    {/if}

    <!-- Recently Played Section -->
    {#if RECENTLY_PLAYED[0]}
    <div class="mt-2 ml-20 mr-20 p-4">
        <!-- Recently Played Options -->
        <div class="flex text-neutral-600">
            <h1 class="text-neutral-600 w-1/2 border-b-2 border-neutral-800 text-3xl mb-6 pb-1.6">recently played.</h1>
            <ToggleDisplay setState={setRecentlyPlayedDisplayStyle} />
        </div>

        <!-- Show Recently Played -->
        <div bind:this={recentlyPlayedSection} class="{recentlyPlayedStringClass}">
            {#each RECENTLY_PLAYED as recentlyPlayedSong}
                {#if recentlyPlayedDisplayStyle === 'ALBUM'}
                    <RecentlyPlayedAlbum />
                {:else if recentlyPlayedDisplayStyle === 'CARD'}
                    <RecentlyPlayedCard />
                {:else if recentlyPlayedDisplayStyle === 'BARS'}
                    <RecentlyPlayedBars />
                {/if}
            {/each}
        </div>
    </div>
    {/if}

{/if}

<!-- UI_CONFIG.SELECTED_PLAYLIST_ID -->
{#if UI_CONFIG.MIDDLE_WINDOW_STATE === "PLAYLIST"}
    <div class="m-10 justify-items-center">
        <main class="flex w-[750px] border-b p-5 border-neutral-700">
                <!-- PLAYLIST IMAGE -->
                <div class="mr-10 size-[220px] bg-neutral-950">
                    <img src={placeholder} alt="playlist">
                </div>

                <!-- Information -->
                <div class="w-[500px] h-[200px] contain-inline-size">
                    <h1 class="text-white text-6xl mb-5 font-bold overflow-x-clip">{_PLAYLIST_WINDOW?.title}</h1>
                </div>
        </main>
        <main class="mt-2 w-[750px] h-[35px]">
            <!-- Playlist Song Info -->
            <div class="flex w-[750px] h-[35px]">
            </div>

            <!-- Playlists -->
            <div>
                {#each _PLAYLIST_WINDOW?.songs as Song}
                    <div class="mt-2.5 flex w-[750px] h-[50px] hover:bg-neutral-800 transition duration-100 bg-neutral-900 rounded"></div>
                {/each}
            </div>
        </main>
    </div>
{/if}

</div>

<style>
    .middleElement {
        scrollbar-width: none;
        scrollbar-color: rgb(41, 41, 41) rgb(12, 12, 12);
    }
</style>
