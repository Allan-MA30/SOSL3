<template>
  <!-- Hero Section -->
  <section
    class="relative min-h-screen bg-cover bg-center"
    style="background-image: url('/images/southern/nyungwe-forest.jpg')"
  >
    <div class="absolute inset-0 bg-black/60"></div>

    <div
      class="relative z-10 flex flex-col justify-center items-center min-h-screen text-center text-white px-6"
    >
      <h1 class="text-6xl md:text-7xl font-bold mb-6">
        Southern Province
      </h1>

      <p class="max-w-4xl text-xl leading-relaxed">
        Welcome to Rwanda's Southern Province, a region renowned for its
        rich cultural heritage, historical landmarks, magnificent forests,
        and unique wildlife experiences. From the ancient royal traditions
        of Nyanza to the breathtaking rainforest of Nyungwe National Park,
        Southern Province offers unforgettable adventures for nature lovers,
        historians, researchers, and travelers from around the world.
      </p>

      <button
        class="mt-8 px-8 py-4 bg-green-600 hover:bg-green-700 rounded-lg font-semibold text-lg"
      >
        Discover Southern Province
      </button>
    </div>
  </section>

  <!-- Introduction -->
  <section class="py-20 bg-white">
    <div class="max-w-6xl mx-auto px-6 text-center">
      <h2 class="text-4xl font-bold text-green-700 mb-8">
        The Cultural and Natural Treasure of Rwanda
      </h2>

      <p class="text-lg text-gray-700 leading-relaxed">
        Southern Province is one of Rwanda's most fascinating destinations.
        Visitors can explore ancient royal palaces, learn about Rwanda's
        history and traditions, walk above rainforest canopies, encounter
        chimpanzees in the wild, and enjoy scenic tea plantations spread
        across rolling hills. The province combines education, adventure,
        culture, and conservation in one remarkable destination.
      </p>
    </div>
  </section>

  <!-- Top Attractions -->
  <section class="bg-gray-100 py-20">
    <h2 class="text-4xl font-bold text-center text-green-700 mb-14">
      Top Tourist Attractions
    </h2>

    <div class="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8 px-6">

      <!-- Nyungwe -->
      <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition duration-300">
        <img
          src="/images/southern/nyungwe-national-park.jpg"
          alt="Nyungwe National Park"
          class="h-56 w-full object-cover"
        />

        <div class="p-5">
          <h3 class="text-2xl font-bold text-green-700 mb-3">
            Nyungwe National Park
          </h3>

          <p class="text-gray-600">
            One of Africa's oldest rainforests, famous for its biodiversity,
            hiking trails, waterfalls, birds, and primates.
          </p>
        </div>
      </div>

      <!-- Canopy Walk -->
      <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition duration-300">
        <img
          src="/images/southern/canopy-walk.jpg"
          alt="Canopy Walkway"
          class="h-56 w-full object-cover"
        />

        <div class="p-5">
          <h3 class="text-2xl font-bold text-green-700 mb-3">
            Canopy Walkway
          </h3>

          <p class="text-gray-600">
            Walk high above the rainforest on East Africa's famous canopy
            bridge and enjoy breathtaking views of Nyungwe Forest.
          </p>
        </div>
      </div>

      <!-- King's Palace -->
      <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition duration-300">
        <img
          src="/images/southern/kings-palace.jpg"
          alt="King's Palace Museum"
          class="h-56 w-full object-cover"
        />

        <div class="p-5">
          <h3 class="text-2xl font-bold text-green-700 mb-3">
            King's Palace Museum
          </h3>

          <p class="text-gray-600">
            Discover Rwanda's royal history and traditional architecture
            at the restored palace in Nyanza.
          </p>
        </div>
      </div>

      <!-- Ethnographic Museum -->
      <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition duration-300">
        <img
          src="/images/southern/ethnographic-museum.jpg"
          alt="Ethnographic Museum"
          class="h-56 w-full object-cover"
        />

        <div class="p-5">
          <h3 class="text-2xl font-bold text-green-700 mb-3">
            Ethnographic Museum
          </h3>

          <p class="text-gray-600">
            One of Africa's finest museums showcasing Rwanda's culture,
            traditions, history, and heritage.
          </p>
        </div>
      </div>

    </div>
  </section>

  <!-- Wildlife -->
  <section class="py-20 bg-white">
    <div class="max-w-6xl mx-auto px-6">
      <h2 class="text-4xl font-bold text-center text-green-700 mb-10">
        Wildlife and Chimpanzee Trekking
      </h2>

      <p class="text-lg text-gray-700 leading-relaxed text-center">
        Nyungwe National Park is home to more than 13 species of primates,
        including chimpanzees, colobus monkeys, and mangabeys. Guided
        chimpanzee trekking adventures allow visitors to observe these
        intelligent animals in their natural rainforest habitat while
        learning about conservation efforts that protect Rwanda's wildlife.
      </p>
    </div>
  </section>

  <!-- Tea Plantations -->
  <section class="bg-green-700 text-white py-20">
    <div class="max-w-6xl mx-auto px-6 text-center">
      <h2 class="text-4xl font-bold mb-8">
        Scenic Tea Plantations
      </h2>

      <p class="text-xl leading-relaxed max-w-4xl mx-auto">
        Southern Province is famous for its lush tea plantations stretching
        across rolling hills. Visitors can tour tea estates, learn about
        tea production, and enjoy spectacular views of Rwanda's green
        countryside while tasting world-class Rwandan tea.
      </p>
    </div>
  </section>

  <!-- Why Visit -->
  <section class="py-20 bg-gray-100">
    <div class="max-w-6xl mx-auto px-6">
      <h2 class="text-4xl font-bold text-center text-green-700 mb-12">
        Why Visit Southern Province?
      </h2>

      <div class="grid md:grid-cols-3 gap-8">

        <div class="bg-white p-8 rounded-xl shadow-lg">
          <h3 class="text-2xl font-bold text-green-700 mb-4">
            Culture & History
          </h3>

          <p class="text-gray-700">
            Explore royal palaces, museums, and cultural sites that tell
            the story of Rwanda's rich heritage and traditions.
          </p>
        </div>

        <div class="bg-white p-8 rounded-xl shadow-lg">
          <h3 class="text-2xl font-bold text-green-700 mb-4">
            Rainforest Adventure
          </h3>

          <p class="text-gray-700">
            Experience hiking trails, waterfalls, canopy walks, and
            chimpanzee trekking in the magnificent Nyungwe rainforest.
          </p>
        </div>

        <div class="bg-white p-8 rounded-xl shadow-lg">
          <h3 class="text-2xl font-bold text-green-700 mb-4">
            Natural Beauty
          </h3>

          <p class="text-gray-700">
            Enjoy breathtaking landscapes, tea plantations, mountain views,
            and some of the most beautiful scenery in Rwanda.
          </p>
        </div>

      </div>
    </div>
  </section>
</template>



<!-- public/images/southern/
├── nyungwe-forest.jpg
├── nyungwe-national-park.jpg
├── canopy-walk.jpg
├── kings-palace.jpg
├── ethnographic-museum.jpg
├── chimpanzee-trekking.jpg
└── tea-plantation.jpg -->