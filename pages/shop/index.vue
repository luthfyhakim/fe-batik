<script setup>
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import { ref, watch } from 'vue';

const API = 'http://localhost:8080';
const route = useRoute();
const router = useRouter();

// Membuat fungsi debounce manual
const debounce = (fn, wait) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            fn(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

// Memindahkan fungsi fetch ke dalam fungsi terpisah
const fetchData = async () => {
    try {
        // Menangani kasus ketika tidak ada query parameter
        const queryString = route.fullPath.includes('?') ? route.fullPath.split('?')[1] : '';

        const [produk, kategori] = await Promise.all([
            $fetch(`${API}/produk${queryString ? `?${queryString}` : ''}`),
            $fetch(`${API}/kategori`)  // Mengambil semua kategori tanpa query
        ]);
        return { produk, kategori };
    } catch (error) {
        console.error('Error fetching data:', error);
        return {
            produk: { data: [] },
            kategori: { data: [] }
        };
    }
};

// Menggunakan ref untuk menyimpan data
const produkData = ref({
    produk: { data: [] },
    kategori: { data: [] }
});

// Fungsi untuk memperbarui data
const updateData = async () => {
    try {
        produkData.value = await fetchData();
    } catch (error) {
        console.error('Error updating data:', error);
    }
};

// Initial fetch dengan error handling
const { data: initialData } = await useAsyncData('produk', async () => {
    try {
        return await fetchData();
    } catch (error) {
        console.error('Error in initial fetch:', error);
        return {
            produk: { data: [] },
            kategori: { data: [] }
        };
    }
});

if (initialData.value) {
    produkData.value = initialData.value;
}

// Membuat debounced version dari updateData
const debouncedUpdate = debounce(updateData, 300);

// Watch route query changes dengan debounce
watch(
    () => route.query,
    async () => {
        await debouncedUpdate();
    },
    { deep: true }
);

// Inisialisasi size dari query parameter jika ada
const selectedSize = ref(route.query.size || 'S');
const sizes = ['S', 'M', 'L', 'XL', 'XXL', '3XL', '4XL'];

// Handle size filter
const handleSizeClick = async (size) => {
    selectedSize.value = size;

    // Mendapatkan query parameters saat ini
    const currentQuery = { ...route.query };

    // Update size parameter
    if (size) {
        currentQuery.size = size;
    } else {
        delete currentQuery.size;
    }

    // Update URL dengan query parameter baru
    await router.push({
        path: route.path,
        query: currentQuery
    });
};

// Handle apply filter
const handleApplyFilter = async () => {
    // Mendapatkan query parameters saat ini
    const currentQuery = { ...route.query };

    // Update size parameter
    if (selectedSize.value) {
        currentQuery.size = selectedSize.value;
    } else {
        delete currentQuery.size;
    }

    // Update URL dengan query parameter baru
    await router.push({
        path: route.path,
        query: currentQuery
    });
};

// Handle reset filter
const handleResetFilter = async () => {
    selectedSize.value = 'S';
    // Hapus parameter size dari URL, tapi pertahankan parameter lainnya seperti kategori
    const newQuery = { ...route.query };
    delete newQuery.size;

    await router.push({
        path: route.path,
        query: newQuery
    });
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
            <template v-if="route.query.size">
                <img src="/assets/aset/Frame.svg" alt="">
                <span class="text-sm text-gray-700 font-basker">Size: {{ route.query.size }}</span>
            </template>
        </div>
    </section>
    <!-- Path End -->

    <!-- Main Section Start -->
    <section class="flex justify-center mt-10">
        <div class="w-[1060px] max-h-min flex gap-5">
            <!-- Aside Start -->
            <aside class="w-[300px] max-h-min rounded-md border-2 ">
                <div class="m-5">
                    <div class="flex justify-between my-4">
                        <h1 class="font-semibold font-basker">Filters</h1>
                        <button @click="handleResetFilter" class="text-sm text-gray-500 hover:text-black">
                            Reset
                        </button>
                    </div>

                    <div class="w-full h-[1px] bg-gray-200"></div>

                    <div class="my-5">
                        <h1 class="mb-3 font-semibold font-basker">Category</h1>
                        <NuxtLink v-for="kategori in produkData?.kategori?.data" :key="kategori.id_kategori"
                            class="flex justify-between mb-3"
                            :to="`/shop?id_kategori=${kategori.id_kategori}${selectedSize.value ? `&size=${selectedSize.value}` : ''}`">
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

                    <button @click="handleApplyFilter"
                        class="w-full py-2 my-10 text-sm text-center text-white bg-black rounded-full cursor-pointer font-basker hover:bg-orangprim">
                        Apply Filter
                    </button>
                </div>
            </aside>
            <!-- Aside End -->

            <!-- Catalog Start -->
            <div class="w-[780px]">
                <div class="flex items-center justify-between mb-5">
                    <h1 class="text-3xl font-medium text-black font-basker">
                        {{ route.query.size ? `Size ${route.query.size}` : 'All Sizes' }}
                    </h1>
                    <div class="flex items-center gap-2">
                        <h4 class="text-xs text-gray-500 font-basker">
                            Showing {{ produkData?.produk?.data?.length || 0 }} Products
                        </h4>
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

                <!-- Loading state -->
                <div v-if="$fetchState?.pending" class="text-center py-10">
                    Loading...
                </div>

                <!-- Error state -->
                <div v-else-if="$fetchState?.error" class="text-center py-10 text-red-500">
                    Error loading products. Please try again.
                </div>

                <!-- Products grid -->
                <div v-else-if="produkData?.produk?.data?.length" class="grid w-full grid-cols-3 gap-5 mb-6">
                    <NuxtLink v-for="produk in produkData.produk.data" :key="produk.id_produk"
                        :to="`/shop/product/${produk.id_produk}`" class="w-[240px]">
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
                        <h1 class="text-base font-semibold font-basker">
                            Rp. {{ produk.harga?.toLocaleString('id-ID') }}
                        </h1>
                    </NuxtLink>
                </div>

                <!-- No products state -->
                <div v-else class="text-center py-10">
                    No products found.
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
    <!-- Above End -->

    <!-- Footer Section Start -->
    <Footer />
    <!-- Footer Section End -->
</template>