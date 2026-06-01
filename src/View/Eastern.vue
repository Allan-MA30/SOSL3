<template>
  <!-- Hero Section -->
  <section
    class="relative min-h-screen bg-cover bg-center"
    style="background-image: url('/images/eastern/akagera-sunset.jpg')"
  >
    <div class="absolute inset-0 bg-black/60"></div>

    <div
      class="relative z-10 flex flex-col justify-center items-center min-h-screen text-center text-white px-6"
    >
      <h1 class="text-6xl md:text-7xl font-bold mb-6">
        Eastern Province
      </h1>

      <p class="max-w-4xl text-xl leading-relaxed">
        Welcome to Rwanda's Eastern Province, a region blessed with vast
        savannah landscapes, beautiful lakes, abundant wildlife, and rich
        cultural heritage. Home to the famous Akagera National Park, this
        province offers unforgettable safari experiences, birdwatching,
        boat cruises, and breathtaking natural scenery.
      </p>

      <button
        class="mt-8 px-8 py-4 bg-green-600 hover:bg-green-700 rounded-lg font-semibold text-lg"
      >
        Discover Eastern Province
      </button>
    </div>
  </section>

  <!-- Introduction -->
  <section class="py-20 bg-white">
    <div class="max-w-6xl mx-auto px-6 text-center">
      <h2 class="text-4xl font-bold text-green-700 mb-8">
        Explore Rwanda's Wildlife Paradise
      </h2>

      <p class="text-lg text-gray-700 leading-relaxed">
        Eastern Province is Rwanda's largest province and a destination
        filled with extraordinary biodiversity, scenic lakes, and
        welcoming communities. Visitors can enjoy game drives, nature
        walks, cultural tours, fishing activities, and some of the most
        spectacular sunsets in Rwanda.
      </p>
    </div>
  </section>

  <!-- Attractions -->
  <section class="bg-gray-100 py-20">
    <h2 class="text-4xl font-bold text-center text-green-700 mb-14">
      Top Attractions
    </h2>

    <div class="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8 px-6">

      <!-- Akagera -->
      <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition duration-300">
        <img
          src="/images/eastern/akagera-national-park.jpg"
          alt="Akagera National Park"
          class="h-56 w-full object-cover"
        >

        <div class="p-5">
          <h3 class="text-2xl font-bold text-green-700 mb-3">
            Akagera National Park
          </h3>

          <p class="text-gray-600">
            Rwanda's only savannah national park and home to the Big Five:
            lions, elephants, buffaloes, rhinos, and leopards.
          </p>
        </div>
      </div>

      <!-- Lake Ihema -->
      <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition duration-300">
        <img
          src="/images/eastern/lake-ihema.jpg"
          alt="Lake Ihema"
          class="h-56 w-full object-cover"
        >

        <div class="p-5">
          <h3 class="text-2xl font-bold text-green-700 mb-3">
            Lake Ihema
          </h3>

          <p class="text-gray-600">
            Famous for boat cruises, hippos, crocodiles, and a wide variety
            of bird species found along its shores.
          </p>
        </div>
      </div>

      <!-- Lake Muhazi -->
      <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition duration-300">
        <img
          src="/images/eastern/lake-muhazi.jpg"
          alt="Lake Muhazi"
          class="h-56 w-full object-cover"
        >

        <div class="p-5">
          <h3 class="text-2xl font-bold text-green-700 mb-3">
            Lake Muhazi
          </h3>

          <p class="text-gray-600">
            A peaceful destination perfect for relaxation, swimming,
            fishing, kayaking, and lakeside retreats.
          </p>
        </div>
      </div>

      <!-- Gako Forest -->
      <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition duration-300">
        <img
          src="/images/eastern/gako-forest.jpg"
          alt="Gako Forest"
          class="h-56 w-full object-cover"
        >

        <div class="p-5">
          <h3 class="text-2xl font-bold text-green-700 mb-3">
            Gako Forest
          </h3>

          <p class="text-gray-600">
            A natural forest reserve offering beautiful landscapes,
            biodiversity, and opportunities for nature exploration.
          </p>
        </div>
      </div>

    </div>
  </section>

  <!-- Wildlife Section -->
  <section class="py-20 bg-white">
    <div class="max-w-6xl mx-auto px-6">
      <h2 class="text-4xl font-bold text-center text-green-700 mb-10">
        Wildlife and Nature
      </h2>

      <p class="text-lg text-gray-700 leading-relaxed text-center">
        Eastern Province is renowned for its rich wildlife. Visitors to
        Akagera National Park can encounter elephants, giraffes, zebras,
        lions, rhinos, antelopes, hippos, crocodiles, and more than 500
        species of birds. The combination of savannah, wetlands, lakes,
        and woodlands creates one of East Africa's most unique ecosystems.
      </p>
    </div>
  </section>

  <!-- Experience Section -->
  <section class="bg-green-700 text-white py-20">
    <div class="max-w-6xl mx-auto px-6 text-center">
      <h2 class="text-4xl font-bold mb-8">
        Experience the Adventure
      </h2>

      <p class="text-xl leading-relaxed max-w-4xl mx-auto">
        Whether you are looking for a luxury safari, a peaceful lakeside
        retreat, birdwatching, photography, or cultural experiences,
        Eastern Province offers unforgettable adventures for visitors from
        around the world.
      </p>
    </div>
  </section>
</template>




<!-- public/images/eastern/
├── akagera-sunset.jpg
├── akagera-national-park.jpg
├── lake-ihema.jpg
├── lake-muhazi.jpg
├── gako-forest.jpg -->