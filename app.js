const featured = [
  {name:"Taxi Service", image:"assets/taxi-service.jpg", desc:"Layanan taksi harian dengan pengemudi profesional untuk perjalanan dalam kota yang aman dan nyaman."},
  {name:"Airport Transfer", image:"assets/airport-transfer.jpg", desc:"Antar-jemput bandara terjadwal dengan ruang bagasi memadai dan pemantauan waktu keberangkatan."},
  {name:"Shuttle Service", image:"assets/shuttle-service.jpg", desc:"Perjalanan bersama untuk rute tertentu dengan jadwal teratur, armada nyaman, dan titik jemput praktis."},
  {name:"Charter Bus", image:"assets/charter-bus.jpg", desc:"Bus berkapasitas besar untuk wisata, kegiatan kampus, perusahaan, dan perjalanan kelompok."}
];

const ecosystem = [
  {name:"Taxi Service", icon:"taxi"},
  {name:"Car Rental", icon:"carRental"},
  {name:"Airport Transfer", icon:"airport"},
  {name:"Shuttle Service", icon:"shuttle"},
  {name:"Charter Bus", icon:"bus"},
  {name:"Logistic", icon:"package"},
  {name:"Advertising Solution", icon:"megaphone"},
  {name:"Movia Kirim", icon:"send"},
  {name:"Corporate Solution", icon:"building"},
  {name:"Hotel & Resort", icon:"bed"},
  {name:"Caready", icon:"car"},
  {name:"Supporting Service", icon:"settings"}
];

