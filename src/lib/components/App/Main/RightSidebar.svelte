<script>
    import { UI_CONFIG } from "../../../modules/globals.svelte";

    // Import Icons
    import ArrowDown from '$lib/assets/icons/arrow-down.svg'
    import ArrowUp from '$lib/assets/icons/arrow-up.svg'

    let ascendingQueueOrder = $state(true)

    function changeQueueOrder() {
        ascendingQueueOrder = !ascendingQueueOrder
    }

</script>

<div class="hidden 2xl:flex h-full w-100 bg-black shrink-0">

    <!-- GRAY SUB-BOX -->
    <div class="flex flex-col z-100 bg-neutral-950 h-full w-full mx-5 rounded-2xl">
        <!-- CURRENT SONG DETAILS -->
        <div class=" border-2 border-transparent p-3 my-2 rounded-2xl w-full h-10 flex items-center">
            <h1 class="text-neutral-500 text-3xl translate-y-1">queue</h1>
            <div class="flex h-10 ml-auto">
                {#if ascendingQueueOrder}
                    <button class="bg-neutral-900 flex items-center p-2 rounded-2xl hover:bg-neutral-800" onclick={changeQueueOrder}>
                        <img alt="arrow" src={ArrowDown} class="invert-40 size-7">
                    </button>
                {:else}
                    <button class="bg-neutral-900 flex items-center p-2 rounded-2xl hover:bg-neutral-800" onclick={changeQueueOrder}>
                        <img alt="arrow" src={ArrowUp} class="invert-40 size-7">
                    </button>
                {/if}
            </div>

        </div>
        <h1 class="text-center text-neutral-800 mt-10">No Songs in Queue.</h1>
    </div>

</div>
