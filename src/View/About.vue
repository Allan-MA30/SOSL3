<template>
  <div class="font-sans text-gray-800 bg-white">

    <!-- ── HERO ── -->
    <section
      class="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        class="absolute inset-0 bg-cover bg-center scale-105"
        style="background-image: url('/images/northern/mountain-gorillas.jpg')"
      ></div>
      <div class="absolute inset-0 bg-gradient-to-b from-black/65 via-black/45 to-black/75"></div>

      <div class="relative z-10 text-center px-6 text-white max-w-5xl mx-auto">
        <span class="inline-block text-xs font-semibold tracking-[4px] uppercase text-green-300 border border-green-400/40 px-4 py-1.5 rounded-full mb-8">
          Our Story
        </span>
        <h1 class="text-6xl md:text-8xl font-extrabold leading-none mb-6 tracking-tight">
          About <span class="text-green-400">Rwanda</span>
        </h1>
        <p class="text-lg md:text-xl text-white/75 leading-relaxed max-w-3xl mx-auto font-light">
          Welcome to the Land of a Thousand Hills — where breathtaking landscapes,
          incredible wildlife, rich culture, and warm hospitality come together
          to create unforgettable travel experiences.
        </p>
      </div>

      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/50 text-xs tracking-widest uppercase animate-bounce">
        <span>Scroll</span>
        <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
          <path d="M8 3v10M3 9l5 5 5-5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
      </div>
    </section>

    <!-- ── INTRODUCTION ── -->
    <section class="bg-white py-24 px-6">
      <div class="max-w-5xl mx-auto text-center">
        <p class="text-green-600 text-sm font-semibold tracking-widest uppercase mb-4">Who We Are</p>
        <h2 class="text-5xl md:text-6xl font-extrabold text-gray-900 mb-8 leading-tight">
          Discover <span class="text-green-600">Rwanda</span>
        </h2>
        <p class="text-lg md:text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto mb-6">
          Rwanda is one of Africa's most remarkable tourism destinations. Known for its rolling hills,
          stunning lakes, magnificent volcanoes, unique wildlife, and vibrant culture, Rwanda attracts
          visitors from around the world seeking adventure, relaxation, and authentic cultural experiences.
        </p>
        <p class="text-lg text-gray-500 leading-relaxed max-w-4xl mx-auto">
          Whether you dream of trekking mountain gorillas in Volcanoes National Park, exploring the wildlife
          of Akagera, discovering Kigali's modern skyline, or enjoying Rwanda's forests and lakes —
          there is something extraordinary for every traveler.
        </p>
      </div>
    </section>

    <!-- ── TOP ATTRACTIONS ── -->
    <section class="bg-gray-50 py-24 px-6">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <p class="text-green-600 text-sm font-semibold tracking-widest uppercase mb-4">Must-See Places</p>
          <h2 class="text-5xl font-extrabold text-gray-900 mb-4">Rwanda's Top Attractions</h2>
          <p class="text-gray-500 text-lg max-w-xl mx-auto">Iconic destinations that make Rwanda one of Africa's finest</p>
        </div>
        <div class="grid md:grid-cols-3 gap-8">
          <div
            v-for="attraction in attractions"
            :key="attraction.name"
            class="bg-white rounded-3xl overflow-hidden shadow-md hover:-translate-y-2 hover:shadow-2xl transition-all duration-400 group"
          >
            <div class="relative h-72 overflow-hidden">
              <img :src="attraction.image" :alt="attraction.name" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <span class="absolute top-4 left-4 bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                {{ attraction.tag }}
              </span>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-2">{{ attraction.name }}</h3>
              <p class="text-gray-500 text-sm leading-relaxed">{{ attraction.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ── MISSION & VISION ── -->
    <section class="bg-white py-24 px-6">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-16">
          <p class="text-green-600 text-sm font-semibold tracking-widest uppercase mb-4">Our Purpose</p>
          <h2 class="text-5xl font-extrabold text-gray-900">Mission & Vision</h2>
        </div>
        <div class="grid md:grid-cols-2 gap-8">
          <div class="bg-green-50 border border-green-100 p-10 rounded-3xl">
            <div class="w-12 h-12 bg-green-600 rounded-2xl flex items-center justify-center mb-6">
              <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <h3 class="text-3xl font-bold text-green-700 mb-5">Our Mission</h3>
            <p class="text-gray-600 text-lg leading-relaxed">
              To promote Rwanda's tourism potential by showcasing its natural beauty, wildlife,
              cultural heritage, and modern attractions — while encouraging sustainable tourism
              that benefits local communities and protects the environment.
            </p>
          </div>
          <div class="bg-blue-50 border border-blue-100 p-10 rounded-3xl">
            <div class="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center mb-6">
              <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                <circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2"/>
              </svg>
            </div>
            <h3 class="text-3xl font-bold text-blue-700 mb-5">Our Vision</h3>
            <p class="text-gray-600 text-lg leading-relaxed">
              To inspire travelers from around the globe to discover Rwanda and recognize it as
              one of the world's most beautiful, welcoming, and sustainable tourism destinations.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ── WHY VISIT ── -->
    <section class="bg-green-700 py-24 px-6">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <p class="text-green-300 text-sm font-semibold tracking-widest uppercase mb-4">Reasons to Come</p>
          <h2 class="text-5xl font-extrabold text-white mb-4">Why Visit Rwanda?</h2>
          <p class="text-green-200/75 text-lg max-w-xl mx-auto">Rwanda offers unforgettable experiences for every kind of traveler</p>
        </div>
        <div class="grid md:grid-cols-4 gap-6">
          <div
            v-for="reason in reasons"
            :key="reason.title"
            class="bg-white/10 border border-white/15 rounded-3xl p-8 text-center hover:bg-white/20 transition-colors duration-200"
          >
            <div class="text-5xl mb-4">{{ reason.icon }}</div>
            <h3 class="text-xl font-bold text-white mb-3">{{ reason.title }}</h3>
            <p class="text-green-200/70 text-sm leading-relaxed">{{ reason.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ── NATURAL BEAUTY HIGHLIGHT ── -->
    <section class="bg-white py-24 px-6">
      <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div class="relative">
          <img
            src="/images/northern/twin-lakes.jpg"
            alt="Twin Lakes Rwanda"
            class="rounded-3xl shadow-2xl w-full h-[420px] object-cover"
          />
          <div class="absolute bottom-5 left-5 right-5 bg-black/50 backdrop-blur-sm text-white/85 text-xs px-4 py-2 rounded-xl">
            Lake Burera & Lake Ruhondo — Northern Province
          </div>
        </div>
        <div>
          <p class="text-green-600 text-sm font-semibold tracking-widest uppercase mb-4">Natural Wonder</p>
          <h2 class="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
            Natural Beauty Beyond Expectations
          </h2>
          <p class="text-lg text-gray-600 leading-relaxed mb-5">
            Rwanda's natural beauty extends far beyond its famous gorillas. Visitors can explore
            the magnificent Twin Lakes of Burera and Ruhondo, enjoy peaceful boat rides,
            hike volcanic mountains, and experience some of the most stunning scenery in East Africa.
          </p>
          <p class="text-lg text-gray-500 leading-relaxed">
            Every region offers unique attractions, making Rwanda ideal for adventure seekers,
            nature lovers, families, and cultural explorers alike.
          </p>
        </div>
      </div>
    </section>

    <!-- ── STATISTICS ── -->
    <section class="bg-gray-900 py-20 px-6">
      <div class="max-w-6xl mx-auto">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div v-for="stat in stats" :key="stat.label" class="py-8">
            <p class="text-5xl font-extrabold text-green-400 mb-3">{{ stat.value }}</p>
            <p class="text-gray-400 text-lg">{{ stat.label }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ── CTA ── -->
    <section class="bg-gray-950 text-white py-28 px-6 text-center relative overflow-hidden">
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(22,163,74,0.15)_0%,_transparent_70%)]"></div>
      <div class="relative z-10 max-w-3xl mx-auto">
        <p class="text-green-400 text-sm font-semibold tracking-widest uppercase mb-6">Your Journey Awaits</p>
        <h2 class="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
          Start Your Rwanda<br /><span class="text-green-400">Adventure</span>
        </h2>
        <p class="text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
          Discover incredible wildlife, breathtaking landscapes, vibrant culture,
          and unforgettable memories in the heart of Africa.
        </p>
        <div class="flex justify-center gap-4 flex-wrap">
          <RouterLink
            to="/service"
            class="bg-green-600 hover:bg-green-500 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg shadow-green-900/40"
          >
            View Our Services
          </RouterLink>
          <RouterLink
            to="/kigali"
            class="border-2 border-white/30 hover:border-white/70 text-white/80 hover:text-white px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300"
          >
            Explore Regions
          </RouterLink>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
const attractions = [
  {
    name: 'Mountain Gorillas',
    tag: 'Wildlife',
    image: '/images/northern/mountain-gorillas.jpg',
    desc: "Experience one of the world's most extraordinary wildlife encounters visiting the endangered mountain gorillas in Volcanoes National Park.",
  },
  {
    name: 'Akagera National Park',
    tag: 'Safari',
    image: '/images/eastern/akagera-national-park.jpg',
    desc: "Explore Rwanda's savannah wilderness and encounter lions, elephants, giraffes, rhinos, zebras, and hundreds of bird species.",
  },
  {
    name: 'Modern Kigali',
    tag: 'Urban',
    image: '/images/kigali/convention-centre.jpg',
    desc: "Discover one of Africa's cleanest and safest cities — known for innovation, warm hospitality, and impressive urban development.",
  },
]

const reasons = [
  {
    icon: '🦍',
    title: 'Wildlife',
    desc: 'Encounter mountain gorillas, elephants, lions, rhinos, and many other fascinating species up close.',
  },
  {
    icon: '⛰️',
    title: 'Landscapes',
    desc: 'Enjoy breathtaking hills, volcanoes, ancient forests, shimmering lakes, and scenic countryside.',
  },
  {
    icon: '🎭',
    title: 'Culture',
    desc: 'Experience traditional dances, local cuisine, art, music, and Rwanda\'s unique living heritage.',
  },
  {
    icon: '🏙️',
    title: 'Modern Cities',
    desc: "Explore Kigali's modern infrastructure, cleanliness, innovation, and welcoming atmosphere.",
  },
]

const stats = [
  { value: '5', label: 'Provinces' },
  { value: '4', label: 'National Parks' },
  { value: '1,000+', label: 'Beautiful Hills' },
  { value: '∞', label: 'Memorable Experiences' },
]
</script>