const productDetails = {
  "Taxi Service": {
    tagline: "Taksi harian untuk perjalanan dalam kota dengan pengemudi profesional.",
    pickupLabel: "Pick-up location",
    destinationLabel: "Destination",
    vehicles: [
      {name:"Movia Taxi Standard", model:"Toyota Vios", seats:"4 seats", luggage:"2 luggage", image:"assets/taxi-service.jpg", notes:"Cocok untuk perjalanan harian, meeting, dan aktivitas dalam kota."},
      {name:"Movia Taxi Comfort", model:"Hyundai Ioniq", seats:"4 seats", luggage:"2 luggage", image:"assets/taxi-service.jpg", notes:"Pilihan kendaraan lebih nyaman untuk perjalanan pribadi dan bisnis."}
    ]
  },
  "Car Rental": {
    tagline: "Sewa mobil fleksibel dengan pilihan durasi dan armada keluarga.",
    pickupLabel: "Rental location",
    destinationLabel: "Trip plan",
    vehicles: [
      {name:"Movia Rental Standard", model:"Toyota Avanza", seats:"6 seats", luggage:"3 luggage", image:"assets/airport-transfer.jpg", notes:"Pilihan ekonomis untuk perjalanan keluarga dan kebutuhan harian."},
      {name:"Movia Rental Premium", model:"Toyota Innova Zenix", seats:"7 seats", luggage:"4 luggage", image:"assets/shuttle-service.jpg", notes:"Kabin lega untuk perjalanan bisnis, wisata, atau kunjungan luar kota."}
    ]
  },
  "Airport Transfer": {
    tagline: "Antar-jemput bandara terjadwal dengan ruang bagasi memadai.",
    pickupLabel: "Pick-up location",
    destinationLabel: "Airport Destination",
    vehicles: [
      {name:"Movia Airport Standard", model:"Toyota Avanza", seats:"6 seats", luggage:"3 luggage", image:"assets/airport-transfer.jpg", notes:"Untuk perjalanan bandara reguler dengan jadwal penjemputan terencana."},
      {name:"Movia Airport Executive", model:"Toyota Innova Zenix", seats:"7 seats", luggage:"4 luggage", image:"assets/shuttle-service.jpg", notes:"Kapasitas lebih lega untuk keluarga, tamu perusahaan, dan bagasi tambahan."}
    ]
  },
  "Shuttle Service": {
    tagline: "Perjalanan bersama pada rute tertentu dengan jadwal teratur.",
    pickupLabel: "Shuttle point",
    destinationLabel: "Route destination",
    vehicles: [
      {name:"Movia Shuttle Regular", model:"Toyota HiAce", seats:"12 seats", luggage:"6 luggage", image:"assets/shuttle-service.jpg", notes:"Cocok untuk rute kampus, stasiun, bandara, dan pusat bisnis."},
      {name:"Movia Shuttle Comfort", model:"Hyundai Staria", seats:"9 seats", luggage:"5 luggage", image:"assets/shuttle-service.jpg", notes:"Kabin nyaman untuk perjalanan bersama dengan jumlah penumpang lebih kecil."}
    ]
  },
  "Charter Bus": {
    tagline: "Bus charter untuk rombongan wisata, kampus, perusahaan, dan acara.",
    pickupLabel: "Departure point",
    destinationLabel: "Group destination",
    vehicles: [
      {name:"Movia Bus Medium", model:"Medium Bus 31 Seat", seats:"31 seats", luggage:"Large baggage", image:"assets/charter-bus.jpg", notes:"Untuk study tour, outing kantor, atau rombongan skala menengah."},
      {name:"Movia Bus Big", model:"Big Bus 50 Seat", seats:"50 seats", luggage:"Large baggage", image:"assets/charter-bus.jpg", notes:"Kapasitas besar untuk kegiatan perusahaan, wisata, dan perjalanan kelompok."}
    ]
  },
  "Logistic": {
    tagline: "Pengiriman barang dan dokumen dengan pelacakan perjalanan.",
    pickupLabel: "Pick-up address",
    destinationLabel: "Delivery address",
    vehicles: [
      {name:"Movia Logistic Small", model:"Blind Van", seats:"Driver only", luggage:"Small cargo", image:"assets/taxi-service.jpg", notes:"Untuk dokumen, paket kecil, dan kebutuhan pengiriman cepat."},
      {name:"Movia Logistic Box", model:"Box Van", seats:"Driver only", luggage:"Medium cargo", image:"assets/charter-bus.jpg", notes:"Untuk pengiriman barang usaha dan kebutuhan operasional."}
    ]
  },
  "Advertising Solution": {
    tagline: "Media promosi bergerak melalui armada Movia.",
    pickupLabel: "Campaign area",
    destinationLabel: "Campaign objective",
    vehicles: [
      {name:"Movia Ads Car", model:"Car Branding", seats:"Campaign unit", luggage:"Exterior media", image:"assets/taxi-service.jpg", notes:"Branding pada kendaraan untuk eksposur area kota."},
      {name:"Movia Ads Bus", model:"Bus Branding", seats:"Campaign unit", luggage:"Large media", image:"assets/charter-bus.jpg", notes:"Media visual besar untuk promosi event dan perusahaan."}
    ]
  },
  "Movia Kirim": {
    tagline: "Layanan kirim praktis untuk dokumen dan paket pelanggan.",
    pickupLabel: "Sender address",
    destinationLabel: "Receiver address",
    vehicles: [
      {name:"Movia Kirim Instant", model:"City Car", seats:"Driver only", luggage:"Small package", image:"assets/taxi-service.jpg", notes:"Pengiriman cepat untuk dokumen dan paket ringan."},
      {name:"Movia Kirim Plus", model:"MPV", seats:"Driver only", luggage:"Medium package", image:"assets/airport-transfer.jpg", notes:"Kapasitas lebih besar untuk paket dan perlengkapan acara."}
    ]
  },
  "Corporate Solution": {
    tagline: "Solusi transportasi karyawan, tamu, dan operasional perusahaan.",
    pickupLabel: "Office location",
    destinationLabel: "Business destination",
    vehicles: [
      {name:"Movia Corporate Car", model:"Executive Sedan", seats:"4 seats", luggage:"2 luggage", image:"assets/taxi-service.jpg", notes:"Untuk perjalanan direksi, tamu perusahaan, dan meeting."},
      {name:"Movia Corporate Van", model:"Executive MPV", seats:"7 seats", luggage:"4 luggage", image:"assets/shuttle-service.jpg", notes:"Untuk tim bisnis dan mobilitas operasional perusahaan."}
    ]
  },
  "Hotel & Resort": {
    tagline: "Transportasi tamu hotel, resort, dan kebutuhan hospitality.",
    pickupLabel: "Hotel location",
    destinationLabel: "Guest destination",
    vehicles: [
      {name:"Movia Hotel Transfer", model:"Premium MPV", seats:"6 seats", luggage:"4 luggage", image:"assets/airport-transfer.jpg", notes:"Untuk antar-jemput tamu hotel dan perjalanan wisata."},
      {name:"Movia Resort Shuttle", model:"Luxury Van", seats:"9 seats", luggage:"5 luggage", image:"assets/shuttle-service.jpg", notes:"Untuk tamu grup, resort, dan agenda hospitality."}
    ]
  },
  "Caready": {
    tagline: "Mobil siap pakai untuk kebutuhan mobilitas yang cepat dan praktis.",
    pickupLabel: "Pick-up location",
    destinationLabel: "Destination",
    vehicles: [
      {name:"Caready City", model:"Compact Car", seats:"4 seats", luggage:"2 luggage", image:"assets/taxi-service.jpg", notes:"Untuk perjalanan singkat dan kebutuhan mobilitas mendadak."},
      {name:"Caready Family", model:"Family MPV", seats:"6 seats", luggage:"3 luggage", image:"assets/airport-transfer.jpg", notes:"Untuk keluarga dan perjalanan harian dengan ruang lebih lega."}
    ]
  },
  "Supporting Service": {
    tagline: "Dukungan operasional untuk perjalanan dan kebutuhan acara.",
    pickupLabel: "Service location",
    destinationLabel: "Service needs",
    vehicles: [
      {name:"Movia Event Support", model:"Support Van", seats:"Crew unit", luggage:"Equipment cargo", image:"assets/shuttle-service.jpg", notes:"Dukungan kendaraan untuk event dan aktivitas lapangan."},
      {name:"Movia Standby Unit", model:"Standby Car", seats:"4 seats", luggage:"2 luggage", image:"assets/taxi-service.jpg", notes:"Unit standby untuk kebutuhan operasional dan keadaan khusus."}
    ]
  }
};

const promos = [
  {label:"Pengguna baru", title:"Perjalanan pertama lebih ringan", text:"Nikmati potongan 30% hingga Rp25.000 untuk layanan Taxi Service.", code:"MOVIABARU", art:"30%"},
  {label:"Airport week", title:"Transfer bandara lebih hemat", text:"Potongan 20% untuk pemesanan Airport Transfer pada Senin sampai Kamis.", code:"MOVIAAIR", art:"20%"},
  {label:"Perjalanan kelompok", title:"Pergi bersama, lebih praktis", text:"Diskon 15% untuk pemesanan Shuttle Service dan Charter Bus.", code:"MOVIAGROUP", art:"15%"}
];

