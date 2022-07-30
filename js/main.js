$(function () {
  $(".header__slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    prevArrow:
      '<button type="button" class="slick-prev"><img src="images/prev.svg" alt=""></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="images/next.svg" alt=""></button>',
    vertical: true,
    responsive: [
      {
        breakpoint: 370,
        settings: {
          dots: false,
          arrows: false,
          autoplay: true,
          autoSpeed: 2000,
        },
      },
    ],
  });

  $(".product__name").slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: ".product__content",
    focusOnSelect: true,
    vertical: true,
    prevArrow:
      '<button type="button" class="product-prev"><img src="images/productprev.svg" alt=""></button>',
    nextArrow:
      '<button type="button" class="product-next"><img src="images/productnext.svg" alt=""></button>',
    responsive: [
      {
        breakpoint: 801,
        settings: {
          arrows: true,
          vertical: false,
          slidesToShow: 3,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          dots: true,
          arrows: false,
          vertical: false,
        },
      },
      {
        breakpoint: 380,
        settings: {
          slidesToShow: 1,
          dots: true,
          arrows: false,
          vertical: false,
        },
      },
    ],
  });
  $(".product__content").slick({
    touchMove: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: ".product__name",
    fade: true,
    arrows: false,
    focusOnSelect: true,
  });

  $(".menu__btn").on("click", function () {
    $(".menu__list").toggleClass("menu__list--active");
  });

  $(".header__content-link").on("click", function (e) {
    e.preventDefault;
    $(".header__content-link").toggleClass("header__content-link--active");

    const headerLink = document
      .querySelector(".header__content-link--active")
      .getAttribute("id");

    if (headerLink === "ru") {
      document.getElementById("order-ru").style.display = "";
      document.getElementById("order-en").style.display = "none";
    } else {
      document.getElementById("order-en").style.display = "";
      document.getElementById("order-ru").style.display = "none";
    }
  });
});

document.addEventListener("DOMContentLoaded", getLocalLang);

