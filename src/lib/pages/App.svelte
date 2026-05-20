<!-- True Layout of the Application Once in Use. -->

<script>
    import WindowControls from "$lib/components/App/WindowControls.svelte";
    import AppNav from "$lib/components/App/Nav.svelte";
    import AppPlatform from '$lib/components/App/Platform.svelte'
    import Player from '$lib/components/App/Player.svelte'

    import { getCurrentWindow } from '@tauri-apps/api/window'
    const appWindow = getCurrentWindow()

    // Window Controls
    function _appMinimize() {
        appWindow.minimize();
    }

    function _appToggleFullscreen() {
        if (appWindow.isFullscreen)
        appWindow.isFullscreen().then((fullscreen) => {
            appWindow.setFullscreen(fullscreen)
        })
    }
    
    function _appClose() {
        appWindow.close();
    }

</script>
<div>
    <WindowControls minimize={_appMinimize} terminate={_appClose} toggleFullscreen={_appToggleFullscreen} />
    <AppNav />
    <AppPlatform />
    <Player />
</div>
<style>
</style>