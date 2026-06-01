// GLOBAL DECLARATIONS and VARIABLES

// PLAYLIST STRUCT
interface PlaylistsInterface {
        cover: string,
        title: string,
        subtitle: string,
        id?: string,
        isPinned?: boolean,
        songs?: Song[]
}

// SONG STRUCT
interface Song {
        cover: string,
        title: string,
        artist: string,
        id?: string,
        path: string,
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
        {id:"2", cover:"", title:"Beautiful bollywood Songs", subtitle:"created by Me."},
        {id:"3", cover:"", title:"Podcasts And Recordings", subtitle:"created by Me."},
        {id:"4", cover:"", title:"My Wife's Lullabies.", subtitle:"created by Me."},
])

let RECENTLY_PLAYED: Song[] = $state([])


let UI_CONFIG = $state({
        showQueue: false,
        isLooping: false,
        isShufflingQueue: false,
        isPlayingMusic: false,
        audioProgress: 0,
        audioLength: 0,
        playlistDisplayStyle: 'ALBUM',

        TOTAL_PLAYLISTS_COUNT: PLAYLISTS.length,
        SELECTED_PLAYLIST_ID: "",

        MIDDLE_WINDOW_STATE: 'NONE',
        PLAYING_SONG_ID: ""
})

function setUIState(state: string, id: string) {
        UI_CONFIG.MIDDLE_WINDOW_STATE = state;
        UI_CONFIG.SELECTED_PLAYLIST_ID = id;
        console.log(UI_CONFIG)
}

function setDisplayStyle(style: string) {
        UI_CONFIG.playlistDisplayStyle = style
}

// Export Structs and Data
export type { PlaylistsInterface, Song, App, Podcast }
export { PLAYLISTS, RECENTLY_PLAYED, UI_CONFIG }
export { setUIState, setDisplayStyle }