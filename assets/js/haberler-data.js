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
    summary:
      "Ataşehir'de bulunan Barbaros Mahallesi 40T adası için gerçekleştirilen kentsel dönüşüm toplantısında, Osman Kara projeyi ve vizyonunu Ataşehirli mahalle sakinlerine aktardı.",
  },
  {
    id: 2,
    date: "27 Kasım 2023",
    category: "Kentsel Dönüşüm",
    title: "Ataşehir'de kentsel dönüşüm için 40T adasında imzalar atıldı.",
    image: "assets/images/news/atasehir/atasehir-imza.JPG",
    summary:
      "Ataşehir, Barbaros Mahallesi 40T adası için imzalar Kadıköy 35. Noter'de atıldı.",
  },
  {
    id: 3,
    date: "12 Aralık 2023",
    category: "Nova Kurumsal",
    title: "Yılın İnşaat Şirketi Ödülü Nova'ya Verildi.",
    image: "assets/images/news/osmankara/nova-odul.jpg",
    summary:
      "Ankara'da düzenlenen ödül töreninde, Nova, kentsel dönüşüm projeleri ve kentsel dönüşüme katkılarından dolayı Yılın İnşaat Şirketi Ödülü'ne layık görüldü.",
  },
  {
    id: 4,
    date: "22 Aralık 2023",
    category: "Nova Kurumsal",
    title: "Malezya Devlet Bakanları Ziyareti",
    image: "assets/images/news/osmankara/petronas.jpg",
    summary:
      "Osman Kara, Malezya'nın Kuala Lumpur kentinde devlet bakanları ve Petronas şirketi yönetimi ile yenilenebilir enerji ve akıllı ev teknolojileri hakkında istişarelerde bulundu; olası işbirlikleri değerlendirildi.",
  },
  {
    id: 5,
    date: "27 Aralık 2023",
    category: "Nova Kurumsal",
    title: "Endonezya Meclisi ve Bakanlığı Ziyareti",
    image: "assets/images/news/osmankara/end-meclis.jpg",
    summary:
      "Türkiye Cumhuriyeti'ni temsil eden inşaat heyetinde yer alan Yönetim Kurulu Başkanımız Osman Kara, Endonezya'nın başkenti Jakarta'da Meclis ve Bakanlık ziyaretleri gerçekleştirdi.",
  },
  {
    id: 6,
    date: "19 Ocak 2024",
    category: "Nova Kurumsal",
    title: "Endonezya Meclis Başkanı iade-i ziyaret gerçekleştirdi.",
    image: "assets/images/news/osmankara/rachmad_odul5.jpg",
    summary:
      "Geçmişte Endonezya Maliye Bakanlığı görevinde bulunmuş ve şu anda Meclis Başkanı olan Sayın Rachmad Gobel, İstanbul'da Osman Kara ile bir görüşme gerçekleştirdi.",
  },
  {
    id: 7,
    date: "7 Nisan 2024",
    category: "Kentsel Dönüşüm",
    title: "Doğu ve Batı Apartmanları ile anlaşma sağlandı.",
    image: "assets/images/news/dogu-bati/dogu-bati-tabela.jpg",
    summary:
      "Bağdat Caddesi kentsel dönüşüm projeleri kapsamında, Göztepe Mahallesi'nde bulunan Doğu ve Batı Apartmanları ile anlaşma sağlandı.",
  },
  {
    id: 8,
    date: "16 Mayıs 2024",
    category: "Kentsel Dönüşüm",
    title: "Taç Apartmanı ile anlaşma sağlandı.",
    image: "assets/images/news/tac/tac-tabela.jpg",
    summary:
      "Bağdat Caddesi kentsel dönüşüm projeleri kapsamında, Feneryolu Mahallesi'nde bulunan Taç Apartmanı ile anlaşma sağlandı.",
  },
  {
    id: 9,
    date: "11 Haziran 2024",
    category: "Kentsel Dönüşüm",
    title: "Ana Apartmanı ile anlaşma sağlandı.",
    image: "assets/images/news/ana/ana.jpg",
    summary:
      "Bağdat Caddesi kentsel dönüşüm projeleri kapsamında, Göztepe Mahallesi'nde bulunan Ana Apartmanı ile anlaşma sağlandı.",
  },
  {
    id: 10,
    date: "8 Ekim 2024",
    category: "Kentsel Dönüşüm",
    title: "Doğu Batı Apartmanları Noter Sözleşmesi",
    image: "assets/images/news/dogu-bati/kalamis1.jpg",
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
  const latestNews = [...newsData].sort((a, b) => b.id - a.id).slice(0, 3);

  latestNews.forEach((news) => {
    latestNewsContainer.innerHTML += `
      <li>
        <div class="wp-block-latest-posts__featured-image">
          <img src="${news.image}" alt="${news.title}" />
        </div>
        <a class="wp-block-latest-posts__post-title" href="haber-detay.html?id=${news.id}">
          ${news.title}
        </a>
        <span class="wp-block-latest-posts__post-date">${news.date}</span>
      </li>
    `;
  });
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
    });
    paginationContainer.appendChild(nextButton);
  }
}
