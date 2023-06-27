<template>
<main class="text-primary px-6 md:px-6 pt-16 pb-24 md:pt-20 md:pb-44 max-w-[700px] mx-auto ring-offset-primary ">
    <div class="flex flex-col gap-20">
        <article>
            <div class="flex flex-col gap-3 animate-in">
                <p class="text-secondary"><time datetime="2023-03-05">Date: {{ date }}</time> project id: {{ id }}</p>
                <h1 class="text-primary text-3xl font-bold tracking-tight leading-tight">{{ subject }}</h1>
                <p class="text-xl text-secondary animate-in">..</p>
            </div>
            <div class="h-8"></div>
                    <img alt="Tailwind over everything. Mocking the iOS Weather app UI post image" fetchpriority="high" decoding="async" data-nimg="1" class="w-[calc(100%+48px)] -ml-6 lg:w-[calc(100%+128px)] lg:-ml-16 md:rounded-lg max-w-none animate-in" style="color: transparent; --index: 2;" src="" width="700" height="350">
            <div class="h-16"></div>
            <div class="prose animate-in">
                <p></p>
            </div>
        </article>
    </div>
</main>
</template>

<script>
export default {
    
    name: 'projectDetails',
    props: ["id"],
}
</script>
