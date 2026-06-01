<template>
  <div class="font-sans text-gray-800 bg-white">

    <!-- ── HERO ── -->
    <section class="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      <div
        class="absolute inset-0 bg-cover bg-center scale-105"
        style="background-image: url('/images/kigali/kigali-skyline.jpg')"
      ></div>
      <div class="absolute inset-0 bg-gradient-to-b from-black/65 via-black/45 to-black/75"></div>
      <div class="relative z-10 text-center px-6 text-white max-w-4xl mx-auto">
        <span class="inline-block text-xs font-semibold tracking-[4px] uppercase text-green-300 border border-green-400/40 px-4 py-1.5 rounded-full mb-8">
          Get In Touch
        </span>
        <h1 class="text-6xl md:text-7xl font-extrabold leading-none mb-6 tracking-tight">
          Contact <span class="text-green-400">Us</span>
        </h1>
        <p class="text-lg md:text-xl text-white/75 font-light leading-relaxed max-w-2xl mx-auto">
          Have a question about your trip? Ready to start planning? Our team is here to help you every step of the way.
        </p>
      </div>
    </section>

    <!-- ── CONTACT CARDS ── -->
    <section class="bg-white py-20 px-6">
      <div class="max-w-5xl mx-auto">
        <div class="text-center mb-14">
          <p class="text-green-600 text-sm font-semibold tracking-widest uppercase mb-4">Reach Us</p>
          <h2 class="text-4xl md:text-5xl font-extrabold text-gray-900">We'd Love to Hear From You</h2>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div
            v-for="info in contactInfo"
            :key="info.label"
            class="bg-gray-50 border border-gray-100 rounded-3xl p-8 text-center hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
          >
            <div class="w-14 h-14 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-5">
              <span class="text-2xl">{{ info.icon }}</span>
            </div>
            <h3 class="text-lg font-bold text-gray-900 mb-2">{{ info.label }}</h3>
            <p class="text-gray-500 text-sm leading-relaxed">{{ info.value }}</p>
            <a
              v-if="info.href"
              :href="info.href"
              class="inline-block mt-4 text-green-600 font-semibold text-sm hover:opacity-70 transition-opacity"
            >
              {{ info.action }} →
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- ── FORM + MAP ── -->
    <section class="bg-gray-50 py-24 px-6">
      <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">

        <!-- Form -->
        <div>
          <p class="text-green-600 text-sm font-semibold tracking-widest uppercase mb-4">Send a Message</p>
          <h2 class="text-4xl font-extrabold text-gray-900 mb-8 leading-tight">
            Plan Your Rwanda Journey
          </h2>
          <form @submit.prevent="handleSubmit" class="space-y-5">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-2">First Name</label>
                <input
                  v-model="form.firstName"
                  type="text"
                  placeholder="John"
                  class="w-full border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                />
              </div>
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-2">Last Name</label>
                <input
                  v-model="form.lastName"
                  type="text"
                  placeholder="Doe"
                  class="w-full border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                />
              </div>
            </div>
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
              <input
                v-model="form.email"
                type="email"
                placeholder="john@example.com"
                class="w-full border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
              />
            </div>
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
              <input
                v-model="form.phone"
                type="tel"
                placeholder="+250 7XX XXX XXX"
                class="w-full border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
              />
            </div>
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">Interested In</label>
              <select
                v-model="form.interest"
                class="w-full border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
              >
                <option value="" disabled>Select a service...</option>
                <option v-for="opt in interestOptions" :key="opt" :value="opt">{{ opt }}</option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">Your Message</label>
              <textarea
                v-model="form.message"
                rows="5"
                placeholder="Tell us about your dream Rwanda trip..."
                class="w-full border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              class="w-full bg-green-600 hover:bg-green-500 text-white font-bold py-4 rounded-xl transition-colors duration-200 text-base shadow-lg shadow-green-900/20"
            >
              Send Message →
            </button>
            <p v-if="submitted" class="text-center text-green-600 font-semibold text-sm pt-2">
              ✓ Message sent! We'll get back to you within 24 hours.
            </p>
          </form>
        </div>

        <!-- Info Panel -->
        <div class="space-y-8">
          <div>
            <p class="text-green-600 text-sm font-semibold tracking-widest uppercase mb-4">Our Location</p>
            <h2 class="text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
              Find Us in Kigali
            </h2>
            <p class="text-gray-500 text-lg leading-relaxed">
              Our office is located in the heart of Kigali, Rwanda's vibrant capital.
              We're happy to meet in person to plan your perfect Rwanda adventure.
            </p>
          </div>

          <!-- Map placeholder -->
          <div class="rounded-3xl overflow-hidden border border-gray-200 h-64 relative">
            <img
              src="/images/kigali/kigali-skyline.jpg"
              alt="Kigali location"
              class="w-full h-full object-cover"
            />
            <div class="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div class="text-center text-white">
                <div class="text-4xl mb-2">📍</div>
                <p class="font-bold text-lg">Kigali, Rwanda</p>
                <p class="text-white/70 text-sm">KG 123 Street, Gasabo</p>
              </div>
            </div>
          </div>

          <!-- Office hours -->
          <div class="bg-white border border-gray-100 rounded-3xl p-7">
            <h3 class="text-lg font-bold text-gray-900 mb-5 flex items-center gap-2">
              🕐 Office Hours
            </h3>
            <div class="space-y-3">
              <div v-for="h in officeHours" :key="h.days" class="flex justify-between items-center text-sm">
                <span class="text-gray-600">{{ h.days }}</span>
                <span
                  class="font-semibold px-3 py-1 rounded-full text-xs"
                  :class="h.open ? 'bg-green-100 text-green-700' : 'bg-red-50 text-red-500'"
                >
                  {{ h.hours }}
                </span>
              </div>
            </div>
          </div>

          <!-- Social links -->
          <div class="bg-green-700 rounded-3xl p-7 text-white">
            <h3 class="text-lg font-bold mb-4">Follow Our Journey</h3>
            <p class="text-green-200/75 text-sm mb-5">Stay inspired with daily Rwanda travel content</p>
            <div class="flex gap-3 flex-wrap">
              <a
                v-for="social in socials"
                :key="social.name"
                :href="social.href"
                class="bg-white/15 hover:bg-white/25 border border-white/20 px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors duration-200"
              >
                {{ social.icon }} {{ social.name }}
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- ── FAQ ── -->
    <section class="bg-white py-24 px-6">
      <div class="max-w-3xl mx-auto">
        <div class="text-center mb-14">
          <p class="text-green-600 text-sm font-semibold tracking-widest uppercase mb-4">Common Questions</p>
          <h2 class="text-4xl font-extrabold text-gray-900">Frequently Asked Questions</h2>
        </div>
        <div class="space-y-4">
          <div
            v-for="(faq, i) in faqs"
            :key="i"
            class="border border-gray-200 rounded-2xl overflow-hidden"
          >
            <button
              class="w-full text-left px-6 py-5 flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
              @click="toggleFaqTranslated(i)"
            >
              <span class="font-semibold text-gray-900 text-sm md:text-base">{{ faq.q }}</span>
              <svg
                class="w-5 h-5 text-green-600 shrink-0 transition-transform duration-200"
                :class="openFaq === i ? 'rotate-180' : ''"
                fill="none" viewBox="0 0 24 24"
              >
                <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </button>
            <div v-if="openFaq === i" class="px-6 pb-5">
              <p class="text-gray-500 text-sm leading-relaxed">{{ faq.a }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ── CTA ── -->
    <section class="bg-gray-900 text-white py-24 px-6 text-center relative overflow-hidden">
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(22,163,74,0.15)_0%,_transparent_70%)]"></div>
      <div class="relative z-10 max-w-3xl mx-auto">
        <p class="text-green-400 text-sm font-semibold tracking-widest uppercase mb-6">Let's Go</p>
        <h2 class="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
          Ready to Visit <span class="text-green-400">Rwanda?</span>
        </h2>
        <p class="text-xl text-gray-400 max-w-xl mx-auto mb-12 leading-relaxed">
          Our team is standing by to help you plan an unforgettable journey through the Land of a Thousand Hills.
        </p>
        <RouterLink
          to="/service"
          class="bg-green-600 hover:bg-green-500 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg shadow-green-900/40"
        >
          View Our Services
        </RouterLink>
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref, nextTick } from 'vue'
import { locale, translateDOM } from '../translation.js'