var arrLang = {
  ru: {
    about: "о наc",
    goods: "продукция",
    "why-we": "почему мы",
    recipes: "рецепты",
    history: "история",
    wholesalers: "оптовикам",
    "header__content-title": "Морепродукты из Норвегии",
    "header__slider-text-10":
      "Норвежские морепродукты уникальны, потому что они выращиваются экологически рациональным образом, основываясь на знаниях и опыте многих поколений, заботясь об океане и будущих поколениях.",
    "header__slider-text-11":
      "Ежедневно во всем мире подают несколько миллионов норвежских блюд из морепродуктов.",
    choose: "выбрать",
    cod: "Треска",
    salmon: "Лосось",
    mackerel: "Скумбрия",
    "blue mussel": "Голубая мидия",
    "brown crab": "Коричневый краб",
    octopus: "Осьминог",
    order: "Заказать",
    seson: "Сезон",
    "first-content-item": "Круглый год, но лучше всего осенью.",
    range: "Диапазон улова",
    "second-content-item": "Вдоль норвежского побережья.",
    substances: "Питательные вещества",
    "third-content-item1": "белок",
    "third-content-item2": "витамин B12",
    "third-content-item3": "селен",
    "product-content-text":
      "Чтобы поймать коричневых крабов, вам не понадобится больше, чем фонарик и быстрые рефлексы - последнее, что видят коричневые крабы, - это вспышка и стреляющая рука. Но вы должны действовать быстро: через секунду или две краб понимает, что происходит, и использует свои когти, чтобы ущипнуть Вас изо всех сил, и он не отпустит Вас легко. Таким образом, ловля крабов не только обеспечивает вкусную еду, но и вызывает выброс адреналина.",
    benefits1: "Уникальное разнообразие",
    benefits2: "Экологическое потребление",
    benefits3: " Лучшее качество",
    benefits4: "Идеальные условия для выращивания",
    "information-title-h2":
      "Экстремальные условия для человека. Идеальные условия для рыб.",
    "information-text1":
      "Гольфстрим, несущий теплую воду из Мексиканского залива через Атлантический океан, течет на север вдоль норвежского побережья в прозрачную, чистую ледяную воду Арктики. Это создает идеальные условия для невероятно богатой морской экосистемы.",
    "information-text2":
      "Мелкая рыба, большая рыба, моллюски и другие формы жизни. Некоторые из них - местное население, другие - мигрируют или проеплывают через земной шар. Некоторые предпочитают холодное открытое море, другие живут в тихих глубоких фьордах, защищенных стеной островов и шхер. Каждый из них играет свою роль в сложном и увлекательном морском жизненном цикле.",
    "information-text3":
      "Разнообразие морепродуктов из этой среды уникально. Это одна из основных причин, почему Норвегия является вторым по величине экспортером морепродуктов в мире. И есть также причина, по которой повара и знатоки всего мира выбирают морепродукты из Норвегии: вам будет сложно найти такой же выбор и качество где-либо еще.",
    "information-title-h3-1": "Экологическое потребление",
    "information-text4":
      "Великолепная прибрежная природа Норвегии и разнообразие жизни, которое она поддерживает, - это основа нашего существования с каменного века. Мы знаем, что обязаны передать это будущим поколениям. Море - это дар, который продолжает дарить, но только до тех пор, пока мы продолжаем уважать его и бережно относимся к тому, что нам было дано.",
    "information-title-h3-2": "Идеальные условия выращивания",
    "information-text5":
      "Норвегия имеет одну из самых передовых и хорошо зарекомендовавших себя систем устойчивого развития и управления как в рыболовстве, так и в аквакультуре. Это не случайность, а систематическая работа на всех уровнях, обеспечивающая безопасность потребителей и благополучие рыб.",
    "information-text6":
      "Большой упор на благополучие животных и строгие правила означают, что наши морепродукты неизменно высокого качества и безопасны для употребления. Производство является экологически безопасным и ответственным, оставляя минимальный след на окружающую среду.",
    "information-title-h3-3": "Лучшее качество морепродуктов",
    "information-text6":
      "Норвежские морепродукты - это качественные морепродукты, и мы рады ими поделиться. Вот почему нашими морепродуктами наслаждаются во всем мире. Международное значение этой отрасли наглядно демонстрирует тот факт, что норвежские морепродукты путешествуют примерно в 150 стран. Мы второй по величине экспортер морепродуктов в мире.",
    "information-bottom-text":
      "Вы получаете самые лучшие морепродукты. Неважно, что это за морепродукты, потому что они норвежские, а значит - самого лучшего качества.",
    "contacts-box-text": "В Норвегии холодно. Очень холодно.",
    "contact-us": "Связаться с нами",
    phone: "Телефон:",
    advice: "Норвежский совет по морепродуктам",
    "order-btn": "Оформить заказ",
    "choose-product": "Выбирите товар",
    "choose-count": "Выбирите колличество",
    "contat-data": "Заполните контаные данные",
  },
  en: {
    about: "About Us",
    goods: "Goods",
    "why-we": "Why we",
    recipes: "Recipes",
    history: "Story",
    wholesalers: "wholesalers",
    "header__content-title": "Seafood from Norway",
    "header__slider-text-10":
      "Norwegian seafood is unique because it is grown in a sustainable way, based on the knowledge and experience of many generations, caring for the ocean and future generations.",
    "header__slider-text-11":
      "Several million Norwegian seafood dishes are served around the world every day.",
    choose: "choose",
    cod: "Сod",
    salmon: "Salmon",
    mackerel: "Mackerel",
    "blue mussel": "Blue mussel",
    "brown crab": "Brown crab",
    octopus: "Octopus",
    order: "Order",
    seson: "Seson",
    "first-content-item": "All year round, but best in autumn.",
    rang: "Catch range",
    "second-content-item": "Along the Norwegian coast.",
    substances: "Nutrients",
    "third-content-item1": "protein",
    "third-content-item2": "vitamin B12",
    "third-content-item3": "selenium",
    "product-content-text":
      "To catch brown crabs, you don't need more than a flashlight and quick reflexes - the last, what brown crabs see is a flash and a shooting hand. But you must act quickly: through a second or two the crab understands what is happening and uses its claws to pinch you with all its might, and he won't let you go easily. Thus, catching crabs not only provides delicious food, but also causes adrenaline rush.",
    benefits1: "Unique Diversity",
    benefits2: "Ecological consumption",
    benefits3: "Best quality",
    benefits4: "Ideal Growing Conditions",
    "information-title-h2":
      "Extreme conditions for humans. Ideal conditions for fish.",
    "information-text1":
      "The Gulf Stream, carrying warm water from the Gulf of Mexico across the Atlantic Ocean, flows north along the Norwegian coast into the clear, icy water of the Arctic. This creates ideal conditions for an incredibly rich marine ecosystem.",
    "information-text2":
      "Small fish, big fish, shellfish and other life forms. Some of them are local people, others are migrating or sailing across the globe. Some prefer the cold open sea, others live in quiet deep fjords protected by a wall of islands and skerries. Each plays a different role in the complex and fascinating marine life cycle.",
    "information-text3":
      "The variety of seafood from this environment is unique. This is one of the main reasons why Norway is the second largest seafood exporter in the world. And there's also a reason chefs and connoisseurs around the world choose seafood from Norway: you'd be hard-pressed to find the same selection and quality anywhere else.",
    "information-title-h3-1": "Ecological consumption",
    "information-text4":
      "The magnificent coastal nature of Norway and the diversity of life it supports has been the basis of our existence since the Stone Age. We know we have an obligation to pass this on to future generations. The sea is a gift that continues to give, but only as long as we continue to respect it and take care of what has been given to us.",
    "information-title-h3-2": "Ideal Growing Conditions",
    "information-text5":
      "Norway has one of the most advanced and well established sustainable development and management systems in both fisheries and aquaculture. This is not an accident, but a systematic work at all levels to ensure the safety of consumers and the well-being of fish.",
    "information-text6":
      "A strong emphasis on animal welfare and strict regulations mean our seafood is of consistently high quality and safe to eat. The production is environmentally friendly and responsible, leaving a minimal footprint on the environment.",
    "information-title-h3-3": "The best quality seafood",
    "information-text6":
      "Norwegian seafood is quality seafood and we are happy to share it. That's why our seafood is enjoyed all over the world. The international importance of this industry is illustrated by the fact that Norwegian seafood travels to around 150 countries. We are the second largest seafood exporter in the world.",
    "information-bottom-text":
      "You get the very best seafood. It doesn't matter what kind of seafood it is, because it's Norwegian, which means it's of the best quality.",
    "contacts-box-text": "It's cold in Norway. Very cold.",
    "contact-us": "Connect with us",
    phone: "Telephone:",
    advice: "Norwegian Seafood Council",
    "order-btn": "Checkout",
    "choose-product": "Choose a product",
    "choose-count": "Select Quantity",
    "contat-data": "Fill in contact details",
  },
};

