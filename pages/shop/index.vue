<script setup>
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import { ref } from 'vue';

const API = 'http://localhost:8080';

const route = useRoute()

// const { data: produk } = await useAsyncData('produk', async () => {
//     const [produk, kategori] = await Promise.all([
//         $fetch(`${API}/produk?${route.fullPath.split('?')[1]}`),
//         $fetch(`${API}/kategori?${route.fullPath.split('?')[1]}`)
//     ])

//     return { produk, kategori }
// })

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

const kategori = [
    {
        id_kategori: 1,
        nama_kategori: "Pria"
    },
    {
        id_kategori: 2,
        nama_kategori: "Wanita"
    },
    {
        id_kategori: 3,
        nama_kategori: "Aksesoris"
    }
];

const selectedSize = ref('S')
const sizes = ['S', 'M', 'L', 'XL', 'XXL', '3XL', '4XL'];

const handleSizeClick = (size) => {
    selectedSize.value = size
};
</script>

<template>
    <!-- Navbar Section Start-->
    <Navbar />
    <!-- Navbar Section End -->

    <!-- Path Start -->
    <section class="flex justify-center w-full mt-36">
        <div class="w-[1024px] flex gap-2 bg-white">
            <NuxtLink to="/" class="text-sm text-gray-700 font-basker">Home</NuxtLink>
            <img src="/assets/aset/Frame.svg" alt="">
            <NuxtLink to="/shop" class="text-sm text-gray-700 font-basker">Shop</NuxtLink>
        </div>
    </section>
    <!-- Path Start -->

    <!-- Main Section Start -->
    <section class="flex justify-center mt-10">
        <div class="  w-[1060px] max-h-min flex gap-5">

            <!-- Aside Start -->
            <aside class="w-[300px] max-h-min rounded-md border-2 ">
                <div class="m-5">
                    <div class="flex justify-between my-4">
                        <h1 class="font-semibold font-basker">Filters</h1>
                        <img src="/assets/aset/filter.svg" class="w-5">
                    </div>

                    <div class="w-full h-[1px] bg-gray-200"></div>

                    <div class="my-5">
                        <h1 class="mb-3 font-semibold font-basker">Category</h1>
                        <NuxtLink v-for="kategori in kategori" class="flex justify-between mb-3">
                            <h3 class="text-gray-500 font-basker">{{ kategori.nama_kategori }}</h3>
                            <img src="/assets/aset/samping.svg">
                        </NuxtLink>
                    </div>

                    <div class="w-full h-[1px] bg-gray-200"></div>

                    <div class="my-5">
                        <h1 class="mb-3 font-semibold font-basker">Size</h1>
                        <div class="flex flex-wrap gap-2">
                            <button v-for="size in sizes" :key="size" @click="handleSizeClick(size)"
                                class="px-5 py-1 font-serif rounded-full transition-colors duration-200" :class="[
                                    selectedSize === size
                                        ? 'bg-black text-white'
                                        : 'bg-slate-100 hover:bg-slate-200'
                                ]">
                                {{ size }}
                            </button>
                        </div>
                    </div>

                    <div
                        class="w-full py-2 my-10 text-sm text-center text-white bg-black rounded-full cursor-pointer font-basker hover:bg-orangprim ">
                        Apply Filter</div>
                </div>
            </aside>
            <!-- Aside End -->

            <!-- Catalog Start -->
            <div class="w-[780px]">
                <div class="flex items-center justify-between mb-5">
                    <h1 class="text-3xl font-medium text-black font-basker">Casual</h1>
                    <div class="flex items-center gap-2">
                        <h4 class="text-xs text-gray-500 font-basker">Showing 1-10 of 100 Products</h4>
                        <div class="flex gap-1">
                            <form action="">
                                <label for="" class="text-xs text-gray-500 font-basker">Sort By:</label>
                                <select name="" id="" class="text-xs font-bold font-basker">
                                    <option value="populer">Most Popular</option>
                                    <option value="liked">Most Liked</option>
                                    <option value="latest">Latest</option>
                                    <option value="expensive">Most Expensive</option>
                                    <option value="cheapeast">Most Cheapeast</option>
                                </select>
                            </form>
                        </div>
                    </div>
                </div>

                <div class="grid w-full grid-cols-3 gap-5 mb-6">
                    <NuxtLink v-for="produk in data" :to="`/shop/product/${produk.id_produk}`" class="w-[240px]">
                        <img :src="`/_nuxt/assets/img/${produk.foto}`" alt="produk"
                            class="object-cover w-full my-2 rounded-md h-72">
                        <h1 class="font-serif text-2xl">{{ produk.nama_produk }}</h1>
                        <div class="flex gap-2 my-1">
                            <img src="/assets/img/star.png" class="w-4">
                            <img src="/assets/img/star.png" class="w-4">
                            <img src="/assets/img/star.png" class="w-4">
                            <img src="/assets/img/star.png" class="w-4">
                            <img src="/assets/img/star.png" class="w-4">
                        </div>
                        <h1 class="text-base font-semibold font-basker ">Rp. {{ produk.harga.toLocaleString('id-ID') }}
                        </h1>
                    </NuxtLink>
                </div>
            </div>
        </div>
        <!-- Catalog End -->
    </section>
    <!-- Main Section End -->

    <!-- Above Start -->
    <section class="flex justify-center w-full mt-36">
        <div class="w-[900px] bg-white">
            <div class="w-full h-[1px] bg-gray-200 mb-6"></div>
            <div class="flex justify-evenly ">
                <div class="flex gap-2 px-3 py-2 rounded-2xl bg-slate-100">
                    <img src="/assets/aset/arrow-left.svg" alt="">
                    <h1 class="text-sm font-basker ">Previous</h1>
                </div>
                <div class="flex gap-3">
                    <div class="px-4 py-1 text-xl rounded font-basker bg-slate-100">1</div>
                    <div class="px-4 py-1 text-xl rounded font-basker bg-slate-100">2</div>
                    <div class="px-4 py-1 text-xl rounded font-basker bg-slate-100">3</div>
                </div>
                <div class="flex gap-2 px-3 py-2 rounded-2xl bg-slate-100">
                    <h1 class="text-sm font-basker ">Next</h1>
                    <img src="/assets/aset/arrow-right.svg">
                </div>
            </div>
        </div>
    </section>
    <!-- Above Start -->

    <!-- Footer Section Start -->
    <Footer />
    <!-- Footer Section End -->
</template>