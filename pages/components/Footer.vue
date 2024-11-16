<template>
  <footer class="flex flex-col items-center justify-center border-t-2 mt-96">
    <div class="w-full py-10">
      <div class="flex items-center justify-between  max-w-[1100px] mx-auto h-64 gap-8">
        <div class="w-[550px]">
          <h1 class="font-serif text-2xl">Batik Indonesia</h1>
          <p class="italic text-orange-700 font-basker">Keindahan Abadi Warisan Para Leluhur</p>
        </div>

        <div class="w-[550px] flex gap-12 justify-center">
          <div>
            <h1 class="mb-2 text-lg italic font-basker">House of Batik Indonesia</h1>
            <div class="font-serif grid grid-cols-1">
              <NuxtLink to="/">Home</NuxtLink>
              <NuxtLink to="/shop">Shop</NuxtLink>
              <NuxtLink to="/">About Us</NuxtLink>
            </div>
          </div>
          
          <div>
            <h1 class="mb-2 text-lg italic font-basker">Products</h1>
            <div class="font-serif grid grid-cols-1">
              <div>Baju</div>
              <div>Dress</div>
              <div>Kain</div>
              <div>Aksesoris</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <NuxtLink to="/team" class="w-full py-2 italic text-center text-white bg-black font-basker">#INDONESIASOGEH</NuxtLink>
  </footer>
</template>