<template>
  <!-- Hero Section -->
  <section
    class="relative h-[70vh] bg-cover bg-center"
    style="background-image: url('/images/gallery/rwanda-banner.jpg')"
  >
    <div class="absolute inset-0 bg-black/60"></div>

    <div class="relative z-10 flex items-center justify-center h-full">
      <div class="text-center text-white px-6">
        <h1 class="text-6xl font-bold mb-6">
          Rwanda Photo Gallery
        </h1>

        <p class="text-xl max-w-3xl mx-auto">
          Explore breathtaking photographs showcasing Rwanda's natural
          beauty, wildlife, culture, mountains, lakes, cities, and tourism
          attractions from all provinces.
        </p>
      </div>
    </div>
  </section>

  <!-- Intro -->
  <section class="py-16 bg-white">
    <div class="max-w-6xl mx-auto px-6 text-center">
      <h2 class="text-4xl font-bold text-green-700 mb-6">
        Discover Rwanda Through Pictures
      </h2>

      <p class="text-lg text-gray-700">
        From the misty volcanoes of the north to the sparkling waters of
        Lake Kivu in the west, Rwanda offers some of Africa's most stunning
        landscapes and unforgettable experiences.
      </p>
    </div>
  </section>

  <!-- Gallery -->
  <section class="bg-gray-100 py-20">
    <div class="max-w-7xl mx-auto px-6">

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

        <!-- Photo 1 -->
        <div class="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition">
          <img
            src="/images/gallery/gorillas.jpg"
            alt="Mountain Gorillas"
            class="w-full h-72 object-cover hover:scale-110 transition duration-500"
          >

          <div class="p-5">
            <h3 class="text-xl font-bold text-green-700">
              Mountain Gorillas
            </h3>
            <p class="text-gray-600 mt-2">
              Volcanoes National Park, Northern Province.
            </p>
          </div>
        </div>

        <!-- Photo 2 -->
        <div class="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition">
          <img
            src="/images/gallery/lake-kivu.jpg"
            alt="Lake Kivu"
            class="w-full h-72 object-cover hover:scale-110 transition duration-500"
          >

          <div class="p-5">
            <h3 class="text-xl font-bold text-green-700">
              Lake Kivu
            </h3>
            <p class="text-gray-600 mt-2">
              Western Province, one of Africa's most beautiful lakes.
            </p>
          </div>
        </div>

        <!-- Photo 3 -->
        <div class="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition">
          <img
            src="/images/gallery/akagera.jpg"
            alt="Akagera National Park"
            class="w-full h-72 object-cover hover:scale-110 transition duration-500"
          >

          <div class="p-5">
            <h3 class="text-xl font-bold text-green-700">
              Akagera National Park
            </h3>
            <p class="text-gray-600 mt-2">
              Home of the Big Five in Eastern Province.
            </p>
          </div>
        </div>

        <!-- Photo 4 -->
        <div class="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition">
          <img
            src="/images/gallery/nyungwe.jpg"
            alt="Nyungwe Forest"
            class="w-full h-72 object-cover hover:scale-110 transition duration-500"
          >

          <div class="p-5">
            <h3 class="text-xl font-bold text-green-700">
              Nyungwe Forest
            </h3>
            <p class="text-gray-600 mt-2">
              Ancient rainforest in Southern Province.
            </p>
          </div>
        </div>

        <!-- Photo 5 -->
        <div class="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition">
          <img
            src="/images/gallery/convention-centre.jpg"
            alt="Kigali Convention Centre"
            class="w-full h-72 object-cover hover:scale-110 transition duration-500"
          >

          <div class="p-5">
            <h3 class="text-xl font-bold text-green-700">
              Kigali Convention Centre
            </h3>
            <p class="text-gray-600 mt-2">
              The iconic symbol of Kigali City.
            </p>
          </div>
        </div>

        <!-- Photo 6 -->
        <div class="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition">
          <img
            src="/images/gallery/canopy-walk.jpg"
            alt="Canopy Walk"
            class="w-full h-72 object-cover hover:scale-110 transition duration-500"
          >

          <div class="p-5">
            <h3 class="text-xl font-bold text-green-700">
              Nyungwe Canopy Walk
            </h3>
            <p class="text-gray-600 mt-2">
              A thrilling walk above the rainforest.
            </p>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- Closing Section -->
  <section class="bg-green-700 text-white py-20">
    <div class="max-w-5xl mx-auto text-center px-6">
      <h2 class="text-4xl font-bold mb-6">
        Experience Rwanda in Person
      </h2>

      <p class="text-xl">
        Pictures tell part of the story, but nothing compares to
        experiencing Rwanda's beauty, culture, wildlife, and hospitality
        firsthand. Plan your visit and create unforgettable memories in
        the Land of a Thousand Hills.
      </p>
    </div>
  </section>
</template>




<!-- public/images/gallery/
├── rwanda-banner.jpg
├── gorillas.jpg
├── lake-kivu.jpg
├── akagera.jpg
├── nyungwe.jpg
├── convention-centre.jpg
├── canopy-walk.jpg
├── twin-lakes.jpg
├── kimironko-market.jpg
├── king-palace.jpg
├── tea-plantation.jpg
└── rubavu-beach.jpg -->