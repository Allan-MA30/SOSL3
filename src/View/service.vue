<template>
  <div class="bg-stone-50 font-sans">

    <!-- Hero -->
    <section class="relative h-screen min-h-[560px] flex items-center justify-center text-center overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1400&q=85"
        alt="Mountain gorilla Rwanda"
        class="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div class="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60"></div>
      <div class="relative z-10 max-w-3xl px-6">
        <span class="inline-block text-xs font-medium tracking-[3px] uppercase text-emerald-300 border border-emerald-400/50 px-4 py-1.5 rounded-full mb-6">
          What We Offer
        </span>
        <h1 class="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
          Discover the <span class="italic text-emerald-300">Heart</span> of Rwanda
        </h1>
        <p class="text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-xl mx-auto">
          From mist-covered gorilla habitats to shimmering lake shores — we craft journeys you'll never forget.
        </p>
      </div>
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-white/60 text-xs tracking-widest uppercase animate-bounce">
        <span>Explore</span>
        <svg width="16" height="16" fill="none" viewBox="0 0 16 16"><path d="M8 3v10M3 9l5 5 5-5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
      </div>
    </section>

    <!-- Services Grid -->
    <section class="py-24 px-6">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <p class="text-emerald-600 text-sm font-semibold tracking-widest uppercase mb-3">Our Services</p>
          <h2 class="text-4xl md:text-5xl font-bold text-stone-900 mb-4">Everything You Need</h2>
          <p class="text-stone-500 text-lg max-w-xl mx-auto">Carefully designed experiences for an authentic, seamless Rwandan adventure.</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="service in services"
            :key="service.title"
            class="bg-white rounded-2xl overflow-hidden border border-stone-200 group hover:-translate-y-2 transition-transform duration-300"
            :class="service.featured ? 'border-emerald-400 border-2' : ''"
          >
            <div class="relative h-52 overflow-hidden">
              <img :src="service.image" :alt="service.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <span
                class="absolute top-3 left-3 text-white text-[11px] font-medium tracking-widest uppercase px-3 py-1 rounded-full"
                :class="service.featured ? 'bg-emerald-600' : 'bg-black/50 backdrop-blur-sm'"
              >
                {{ service.badge }}
              </span>
            </div>
            <div class="p-6">
              <div class="text-3xl mb-3">{{ service.icon }}</div>
              <h3 class="text-xl font-bold text-stone-900 mb-2">{{ service.title }}</h3>
              <p class="text-stone-500 text-sm leading-relaxed mb-4">{{ service.description }}</p>
              <ul class="space-y-2 mb-6">
                <li v-for="f in service.features" :key="f" class="flex items-center gap-2 text-sm text-stone-600">
                  <svg class="w-4 h-4 text-emerald-500 shrink-0" fill="none" viewBox="0 0 14 14"><path d="M2 7l3.5 3.5L12 4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
                  {{ f }}
                </li>
              </ul>
              <a href="#contact" class="inline-block text-emerald-600 font-medium text-sm border-b border-emerald-500 pb-0.5 hover:opacity-70 transition-opacity">
                Book Now →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Gorilla Trekking Feature -->
    <section class="bg-emerald-950 py-24 px-6">
      <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <p class="text-emerald-400 text-xs font-semibold tracking-widest uppercase mb-4">Signature Experience</p>
          <h2 class="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            Gorilla Trekking in Volcanoes National Park
          </h2>
          <p class="text-emerald-200/75 text-lg leading-relaxed mb-10">
            Come face-to-face with one of the world's most endangered species in their natural habitat.
            Our certified guides lead you through dense bamboo forest for a breathtaking hour with mountain gorillas.
          </p>
          <div class="flex gap-10 mb-10">
            <div v-for="stat in gorillaStats" :key="stat.value">
              <p class="text-3xl font-bold text-emerald-300">{{ stat.value }}</p>
              <p class="text-xs text-emerald-200/60 mt-1 max-w-[90px] leading-snug">{{ stat.label }}</p>
            </div>
          </div>
          <a href="#contact" class="inline-block bg-emerald-500 hover:bg-emerald-400 text-white font-medium px-8 py-4 rounded-xl transition-colors duration-200">
            Enquire About Trekking
          </a>
        </div>
        <div class="relative">
          <img
            src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=700&q=80"
            alt="Mountain gorilla"
            class="rounded-2xl w-full object-cover aspect-[4/3]"
          />
          <div class="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm text-white/80 text-xs px-4 py-2 rounded-lg">
            Volcanoes National Park, Northern Rwanda
          </div>
        </div>
      </div>
    </section>

    <!-- Lake Kivu Section -->
    <section class="py-24 px-6 bg-stone-50">
      <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div class="relative order-2 md:order-1">
          <img
            src="https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=700&q=80"
            alt="Lake Kivu Rwanda"
            class="rounded-2xl w-full object-cover aspect-[4/3]"
          />
          <div class="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm text-white/80 text-xs px-4 py-2 rounded-lg">
            Lake Kivu, Western Province
          </div>
        </div>
        <div class="order-1 md:order-2">
          <p class="text-emerald-600 text-xs font-semibold tracking-widest uppercase mb-4">Water Escapes</p>
          <h2 class="text-4xl md:text-5xl font-bold text-stone-900 leading-tight mb-6">
            Lake Kivu: Rwanda's Inland Riviera
          </h2>
          <p class="text-stone-500 text-lg leading-relaxed mb-8">
            Stretching along Rwanda's western border, Lake Kivu offers crystalline waters, lush islands, and a relaxed pace
            that perfectly complements a safari. Kayak at sunrise, island-hop by boat, or simply unwind at a lakeside lodge.
          </p>
          <ul class="space-y-3 mb-10">
            <li v-for="item in kivuActivities" :key="item" class="flex items-center gap-3 text-stone-700">
              <span class="w-2 h-2 rounded-full bg-emerald-500 shrink-0"></span>
              {{ item }}
            </li>
          </ul>
          <a href="#contact" class="inline-block border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white font-medium px-8 py-4 rounded-xl transition-all duration-200">
            Plan Your Lake Escape
          </a>
        </div>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section class="bg-stone-900 py-24 px-6">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <p class="text-emerald-400 text-xs font-semibold tracking-widest uppercase mb-3">Our Promise</p>
          <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">Why Travel With Us</h2>
          <p class="text-stone-400 text-lg max-w-md mx-auto">Crafting Rwandan journeys since 2012 — with passion and purpose.</p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="p in pillars"
            :key="p.title"
            class="bg-white/5 border border-white/10 rounded-2xl p-7 hover:bg-white/10 transition-colors duration-200"
          >
            <div class="text-3xl mb-4">{{ p.icon }}</div>
            <h3 class="text-white font-semibold text-lg mb-2">{{ p.title }}</h3>
            <p class="text-stone-400 text-sm leading-relaxed">{{ p.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Packages -->
    <section class="py-24 px-6 bg-stone-50">
      <div class="max-w-5xl mx-auto">
        <div class="text-center mb-16">
          <p class="text-emerald-600 text-xs font-semibold tracking-widest uppercase mb-3">Pricing</p>
          <h2 class="text-4xl md:text-5xl font-bold text-stone-900 mb-4">Popular Packages</h2>
          <p class="text-stone-500 text-lg">Curated itineraries — fully customizable to your pace.</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="pkg in packages"
            :key="pkg.name"
            class="bg-white rounded-2xl p-8 border relative hover:-translate-y-1 transition-transform duration-200"
            :class="pkg.highlighted ? 'border-emerald-500 border-2' : 'border-stone-200'"
          >
            <div v-if="pkg.highlighted" class="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-emerald-500 text-white text-[11px] font-semibold tracking-wider uppercase px-4 py-1 rounded-full whitespace-nowrap">
              Most Popular
            </div>
            <h3 class="text-xl font-bold text-stone-900 mb-1">{{ pkg.name }}</h3>
            <p class="text-stone-400 text-sm mb-6">{{ pkg.duration }}</p>
            <div class="flex items-baseline gap-1 mb-8">
              <span class="text-stone-400 text-sm">from</span>
              <span class="text-4xl font-bold text-stone-900">{{ pkg.price }}</span>
              <span class="text-stone-400 text-sm">/ person</span>
            </div>
            <ul class="space-y-3 mb-8">
              <li v-for="item in pkg.includes" :key="item" class="flex items-center gap-2 text-sm text-stone-600">
                <svg class="w-4 h-4 text-emerald-500 shrink-0" fill="none" viewBox="0 0 14 14"><path d="M2 7l3.5 3.5L12 4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
                {{ item }}
              </li>
            </ul>
            <a
              href="#contact"
              class="block text-center py-3 rounded-xl font-medium text-sm transition-all duration-200"
              :class="pkg.highlighted ? 'bg-emerald-500 text-white hover:bg-emerald-400' : 'border border-emerald-500 text-emerald-600 hover:bg-emerald-50'"
            >
              Get a Quote
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Strip -->
    <section class="bg-stone-900 py-20 px-6">
      <div class="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-2">Ready to Discover Rwanda?</h2>
          <p class="text-stone-400 text-lg">Let our team build your perfect itinerary — at no extra cost.</p>
        </div>
        <div class="flex gap-4 shrink-0">
          <a href="#contact" class="bg-emerald-500 hover:bg-emerald-400 text-white font-medium px-7 py-4 rounded-xl transition-colors duration-200">
            Start Planning
          </a>
          <a href="tel:+250788000000" class="border border-white/30 hover:border-white/70 text-white/80 hover:text-white font-medium px-7 py-4 rounded-xl transition-all duration-200">
            Call Us
          </a>
        </div>
      </div>
    </section>

    <!-- Booking Form -->
    <section id="contact" class="bg-white py-24 px-6">
      <div class="max-w-5xl mx-auto">
        <div class="text-center mb-12">
          <p class="text-emerald-600 text-sm font-semibold tracking-widest uppercase mb-3">Book Your Trip</p>
          <h2 class="text-4xl md:text-5xl font-bold text-stone-900">Ready to Book?</h2>
          <p class="text-stone-500 text-lg max-w-2xl mx-auto">Complete the form below and our travel team will contact you with a tailored itinerary.</p>
        </div>

        <form @submit.prevent="handleSubmit" class="grid gap-6">
          <div class="grid sm:grid-cols-2 gap-6">
            <label class="block">
              <span class="text-sm font-medium text-stone-700">Full Name</span>
              <input
                v-model="form.name"
                type="text"
                required
                class="mt-2 w-full rounded-2xl border border-stone-200 px-4 py-3 text-sm text-stone-900 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-100"
                placeholder="John Doe"
              />
            </label>

            <label class="block">
              <span class="text-sm font-medium text-stone-700">Email Address</span>
              <input
                v-model="form.email"
                type="email"
                required
                class="mt-2 w-full rounded-2xl border border-stone-200 px-4 py-3 text-sm text-stone-900 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-100"
                placeholder="john@example.com"
              />
            </label>
          </div>

          <div class="grid sm:grid-cols-2 gap-6">
            <label class="block">
              <span class="text-sm font-medium text-stone-700">Phone Number</span>
              <input
                v-model="form.phone"
                type="tel"
                required
                class="mt-2 w-full rounded-2xl border border-stone-200 px-4 py-3 text-sm text-stone-900 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-100"
                placeholder="+250 788 000 000"
              />
            </label>

            <label class="block">
              <span class="text-sm font-medium text-stone-700">Number of Travelers</span>
              <input
                v-model="form.travelers"
                type="number"
                min="1"
                required
                class="mt-2 w-full rounded-2xl border border-stone-200 px-4 py-3 text-sm text-stone-900 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-100"
              />
            </label>
          </div>

          <div class="grid sm:grid-cols-2 gap-6">
            <label class="block">
              <span class="text-sm font-medium text-stone-700">Preferred Arrival</span>
              <input
                v-model="form.arrival"
                type="date"
                class="mt-2 w-full rounded-2xl border border-stone-200 px-4 py-3 text-sm text-stone-900 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-100"
              />
            </label>

            <label class="block">
              <span class="text-sm font-medium text-stone-700">Service Interested In</span>
              <select
                v-model="form.service"
                class="mt-2 w-full rounded-2xl border border-stone-200 px-4 py-3 text-sm text-stone-900 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-100"
              >
                <option>Gorilla & Wildlife Safaris</option>
                <option>Luxury Accommodation</option>
                <option>Cultural Immersion Tours</option>
                <option>Lake Kivu Escapes</option>
                <option>Private Transportation</option>
                <option>Photography Experiences</option>
              </select>
            </label>
          </div>

          <label class="block">
            <span class="text-sm font-medium text-stone-700">Your Message</span>
            <textarea
              v-model="form.message"
              rows="5"
              class="mt-2 w-full rounded-2xl border border-stone-200 px-4 py-3 text-sm text-stone-900 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-100"
              placeholder="Tell us about your travel preferences, budget, or any special requests"
            ></textarea>
          </label>

          <div class="flex flex-col sm:flex-row items-center gap-4">
            <button
              type="submit"
              class="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-10 py-4 rounded-2xl transition-all duration-200"
            >
              Send Booking Request
            </button>
            <p v-if="submitted" class="text-emerald-600 font-semibold">Thank you! Your request has been sent.</p>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  phone: '',
  travelers: '1',
  arrival: '',
  service: 'Gorilla & Wildlife Safaris',
  message: '',
})

