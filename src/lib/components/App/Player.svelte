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

<div bind:this={UI} class="hidden mahalmd:block z-1000 bg-white/5 backdrop-blur-lg overflow-y-hidden scale-75 absolute left-1/2 -translate-x-1/2 bottom-0 w-200 h-40">
    <div class="flex h-full">
        <!-- Audio Image, Name, Composers -->
        <div class="justify-start"></div>
        
        <!-- Player Controls -->
        <div class="flex-1 justify-center translate-y-10">
            <div class="flex flex-col justify-center items-center">
                <div class="flex space-x-7">
                    <!-- Shuffle Toggle Button -->
                    <button class="h-7 w-7 translate-y-2.5" onclick={() => {isShuffling = !(isShuffling);}}>
                        {#if isShuffling}
                            <img class="invert hover:invert" src={Shuffle} alt="Shuffle">
                        {:else}
                            <img class="invert-80 hover:invert" src={Shuffle} alt="Shuffle">
                        {/if}
                    </button>

                    <!-- Reverse Button -->
                    <button class="h-7 w-7 translate-y-2.5">
                        <img class="invert-80 hover:invert" src={Reverse} alt="Reverse">
                    </button>
                    
                    <!-- Play Button -->
                    <Play callback={togglePlaying}/>
                    
                    <!-- Forward Button -->
                    <button class="h-7 w-7 translate-y-2.5">
                        <img class="invert-80 hover:invert -scale-x-100" src={Forward} alt="Forward">
                    </button>

                    <!-- Loop Toggle Button -->
                    <button class="-10 w-10 translate-y-0.75" onclick={() => {isLooping = !(isLooping)}}>
                        {#if isLooping}
                            <img class="invert hover:invert -translate-y-2" src={Loop} alt="Loop">
                        {:else}
                            <img class="invert-80 hover:invert -translate-y-2" src={Loop} alt="Loop">
                        {/if}
                    </button>

                    <!-- Queue Button -->
                    <!-- <button class="absolute right-1/6 h-1/3 w-10 translate-y-0.75" onclick={() => {showQueue = !(showQueue)}}>
                        <img class="invert-80 hover:invert -translate-y-2 scale-95" src={Queue} alt="Loop">
                    </button> -->
                    

                </div>


                <div class="flex mt-7 space-x-3">
                    <p class="text-white -translate-y-2.75">00:00</p>
                    <div bind:this={progressBallBounds} class="w-150 h-1 bg-white rounded-full">
                        <div bind:this={progressBall} class="w-5 h-5 bg-green-400 -translate-y-2 rounded-full"></div>
                    </div>
                    <p class="text-white -translate-y-2.75">00:00</p>
                </div>
            </div>
        </div>

        <!-- Queue and Volume Controls -->
        <div class="justify-end"></div>
    </div>
</div>

<!-- Minified Player Tab -->
<div class="absolute mahalmd:hidden bottom-10 left-1/2 -translate-x-1/2 z-1000 bg-white/5 backdrop-blur-lg overflow-y-hidden h-15 min-w-100 rounded-[10000px]">
    <div class="flex justify-end scale-65 translate-x-15 translate-y-1">
        <Play callback={togglePlaying}/>
    </div>
</div>


<style>
    button:hover {
        cursor: pointer;
    }
</style>