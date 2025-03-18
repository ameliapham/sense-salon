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
  <div class="flex flex-col gap-4 px-20">
    <h1 class="text-primary">Our Services</h1>
    <div class="w-full">
      <Swiper
        :modules="[Pagination, Navigation, Autoplay]"
        :slides-per-view="3"
        :space-between="20"
        :loop="true"
        :pagination="{ clickable: true }"
        :navigation="false"
        :autoplay="{ delay: 3000 }"
        class="w-full flex flex-col gap-4 overflow-hidden"
        :breakpoints="{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }"
      >
        <SwiperSlide v-for="(service, index) in services" :key="index">
          <div class="flex  min-h-[500px] flex-col justify-between rounded-[20px] bg-[#FEF8E8] pb-6">
            <div class="flex flex-col gap-4">
              <img src="/assets/images/work2.webp" alt="work 2" class="h-[220px] rounded-t-[20px] object-cover" />
              <div class="flex flex-col gap-4 p-6">
                <h3 class="font-bold text-primary">{{ service.title }}</h3>
                <p class="">{{ service.description }}</p>
              </div>
            </div>
            <div class="px-6">
              <Button label="See more" to="/"></Button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<style scoped>
:deep(.swiper-pagination-bullet) {
  background-color: #576238;
  width: 10px;
  height: 10px;
  opacity: 0.2;
}

:deep(.swiper-pagination-bullet-active) {
  background-color: #576238;
  opacity: 1;
}

:deep(.swiper-pagination) {
  position: relative;

}
</style>
