<template>
  <div class="font-sans text-gray-800 bg-white">

    <!-- ── HERO ── -->
    <section
      class="relative min-h-screen flex items-center justify-center overflow-hidden"
      style="background-image: url('/images/kigali/kigali-skyline.jpg')"
    >
      <div class="absolute inset-0 bg-cover bg-center scale-105"
        style="background-image: url('/images/kigali/kigali-skyline.jpg')"></div>
      <div class="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/75"></div>

      <div class="relative z-10 text-center px-6 text-white max-w-5xl mx-auto">
        <span class="inline-block text-xs font-semibold tracking-[4px] uppercase text-green-300 border border-green-400/40 px-4 py-1.5 rounded-full mb-8">
          Africa's Hidden Gem
        </span>
        <h1 class="text-6xl md:text-8xl font-extrabold leading-none mb-6 tracking-tight">
          Welcome to<br />
          <span class="text-green-400">Rwanda</span>
        </h1>
        <p class="text-xl md:text-2xl text-green-300 font-medium mb-5 tracking-wide">
          The Land of a Thousand Hills
        </p>
        <p class="text-lg md:text-xl text-white/75 leading-relaxed mb-12 max-w-2xl mx-auto font-light">
          Breathtaking landscapes, incredible wildlife, vibrant culture, and
          unforgettable adventures — all in one extraordinary destination.
        </p>
        <div class="flex justify-center gap-4 flex-wrap">
          <RouterLink
            to="/contact"
            class="bg-green-600 hover:bg-green-500 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg shadow-green-900/40"
          >
            Explore Rwanda
          </RouterLink>
          <RouterLink
            to="/service"
            class="border-2 border-white/60 hover:border-white hover:bg-white hover:text-black px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
          >
            Our Services
          </RouterLink>
        </div>
      </div>

      <!-- Scroll indicator -->
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
        <p class="text-green-600 text-sm font-semibold tracking-widest uppercase mb-4">About Rwanda</p>
        <h2 class="text-5xl md:text-6xl font-extrabold text-gray-900 mb-8 leading-tight">
          Tembera u <span class="text-green-600">Rwanda</span>
        </h2>
        <p class="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
          Rwanda is a country of extraordinary beauty — rolling hills, mountain gorillas, pristine national parks,
          shimmering lakes, rich cultural heritage, and incredibly welcoming people. Whether you seek adventure,
          relaxation, wildlife encounters, or deep cultural experiences, Rwanda has something unforgettable waiting for you.
        </p>
        <div class="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div v-for="stat in stats" :key="stat.label" class="bg-green-50 rounded-2xl py-8 px-4 text-center">
            <p class="text-4xl font-extrabold text-green-700 mb-2">{{ stat.value }}</p>
            <p class="text-sm text-gray-500 font-medium">{{ stat.label }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ── FEATURED DESTINATIONS ── -->
    <section class="bg-gray-50 py-24 px-6">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <p class="text-green-600 text-sm font-semibold tracking-widest uppercase mb-4">Top Attractions</p>
          <h2 class="text-5xl font-extrabold text-gray-900 mb-4">Featured Destinations</h2>
          <p class="text-gray-500 text-lg max-w-xl mx-auto">Explore Rwanda's most iconic and awe-inspiring places</p>
        </div>
        <div class="grid md:grid-cols-3 gap-8">
          <div
            v-for="dest in destinations"
            :key="dest.name"
            class="bg-white rounded-3xl overflow-hidden shadow-md hover:-translate-y-2 hover:shadow-2xl transition-all duration-400 group"
          >
            <div class="relative h-64 overflow-hidden">
              <img :src="dest.image" :alt="dest.name" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <span class="absolute top-4 left-4 bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                {{ dest.tag }}
              </span>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-2">{{ dest.name }}</h3>
              <p class="text-gray-500 text-sm leading-relaxed mb-4">{{ dest.desc }}</p>
              <RouterLink :to="dest.link" class="inline-flex items-center gap-1 text-green-600 font-semibold text-sm hover:gap-2 transition-all duration-200">
                Discover More
                <svg width="16" height="16" fill="none" viewBox="0 0 16 16"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ── PROVINCES ── -->
    <section class="bg-white py-24 px-6">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <p class="text-green-600 text-sm font-semibold tracking-widest uppercase mb-4">Regions</p>
          <h2 class="text-5xl font-extrabold text-gray-900">Explore Rwanda's Regions</h2>
        </div>
        <div class="grid md:grid-cols-3 gap-8">
          <div
            v-for="region in regions"
            :key="region.name"
            class="rounded-3xl overflow-hidden shadow-md group hover:-translate-y-2 hover:shadow-2xl transition-all duration-400"
          >
            <div class="relative h-72 overflow-hidden">
              <img :src="region.image" :alt="region.name" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>
              <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 class="text-2xl font-extrabold mb-1">{{ region.name }}</h3>
              </div>
            </div>
            <div class="bg-white p-6">
              <p class="text-gray-500 text-sm leading-relaxed mb-5">{{ region.desc }}</p>
              <RouterLink
                :to="region.link"
                class="bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-xl font-semibold text-sm inline-block transition-colors duration-200"
              >
                {{ region.cta }}
              </RouterLink>
            </div>
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
          <p class="text-green-200/75 text-lg max-w-xl mx-auto">A destination unlike any other on the African continent</p>
        </div>
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
          <div
            v-for="reason in reasons"
            :key="reason.label"
            class="bg-white/10 border border-white/15 rounded-2xl p-6 text-center hover:bg-white/20 transition-colors duration-200"
          >
            <div class="text-4xl mb-3">{{ reason.icon }}</div>
            <p class="text-white font-semibold text-sm leading-snug">{{ reason.label }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ── TWIN LAKES HIGHLIGHT ── -->
    <section class="bg-white py-24 px-6">
      <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div class="relative">
          <img
            src="/images/northern/twin-lakes.jpg"
            alt="Twin Lakes"
            class="rounded-3xl shadow-2xl w-full h-[420px] object-cover"
          />
          <div class="absolute bottom-5 left-5 right-5 bg-black/50 backdrop-blur-sm text-white/85 text-xs px-4 py-2 rounded-xl">
            Lake Burera & Lake Ruhondo — Northern Province
          </div>
        </div>
        <div>
          <p class="text-green-600 text-sm font-semibold tracking-widest uppercase mb-4">Natural Wonder</p>
          <h2 class="text-5xl font-extrabold text-gray-900 leading-tight mb-6">
            Twin Lakes of Rwanda
          </h2>
          <p class="text-lg text-gray-600 leading-relaxed mb-5">
            Lake Burera and Lake Ruhondo are among Rwanda's most breathtaking destinations.
            Cradled by volcanoes and rolling emerald hills, these twin lakes offer
            stunning scenery and unforgettable photography opportunities.
          </p>
          <p class="text-lg text-gray-600 leading-relaxed mb-8">
            Visitors enjoy peaceful boat rides, nature walks, authentic local culture,
            and serene retreats in one of the country's most magical regions.
          </p>
          <RouterLink
            to="/north"
            class="inline-block bg-green-600 hover:bg-green-500 text-white px-8 py-4 rounded-xl font-semibold transition-colors duration-200"
          >
            Explore Northern Province
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- ── GORILLA HIGHLIGHT ── -->
    <section class="bg-gray-50 py-24 px-6">
      <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div class="order-2 md:order-1">
          <p class="text-green-600 text-sm font-semibold tracking-widest uppercase mb-4">Signature Experience</p>
          <h2 class="text-5xl font-extrabold text-gray-900 leading-tight mb-6">
            Trek with Mountain Gorillas
          </h2>
          <p class="text-lg text-gray-600 leading-relaxed mb-5">
            Rwanda is home to over a third of the world's remaining mountain gorillas.
            In Volcanoes National Park, expert guides lead small groups through
            ancient bamboo forests to spend a breathtaking hour face-to-face
            with these magnificent creatures.
          </p>
          <ul class="space-y-3 mb-8">
            <li v-for="item in gorillaHighlights" :key="item" class="flex items-center gap-3 text-gray-700">
              <svg class="w-5 h-5 text-green-500 shrink-0" fill="none" viewBox="0 0 14 14">
                <path d="M2 7l3.5 3.5L12 4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
              </svg>
              {{ item }}
            </li>
          </ul>
          <RouterLink
            to="/service"
            class="inline-block border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200"
          >
            View Trekking Packages
          </RouterLink>
        </div>
        <div class="relative order-1 md:order-2">
          <img
            src="/images/northern/mountain-gorillas.jpg"
            alt="Mountain Gorillas"
            class="rounded-3xl shadow-2xl w-full h-[420px] object-cover"
          />
          <div class="absolute bottom-5 left-5 right-5 bg-black/50 backdrop-blur-sm text-white/85 text-xs px-4 py-2 rounded-xl">
            Volcanoes National Park, Northern Rwanda
          </div>
        </div>
      </div>
    </section>

    <!-- ── CTA ── -->
    <section class="bg-gray-900 py-28 px-6 text-center relative overflow-hidden">
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(22,163,74,0.15)_0%,_transparent_70%)]"></div>
      <div class="relative z-10 max-w-3xl mx-auto">
        <p class="text-green-400 text-sm font-semibold tracking-widest uppercase mb-6">Your Journey Awaits</p>
        <h2 class="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
          Ready to Explore<br /><span class="text-green-400">Rwanda?</span>
        </h2>
        <p class="text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
          Experience breathtaking landscapes, incredible wildlife, vibrant culture,
          and unforgettable adventures in the heart of Africa.
        </p>
        <div class="flex justify-center gap-4 flex-wrap">
          <RouterLink
            to="/contact"
            class="bg-green-600 hover:bg-green-500 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg shadow-green-900/40"
          >
            Start Your Journey
          </RouterLink>
          <RouterLink
            to="/service"
            class="border-2 border-white/30 hover:border-white/70 text-white/80 hover:text-white px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300"
          >
            View Services
          </RouterLink>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
