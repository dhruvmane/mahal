// GLOBAL DECLARATIONS and VARIABLES

// PLAYLIST STRUCT
interface PlaylistsInterface {
        cover: string,
        title: string,
        subtitle: string,
        id?: string,
        isPinned?: boolean
}

// SONG STRUCT
interface Song {
        cover: string,
        title: string,
        artist: string,
        id?: string
}

interface Podcast {
        cover: string,
        title: string,
        hosts: string,
        id?: string
}


interface App {
        isPlayingMusic: boolean,        // if App is streaming Audio.
        isLooping: boolean,             // Loop Current Audio over and over.
        isShufflingQueue: boolean,      // Shuffle/Play random Audio from Playlist
        showQueue: boolean,             // Toggle Showing Queue on Right Sidebar
        audioProgress: number,          // The progress of Audio in milliseconds
        audioLength: number             // Max Duration of Audio.
}

// DUMMY DATA
let PLAYLISTS: PlaylistsInterface[] = $state([
        {id:"1", cover:"", title:"My love", subtitle:"created by Me.", isPinned: true},
        {cover:"", title:"Beautiful bollywood Songs", subtitle:"created by Me."},
        {cover:"", title:"Podcasts And Recordings", subtitle:"created by Me."},
        {cover:"", title:"My Wife's Lullabies.", subtitle:"created by Me."},
])

let RECENTLY_PLAYED: Song[] = $state([])
let SONGS: Song[] = $state([])


let UI_CONFIG = $state({
        showQueue: false,
        isLooping: false,
        isShufflingQueue: false,
        isPlayingMusic: false,
        audioProgress: 0,
        audioLength: 0,

        TOTAL_PLAYLISTS_COUNT: PLAYLISTS.length,
        SELECTED_PLAYLIST_ID: "",

        MIDDLE_WINDOW_STATE: 'NONE',
        PLAYING_SONG_ID: ""
})

function setUIState(state: string) {
        UI_CONFIG.MIDDLE_WINDOW_STATE = state;
}

// Export Structs and Data
export type { PlaylistsInterface, Song, App, Podcast }
export { PLAYLISTS, RECENTLY_PLAYED, UI_CONFIG, setUIState }
