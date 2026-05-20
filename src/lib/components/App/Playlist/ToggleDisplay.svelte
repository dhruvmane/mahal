<script lang=ts>
    import Album from '$lib/assets/icons/pillsort/Album.svg'
    import Bars from '$lib/assets/icons/pillsort/Bars.svg'
    import Card from '$lib/assets/icons/pillsort/Card.svg'

    let toggledState = $state('ALBUM')
    function setDisplayState(state: string) {
        toggledState = state
    }

    let { setState } = $props()


</script>

<div class="flex justify-end w-full box-border translate-y-0.5">
    <div class="h-full flex justify-end">
        <button onclick={() => {setState('ALBUM'); setDisplayState('ALBUM')}} class="size-7 ml-3 bg-none">
            {#if toggledState === 'ALBUM'}
                <img class="invert-70 hover:cursor-pointer transition duration-200 ease-in-out" src={Album} alt="pillsort">
            {:else}
                <img class="invert-20 hover:invert-70 hover:cursor-pointer transition duration-200 ease-in-out" src={Album} alt="pillsort">
            {/if}
        </button>
        <button onclick={() => {setState('CARD'); setDisplayState('CARD')}} class="size-9.5  ml-3 -translate-y-1.25 bg-none">
            {#if toggledState === 'CARD'}
                <img class="invert-70 hover:cursor-pointer transition duration-200 ease-in-out" src={Card} alt="pillsort">
            {:else}
                <img class="invert-20 hover:invert-70 hover:cursor-pointer transition duration-200 ease-in-out" src={Card} alt="pillsort">
            {/if}
        </button>
        <button onclick={() => {setState('BARS'); setDisplayState('BARS')}} class="size-11 ml-1.5 -translate-y-2 bg-none">
            {#if toggledState === 'BARS'}
                <img class="invert-70 hover:cursor-pointer transition duration-200 ease-in-out" src={Bars} alt="pillsort">
            {:else}
                <img class="invert-20 hover:invert-70 hover:cursor-pointer transition duration-200 ease-in-out" src={Bars} alt="pillsort">
            {/if}
        </button>
    </div>
</div>