$(function () {
  $(".translate").click(function () {
    var lang = $(this).attr("id");
    saveLocalLang(lang);

    $(".lang").each(function (index, item) {
      $(this).text(arrLang[lang][$(this).attr("key")]);
    });
  });
});

function saveLocalLang(language) {
  let langs;
  if (localStorage.getItem("langs") === null) {
    langs = [];
  } else {
    langs = JSON.parse(localStorage.getItem("langs"));
  }
  langs.push(language);
  localStorage.setItem("langs", JSON.stringify(langs));
}

function getLocalLang() {
  let langs;
  if (localStorage.getItem("langs") === null) {
    langs = [];
  } else {
    langs = JSON.parse(localStorage.getItem("langs"));
  }

  setTimeout(() => {
    langs.forEach(function (language) {
      let lang = langs[langs.length - 1];
      $(".lang").each(function (index, item) {
        $(this).text(arrLang[lang][$(this).attr("key")]);
      });
      console.log(lang);

      if (lang === "ru") {
        document
          .getElementById("ru")
          .classList.add("header__content-link--active");
        document
          .getElementById("en")
          .classList.remove("header__content-link--active");
        document.getElementById("order-ru").style.display = "";
        document.getElementById("order-en").style.display = "none";
      } else {
        document
          .getElementById("en")
          .classList.add("header__content-link--active");
        document
          .getElementById("ru")
          .classList.remove("header__content-link--active");
        document.getElementById("order-en").style.display = "";
        document.getElementById("order-ru").style.display = "none";
      }
    });
  }, 0);
}

const orderOpen = document.querySelector(".order__open");
const orderClose = document.querySelector(".order__close");
const orderMenu = document.querySelector(".order");
const orderBody = document.querySelector(".order__body");
let html = document.documentElement;

document.onclick = function (e) {
  if (e.target.classList.contains("order__container")) {
    if (!e.target.classList.contains("order__body")) {
      orderMenu.classList.remove("order-active");
      orderBody.classList.remove("order-active");
      html.classList.remove("overflow-hidden");
    }
  }
};

orderOpen.addEventListener("click", function (e) {
  e.preventDefault();
  orderMenu.classList.add("order-active");
  orderBody.classList.add("order-active");
  html.classList.add("overflow-hidden");
});

orderClose.addEventListener("click", () => {
  orderMenu.classList.remove("order-active");
  orderBody.classList.remove("order-active");
  html.classList.remove("overflow-hidden");
});
