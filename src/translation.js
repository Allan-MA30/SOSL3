import { ref } from 'vue'

const locale = ref('en')

if (typeof window !== 'undefined') {
  const savedLocale = localStorage.getItem('locale')
  if (savedLocale === 'ki') {
    locale.value = 'ki'
  }
}

const enToKi = {
  'Home': 'Ahabanza',
  'About Us': 'Ibyerekeye',
  'Services': 'Serivisi',
  'Contact Us': 'Vugana Natwe',
  'Gallery': 'Ikaragiro',
  'Destinations': 'Aho ujya',
  'Northern Province': 'Amajyaruguru',
  'Southern Province': 'Amajepfo',
  'Eastern Province': 'Iburasirazuba',
  'Western Province': 'Iburengerazuba',
  'Kigali City': 'Umujyi wa Kigali',
  'View Our Services': 'Reba Serivisi zacu',
  'Start Your Journey': 'Tangira Urugendo rwawe',
  'Explore Rwanda': 'Sura u Rwanda',
  "Africa's Hidden Gem": 'Icyihishe cyiza cyu Afurika',
  'Welcome to': 'Murakaza neza kuri',
  'The Land of a Thousand Hills': "Igihugu cy'imisozi igihumbi",
  'Breathtaking landscapes, incredible wildlife, vibrant culture, and unforgettable adventures — all in one extraordinary destination.': 'Imisozi itangaje, inyamaswa zidasanzwe, umuco wuzuye ubuzima, n\'ibikorwa bitazibagirana — byose hamwe ahantu hatangaje.',
  'Our Services': 'Serivisi zacu',
  'Scroll': 'Komeza',
  'About Rwanda': 'Ibyerekeye u Rwanda',
  'Rwanda is a country of extraordinary beauty — rolling hills, mountain gorillas, pristine national parks, shimmering lakes, rich cultural heritage, and incredibly welcoming people. Whether you seek adventure, relaxation, wildlife encounters, or deep cultural experiences, Rwanda has something unforgettable waiting for you.': 'Rwanda ni igihugu cyiza cyane — imisozi igororotse, gorila zo mu misozi, parike zidasobanutse, ibiyaga byaka, umuco ukungahaye, n\'abantu bakwakira neza. Niba ushaka ubutwari, kuruhuka, guhura n\'inyamaswa, cyangwa uburambe bw\'umuco, u Rwanda bufite ibyibukwa bidashira.',
  'Top Attractions': 'Aho hagaragara cyane',
  'Featured Destinations': 'Aho ujya hihariye',
  'Explore Rwanda\'s most iconic and awe-inspiring places': 'Sura ahantu hazwi cyane kandi bishimishije by\'u Rwanda',
  'Discover Rwanda\'s Big Five safari destination with lions, elephants, giraffes, and rhinos.': 'Sura ahantu h\'umuhigo h\'iza safari y\'inyamaswa eshanu mu Rwanda ifite intare, inzovu, inzovu, n\'inzovu.',
  'Discover wildlife safaris, beautiful lakes, birdwatching, and stunning savannah landscapes.': 'Sura safari z\'inyamaswa, ibiyaga byiza, kureba inyoni, n\'ibice by\'ubutaka byiza bya savana.',
  'Experience one of Africa\'s cleanest, safest, and most modern cities.': 'Wibonere umujyi umwe mu midugudu isukuye cyane, itekanye, kandi igezweho muri Afurika.',
  'Discover the beauty of the land of a thousand hills.': 'Sura ubwiza bw\'igihugu cy\'imisozi igihumbi.',
  'Discover More': 'Menya byinshi',
  'Regions': 'Intara',
  'Explore Rwanda\'s Regions': 'Sura Intara z\'u Rwanda',
  'Why Visit Rwanda?': 'Kuki gusura u Rwanda?',
  'A destination unlike any other on the African continent': 'Ahantu hadasanzwe ku mugabane w\'Afurika',
  'Big Five Safari': 'Safari y\'inyamaswa eshanu',
  'Volcanoes': 'Imisozi miremire',
  'Lakes & Rivers': 'Ibiyaga n\'Imigezi',
  'Rich Culture': 'Umuco ukize',
  'Modern Cities': 'Imijyi igezweho',
  'Lake Burera & Lake Ruhondo — Northern Province': 'Ibyaga Burera na Ruhondo — Intara y\'Amajyaruguru',
  'Natural Wonder': 'Icyamamare kamere',
  'Twin Lakes of Rwanda': 'Ibiyaga bibiri by\'u Rwanda',
  'Lake Burera and Lake Ruhondo are among Rwanda\'s most breathtaking destinations. Cradled by volcanoes and rolling emerald hills, these twin lakes offer stunning scenery and unforgettable photography opportunities.': 'Ibiyaga Burera na Ruhondo ni bimwe mu byiza by\'u Rwanda bidashobora kwibagirana. Biherereye ku misozi ya volkanike n\'imisozi y\'icyatsi, ibi biyaga bibiri bitanga ibyiza bikomeye n\'amahirwe yo gufata amafoto atazibagirana.',
  'Visitors enjoy peaceful boat rides, nature walks, authentic local culture, and serene retreats in one of the country\'s most magical regions.': 'Abashyitsi bishimira ingendo mu bwato butuje, gutembera mu bidukikije, umuco nyarwanda nyawo, n\'ahantu ho kuruhukira mu karere kamwe kagizwe n\'ubusitani bwinshi.',
  'Explore Northern Province': 'Sura Intara y\'Amajyaruguru',
  'Signature Experience': 'Uburambe bwihariye',
  'Trek with Mountain Gorillas': 'Genda gusura gorila zo mu misozi',
  'Rwanda is home to over a third of the world\'s remaining mountain gorillas. In Volcanoes National Park, expert guides lead small groups through ancient bamboo forests to spend a breathtaking hour face-to-face with these magnificent creatures.': 'U Rwanda ni urugo rw\'abenshi mu buryo burenga kimwe cya gatatu bya gorila zasigaye ku isi. Muri Parike ya Volcanoes, abayobozi b\'inararibonye bayobora amatsinda mato mu mashyamba ya bambou ya kera kugira ngo bamare isaha itazibagirana bahuye n\'izi nyamaswa zikomeye.',
  'Over 1/3 of the world\'s remaining mountain gorillas': 'Birenga 1/3 by\'ama gorila asigaye ku isi',
  'Expert certified guides with 10+ years experience': 'Abayobozi babifitiye ubuhanga bafite uburambe bw\'imyaka 10+',
  'Small groups of maximum 8 trekkers': 'Amatsinda mato y\'abagenzi batarengeje 8',
  'Permits support gorilla conservation directly': 'Permis zishyigikira kurengera gorila mu buryo butaziguye',
  'View Trekking Packages': 'Reba amapaki yo gusura',
  'Your Journey Awaits': 'Urugendo rwawe ruragutegereje',
  'Ready to Explore Rwanda?': 'Witeguye gusura u Rwanda?',
  'Experience breathtaking landscapes, incredible wildlife, vibrant culture, and unforgettable adventures in the heart of Africa.': 'Ubonye imisozi itangaje, inyamaswa zidasanzwe, umuco wuzuye ubuzima, n\'ibikorwa bitazibagirana mu mutima wa Afurika.',
  'Start Your Journey': 'Tangira urugendo rwawe',
  'Quick Links': 'Imiyoboro yihuse',
  'About': 'Ibyerekeye',
  'Contacts': 'Itumanaho',
  'Email:': 'Imeli:',
  'Phone:': 'Telefoni:',
  'Address:': 'Aderesi:',
  '© 2025 Tembera U Rwanda. All rights reserved.©': '© 2025 Tembera U Rwanda. Uburenganzira bwose burabitswe.©',
  'View Services': 'Reba Serivisi',
  'Explore Kigali': 'Sura Kigali',
  'Explore Northern': 'Sura Amajyaruguru',
  'Explore Eastern': 'Sura Iburasirazuba',
  'Explore Regions': 'Sura Akarere',
  'Book Now': 'Bika Ubu',
  'Send Booking Request': 'Ohereza Icyifuzo',
  'Ready to Book?': 'Witeguye Gufata Igitabo?',
  'Ready to Explore': 'Witeguye Gusura?',
  "Thank you! Your request has been sent.": 'Murakoze! Ubusabe bwawe bwoherejwe.',
  'Email Address': 'Imeli',
  'Full Name': 'Amazina Yuzuye',
  'Phone Number': 'Numero ya Telefoni',
  'Number of Travelers': 'Umubare w\'Abagenzi',
  'Preferred Arrival': 'Igihe wifuza kugera',
  'Service Interested In': 'Serivisi wifuza',
  'Your Message': 'Ubutumwa bwawe',
  'Gorilla & Wildlife Safaris': 'Inzira za Gorila n\'Ubuzima bw\'inyamaswa',
  'Luxury Accommodation': 'Aho kuraramo y\'Icyubahiro',
  'Cultural Immersion Tours': 'Ingendo z\'Umuco',
  'Lake Kivu Escapes': 'Kuruhukira ku Kiyaga Kivu',
  'Private Transportation': 'Ubwikorezi bw\'Abigenga',
  'Photography Experiences': 'Uburambe bwo gufotora',
  'What We Offer': 'Ibyo Dutanga',
  'Everything You Need': 'Ibyose Ukeneye',
  'Carefully designed experiences for an authentic, seamless Rwandan adventure.': 'Uburambe bwateguwe neza ku rugendo nyakuri, rutagira imbogamizi mu Rwanda.',
  'Our Services': 'Serivisi zacu',
  'Signature Experience': 'Uburambe Bwihariye',
  'Enquire About Trekking': 'Saba Amakuru ku Gukora Trek',
  'Water Escapes': 'Kuruhukira ku mazi',
  'Plan Your Lake Escape': 'Tegura Kuruhukira ku kiyaga',
  'Our Promise': 'Isezerano Ryacu',
  'Why Travel With Us': 'Kuki Ugomba Kutugendana',
  'Popular Packages': 'Amapaketi Akwiranye',
  'Curated itineraries — fully customizable to your pace.': 'Amapaki yateguwe — ashobora guhindurwa byose ku muvuduko wawe.',
  'Ready to Discover Rwanda?': 'Witeguye Kumenya u Rwanda?',
  'Start Planning': 'Tangira Gahunda',
  'Call Us': 'Tumamagare',
  'Welcome to Kigali City': 'Murakaza neza mu Mujyi wa Kigali',
  'Explore Kigali': 'Sura Kigali',
  'Discover the Heart of Rwanda': 'Sobanukirwa Umutima w\'u Rwanda',
  'Kigali is the economic, cultural, and administrative center of Rwanda. Known as the "Land of a Thousand Hills," Rwanda\'s capital showcases impressive urban planning, environmental sustainability, and vibrant communities. Visitors are often amazed by the city\'s cleanliness, friendly residents, efficient transportation system, and remarkable safety standards.': 'Kigali ni umujyi w\'ubukungu, umuco, n\'ubuyobozi mu Rwanda. Uzwi nka "Igihugu cy\'Imisozi Igihumbi," umurwa mukuru w\'u Rwanda werekana igenamigambi ry\'umujyi rikomeye, kubungabunga ibidukikije, n\'imiryango y\'abantu itoshye. Abashyitsi bakunze guhezwa n\'isuku y\'umujyi, abatuye bashyira mu kuri, uburyo bwo gutwara abantu buhuse, n\'umutekano budasanzwe.',
  "Kigali, the capital city of Rwanda, is one of Africa's cleanest, safest, and fastest-growing cities. Built across beautiful rolling hills, Kigali offers visitors a unique combination of modern architecture, rich culture, historical significance, excellent hospitality, and breathtaking scenery. Whether you are interested in learning Rwanda's history, experiencing local markets, enjoying luxury hotels, or exploring green urban spaces, Kigali provides an unforgettable experience for every traveler.": "Kigali, umurwa mukuru w\'u Rwanda, ni umwe mu mijyi isukuye, itekanye, kandi ikura vuba muri Afurika. Yubatswe ku misozi myiza igororotse, Kigali itanga ku bashyitsi ubuvanganzo bw\'ubwubatsi bugezweho, umuco ukungahaye, amateka y\'ingenzi, kwakira neza, n\'ibyiza bitangaje. Niba ushaka kumenya amateka y\'u Rwanda, gusura amasoko asanzwe, kwishimira amahoteli y\'icyubahiro, cyangwa gusura ahantu h\'icyatsi mu mujyi, Kigali itanga uburambe butazibagirana ku mucyo wese.",
  'Discover the Heart of Rwanda': 'Sobanukirwa Umutima w\'u Rwanda',
  'Top Tourist Attractions': 'Aho hantu nyabagendwa h\'ingenzi',
  'Kigali Convention Centre': 'Ikigo cya Kigali cy\'Inama',
  'One of Rwanda\'s most iconic landmarks, recognized for its beautiful dome illuminated at night. It hosts international conferences, exhibitions, and major events.': 'Kimwe mu biranga u Rwanda bizwi cyane, kizwi kubera dome nziza y\'aka umucyo nijoro. Cyakira inama mpuzamahanga, imurikagurisha, n\'ibikorwa bikomeye.',
  'Kigali Genocide Memorial': 'Urwibutso rwa Jenoside rwa Kigali',
  'A powerful site dedicated to preserving the memory of the victims of the 1994 Genocide against the Tutsi and promoting peace, unity, and reconciliation.': 'Ahantu hakomeye hagenewe kubungabunga urwibutso rw\'abantu bahitanywe na Jenoside yakorewe Abatutsi mu 1994 no guteza imbere amahoro, ubumwe, no gusabana.',
  'Kimironko Market': 'Isoko rya Kimironko',
  "Kigali's largest market where visitors can explore fresh produce, traditional fabrics, local crafts, and experience daily Rwandan life.": 'Isoko rinini rya Kigali aho abashyitsi bashobora gusura imboga n\'imbuto by\'umutekano, imyenda gakondo, ubukorikori bw\'aho, no kwiyumvamo ubuzima bwa buri munsi bw\'u Rwanda.',
  'Nyandungu Eco Park': 'Parike y\'ibidukikije ya Nyandungu',
  'A beautiful ecological park featuring wetlands, walking trails, cycling paths, birdwatching areas, and natural landscapes.': 'Parike y\'ibidukikije nziza ifite ibiyaga, inzira zo kugendagenda, imihanda yo gusiganwa ku maguru, ahantu ho kurebera inyoni, n\'ibice by\'ibidukikije by\'ubwiza buhanitse.',
  'Why Tourists Love Kigali': 'Kuki Abakerarugendo bakunda Kigali',
  'Clean Environment': 'Ibidukikije by\'isuku',
  'Rich Culture': 'Umuco ukungahaye',
  'Modern Lifestyle': 'Uburyo bugezweho bwo kubaho',
  'Kigali is internationally recognized for its cleanliness and environmental conservation efforts.': 'Kigali izwi ku isi yose kubera isuku yayo no kubungabunga ibidukikije.',
  'Museums, cultural villages, traditional dances, local cuisine, and community experiences offer visitors authentic Rwandan culture.': 'Inzu ndangamurage, ibyaro bya kinyarwanda, imbyino gakondo, ibiryo by\'abaturage, n\'uburambe bw\'umuryango bitanga umuco nyakuri w\'u Rwanda ku bashyitsi.',
  'Modern hotels, shopping centers, conference facilities, restaurants, and nightlife make Kigali a world-class destination.': 'Amahoteli y\'ikoranabuhanga, ibigo by\'ubucuruzi, ibikorwaremezo by\'inama, resitora, n\'ubuzima bwo nijoro bituma Kigali iba ahantu h\'isi yose.',
  'Eastern Province': 'Intara y\'Iburasirazuba',
  "Welcome to Rwanda's Eastern Province, a region blessed with vast savannah landscapes, beautiful lakes, abundant wildlife, and rich cultural heritage. Home to the famous Akagera National Park, this province offers unforgettable safari experiences, birdwatching, boat cruises, and breathtaking natural scenery.": 'Murakaza neza mu Ntara y\'Iburasirazuba y\'u Rwanda, akarere kagizwe n\'ubutaka bwa savane, ibiyaga by\'ubwiza, inyamaswa nyinshi, n\'umurage ukungahaye w\'umuco. Kayobora Parike y\'Igihugu ya Akagera izwi, iyi ntara itanga safari zidashobora kwibagirana, kureba inyoni, ingendo mu bwato, n\'ibyiza by\'ibidukikije by\'igitangaza.',
  'Discover Eastern Province': 'Sura Intara y\'Iburasirazuba',
  'Explore Rwanda\'s Wildlife Paradise': 'Sura Paradizo y\'inyamaswa y\'u Rwanda',
  "Eastern Province is Rwanda's largest province and a destination filled with extraordinary biodiversity, scenic lakes, and welcoming communities. Visitors can enjoy game drives, nature walks, cultural tours, fishing activities, and some of the most spectacular sunsets in Rwanda.": 'Intara y\'Iburasirazuba ni intara nini mu Rwanda kandi ni ahantu yuzuye ubwoko bw\'inyamaswa butangaje, ibiyaga by\'ubwiza, n\'imiryango y\'akazuye. Abashyitsi bashobora kwishimira ingendo za safari, kugendagenda mu kamere, ingendo z\'umuco, ibikorwa by\'ufu, n\'izuba rigwa ry\'ibirebure cyane mu Rwanda.',
  'Akagera National Park': 'Parike y\'Igihugu ya Akagera',
  "Rwanda's only savannah national park and home to the Big Five: lions, elephants, buffaloes, rhinos, and leopards.": 'Ni yo parike yonyine ya savane mu Rwanda ikaba inzu y\'inyamaswa eshanu zikomeye: intare, inzovu, inka mpongo, inzovu y\'uruhu, n\'ibisiga.',
  'Lake Ihema': 'Ikiyaga Ihema',
  'Famous for boat cruises, hippos, crocodiles, and a wide variety of bird species found along its shores.': 'Izwi kubera ingendo mu bwato, ingona, inzovu, n\'ubwoko bunyuranye bw\'inyoni zigaragara ku nkengero zayo.',
  'Lake Muhazi': 'Ikiyaga Muhazi',
  'A peaceful destination perfect for relaxation, swimming, fishing, kayaking, and lakeside retreats.': 'Ahantu hatuje heza ku kuruhuka, koga, kuroba, kayak, no kuruhukira ku nkengero z\'ikiyaga.',
  'Gako Forest': 'Isambu ya Gako',
  'A natural forest reserve offering beautiful landscapes, biodiversity, and opportunities for nature exploration.': 'Agasambu k\'urusobe kamere gutanga ibice by\'ubwiza, ubwoko bwinshi bw\'ibinyabuzima, n\'amahirwe yo gusuzuma kamere.',
  'Wildlife and Nature': 'Inyamaswa n\'Ubuzima bw\'Imbibi',
  "Eastern Province is renowned for its rich wildlife. Visitors to Akagera National Park can encounter elephants, giraffes, zebras, lions, rhinos, antelopes, hippos, crocodiles, and more than 500 species of birds. The combination of savannah, wetlands, lakes, and woodlands creates one of East Africa's most unique ecosystems.": 'Intara y\'Iburasirazuba izwi ku nyamaswa zayo zikungahaye. Abashyitsi bayobowe muri Parike ya Akagera bashobora guhura n\'inzovu, inzovu z\'inyamaswa, imigogo, intare, inka mpongo, impala, ibinya, ingona, n\'ibinyoni birenga 500. Ubufatanye bwa savane, ibiyaga, ibiyaga byawetland, n\'ishyamba rikoranye bitanga kimwe mu bigize ubusitani budasanzwe muri Afurika yo\'Iburasirazuba.',
  'Experience the Adventure': 'Wibonere Uburyohe bw\'Ubutwari',
  "Whether you are looking for a luxury safari, a peaceful lakeside retreat, birdwatching, photography, or cultural experiences, Eastern Province offers unforgettable adventures for visitors from around the world.": 'Niba ushaka safari y\'icyubahiro, kuruhukira ku nkengero z\'ikiyaga, kureba inyoni, gufotora, cyangwa uburambe bw\'umuco, Intara y\'Iburasirazuba itanga aventures zidashobora kwibagirana ku bashyitsi baturutse impande zose z\'isi.',
  'Northern Province': 'Intara y\'Amajyaruguru',
  "Welcome to Rwanda's Northern Province, home to the world-famous mountain gorillas, majestic volcanoes, breathtaking landscapes, and unforgettable wildlife experiences. This region is one of Africa's most extraordinary eco-tourism destinations, attracting visitors from every corner of the globe.": 'Murakaza neza mu Ntara y\'Amajyaruguru y\'u Rwanda, urugo rw\'abgorila bo mu misozi bazwi ku isi, imisozi ya volkanike iteye ubwuzu, ibice by\'ubwiza butangaje, n\'uburambe budasanzwe bw\'inyamaswa. Aka karere ni kamwe mu hantu h\'ubukerarugendo bw\'ibidukikije butangaje muri Afurika, gakurura abashyitsi baturutse mu mpande zose z\'isi.',
  'Explore Northern Province': 'Sura Intara y\'Amajyaruguru',
  'Land of Mountains and Gorillas': 'Igihugu cy\'Imisozi na Gorila',
  "Northern Province is known for its cool climate, rolling hills, volcanic mountains, rich biodiversity, and welcoming communities. The province offers visitors a rare opportunity to encounter endangered mountain gorillas in their natural habitat while also enjoying hiking, cave exploration, cultural tourism, and stunning panoramic views.": 'Intara y\'Amajyaruguru izwi ku ikirere cy\'ubukonje, imisozi igororotse, imisozi ya volkanike, ubwoko bwinshi bw\'ibinyabuzima, n\'imiryango yakira neza. Iyo ntara itanga ku bashyitsi amahirwe adasanzwe yo guhura na gorila zo mu misozi mu buryo bw\'akarere kazo kavukamo kandi no kwishimira kuzamuka imisozi, gusura amakozi, ubukerarugendo bw\'umuco, n\'ibitekerezo by\'ibyiza bihebuje.',
  'Volcanoes National Park': 'Parike y\'Igihugu ya Volcanoes',
  "Rwanda's most famous national park, known worldwide for mountain gorilla trekking and spectacular volcanic scenery.": 'Parike y\'Igihugu izwi cyane mu Rwanda, izwi ku isi yose kubera gusura gorila zo mu misozi no kubera ibyiza by\'imisozi ya volkanike.',
  'Mountain Gorillas': 'Gorila zo mu Misozi',
  'Experience one of the world\'s most remarkable wildlife encounters by observing mountain gorillas in their natural environment.': 'Wibonere kimwe mu guhura n\'inyamaswa by\'ibitangaza ku isi ureba gorila zo mu misozi mu buryo bw\'akarere kazo kavukamo.',
  'Musanze Caves': 'Amasashi ya Musanze',
  'Explore ancient underground lava caves formed thousands of years ago by volcanic activity.': 'Sura amayaga gakondo yasinze mu butaka akorwa imyaka ibihumbi ishize n\'ibikorwa bya volkanike.',
  'Twin Lakes': 'Ibiyaga Bibiri',
  'Lake Burera and Lake Ruhondo offer breathtaking scenery, boat rides, photography opportunities, and peaceful retreats.': 'Ikigega Burera na Ruhondo bitanga ibyiza biteye ubwuzu, ingendo mu bwato, amahirwe yo gufotora, n\'ahantu ho kuruhukira hatuje.',
  'Gorilla Trekking Experience': 'Uburambe bwo Gusura Gorila',
  "Gorilla trekking is Rwanda's most celebrated tourism activity. Guided by experienced rangers, visitors hike through the forests of Volcanoes National Park to observe endangered mountain gorillas. This once-in-a-lifetime experience not only creates unforgettable memories but also supports wildlife conservation and local communities.": 'Gusura gorila ni kimwe mu bikorwa by\'ubukerarugendo by\'u Rwanda bizwi cyane. Iyobowe n\'abaziranye bafite ubunararibonye, abashyitsi bazamuka mu mashyamba ya Parike ya Volcanoes ngo barebe gorila zo mu misozi ziri mu kaga. Uburambe buhabwa rimwe muri iki gihe butanga ibyibutsa bidashobora kwibagirana kandi bushyigikira kubungabunga inyamaswa n\'imiryango y\'aho.',
  'The Virunga Volcanoes': 'Imisozi ya Virunga',
  "Northern Province is home to several magnificent volcanoes, including Mount Karisimbi, Mount Bisoke, Mount Sabyinyo, Mount Gahinga, and Mount Muhabura. These mountains provide exceptional hiking adventures and some of the most spectacular views in East Africa.": 'Intara y\'Amajyaruguru irimo imisozi myinshi itangaje, harimo Umusozi Karisimbi, Umusozi Bisoke, Umusozi Sabyinyo, Umusozi Gahinga, n\'Umusozi Muhabura. Iyi misozi itanga aventure zidasanzwe zo kuzamuka n\'ibitekerezo by\'ibyiza byinshi muri Afurika yo\'Iburasirazuba.',
  'Why Visit Northern Province?': 'Kuki Usura Intara y\'Amajyaruguru?',
  'Wildlife': 'Inyamaswa',
  'Adventure': 'Ubutwari',
  'Culture': 'Umuco',
  'Meet the world-famous mountain gorillas and discover unique wildlife found nowhere else on Earth.': 'Hura na gorila zo mu misozi zizwi ku isi kandi usangire inyamaswa zidafite uko zingana zihari hose ku isi.',
  'Enjoy hiking, volcano climbing, cave exploration, and nature walks through stunning mountain landscapes.': 'Ishimishe kuzamuka imisozi, gusimbuka imisozi ya volkanike, gusura amayaga, no kugendagenda mu bidukikije by\'imisozi birebire.',
  'Experience traditional Rwandan culture, local communities, dance performances, and authentic hospitality.': 'Wibonere umuco gakondo w\'u Rwanda, imiryango y\'aho, imbyino, n\'ubwakira nyakuri.',
  'Southern Province': 'Intara y\'Amajepfo',
  "Welcome to Rwanda's Southern Province, a region renowned for its rich cultural heritage, historical landmarks, magnificent forests, and unique wildlife experiences. From the ancient royal traditions of Nyanza to the breathtaking rainforest of Nyungwe National Park, Southern Province offers unforgettable adventures for nature lovers, historians, researchers, and travelers from around the world.": 'Murakaza neza mu Ntara y\'Amajepfo y\'u Rwanda, akarere kazwi ku murage ukungahaye w\'umuco, ibimenyetso by\'amateka, amashyamba amaze igihe kirekire, n\'uburambe budasanzwe bw\'inyamaswa. Uhereye ku muco wa cyami wa kera wa Nyanza kugeza ku ishyamba rikonje rya Nyungwe, Intara y\'Amajepfo itanga aventure zidashobora kwibagirana ku bakunda kamere, abavuga amateka, abashakashatsi, n\'abagenzi baturutse impande zose z\'isi.',
  'Discover Southern Province': 'Sura Intara y\'Amajepfo',
  'The Cultural and Natural Treasure of Rwanda': 'Icyubahiro cy\'umuco n\'ibyiza kamere by\'u Rwanda',
  "Southern Province is one of Rwanda's most fascinating destinations. Visitors can explore ancient royal palaces, learn about Rwanda's history and traditions, walk above rainforest canopies, encounter chimpanzees in the wild, and enjoy scenic tea plantations spread across rolling hills. The province combines education, adventure, culture, and conservation in one remarkable destination.": 'Intara y\'Amajepfo ni imwe mu hantu bishimishije cyane mu Rwanda. Abashyitsi bashobora gusura ingoro za cyami za kera, kumenya amateka n\'imyemerere y\'u Rwanda, kugenda hejuru y\'imyobo y\'ishyamba rya rainforest, guhura n\'inkende mu gasozi, no kwishimira ibibabi by\'icyayi bikururwa mu misozi igororotse. Iyo ntara ihuriza hamwe ubumenyi, ubutwari, umuco, no kubungabunga mu kantu kamwe k\'igitangaza.',
  'Nyungwe National Park': 'Parike y\'Igihugu ya Nyungwe',
  "One of Africa's oldest rainforests, famous for its biodiversity, hiking trails, waterfalls, birds, and primates.": 'Kimwe mu mashyamba ya rainforest asaza muri Afurika, kizwi kubera ubwoko bwinshi bw\'ibinyabuzima, inzira zo kuzamuka, imigezi, ibinyoni, n\'inkende zo mu gace.',
  'Canopy Walkway': 'Inzira yo mu Gisenge cy\'ishyamba',
  "Walk high above the rainforest on East Africa's famous canopy bridge and enjoy breathtaking views of Nyungwe Forest.": 'Genda hejuru mu gisenge cy\'ishyamba ku mupaka uzwi wa Afurika y\'Iburasirazuba kandi wishimire ibitekerezo by\'ibyiza by\'ishyamba rya Nyungwe.',
  "King's Palace Museum": 'Inzu Ndangamurage y\'Ingoro ya Mwami',
  "Discover Rwanda's royal history and traditional architecture at the restored palace in Nyanza.": 'Menya amateka y\'icyami y\'u Rwanda n\'ubwubatsi gakondo mu ngoro yasubiwemo i Nyanza.',
  'Ethnographic Museum': 'Inzu Ndangamurage y\'Abantu',
  "One of Africa's finest museums showcasing Rwanda's culture, traditions, history, and heritage.": 'Kimwe mu nzu ndangamurage nziza cyane muri Afurika yerekana umuco w\'u Rwanda, imigenzo, amateka, n\'umurage.',
  'Wildlife and Chimpanzee Trekking': 'Inyamaswa n\'Ubukerarugendo bw\'Inkende',
  "Nyungwe National Park is home to more than 13 species of primates, including chimpanzees, colobus monkeys, and mangabeys. Guided chimpanzee trekking adventures allow visitors to observe these intelligent animals in their natural rainforest habitat while learning about conservation efforts that protect Rwanda's wildlife.": 'Parike y\'Igihugu ya Nyungwe ni urugo rw\'ubwoko burenga 13 bw\'inkende, harimo inkende, inkende z\'ilibogous, n\'inkende za mangabey. Ingendo z\'ubukerarugendo bw\'inkende ziyobowe zigira abashyitsi kureba izi nyamaswa z\'ubwenge mu murima w\'ishyamba rya rainforest kandi bakamenya uko zirengerwa ngo zirindwe ubuzima bw\'inyamaswa mu Rwanda.',
  'Scenic Tea Plantations': 'Imiryango y\'Icyayi y\'Igishushanyo',
  "Southern Province is famous for its lush tea plantations stretching across rolling hills. Visitors can tour tea estates, learn about tea production, and enjoy spectacular views of Rwanda's green countryside while tasting world-class Rwandan tea.": 'Intara y\'Amajepfo izwi ku mirima y\'icyayi ikungahaye ikwirakwizwa ku misozi igororotse. Abashyitsi bashobora gusura imirima y\'icyayi, kumenya uko icyayi gitegurwa, no kwishimira ibitekerezo by\'ibyiza by\'icyatsi by\'icyaro cy\'u Rwanda mu gihe banywera icyayi cy\'isi.',
  'Why Visit Southern Province?': 'Kuki Usura Intara y\'Amajepfo?',
  'Culture & History': 'Umuco n\'Amateka',
  'Rainforest Adventure': 'Ubutwari mu Ishyamba rya Rainforest',
  'Natural Beauty': 'Ubwiza Kamere',
  "Explore royal palaces, museums, and cultural sites that tell the story of Rwanda's rich heritage and traditions.": 'Sura ingoro za cyami, inzu ndangamurage, n\'ahantu h\'umuco byerekana amateka n\'umurage ukungahaye w\'u Rwanda.',
  'Experience hiking trails, waterfalls, canopy walks, and chimpanzee trekking in the magnificent Nyungwe rainforest.': 'Wibonere inzira zo kuzamuka, imigezi, inzira zo mu gisenge cy\'ishyamba, n\'ubukerarugendo bw\'inkende mu ishyamba rikomeye rya Nyungwe.',
  'Enjoy breathtaking landscapes, tea plantations, mountain views, and some of the most beautiful scenery in Rwanda.': 'Ishimishe ibice by\'ubwiza bitangaje, imirima y\'icyayi, ibyiza by\'imisozi, n\'ibindi bice by\'ubwiza cyane mu Rwanda.',
  'Western Province': 'Intara y\'Iburengerazuba',
  "Welcome to Rwanda's Western Province, home to the magnificent Lake Kivu, breathtaking mountains, tropical islands, beautiful beaches, and unforgettable outdoor adventures. This province offers visitors a perfect combination of relaxation, nature, water activities, and cultural experiences along one of Africa's most beautiful freshwater lakes.": 'Murakaza neza mu Ntara y\'Iburengerazuba y\'u Rwanda, urugo rw\'Ikiyaga Kivu gikomeye, imisozi iteye ubwuzu, ibirwa bya tropiki, amazi meza y\'inyanja, n\'uburambe budasanzwe bwo hanze. Iyo ntara itanga ku bashyitsi ubuvanganzo bw\'uruhuka, kamere, ibikorwa by\'amazi, n\'uburambe bw\'umuco ku kiyaga kimwe mu biyaga by\'amazi meza cyane muri Afurika.',
  'Explore Western Province': 'Sura Intara y\'Iburengerazuba',
  'Discover Rwanda\'s Lakeside Paradise': 'Sobanukirwa Paradizo y\'ku Nkengero z\'Ikiyaga y\'u Rwanda',
  "Stretching along the shores of Lake Kivu, Western Province is one of Rwanda's most attractive tourist destinations. Visitors can enjoy boat cruises, island tours, beach relaxation, cycling, hiking, birdwatching, and spectacular views of the surrounding mountains. The region is famous for its peaceful atmosphere, luxury resorts, and natural beauty.": 'Ikwirakwiza ku nkengero z\'Ikiyaga Kivu, Intara y\'Iburengerazuba ni kimwe mu hantu byiza cyane by\'ubukerarugendo mu Rwanda. Abashyitsi bashobora kwishimira ingendo mu bwato, gusura ibirwa, kuruhuka ku mucanga, kugenda ku magare, kuzamuka imisozi, kureba inyoni, n\'ibitekerezo by\'ibyiza by\'imisozi ibakikije. Aka karere kazwi kubera ituze ry\'ahantu, amahoteri y\'icyubahiro, n\'ubwiza kamere.',
  'Lake Kivu': 'Ikiyaga Kivu',
  "One of Africa's Great Lakes, offering crystal-clear waters, beaches, boat rides, kayaking, and unforgettable sunsets.": 'Kimwe mu biyaga bikuru bya Afurika, gitanga amazi asobanutse, amazi y\'inkengero, ingendo mu bwato, kayak, n\'izuba rigwa ritazibagirana.',
  'Rubavu Beach': 'Umucanga wa Rubavu',
  'A popular destination for relaxation, swimming, beach sports, lakeside dining, and vibrant nightlife.': 'Ahantu hazwi cyane ku kuruhuka, koga, imikino yo ku mucanga, gufungira ku nkengero z\'ikiyaga, n\'ubuzima bwo nijoro buziranenge.',
  'Congo Nile Trail': 'Inzira ya Congo Nile',
  "A world-class hiking and cycling route offering breathtaking views of Lake Kivu and Rwanda's rolling hills.": 'Inzira yo kuzamuka no gusiganwa ku magare y\'isi yose itanga ibitekerezo by\'ibyiza by\'Ikiyaga Kivu n\'imisozi y\'u Rwanda igororotse.',
  'Kibuye (Karongi)': 'Kibuye (Karongi)',
  'A peaceful lakeside town famous for its scenic islands, resorts, and panoramic views of Lake Kivu.': 'Umujyi utuje uri ku nkengero z\'ikiyaga uzwi kubera ibirwa by\'ubwiza, amahoteri, n\'ibitekerezo byose by\'Ikiyaga Kivu.',
  'Island Adventures': 'Aventure zo ku Birwa',
  "Western Province is home to numerous beautiful islands scattered across Lake Kivu. Visitors can take boat excursions to explore hidden beaches, observe birdlife, enjoy fishing activities, and experience the peaceful beauty of Rwanda's lake environment.": 'Intara y\'Iburengerazuba ifite ibirwa byinshi by\'ubwiza bitandukanye ku kiyaga Kivu. Abashyitsi bashobora kwitabira ingendo mu bwato gusura imicozi y\'umucanga, kureba inyoni, kwishimira ibikorwa byo kuroba, no kwibonera ubwiza butuje bw\'ibidukikije by\'ikiyaga cy\'u Rwanda.',
  'Water Sports & Recreation': 'Imikino y\'Amazi n\'Kwishimisha',
  "Lake Kivu provides excellent opportunities for kayaking, paddle boarding, fishing, swimming, jet skiing, boat cruises, and lakeside relaxation. The calm waters and stunning scenery make it one of Rwanda's premier recreational destinations.": 'Ikiyaga Kivu gitanga amahirwe meza yo gukora kayak, paddle boarding, kuroba, koga, jet skiing, ingendo mu bwato, no kuruhuka ku nkengero z\'ikiyaga. Amazi atuje n\'ibice by\'ubwiza bitangaje bituma kiba kimwe mu bice by\'ingenzi by\'kwishimira mu Rwanda.',
  'Why Visit Western Province?': 'Kuki Usura Intara y\'Iburengerazuba?',
  'Relaxation': 'Kuruhuka',
  'A Destination Worth Exploring': 'Ahantu Hakwiriye Gusurwa',
  "Western Province combines natural beauty, outdoor adventure, cultural experiences, and world-class hospitality. Whether you're looking for a romantic getaway, family vacation, photography expedition, or adventure-filled holiday, the shores of Lake Kivu offer experiences that create lasting memories.": 'Intara y\'Iburengerazuba ihuriza hamwe ubwiza kamere, aventure zo hanze, uburambe bw\'umuco, n\'ubwakirizo bw\'isi yose. Niba ushaka ikiruhuko cy\'urukundo, ikiruhuko cy\'umuryango, urugendo rwo gufotora, cyangwa ikiruhuko cy\'uzuyemo ubutwari, inkengero z\'Ikiyaga Kivu zitanga uburambe butuma imyuka ibika.',
  'Discover the Heart of Rwanda': 'Sobanukirwa Umutima w\'u Rwanda',
  'From mist-covered gorilla habitats to shimmering lake shores — we craft journeys you\'ll never forget.': 'Uhereye ku mabisi ya gorila y\'umuyaga kugera ku nkengero z\'ibiyaga by\'urumuri — dutegura ingendo utazibagirwa.',
  'Explore': 'Sura',
  'Everything You Need': 'Ibyo Ukeneye Byose',
  'Carefully designed experiences for an authentic, seamless Rwandan adventure.': 'Uburambe bwateguwe neza ku rugendo nyakuri, rutagira imbogamizi mu Rwanda.',
  'Heart': 'Umutima',
  'Gorilla Trekking in Volcanoes National Park': 'Gusura Gorila mu Parike ya Volcanoes',
  "Come face-to-face with one of the world's most endangered species in their natural habitat. Our certified guides lead you through dense bamboo forest for a breathtaking hour with mountain gorillas.": 'Uhurire ku giti na kimwe mu byiciro by\'inyamaswa biri mu kaga ku isi mu mwimerere wayo. Abayobozi bacu bemerewe bayobora mu mashyamba ya bamvu akomeye kugira ngo usangire isaha iteye ubwuzu n\'igorila zo mu misozi.',
  'Signature Experience': 'Uburambe Bwihariye',
  'Volcanoes National Park, Northern Rwanda': 'Parike ya Volcanoes, Amajyaruguru y\'u Rwanda',
  'Water Escapes': 'Kuruhuka ku mazi',
  "Lake Kivu: Rwanda's Inland Riviera": 'Ikiyaga Kivu: Riviera yo mu Rwanda',
  "Stretching along Rwanda's western border, Lake Kivu offers crystalline waters, lush islands, and a relaxed pace that perfectly complements a safari. Kayak at sunrise, island-hop by boat, or simply unwind at a lakeside lodge.": 'Kikwirakwira ku mupaka uburengerazuba bw\'u Rwanda, Ikiyaga Kivu gitanga amazi asobanutse, ibirwa bikungahaye, n\'umuvuduko woroheje uhuzwa neza na safari. Koresha kayak mu gitondo, utembere mu bwato ku birwa, cyangwa wite ku kuruhuka mu mahoteli yo ku nkengero z\'ikiyaga.',
  'Plan Your Lake Escape': 'Tegura Kuruhuka kwawe ku Kiyaga',
  'Explore Rwanda\'s rich heritage through village visits, traditional dance, craft markets, and conversations with locals.': 'Sura umurage ukungahaye w\'u Rwanda binyuze mu gusura ibyaro, imbyino gakondo, amasoko y\'ubukorikori, no kuganira n\'abaturage.',
  'Trek through Volcanoes National Park to encounter mountain gorillas, golden monkeys, and diverse birdlife in their natural habitat.': 'Jya mu Parike ya Volcanoes ugende mu mashyamba kugira ngo uhure na gorila zo mu misozi, inkende za zahabu, n\'inyoni zitandukanye mu mwimerere wazo.',
  'Handpicked lodges and boutique hotels — from volcano-view eco-lodges to lakeside resorts blending comfort with nature.': 'Amahoteri yatoranijwe n\'amacumbi ya boutique — kuva ku mahoteli ya eco areba volkanike kugeza ku mahoteli y\'inkengero z\'ikiyaga ahuza ibyiza n\'ubwiza kamere.',
  'Crystalline waters, lush islands, and a relaxed pace. Kayak at sunrise or unwind at a world-class lakeside lodge.': 'Amazi asobanutse, ibirwa by\'icyatsi, n\'umuvuduko woroheje. Koresha kayak mu izuba ry\'imbura cyangwa uruhuke mu mahoteli y\'inkengero y\'isi.',
  'Air-conditioned 4x4 vehicles with experienced drivers who double as knowledgeable local guides throughout your trip.': 'Imodoka za 4x4 zifite air-conditioner hamwe n\'abashoferi bafite uburambe kandi bazi neza akarere mu rugendo rwawe rwose.',
  'Dedicated photo tours timed around golden hour, led by professionals who know exactly where the light and wildlife will be.': 'Ingendo zo gufotora zateguwe mu gihe cy\'izuba rya zahabu, ziyobowe n\'inzobere zizwi neza aho urumuri n\'inyamaswa biboneka.',
  'Expert certified guides': 'Abayobozi b\'inzobere bemerewe',
  'Gorilla permits included': 'Permis za gorila zirimo',
  'Small groups (max 8)': 'Amatsinda mato (ntarenga 8)',
  'All fitness levels': 'Ku rwego rwose rw\'imbaraga',
  '5-star lodge options': 'Amahoteli ya 5-inyenyeri',
  'Airport transfers': 'Kujyanwa ku kibuga cy\'indege',
  'Village home visits': 'Gusura amazu y\'akabyiniro',
  'Memorial site tours': 'Ingendo mu rwibutso',
  'Kigali city walks': 'Kugenda mu mujyi wa Kigali',
  'Cooking classes': 'Amasomo yo guteka',
  'Boat & kayak hire': 'Gukodesha ubwato na kayak',
  'Island day trips': 'Inzira z\'umunsi ku birwa',
  'Sunset cruises with private chefs': 'Ingendo z\'izuba riva n\'abafunguro b\'abigenga',
  'All meals available': 'Amafunguro yose aboneka',
  'Authentic': 'Nyakuri',
  'Comfort': 'Ibyoroheje',
  'Premium': 'Ryiza cyane',
  'New': 'Gishya',
  'Eco-certified properties': 'Aho guturana yemewe na eco',
  'Every booking contributes to conservation projects and local community programs across Rwanda.': 'Buri gikorwa cyo gutumiza gishyigikira imishinga y\'ubungabunga n\'ibikorwa by\'imiryango by\'aho mu Rwanda hose.',
  'Complete the form below and our travel team will contact you with a tailored itinerary.': 'Suzuza ifishi iri hasi maze itsinda ryacu rikumenyeshe gahunda ikubereye.',
  'Nyungwe forest': 'Ishyamba rya Nyungwe',
  '3 gorilla treks': 'Gusura gorila 3',
  '1 hr': 'Isaha 1',
  '8+': '8+',
  'Our guides are Rwandan-born with 10+ years of specialist field experience in each region.': 'Abayobozi bacu bavukiye mu Rwanda bafite uburambe bw\'imyaka 10+ mu bice byose by\'igihugu.',
  'Tell us about your travel preferences, budget, or any special requests': 'Tubwire ibyo ukunda mu rugendo, ingengo y\'imari, cyangwa ibyo wifuza byihariye',
  'John Doe': 'John Doe',
  'john@example.com': 'john@example.com',
  'Lake Kivu Rwanda': 'Ikiyaga Kivu, u Rwanda',
  'Mountain gorilla': 'Gorila yo mu misozi',
  'Mountain gorilla Rwanda': 'Gorila yo mu misozi mu Rwanda',
  'Let our team build your perfect itinerary — at no extra cost.': 'Reka itsinda ryacu ryubake gahunda yawe nziza — nta giciro cy\'inyongera.',
  'We don\'t do group buses. Every trip is built around your interests, pace, and budget.': 'Ntidukora amabus y\'amatsinda. Buri rugendo rwubatswe ku byifuzo byawe, umuvuduko, n\'ingengo y\'imari.',
  'Airport pickups': 'Gukurikirana ku kibuga cy\'indege',
  '4WD vehicles': 'Imodoka za 4WD',
  'Multilingual drivers': 'Abashoferi bavuga indimi nyinshi',
  'Flexible scheduling': 'Igenamiterere ryoroshye',
  'Golden hour sessions': 'Amasomo ya golden hour',
  'Wildlife hides': 'Aho guhisha inyamaswa',
  'Drone footage add-on': 'Ibindi by\'amashusho ya drone',
  'Print packages': 'Amapaki yo gucapa',
  'Mountain gorillas left globally': 'Gorila zo mu misozi zasigaye ku isi',
  'Permitted time with each family': 'Igihe cyemewe n\'umuryango umwe',
  'Habituated gorilla families': 'Imiryango ya gorila imenyereye abantu',
  'Kayaking & guided boat tours': 'Kayak n\'ingendo mu bwato ziyobowe',
  'Napoleon Island excursion': 'Urugendo ku Kirwa cya Napoleon',
  'Local wine tasting in Gisenyi': 'Kuryoherwa divayi y\'aho i Gisenyi',
  'Chimpanzee trekking in Nyungwe': 'Gusura inkende mu Nyungwe',
  'Sustainable Travel': 'Ingendo z\'ubukerarugendo burambye',
  'Local Expertise': 'Ubumenyi bw\'aho',
  'Tailor-Made Only': 'Byakozwe ku buryo bwawe gusa',
  'We don\'t do group buses. Every trip is built around your interests, pace, and budget.': 'Ntidukora amabus y\'amatsinda. Buri rugendo rwubatswe ku byifuzo byawe, umuvuduko, n\'ingengo y\'imari.',
  'Fully Licensed': 'Byemewe neza',
  'RDB-accredited and fully insured for all activities including gorilla and chimpanzee trekking.': 'Yemewe na RDB kandi yizewe ku bikorwa byose harimo gusura gorila n\'inkende.',
  '24/7 Support': 'Inkunga isaha 24/7',
  'A dedicated travel concierge reachable by phone or WhatsApp throughout your entire stay.': 'Umukozi wihariye wo kugufasha ku rugendo ushobora guhamagarwa kuri telefone cyangwa WhatsApp mu gihe cyose uri mu gihugu.',
  'End-to-End Planning': 'Gutegura kuva ku ntangiriro kugeza ku musozo',
  'From visa advice to packing lists — we handle every detail before you even land in Kigali.': 'Uhereye ku nama ku byerekeye viza kugeza ku rutonde rw\'ibyo gutwikira — twita ku kintu cyose mbere yo kugera i Kigali.',
  'Weekend Escape': 'Kuruhuka k\'icyumweru',
  '3 Days / 2 Nights': 'Iminsi 3 / Ijoro 2',
  'Kigali city tour': 'Ingendo mu mujyi wa Kigali',
  '1 gorilla trek': 'Gusura gorila 1',
  'Accommodation B&B': 'Aho kuraramo B&B',
  'Classic Rwanda': 'U Rwanda gakondo',
  '7 Days / 6 Nights': 'Iminsi 7 / Ijoro 6',
  'Lake Kivu (2 nights)': 'Ikiyaga Kivu (ijoro 2)',
  'All meals included': 'Amafunguro yose arimo',
  'Private 4WD': '4WD yihariye',
  'Grand Explorer': 'Umushakashatsi Mukuru',
  '14 Days / 13 Nights': 'Iminsi 14 / Ijoro 13',
  '2 gorilla treks': 'Gusura gorila 2',
  'Golden monkey trek': 'Ingendo y\'inkende ya zahabu',
  'Cultural village stays': 'Gukomera mu byaro by\'umuco',
  'Photography guide': 'Ubuyobozi bwo gufotora',
  'All inclusive': 'Byose birimo',
  '✓ Message sent! We\'ll get back to you within 24 hours.': '✓ Ubutumwa bwoherejwe! Tuzagusubiza mu masaha 24.',
  'Get In Touch': 'Tugereho',
  "Contact Us": 'Vugana Natwe',
  'Have a question about your trip? Ready to start planning? Our team is here to help you every step of the way.': 'Ufite ikibazo ku rugendo rwawe? Witeguye gutangira gutegura? Itsinda ryacu riri hano kugira ngo rigufashe buri kiganza cy\'inzira.',
  "We'd Love to Hear From You": 'Turashaka kumva ijwi ryawe',
  'Book Your Trip': 'Tegura Urugendo rwawe',
  'Reach Us': 'Tubone',
  'Plan Your Rwanda Journey': 'Tegura Urugendo rwawe mu Rwanda',
  'First Name': 'Izina rya Mbere',
  'Last Name': 'Izina rya Nyuma',
  'Email Address': 'Aderesi y\'Imeli',
  'Phone Number': 'Numero ya Telefoni',
  'Interested In': 'Wifuza',
  'Your Message': 'Ubutumwa bwawe',
  'Tell us about your dream Rwanda trip...': 'Tubwire urugendo rwawe rw\'inzozi mu Rwanda...',
  'Send Message →': 'Ohereza Ubutumwa →',
  'Send a Message': 'Ohereza Ubutumwa',
  "Let's Go": 'Nimujye',
  'Pricing': 'Ibiciro',
  'Most Popular': 'Ikunzwe cyane',
  'Get a Quote': 'Saba Igiciro',
  'Book Now →': 'Bika Ubu →',
  'Wildlife Safari': 'Safari y\'inyamaswa',
  'Cultural Tour': 'Urugendo rw\'umuco',
  'Lake Kivu Escape': 'Kuruhuka ku Kiyaga Kivu',
  'Photography Tour': 'Urugendo rwo gufotora',
  'Custom Package': 'Amapaketi y\'umwihariko',
  'Send Email': 'Ohereza Imeli',
  'Get Directions': 'Uragere aho',
  'Call Now': 'Hamagarira Ubu',
  'Email Us': 'Twoherereze Imeli',
  "Our Office": 'Ibiro byacu',
  'KG 123 Street, Gasabo\nKigali, Rwanda': 'KG 123 Umuhanda, Gasabo\nKigali, Rwanda',
  'Mon–Sat, 8am–6pm': 'Ku wa Mbere kugeza ku wa Gatandatu, saa mbiri za mu gitondo kugeza saa kumi n\'ebyiri z\'ijoro',
  'Reply within 24 hours': 'Tuzagusubiza mu masaha 24',
  'Our Location': 'Ahantu Hacu',
  'Find Us in Kigali': 'Tubarane i Kigali',
  'Our office is located in the heart of Kigali, Rwanda\'s vibrant capital. We\'re happy to meet in person to plan your perfect Rwanda adventure.': 'Ibiro byacu biri mu mutima wa Kigali, umurwa mukuru w\'u Rwanda wuzuye ubuzima. Turishimira guhura maso ku maso kugira ngo dutegure urugendo rwawe rw\'u Rwanda rw\'ibyiza.',
  'Kigali, Rwanda': 'Kigali, u Rwanda',
  'KG 123 Street, Gasabo': 'KG 123 Umuhanda, Gasabo',
  'Office Hours': 'Amasaha y\'Ibiro',
  'Monday – Friday': 'Kuwa Mbere – Kuwagata',
  'Saturday': 'Kuwagatanu',
  'Sunday': 'Ku cyumweru',
  'Closed': 'Ifunze',
  'Follow Our Journey': 'Kurikira Urugendo rwacu',
  'Stay inspired with daily Rwanda travel content': 'Komera ku mutima usoma ibyerekeye urugendo rwa Rwanda buri munsi',
  'See Rwanda Come Alive': 'Reba u Rwanda rusubira mu buzima',
  "Videos provide a glimpse into Rwanda's beauty, but the true magic is experienced in person. From mountain gorillas and scenic lakes to vibrant cities and rich cultural traditions, Rwanda offers unforgettable memories for every visitor.": 'Amashusho atanga ishusho y\'ubwiza bw\'u Rwanda, ariko ibitangaza nyabyo biboneka mu buryo bw\'amaso. Uhereye kuri gorila zo mu misozi n\'ibiyaga by\'ibyiza kugeza ku mijyi yuzuye ubuzima n\'umuziki w\'umuco w\'iza, u Rwanda rutanga ibyibutsa bidashobora kwibagirana ku mushyitsi wese.',
  'Rwanda Photo Gallery': 'Ikaragiro y\'Amafoto y\'u Rwanda',
  "Explore breathtaking photographs showcasing Rwanda's natural beauty, wildlife, culture, mountains, lakes, cities, and tourism attractions from all provinces.": 'Sura amafoto atangaje agaragaza ubwiza kamere bw\'u Rwanda, inyamaswa, umuco, imisozi, ibiyaga, imijyi, n\'ahantu nyaburanga haturuka mu ntara zose.',
  'Discover Rwanda Through Pictures': 'Sobanukirwa u Rwanda binyuze mu Mafoto',
  "From the misty volcanoes of the north to the sparkling waters of Lake Kivu in the west, Rwanda offers some of Africa's most stunning landscapes and unforgettable experiences.": 'Uhereye ku misozi ya volkanike y\'umutuzo mu majyaruguru kugeza ku mazi akanyamuneza y\'Ikiyaga Kivu mu burengerazuba, u Rwanda rutanga bimwe mu bice by\'ubwiza cyane muri Afurika n\'uburambe budashobora kwibagirana.',
  'Discover Rwanda in Person': 'Sobanukirwa u Rwanda mu Kuri',
  'Experience Rwanda in Person': 'Wibone u Rwanda mu Kuri',
  "Pictures tell part of the story, but nothing compares to experiencing Rwanda's beauty, culture, wildlife, and hospitality firsthand. Plan your visit and create unforgettable memories in the Land of a Thousand Hills.": 'Amafoto avuga igice cy\'inkuru, ariko nta na kimwe gishobora guhangana no kubona ubwiza, umuco, inyamaswa, n\'ubwakirizi bw\'u Rwanda mu buryo bw\'amaso. Tegura uruzinduko rwawe kandi wubake ibyibutsa bidashobora kwibagirana mu gihugu cy\'imisozi igihumbi.',
  'Rwanda Tourism Videos': 'Amashusho y\'Ubukerarugendo bw\'u Rwanda',
  'Watch stunning videos showcasing Rwanda\'s wildlife, landscapes, culture, national parks, lakes, cities, and unforgettable tourism experiences.': 'Reba amashusho atangaje agaragaza inyamaswa z\'u Rwanda, ibice by\'ubwiza, umuco, parike z\'igihugu, ibiyaga, imijyi, n\'uburambe budasanzwe bw\'ubukerarugendo.',
  'Explore Rwanda Through Video': 'Sura u Rwanda unyuze mu mashusho',
  "Experience the beauty of the Land of a Thousand Hills through breathtaking videos featuring mountain gorillas, Lake Kivu, Akagera National Park, Kigali City, Nyungwe Forest, and much more.": 'Wumve ubwiza bw\'Igihugu cy\'Imisozi Igihumbi binyuze mu mashusho atangaje agaragaza gorila zo mu misozi, Ikiyaga Kivu, Parike y\'Igihugu ya Akagera, Umujyi wa Kigali, Ishyamba rya Nyungwe, n\'ibindi byinshi.',
  'Gorilla Trekking': 'Gusura Gorila',
  "Experience the world-famous mountain gorillas in Volcanoes National Park.": 'Wumve gorila zo mu misozi zizwi ku isi muri Parike y\'Igihugu ya Volcanoes.',
  'Lake Kivu Adventure': 'Aventure ya Ikiyaga Kivu',
  "Discover beautiful beaches, islands, and unforgettable sunsets along Lake Kivu.": 'Sura amazi y\'ubwiza, ibirwa, n\'izuba rigwa ritazibagirana ku nkengero z\'Ikiyaga Kivu.',
  'Akagera Safari': 'Safari ya Akagera',
  "Witness lions, elephants, giraffes, zebras, and more in Rwanda's savannah park.": 'Reba intare, inzovu, ingona, imigogo, n\'ibindi muri parike y\'savane y\'u Rwanda.',
  'Kigali City': 'Umujyi wa Kigali',
  "Discover Africa's cleanest and most modern capital city.": 'Sobanukirwa umurwa mukuru w\'Afrika usukuye cyane kandi igezweho.',
  'Nyungwe Forest': 'Ishyamba rya Nyungwe',
  "Explore one of Africa's oldest rainforests and its canopy walk.": 'Sura kimwe mu mashyamba ya rainforest asaza muri Afurika n\'inzira y\'igisenge cy\'aryo.',
  'Rwandan Culture': 'Umuco w\'u Rwanda',
  "Experience traditional dances, ceremonies, music, and local heritage.": 'Wumve imbyino gakondo, imihango, umuziki, n\'umurage w\'abaturage.',
  'See Rwanda Come Alive': 'Reba u Rwanda rugaragara',
  "Videos provide a glimpse into Rwanda's beauty, but the true magic is experienced in person. From mountain gorillas and scenic lakes to vibrant cities and rich cultural traditions, Rwanda offers unforgettable memories for every visitor.": 'Amashusho atanga ishusho y\'ubwiza bw\'u Rwanda, ariko ibitangaza nyakuri byumvikana mu buryo bw\'amaso. Uhereye kuri gorila zo mu misozi n\'ibiyaga by\'ubwiza kugeza ku mijyi yuzuye ubuzima n\'umucyo w\'umuco ukungahaye, u Rwanda rutanga ibyibutsa bidashobora kwibagirana kuri buri mushyitsi.'
}

