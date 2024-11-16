<template>
    <section class="flex items-center justify-center w-full h-screen ">
        <div class="  h-[500px] w-[800px] grid grid-cols-2 rounded-xl bg-slate-50 border-gray-400 border-[1px]">
            <div class="flex items-center justify-center w-full h-full ">
                <div class="w-[350px] h-[450px] bg-black rounded-lg">
                    <img src="/assets/img/signup.jpg" class="object-cover w-full h-full rounded-md ">
                </div>
            </div>

            <div class="flex items-center justify-center w-full h-full ">
                <div class="w-[300px] max-h-min  ">
                    <h1 class="mb-1 font-serif text-xs text-center text-slate-700">Batik Indonesia</h1>
                    <h1 class="mb-6 font-serif text-5xl font-semibold text-center text-orangprim">Sign Up</h1>
                    <form action="/registerform" method="post">

                        <label for="email">
                            <span class=" mt-2 block mb-2 text-sm font-basker text-slate-700 after:content-['*'] after:text-red-600 after:ml-1">Email</span>
                            
                            <input type="email" placeholder="masukkan email" id="email" class="w-full px-3 py-2 text-xs border border-gray-400 shadow text-orangprim rounded-xl placeholder:text-gray-400 font-basker focus:outline-none focus:ring1 focus:ring-orangprim focus:border-orangprim invalid:text-pink-900 invalid:focus:ring-pink-700 invalid:focus:border-pink-700 peer">
                            <p class="invisible m-1 text-xs text-pink-900 peer-invalid:visible">Email tidak valid</p>
                        </label>

                        <button type="submit" class="w-full py-[6px] mt-6 text-white transition rounded-3xl bg-orangprim hover:bg-black font-basker">Get Started</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>