<template>
  <!-- Hero Section -->
  <section
    class="relative min-h-screen bg-cover bg-center"
    style="background-image: url('/images/kigali/kigali-skyline.jpg')"
  >
    <div class="absolute inset-0 bg-black/60"></div>

    <div
      class="relative z-10 flex flex-col justify-center items-center min-h-screen text-center px-6 text-white"
    >
      <h1 class="text-6xl md:text-7xl font-bold mb-6">
        Welcome to Kigali City
      </h1>

      <p class="max-w-4xl text-xl leading-relaxed">
        Kigali, the capital city of Rwanda, is one of Africa's cleanest,
        safest, and fastest-growing cities. Built across beautiful rolling
        hills, Kigali offers visitors a unique combination of modern
        architecture, rich culture, historical significance, excellent
        hospitality, and breathtaking scenery. Whether you are interested
        in learning Rwanda's history, experiencing local markets,
        enjoying luxury hotels, or exploring green urban spaces, Kigali
        provides an unforgettable experience for every traveler.
      </p>

      <button
        class="mt-8 px-8 py-4 bg-green-600 hover:bg-green-700 rounded-lg font-semibold text-lg"
      >
        Explore Kigali
      </button>
    </div>
  </section>

  <!-- Introduction -->
  <section class="py-20 bg-white">
    <div class="max-w-6xl mx-auto px-6">
      <h2 class="text-4xl font-bold text-green-700 text-center mb-8">
        Discover the Heart of Rwanda
      </h2>

      <p class="text-lg text-gray-700 leading-relaxed text-center">
        Kigali is the economic, cultural, and administrative center of
        Rwanda. Known as the "Land of a Thousand Hills," Rwanda's capital
        showcases impressive urban planning, environmental sustainability,
        and vibrant communities. Visitors are often amazed by the city's
        cleanliness, friendly residents, efficient transportation system,
        and remarkable safety standards.
      </p>
    </div>
  </section>

  <!-- Attractions -->
  <section class="bg-gray-100 py-20">
    <h2 class="text-4xl font-bold text-center text-green-700 mb-14">
      Top Tourist Attractions
    </h2>

    <div class="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8 px-6">

      <!-- Convention Centre -->
      <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition duration-300">
        <img
          src="/images/kigali/convention-centre.jpg"
          alt="Kigali Convention Centre"
          class="h-56 w-full object-cover"
        />

        <div class="p-5">
          <h3 class="text-2xl font-bold text-green-700 mb-3">
            Kigali Convention Centre
          </h3>

          <p class="text-gray-600">
            One of Rwanda's most iconic landmarks, recognized for its
            beautiful dome illuminated at night. It hosts international
            conferences, exhibitions, and major events.
          </p>
        </div>
      </div>

      <!-- Genocide Memorial -->
      <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition duration-300">
        <img
          src="/images/kigali/genocide-memorial.jpg"
          alt="Kigali Genocide Memorial"
          class="h-56 w-full object-cover"
        />

        <div class="p-5">
          <h3 class="text-2xl font-bold text-green-700 mb-3">
            Kigali Genocide Memorial
          </h3>

          <p class="text-gray-600">
            A powerful site dedicated to preserving the memory of the
            victims of the 1994 Genocide against the Tutsi and promoting
            peace, unity, and reconciliation.
          </p>
        </div>
      </div>

      <!-- Kimironko -->
      <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition duration-300">
        <img
          src="/images/kigali/kimironko-market.jpg"
          alt="Kimironko Market"
          class="h-56 w-full object-cover"
        />

        <div class="p-5">
          <h3 class="text-2xl font-bold text-green-700 mb-3">
            Kimironko Market
          </h3>

          <p class="text-gray-600">
            Kigali's largest market where visitors can explore fresh
            produce, traditional fabrics, local crafts, and experience
            daily Rwandan life.
          </p>
        </div>
      </div>

      <!-- Nyandungu -->
      <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition duration-300">
        <img
          src="/images/kigali/nyandungu-park.jpg"
          alt="Nyandungu Eco Park"
          class="h-56 w-full object-cover"
        />

        <div class="p-5">
          <h3 class="text-2xl font-bold text-green-700 mb-3">
            Nyandungu Eco Park
          </h3>

          <p class="text-gray-600">
            A beautiful ecological park featuring wetlands, walking trails,
            cycling paths, birdwatching areas, and natural landscapes.
          </p>
        </div>
      </div>

    </div>
  </section>

  <!-- Why Visit -->
  <section class="py-20 bg-white">
    <div class="max-w-6xl mx-auto px-6">
      <h2 class="text-4xl font-bold text-center text-green-700 mb-10">
        Why Tourists Love Kigali
      </h2>

      <div class="grid md:grid-cols-3 gap-10">

        <div class="text-center">
          <h3 class="text-2xl font-bold mb-4">Clean Environment</h3>
          <p class="text-gray-700">
            Kigali is internationally recognized for its cleanliness and
            environmental conservation efforts.
          </p>
        </div>

        <div class="text-center">
          <h3 class="text-2xl font-bold mb-4">Rich Culture</h3>
          <p class="text-gray-700">
            Museums, cultural villages, traditional dances, local cuisine,
            and community experiences offer visitors authentic Rwandan culture.
          </p>
        </div>

        <div class="text-center">
          <h3 class="text-2xl font-bold mb-4">Modern Lifestyle</h3>
          <p class="text-gray-700">
            Modern hotels, shopping centers, conference facilities,
            restaurants, and nightlife make Kigali a world-class destination.
          </p>
        </div>

      </div>
    </div>
  </section>
</template>




<!-- public/
└── images/
    └── kigali/
        ├── convention-centre.jpg
        ├── genocide-memorial.jpg
        ├── kimironko-market.jpg
        ├── nyandungu-park.jpg
        └── kigali-skyline.jpg -->