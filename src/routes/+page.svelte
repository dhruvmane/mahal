<script lang=ts>
    import WindowControls from '$lib/components/App/WindowControls.svelte';
    import Intro from '$lib/pages/Intro.svelte'
    
	import { getCurrentWindow } from '@tauri-apps/api/window'
	import { onMount } from 'svelte';


</script>
<div>
    <WindowControls />
    <Intro />
</div>