const submitted = ref(false)

const handleSubmit = () => {
  submitted.value = true
  setTimeout(() => {
    submitted.value = false
  }, 5000)
  form.value = {
    name: '',
    email: '',
    phone: '',
    travelers: '1',
    arrival: '',
    service: form.value.service,
    message: '',
  }
}

const services = [
  {
    title: 'Gorilla & Wildlife Safaris',
    badge: 'Signature',
    icon: '🦍',
    description: 'Trek through Volcanoes National Park to encounter mountain gorillas, golden monkeys, and diverse birdlife in their natural habitat.',
    image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=600&q=75',
    features: ['Expert certified guides', 'Gorilla permits included', 'Small groups (max 8)', 'All fitness levels'],
    featured: true,
  },
  {
    title: 'Luxury Accommodation',
    badge: 'Premium',
    icon: '🏨',
    description: 'Handpicked lodges and boutique hotels — from volcano-view eco-lodges to lakeside resorts blending comfort with nature.',
    image: 'https://images.unsplash.com/photo-1549294413-26f195200c16?w=600&q=75',
    features: ['5-star lodge options', 'Eco-certified properties', 'All meals available', 'Airport transfers'],
    featured: false,
  },
  {
    title: 'Cultural Immersion Tours',
    badge: 'Authentic',
    icon: '🎭',
    description: "Explore Rwanda's rich heritage through village visits, traditional dance, craft markets, and conversations with locals.",
    image: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=600&q=75',
    features: ['Village home visits', 'Memorial site tours', 'Kigali city walks', 'Cooking classes'],
    featured: false,
  },
  {
    title: 'Lake Kivu Escapes',
    badge: 'Adventure',
    icon: '🌊',
    description: 'Crystalline waters, lush islands, and a relaxed pace. Kayak at sunrise or unwind at a world-class lakeside lodge.',
    image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600&q=75',
    features: ['Boat & kayak hire', 'Island day trips', 'Sunset cruises', 'Local wine tasting'],
    featured: false,
  },
  {
    title: 'Private Transportation',
    badge: 'Comfort',
    icon: '🚐',
    description: 'Air-conditioned 4x4 vehicles with experienced drivers who double as knowledgeable local guides throughout your trip.',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&q=75',
    features: ['Airport pickups', '4WD vehicles', 'Multilingual drivers', 'Flexible scheduling'],
    featured: false,
  },
  {
    title: 'Photography Experiences',
    badge: 'New',
    icon: '📷',
    description: 'Dedicated photo tours timed around golden hour, led by professionals who know exactly where the light and wildlife will be.',
    image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=600&q=75',
    features: ['Golden hour sessions', 'Wildlife hides', 'Drone footage add-on', 'Print packages'],
    featured: false,
  },
]

