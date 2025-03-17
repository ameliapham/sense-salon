<script setup lang="ts">
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Liste des services affichés
const services = ref([
  { title: "Hairdresser service", description: "From stylish cuts to expert coloring and treatments, we create looks that enhance your natural beauty" },
  { title: "Manicure, pedicure", description: "Perfectly polished nails with expert care, from classic styles to modern designs" },
  { title: "Makeup", description: "Flawless, radiant looks for any occasion, tailored to your unique features" },
  { title: "Facial treatments", description: "Revitalize your skin with our personalized facial treatments, leaving you refreshed and glowing" },
  { title: "Waxing", description: "Smooth, hair-free skin with our expert waxing services, leaving you feeling confident and beautiful" },
  { title: "Massage", description: "Relax and unwind with our soothing massages, tailored to your needs" },
  { title: "Eyelash extensions", description: "Enhance your natural beauty with our expert eyelash extensions, for a glamorous, long-lasting look" },
  { title: "Bridal services", description: "Create your dream bridal look with our expert services, tailored to your unique style" },
]);
</script>

<template>
  <div class="flex flex-col px-20">
    <h1 class="text-primary">Our Services</h1>
    <div class="mx-auto w-full">
      <Swiper 
        :modules="[Pagination, Navigation, Autoplay]"
        :slides-per-view="4" 
        :space-between="20" 
        :loop="true" :pagination="{ clickable: true }" 
        :navigation="true" 
        :autoplay="{ delay: 3000 }" class="w-full">
            <SwiperSlide v-for="(service, index) in services" :key="index">
                <div class="rounded-lg p-6 text-center shadow-lg">
                <img src="/assets/images/work2.webp" alt="work 2" class="object-cover" />
                <h3 class="text-lg font-bold">{{ service.title }}</h3>
                <p class="text-gray-600">{{ service.description }}</p>
            </div>
            </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>
