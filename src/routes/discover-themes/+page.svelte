<script lang=ts>
     import WindowControls from "$lib/components/App/WindowControls.svelte";
     import Links from "$lib/components/Links.svelte";

     // Icons
     import Search from '$lib/assets/icons/search.svg'
     import Plus from '$lib/assets/icons/plus.svg'
     import LogoBig from "$lib/components/LogoBig.svelte";
     import Back from '$lib/assets/icons/left-arrow.svg'
     import { goto } from "$app/navigation";

     import gsap from "gsap";
     import { onMount } from "svelte";

     let page: HTMLElement;
     onMount(() => {
          gsap.from(page, {
               opacity: 0,
               y: 10,
               duration: 1
          })
     })

</script>

<WindowControls  />

<main class="h-full w-full grid text-white justify-items-center">
     <div class="w-full md:w-[40%] h-full bg-black/30 justify-items-center">
          <div class="w-full h-full" bind:this={page}>
               <button 
                    onclick={() => {goto('/')}}
                    class="absolute p-2 mx-10 hover:invert rounded-2xl transition duration-400 hover:scale-105">
                    <img src={Back} alt="back" class="size-6 invert-40">
               </button>
               <div class="flex text-5xl justify-self-center mt-30 items-center gap-3">
                    <h1 class="">MAHAL</h1>
                    <h2 class="text-center w-full font-mahal-handwritten ">Themes</h2>
               </div>
          
               <div class="justify-self-center flex items-center border border-white/30 w-[85%] md:max-w-md lg-max-w-lg transition duration-400 hover:scale-105 selection:scale-105 my-10 py-1">
                    <input type="text" class="bg-transparent w-full text-white flex-1 focus:ring-0 border-none hover:cursor-pointer">
                    
                    <div class="flex items-center ">
                         <button class="p-2 flex items-center transition duration-400 hover:scale-105 invert-40 hover:invert-100">
                              <img src={Search} alt="search" class="size-5">
                         </button>
                         <button class="p-2 flex items-center transition duration-400 hover:scale-105 invert-40 hover:invert-100">
                              <img src={Plus} alt="search" class="size-5">
                         </button>
                    </div>

               </div>
          </div>
     </div>
</main>