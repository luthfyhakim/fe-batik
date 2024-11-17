<script setup>
import Navbar from '~/pages/components/Navbar.vue';
import Footer from '~/pages/components/Footer.vue';
import { usePurchaseStore } from '~/stores/purchaseStore';
import { useHomeStore } from '~/stores/homeStore';

const API = 'http://localhost:8080';
const route = useRoute();

const store = usePurchaseStore()
const homeStore = useHomeStore()

// const { data } = await useFetch(`${API}/produk/${route.params.id_produk}`);

const data = {
  id_produk: 1,
  id_daerah: 1,
  id_kategori: 1,
  nama_produk: "Atasan Pria Lengan Pendek",
  harga: 759000,
  deskripsi: "Atasan pria lengan pendek ini dirancang untuk kenyamanan dan gaya kasual sehari-hari. Terbuat dari bahan katun yang lembut dan ringan, produk ini memberikan sirkulasi udara yang baik dan nyaman dipakai sepanjang hari. Tersedia dalam berbagai warna dan ukuran, atasan ini memiliki potongan modern yang pas di badan tanpa terasa ketat. Kerahnya sederhana dengan detail kancing di depan yang membuatnya mudah dipakai dan dilepas. Cocok untuk acara santai, jalan-jalan, atau dipadukan dengan jaket untuk gaya semi-formal.",
  foto: "display1.jpg",
  kategori: {
    id_kategori: 1,
    nama_kategori: "Pria"
  }
};

store.setProductData(data)

const sizes = ['S', 'M', 'L', 'XL', 'XXL', '3XL', '4XL'];

const handleSizeClick = (size) => {
  store.setSize(size);
};
</script>