const gorillaStats = [
  { value: '1,063', label: 'Mountain gorillas left globally' },
  { value: '1 hr', label: 'Permitted time with each family' },
  { value: '8+', label: 'Habituated gorilla families' },
]

const kivuActivities = [
  'Kayaking & guided boat tours',
  'Napoleon Island excursion',
  'Local wine tasting in Gisenyi',
  'Sunset cruises with private chefs',
  'Chimpanzee trekking in Nyungwe',
]

const pillars = [
  { icon: '🌿', title: 'Sustainable Travel', desc: 'Every booking contributes to conservation projects and local community programs across Rwanda.' },
  { icon: '🧭', title: 'Local Expertise', desc: 'Our guides are Rwandan-born with 10+ years of specialist field experience in each region.' },
  { icon: '🎯', title: 'Tailor-Made Only', desc: "We don't do group buses. Every trip is built around your interests, pace, and budget." },
  { icon: '🛡️', title: 'Fully Licensed', desc: 'RDB-accredited and fully insured for all activities including gorilla and chimpanzee trekking.' },
  { icon: '💬', title: '24/7 Support', desc: 'A dedicated travel concierge reachable by phone or WhatsApp throughout your entire stay.' },
  { icon: '✈️', title: 'End-to-End Planning', desc: 'From visa advice to packing lists — we handle every detail before you even land in Kigali.' },
]

const packages = [
  {
    name: 'Weekend Escape',
    duration: '3 Days / 2 Nights',
    price: '$890',
    includes: ['Kigali city tour', '1 gorilla trek', 'Airport transfers', 'Accommodation B&B'],
    highlighted: false,
  },
  {
    name: 'Classic Rwanda',
    duration: '7 Days / 6 Nights',
    price: '$2,490',
    includes: ['2 gorilla treks', 'Lake Kivu (2 nights)', 'Nyungwe forest', 'All meals included', 'Private 4WD'],
    highlighted: true,
  },
  {
    name: 'Grand Explorer',
    duration: '14 Days / 13 Nights',
    price: '$4,750',
    includes: ['3 gorilla treks', 'Golden monkey trek', 'Cultural village stays', 'Photography guide', 'All inclusive'],
    highlighted: false,
  },
]
</script>