const blogs = [
  {tag:"Tips Perjalanan", title:"5 persiapan sebelum berangkat ke bandara", text:"Susun jadwal, cek dokumen, dan tentukan waktu penjemputan agar perjalanan lebih tenang.", image:"assets/blog-airport.jpg", content:"Pastikan tiket dan dokumen perjalanan sudah siap sebelum berangkat. Periksa jadwal penerbangan, siapkan bagasi, pilih titik jemput yang jelas, dan pesan Airport Transfer lebih awal. Berikan waktu tambahan agar perjalanan menuju bandara tetap tenang meskipun kondisi lalu lintas berubah."},
  {tag:"Mobilitas", title:"Memilih kendaraan sesuai jumlah penumpang", text:"Kenali perbedaan taksi, shuttle, dan charter bus sebelum melakukan pemesanan.", image:"assets/blog-passengers.jpg", content:"Taxi Service cocok untuk perjalanan pribadi, sedangkan Shuttle Service lebih sesuai untuk kelompok kecil. Untuk kegiatan kampus, wisata, atau perusahaan dengan peserta lebih banyak, Charter Bus memberi ruang dan kapasitas yang lebih memadai. Sesuaikan kendaraan dengan jumlah penumpang dan barang bawaan."},
  {tag:"Keamanan", title:"Cara menjaga barang bawaan selama perjalanan", text:"Langkah sederhana untuk memastikan bagasi dan barang pribadi tetap aman sampai tujuan.", image:"assets/blog-belongings.jpg", content:"Gunakan tas yang dapat ditutup dengan baik dan simpan barang penting di tempat yang mudah diawasi. Periksa kembali kursi, lantai, dan bagasi sebelum turun dari kendaraan. Jika ada barang tertinggal, segera hubungi Movia Assistant dan lanjutkan laporan kepada Customer Service."},
  {tag:"Kota Bandung", title:"Destinasi keluarga yang nyaman dijangkau", text:"Ide perjalanan akhir pekan bersama keluarga menggunakan layanan Movia.", image:"assets/blog-family.jpg", content:"Perjalanan keluarga akan lebih nyaman jika kendaraan dipilih sesuai jumlah penumpang. Tentukan tujuan dan waktu keberangkatan sebelum berangkat, lalu pilih Car Rental atau Shuttle Service agar anggota keluarga dapat duduk dengan nyaman. Siapkan juga kebutuhan anak dan lansia selama perjalanan."},
  {tag:"Bisnis", title:"Manfaat transportasi terkelola bagi perusahaan", text:"Mobilitas karyawan menjadi lebih efisien melalui layanan corporate solution.", image:"assets/blog-business.jpg", content:"Corporate Solution membantu perusahaan mengatur perjalanan karyawan, kunjungan bisnis, dan transportasi acara dalam satu layanan. Jadwal yang terencana memudahkan koordinasi armada serta mengurangi keterlambatan. Perusahaan juga dapat memilih kendaraan sesuai kapasitas dan kebutuhan operasional."},
  {tag:"Lingkungan", title:"Mengenal armada rendah emisi Movia", text:"Komitmen menuju mobilitas kota yang lebih bersih dan berkelanjutan.", image:"assets/blog-electric.jpg", content:"Armada listrik membantu mengurangi emisi langsung selama perjalanan dan mendukung mobilitas kota yang lebih bersih. Movia mengembangkan penggunaan kendaraan rendah emisi untuk layanan pribadi maupun kelompok. Perawatan rutin juga dilakukan agar efisiensi dan keselamatan armada tetap terjaga."}
];

const news = [
  {date:"24 JUN 2026", title:"Movia memperluas layanan Shuttle di Bandung Raya", text:"Rute baru menghubungkan kawasan kampus, pusat bisnis, stasiun, dan bandara."},
  {date:"18 JUN 2026", title:"Program pemeriksaan armada rutin Movia", text:"Pemeriksaan berkala dilakukan untuk menjaga kenyamanan dan keselamatan pelanggan."},
  {date:"10 JUN 2026", title:"Movia hadirkan solusi perjalanan perusahaan", text:"Corporate Solution membantu perusahaan mengatur transportasi dan laporan perjalanan."},
  {date:"02 JUN 2026", title:"Pelatihan layanan pelanggan untuk mitra pengemudi", text:"Program ini memperkuat standar keramahan, komunikasi, dan penanganan keadaan darurat."}
];

const faqs = [
  ["Bagaimana cara memesan layanan Movia?","Buka halaman Pesan, pilih layanan, isi titik jemput, tujuan, tanggal, dan waktu. Masuk ke akun sebelum mengirim pesanan."],
  ["Apakah Movia melayani perjalanan ke bandara?","Ya. Airport Transfer tersedia dengan pemesanan terjadwal dan ruang bagasi yang disesuaikan."],
  ["Bagaimana cara menghubungi Customer Service?","Tekan tombol CS di kanan bawah, isi nama dan nomor HP, konsultasikan kendala dengan AI, lalu pilih Hubungi CS Asli jika masih membutuhkan bantuan."],
  ["Di mana testimoni saya disimpan?","Testimoni disimpan pada database Movia agar dapat tampil kembali saat website dibuka dari perangkat lain."],
  ["Apakah tersedia layanan untuk perusahaan?","Ya. Corporate Solution menyediakan pemesanan, pengelolaan perjalanan, dan laporan untuk kebutuhan perusahaan."],
  ["Di mana kantor utama Movia?","Main Office Movia berada di Jl. Soekarno Hatta No. 668, Bandung, Jawa Barat 40286."]
];

function featureCard(item){
  return `<article class="feature-card"><div class="feature-photo"><img src="${item.image}" alt="${item.name}"></div><div class="feature-body"><h3>${item.name}</h3><p>${item.desc}</p><button data-route="product" data-product="${item.name}">Pelajari selanjutnya →</button></div></article>`;
}

