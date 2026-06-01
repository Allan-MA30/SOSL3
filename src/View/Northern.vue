<template>
  <!-- Hero Section -->
  <section
    class="relative min-h-screen bg-cover bg-center"
    style="background-image: url('/images/northern/volcanoes-national-park.jpg')"
  >
    <div class="absolute inset-0 bg-black/60"></div>

    <div
      class="relative z-10 flex flex-col justify-center items-center min-h-screen text-center text-white px-6"
    >
      <h1 class="text-6xl md:text-7xl font-bold mb-6">
        Northern Province
      </h1>

      <p class="max-w-4xl text-xl leading-relaxed">
        Welcome to Rwanda's Northern Province, home to the world-famous
        mountain gorillas, majestic volcanoes, breathtaking landscapes,
        and unforgettable wildlife experiences. This region is one of
        Africa's most extraordinary eco-tourism destinations, attracting
        visitors from every corner of the globe.
      </p>

      <button
        class="mt-8 px-8 py-4 bg-green-600 hover:bg-green-700 rounded-lg font-semibold text-lg"
      >
        Explore Northern Province
      </button>
    </div>
  </section>

  <!-- Introduction -->
  <section class="py-20 bg-white">
    <div class="max-w-6xl mx-auto px-6 text-center">
      <h2 class="text-4xl font-bold text-green-700 mb-8">
        Land of Mountains and Gorillas
      </h2>

      <p class="text-lg text-gray-700 leading-relaxed">
        Northern Province is known for its cool climate, rolling hills,
        volcanic mountains, rich biodiversity, and welcoming communities.
        The province offers visitors a rare opportunity to encounter
        endangered mountain gorillas in their natural habitat while also
        enjoying hiking, cave exploration, cultural tourism, and stunning
        panoramic views.
      </p>
    </div>
  </section>

  <!-- Attractions -->
  <section class="bg-gray-100 py-20">
    <h2 class="text-4xl font-bold text-center text-green-700 mb-14">
      Top Tourist Attractions
    </h2>

    <div class="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8 px-6">

      <!-- Volcanoes National Park -->
      <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition duration-300">
        <img
          src="/images/northern/volcanoes-national-park.jpg"
          alt="Volcanoes National Park"
          class="h-56 w-full object-cover"
        />

        <div class="p-5">
          <h3 class="text-2xl font-bold text-green-700 mb-3">
            Volcanoes National Park
          </h3>

          <p class="text-gray-600">
            Rwanda's most famous national park, known worldwide for
            mountain gorilla trekking and spectacular volcanic scenery.
          </p>
        </div>
      </div>

      <!-- Mountain Gorillas -->
      <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition duration-300">
        <img
          src="/images/northern/mountain-gorillas.jpg"
          alt="Mountain Gorillas"
          class="h-56 w-full object-cover"
        />

        <div class="p-5">
          <h3 class="text-2xl font-bold text-green-700 mb-3">
            Mountain Gorillas
          </h3>

          <p class="text-gray-600">
            Experience one of the world's most remarkable wildlife
            encounters by observing mountain gorillas in their natural
            environment.
          </p>
        </div>
      </div>

      <!-- Musanze Caves -->
      <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition duration-300">
        <img
          src="/images/northern/musanze-caves.jpg"
          alt="Musanze Caves"
          class="h-56 w-full object-cover"
        />

        <div class="p-5">
          <h3 class="text-2xl font-bold text-green-700 mb-3">
            Musanze Caves
          </h3>

          <p class="text-gray-600">
            Explore ancient underground lava caves formed thousands of
            years ago by volcanic activity.
          </p>
        </div>
      </div>

      <!-- Twin Lakes -->
      <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition duration-300">
        <img
          src="/images/northern/twin-lakes.jpg"
          alt="Twin Lakes"
          class="h-56 w-full object-cover"
        />

        <div class="p-5">
          <h3 class="text-2xl font-bold text-green-700 mb-3">
            Twin Lakes
          </h3>

          <p class="text-gray-600">
            Lake Burera and Lake Ruhondo offer breathtaking scenery,
            boat rides, photography opportunities, and peaceful retreats.
          </p>
        </div>
      </div>

    </div>
  </section>

  <!-- Gorilla Tourism -->
  <section class="py-20 bg-white">
    <div class="max-w-6xl mx-auto px-6">
      <h2 class="text-4xl font-bold text-center text-green-700 mb-10">
        Gorilla Trekking Experience
      </h2>

      <p class="text-lg text-gray-700 leading-relaxed text-center">
        Gorilla trekking is Rwanda's most celebrated tourism activity.
        Guided by experienced rangers, visitors hike through the forests
        of Volcanoes National Park to observe endangered mountain gorillas.
        This once-in-a-lifetime experience not only creates unforgettable
        memories but also supports wildlife conservation and local
        communities.
      </p>
    </div>
  </section>

  <!-- Volcanoes Section -->
  <section class="bg-green-700 text-white py-20">
    <div class="max-w-6xl mx-auto px-6 text-center">
      <h2 class="text-4xl font-bold mb-8">
        The Virunga Volcanoes
      </h2>

      <p class="text-xl leading-relaxed max-w-4xl mx-auto">
        Northern Province is home to several magnificent volcanoes,
        including Mount Karisimbi, Mount Bisoke, Mount Sabyinyo,
        Mount Gahinga, and Mount Muhabura. These mountains provide
        exceptional hiking adventures and some of the most spectacular
        views in East Africa.
      </p>
    </div>
  </section>

  <!-- Why Visit -->
  <section class="py-20 bg-gray-100">
    <div class="max-w-6xl mx-auto px-6">
      <h2 class="text-4xl font-bold text-center text-green-700 mb-12">
        Why Visit Northern Province?
      </h2>

      <div class="grid md:grid-cols-3 gap-8">
        <div class="bg-white p-8 rounded-xl shadow">
          <h3 class="text-2xl font-bold text-green-700 mb-4">
            Wildlife
          </h3>
          <p class="text-gray-700">
            Meet the world-famous mountain gorillas and discover unique
            wildlife found nowhere else on Earth.
          </p>
        </div>

        <div class="bg-white p-8 rounded-xl shadow">
          <h3 class="text-2xl font-bold text-green-700 mb-4">
            Adventure
          </h3>
          <p class="text-gray-700">
            Enjoy hiking, volcano climbing, cave exploration, and nature
            walks through stunning mountain landscapes.
          </p>
        </div>

        <div class="bg-white p-8 rounded-xl shadow">
          <h3 class="text-2xl font-bold text-green-700 mb-4">
            Culture
          </h3>
          <p class="text-gray-700">
            Experience traditional Rwandan culture, local communities,
            dance performances, and authentic hospitality.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>



<!-- 
public/images/northern/
├── volcanoes-national-park.jpg
├── mountain-gorillas.jpg
├── musanze-caves.jpg
├── twin-lakes.jpg
├── mount-bisoke.jpg
└── virunga-volcanoes.jpg -->