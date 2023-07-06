<template>
  <div class="flex justify-center items-center gap-10">
    <div  v-for="(category,index) in categories"  :key="index" >
      <div class="flex flex-col  hover:bg-secondary delay-75  duration-75 justify-center items-start gap-2 border-[1px] shadow w-[260px] h-[210px] p-8 ">
          <img :src="category.icon" alt="businessIcon" :class="index===0?'w-12 h-12': 'w-6 h-6'" />
        <h1>{{category.title}}</h1>
        <p>{{category.body}}</p>
      </div>

    </div>
  </div>

</template>
<script setup>
import icon from  "@/assets/icons/CategoryIcons/Icon1.svg";
import shuttle from  "@/assets/Icons/CategoryIcons/shuttle (1).svg";
import  economy from  "@/assets/Icons/CategoryIcons/economy (1).svg";
import cyborg from  "@/assets/Icons/CategoryIcons/cyborg.svg"
import {ref} from "vue";


const categories= ref([
  {
    icon:icon,
    title:"Business",
    body:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
  },
  {
    icon:shuttle,
    title:"Startup",
    body:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
  },
  {
    icon:economy,
    title:"Economy",
    body:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
  },
  {
    icon:cyborg,
    title:"Technology",
    body:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
  }
])

</script>

<style scoped >




</style>