<script>
    import Logo from '$lib/components/LogoSmall.svelte'
    import Links from '$lib/components/Links.svelte'
    import Search from '$lib/components/App/Search.svelte'
    import User from '$lib/components/User.svelte'

    import { setUIState } from '$lib/modules/globals.svelte';

</script>

<div class="lg:flex z-100 bg-none 2xl:bg-black border-transparent mahalmd:border-transparent mahalmd:h-20 items-center">
    
    <title>Mahal</title>
    
    <div class="flex items-center py-2 h-15 mb-2">
        <button class="hover:text-underline absolute hover:cursor-pointer" onclick={() => setUIState('NONE', '')}>
            <div class="top-12 left-12 text-3xl m-2 mx-7">
                <Logo LogoSize=8 LogoTranslateY=0/>
            </div>
        </button>

        <div class="absolute z-9999 top-12 left-1/2 md:-translate-x-60 md:-translate-y-2.5 scale-75">
            <Search />
        </div>

        <div class="z-100000 m-4 mr-auto absolute flex items-center top-12 right-10">
            <Links expanded={false}/>
        </div>
    
    </div>
</div>
<style></style>