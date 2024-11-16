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
                    <h1 class="mb-4 font-serif text-5xl font-semibold text-center text-orangprim">Registration</h1>
                    <form action="/login" method="post">
                        <label for="fullname">
                            <span class="block mb-1 text-xs font-basker text-slate-700 after:content-['*'] after:text-red-600 after:ml-1">Full Name</span>
                            <input type="text" placeholder="input fullname" id="fullname" class="w-full px-3 py-2 text-xs border border-gray-400 shadow text-orangprim rounded-xl placeholder:text-gray-400 font-basker focus:outline-none focus:ring1 focus:ring-orangprim focus:border-orangprim">
                        </label>

                        <label for="Password">
                            <span class=" mt-2 block mb-1 text-xs font-basker text-slate-700 after:content-['*'] after:text-red-600 after:ml-1">Password</span>
                            
                            <input type="Password" placeholder="input password" id="Password" class="w-full px-3 py-2 text-xs border border-gray-400 shadow text-orangprim rounded-xl placeholder:text-gray-400 font-basker focus:outline-none focus:ring1 focus:ring-orangprim focus:border-orangprim invalid:text-pink-900 invalid:focus:ring-pink-700 invalid:focus:border-pink-700 peer">
                        </label>

                        <label for="nomor">
                            <span class="mt-2 block mb-1 text-xs font-basker text-slate-700 after:content-['*'] after:text-red-600 after:ml-1">No Telpon</span>
                            <input type="text" placeholder="input nomor" id="nomor" class="w-full px-3 py-2 text-xs border border-gray-400 shadow text-orangprim rounded-xl placeholder:text-gray-400 font-basker focus:outline-none focus:ring1 focus:ring-orangprim focus:border-orangprim">
                        </label>

                        <label for="alamat">
                            <span class=" mt-2 block mb-1 text-xs font-basker text-slate-700 after:content-['*'] after:text-red-600 after:ml-1">Alamat</span>
                            
                            <input type="alamat" placeholder="input alamat" id="alamat" class="w-full px-3 py-2 text-xs border border-gray-400 shadow text-orangprim rounded-xl placeholder:text-gray-400 font-basker focus:outline-none focus:ring1 focus:ring-orangprim focus:border-orangprim invalid:text-pink-900 invalid:focus:ring-pink-700 invalid:focus:border-pink-700 peer">
                        </label>

                        <button type="submit" class="w-full py-[6px] mt-6 text-white transition rounded-3xl bg-orangprim hover:bg-black font-basker">Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
        
    </section>
</template>

