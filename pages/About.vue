<script setup>
  import Navbar from './components/Navbar.vue';
</script>

<template>
    <!-- Navbar Section Start-->
    <Navbar />
    <!-- Navbar Section End -->

    <!-- Photos Section Start -->
    <section class="mt-20">
      <div class="flex w-full h-80">
        <img src="/assets/img/about1.jpg" alt="" class="object-cover w-[288px] h-80">
        <img src="/assets/img/about4.jpg" alt="" class="object-cover w-[288px] h-80">
        <img src="/assets/img/about3.jpg" alt="" class="object-cover w-[288px] h-80">
        <img src="/assets/img/about2.jpg" alt="" class="object-cover w-[288px] h-80">
        <img src="/assets/img/about5.jpg" alt="" class="object-cover w-[288px] h-80">
      </div>
    </section>
    <!-- Photos Section End -->

    <!-- About Us Section Start -->
    <section class="my-36">
      <h1 class="mb-10 font-serif text-4xl text-center">ABOUT US</h1>
      <div class="flex justify-center gap-6"></div>
      <div class="flex justify-center w-full">
        <div class="w-[1000px] text-center text-orangprim font-basker ">
        Batik Indonesia bukan hanya sekadar kain; ia adalah warisan budaya yang memiliki nilai sejarah dan estetika tinggi. Dengan motif-motif yang kaya akan simbolisme, setiap helai batik menceritakan kisah leluhur yang telah diwariskan dari generasi ke generasi. Menjadi bagian dari budaya Nusantara, batik adalah wujud kebanggaan dan identitas bangsa yang patut dilestarikan. Melalui inovasi e-commerce, kami berharap dapat memperkenalkan dan mendekatkan keindahan batik kepada masyarakat luas, baik di dalam negeri maupun internasional, sehingga setiap orang dapat merasakan sentuhan tradisi dan keanggunan dalam setiap desainnya. Kami tidak hanya menjual batik, tetapi juga menghadirkan makna dan nilai yang terkandung di dalamnya. <br> <br> Dengan menghadirkan batik melalui platform e-commerce, kami mempermudah masyarakat untuk memiliki akses terhadap produk-produk berkualitas yang terinspirasi dari kekayaan budaya Indonesia. Kami bekerja sama dengan para perajin lokal untuk memastikan bahwa setiap produk batik yang dijual tidak hanya indah, tetapi juga autentik dan dibuat dengan hati. Dalam setiap pembelian, pelanggan tidak hanya mendapatkan produk, tetapi juga turut mendukung kelestarian budaya dan ekonomi lokal. Kami percaya bahwa batik Indonesia dapat menjadi pilihan busana yang modern dan relevan tanpa menghilangkan nilai tradisi, dan kami berkomitmen untuk terus memperkenalkannya kepada dunia.
      </div>
      </div>
    </section>
    <!-- About Us Section End -->

    <section class="flex w-full h-96 justify-evenly">
      <img src="/assets/aset/satu.png" alt="">
      <img src="/assets/aset/satu.png" alt="">
      <img src="/assets/aset/satu.png" alt="">
    </section>

    <!-- Footer Section Start -->
    <footer class="flex flex-col items-center justify-center border-t-2 mt-52 ">
    <div class="w-full py-10">
    <div class="flex items-center justify-between  max-w-[1100px] mx-auto h-64 gap-8">
      
      <div class="w-[550px]">
        <h1 class="font-serif text-2xl">Batik Indonesia</h1>
        <p class="italic text-orange-700 font-basker">Keindahan Abadi Warisan Para Leluhur</p>
        <!-- <div class="flex gap-3 mt-4">
          Ikon Media Sosial
          <a href="#"><img src="whatsapp-icon.png" alt="WhatsApp" class="w-6 h-6"></a>
          <a href="#"><img src="instagram-icon.png" alt="Instagram" class="w-6 h-6"></a>
          <a href="#"><img src="facebook-icon.png" alt="Facebook" class="w-6 h-6"></a>
          <a href="#"><img src="tiktok-icon.png" alt="TikTok" class="w-6 h-6"></a>
        </div> -->
      </div>

      <div class="w-[550px] flex gap-12 justify-center">
        <div>
          <h1 class="mb-2 text-lg italic font-basker">House of Batik Indonesia</h1>
          <div class="font-serif">
            <div>Home</div>
            <div>Shop</div>
            <div>About Us</div>
            <div>Contact Us</div>
          </div>
        </div>
        
        <div>
          <h1 class="mb-2 text-lg italic font-basker">Products</h1>
          <div class="font-serif">
            <div>Baju</div>
            <div>Dress</div>
            <div>Kain</div>
            <div>Aksesoris</div>
          </div>
        </div>
      </div>
      </div>
    </div>
    <div class="w-full py-2 italic text-center text-white bg-black font-basker">#INDONESIASOGEH</div>
    </footer>
    <!-- Footer Section End -->
</template>