<script setup>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import { useHomeStore } from '~/stores/homeStore';

const API = 'http://localhost:8080';

// const { data } = await useFetch(`${API}/produk`);

const data = [
  {
    id_produk: 1,
    id_daerah: 1,
    id_kategori: 1,
    nama_produk: "Atasan Pria Lengan Pendek",
    harga: 759000,
    deskripsi: "Atasan pria lengan pendek ini dirancang untuk kenyamanan dan gaya kasual sehari-hari. Terbuat dari bahan katun yang lembut dan ringan, produk ini memberikan sirkulasi udara yang baik dan nyaman dipakai sepanjang hari. Tersedia dalam berbagai warna dan ukuran, atasan ini memiliki potongan modern yang pas di badan tanpa terasa ketat. Kerahnya sederhana dengan detail kancing di depan yang membuatnya mudah dipakai dan dilepas. Cocok untuk acara santai, jalan-jalan, atau dipadukan dengan jaket untuk gaya semi-formal.",
    foto: "display1.jpg",
  },
  {
    id_produk: 2,
    id_daerah: 1,
    id_kategori: 2,
    nama_produk: "Atasan Wanita Lengan Panjang",
    harga: 1259000,
    deskripsi: "Atasan wanita lengan panjang ini dirancang dengan elegan untuk tampilan yang chic dan nyaman. Terbuat dari bahan berkualitas tinggi seperti katun atau polyester lembut, atasan ini menawarkan kenyamanan sekaligus keanggunan. Modelnya memiliki potongan longgar yang memudahkan bergerak dan memberikan tampilan stylish tanpa berlebihan. Lengan panjangnya cocok untuk menambah kehangatan dan bisa digulung untuk gaya yang lebih santai. Atasan ini tersedia dalam berbagai pilihan warna, cocok untuk digunakan sehari-hari, di kantor, ataupun acara formal.",
    foto: "display2.png",
  },
  {
    id_produk: 3,
    id_daerah: 2,
    id_kategori: 1,
    nama_produk: "Atasan Pria Batik Madura",
    harga: 899000,
    deskripsi: "Atasan pria batik Madura ini menampilkan motif khas yang penuh warna dan detail unik, mencerminkan warisan budaya Madura yang kaya. Terbuat dari bahan katun halus yang nyaman dan menyerap keringat, atasan ini cocok untuk dikenakan dalam berbagai acara, baik formal maupun semi-formal. Potongan atasan ini didesain agar pas di badan dengan kerah tradisional dan kancing depan, memberikan sentuhan klasik dan elegan. Warna-warna cerah dan kontras pada motif batiknya menambah karakter khas Madura, sehingga memberikan kesan stylish namun tetap berkelas. Ideal untuk melengkapi penampilan pria yang ingin tampil beda dengan sentuhan budaya Indonesia.",
    foto: "display3.jpg",
  },
  {
    id_produk: 4,
    id_daerah: 2,
    id_kategori: 2,
    nama_produk: "Retro Batik Callysta Nusantara",
    harga: 1499000,
    deskripsi: "Retro Batik Callysta Nusantara adalah atasan batik dengan sentuhan desain retro modern, mengusung motif-motif klasik Nusantara yang penuh warna dan berani. Terbuat dari bahan katun premium yang lembut dan adem, batik ini nyaman dipakai seharian. Dengan kombinasi pola tradisional dan gaya retro, Callysta Nusantara menawarkan perpaduan yang unik antara gaya vintage dan budaya Indonesia, menciptakan tampilan yang elegan dan chic.",
    foto: "display4.jpg",
  },
  {
    id_produk: 5,
    id_daerah: 1,
    id_kategori: 3,
    nama_produk: "Batik Apricot & Amber Scrunchie",
    harga: 499000,
    deskripsi: "Batik Apricot & Amber Scrunchie adalah aksesori rambut elegan yang memadukan motif batik tradisional dengan warna-warna aprikot dan amber yang lembut. Dibuat dari kain batik berkualitas tinggi, scrunchie ini halus dan lembut, sehingga nyaman digunakan sepanjang hari tanpa merusak rambut. Pola batik pada kainnya memberikan nuansa etnik yang unik, membuatnya lebih menarik dan cocok dipadukan dengan berbagai gaya, baik casual maupun formal.",
    foto: "display5.png",
  },
  {
    id_produk: 6,
    id_daerah: 1,
    id_kategori: 2,
    nama_produk: "Retro Batik Callysta Nusantara Exclusive",
    harga: 1999000,
    deskripsi: "Retro Batik Callysta Nusantara Exclusive adalah koleksi eksklusif yang mengusung desain batik Nusantara dengan nuansa retro klasik, menonjolkan pola-pola yang berani dan detail halus yang artistik. Setiap atasan dalam koleksi ini terbuat dari kain batik premium dengan teknik pewarnaan khusus, memberikan kualitas yang tahan lama dan tampilan yang lebih elegan. Warna-warna hangat dan earthy seperti coklat, oranye, dan merah marun memberikan kesan vintage yang mewah dan timeless.",
    foto: "display6.png",
  },
];

