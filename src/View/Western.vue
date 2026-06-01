<template>
  <!-- Hero Section -->
  <section
    class="relative min-h-screen bg-cover bg-center"
    style="background-image: url('/images/western/lake-kivu-sunset.jpg')"
  >
    <div class="absolute inset-0 bg-black/60"></div>

    <div
      class="relative z-10 flex flex-col justify-center items-center min-h-screen text-center text-white px-6"
    >
      <h1 class="text-6xl md:text-7xl font-bold mb-6">
        Western Province
      </h1>

      <p class="max-w-4xl text-xl leading-relaxed">
        Welcome to Rwanda's Western Province, home to the magnificent
        Lake Kivu, breathtaking mountains, tropical islands, beautiful
        beaches, and unforgettable outdoor adventures. This province
        offers visitors a perfect combination of relaxation, nature,
        water activities, and cultural experiences along one of Africa's
        most beautiful freshwater lakes.
      </p>

      <button
        class="mt-8 px-8 py-4 bg-green-600 hover:bg-green-700 rounded-lg font-semibold text-lg"
      >
        Explore Western Province
      </button>
    </div>
  </section>

  <!-- Introduction -->
  <section class="py-20 bg-white">
    <div class="max-w-6xl mx-auto px-6 text-center">
      <h2 class="text-4xl font-bold text-green-700 mb-8">
        Discover Rwanda's Lakeside Paradise
      </h2>

      <p class="text-lg text-gray-700 leading-relaxed">
        Stretching along the shores of Lake Kivu, Western Province is one
        of Rwanda's most attractive tourist destinations. Visitors can
        enjoy boat cruises, island tours, beach relaxation, cycling,
        hiking, birdwatching, and spectacular views of the surrounding
        mountains. The region is famous for its peaceful atmosphere,
        luxury resorts, and natural beauty.
      </p>
    </div>
  </section>

  <!-- Attractions -->
  <section class="bg-gray-100 py-20">
    <h2 class="text-4xl font-bold text-center text-green-700 mb-14">
      Top Tourist Attractions
    </h2>

    <div class="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8 px-6">

      <!-- Lake Kivu -->
      <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition duration-300">
        <img
          src="/images/western/lake-kivu.jpg"
          alt="Lake Kivu"
          class="h-56 w-full object-cover"
        />

        <div class="p-5">
          <h3 class="text-2xl font-bold text-green-700 mb-3">
            Lake Kivu
          </h3>

          <p class="text-gray-600">
            One of Africa's Great Lakes, offering crystal-clear waters,
            beaches, boat rides, kayaking, and unforgettable sunsets.
          </p>
        </div>
      </div>

      <!-- Rubavu -->
      <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition duration-300">
        <img
          src="/images/western/rubavu-beach.jpg"
          alt="Rubavu Beach"
          class="h-56 w-full object-cover"
        />

        <div class="p-5">
          <h3 class="text-2xl font-bold text-green-700 mb-3">
            Rubavu Beach
          </h3>

          <p class="text-gray-600">
            A popular destination for relaxation, swimming, beach sports,
            lakeside dining, and vibrant nightlife.
          </p>
        </div>
      </div>

      <!-- Congo Nile Trail -->
      <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition duration-300">
        <img
          src="/images/western/congo-nile-trail.jpg"
          alt="Congo Nile Trail"
          class="h-56 w-full object-cover"
        />

        <div class="p-5">
          <h3 class="text-2xl font-bold text-green-700 mb-3">
            Congo Nile Trail
          </h3>

          <p class="text-gray-600">
            A world-class hiking and cycling route offering breathtaking
            views of Lake Kivu and Rwanda's rolling hills.
          </p>
        </div>
      </div>

      <!-- Kibuye -->
      <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition duration-300">
        <img
          src="/images/western/kibuye.jpg"
          alt="Kibuye Karongi"
          class="h-56 w-full object-cover"
        />

        <div class="p-5">
          <h3 class="text-2xl font-bold text-green-700 mb-3">
            Kibuye (Karongi)
          </h3>

          <p class="text-gray-600">
            A peaceful lakeside town famous for its scenic islands,
            resorts, and panoramic views of Lake Kivu.
          </p>
        </div>
      </div>

    </div>
  </section>

  <!-- Island Adventures -->
  <section class="py-20 bg-white">
    <div class="max-w-6xl mx-auto px-6">
      <h2 class="text-4xl font-bold text-center text-green-700 mb-10">
        Island Adventures
      </h2>

      <p class="text-lg text-gray-700 leading-relaxed text-center">
        Western Province is home to numerous beautiful islands scattered
        across Lake Kivu. Visitors can take boat excursions to explore
        hidden beaches, observe birdlife, enjoy fishing activities, and
        experience the peaceful beauty of Rwanda's lake environment.
      </p>
    </div>
  </section>

  <!-- Water Activities -->
  <section class="bg-green-700 text-white py-20">
    <div class="max-w-6xl mx-auto px-6 text-center">
      <h2 class="text-4xl font-bold mb-8">
        Water Sports & Recreation
      </h2>

      <p class="text-xl leading-relaxed max-w-4xl mx-auto">
        Lake Kivu provides excellent opportunities for kayaking, paddle
        boarding, fishing, swimming, jet skiing, boat cruises, and
        lakeside relaxation. The calm waters and stunning scenery make it
        one of Rwanda's premier recreational destinations.
      </p>
    </div>
  </section>

  <!-- Why Visit -->
  <section class="py-20 bg-gray-100">
    <div class="max-w-6xl mx-auto px-6">
      <h2 class="text-4xl font-bold text-center text-green-700 mb-12">
        Why Visit Western Province?
      </h2>

      <div class="grid md:grid-cols-3 gap-8">

        <div class="bg-white p-8 rounded-xl shadow-lg">
          <h3 class="text-2xl font-bold text-green-700 mb-4">
            Lake Kivu
          </h3>

          <p class="text-gray-700">
            Experience one of Africa's most beautiful lakes with stunning
            beaches, islands, and breathtaking sunsets.
          </p>
        </div>

        <div class="bg-white p-8 rounded-xl shadow-lg">
          <h3 class="text-2xl font-bold text-green-700 mb-4">
            Adventure
          </h3>

          <p class="text-gray-700">
            Enjoy cycling, hiking, kayaking, boat tours, and exploration
            along the famous Congo Nile Trail.
          </p>
        </div>

        <div class="bg-white p-8 rounded-xl shadow-lg">
          <h3 class="text-2xl font-bold text-green-700 mb-4">
            Relaxation
          </h3>

          <p class="text-gray-700">
            Unwind at luxury resorts, lakeside hotels, beaches, and
            peaceful island retreats surrounded by nature.
          </p>
        </div>

      </div>
    </div>
  </section>

  <!-- Tourism Facts -->
  <section class="py-20 bg-white">
    <div class="max-w-6xl mx-auto px-6 text-center">
      <h2 class="text-4xl font-bold text-green-700 mb-8">
        A Destination Worth Exploring
      </h2>

      <p class="text-lg text-gray-700 leading-relaxed">
        Western Province combines natural beauty, outdoor adventure,
        cultural experiences, and world-class hospitality. Whether you're
        looking for a romantic getaway, family vacation, photography
        expedition, or adventure-filled holiday, the shores of Lake Kivu
        offer experiences that create lasting memories.
      </p>
    </div>
  </section>
</template>



<!-- public/images/western/
├── lake-kivu-sunset.jpg
├── lake-kivu.jpg
├── rubavu-beach.jpg
├── congo-nile-trail.jpg
├── kibuye.jpg
├── lake-kivu-islands.jpg
└── boat-cruise.jpg -->