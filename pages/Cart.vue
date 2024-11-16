<script setup>
  import Navbar from '~/pages/components/Navbar.vue';
  import { useHomeStore } from '~/stores/homeStore';

  const { cart } = useHomeStore();
</script>

<template>
    <!-- Navbar Section Start-->
    <Navbar />
    <!-- Navbar Section End -->
     
    <section class="flex items-center justify-center ">
        <div class=" my-32 w-[900px] object-cover rounded-xl flex justify-center items-center">
            <div class="w-[750px] my-10 ">
                <h1 class="mb-[1px] font-serif text-xs text-center text-slate-700">Batik Indonesia</h1>
                <h1 class="mb-10 font-serif text-5xl font-semibold text-center text-orangprim">Detail Pembelian</h1>

                <!-- Card Start -->
                <div v-for="product in cart" class="border-[1px] border-orangprim rounded-lg  p-7 shadow-md  shadow-orangprim my-10" >
                  <div class="flex justify-between w-full">
                    <div class="flex items-center gap-2 mb-4">
                      <h1 class="font-bold font-basker text-slate-600">Belanja : </h1>
                      <p class="text-sm font-basker text-slate-700">{{ product.orderDate }}</p>
                      <div class="font-bold font-basker text-slate-700"> - </div>
                      <p class="font-serif text-sm text-slate-700"> INV/79798790/SHDSGU6/790 </p>
                    </div>
                    <img src="/assets/aset/verified.svg" class="w-6">
                  </div>

                  <div class="w-full h-[1px] my-4 bg-gray-200"></div>

                  <h1 class="mb-1 font-semibold font-basker text-base text-orangprim p-[2px]">Produk yang Dipesan</h1>
                  <div class="flex items-center gap-3 p-3">
                      <img :src="`/_nuxt/assets/img/${product.foto}`" class="object-cover w-16 h-20 rounded-lg bg-slate-100 ">
                      <div class="w-full p-3 ">
                        <h1 class="mb-2 text-sm font-basker text-slate-600">{{ product.nama_produk }}</h1>
                        <div class="flex justify-between">
                            <div class="flex gap-2 mb-2 ">
                                <div class="px-5 py-[2px] rounded-full font-basker bg-slate-100">{{ product.size }}</div>
                                <div class="px-5 py-[2px] rounded-full font-basker bg-slate-100">{{ product.quantity }} Item</div>
                                <h1 class="text-base font-base font-basker">Rp. {{ product.harga.toLocaleString('id-ID') }}</h1>
                            </div>
                            <h1 class="text-xl font-semibold font-basker">Rp. {{ product.totalPrice.toLocaleString('id-ID') }}</h1>
                        </div>
                      </div>
                  </div>
                  
                  <NuxtLink :to="`/shop/product/${product.id_produk}/checkout`">
                    <div class="w-full py-1 mt-2 text-center text-white rounded-full bg-orangprim hover:bg-black font-basker">
                      Lihat Detail
                    </div>
                  </NuxtLink>
                </div>
                <!-- Card End -->
            </div>
        </div>
    </section>
</template>


