<script lang=ts>
    import { PLAYLISTS, RECENTLY_PLAYED, UI_CONFIG, setDisplayStyle, type PlaylistsInterface } from '../../../modules/globals.svelte'
    import placeholder from '$lib/assets/placeholder/playlist/1.jpg'
    import { onMount } from 'svelte';

    let { playlist_id } = $props()
     
    let _playlist_window = PLAYLISTS.find(playlist => playlist.id === playlist_id)
    let playlist_window: PlaylistsInterface = $state({title: "", subtitle: "", cover: "", createdAt: 0, })
    
    if (_playlist_window) {
        playlist_window = _playlist_window
    }

    function formatDate(time: number) {
        const date = new Date(time);

        const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        const months = [
            "Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ];

        const dayName = days[date.getDay()];
        const dayNum = date.getDate();
        const monthName = months[date.getMonth()];
        const year = date.getFullYear();

        const ordinal = (n: number): string => {
            if (n >= 11 && n <= 13) return `${n}th`;
            switch (n % 10) {
                case 1: return `${n}st`;
                case 2: return `${n}nd`;
                case 3: return `${n}rd`;
                default: return `${n}th`;
            }
        };

        const hours = String(date.getHours()).padStart(2, "0");
        const minutes = String(date.getMinutes()).padStart(2, "0");

        return `${dayName} ${ordinal(dayNum)} ${monthName}, ${year} — ${hours}:${minutes} Hrs`;
    } 

</script>
<div class="m-10 justify-items-center">
        <main class="w-full border-b-2 pb-5 border-neutral-800">
                <div class="flex gap-1 m-auto">
                    <!-- PLAYLIST IMAGE -->
                    <div class="size-80 hidden mahalmd:block shrink-0">
                        <img src={placeholder} alt="playlist" class="w-full h-full object-fill">
                    </div>

                    <!-- Information -->
                    <div class="text-white max-w-full w-full h-full px-10 p-2 py-5 hidden mahalmd:flex mahalmd:flex-col gap-1">
                        <p class="text-neutral-500">{formatDate(playlist_window.createdAt)}</p>
                        <h1 class="text-6xl font-bold overflow-x-clip">{playlist_window?.title}</h1>
                    </div>
                </div>

                <div class="flex flex-col w-full gap-5">
                    <div class="m-auto size-80% mahalmd:hidden">
                        <img src={placeholder} alt="playlist" class="w-full h-full object-fill">
                    </div>
                    
                    <div class="flex flex-col gap-1 text-white text-center max-w-200 m-auto w-full max-h-90% h-full mahalmd:hidden contain-inline-size">
                        <h1 class="text-white text-4xl text-center font-bold overflow-x-clip">{playlist_window?.title}</h1>
                        <p class="">Created At.</p>
                    </div>

                </div>
        </main>
        <main class="mt-2 w-[750px] h-[35px]">
            <!-- Playlist Song Info -->
            <div class="flex w-[750px] h-[35px]">
            </div>

            <!-- Playlists -->
            <div>
                {#each playlist_window?.songs as Song}
                    <div class="mt-2.5 flex w-[750px] h-[50px] hover:bg-neutral-800 transition duration-100 bg-neutral-900 rounded"></div>
                {/each}
            </div>
        </main>
    </div>