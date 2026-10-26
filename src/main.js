//                       Imports                       //
// import { initSwipers } from "./swiper";
import "./style.css";
import "./html with js/html.js";
import "./scroll.js";
import { initSwiper_2 } from "./swiper.js";
//                     Imports End                     //

// const body = document.querySelector("#app");

// const x = document.createElement("div");
// x.textContent = "test";
// x.className = "w-full h-20 bg-violet-400 fixed bottom-0";

// body.insertAdjacentElement("beforeend", x);

// document.addEventListener("scroll", () => {
//   if (window.scrollY >= 300) {
//     x.classList.remove("hidden");
//   } else {
//     x.classList.add("hidden");
//   }
// });

const API_BASE = "https://6adcbc09fa5e73d4ab2da98b.mockapi.io/api";

// بررسی وضعیت نمایش هر اسلایدر از localStorage و مخفی/آشکار کردن آن‌ها
function checkSlidersVisibility() {
  const regularSec = document.getElementById("sectionRegular");
  const discountSec = document.getElementById("sectionDiscount");
  const elseSec = document.getElementById("sectionElse");

  // چک کردن اسلایدر معمولی
  if (regularSec) {
    const showRegular = localStorage.getItem("show_slider_regular") === "true";
    regularSec.style.display = showRegular ? "block" : "none";
  }

  // چک کردن اسلایدر تخفیف‌دار
  if (discountSec) {
    const showDiscount =
      localStorage.getItem("show_slider_discount") === "true";
    discountSec.style.display = showDiscount ? "block" : "none";
  }

  // چک کردن اسلایدر غیره
  if (elseSec) {
    const showElse = localStorage.getItem("show_slider_else") === "true";
    elseSec.style.display = showElse ? "block" : "none";
  }
}

// تابع رندر کارت‌ها در index.html
function renderIndexCards(cards) {
  const discountCards = cards.filter((card) => card.sliderType === "discount");
  const regularCards = cards.filter((card) => card.sliderType === "regular");
  const elseCards = cards.filter(
    (card) => card.sliderType !== "discount" && card.sliderType !== "regular",
  );

  const discountWrapper = document.querySelector(
    ".discountSwiper .swiper-wrapper",
  );
  const regularWrapper = document.querySelector(
    ".regularSwiper .swiper-wrapper",
  );
  const elseWrapper = document.querySelector(".elseSwiper .swiper-wrapper");

  if (discountWrapper) {
    discountWrapper.innerHTML = "";
    discountCards.forEach((card) => {
      discountWrapper.appendChild(createSimpleCard(card));
    });
  }

  if (regularWrapper) {
    regularWrapper.innerHTML = "";
    regularCards.forEach((card) => {
      regularWrapper.appendChild(createSimpleCard(card));
    });
  }

  if (elseWrapper) {
    elseWrapper.innerHTML = "";
    elseCards.forEach((card) => {
      elseWrapper.appendChild(createSimpleCard(card));
    });
  }

  // اول visibility رو چک می‌کنیم بعد swiper رو فعال می‌کنیم
  checkSlidersVisibility();
  initSwiper_2();
}

// ساخت کارت ساده برای نمایش در صفحه اصلی (بدون دکمه‌های ویرایش و حذف)
function createSimpleCard(card) {
  const slide = document.createElement("div");
  slide.className = "swiper-slide";

  const cardDiv = document.createElement("div");
  cardDiv.className = "card";

  const img = document.createElement("img");
  img.src = card.image;
  cardDiv.appendChild(img);

  const body = document.createElement("div");
  body.className = "card-body";

  const nameEl = document.createElement("h3");
  nameEl.className = "card-name";
  nameEl.textContent = card.name;
  body.appendChild(nameEl);

  const descEl = document.createElement("p");
  descEl.className = "card-text";
  descEl.textContent = card.description;
  body.appendChild(descEl);

  const priceContainer = document.createElement("div");
  priceContainer.className = "card-pricing";

  if (card.discount && card.discount > 0) {
    const finalPrice = Math.round(
      card.price - (card.price * card.discount) / 100,
    );
    priceContainer.innerHTML = `
      <div class="price">
        <span class="discount-badge">${card.discount}%</span>
        <span class="original-price">${card.price.toLocaleString()} تومان</span>
      </div>
      <div class="final-price">${finalPrice.toLocaleString()} تومان</div>
    `;
  } else {
    priceContainer.innerHTML = `
      <div class="final-price">${(card.price || 0).toLocaleString()} تومان</div>
    `;
  }

  body.appendChild(priceContainer);
  cardDiv.appendChild(body);
  slide.appendChild(cardDiv);

  return slide;
}

// دریافت اطلاعات از سرور در صفحه اصلی
async function fetchIndexCards() {
  try {
    const response = await fetch(`${API_BASE}/products`);
    if (!response.ok) throw new Error("خطا در دریافت اطلاعات");
    const cards = await response.json();
    renderIndexCards(cards);
  } catch (error) {
    console.log(error.message);
  }
}

// گوش دادن به تغییرات localStorage از طرف صفحات دیگر (مثل داشبورد)
window.addEventListener("storage", (event) => {
  // اگر یکی از کلیدهای مربوط به اسلایدرها تغییر کرد، تابع بررسی را دوباره اجرا کن
  if (event.key && event.key.startsWith("show_slider_")) {
    checkSlidersVisibility();
  }
});

let timerInterval;

function startDiscountTimer(deadlineString) {
  clearInterval(timerInterval);

  // 🟢 گرفتن المان‌های جداگانه
  const hoursEl = document.getElementById("timerHours");
  const minutesEl = document.getElementById("timerMinutes");
  const secondsEl = document.getElementById("timerSeconds");
  const timerBox = document.getElementById("discountTimerBox");

  if (!hoursEl || !minutesEl || !secondsEl || !timerBox || !deadlineString)
    return;

  const targetTime = new Date(deadlineString).getTime();
  if (isNaN(targetTime)) return;

  timerBox.style.display = "flex";
  timerBox.style.flexDirection = "column";
  timerBox.style.alignItems = "center";

  timerInterval = setInterval(() => {
    const now = new Date().getTime();
    const difference = targetTime - now;

    if (difference <= 0) {
      clearInterval(timerInterval);
      timerBox.innerHTML = "<span style='font-size: 14px;'>پایان تخفیف!</span>";
      return;
    }

    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // 🟢 قرار دادن مقدار هر کدام در باکس خودش
    hoursEl.textContent = String(hours).padStart(2, "0");
    minutesEl.textContent = String(minutes).padStart(2, "0");
    secondsEl.textContent = String(seconds).padStart(2, "0");
  }, 1000);
}

// خواندن زمان از localStorage به محض لود شدن صفحه اصلی
window.addEventListener("DOMContentLoaded", () => {
  const savedDeadline = localStorage.getItem("slider_discount_deadline");
  if (savedDeadline) {
    startDiscountTimer(savedDeadline);
  }
});

const channel = new BroadcastChannel("shop_channel");

// به محض دریافت پیام از داشبورد، کارت‌ها را دوباره از سرور بگیر و بروز کن
channel.onmessage = (event) => {
  if (event.data === "update_cards") {
    fetchIndexCards(); // تابع گرفتن کارت‌ها در صفحه اصلی
  }
};

fetchIndexCards();