const kiToEn = Object.fromEntries(Object.entries(enToKi).map(([key, value]) => [value, key]))

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

function normalizeWhitespace(text) {
  return text.replace(/\s+/g, ' ').trim()
}

function translateText(text, dict) {
  if (!text || !text.trim()) return text

  const keys = Object.keys(dict).sort((a, b) => b.length - a.length)
  let result = text

  for (const key of keys) {
    const re = new RegExp(escapeRegExp(key), 'g')
    result = result.replace(re, dict[key])
  }

  if (result !== text) return result

  const normalized = normalizeWhitespace(text)
  if (!normalized || normalized === text) return text

  if (dict[normalized]) return dict[normalized]

  result = normalized
  for (const key of keys) {
    const normalizedKey = normalizeWhitespace(key)
    const re = new RegExp(escapeRegExp(normalizedKey), 'g')
    result = result.replace(re, normalizeWhitespace(dict[key]))
  }

  return result === normalized ? text : result
}

function translateAttributes(root, dict) {
  const attrs = ['placeholder', 'title', 'aria-label', 'alt', 'value']
  root.querySelectorAll('*').forEach((el) => {
    attrs.forEach((attr) => {
      if (el.hasAttribute(attr)) {
        const original = el.getAttribute(attr)
        const translated = translateText(original, dict)
        if (translated !== original) {
          el.setAttribute(attr, translated)
        }
      }
    })
  })
}

function translateDOM(root = document.body, targetLocale = locale.value) {
  if (!root) return
  const dict = targetLocale === 'ki' ? enToKi : kiToEn
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      if (!node.nodeValue || !node.nodeValue.trim()) return NodeFilter.FILTER_REJECT
      const parent = node.parentElement
      if (!parent) return NodeFilter.FILTER_REJECT
      if (['SCRIPT', 'STYLE', 'NOSCRIPT'].includes(parent.tagName)) return NodeFilter.FILTER_REJECT
      return NodeFilter.FILTER_ACCEPT
    },
  })

  const nodes = []
  while (walker.nextNode()) nodes.push(walker.currentNode)
  nodes.forEach((node) => {
    const translated = translateText(node.nodeValue, dict)
    if (translated !== node.nodeValue) node.nodeValue = translated
  })

  translateAttributes(root, dict)
}

function toggleLanguage(root = document.body) {
  if (root instanceof Event) {
    root = document.body
  }
  locale.value = locale.value === 'en' ? 'ki' : 'en'
  if (typeof window !== 'undefined') {
    localStorage.setItem('locale', locale.value)
  }
  translateDOM(root, locale.value)
}

export { locale, toggleLanguage, translateDOM }
