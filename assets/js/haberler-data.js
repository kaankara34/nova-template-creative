const newsPerPage = 3; // Number of news items per page
let currentPage = 1; // Start from page 1

window.onload = () => {
  populateLatestNews();
  populateNews();
  createPagination();
};
const newsData = [
  {
    id: 1,
    date: "21 Kasım 2023",
    category: "Kentsel Dönüşüm",
    title: "Ataşehir Barbaros 40T Kentsel Dönüşüm Toplantısı",
    image: "assets/images/news/atasehir/toplanti.jpg",
    readTime: "1 DAKİKA",
    summary:
      "Ataşehir'de bulunan Barbaros Mahallesi 40T adası için gerçekleştirilen kentsel dönüşüm toplantısında, NOVA A.Ş yönetim kurulu, finans müdürü, hukuk bürosu ve Çamoğlu Mimarlık katılımıyla kapsamlı bir sunum yapıldı.",
  },
  {
    id: 2,
    date: "27 Kasım 2023",
    category: "Kentsel Dönüşüm",
    title: "Ataşehir'de kentsel dönüşüm için 40T adasında imzalar atıldı.",
    image: "assets/images/news/atasehir/atasehir-imza.JPG",
    readTime: "1 DAKİKA",
    summary:
      "Ataşehir’in Barbaros Mahallesi’nde yer alan 40T adası için önemli bir adım atıldı. Kadıköy 35. Noter'de gerçekleştirilen imza töreni, yoğun bir katılımla gerçekleşti.",
  },
  {
    id: 3,
    date: "12 Aralık 2023",
    category: "Nova Kurumsal",
    title: "Yılın Kentsel Dönüşüm Şirketi Ödülü NOVA A.Ş'ye Verildi.",
    image: "assets/images/news/osmankara/nova-odul.jpg",
    readTime: "1 DAKİKA",
    summary:
      "Ankara'da düzenlenen ödül töreninde, Nova, kentsel dönüşüm projeleri ve kentsel dönüşüme katkılarından dolayı Yılın İnşaat Şirketi Ödülü'ne layık görüldü.",
  },
  {
    id: 4,
    date: "22 Aralık 2023",
    category: "Nova Kurumsal",
    title: "Malezya İnşaat ve Enerji Bakanlıkları Ziyareti",
    image: "assets/images/news/osmankara/petronas.jpg",
    readTime: "2 DAKİKA",
    summary:
      "Türkiye Cumhuriyeti’ni temsilen OSTİM Enerji Grubu heyeti ve Yönetim Kurulu Başkanımız Osman Kara, Endonezya’nın başkenti Jakarta’da önemli temaslarda bulundu.",
  },
  {
    id: 5,
    date: "27 Aralık 2023",
    category: "Nova Kurumsal",
    title: "Endonezya Meclisi ve Bakanlığı Ziyareti",
    image: "assets/images/news/osmankara/end-meclis.jpg",
    readTime: "2 DAKİKA",
    summary:
      "Türkiye Cumhuriyeti'ni temsil eden inşaat heyetinde yer alan Yönetim Kurulu Başkanımız Osman Kara, Endonezya'nın başkenti Jakarta'da Meclis ve Bakanlık ziyaretleri gerçekleştirdi.",
  },
  {
    id: 6,
    date: "19 Ocak 2024",
    category: "Nova Kurumsal",
    title: "Endonezya Meclis Başkanı İstanbul'a ziyaret gerçekleştirdi.",
    readTime: "1 DAKİKA",
    image: "assets/images/news/osmankara/rachmad_odul5.jpg",
    summary:
      "Endonezya Meclis Başkanı ve geçmişte Endonezya Ticaret Bakanlığı görevini üstlenmiş olan Sayın Rachmad Gobel, Türkiye ile Endonezya arasındaki işbirliği ilişkilerini güçlendirmek amacıyla İstanbul’a önemli bir iade-i ziyarette bulundu.",
  },
  {
    id: 7,
    date: "7 Nisan 2024",
    category: "Kentsel Dönüşüm",
    title: "Doğu ve Batı Apartmanları ile anlaşma sağlandı.",
    image: "assets/images/news/dogu-bati/dogu-bati-tabela.jpg",
    readTime: "1 DAKİKA",
    summary:
      "Bağdat Caddesi kentsel dönüşüm projeleri kapsamında, Göztepe Mahallesi'nde bulunan Doğu ve Batı Apartmanları ile anlaşma sağlandı.",
  },
  {
    id: 8,
    date: "16 Mayıs 2024",
    category: "Kentsel Dönüşüm",
    title: "Taç Apartmanı ile anlaşma sağlandı.",
    image: "assets/images/news/tac/tac-tabela.jpg",
    readTime: "1 DAKİKA",
    summary:
      "Bağdat Caddesi kentsel dönüşüm projeleri kapsamında, Feneryolu Mahallesi'nde bulunan Taç Apartmanı ile anlaşma sağlandı.",
  },
  {
    id: 9,
    date: "11 Haziran 2024",
    category: "Kentsel Dönüşüm",
    title: "Ana Apartmanı ile anlaşma sağlandı.",
    image: "assets/images/news/ana/ana.jpg",
    readTime: "1 DAKİKA",
    summary:
      "Bağdat Caddesi kentsel dönüşüm projeleri kapsamında, Göztepe Mahallesi'nde bulunan Ana Apartmanı ile anlaşma sağlandı.",
  },
  {
    id: 10,
    date: "8 Ekim 2024",
    category: "Kentsel Dönüşüm",
    title: "Doğu Batı Apartmanları Noter Sözleşmesi",
    image: "assets/images/news/dogu-bati/kalamis1.jpg",
    readTime: "1 DAKİKA",
    summary:
      "Doğu Batı Apartmanları için kat karşılığı noter sözleşmesi Kalamış Wyndham Otel'de gerçekleştirilen bir toplantı ile imzalandı.",
  },
];

