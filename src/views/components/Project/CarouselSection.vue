<template>
    <div class="">
        <Carousel :autoplay="3000" :wrap-around="true" class="w-[calc(100%+48px)] -ml-6 lg:w-[calc(100%+128px)] lg:-ml-16 md:rounded-lg max-w-none shadow-md">
            <Slide v-for="slide in project" :key="slide" class="">
                <div class="rounded-lg">
                    <img v-lazy="{ src: slide }" :alt="slide" loading="lazy" fetchpriority="high" decoding="async" data-nimg="1" class="w-full md:rounded-lg" style="color: transparent;" width="700" height="350">
                </div>
            </Slide>
        </Carousel>
    </div>
</template>

<script setup>
import { defineComponent } from 'vue'
import { Carousel, Pagination, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

defineComponent({
  name: 'Autoplay',
  components: {
    Carousel,
    Slide,
    Pagination,
  },
})

defineProps({
    project: Object
})

</script>