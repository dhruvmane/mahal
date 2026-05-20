<script lang=ts>

    import Search from '$lib/components/App/Search.svelte'

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
    import { PLAYLISTS, RECENTLY_PLAYED, UI_CONFIG } from '../globals.svelte'


    const colsMap: Record<number, string> = {
        3: 'grid grid-cols-1 mahalmd:grid-cols-3 justify-start gap-x-3 w-full',
        5: 'grid grid-cols-2 mahalmd:grid-cols-4 justify-start gap-3 w-full',
        6: 'grid grid-cols-3 mahalmd:grid-cols-5 justify-items-start gap-3 w-full overflow-hidden',
    }

    let middleDoc: HTMLElement;
    let playlistSection: HTMLElement | undefined = $state();
    let playlistSectionColumns: number = $state(6);
    let playlistStringClass = $derived(colsMap[playlistSectionColumns])
    
    let recentlyPlayedSection: HTMLElement | undefined = $state();
    let recentlyPlayedSectionColumns: number = $state(6);
    let recentlyPlayedStringClass = $derived(colsMap[recentlyPlayedSectionColumns])
    
    let playlistDisplayStyle = $state('ALBUM')
    function setPlaylistDisplayStyle(style: string) {
        playlistDisplayStyle = style
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

{#if UI_CONFIG.MIDDLE_WINDOW_STATE === "PLAYLIST"}
    
{/if}

</div>

<style>
    .middleElement {
        scrollbar-width: none;
        scrollbar-color: rgb(41, 41, 41) rgb(12, 12, 12);
    }
</style>