const submitted = ref(false)
const openFaq = ref(null)

const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  interest: '',
  message: '',
})

const interestOptions = [
  'Gorilla Trekking',
  'Wildlife Safari',
  'Cultural Tour',
  'Lake Kivu Escape',
  'Photography Tour',
  'Custom Package',
]

const contactInfo = [
  {
    icon: '📍',
    label: 'Our Office',
    value: 'KG 123 Street, Gasabo\nKigali, Rwanda',
    href: 'https://maps.google.com',
    action: 'Get Directions',
  },
  {
    icon: '📞',
    label: 'Call Us',
    value: '+250 788 000 000\nMon–Sat, 8am–6pm',
    href: 'tel:+250788000000',
    action: 'Call Now',
  },
  {
    icon: '✉️',
    label: 'Email Us',
    value: 'info@visitrwanda.rw\nReply within 24 hours',
    href: 'mailto:info@visitrwanda.rw',
    action: 'Send Email',
  },
]

const officeHours = [
  { days: 'Monday – Friday', hours: '8:00am – 6:00pm', open: true },
  { days: 'Saturday', hours: '9:00am – 4:00pm', open: true },
  { days: 'Sunday', hours: 'Closed', open: false },
]

const socials = [
  { name: 'Instagram', icon: '📸', href: '#' },
  { name: 'Facebook', icon: '👍', href: '#' },
  { name: 'WhatsApp', icon: '💬', href: '#' },
]

