<script setup>
import {Carousel, Slide, Navigation, Pagination} from "vue3-carousel";
import 'vue3-carousel/dist/carousel.css'
import firstAuthor from '@/assets/images/firstAuthor.png';
import secondAuthor from '@/assets/images/secondAuthor.png';
import thirdAuthor from '@/assets/images/thirdAuthor.png';
import fourthAuthor from '@/assets/images/forthAuthor.png';
import ArrowRight from  "vue-material-design-icons/ChevronRight.vue";
import ArrowLeft from  "vue-material-design-icons/ChevronLeft.vue";
import {ref} from "vue";
const authors = [
  {name: 'Floyd Miles', place: 'California, USA', image: firstAuthor, bgClr: 'bg-lightGray'},
  {name: 'Diane Russel', place: 'Roma, Italy', image: secondAuthor, bgClr: 'bg-lightYellow'},
  {name: 'Jenny Russel', place: 'London, UK', image: thirdAuthor, bgClr: 'bg-lightGray'},
  {name: 'Lesly Alexandar', place: 'New York, USA', image: fourthAuthor, bgClr: 'bg-lightYellow'},
]
const testimonialCarousel = ref(null);
</script>

<template>
  <div class="w-full bg-lightYellow p-24 flex items-start">
    <div class="flex flex-col items-start gap-4 w-5/12">
      <h4 class="uppercase text-lg tracking-wide">testimonials</h4>
      <h2 class="font-bold text-4xl">What people say about our blog</h2>
      <p class="text-mediumGray text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
      </p>
    </div>
    <div class="bg-mediumGray w-[1px] h-[360px] mx-12"></div>
    <div class="w-7/12 relative">
      <Carousel ref="testimonialCarousel" class="w-full">
        <Slide v-for="(person,index) in authors" :key="index" class="w-full">
          <div class="flex flex-col">
            <h4 class="text-2xl font-bold mb-32 text-start tracking-wide leading-8 lg:pr-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </h4>
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-4">
                <img alt="authorImg" :src="person.image" class="w-[48px] h-[48px]"/>
                <div class="flex flex-col items-start">
                  <h4 class="text-xl font-bold">{{person.name}}</h4>
                  <span class="text-base text-mediumGray">{{person.place}}</span>
                </div>
              </div>
            </div>
          </div>
        </Slide>
      </Carousel>
      <div class="flex items-center gap-3 absolute bottom-0 right-5">
        <div class="flex items-center justify-center p-3 rounded-full bg-white" @click="testimonialCarousel.prev()">
          <ArrowLeft class="cursor-pointer"/>
        </div>
        <div class="flex items-center justify-center p-4 rounded-full bg-primary" @click="testimonialCarousel.next()">
          <ArrowRight class="cursor-pointer text-white"/>
        </div>
      </div>
    </div>
  </div>
</template>