const iconPaths = {
  taxi:'<path d="m4 16-1.5-1.5v-3L5 7h14l2.5 4.5v3L20 16H4Z"/><path d="M6 11h12M7 16v2M19 16v2M6.5 14h.01M17.5 14h.01M9 7V4h6v3"/>',
  carRental:'<path d="m3 16-1-1v-3l2-4h11l2 4v3l-1 1H3Z"/><path d="M4 12h11M5 16v2M15 16v2M5 14h.01M14 14h.01"/><circle cx="19" cy="7" r="2.5"/><path d="m17.2 8.8-3.7 3.7M15 11l1.5 1.5"/>',
  airport:'<path d="M21 16 13 12V5.5a2 2 0 0 0-4 0V12l-8 4v2l8-2v3l-2 2v1l4-1 4 1v-1l-2-2v-3l8 2v-2Z"/>',
  shuttle:'<path d="M3 17V7c0-2 1-3 3-3h11c2.2 0 4 1.8 4 4v9H3Z"/><path d="M3 11h18M7 4v7M16 4v7M6 17v2M18 17v2M6.5 14h.01M17.5 14h.01"/>',
  bus:'<rect x="4" y="2.5" width="16" height="17" rx="3"/><path d="M4 10h16M8 19.5V22M16 19.5V22M7 6h10M7.5 15h.01M16.5 15h.01"/>',
  package:'<path d="M21 8 12 3 3 8v10l9 5 9-5V8Z"/><path d="m3.3 7.8 8.7 5 8.7-5M12 22V13"/>',
  megaphone:'<path d="m3 11 18-5v12L3 14v-3Z"/><path d="M11.6 16 10 22H6l1.5-7"/>',
  send:'<path d="m22 2-7 20-4-9-9-4 20-7Z"/><path d="M22 2 11 13"/>',
  building:'<path d="M4 22V4h10v18M14 9h6v13M8 8h2M8 12h2M8 16h2M17 13h1M17 17h1"/>',
  bed:'<path d="M2 19v-8M22 19v-6H2M6 13V7h7a4 4 0 0 1 4 4v2M2 17h20"/>',
  car:'<path d="m5 17-2-2v-4l2-6h14l2 6v4l-2 2H5Z"/><path d="M5 11h14M7 15h.01M17 15h.01M5 17v3M19 17v3"/>',
  settings:'<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.8 2.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6v.2h-4V21a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1L4.2 17l.1-.1a1.7 1.7 0 0 0 .3-1.9A1.7 1.7 0 0 0 3 14H2.8v-4H3a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9L4.2 7 7 4.2l.1.1A1.7 1.7 0 0 0 9 4.6 1.7 1.7 0 0 0 10 3V2.8h4V3a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1L19.8 7l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.2v4H21a1.7 1.7 0 0 0-1.6 1Z"/>'
};

function iconMarkup(name){
  return `<svg viewBox="0 0 24 24" aria-hidden="true">${iconPaths[name] || iconPaths.settings}</svg>`;
}

function ecosystemCard(item){
  const visual = item.image ? `<img src="${item.image}" alt="${item.name}">` : iconMarkup(item.icon);
  return `<article class="ecosystem-item" data-route="product" data-product="${item.name}"><div class="ecosystem-visual">${visual}</div><span>${item.name}</span></article>`;
}

function articleCard(item,index){
  return `<article class="article-card"><div class="article-image"><img src="${item.image}" alt="${item.title}"></div><div class="article-body"><small>${item.tag}</small><h3>${item.title}</h3><p>${item.text}</p><button class="text-button" data-blog-index="${index}">Baca selengkapnya →</button></div></article>`;
}

function newsCard(item){
  return `<article class="news-item"><div class="news-date">${item.date}</div><div><h3>${item.title}</h3><p>${item.text}</p></div></article>`;
}

document.querySelector("#featuredServices").innerHTML = featured.map(featureCard).join("");
document.querySelector("#serviceTrack").innerHTML = ecosystem.map(ecosystemCard).join("");
document.querySelector("#productTrack").innerHTML = ecosystem.map(ecosystemCard).join("");
document.querySelector("#homeBlog").innerHTML = blogs.slice(0,3).map(articleCard).join("");
document.querySelector("#blogGrid").innerHTML = blogs.map(articleCard).join("");
document.querySelector("#homeNews").innerHTML = news.slice(0,3).map(newsCard).join("");
document.querySelector("#newsGrid").innerHTML = news.map(newsCard).join("");
document.querySelector("#faqList").innerHTML = faqs.map((item)=>`<article class="faq-item"><button><span>${item[0]}</span><span>+</span></button><p>${item[1]}</p></article>`).join("");
document.querySelector("#allServices").innerHTML = ecosystem.map((item)=>`<article class="all-service-card"><div class="ecosystem-visual">${item.image?`<img src="${item.image}" alt="${item.name}">`:iconMarkup(item.icon)}</div><h3>${item.name}</h3><p>Solusi Movia untuk kebutuhan ${item.name.toLowerCase()} yang aman, terencana, dan didukung tim profesional.</p><button class="text-button" data-route="product" data-product="${item.name}">Pelajari selanjutnya →</button></article>`).join("");
document.body.insertAdjacentHTML("beforeend",`<div class="modal hidden" id="blogModal"><article class="modal-box blog-modal"><button class="modal-close" data-close="blogModal">×</button><img class="blog-modal-image" id="blogModalImage" alt=""><p class="eyebrow" id="blogModalTag"></p><h2 id="blogModalTitle"></h2><p class="blog-modal-copy" id="blogModalCopy"></p></article></div>`);

let activeProduct = "Taxi Service";

function productOptions(name){
  const detail = productDetails[name] || productDetails["Taxi Service"];
  return detail.vehicles.map((vehicle)=>`<option value="${vehicle.name}">${vehicle.name} - ${vehicle.model}</option>`).join("");
}