function populateLatestNews() {
  const latestNewsContainer = document.querySelector(
    ".wp-block-latest-posts__list"
  );
  latestNewsContainer.innerHTML = "";
  // En son 3 haberi id'ye göre azalan sırayla kenarda göster
  const latestNews = [...newsData].sort((a, b) => b.id - a.id);

  latestNews.forEach((news) => {
    latestNewsContainer.innerHTML += `
      <li class="flex-post-list">
        <div class="wp-block-latest-posts__featured-image flex-post-left">
          <img src="${news.image}" alt="${news.title}" />
        </div>
        <div class="flex-post-right">
        <span class="read-cate"><i class="fa-regular fa-newspaper"style="margin-right:5px;"></i>KENTSEL DÖNÜŞÜM</span>
        <a class="wp-block-latest-posts__post-title " href="haber-detay.html?id=${news.id}">
          ${news.title}
        </a>
        <span class="read-time"><i class="fa-regular fa-hourglass-half" style="margin-right:5px;"></i>${news.readTime}</span>
        <span class="wp-block-latest-posts__post-date sidebar-postdate">${news.date}</span>
         </div>
      </li>
    `;
  });
}

function scrollToFirstNewsItem() {
  const firstNewsItem = document.querySelector(".onovo-blog-item");
  if (firstNewsItem) {
    const offsetTop = firstNewsItem.getBoundingClientRect().top + window.scrollY - 150; // 50 px üstüne çık
    window.scrollTo({ top: offsetTop, behavior: "smooth" });
  }
}

