<script>
    let { details } = $props()
    import placeholder from '$lib/assets/placeholder/playlist/2.jpg'

    let _cover = placeholder
    let _title = $derived(details.title)
    let _id = $derived(details.id)

</script>

<a href="/playlist/{_id}" class="hover:cursor-pointer" >
    <div class="flex ml-4 mr-4 mb-3 w-[calc(100%-6%)] h-full">
        <div class="flex bg-white/5 border border-white/10 shadow-xl hover:bg-white/30 rounded-2xl w-full transition duration-300 ease-in-out">
            <img class="size-10" src={_cover} alt="Cover">
            <div>
                <h1 class="text-neutral-300 m-2">{_title}</h1>
            </div>
        </div>
    </div>
</a>