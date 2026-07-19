<script lang=ts>
    import Link from '$lib/assets/icons/link.svg'
    import Menu from '$lib/assets/icons/menu.svg'

    import gsap from 'gsap';

    // import { onMount } from 'svelte';

    let { expanded = true } = $props()

    let dropMenuToggled = $state(false)
    let dropMenuState = $state(false)

    function toggleDropDown() {
        dropMenuState = true
        dropMenuToggled = !(dropMenuToggled) // Flip Value
    }

    let dropMenu: HTMLElement;

    $effect(() => {
        if (dropMenuToggled) {
            gsap.fromTo(dropMenu, 
                {opacity: 0, y: -10}, 
                {opacity: 1, y: 0, duration: 0.5},
            )
        }
        
        if (!dropMenuToggled) {
            gsap.to(dropMenu, {
                opacity: 0,
                y: -10,
                duration: 0.5,
                onComplete: () => {dropMenuState = false}  
            })
        }

    })

</script>

<div class="flex">
    <!-- Expanded Display -->
    {#if expanded}
    <div class="hidden mahalmd:flex space-x-10 text-1xl text-gray-400">
        <div class="flex space-x-1 hover:underline">
            <a class="accent-gray-500 text-[18px]" href="#">Create Themes</a>
            <img class="invert size-5 translate-y-1" src={Link} alt="LinkSVG">
        </div>
        <div class="flex space-x-1  hover:underline">
            <a class="accent-gray-500 text-[18px]" href="https://github.com/dhruvmane/mahal">View Source</a>
            <img class="invert size-5 translate-y-1" src={Link} alt="LinkSVG">
        </div>
        <div class="flex space-x-1  hover:underline">
            <a class="accent-gray-500 text-[18px]" href="https://github.com/dhruvmane/mahal/issues">Report Issues</a>
            <img class="invert size-5 translate-y-1" src={Link} alt="LinkSVG">
        </div>
        <div class="flex space-x-1  hover:underline">
            <a class="accent-gray-500 text-[18px]" href="/donate">Donate</a>
            <img class="invert size-5 translate-y-1" src={Link} alt="LinkSVG">
        </div>
    </div>
    {:else}
    <div class="hidden space-x-10 text-1xl text-gray-400">
        <div class="flex space-x-1 hover:underline">
            <a class="accent-gray-500 text-[18px]" href="#">Create Themes</a>
            <img class="invert size-5 translate-y-1" src={Link} alt="LinkSVG">
        </div>
        <div class="flex space-x-1  hover:underline">
            <a class="accent-gray-500 text-[18px]" href="https://github.com/dhruvmane/mahal">View Source</a>
            <img class="invert size-5 translate-y-1" src={Link} alt="LinkSVG">
        </div>
        <div class="flex space-x-1  hover:underline">
            <a class="accent-gray-500 text-[18px]" href="https://github.com/dhruvmane/mahal/issues">Report Issues</a>
            <img class="invert size-5 translate-y-1" src={Link} alt="LinkSVG">
        </div>
        <div class="flex space-x-1  hover:underline">
            <a class="accent-gray-500 text-[18px]" href="donate">Donate</a>
            <img class="invert size-5 translate-y-1" src={Link} alt="LinkSVG">
        </div>
    </div>
    {/if}

    <!-- Dropdown Menu -->
    <div class="flex flex-col">
        <!-- Button -->
        {#if !expanded}
        <div class="justify-end">
            <button class="hover:cursor-pointer" onclick={toggleDropDown}>
                <img class="invert size-10 -translate-y-1.5" src={Menu} alt="DropDownMenu">
            </button>
        </div>
        {/if}

        {#if dropMenuState === true}
        <!-- {#if dropMenuToggled}
        Dropdown Content
        <div bind:this={dropMenu} class="absolute right-0 top-full justify-end min-h-60 min-w-30 bg-amber-50">
            </div>
            {/if} -->
            <div bind:this={dropMenu} class="z-10 absolute right-0 top-full justify-end p-4 min-w-50 bg-black text-white">
                <div class="flex space-x-1 hover:underline h-10">
                    <a class="accent-gray-500 text-[18px]" href="#">Create Themes</a>
                    <img class="invert size-5 translate-y-1" src={Link} alt="LinkSVG">
                </div>
                <div class="flex space-x-1  hover:underline h-10">
                    <a class="accent-gray-500 text-[18px]" href="https://github.com/dhruvmane/mahal">View Source</a>
                    <img class="invert size-5 translate-y-1" src={Link} alt="LinkSVG">
                </div>
                <div class="flex space-x-1  hover:underline h-10">
                    <a class="accent-gray-500 text-[18px]" href="https://github.com/dhruvmane/mahal/issues">Report Issues</a>
                    <img class="invert size-5 translate-y-1" src={Link} alt="LinkSVG">
                </div>
                <div class="flex space-x-1  hover:underline h-10">
                    <a class="accent-gray-500 text-[18px]" href="#">Donate</a>
                    <img class="invert size-5 translate-y-1" src={Link} alt="LinkSVG">
                </div>
            </div>
            {/if}
        </div>
</div>
    
<svelte:window onresize={() => {
    if (window.innerWidth < (60*16)) {
        dropMenuToggled = false
    }
}} />
