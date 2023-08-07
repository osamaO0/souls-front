<template>
    <p class="adoption">Lost & Found</p>
    <swiper :slidesPerView="1" :spaceBetween="10" :pagination="{
        clickable: true,
    }" :breakpoints="{
    '@0.00': {
        slidesPerView: 1,
    },
    '@0.75': {
        slidesPerView: 2,
    },
    '@1.00': {
        slidesPerView: 3,
    },
    '@1.50': {
        slidesPerView: 4,
    },
}" :modules="modules" class="mySwiper">
        <swiper-slide class="swiper-slide">
            <router-link to="/lost-found">
                <div class="card" style="background-color: #64938c">
                    <img src="https://souls.care/assets/icon/lost.svg" class="img">
                </div>
            </router-link>
        </swiper-slide>
        <swiper-slide class="swiper-slide">
            <div class="card">
                <img
                    src="https://firebasestorage.googleapis.com/v0/b/souls-cf239.appspot.com/o/petsImages%2FDlKW9mZMILIF3YAYms2B%2F15508162607.321676.jpeg?alt=media&token=45a752f2-43c2-4061-8280-6cdef99b789d">
            </div>
        </swiper-slide>
        <swiper-slide class="swiper-slide">
            <router-link to="/lost-found/1">
                <div class="card">
                    <img
                        src="https://firebasestorage.googleapis.com/v0/b/souls-cf239.appspot.com/o/petsImages%2FGG9KaOTh712lzl1gGj5c%2F5432167750.926577.jpeg?alt=media&token=d259331b-3e89-49d4-859c-e117e3ecd5a9">
                </div>
            </router-link>
        </swiper-slide>
        <swiper-slide class="swiper-slide">
            <router-link to="/lost-found/1">
                <div class="card">
                    <img
                        src="https://firebasestorage.googleapis.com/v0/b/souls-cf239.appspot.com/o/petsImages%2FGG9KaOTh712lzl1gGj5c%2F5432167750.926577.jpeg?alt=media&token=d259331b-3e89-49d4-859c-e117e3ecd5a9">
                </div>
            </router-link>
        </swiper-slide>
        <swiper-slide class="swiper-slide">
            <router-link to="/lost-found/1">
                <div class="card">
                    <img
                        src="https://firebasestorage.googleapis.com/v0/b/souls-cf239.appspot.com/o/petsImages%2FGG9KaOTh712lzl1gGj5c%2F5432167750.926577.jpeg?alt=media&token=d259331b-3e89-49d4-859c-e117e3ecd5a9">
                </div>
            </router-link>
        </swiper-slide>
        <swiper-slide class="swiper-slide">
            <div class="card" style="background-color: #64938c">
                <div class="d-flex align-center justify-center" style="height: 100%">
                    <router-link to="/lost-found" class="text-decoration-none text-black">View More</router-link>
                </div>
            </div>
        </swiper-slide>
    </swiper>
</template>
  
  
<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

export default {
    name: 'LostAndFound',

    components: {
        Swiper,
        SwiperSlide,
    },

    setup() {
        return {
            modules: [Pagination],
        };
    },
};
</script>
  
<style scoped>
.adoption {
    font-weight: 800;
    font-size: 16px;
    color: #64938c;
    margin-bottom: 15px;
}

.card {
    border-radius: 15px !important;
    background-color: #cdeae4;
    width: 200px;
    height: 200px;
}

.swiper {
    width: 100%;
    height: 100%;
}

swiper-slide {
    text-align: center;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.swiper-slide img {
    display: block;
    width: 200px;
    height: 200px;
    object-fit: cover;
    flex-shrink: 0;
}

.swiper-slide {
    width: 200px !important;
}
</style>