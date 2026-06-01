<template>
  <!-- Hero Section -->
  <section
    class="relative h-[70vh] bg-cover bg-center"
    style="background-image: url('/images/videos/video-banner.jpg')"
  >
    <div class="absolute inset-0 bg-black/60"></div>

    <div class="relative z-10 flex items-center justify-center h-full text-center px-6">
      <div class="text-white">
        <h1 class="text-6xl font-bold mb-6">
          Rwanda Tourism Videos
        </h1>

        <p class="text-xl max-w-3xl mx-auto">
          Watch stunning videos showcasing Rwanda's wildlife, landscapes,
          culture, national parks, lakes, cities, and unforgettable
          tourism experiences.
        </p>
      </div>
    </div>
  </section>

  <!-- Introduction -->
  <section class="py-16 bg-white">
    <div class="max-w-6xl mx-auto px-6 text-center">
      <h2 class="text-4xl font-bold text-green-700 mb-6">
        Explore Rwanda Through Video
      </h2>

      <p class="text-lg text-gray-700">
        Experience the beauty of the Land of a Thousand Hills through
        breathtaking videos featuring mountain gorillas, Lake Kivu,
        Akagera National Park, Kigali City, Nyungwe Forest, and much more.
      </p>
    </div>
  </section>

  <!-- Videos Grid -->
  <section class="bg-gray-100 py-20">
    <div class="max-w-7xl mx-auto px-6">

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

        <!-- Video 1 -->
        <div class="bg-white rounded-xl shadow-lg overflow-hidden">
          <video
            controls
            class="w-full h-64 object-cover"
            poster="/images/videos/gorilla-thumbnail.jpg"
          >
            <source src="/videos/gorilla-trekking.mp4" type="video/mp4">
          </video>

          <div class="p-5">
            <h3 class="text-2xl font-bold text-green-700">
              Gorilla Trekking
            </h3>

            <p class="text-gray-600 mt-2">
              Experience the world-famous mountain gorillas in Volcanoes
              National Park.
            </p>
          </div>
        </div>

       

        <!-- Video 3 -->
        <div class="bg-white rounded-xl shadow-lg overflow-hidden">
          <video
            controls
            class="w-full h-64 object-cover"
            poster="/images/videos/akagera-thumbnail.jpg"
          >
            <source src="/videos/akagera-safari.mp4" type="video/mp4">
          </video>

          <div class="p-5">
            <h3 class="text-2xl font-bold text-green-700">
              Akagera Safari
            </h3>

            <p class="text-gray-600 mt-2">
              Witness lions, elephants, giraffes, zebras, and more in
              Rwanda's savannah park.
            </p>
          </div>
        </div>

       

        <!-- Video 6 -->
        <div class="bg-white rounded-xl shadow-lg overflow-hidden">
          <video
            controls
            class="w-full h-64 object-cover"
            poster="/images/videos/culture-thumbnail.jpg"
          >
            <source src="/videos/rwandan-culture.mp4" type="video/mp4">
          </video>

          <div class="p-5">
            <h3 class="text-2xl font-bold text-green-700">
              Rwandan Culture
            </h3>

            <p class="text-gray-600 mt-2">
              Experience traditional dances, ceremonies, music, and local
              heritage.
            </p>
          </div>
        </div>

      </div>

    </div>
  </section>

  <!-- Tourism Message -->
  <section class="bg-green-700 text-white py-20">
    <div class="max-w-5xl mx-auto text-center px-6">
      <h2 class="text-4xl font-bold mb-6">
        See Rwanda Come Alive
      </h2>

      <p class="text-xl leading-relaxed">
        Videos provide a glimpse into Rwanda's beauty, but the true magic
        is experienced in person. From mountain gorillas and scenic lakes
        to vibrant cities and rich cultural traditions, Rwanda offers
        unforgettable memories for every visitor.
      </p>
    </div>
  </section>
</template>

<!-- public/
│
├── videos/
│   ├── gorilla-trekking.mp4
│   ├── lake-kivu.mp4
│   ├── akagera-safari.mp4
│   ├── kigali-city.mp4
│   ├── nyungwe-forest.mp4
│   └── rwandan-culture.mp4
│
└── images/
    └── videos/
        ├── video-banner.jpg
        ├── gorilla-thumbnail.jpg
        ├── lake-kivu-thumbnail.jpg
        ├── akagera-thumbnail.jpg
        ├── kigali-thumbnail.jpg
        ├── nyungwe-thumbnail.jpg
        └── culture-thumbnail.jpg -->