function renderProductDetail(name = activeProduct){
  activeProduct = productDetails[name] ? name : "Taxi Service";
  const detail = productDetails[activeProduct];
  document.querySelectorAll("#productTrack .ecosystem-item").forEach((item)=>item.classList.toggle("active",item.dataset.product===activeProduct));
  document.querySelector("#productDetail").innerHTML = `<div class="product-booking-panel"><h2>${activeProduct}</h2><p>${detail.tagline}</p><form class="product-search-form"><input id="productPickup" placeholder="${detail.pickupLabel}" aria-label="${detail.pickupLabel}"><input id="productDestination" placeholder="${detail.destinationLabel}" aria-label="${detail.destinationLabel}"><input id="productDate" type="date" aria-label="Tanggal"><input id="productTime" type="time" aria-label="Waktu"><button class="button button-primary">Search</button></form></div><div class="product-vehicle-list">${detail.vehicles.map((vehicle,index)=>`<article class="product-vehicle-card"><div class="product-brand">Movia</div><div class="vehicle-copy"><h3>${vehicle.name}</h3><p>${vehicle.notes}</p></div><div class="vehicle-image"><img src="${vehicle.image}" alt="${vehicle.model}"></div><div class="vehicle-spec"><h4>${vehicle.model}</h4><span>${vehicle.seats}</span><span>${vehicle.luggage}</span><span>Charging Port</span><span>Available on App</span><button class="button button-primary" data-route="order" data-service="${activeProduct}" data-vehicle="${vehicle.name}" data-index="${index}">Pesan product ini</button></div></article>`).join("")}</div>`;
  const productDate = document.querySelector("#productDate");
  if(productDate){
    const todayValue = new Date().toISOString().slice(0,10);
    productDate.min = todayValue;
    productDate.value = todayValue;
  }
  const productTime = document.querySelector("#productTime");
  if(productTime && !productTime.value) productTime.value = "12:25";
}

function renderPromoSlides(){
  document.querySelector("#promoSlider").innerHTML = promos.map((p,index)=>`<article class="promo-slide ${index===0?"active":""}"><div class="promo-copy"><span class="label">${p.label}</span><h3>${p.title}</h3><p>${p.text}</p><span class="promo-code">Kode: ${p.code}</span></div><div class="promo-art">${p.art}</div></article>`).join("");
  document.querySelector("#promoDots").innerHTML = promos.map((_,index)=>`<button class="${index===0?"active":""}" data-promo="${index}" aria-label="Promo ${index+1}"></button>`).join("");
  document.querySelector("#promoPage").innerHTML = promos.map((p)=>`<article class="all-service-card"><p class="eyebrow">${p.label}</p><h2>${p.art}</h2><h3>${p.title}</h3><p>${p.text}</p><span class="promo-code">${p.code}</span></article>`).join("");
}
renderPromoSlides();

let currentPage = "home";
function route(page){
  if(page==="services") page = "product";
  const target = document.querySelector(`#page-${page}`) || document.querySelector("#page-home");
  document.querySelectorAll(".page").forEach((item)=>item.classList.remove("active"));
  target.classList.add("active");
  document.querySelectorAll(".nav-link").forEach((item)=>item.classList.toggle("active",item.dataset.route===page));
  document.querySelector("#navLinks").classList.remove("open");
  currentPage = page;
  location.hash = page;
  if(page==="product") renderProductDetail(activeProduct);
  window.scrollTo(0,0);
}

document.addEventListener("click",(event)=>{
  const routeButton = event.target.closest("[data-route]");
  if(routeButton){
    event.preventDefault();
    if(routeButton.dataset.product) activeProduct = routeButton.dataset.product;
    if(routeButton.dataset.service && document.querySelector("#orderService")){
      const select = document.querySelector("#orderService");
      if([...select.options].some((option)=>option.value===routeButton.dataset.service)) select.value = routeButton.dataset.service;
      updateOrderVehicleOptions(routeButton.dataset.vehicle);
    }
    route(routeButton.dataset.route);
  }
  const closeButton = event.target.closest("[data-close]");
  if(closeButton) document.querySelector(`#${closeButton.dataset.close}`).classList.add("hidden");
  const blogButton = event.target.closest("[data-blog-index]");
  if(blogButton){
    const article = blogs[Number(blogButton.dataset.blogIndex)];
    document.querySelector("#blogModalImage").src = article.image;
    document.querySelector("#blogModalImage").alt = article.title;
    document.querySelector("#blogModalTag").textContent = article.tag;
    document.querySelector("#blogModalTitle").textContent = article.title;
    document.querySelector("#blogModalCopy").textContent = article.content;
    document.querySelector("#blogModal").classList.remove("hidden");
  }
});

document.querySelector("#menuButton").onclick = ()=>document.querySelector("#navLinks").classList.toggle("open");

let serviceIndex = 0;
function visibleServices(){ return innerWidth<=650?2:innerWidth<=1000?3:5; }
function updateServiceCarousel(){
  document.querySelector("#serviceTrack").style.transform = `translateX(-${serviceIndex*(100/visibleServices())}%)`;
}
document.querySelector("#serviceNext").onclick = ()=>{ serviceIndex = serviceIndex >= ecosystem.length-visibleServices()?0:serviceIndex+1; updateServiceCarousel(); };
document.querySelector("#servicePrev").onclick = ()=>{ serviceIndex = serviceIndex<=0?ecosystem.length-visibleServices():serviceIndex-1; updateServiceCarousel(); };
window.addEventListener("resize",()=>{ serviceIndex=Math.min(serviceIndex,ecosystem.length-visibleServices()); updateServiceCarousel(); });
let serviceSwipeStart = 0;
document.querySelector(".carousel-viewport").addEventListener("pointerdown",(event)=>{ serviceSwipeStart=event.clientX; });
document.querySelector(".carousel-viewport").addEventListener("pointerup",(event)=>{
  const distance = event.clientX-serviceSwipeStart;
  if(Math.abs(distance)>45) (distance<0?document.querySelector("#serviceNext"):document.querySelector("#servicePrev")).click();
});

