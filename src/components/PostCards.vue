<template>
  <div class="flex flex-row-reverse justify-center items-center gap-12 my-10">
    <div class="flex flex-col gap-2">
      <p class="tagColor font-semibold text-base tracking-wider">{{item.tag}}</p>
      <h1 class="leading-10 text-4xl font-bold">{{item.title}}</h1>
      <p class="leading-7  font-normal text-base" >{{item.body}}</p>
    </div>
    <div>
      <img :src="item.img"  alt="image"/>
    </div>
  </div>
</template>

<script setup>
defineProps(['item'])
</script>