const stats = [
  { value: '5', label: 'Provinces' },
  { value: '4', label: 'National Parks' },
  { value: '1,000+', label: 'Beautiful Hills' },
  { value: '1M+', label: 'Tourists per Year' },
]

const destinations = [
  {
    name: 'Volcanoes National Park',
    tag: 'Wildlife',
    image: '/images/northern/volcanoes-national-park.jpg',
    desc: 'Home to the endangered mountain gorillas and the magnificent Virunga Volcanoes.',
    link: '/north',
  },
  {
    name: 'Akagera National Park',
    tag: 'Safari',
    image: '/images/eastern/akagera-national-park.jpg',
    desc: "Discover Rwanda's Big Five safari destination with lions, elephants, giraffes, and rhinos.",
    link: '/east',
  },
  {
    name: 'Kigali City',
    tag: 'Urban',
    image: '/images/kigali/convention-centre.jpg',
    desc: "Experience one of Africa's cleanest, safest, and most modern cities.",
    link: '/kigali',
  },
]

const regions = [
  {
    name: 'Kigali City',
    image: '/images/kigali/kigali-skyline.jpg',
    desc: "Rwanda's vibrant capital known for cleanliness, innovation, culture, and warm hospitality.",
    link: '/kigali',
    cta: 'Explore Kigali',
  },
  {
    name: 'Northern Province',
    image: '/images/northern/mountain-gorillas.jpg',
    desc: 'Home of mountain gorillas, volcanoes, Twin Lakes, and unforgettable hiking adventures.',
    link: '/north',
    cta: 'Explore Northern',
  },
  {
    name: 'Eastern Province',
    image: '/images/eastern/akagera-sunset.jpg',
    desc: 'Discover wildlife safaris, beautiful lakes, birdwatching, and stunning savannah landscapes.',
    link: '/east',
    cta: 'Explore Eastern',
  },
]

const reasons = [
  { icon: '🦍', label: 'Gorilla Trekking' },
  { icon: '🦁', label: 'Big Five Safari' },
  { icon: '🌋', label: 'Volcanoes' },
  { icon: '🌊', label: 'Lakes & Rivers' },
  { icon: '🎭', label: 'Rich Culture' },
  { icon: '🏙️', label: 'Modern Cities' },
]

const gorillaHighlights = [
  'Over 1/3 of the world\'s remaining mountain gorillas',
  'Expert certified guides with 10+ years experience',
  'Small groups of maximum 8 trekkers',
  'Permits support gorilla conservation directly',
]
</script>