let productIndex = 0;
function updateProductCarousel(){
  document.querySelector("#productTrack").style.transform = `translateX(-${productIndex*(100/visibleServices())}%)`;
}
document.querySelector("#productNext").onclick = ()=>{ productIndex = productIndex >= ecosystem.length-visibleServices()?0:productIndex+1; updateProductCarousel(); };
document.querySelector("#productPrev").onclick = ()=>{ productIndex = productIndex<=0?ecosystem.length-visibleServices():productIndex-1; updateProductCarousel(); };
window.addEventListener("resize",()=>{ productIndex=Math.min(productIndex,ecosystem.length-visibleServices()); updateProductCarousel(); });
let productSwipeStart = 0;
document.querySelector(".product-carousel .carousel-viewport").addEventListener("pointerdown",(event)=>{ productSwipeStart=event.clientX; });
document.querySelector(".product-carousel .carousel-viewport").addEventListener("pointerup",(event)=>{
  const distance = event.clientX-productSwipeStart;
  if(Math.abs(distance)>45) (distance<0?document.querySelector("#productNext"):document.querySelector("#productPrev")).click();
});

document.querySelector("#productDetail").addEventListener("submit",(event)=>{
  if(!event.target.classList.contains("product-search-form")) return;
  event.preventDefault();
  const orderPickup = document.querySelector("#orderPickup");
  const orderDestination = document.querySelector("#orderDestination");
  const orderDate = document.querySelector("#orderDate");
  const orderTime = document.querySelector("#orderTime");
  orderPickup.value = document.querySelector("#productPickup").value;
  orderDestination.value = document.querySelector("#productDestination").value;
  orderDate.value = document.querySelector("#productDate").value;
  orderTime.value = document.querySelector("#productTime").value;
  document.querySelector("#orderService").value = activeProduct;
  updateOrderVehicleOptions();
  route("order");
});

let promoIndex = 0;
function showPromo(index){
  promoIndex = (index+promos.length)%promos.length;
  document.querySelectorAll(".promo-slide").forEach((slide,i)=>slide.classList.toggle("active",i===promoIndex));
  document.querySelectorAll("#promoDots button").forEach((dot,i)=>dot.classList.toggle("active",i===promoIndex));
}
document.querySelector("#promoNext").onclick = ()=>showPromo(promoIndex+1);
document.querySelector("#promoPrev").onclick = ()=>showPromo(promoIndex-1);
document.querySelector("#promoDots").onclick = (event)=>{ if(event.target.dataset.promo) showPromo(Number(event.target.dataset.promo)); };
setInterval(()=>{ if(currentPage==="home") showPromo(promoIndex+1); },6000);

function toast(message){
  const element = document.querySelector("#toast");
  element.textContent = message;
  element.classList.add("show");
  setTimeout(()=>element.classList.remove("show"),2800);
}