const faqs = [
  {
    q: 'Do I need a visa to visit Rwanda?',
    a: 'Citizens of most African countries can enter Rwanda visa-free. Visitors from other countries can obtain a visa on arrival or apply online via the Rwanda e-visa portal. We recommend applying online before travel.',
  },
  {
    q: 'When is the best time to visit Rwanda?',
    a: 'Rwanda can be visited year-round, but the best time for gorilla trekking is during the dry seasons: June–September and December–February. The rainy seasons bring lush green landscapes and fewer crowds.',
  },
  {
    q: 'How do I book a gorilla trekking permit?',
    a: 'Gorilla permits must be obtained through the Rwanda Development Board (RDB). We handle permit bookings for all our clients as part of our trekking packages — just contact us and we take care of everything.',
  },
  {
    q: 'What is included in your tour packages?',
    a: 'Our packages typically include accommodation, meals, park fees, permits, private 4WD transport, and expert guide services. Each package is customizable — reach out to discuss exactly what you need.',
  },
  {
    q: 'Is Rwanda safe for tourists?',
    a: "Rwanda is consistently ranked one of Africa's safest countries for travelers. Kigali is particularly noted for its cleanliness, low crime rates, and friendly locals. We recommend standard travel precautions as you would anywhere.",
  },
]

function handleSubmit() {
  submitted.value = true
  form.value = { firstName: '', lastName: '', email: '', phone: '', interest: '', message: '' }
  setTimeout(() => { submitted.value = false }, 5000)
}

function toggleFaq(i) {
  openFaq.value = openFaq.value === i ? null : i
}

// ensure newly rendered dynamic content is translated when locale is active
function toggleFaqTranslated(i) {
  toggleFaq(i)
  nextTick(() => {
    if (locale.value === 'ki') translateDOM(document.body, 'ki')
  })
}
</script>
