<template>
  <nav class="fixed top-0 left-0 z-50 w-full pt-3 bg-white shadow-lg">
    <div class="flex items-center justify-evenly">
      <div></div>
      <div class="py-2 font-serif text-4xl text-center">Batik Indonesia</div>
      <NuxtLink to="/cart"><img src="/assets/aset/cart.svg" class="w-6 cursor-pointer"></NuxtLink>
    </div>
    <div class="flex justify-center w-full gap-5 py-1 border-[1px] border-orangprim">
      <NuxtLink to="/" class="font-serif text-xl text-orangprim">Home</NuxtLink>
      <NuxtLink to="/shop" class="font-serif text-xl text-orangprim">Shop</NuxtLink>
      <NuxtLink to="/about" class="font-serif text-xl text-orangprim">About Us</NuxtLink>
      
      <NuxtLink
        to="/login"
        class="font-serif text-xl text-orangprim ml-2 px-2 hover:bg-orange-300 bg-orange-200 cursor-pointer rounded-md"
      >
        Sign In
      </NuxtLink>
      <NuxtLink 
        to="/register"
        class="font-serif text-xl text-orangprim px-2 hover:bg-orange-300 bg-orange-200 cursor-pointer rounded-md"
      >
        Register
      </NuxtLink>
    </div>
  </nav>
</template>