const reversedNews = [...newsData].reverse();
// Sayfadaki blog ve kenar en son haber alanlarına haberleri ekleyen fonksiyon
function populateNews() {
  const blogContainer = document.querySelector(".col-lg-8"); // Haberlerin olduğu ana bölüm

  blogContainer.innerHTML = "";

  const startIndex = (currentPage - 1) * newsPerPage;
  const endIndex = startIndex + newsPerPage;
  const newsToDisplay = reversedNews.slice(startIndex, endIndex);

  newsToDisplay.forEach((news) => {
    blogContainer.innerHTML += `
      <div class="onovo-blog-item archive-item">
        <div class="image" data-onovo-overlay data-onovo-scroll>
          <a href="haber-detay.html?id=${news.id}">
            <img src="${news.image}" alt="${news.title}" />
          </a>
        </div>
        <div class="desc">
          <div class="info">
            <div class="date">${news.date}</div>
            ${news.category}
          </div>
          <h3 class="title">
            <a href="haber-detay.html?id=${news.id}">${news.title}</a>
          </h3>
          <div class="onovo-text">
            <p>${news.summary}<br />
              <a href="haber-detay.html?id=${news.id}" class="onovo-btn onovo-hover-btn">
                <span>Devamını Oku</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    `;
  });

  blogContainer.innerHTML += `
    <div class="pager">
      <span aria-current="page" class="page-numbers current">1</span>
      <a class="page-numbers" href="#">2</a>
      <a class="next page-numbers" href="#"><i class="fas fa-chevron-right style="font-size: 16px;" ></i></a>
    </div>
  `;
}
// Sayfalama oluşturma fonksiyonu
function createPagination() {
  const paginationContainer = document.querySelector(".pager");
  paginationContainer.innerHTML = ""; // Clear existing buttons

  const totalPages = Math.ceil(newsData.length / newsPerPage); // Calculate total number of pages
 if (currentPage > 1) {
    const prevButton = document.createElement("a");
    prevButton.classList.add("prev", "page-numbers");
    prevButton.href = "#";
    prevButton.innerHTML = `<i class="fas fa-chevron-left" style="font-size: 16px;"></i>`;
    prevButton.addEventListener("click", function (event) {
      event.preventDefault();
      currentPage--;
      populateNews();
      createPagination();
      scrollToFirstNewsItem();
    });
    paginationContainer.appendChild(prevButton);
  }
  for (let i = 1; i <= totalPages; i++) {
    const pageButton = document.createElement("a");
    pageButton.innerText = i;
    pageButton.classList.add("page-numbers");
    if (i === currentPage) pageButton.classList.add("current");

    pageButton.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent default anchor behavior
      currentPage = i;
      populateNews(); // Update the displayed news
      createPagination(); // Update pagination buttons
      scrollToFirstNewsItem(); // İlk haber öğesine kaydır
    });

    paginationContainer.appendChild(pageButton);
  }

  // Add next button
  if (currentPage < totalPages) {
    const nextButton = document.createElement("a");
    nextButton.classList.add("next", "page-numbers");
    nextButton.href = "#";
    nextButton.innerHTML = `<i class="fas fa-chevron-right" style="font-size: 16px;"></i>`;
    nextButton.addEventListener("click", function (event) {
      event.preventDefault();
      currentPage++;
      populateNews();
      createPagination();
      scrollToFirstNewsItem(); // İlk haber öğesine kaydır
    });
    paginationContainer.appendChild(nextButton);
  }
}

const scrollContainer = document.querySelector('.wp-block-latest-posts__list');

// Kaydırma ve dokunma olaylarını dinleyin
scrollContainer.addEventListener('scroll', checkScrollEnd);
scrollContainer.addEventListener('touchmove', preventScrollAtEnd, { passive: false });

function checkScrollEnd() {
  // Kaydırma sonuna gelinip gelinmediğini kontrol edin
  if (scrollContainer.scrollTop + scrollContainer.clientHeight >= scrollContainer.scrollHeight) {
    // Sonuna geldiğinde engelleyici aktif olsun
    scrollContainer.dataset.scrollEnd = 'true';
  } else {
    // Kaydırma sonuna ulaşılmadığında engelleyiciyi kaldır
    scrollContainer.dataset.scrollEnd = 'false';
  }
}

function preventScrollAtEnd(event) {
  // Eğer kaydırma sonuna gelindiyse kaydırma olayını durdur
  if (scrollContainer.dataset.scrollEnd === 'true' && event.deltaY > 0) {
    event.preventDefault();
  }
}