<template>
  <!-- Navbar Section Start-->
  <Navbar />
  <!-- Navbar Section End -->

  <!-- Main Start-->
  <div class="w-[1024px] flex flex-col justify-center mx-auto mt-36 max-h-min">

    <!-- Path Start -->
    <div class="flex gap-2">
      <NuxtLink to="/" class="text-sm text-gray-700 font-basker">Home</NuxtLink>
      <img src="/assets/aset/Frame.svg" alt="">
      <NuxtLink to="/shop" class="text-sm text-gray-700 font-basker">Shop</NuxtLink>
      <img src="/assets/aset/Frame.svg" alt="">
      <NuxtLink class="text-sm text-gray-700 font-basker">{{ data.kategori.nama_kategori }}</NuxtLink>
    </div>
    <!-- Path Start -->

    <!-- Product Section Start -->
    <section class="mt-14">

      <div class="grid grid-cols-2">
        <!-- Product Detail Start-->

        <!-- Img Product -->
        <div class="w-full">
          <div class="w-full h-[500px] mb-5 bg-slate-100 rounded-lg"><img :src="`/_nuxt/assets/img/${data.foto}`"
              class="object-cover w-full h-full"></div>
          <div class="grid grid-cols-3 gap-5">
            <div class="h-32 rounded-lg bg-slate-100"><img :src="`/_nuxt/assets/img/${data.foto}`"
                class="object-cover object-top w-full h-full"></div>
            <div class="h-32 rounded-lg bg-slate-100"><img :src="`/_nuxt/assets/img/${data.foto}`"
                class="object-cover object-top w-full h-full"></div>
            <div class="h-32 rounded-lg bg-slate-100"><img :src="`/_nuxt/assets/img/${data.foto}`"
                class="object-cover object-top w-full h-full"></div>
          </div>
        </div>

        <!-- Detail Product -->
        <div class="flex justify-center w-full h-full mb-96">
          <div class="w-[450px] h-96 mt-5">
            <h1 class="mb-3 text-3xl font-basker">{{ data.nama_produk }}</h1>
            <div class="flex gap-2 mb-2">
              <img src="/assets/img/star.png" class="w-5">
              <img src="/assets/img/star.png" class="w-5">
              <img src="/assets/img/star.png" class="w-5">
              <img src="/assets/img/star.png" class="w-5">
            </div>
            <div class="flex gap-4 my-5">
              <h1 class="text-2xl font-semibold font-basker">Rp. {{ data.harga.toLocaleString('id-ID') }}</h1>
              <del class="text-2xl text-gray-400 font-basker">Rp. 999.000</del>
              <div class="px-4 py-1 font-serif rounded-full bg-rose-100 text-rose-500">40%</div>
            </div>
            <p class="text-sm text-justify text-gray-500 font-basker">{{ data.deskripsi }}</p>
            <div class="w-full h-[1px] bg-gray-200 mt-7"></div>
            <div class="my-5">
              <h1 class="mb-3 font-semibold font-basker">Size</h1>
              <div class="flex flex-wrap gap-2">
                <button v-for="size in sizes" :key="size" @click="handleSizeClick(size)"
                  class="px-5 py-1 font-serif rounded-full transition-colors duration-200" :class="[
                    store.selectedSize === size
                      ? 'bg-black text-white'
                      : 'bg-slate-100 hover:bg-slate-200'
                  ]">
                  {{ size }}
                </button>
              </div>
            </div>
            <div class="w-full h-[1px] bg-gray-200 my-7"></div>
            <div class="flex gap-3">
              <div class="flex items-center justify-center gap-6 px-8 py-1 bg-gray-200 rounded-full">
                <button @click="store.decrementQuantity()" :disabled="store.quantity <= 1">
                  <!-- <img src="/assets/aset/minus.svg" class="w-8"> -->
                  -
                </button>

                <div class="font-serif text-lg">{{ store.quantity }}</div>

                <button @click="store.incrementQuantity()" :disabled="store.quantity >= 99">
                  <!-- <img src="/assets/aset/plus.svg" class="w-8"> -->
                  +
                </button>
              </div>

              <button
                @click="store.setOrderDate(), homeStore.addToCart({ ...store.productData, orderDate: store.orderDate, size: store.selectedSize, quantity: store.quantity, totalPrice: store.finalTotalPrice, formattedTotalPrice: store.formattedTotalPrice })"
                class="py-[10px] text-sm text-center text-dark bg-white border-solid border-2 border-orangprim rounded-full w-96 font-basker hover:bg-black hover:text-white hover:border-black cursor-pointer">
                Add to Cart
              </button>

              <NuxtLink :to="`/shop/product/${data.id_produk}/checkout`"
                class="py-[10px] text-sm text-center text-white bg-black rounded-full w-96 font-basker hover:bg-orangprim cursor-pointer">
                <button @click="store.setOrderDate()">Check Out Now!</button>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
      <!-- Product Detail End-->

      <!-- review Start -->
      <div class="w-full max-h-min">
        <div class="flex justify-between">
          <h1 class="font-serif text-xl">All Reviews <span class="text-sm text-gray-400">(451)</span></h1>

          <div class="flex gap-4 mb-5">
            <img src="/assets/aset/filter.svg" class="px-2 py-2 rounded-full w-9 bg-slate-100">
            <div class="flex gap-2 px-5 py-2 rounded-full bg-slate-100">
              <h1 class="text-sm font-semibold font-basker">Latest</h1>
              <img src="/assets/aset/drop.svg" class="w-4">
            </div>
            <div class="px-5 py-2 text-sm text-white bg-black rounded-full font-basker">Write a Review</div>
          </div>
        </div>

        <!-- Review card -->
        <div class="w-full max-h-min ">
          <div class="grid grid-cols-3 gap-6">
            <div class="border-2 rounded-xl bg-white w-[320px] h-54 p-4 mx-auto">
              <div class="flex items-center mb-2">
                <div class="flex gap-1">
                  <img src="/assets/img/star.png" class="w-5 h-5" alt="Star">
                  <img src="/assets/img/star.png" class="w-5 h-5" alt="Star">
                  <img src="/assets/img/star.png" class="w-5 h-5" alt="Star">
                  <img src="/assets/img/star.png" class="w-5 h-5" alt="Star">
                  <img src="/assets/img/star.png" class="w-5 h-5" alt="Star">
                </div>
              </div>
              <div class="flex gap-4">
                <h3 class="text-lg font-semibold">Leila Dahlia</h3>
                <img src="/assets/aset/verified.svg" class="w-5 h-5" alt="Verified">
              </div>
              <p class="flex mt-2 text-xs text-justify text-gray-600">
                "Kebaya kutu baru ini benar-benar memenuhi ekspektasi saya! Bahan yang digunakan sangat nyaman di kulit,
                bahkan saat dipakai seharian. Motif batiknya elegan dan terlihat sangat berkelas, sempurna untuk acara
                formal maupun semi-formal. "
              </p>
              <p class="mt-4 text-xs text-gray-400">Posted on November 11, 2024</p>
            </div>

            <div class="border-2 rounded-xl bg-white w-[320px] h-54 p-4 mx-auto">
              <div class="flex items-center mb-2">
                <div class="flex gap-1">
                  <img src="/assets/img/star.png" class="w-5 h-5" alt="Star">
                  <img src="/assets/img/star.png" class="w-5 h-5" alt="Star">
                  <img src="/assets/img/star.png" class="w-5 h-5" alt="Star">
                  <img src="/assets/img/star.png" class="w-5 h-5" alt="Star">
                  <img src="/assets/img/star.png" class="w-5 h-5" alt="Star">
                </div>
              </div>
              <div class="flex gap-4">
                <h3 class="text-lg font-semibold">Leila Dahlia</h3>
                <img src="/assets/aset/verified.svg" class="w-5 h-5" alt="Verified">
              </div>
              <p class="flex mt-2 text-xs text-justify text-gray-600">
                "Kebaya kutu baru ini benar-benar memenuhi ekspektasi saya! Bahan yang digunakan sangat nyaman di kulit,
                bahkan saat dipakai seharian. Motif batiknya elegan dan terlihat sangat berkelas, sempurna untuk acara
                formal maupun semi-formal. "
              </p>
              <p class="mt-4 text-xs text-gray-400">Posted on November 11, 2024</p>
            </div>

            <div class="border-2 rounded-xl bg-white w-[320px] h-54 p-4 mx-auto">
              <div class="flex items-center mb-2">
                <div class="flex gap-1">
                  <img src="/assets/img/star.png" class="w-5 h-5" alt="Star">
                  <img src="/assets/img/star.png" class="w-5 h-5" alt="Star">
                  <img src="/assets/img/star.png" class="w-5 h-5" alt="Star">
                  <img src="/assets/img/star.png" class="w-5 h-5" alt="Star">
                  <img src="/assets/img/star.png" class="w-5 h-5" alt="Star">
                </div>
              </div>
              <div class="flex gap-4">
                <h3 class="text-lg font-semibold">Leila Dahlia</h3>
                <img src="/assets/aset/verified.svg" class="w-5 h-5" alt="Verified">
              </div>
              <p class="flex mt-2 text-xs text-justify text-gray-600">
                "Kebaya kutu baru ini benar-benar memenuhi ekspektasi saya! Bahan yang digunakan sangat nyaman di kulit,
                bahkan saat dipakai seharian. Motif batiknya elegan dan terlihat sangat berkelas, sempurna untuk acara
                formal maupun semi-formal. "
              </p>
              <p class="mt-4 text-xs text-gray-400">Posted on November 11, 2024</p>
            </div>

            <div class="border-2 rounded-xl bg-white w-[320px] h-54 p-4 mx-auto">
              <div class="flex items-center mb-2">
                <div class="flex gap-1">
                  <img src="/assets/img/star.png" class="w-5 h-5" alt="Star">
                  <img src="/assets/img/star.png" class="w-5 h-5" alt="Star">
                  <img src="/assets/img/star.png" class="w-5 h-5" alt="Star">
                  <img src="/assets/img/star.png" class="w-5 h-5" alt="Star">
                  <img src="/assets/img/star.png" class="w-5 h-5" alt="Star">
                </div>
              </div>
              <div class="flex gap-4">
                <h3 class="text-lg font-semibold">Leila Dahlia</h3>
                <img src="/assets/aset/verified.svg" class="w-5 h-5" alt="Verified">
              </div>
              <p class="flex mt-2 text-xs text-justify text-gray-600">
                "Kebaya kutu baru ini benar-benar memenuhi ekspektasi saya! Bahan yang digunakan sangat nyaman di kulit,
                bahkan saat dipakai seharian. Motif batiknya elegan dan terlihat sangat berkelas, sempurna untuk acara
                formal maupun semi-formal. "
              </p>
              <p class="mt-4 text-xs text-gray-400">Posted on November 11, 2024</p>
            </div>

            <div class="border-2 rounded-xl bg-white w-[320px] h-54 p-4 mx-auto">
              <div class="flex items-center mb-2">
                <div class="flex gap-1">
                  <img src="/assets/img/star.png" class="w-5 h-5" alt="Star">
                  <img src="/assets/img/star.png" class="w-5 h-5" alt="Star">
                  <img src="/assets/img/star.png" class="w-5 h-5" alt="Star">
                  <img src="/assets/img/star.png" class="w-5 h-5" alt="Star">
                  <img src="/assets/img/star.png" class="w-5 h-5" alt="Star">
                </div>
              </div>
              <div class="flex gap-4">
                <h3 class="text-lg font-semibold">Leila Dahlia</h3>
                <img src="/assets/aset/verified.svg" class="w-5 h-5" alt="Verified">
              </div>
              <p class="flex mt-2 text-xs text-justify text-gray-600">
                "Kebaya kutu baru ini benar-benar memenuhi ekspektasi saya! Bahan yang digunakan sangat nyaman di kulit,
                bahkan saat dipakai seharian. Motif batiknya elegan dan terlihat sangat berkelas, sempurna untuk acara
                formal maupun semi-formal. "
              </p>
              <p class="mt-4 text-xs text-gray-400">Posted on November 11, 2024</p>
            </div>

            <div class="border-2 rounded-xl bg-white w-[320px] h-54 p-4 mx-auto">
              <div class="flex items-center mb-2">
                <div class="flex gap-1">
                  <img src="/assets/img/star.png" class="w-5 h-5" alt="Star">
                  <img src="/assets/img/star.png" class="w-5 h-5" alt="Star">
                  <img src="/assets/img/star.png" class="w-5 h-5" alt="Star">
                  <img src="/assets/img/star.png" class="w-5 h-5" alt="Star">
                  <img src="/assets/img/star.png" class="w-5 h-5" alt="Star">
                </div>
              </div>
              <div class="flex gap-4">
                <h3 class="text-lg font-semibold">Leila Dahlia</h3>
                <img src="/assets/aset/verified.svg" class="w-5 h-5" alt="Verified">
              </div>
              <p class="flex mt-2 text-xs text-justify text-gray-600">
                "Kebaya kutu baru ini benar-benar memenuhi ekspektasi saya! Bahan yang digunakan sangat nyaman di kulit,
                bahkan saat dipakai seharian. Motif batiknya elegan dan terlihat sangat berkelas, sempurna untuk acara
                formal maupun semi-formal. "
              </p>
              <p class="mt-4 text-xs text-gray-400">Posted on November 11, 2024</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <!-- Main End-->

  <!-- Footer Section Start -->
  <Footer />
  <!-- Footer Section End -->
</template>