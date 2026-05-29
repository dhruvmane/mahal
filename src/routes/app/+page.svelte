<script lang=ts>

    import WindowControls from '$lib/components/App/WindowControls.svelte';
    import App from '$lib/pages/App.svelte'
    import { onMount } from "svelte";

    import gsap from "gsap";

    let Page: HTMLElement;

    onMount(() => {
        gsap.from(Page, {opacity: 0, duration: 2})
    })

</script>

<WindowControls  />
<div bind:this={Page}>
    <App />
</div>

<style>

</style>