const store = useHomeStore();
store.setProducts(data);
</script>

<template>
  <!-- Navbar Section Start-->
  <Navbar />
  <!-- Navbar Section End -->

  <!-- Benner Section Start -->
  <section>
    <div class="relative w-full h-[600px] text-white">
      <img src="/assets/img/1.jpeg" class="absolute object-cover object-top w-full h-full z-5 ">
      <div class="absolute flex justify-center w-full p-20 bottom-48  h-[5px]">
        <h1 class="text-6xl font-black font-basker" id="name">BATIK INDONESIA</h1>
      </div>

      <div class="absolute bottom-0 w-full wafee">
        <div class="wafe" id="wafe1" style="--i:1;"></div>
        <div class="wafe" id="wafe2" style="--i:2;"></div>
        <div class="wafe" id="wafe3" style="--i:3;"></div>
        <div class="wafe" id="wafe4" style="--i:4;"></div>
      </div>
    </div>
  </section>
  <!-- Benner Section End -->

  <!-- Profil Section Start -->
  <section class="flex justify-center my-64">
    <div class="flex items-center justify-between gap-5">
      <div class="w-[500px]">
        <img src="/assets/img/profilimg.jpeg" alt=""
          class=" object-cover w-[450px] h-[597px] rounded-tl-[10px] rounded-tr-[120px] rounded-bl-[120px] rounded-br-[10px]">
      </div>
      <div class="w-[500px] flex justify-end">
        <div>
          <h1 class="mb-3 font-serif text-4xl">Batik Indonesia</h1>
          <p class="font-serif text-base text-orangprim w-96">Batik lebih dari sekadar kain sebuah warisan budaya yang
            telah ada selama ratusan tahun dan menjadi bagian penting dari identitas bangsa.</p>
        </div>
      </div>
    </div>
  </section>
  <!-- Profil Section End -->

  <!-- Section sertifikat Start -->

  <section class="flex items-center justify-center w-full mt-28 mb-72 max-h-min">
    <img src="/assets/img/sertifikat.jpeg" alt="" class="w-[700px] rounded-3xl shadow-lg">
  </section>
  <!-- Section sertifikat End -->

  <div class="w-[1100px] bg-orangprim h-8 rounded-r-3xl "></div>

  <!-- Categories Section Start -->
  <section class="my-64">
    <h1 class="mb-10 font-serif text-4xl text-center">Batik - Batik</h1>
    <div class="flex justify-center gap-6">
      <div class=" w-[350px] h-[500px] relative rounded-lg">
        <img src="/assets/img/parangkusumo.jpg" alt="parangkusumo"
          class="absolute object-cover w-full h-full rounded-lg">
        <div class="absolute bottom-0 w-full rounded-lg h-96 bg-gradient-to-t from-black"></div>
      </div>
      <div class="w-[500px] h-[500px]">
        <div class="flex gap-6 mb-6">
          <div class="h-[238px] w-[313px]  relative rounded-lg">
            <img src="/assets/img/batikpesisir.jpg" alt="parangkusumo"
              class="absolute object-cover w-full h-full rounded-lg">
            <div class="absolute bottom-0 w-full h-56 rounded-lg bg-gradient-to-t from-black"></div>
          </div>
          <div class="h-[238px] w-[313px]  relative rounded-lg">
            <img src="/assets/img/batiknusantara.jpg" alt="parangkusumo"
              class="absolute object-cover w-full h-full rounded-lg">
            <div class="absolute bottom-0 w-full h-56 rounded-lg bg-gradient-to-t from-black"></div>
          </div>
        </div>
        <div class=" w-[500px] h-[238px] relative rounded-lg">
          <img src="/assets/img/baikkontemporer.jpg" alt="parangkusumo"
            class="absolute object-cover w-full h-full rounded-lg">
          <div class="absolute bottom-0 w-full h-56 rounded-lg bg-gradient-to-t from-black"></div>
        </div>
      </div>
    </div>
  </section>
  <!-- Categories Section End -->

  <!-- Shop Section Start -->
  <section class="my-64">
    <h1 class="mb-10 font-serif text-4xl text-center">Rekomendasi</h1>
    <div class="flex justify-center ">
      <div class="w-[1000px] grid grid-cols-3">
        <!-- card -->
        <div v-for="produk in data" class="flex items-center justify-center w-full mb-24 h-96">
          <NuxtLink :to="`/shop/product/${produk.id_produk}`" class="w-[260px]">
            <img :src="`/_nuxt/assets/img/${produk.foto}`" class="object-cover w-[250px] h-[250px] mb-3 shadow-sm" />
            <!-- <img src="`/assets/img/display1.jpg`" class="object-cover w-[250px] h-[250px] mb-3 shadow-sm" /> -->
            <h1 class="mb-1 font-serif text-2xl">{{ produk.nama_produk }}</h1>
            <p class="mb-5 font-serif text-orangprim">Rp. {{ produk.harga.toLocaleString('id-ID') }}</p>
            <div :href="`/shop/product/${produk.id_produk}`"
              class="px-5 py-2 font-serif w-20 border-orangprim border-[1px] text-center rounded-3xl text-orangprim hover:bg-orangprim hover:text-white">
              View</div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
  <!-- Shop Section End -->

  <!-- Offer Section Start -->
  <section class="my-64">
    <div class="flex justify-between w-full">
      <div class="relative w-[600px] h-[430px] rounded-r-lg">
        <img src="/assets/img/offerbg1.jpg" alt="" class="absolute object-cover w-full h-full rounded-r-2xl">
        <div
          class="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black/50 rounded-r-2xl">
          <h1 class="mb-2 font-serif text-5xl">Sale 50% off</h1>
          <p class="text-lg italic font-basker w-[380px] mb-5">Save extra on our sale collections runs until 30 November
            2024</p>
          <NuxtLink to="/shop" class="px-5 py-3 font-serif text-lg bg-black hover:bg-orangprim rounded-3xl ">Shop Now
          </NuxtLink>
        </div>
      </div>

      <div class="relative w-[600px] h-[430px] rounded-l-lg">
        <img src="/assets/img/offerbg2.jpg" alt="" class="absolute object-cover w-full h-full rounded-l-2xl">
        <div
          class="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black/50 rounded-l-2xl">
          <h1 class="mb-2 font-serif text-5xl">Check Our New Collections</h1>
          <p class="text-lg italic font-basker w-[380px] mb-5">Discover our latest collection of premium batik, where
            traditional artistry meets modern elegance.</p>
          <NuxtLink to="/shop" class="px-5 py-3 font-serif text-lg bg-black hover:bg-orangprim rounded-3xl ">Find Out
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
  <!-- Offer Section End -->

  <!-- Testimoni Section Start -->
  <section class="my-64">
    <h1 class="mb-3 font-serif text-4xl text-center">Testimonials</h1>
    <h1 class="mb-10 text-3xl text-center font-basker">Loved By 100.000++ and Counting</h1>

    <div class="grid grid-cols-5 mx-auto place-items-center">
      <!-- card testi -->
      <div class="w-56 h-96 ">
        <img src="/assets/img/testi1.jpg" class="object-cover w-full h-64 mb-3 rounded-lg">
        <div class="flex gap-2 px-2 mb-2">
          <img src="/assets/img/star.png" class="w-5">
          <img src="/assets/img/star.png" class="w-5">
          <img src="/assets/img/star.png" class="w-5">
          <img src="/assets/img/star.png" class="w-5">
          <img src="/assets/img/star.png" class="w-5">
        </div>
        <p class="px-2 mb-3 text-sm italic font-medium font-basker">“Sangat rekomen bangettt”</p>
        <p class="px-2 text-sm font-bold font-basker">~ Rania Yamin</p>
      </div>

      <div class="w-56 h-96 ">
        <img src="/assets/img/testi2.jpg" class="object-cover w-full h-64 mb-3 rounded-lg">
        <div class="flex gap-2 px-2 mb-2">
          <img src="/assets/img/star.png" class="w-5">
          <img src="/assets/img/star.png" class="w-5">
          <img src="/assets/img/star.png" class="w-5">
          <img src="/assets/img/star.png" class="w-5">
        </div>
        <p class="px-2 mb-3 text-sm italic font-medium font-basker">“Bukan cuma batik yang dijual disini, tapi kebaya
          juga!”</p>
        <p class="px-2 text-sm font-bold font-basker">~ Dian Sastrowardoyo</p>
      </div>

      <div class="w-56 h-96 ">
        <img src="/assets/img/testi3.jpg" class="object-cover w-full h-64 mb-3 rounded-lg">
        <div class="flex gap-2 px-2 mb-2">
          <img src="/assets/img/star.png" class="w-5">
          <img src="/assets/img/star.png" class="w-5">
          <img src="/assets/img/star.png" class="w-5">
          <img src="/assets/img/star.png" class="w-5">
          <img src="/assets/img/star.png" class="w-5">
        </div>
        <p class="px-2 mb-3 text-sm italic font-medium font-basker">“Kalo butuh baju batik beli aja langsung di sini.
          mantappp”</p>
        <p class="px-2 text-sm font-bold font-basker">~ Refal Hady</p>
      </div>

      <div class="w-56 h-96 ">
        <img src="/assets/img/testi4.jpg" class="object-cover w-full h-64 mb-3 rounded-lg">
        <div class="flex gap-2 px-2 mb-2">
          <img src="/assets/img/star.png" class="w-5">
          <img src="/assets/img/star.png" class="w-5">
          <img src="/assets/img/star.png" class="w-5">
          <img src="/assets/img/star.png" class="w-5">
          <img src="/assets/img/star.png" class="w-5">
        </div>
        <p class="px-2 mb-3 text-sm italic font-medium font-basker">“Batiknya modern, simple, dan elegan. Temen-temen
          beli di sini saja!”</p>
        <p class="px-2 text-sm font-bold font-basker">~ Maudy Ayunda</p>
      </div>

      <div class="w-56 h-96 ">
        <img src="/assets/img/testi5.jpg" class="object-cover w-full h-64 mb-3 rounded-lg">
        <div class="flex gap-2 px-2 mb-2">
          <img src="/assets/img/star.png" class="w-5">
          <img src="/assets/img/star.png" class="w-5">
          <img src="/assets/img/star.png" class="w-5">
          <img src="/assets/img/star.png" class="w-5">
        </div>
        <p class="px-2 mb-3 text-sm italic font-medium font-basker">“Bagus bgt batiknya, cocok buat ngantor”</p>
        <p class="px-2 text-sm font-bold font-basker">~ Muhammad Ramadhan</p>
      </div>
    </div>
  </section>
  <!-- Testimoni Section End  -->

  <!-- Benner Section Start  -->
  <section class="my-64 ">
    <div class="relative w-full h-[550px] flex justify-center items-center">
      <img src="/assets/img/benner.jpeg" class="absolute object-cover w-full h-full">
      <div class="absolute flex flex-col">
        <h1 class="mb-5 font-serif text-white text-7xl">Get Special Offer !!!</h1>
        <NuxtLink to="/shop"
          class="px-2 py-3 text-lg text-center text-white bg-black rounded-full font-basker hover:bg-orangprim"> See
          More </NuxtLink>
      </div>
    </div>
  </section>
  <!-- Benner Section End  -->

  <!-- Footer Section Start -->
  <Footer />
  <!-- Footer Section End -->