function escapeHTML(value){
  return String(value).replace(/[&<>"']/g,(character)=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[character]));
}

const defaultTestimonials = [
  {name:"Alya, Mahasiswa",rating:5,text:"Airport Transfer Movia tepat waktu dan pengemudinya sangat membantu membawa bagasi."},
  {name:"Bima, Karyawan",rating:5,text:"Armada bersih, proses pemesanan jelas, dan respons Customer Service cepat."}
];

function openTestimonialDB(){
  return new Promise((resolve,reject)=>{
    if(!window.indexedDB) return reject(new Error("IndexedDB tidak tersedia"));
    const request = indexedDB.open("movia_database",1);
    request.onupgradeneeded = ()=>request.result.createObjectStore("testimonials",{keyPath:"id",autoIncrement:true});
    request.onsuccess = ()=>resolve(request.result);
    request.onerror = ()=>reject(request.error);
  });
}

async function loadTestimonials(){
  let custom = [];
  try{
    const response = await fetch("/api/testimonials",{headers:{accept:"application/json"}});
    if(!response.ok) throw new Error("API database tidak tersedia");
    custom = (await response.json()).testimonials || [];
  }catch(error){
    try{
      const db = await openTestimonialDB();
      custom = await new Promise((resolve,reject)=>{
        const request = db.transaction("testimonials").objectStore("testimonials").getAll();
        request.onsuccess = ()=>resolve(request.result.reverse());
        request.onerror = ()=>reject(request.error);
      });
    }catch(fallbackError){ custom = JSON.parse(localStorage.getItem("moviaTestimonials")||"[]").reverse(); }
  }
  renderTestimonials([...custom,...defaultTestimonials].slice(0,6));
}

function renderTestimonials(items){
  document.querySelector("#testimonialList").innerHTML = items.map((item)=>`<article class="testimonial-card"><div class="stars">${"★".repeat(Number(item.rating))}</div><p>“${escapeHTML(item.text)}”</p><strong>${escapeHTML(item.name)}</strong></article>`).join("");
}

async function saveTestimonial(item){
  try{
    const response = await fetch("/api/testimonials",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(item)});
    if(!response.ok) throw new Error("API database tidak tersedia");
    return "server";
  }catch(error){
    try{
      const db = await openTestimonialDB();
      await new Promise((resolve,reject)=>{
        const request = db.transaction("testimonials","readwrite").objectStore("testimonials").add(item);
        request.onsuccess = resolve;
        request.onerror = ()=>reject(request.error);
      });
    }catch(fallbackError){
      const items = JSON.parse(localStorage.getItem("moviaTestimonials")||"[]");
      items.push(item);
      localStorage.setItem("moviaTestimonials",JSON.stringify(items));
    }
    return "local";
  }
}

document.querySelector("#testimonialForm").onsubmit = async(event)=>{
  event.preventDefault();
  const storage = await saveTestimonial({name:document.querySelector("#testimonialName").value.trim(),rating:Number(document.querySelector("#testimonialRating").value),text:document.querySelector("#testimonialText").value.trim(),createdAt:new Date().toISOString()});
  event.target.reset();
  await loadTestimonials();
  toast(storage==="server"?"Testimoni berhasil disimpan di database Movia.":"Testimoni tersimpan lokal dan akan disinkronkan saat database tersedia.");
};
loadTestimonials();

document.querySelectorAll(".faq-item button").forEach((button)=>button.onclick=()=>{
  const item = button.parentElement;
  item.classList.toggle("open");
  button.lastElementChild.textContent = item.classList.contains("open")?"−":"+";
});

const csModal = document.querySelector("#csModal");
function openCS(){ csModal.classList.remove("hidden"); }
["#floatingCS","#footerCS","#heroCS","#orderCS"].forEach((selector)=>document.querySelector(selector)?.addEventListener("click",openCS));
document.querySelector("#realCS").classList.add("hidden");

const storeLinks = document.querySelectorAll(".store-badges a");
if(storeLinks[0]){
  storeLinks[0].href = "https://play.google.com/store/search?q=Movia%20Mobility%20Indonesia&c=apps";
  storeLinks[0].innerHTML = '<svg class="store-icon google-play-icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="#00d2ff" d="M3 2.4 14.3 12 3 21.6Z"/><path fill="#00e676" d="M3 2.4 16.9 9.7 14.3 12Z"/><path fill="#ffea00" d="m14.3 12 2.6 2.3L3 21.6Z"/><path fill="#ff3d00" d="m16.9 9.7 3.2 1.7c.8.4.8.8 0 1.2l-3.2 1.7-2.6-2.3Z"/></svg><span><small>GET IT ON</small><strong>Google Play</strong></span>';
}
if(storeLinks[1]){
  storeLinks[1].href = "https://apps.apple.com/id/search?term=movia%20mobility%20indonesia";
  storeLinks[1].innerHTML = '<svg class="store-icon apple-icon" viewBox="0 0 384 512" aria-hidden="true"><path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-72.5-19.7-34.5.5-66 20-83.8 50.8-35.5 61.6-9 152.4 25.5 202.3 17.2 24.9 37.8 52.9 64.8 51.9 25.8-1 35.5-16.5 66.6-16.5 31.2 0 40.1 16.5 67.4 16 27.8-.5 45.5-25.4 62.6-50.4-32-46.5-48.4-91.5-47.7-133.6zM260.8 100.5c14.2-17.2 23.9-41.2 21.2-65.1-20.5.8-45.3 14.4-59.8 31.6-13 15-24.2 39.5-21 62.9 22.9 1.8 45.4-12.2 59.6-29.4z"/></svg><span><small>Download on the</small><strong>App Store</strong></span>';
}

document.querySelector("#csIdentityForm").onsubmit = async(event)=>{
  event.preventDefault();
  const name = document.querySelector("#csName").value.trim();
  const phone = document.querySelector("#csPhone").value.trim();
  if(phone.replace(/\D/g,"").length<9){ toast("Masukkan nomor HP yang valid."); return; }
  sessionStorage.setItem("moviaCSIdentity",JSON.stringify({name,phone}));
  fetch("/api/support",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({name,phone})}).catch(()=>{});
  document.querySelector("#csIdentity").classList.add("hidden");
  document.querySelector("#chatArea").classList.remove("hidden");
  document.querySelector("#chatMessages").innerHTML = `<div class="message">Halo ${name}, saya Movia Assistant. Silakan tanyakan layanan, pemesanan, promo, barang tertinggal, atau kendala perjalanan.</div>`;
  const message = encodeURIComponent(`Halo CS Movia, saya ${name} (${phone}). Saya membutuhkan bantuan lebih lanjut.`);
  document.querySelector("#realCS").href = `https://wa.me/6281266886688?text=${message}`;
};

function aiAnswer(text){
  const query = text.toLowerCase();
  if(query.includes("promo")) return "Promo pengguna baru menggunakan kode MOVIABARU. Promo lain dapat dilihat di halaman Promo.";
  if(query.includes("bandara")||query.includes("airport")) return "Pilih Airport Transfer pada halaman Pesan, lalu tentukan waktu penjemputan minimal 3 jam sebelum keberangkatan.";
  if(query.includes("barang")||query.includes("tertinggal")) return "Siapkan nama, waktu perjalanan, dan deskripsi barang. Untuk penelusuran langsung, lanjutkan ke CS asli melalui tombol WhatsApp.";
  if(query.includes("harga")||query.includes("tarif")) return "Tarif dikonfirmasi berdasarkan layanan, rute, waktu, dan ketersediaan armada. Tim Movia akan menghubungi setelah pesanan dikirim.";
  if(query.includes("bus")||query.includes("charter")) return "Charter Bus tersedia untuk perjalanan kampus, perusahaan, wisata, dan acara kelompok. Isi detail perjalanan di halaman Pesan.";
  if(query.includes("cs")||query.includes("manusia")||query.includes("petugas")) return "Silakan tekan tombol Hubungi CS Asli via WhatsApp di bawah percakapan ini.";
  return "Saya memahami pertanyaanmu. Coba sebutkan topik seperti pemesanan, promo, bandara, tarif, Charter Bus, atau barang tertinggal. Jika belum terjawab, lanjutkan ke CS asli.";
}

document.querySelector("#chatForm").onsubmit = (event)=>{
  event.preventDefault();
  const input = document.querySelector("#chatText");
  const text = input.value.trim();
  const messages = document.querySelector("#chatMessages");
  messages.insertAdjacentHTML("beforeend",`<div class="message user">${text.replace(/[<>]/g,"")}</div>`);
  input.value = "";
  setTimeout(()=>{
    messages.insertAdjacentHTML("beforeend",`<div class="message">${aiAnswer(text)}</div>`);
    document.querySelector("#realCS").classList.remove("hidden");
    messages.scrollTop=messages.scrollHeight;
  },350);
  messages.scrollTop=messages.scrollHeight;
};

