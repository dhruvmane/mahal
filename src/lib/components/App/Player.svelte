<script lang=ts>

    import { UI_CONFIG } from '../../modules/globals.svelte'

    // Import Icons
    import Reverse from '$lib/assets/icons/reverse-forward.svg'
    import Forward from '$lib/assets/icons/reverse-forward.svg'
    import Shuffle from '$lib/assets/icons/shuffle.svg'
    import VolumeNone from '$lib/assets/icons/volume-none.svg'
    import VolumeLow from '$lib/assets/icons/volume-low.svg'
    import VolumeHigh from '$lib/assets/icons/volume-high.svg'
    import Queue from '$lib/assets/icons/queue.svg'
    import Loop from '$lib/assets/icons/loop.svg'

    // Import Play Button
    import Play from './Player/Play.svelte'

    import gsap from 'gsap'
    import { Draggable } from 'gsap/all'
    import { onMount } from 'svelte';

    // GSAP
    gsap.registerPlugin(Draggable)

    let UI: HTMLElement;
    let progressBall: HTMLElement;
    let progressBallBounds: HTMLElement;

    onMount(() => {
        gsap.from(UI, {y: 0, opacity: 0, duration: 1})
    })

    let isShuffling = $state(UI_CONFIG.isShufflingQueue)
    let isLooping = $state(UI_CONFIG.isLooping)
    let isPlaying = $state(UI_CONFIG.isPlayingMusic)
    let showQueue = $state(UI_CONFIG.showQueue)

    function togglePlaying() {
        isPlaying = !(isPlaying)
    }

    // is Shuffling
    $effect(() => {
        // Update UI Config.
        UI_CONFIG.isShufflingQueue = isShuffling
    })

    // is Looping
    $effect(() => {
        // Update UI Config.
        UI_CONFIG.isLooping = isLooping
    })

    // is Playing
    $effect(() => {
        // Update UI Config.
        UI_CONFIG.isPlayingMusic = isPlaying
    })


    // is Showing Queue
    $effect(() => {
        // Update UI Config.
        UI_CONFIG.showQueue = showQueue
    })

</script>

<div bind:this={UI} class="hidden mahalmd:block z-1000 bg-white/5 backdrop-blur-[40px] overflow-y-hidden absolute -bottom-2 w-full py-5">
    <div class="flex items-center h-full scale-75">
        <!-- Audio Image, Name, Composers -->
        <div class="justify-start"></div>
        
        <!-- Player Controls -->
        <div class="flex-1 justify-center flex items-center">
            <div class="flex gap-y-3 gap-x-10 justify-center items-center">
                <div class="flex gap-x-7 m-auto">
                    <!-- Reverse Button -->
                    <button class="h-7 w-7 translate-y-2.5">
                        <img class="invert-80 hover:invert" src={Reverse} alt="Reverse">
                    </button>
                    <!-- Play Button -->
                    <div class="-translate-y-1.5">
                        <Play callback={togglePlaying}/>
                    </div>
                    <!-- Forward Button -->
                    <button class="h-7 w-7 translate-y-2.5">
                        <img class="invert-80 hover:invert -scale-x-100" src={Forward} alt="Forward">
                    </button>
                    
                </div>
                <div class="flex space-x-3 items-center -translate-y-1.5">
                    <p class="text-white ">00:00</p>
                    <div bind:this={progressBallBounds} class="w-150 h-1 bg-white rounded-full">
                        <div bind:this={progressBall} class="w-5 h-5 bg-mahal-maintheme -translate-y-2 rounded-full"></div>
                    </div>
                    <p class="text-white">00:00</p>
                </div>
                <div class="flex gap-x-7 m-auto">

                    <!-- Shuffle Toggle Button -->
                    <button class="h-7 w-7" onclick={() => {isShuffling = !(isShuffling);}}>
                        {#if isShuffling}
                            <img class="invert hover:invert" src={Shuffle} alt="Shuffle">
                        {:else}
                            <img class="invert-80 hover:invert" src={Shuffle} alt="Shuffle">
                        {/if}
                    </button>
                    
                    <!-- Loop Toggle Button -->
                    <button class=" w-10 translate-y-0.75" onclick={() => {isLooping = !(isLooping)}}>
                        {#if isLooping}
                        <img class="invert hover:invert -translate-y-2" src={Loop} alt="Loop">
                        {:else}
                        <img class="invert-80 hover:invert -translate-y-2" src={Loop} alt="Loop">
                        {/if}
                    </button>
                    

                </div>
            </div>
        </div>

        <!-- Queue and Volume Controls -->
        <div class="justify-end"></div>
    </div>
</div>

<!-- Minified Player Tab -->
<div class="fixed flex items-center m-auto justify-self-center mahalmd:hidden bottom-2 z-1000 bg-white/5 backdrop-blur-[45px] overflow-y-hidden h-15 w-[90%] max-w-100 rounded-2xl">
    <div class="ml-auto scale-65">
        <Play callback={togglePlaying}/>
    </div>
</div>


<style>
    button:hover {
        cursor: pointer;
    }
</style>