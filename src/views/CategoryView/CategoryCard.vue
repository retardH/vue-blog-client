<template>
  <div class="flex flex-col gap-5 ">
    <div v-for="(item,index) in categories" :key="index"  >

      <div class="w-48 border-2  h-14 flex  items-center ">
        <div class="flex items-center justify-between">
          <div  class=" w-full flex justify-start  " >
            <div  class="icons-bg flex justify-center rounded " >
              <img :src="item.icon" alt="businessIcon"  :class="index===0?'w-10 h-10 ': 'w-10 h-10 p-2'" />
            </div>
          </div>
          <h1>{{item.title}}</h1>
        </div>
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

.icons-bg{
  background-color: rgba(251, 246, 234, 1);
}
</style>