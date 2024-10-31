document.addEventListener("DOMContentLoaded", function () {
  loadProjectDetails();
});
const projects = {
  1: {
    title: "Martı Residence",
    description:
      "Bağdat Caddesi’nin en prestijli noktalarından biri olan Noter Sokak’ta yer alan Martı Residence, özgün mimarisi sayesinde, bölgesindeki en dikkat çeken yapıdır. Caddebostan Sahili ile Bağdat Caddesi’nin tam ortasında yer alan Martı Rezidans, denize yakın konumu sayesinde özellikle gün batımında içinizi ısıtacak bir manzaraya sahiptir. İmar kuralları gereği, önüne daha yüksek bir bina inşa edilemeyeceği için panaromik deniz manzarası asla kapanmayacaktır. Martı Rezidans, sakinlerine açık yüzme havuzu ve kapalı otopark gibi ayrıcalıklar da sunmaktadır.",
    arch: "Ömer Çamoğlu",
    year: "2019",
    floor: "12",
    field: "5600",
    images: [
      "assets/images/marti/marti-new.jpg",
      "assets/images/marti/marti-cephe2.JPG",

      "assets/images/marti/marti-new2.jpg",
      "assets/images/marti/marti-new3.jpg",
      "assets/images/marti/marti-new4.jpg",
      "assets/images/marti/marti-ic1.JPG",
      "assets/images/marti/marti-ic2.JPG",
      "assets/images/marti/marti-ic3.JPG",
      "assets/images/marti/marti-ic4.JPG",
      "assets/images/marti/marti-ic5.JPG",
      "assets/images/marti/marti-ic6.JPG",
      "assets/images/marti/marti-ic7.JPG",
      "assets/images/marti/marti-ic8.JPG",
      "assets/images/marti/marti-lavabo.JPG",
      "assets/images/marti/marti-lavabo2.JPG",
      "assets/images/marti/marti-manzara1.JPG",
      "assets/images/marti/marti-manzara2.JPG",
      "assets/images/marti/marti-manzara3.JPG",
      "assets/images/marti/marti-manzara4.JPG",
      "assets/images/marti/marti-mutfak1.JPG",
      "assets/images/marti/marti-mutfak2.JPG",
      "assets/images/marti/marti-lavabo.JPG",
      "assets/images/marti/marti-lavabo2.JPG",
      "assets/images/marti/marti-cati1.JPG",
    ],
    ozellikler: ["Kapalı havuz", "Basket sahası", "24 saat güvenlik"],
  },
  2: {
    title: "Bahar Residence",
    description:
      "Nova'nın mimari çizgilerini devam ettiren Bahar Residence, 29 adet 3+1 daireden oluşmakta olup, toplamda 14 katlı bir yapıdır. Proje, iki bodrum kat ve bir zemin kat ile birlikte inşa edilmiş olup, toplam inşaat alanı 6.250 m²'dir. Ayrıca, iki katlı kapalı otoparkı ve çeşitli ağaçlar ve bitkilerden oluşan eşsiz bir peyzaj düzenlemesi ile öne çıkmaktadır.",
    year: "2022",
    floor: "14",
    field: "6250",
    unitCount: "29",
    images: [
      "assets/images/bahar/bahar-cephe-copy.jpeg",
      "assets/images/bahar/bahar-cephe-yan.JPG",
      "assets/images/bahar/bahar-cephe-yan2.JPG",
      "assets/images/bahar/bahar-peysaj-cephe.JPG",
      "assets/images/bahar/bahar-peyzaj1.JPG",
      "assets/images/bahar/bahar-peyzaj2.JPG",
      "assets/images/bahar/bahar-peyzaj3.JPG",
    ],
    ozellikler: ["Kapalı havuz", "Basket sahası", "24 saat güvenlik"],
  },
  3: {
    title: "Mehtap Residence",
    description:
      "Bağdat Caddesi'nde, Oyuncak Müzesi'nin hemen yanında bulunan Mehtap Residence projesi, 47 adet daireden oluşmaktadır. Proje 15 katlı olup, 2 adet kapalı otopark, yüzme havuzu, fitness merkezi, toplantı salonu ve çocuk parkı gibi zengin olanaklara sahiptir.",
    year: "2014",
    floor: "15",
    field: "8000",
    unitCount: "47",
    images: [
      "assets/images/mehtap/mehtap-render.jpg",
      "assets/images/mehtap/mehtap-render2.jpg",
    ],
    ozellikler: ["Kapalı havuz", "Basket sahası", "24 saat güvenlik"],
  },
  4: {
    title: "Mercan Bosphorus",
    description:
      "Çengelköy'de yer alan Mercan Bosphorus Çengelköy, İstanbul'un en güzel bölgelerinden birinde konumlanmıştır. Proje, boğaz manzarasının keyfini çıkarabileceğiniz sahile, günlük ihtiyaçlarınızı karşılayabileceğiniz alışveriş merkezlerine ve işinize veya sevdiklerinize kolayca ulaşmanızı sağlayan ulaşım araçlarına yakın bir mesafededir. Site özellikleri arasında fitness merkezi, açık ve kapalı yüzme havuzları, sosyal tesisler, basketbol sahası, kapalı otopark ve bir adet tarihi eser bulunmaktadır. Projede yer alan daireler ise geniş ve ferah yaşam alanları sunmaktadır.",
    year: "2021",
    field: "18000",
    unitCount: "57",
    images: [
      "assets/images/mercan/mercan-peyzaj1.jpg",
      "assets/images/mercan/mercan-peyzaj2.jpg",
      "assets/images/mercan/mercan-peyzaj3.jpg",
      "assets/images/mercan/mercan-peyzaj4.jpg",
      "assets/images/mercan/mercan-peyzaj5.jpg",
      "assets/images/mercan/mercan-peyzaj6.jpg",
      "assets/images/mercan/mercan-peyzaj7.jpg",
      "assets/images/mercan/mercan-peyzaj8.jpg",
      "assets/images/mercan/mercan-basket.jpg",
      "assets/images/mercan/mercan-blok1.jpg",
      "assets/images/mercan/mercan-bloklar.jpg",
      "assets/images/mercan/mercan-giris.jpg",
      "assets/images/mercan/mercan-kapali-havuz.jpg",
      "assets/images/mercan/mercan-park.jpg",
    ],
    ozellikler: ["Kapalı havuz", "Basket sahası", "24 saat güvenlik"],
  },
  5: {
    title: "Doğan Apartmanı",
    description:
      "Erenköy'de merkezi bir konumda yer alan Doğan Apartmanı, 5.150 m² inşaat alanına sahip olup, 2 bodrum kat, zemin kat ve 12 katlı bir yapıya sahiptir. 2017 yılında inşa edilen bu proje, 18 adet 3+1, 4 adet 2+1 daire ve 2 adet dubleks daireden oluşmaktadır. Dış cephede ısı yalıtımı, 2 katlı kapalı otopark, kapalı otoparktan dairelere erişim sağlayan asansörler, yüzme havuzu, deprem yönetmeliğine uygunluk, ses yalıtımlı tam otomatik jeneratör gibi özellikler, Doğan Apartmanı'nı hem güvenli hem de konforlu bir yaşam alanı haline getirmektedir.",
    year: "2017",
    field: "5150",
    floor: 12,
    images: [
      "assets/images/dogan/dogan-cephe1.jpeg",
      "assets/images/dogan/dogan-cephe2.jpeg",
      "assets/images/dogan/dogan-cephe3.jpeg",
      "assets/images/dogan/dogan-cephe4.jpeg",
      "assets/images/dogan/dogan-cephe5.jpeg",
    ],
    ozellikler: ["Kapalı havuz", "Basket sahası", "24 saat güvenlik"],
  },
  6: {
    title: "Falcon Plaza",
    description:
      "Levent bölgesinde konumlanan 8 katlı iş merkezi 2015 yılında tamamlanmıştır.",
    year: "2015",
    field: "4000",
    floor: 8,
    images: ["assets/images/falcon/plaza/falcon-plaza.jpeg"],
    ozellikler: ["Kapalı havuz", "Basket sahası", "24 saat güvenlik"],
  },
  7: {
    title: "Falcon Lojistik Binası",
    description: "Lojistik depo 2014 yılında inşa edilmiştir.",
    year: "2014",
    field: "21500",
    images: [
      "assets/images/falcon/lojistik/falcon-dis.png",
      "assets/images/falcon/lojistik/falcon-ic.png",
      "assets/images/falcon/lojistik/falcon-lojistik-cephe.jpeg",
      "assets/images/falcon/lojistik/falcon-lojistik.jpeg",
    ],
    ozellikler: ["Kapalı havuz", "Basket sahası", "24 saat güvenlik"],
  },
  8: {
    title: "Gebze OSB Yönetim Binası",
    description: "Gebze Güzeller OSB binası 2011 yılında inşa edilmiştir.",
    year: "2011",
    field: "5500",
    images: [
      "assets/images/gebze-osb/osb-render.jpg",
      "assets/images/gebze-osb/osb1.jpg",
    ],
    ozellikler: ["Kapalı havuz", "Basket sahası", "24 saat güvenlik"],
  },
  9: {
    title: "Konelsis Center",
    description:
      "Konelsis Enerji A.Ş'nin kurumsal binası 2023 yılında inşa edilmiştir.",
    year: "2023",
    field: "6500",
    images: ["assets/images/konelsis/konelsis-render.jpeg"],
    ozellikler: ["Kapalı havuz", "Basket sahası", "24 saat güvenlik"],
  },
};
// Proje sıralaması dizisi
const projectIds = Object.keys(projects);
// Dinamik içerik yükleme
function loadProjectDetails() {
  const urlParams = new URLSearchParams(window.location.search);
  const projectId = urlParams.get("proje");
  if (!projects[projectId]) {
    window.location.replace("proje-detay.html?proje=1");
    return;
  }
  if (projects[projectId]) {
    const project = projects[projectId];
    // Slider containerlarını temizle
    const mainSliderContainer = document.querySelector(
      ".main-slider .slider-for .swiper-wrapper"
    );

    mainSliderContainer.innerHTML = ""; // Temizle

    // Proje resimlerini slider'lara ekle
    project.images.forEach((imageSrc) => {
      // Ana slider için resim elemanı
      const mainSlide = document.createElement("div");
      mainSlide.classList.add("swiper-slide");
      mainSlide.innerHTML = `<img src="${imageSrc}" alt="${project.title}" />`;
      mainSliderContainer.appendChild(mainSlide);
    });
    // Swiper'ı dinamik veriler yüklendikten sonra başlatıyoruz
    var swiper = new Swiper(".slider-for", {
      pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      observer: true,
      observeParents: true,
    });

    document.querySelector(".onovo-title-1 span").innerText = project.title;
    document.querySelector(".onovo-text p").innerText = project.description;
    // Proje detayları (Mimar, Yıl, İnşaat Alanı, Kat/Daire Sayısı)
    const projectInfoContainer = document.querySelector(
      ".onovo-project-info ul"
    );
    projectInfoContainer.innerHTML = ""; // Önceki verileri temizle

    // Mimari alanı varsa ekle
    if (project.arch) {
      const archElement = document.createElement("li");
      archElement.innerHTML = `<div><strong>Mimar:</strong></div><div>${project.arch}</div>`;
      projectInfoContainer.appendChild(archElement);
    }
    document.title = `NOVA © - ${project.title}`;
    // Yıl varsa ekle
    if (project.year) {
      const yearElement = document.createElement("li");
      yearElement.innerHTML = `<div><strong>Yıl:</strong></div><div>${project.year}</div>`;
      projectInfoContainer.appendChild(yearElement);
    }

    // İnşaat alanı varsa ekle
    if (project.field) {
      const fieldElement = document.createElement("li");
      fieldElement.innerHTML = `<div><strong>İnşaat alanı:</strong></div><div>${project.field} m²</div>`;
      projectInfoContainer.appendChild(fieldElement);
    }

    // Kat Sayısı varsa veya Daire Sayısı varsa ekle
    if (project.floor) {
      const floorElement = document.createElement("li");
      floorElement.innerHTML = `<div><strong>Kat Sayısı:</strong></div><div>${project.floor}</div>`;
      projectInfoContainer.appendChild(floorElement);
    }
    if (project.unitCount) {
      const unitElement = document.createElement("li");
      unitElement.innerHTML = `<div><strong>Daire Sayısı:</strong></div><div>${project.unitCount}</div>`;
      projectInfoContainer.appendChild(unitElement);
    }
    // Dinamik URL
    const currentUrl = window.location.href;

    const whatsappLink = `https://wa.me/?text=${encodeURIComponent(
      "NOVA'nın " + project.title + " projesine göz atın. " + currentUrl
    )}`;
    const shareElement = document.createElement("li");
    shareElement.innerHTML = `
      <div style="margin-bottom: 12px">
        <strong>Paylaş:</strong>
      </div>
      <div class="onovo-share">
        <div class="social-share onovo-post-socials onovo-social-2">
          <ul>
            <li>
              <a href="${whatsappLink}" class="onovo-social-link onovo-hover-2 whatsapp-link">
                <i class="icon fab fa-whatsapp"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    `;
    projectInfoContainer.appendChild(shareElement);
    // Dinamik önceki ve sonraki proje bağlantıları
    const currentProjectIndex = projectIds.indexOf(projectId);

    // Eğer mevcut proje ilk projeyse, önceki proje sonuncu proje olacak
    const prevProjectIndex =
      currentProjectIndex === 0
        ? projectIds.length - 1
        : currentProjectIndex - 1;

    // Eğer mevcut proje sonuncu projeyse, sonraki proje ilk proje olacak
    const nextProjectIndex =
      currentProjectIndex === projectIds.length - 1
        ? 0
        : currentProjectIndex + 1;

    // Önceki proje
    const prevProjectId = projectIds[prevProjectIndex];
    const prevProjectUrl = `proje-detay.html?proje=${prevProjectId}`;
    document
      .querySelector(".page-navigation__prev")
      .setAttribute("href", prevProjectUrl);

    // Sonraki proje
    const nextProjectId = projectIds[nextProjectIndex];
    const nextProjectUrl = `proje-detay.html?proje=${nextProjectId}`;
    document
      .querySelector(".page-navigation__next")
      .setAttribute("href", nextProjectUrl);
    const ozelliklerListesi = document.getElementById("ozellikler-listesi");
    ozelliklerListesi.innerHTML = ""; // Listeyi temizle

    // Eğer projede özellikler varsa bunları listele
    if (project.ozellikler && project.ozellikler.length > 0) {
      project.ozellikler.forEach((ozellik) => {
        const li = document.createElement("li");
        li.textContent = ozellik;
        ozelliklerListesi.appendChild(li);
      });
    }
  }
}