</template>

<script>
export default {
  data() {
    return {

    }
  },

  mounted() {
    const wafe1 = document.getElementById("wafe1");
    const wafe2 = document.getElementById("wafe2");
    const wafe3 = document.getElementById("wafe3");
    const wafe4 = document.getElementById("wafe4");
    const name = document.getElementById("name");

    if (wafe1 && wafe2 && wafe3 && wafe4) {
      window.addEventListener("scroll", () => {
        const value = window.scrollY;

        wafe1.style.backgroundPositionX = 700 + value * 4 + "px";
        wafe2.style.backgroundPositionX = 900 + value * -4 + "px";
        wafe3.style.backgroundPositionX = 500 + value * 2 + "px";
        wafe4.style.backgroundPositionX = 100 + value * -2 + "px";
      });
    }

    if (name) {
      window.addEventListener("scroll", () => {
        const value = window.scrollY;
        name.style.position = "relative"; // Pastikan position diatur
        name.style.top = value * 0.5 + "px"; // Gerakan lebih halus
      });
    }
  },
};
</script>

<style>
.wafe {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background-image: url("/assets/aset/wafe.png");
  animation: animate 4s ease-in-out infinite;
  animation-delay: calc(var(--i) * 0.25s);
}

#name {
  position: relative;
  transition: top 0.1s ease-out;
}

#wafe1 {
  z-index: 20;
  opacity: 1;
  background-position-x: 700px;
}

#wafe2 {
  z-index: 19;
  opacity: 0.5;
  background-position-x: 900px;
}

#wafe3 {
  z-index: 18;
  opacity: 0.2;
  background-position-x: 500px;
}

#wafe4 {
  z-index: 19;
  opacity: 0.7;
  background-position-x: 100px;
}

@keyframes animate {

  0%,
  100% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(10px);
  }
}
</style>
