<script setup>
import firstAuthor from '@/assets/images/firstAuthor.png';
import secondAuthor from '@/assets/images/secondAuthor.png';
import thirdAuthor from '@/assets/images/thirdAuthor.png';
import fourthAuthor from '@/assets/images/forthAuthor.png';
import AuthorBox from "@/components/AuthorBox.vue";
  const authors = [
    {name: 'Floyd Miles', jobTitle: 'Software Engineer', image: firstAuthor, bgClr: 'bg-lightGray'},
    {name: 'Diane Russel', jobTitle: 'Software Architect', image: secondAuthor, bgClr: 'bg-lightYellow'},
    {name: 'Jenny Russel', jobTitle: 'Content Writer', image: thirdAuthor, bgClr: 'bg-lightGray'},
    {name: 'Lesly Alexandar', jobTitle: 'Graphic Designer', image: fourthAuthor, bgClr: 'bg-lightYellow'},
  ]
</script>

<template>
  <h2 class="text-black text-3xl text-center">List Of Authors</h2>
  <div class="flex items-center justify-center w-full gap-4 mt-6 mb-24">
    <AuthorBox v-for="(author,index) in authors" :key="index" :author="author"/>
   </div>

</template>