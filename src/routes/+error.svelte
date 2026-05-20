<script lang=ts>
    import { goto } from '$app/navigation';
    import gsap from 'gsap';

    let Page: HTMLElement;
    import { onMount } from 'svelte';

    import Links from '$lib/components/Links.svelte'
    import Copyright from '$lib/components/Copyright.svelte';

    function navigate(route: string): any {
        goto(`${route}`)
    }

    // onMount(() => {
        // gsap.from(Page, {opacity: 0, y:10, duration: 2})
    // })

</script>

<div bind:this={Page} class="flex items-center flex-col justify-center h-screen">
    
    <h1 class="text-white text-7xl mt-10 mb-10">404 - Page Not Found</h1>
    
    <!-- Buttons -->
    <div class="flex justify-self-center mt-15 text-white">
        <button class="transition-all m-3 p-4 bg-gray-600 hover:bg-gray-400 hover:text-gray-900 font-extrabold min-w-50 hover:cursor-pointer" onclick={navigate('/')} >BACK TO HOME</button>
        <button class="transition-all m-3 p-4 bg-gray-600 hover:bg-gray-400 hover:text-gray-900 font-extrabold min-w-50 hover:cursor-pointer" onclick={navigate('/discover-themes')} >DISCOVER THEMES</button>
    </div>

    <div class="mt-10">
        <Links />
    </div>

    <div class="mt-10">
        <Copyright />
    </div>

</div>

<style>

    h1 {
        font-family: 'Notable Regular';
    }

</style>