<script lang=ts>
    import Logo from '$lib/assets/mahal.svg'

    let { LogoSize, LogoTranslateY } = $props()

</script>

<div class="flex space-x-4 ml-4">
    <img class="invert size-32 translate-y-2.5" src={Logo} alt="Logo">
    <h1 class="flex text-white">Mahal</h1>
</div>

<style>
    /* @import url('https://fonts.googleapis.com/css2?family=Gravitas+One&family=Notable&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap'); */

    h1 {
        font-family: 'Notable Regular';
    }
</style>