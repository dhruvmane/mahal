<script>
    import Logo from '$lib/components/LogoSmall.svelte'
    import Links from '$lib/components/Links.svelte'
    import Search from '$lib/components/App/Search.svelte'
    import User from '$lib/components/User.svelte'
</script>

<div class="lg:flex z-100 top-0 h-15 bg-none 2xl:bg-black border-b-3 border-neutral-900 mahalmd:border-transparent mahalmd:h-15">
    
    <title>Mahal</title>
    
    <a href="/" class="hover:text-underline">
        <div class="lg:flex absolute left-0 text-3xl m-2">
            <Logo LogoSize=8 LogoTranslateY=1/>
        </div>
    </a>

    <div class="absolute z-9999 top-0 left-1/2 -translate-x-60 -translate-y-2.5 scale-75">
        <Search />
    </div>

    <div class="z-100000 absolute right-0 m-4 mr-5">
        <div class="flex">
            <Links expanded={false}/>
            <User />
        </div>
    </div>
    
</div>
<style></style>