<script lang=ts>
    import { goto } from '$app/navigation';

    // Components
    import Logo from '$lib/components/LogoBig.svelte';
    import LogoCredit from '$lib/components/LogoCredit.svelte';
    import Links from '$lib/components/Links.svelte'
    import Copyright from '$lib/components/Copyright.svelte'


    import gsap from 'gsap';
    import TextPlugin from 'gsap/TextPlugin';
    import { onMount } from 'svelte';

    // GSAP Register Plugins
    gsap.registerPlugin(TextPlugin)

    let page: HTMLElement;

    onMount(() => {
        gsap.from(page, {
            opacity: 0,
            y: 10,
            duration: 1
        })
    })

    function navigate(route: string): any {
        goto(`${route}`)
    }

    let innerWidth = $state(0);
	let innerHeight = $state(0);

	// Base dimensions you designed your app for (e.g., 1920x1080)
	const baseWidth = 1920;
	
	// Calculate the scale ratio
	const scaleRatio = $derived(innerWidth / baseWidth);

</script>

<svelte:window bind:innerWidth bind:innerHeight />

<div bind:this={page} class="text-white overflow-y-hidden h-screen w-screen">
    <!-- Title of the Web Page -->
    <title>Mahal</title>

    <!-- Front Page of App -->
    
    <!-- Logo -->
    <!-- Title / Slogan / Logo -->
    <div class="mt-10 flex flex-col justify-self-center w-4xl text-center p-10">
        <div class="ml-20 text-9xl">
            <Logo LogoSize=32 LogoTranslateY=2.5/>
        </div>
        <LogoCredit />
        <p class="mt-15 text-[20px] w-220">a <span class="text-green-400">Spotify-esque</span> client, specifically for locally installed audio. Create playlists, curate experiences and personalize your auditory adventure!</p>    
    </div>

    <!-- Buttons -->
    <div class="flex justify-self-center mt-15">
        <button class="transition-all m-3 p-4 bg-gray-600 hover:bg-gray-400 hover:text-gray-900 font-extrabold min-w-50 hover:cursor-pointer" onclick={navigate('/app')} >GET STARTED</button>
        <button class="transition-all m-3 p-4 bg-gray-600 hover:bg-gray-400 hover:text-gray-900 font-extrabold min-w-50 hover:cursor-pointer" onclick={navigate('/discover-themes')} >DISCOVER THEMES</button>
    </div>

    <!-- Links -->
    <div class="mt-15 justify-self-center text-center">
        <Links />
    </div>

    <div class="text-center mt-5">
        <Copyright />
    </div>

</div>
<style>
    /* Import Fonts */
    /* @import url('https://fonts.googleapis.com/css2?family=Gravitas+One&family=Notable&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap'); */
    /* @import url('https://fonts.googleapis.com/css2?family=Shadows+Into+Light&display=swap'); */
    /* @import url('https://fonts.googleapis.com/css2?family=Rock+Salt&display=swap');  */
    /* @import url('https://fonts.googleapis.com/css2?family=Schoolbell&display=swap'); */
    /* @import url('https://fonts.googleapis.com/css2?family=Google+Sans+Code:ital,wght,MONO@0,300..800,1;1,300..800,1&display=swap'); */

    p {
        font-family: 'Google Sans Code';
    }

    button {
        font-family: 'Space Mono';
    }

</style>
