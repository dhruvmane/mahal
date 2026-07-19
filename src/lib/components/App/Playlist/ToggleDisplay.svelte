<script lang=ts>
    import Album from '$lib/assets/icons/pillsort/Album.svg'
    import Bars from '$lib/assets/icons/pillsort/Bars.svg'
    import Card from '$lib/assets/icons/pillsort/Card.svg'

    import { UI_CONFIG, setDisplayStyle } from '$lib/modules/globals.svelte';

    let toggledState = $derived(UI_CONFIG.playlistDisplayStyle)

    let { setState } = $props()


</script>

<div class="hidden md:flex justify-end w-full box-border translate-y-0.5">
    <div class="h-full flex justify-end">
        <button onclick={() => {setState('ALBUM'); setDisplayStyle('ALBUM')}} class="size-7 ml-3 bg-none">
            {#if toggledState === 'ALBUM'}
                <img class="invert-70 hover:cursor-pointer transition duration-200 ease-in-out" src={Album} alt="pillsort">
            {:else}
                <img class="invert-20 hover:invert-30 hover:cursor-pointer transition duration-200 ease-in-out" src={Album} alt="pillsort">
            {/if}
        </button>
        <button onclick={() => {setState('CARD'); setDisplayStyle('CARD')}} class="size-9.5  ml-3 -translate-y-1.25 bg-none">
            {#if toggledState === 'CARD'}
                <img class="invert-70 hover:cursor-pointer transition duration-200 ease-in-out" src={Card} alt="pillsort">
            {:else}
                <img class="invert-20 hover:invert-30 hover:cursor-pointer transition duration-200 ease-in-out" src={Card} alt="pillsort">
            {/if}
        </button>
        <button onclick={() => {setState('BARS'); setDisplayStyle('BARS')}} class="size-11 ml-1.5 -translate-y-2 bg-none">
            {#if toggledState === 'BARS'}
                <img class="invert-70 hover:cursor-pointer transition duration-200 ease-in-out" src={Bars} alt="pillsort">
            {:else}
                <img class="invert-20 hover:invert-30 hover:cursor-pointer transition duration-200 ease-in-out" src={Bars} alt="pillsort">
            {/if}
        </button>
    </div>
</div>