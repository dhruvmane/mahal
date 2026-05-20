import { UI_CONFIG, PLAYLISTS } from "$lib/components/App/globals.svelte";

function createPlaylist() {
    // Increment Count
    let _count = UI_CONFIG.TOTAL_PLAYLISTS_COUNT
    _count++;

    // Store Playlist Count
    UI_CONFIG.TOTAL_PLAYLISTS_COUNT = _count

    // Fill Playlist Data.
    let _title: string = `My Playlist #${_count}`
    let _subtitle: string = ""
    let _cover: string = ""
    let _isPinned: boolean = false

    // Create Playlist Object
    let _playlist = {
        id: crypto.randomUUID(),
        title: _title,
        subtitle: _subtitle,
        cover: _cover,
        isPinned: _isPinned
    }

    // Push the Playlist.
    PLAYLISTS.push(_playlist)

    // Log in Console
    console.log(`Created new Playlist: ${_playlist}`)
}

export default createPlaylist