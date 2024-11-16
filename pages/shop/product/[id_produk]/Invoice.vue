<script setup>
  import Navbar from '~/pages/components/Navbar.vue';
  import { usePurchaseStore } from '~/stores/purchaseStore';
  
  const store = usePurchaseStore();
</script>

<template>
  <!-- Navbar Section Start-->
  <Navbar />
  <!-- Navbar Section End -->
     
  <section class="flex items-center justify-center ">
    <div class=" my-28  w-[900px] object-cover  rounded-xl   flex justify-center items-center">
      <div class="w-[750px] my-10 ">
        <h1 class="mb-[1px] font-serif text-xs text-center text-slate-700">Batik Indonesia</h1>
        <h1 class="mb-10 font-serif text-5xl font-semibold text-center text-orangprim">Detail Pembelian</h1>

        <div class="border-[1px] border-orangprim rounded-lg  p-7 shadow-lg shadow-orangprim " >
          <div class="flex justify-between w-full">
            <div class="flex items-center gap-2 mb-4">
              <h1 class="font-bold font-basker text-slate-600">Belanja : </h1>
              <p class="text-sm font-basker text-slate-700"> {{ store.orderDate }} </p>
            </div>
            <img src="/assets/aset/verified.svg" class="w-8">
          </div>

          <div class="w-full h-[1px] my-4 bg-gray-200"></div>

          <h1 class="mb-1 font-semibold font-basker text-base text-orangprim p-[2px]">Produk yang Dipesan</h1>
          <div class="flex items-center gap-3 p-3">
              <img :src="`/_nuxt/assets/img/${store.productData.foto}`" class="object-cover w-16 h-20 rounded-lg bg-slate-100 ">
              <div class="w-full p-3 ">
                  <h1 class="mb-2 text-sm font-basker text-slate-600">{{ store.productData.nama_produk }}</h1>
                    <div class="flex justify-between">
                      <div class="flex gap-2 mb-2 ">
                          <div class="px-5 py-[2px] rounded-full font-basker bg-slate-100">{{ store.selectedSize }}</div>
                          <div class="px-5 py-[2px] rounded-full font-basker bg-slate-100">{{ store.quantity }} Item</div>
                          <h1 class="text-base font-base font-basker">Rp. {{ store.formattedTotalPrice }}</h1>
                      </div>
                      <h1 class="text-xl font-semibold font-basker">Rp. {{ store.finalTotalPrice.toLocaleString('id-ID') }}</h1>
                    </div>
              </div>
          </div>

          <div class="w-full h-[1px] my-4 bg-gray-200"></div>
        
          <h1 class="mb-1 font-semibold font-basker text-base text-orangprim p-[2px]">Informasi</h1>
          <div class="text-sm font-basker text-slate-600">
            <div class="flex justify-between">
              <p>No. Invoice</p>
              <p>INV/79798790/SHDSGU6/790</p>
            </div>
            <div class="flex justify-between">
              <p>No. Resi</p>
              <p>TKP01-DVMW901J</p>
            </div>
            <div class="flex justify-between">
              <p>Pilihan Pengiriman</p>
              <p>{{ store.shippingMethod }} </p>
            </div>
            <div class="flex justify-between">
              <p>Pilihan Pembayaran</p>
              <p>{{ store.paymentMethod }}</p>
            </div>
            <div class="flex justify-between">
              <p>Status Pengiriman</p>
              <p class="text-lg font-semibold text-orangprim ">Selesai</p>  <!-- Ada status selesai, pengiriman-->
            </div>
          </div>

          <div class="w-full h-[1px] my-4 bg-gray-200"></div>

          <h1 class="my-4 font-semibold font-basker text-orangprim">Ringkasan Belanja</h1>
          <div>
            <div class="flex justify-between ">
                <h3 class="text-sm text-gray-500 font-basker">Total Harga</h3>
                <p class="text-sm text-gray-500 font-basker">Rp. {{ store.formattedTotalPrice }}</p>
            </div>
            <div class="flex justify-between ">
                <h3 class="text-sm text-gray-500 font-basker">Total Ongkos</h3>
                <p class="text-sm text-gray-500 font-basker">(+) RP. {{ store.formattedShippingCost }}</p>        
            </div>
            <div class="flex justify-between ">
                <h3 class="text-sm text-gray-500 font-basker">Biaya Transaksi</h3>
                <p class="text-sm text-gray-500 font-basker">(+) RP. {{ store.transactionFee.toLocaleString('id-ID') }}</p>  
            </div>
            <div class="flex justify-between ">
                <h3 class="text-sm text-gray-500 font-basker">Discount</h3>
                <p class="text-sm text-gray-500 font-basker">(-) Rp. {{ store.discount.toLocaleString('id-ID') }}</p>  
            </div>
            <div class="flex justify-between my-4">
                <h1 class="mb-3 font-semibold text-orangprim font-basker">Total Biaya Transaksi</h1>
                <p class="text-lg font-semibold text-orangprim font-basker">RP. {{ store.finalTotalPrice.toLocaleString('id-ID') }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>