let currentUser = null;
let registering = false;
const profileIcon = '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8" r="3.5"></circle><path d="M5.5 20v-2.2a6.5 6.5 0 0 1 13 0V20"></path></svg>';
try{ if(localStorage.getItem("moviaActive")==="1") currentUser=JSON.parse(localStorage.getItem("moviaUser")); }catch(error){}
function updateAccount(){
  const button = document.querySelector("#profileButton");
  button.classList.toggle("logged",Boolean(currentUser));
  button.innerHTML = currentUser?currentUser.name.charAt(0).toUpperCase():profileIcon;
  document.querySelector("#authPanel").classList.toggle("hidden",Boolean(currentUser));
  document.querySelector("#profilePanel").classList.toggle("hidden",!currentUser);
  if(currentUser){ document.querySelector("#profileName").value=currentUser.name; document.querySelector("#profilePhone").value=currentUser.phone; document.querySelector("#profileEmail").value=currentUser.email; }
}
document.querySelector("#profileButton").onclick = ()=>{ updateAccount(); document.querySelector("#accountModal").classList.remove("hidden"); };
document.querySelector("#switchAuth").onclick = ()=>{
  registering = !registering;
  document.querySelectorAll(".register-only").forEach((item)=>item.classList.toggle("hidden",!registering));
  document.querySelector("#authTitle").textContent = registering?"Buat Akun Movia":"Masuk ke Movia";
  document.querySelector("#authSubmit").textContent = registering?"Daftar":"Masuk";
  document.querySelector("#switchAuth").textContent = registering?"Sudah punya akun? Masuk":"Belum punya akun? Daftar";
};
document.querySelector("#authForm").onsubmit = (event)=>{
  event.preventDefault();
  const email=document.querySelector("#authEmail").value.trim(),password=document.querySelector("#authPassword").value;
  if(registering){
    const name=document.querySelector("#authName").value.trim(),phone=document.querySelector("#authPhone").value.trim();
    if(!name||!phone){toast("Nama dan nomor HP wajib diisi.");return;}
    currentUser={name,phone,email};
    localStorage.setItem("moviaCredential",JSON.stringify({email,password}));
    localStorage.setItem("moviaUser",JSON.stringify(currentUser));
  }else{
    const saved=JSON.parse(localStorage.getItem("moviaCredential")||"null");
    if(!saved||saved.email!==email||saved.password!==password){toast("Email atau kata sandi tidak sesuai.");return;}
    currentUser=JSON.parse(localStorage.getItem("moviaUser"));
  }
  localStorage.setItem("moviaActive","1"); updateAccount(); toast(registering?"Akun berhasil dibuat.":"Berhasil masuk.");
};
document.querySelector("#profileForm").onsubmit = (event)=>{
  event.preventDefault();
  currentUser={name:document.querySelector("#profileName").value.trim(),phone:document.querySelector("#profilePhone").value.trim(),email:document.querySelector("#profileEmail").value.trim()};
  localStorage.setItem("moviaUser",JSON.stringify(currentUser));
  const credential=JSON.parse(localStorage.getItem("moviaCredential")||"null"); if(credential){credential.email=currentUser.email;localStorage.setItem("moviaCredential",JSON.stringify(credential));}
  updateAccount(); toast("Profil berhasil disimpan.");
};
document.querySelector("#logoutButton").onclick = ()=>{currentUser=null;localStorage.removeItem("moviaActive");updateAccount();document.querySelector("#accountModal").classList.add("hidden");toast("Kamu telah keluar.");};
updateAccount();

function updateOrderVehicleOptions(selectedVehicle){
  const serviceSelect = document.querySelector("#orderService");
  const vehicleSelect = document.querySelector("#orderVehicle");
  if(!serviceSelect || !vehicleSelect) return;
  const serviceName = serviceSelect.value;
  vehicleSelect.innerHTML = productOptions(serviceName);
  const desiredVehicle = selectedVehicle || vehicleSelect.dataset.pendingVehicle;
  if(desiredVehicle && [...vehicleSelect.options].some((option)=>option.value===desiredVehicle)) vehicleSelect.value = desiredVehicle;
  vehicleSelect.dataset.pendingVehicle = "";
}

document.querySelector("#orderService").addEventListener("change",()=>updateOrderVehicleOptions());
updateOrderVehicleOptions();

const today = new Date();
document.querySelector("#orderDate").min = today.toISOString().slice(0,10);
document.querySelector("#orderDate").value = today.toISOString().slice(0,10);
document.querySelector("#orderForm").onsubmit = (event)=>{
  event.preventDefault();
  if(!currentUser){document.querySelector("#accountModal").classList.remove("hidden");toast("Masuk atau buat akun sebelum memesan.");return;}
  const orders=JSON.parse(localStorage.getItem("moviaOrders")||"[]");
  orders.unshift({id:`MOV-${Date.now().toString().slice(-6)}`,service:document.querySelector("#orderService").value,vehicle:document.querySelector("#orderVehicle").value,pickup:document.querySelector("#orderPickup").value,destination:document.querySelector("#orderDestination").value,date:document.querySelector("#orderDate").value,time:document.querySelector("#orderTime").value,user:currentUser.email});
  localStorage.setItem("moviaOrders",JSON.stringify(orders));
  event.target.reset(); updateOrderVehicleOptions(); toast("Pesanan tersimpan. Tim Movia akan menghubungimu.");
};

document.querySelectorAll(".generic-form").forEach((form)=>form.onsubmit=(event)=>{event.preventDefault();event.target.reset();toast("Pesan berhasil dikirim.");});
document.querySelectorAll(".modal").forEach((modal)=>modal.addEventListener("click",(event)=>{if(event.target===modal)modal.classList.add("hidden");}));
route(location.hash.slice(1)||"home");
