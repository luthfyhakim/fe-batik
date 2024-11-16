<script setup>
  import Navbar from '~/pages/components/Navbar.vue';
  import Footer from '~/pages/components/Footer.vue';
  import { usePurchaseStore } from '~/stores/purchaseStore';
  import { useHomeStore } from '~/stores/homeStore';

  const store = usePurchaseStore();
  const homeStore = useHomeStore();
</script>

<template>
    <!-- Navbar Section Start-->
    <Navbar />
    <!-- Navbar Section End -->

    <!-- Main Section Start -->
     <section class="flex justify-center mt-40">
        
        <div class="  w-[1060px] max-h-min flex gap-5">

            <!-- Catalog Start -->
            <div class="w-[780px] h-[500px]">
                <!-- Remind User --> 
                <div class="flex justify-center w-full py-3 mb-8 text-lg text-center text-white font-basker bg-orangprim rounded-xl">
                    Ini halaman terakhir dari proses belanjamu!
                </div>

                <!-- Detail Pembelian Start -->
                 <div class="flex justify-center">
                    <div class="w-[640px] h-96 ">

                        <!-- Barang yang di beli -->
                        <div class="w-full mb-10 ">
                            <h1 class="mb-2 font-semibold font-basker text-base text-orangprim p-[2px]">Produk dipesan</h1>
                            <div class=" border-[1px] border-slate-100  shadow rounded-lg">
                                <div class="flex items-center gap-3 p-3">
                                    <img :src="`/_nuxt/assets/img/${store.productData.foto}`" class="object-cover w-16 h-20 rounded-lg bg-slate-100 ">
                                    <div class="w-full p-3 ">
                                        <h1 class="mb-2 text-base font-basker">{{ store.productData.nama_produk }}</h1>
                                        <div class="flex justify-between">
                                            <div class="flex gap-2 mb-2 ">
                                            <div class="px-5 py-[2px] rounded-full font-basker bg-slate-200">{{ store.selectedSize }}</div>
                                            <div class="px-5 py-[2px] rounded-full font-basker bg-slate-200">{{ store.quantity }} Item</div>
                                        </div>
                                        <h1 class="text-base font-semibold font-basker">Rp. {{ store.formattedTotalPrice }}</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                            </div>
                        </div>


                        <!-- Pengiriman dan Pembayaran -->
                        <div class="w-full mb-14 ">
                            <h1 class="mb-2 font-semibold font-basker text-base  text-orangprim p-[2px]">Pengiriman dan Metode Pembayaran</h1>
                            <div class=" border-[1px] border-slate-100 shadow rounded-lg h-52">
                                <div class="flex items-center gap-3 px-4 pt-5 pb-[2px]">
                                    <div class="flex items-center gap-2">
                                        <h1 class="font-bold font-basker text-slate-700">Lokasi : </h1>
                                        <p class="text-sm font-basker text-slate-600"> Cagit Dian A'yunin </p>
                                        <div class="font-bold font-basker text-slate-700"> - </div>
                                        <p class="text-sm font-basker text-slate-500">(081231201809)</p>
                                    </div>
                                </div>
                                
                                <div class="px-4 text-sm font-basker text-slate-600">
                                    Jl. Veteran No.10-11, Ketawanggede, Kec. Lowokwaru, Kota Malang, Jawa Timur 65145
                                </div>

                                <div class=" h-[1px] bg-gray-200 my-5 px-4"></div>

                                <div class="grid grid-cols-2 gap-3 px-4">
                                    <div class="h-6 font-bold text-slate-700 ">
                                        <h1 class="mb-3 font-semibold font-basker">Pilihan Pengiriman</h1>
                                        <form action="">
                                            <label for="" class="text-xs text-gray-500 font-basker"></label>
                                            <select 
                                              v-model="store.shippingMethod"
                                              class="w-full py-2 text-xs font-bold border rounded font-basker">
                                                <option value="same-day">Same Day 8 Jam (Rp 70.000) </option>
                                                <option value="reguler">Reguler (Rp 12.000)</option>
                                                <option value="cargo">Kargo (Rp 55.000)</option>
                                                <option value="economy">Ekonomi (Rp 7.500)</option>
                                            </select>
                                        </form>
                                    </div>
                                    <div class="h-6 font-bold text-slate-700">
                                        <h1 class="mb-3 font-semibold font-basker">Pilihan Pembayaran</h1>
                                        <form action="">
                                            <label for="" class="text-xs text-gray-500 font-basker"></label>
                                            <select 
                                              v-model="store.paymentMethod"
                                              class="w-full py-2 text-xs font-bold border rounded font-basker">
                                                <option value="bca">Bank BCA</option>
                                                <option value="mandiri">Bank Mandiri</option>
                                                <option value="indomaret">Indomart</option>
                                                <option value="alfamaret">Alfamart</option>
                                                <option value="ovo">OVO</option>
                                                <option value="dana">DANA</option>
                                            </select>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div>
                            </div>
                        </div>
                    </div>
                 </div>
                <!-- Detail Pembelian End -->
                 
            </div>
            <!-- Catalog End -->

            <!-- Aside Start -->
            <aside class="w-[300px] max-h-min rounded-md border-2 ">
                <div class="m-5">
                    <h1 class="my-4 font-semibold font-basker text-orangprim">Ringkasan Belanja</h1>

                    <div class="w-full h-[1px] bg-gray-200"></div>

                    <div class="my-5">
                        <h1 class="mb-3 font-semibold font-basker">Total Belanja</h1>
                        <div class="flex justify-between mb-2">
                            <h3 class="text-sm text-gray-500 font-basker">Total Harga</h3>
                            <p class="text-sm text-gray-500 font-basker">Rp. {{ store.formattedTotalPrice }}</p>     
                        </div>
                        <div class="flex justify-between mb-2">
                            <h3 class="text-sm text-gray-500 font-basker">Total Ongkos</h3>
                            <p class="text-sm text-gray-500 font-basker">Rp. {{ store.formattedShippingCost }}</p>
                        </div>
                    </div>

                    <div class="w-full h-[1px] bg-gray-200"></div>

                    <div class="my-5">
                        <h1 class="mb-3 font-semibold font-basker">Biaya Transaksi</h1>
                        <div class="flex justify-between mb-2">
                            <h3 class="text-sm text-gray-500 font-basker">Biaya Transaksi</h3>
                            <p class="text-sm text-gray-500 font-basker">Rp. {{ store.transactionFee }}</p>  
                        </div>
                        <div class="flex justify-between mb-2">
                            <h3 class="text-sm text-gray-500 font-basker">Discount</h3>
                            <p class="text-sm text-gray-500 font-basker">Rp. {{ store.discount }}</p>  
                        </div>
                    </div>

                    <div class="w-full h-[1px] bg-gray-200"></div>
                    <div class="flex justify-between my-4">
                        <h1 class="mb-3 font-semibold text-orangprim font-basker">Biaya Transaksi</h1>
                        <p class="font-semibold text-orangprim font-basker">Rp. {{ store.finalTotalPrice.toLocaleString('id-ID') }}</p>
                    </div>

                    <button @click="homeStore.removeFromCart(store.productData)" class="w-full bg-black hover:bg-orangprim text-center rounded-full py-2">
                      <NuxtLink 
                      :to="`/shop/product/${store.productData.id_produk}/invoice`"
                      class="w-full text-sm text-center text-white cursor-pointer mb-7 m7-10 font-basker "
                    >
                      Buy Now!
                      </NuxtLink>
                    </button>
                </div>
             </aside>
            <!-- Aside End -->
        </div>
     </section>
    <!-- Main Section End -->

    <!-- Footer Section Start -->
    <Footer />
    <!-- Footer Section End -->
</template>