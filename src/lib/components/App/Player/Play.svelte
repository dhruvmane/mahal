<script lang=ts>
    import Play from '$lib/assets/icons/play.svg'
    import Pause from '$lib/assets/icons/pause.svg'
    
    let isPlayingDisplay = $state(false)

    let { callback } = $props()

    function changePlaying() {
        isPlayingDisplay = !(isPlayingDisplay)
        console.log(isPlayingDisplay)
    }

</script>

<!-- Play Button -->
<button class="hover:cursor-pointer hover:scale-105 h-15 w-15 p-4 rounded-full bg-mahal-maintheme" onclick={changePlaying}>
    {#if isPlayingDisplay}
        <img class="invert" src={Pause} alt="Pause">
    {/if}
    {#if !isPlayingDisplay}
        <img title="Play" class="invert translate-x-0.5" src={Play} alt="Play">
    {/if}
</button>
                    