//                       Imports                       //
import "./style.css";
import { initSwiper_1, initSwiper_2 } from "./swiper.js";
//                     Imports End                     //
const body = document.querySelector("#dashboard");

const container = document.createElement("div");
container.className = "container";
container.innerHTML = `
  <div class="divForm">
    <!-- فرم اضافه کردن کارت جدید --> 
    <form id="addCardForm" class="card-form"> 
      <h2 class="text-center text">افزودن کارت جدید</h2> 
      <div class="form-group">
        <label class="text" for="name">عنوان : </label>
        <input type="text" id="name" placeholder="عنوان کارت را وارد کنید" required />
      </div>
      <div class="form-group">
        <label class="text" for="description">توضیحات : </label>
        <textarea rows="3" id="description" placeholder="توضیحات کارت را وارد کنید" required></textarea>
      </div> 
      <div class="form-group"> 
        <label class="text" for="price">قیمت اصلی (تومان) : </label> 
        <input type="text" id="price" placeholder="مثلا 150,000" required />
      </div>
      <div class="form-group"> 
        <label class="text" for="discount">درصد تخفیف (اختیاری) : </label>
        <input type="number" id="discount" placeholder="مثلا 20 (فقط عدد)" />
      </div>
      <div class="form-group"> 
        <label class="text" for="image">آدرس تصویر : </label>
        <input type="text" id="image" placeholder="آدرس تصویر را وارد کنید" required /> 
      </div> 
      <div class="form-group">
        <label class="text" for="sliderType">بخش نمایش (اسلایدر) : </label>
        <select id="sliderType" required>
          <option value="regular">اسلایدر معمولی</option>
          <option value="else">اسلایدر غیره</option>
        </select>
      </div> 
      <div class="btnDiv">
        <button class="btn" type="submit">افزودن کارت</button>
        <a href="./login.html" class="btn">خروج از داشبورد</a>
      </div> 
    </form>

    <!-- محل نمایش کارت ها --> 
    <div class="cards-container" id="cardsContainer"></div>

    <div class="containerSliders">
      <div class="sliderDiv">
        
        <!-- اسلایدر اول : محصولات معمولی -->
        <div class="sliderRegular">
          <div class="title">
            <h3 class="section-title">محصولات معمولی</h3>
            <label><input type="checkbox" class="slider-toggle" data-slider="regular"> نمایش در سایت</label>
          </div>
          <div class="swiper regularSwiper mySwiper_1">
            <div class="swiper-wrapper"></div>
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
          </div>
        </div>

       <!-- اسلایدر دوم : محصولات تخفیف‌دار -->
        <div class="sliderDiscount">
          <div class="title" style="display: flex; justify-content: space-between; align-items: center;">
            <h3 class="section-title">محصولات تخفیف‌دار</h3>
            
            <div class="flex items-center gap-x-2 md:gap-x-5">
              <!-- دکمه تنظیم تایمر -->
              <button id="setTimerBtn" class="text-white border-none rounded-md cursor-pointer bg-[#f59e0b] px-0.5 py-1 md:p-2" >
                ⏱ تنظیم تایمر
              </button>
              
              <!-- 🟢 دکمه ریست تایمر -->
              <button id="resetTimerBtn" class="text-white border-none rounded-md cursor-pointer bg-[#ef4444] px-0.5 py-1 md:p-2">
                🗑 ریست تایمر
              </button>
              
              <label><input type="checkbox" class="slider-toggle" data-slider="discount"> نمایش در سایت</label>
            </div>
          </div>
          <div class="divSwiperDiscount flex flex-col md:flex-row items-center gap-4 p-2" >
            
            <!-- باکس نمایش تایمر (در ابتدا مخفی است تا زمانی که تنظیم شود) -->
            <div id="discountTimerBox" style="display: none; background: #ef4444; color: white; padding: 10px; border-radius: 8px; text-align: center; min-width: 120px;">
              <div style="font-size: 11px; margin-bottom: 2px;">فرصت باقی‌مانده</div>
              <div id="timerDisplay" style="font-family: monospace; font-size: 16px; font-weight: bold;">00:00:00</div>
            </div>

            <!-- خود اسلایدر -->
            <div class="swiper discountSwiper mySwiper_2" style="flex: 1;">
              <div class="swiper-wrapper"></div>
              <div class="swiper-button-next"></div>
              <div class="swiper-button-prev"></div>
            </div>

          </div>
        </div>

        <!-- اسلایدر سوم: محصولات غیره -->
        <div class="sliderElse">
          <div class="title">
            <h3 class="section-title">محصولات غیره</h3>
            <label><input type="checkbox" class="slider-toggle" data-slider="else"> نمایش در سایت</label>
          </div> 
          <div class="swiper elseSwiper mySwiper_1">
            <div class="swiper-wrapper"></div>
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
          </div>
        </div>

      </div>
    </div>
  </div>
`;

body.insertAdjacentElement("afterbegin", container);

// const API_BASE = "http://localhost:3000";
const API_BASE = "https://6adcbc09fa5e73d4ab2da98b.mockapi.io/api";

const cardContianer = document.querySelector("#cardsContainer"),
  addCardForm = document.querySelector("#addCardForm");

const channel = new BroadcastChannel("shop_channel");

// 🟢 ۱. مدیریت جداکننده ۳ رقم ۳ رقم برای قیمت فرم اصلی (در جای درست)
const mainPrice = document.querySelector("#price");
if (mainPrice) {
  mainPrice.addEventListener("input", (e) => {
    let rawValue = e.target.value.replace(/\D/g, "");
    if (rawValue) {
      rawValue = Number(rawValue).toLocaleString("en-US");
    }
    e.target.value = rawValue;
  });

  mainPrice.addEventListener("focus", () => {
    if (mainPrice.value === "0") {
      mainPrice.value = "";
    }
  });

  mainPrice.addEventListener("blur", () => {
    if (mainPrice.value.trim() === "") {
      mainPrice.value = "0";
    }
  });
}

// 🟢 ۲. مدیریت محدودیت زنده تخفیف فرم اصلی
const mainDiscount = document.getElementById("discount");
if (mainDiscount) {
  mainDiscount.addEventListener("input", () => {
    let valStr = mainDiscount.value;
    let value = Number(valStr);

    if (valStr.includes("-") || value < 0) {
      mainDiscount.value = 0;
    } else if (value > 100) {
      mainDiscount.value = 100;
    }
  });

  mainDiscount.addEventListener("blur", () => {
    if (mainDiscount.value.trim() === "") {
      mainDiscount.value = "0";
    }
  });

  mainDiscount.addEventListener("focus", () => {
    if (mainDiscount.value === "0") {
      mainDiscount.value = "";
    }
  });
}

function renderCards(cards) {
  // ۱. فیلتر کردن کارت‌ها بر اساس دسته‌بندی
  const discountCards = cards.filter((card) => card.sliderType === "discount");
  const regularCards = cards.filter((card) => card.sliderType === "regular");
  // 👈 هر چیزی که غیر از discount و regular باشد (یا خالی باشد) می‌رود توی دسته else
  const elseCards = cards.filter(
    (card) => card.sliderType !== "discount" && card.sliderType !== "regular",
  );

  // ۲. پیدا کردن wrapperهای هر دو اسلایدر
  const discountWrapper = document.querySelector(
    ".discountSwiper .swiper-wrapper",
  );
  const regularWrapper = document.querySelector(
    ".regularSwiper .swiper-wrapper",
  );
  const elseWrapper = document.querySelector(".elseSwiper .swiper-wrapper");

  // ۳. پر کردن اسلایدر تخفیف‌دارها
  if (discountWrapper) {
    discountWrapper.innerHTML = "";
    discountCards.forEach((card) => {
      const slide = document.createElement("div");
      slide.className = "swiper-slide";
      slide.appendChild(createCardElement(card));
      discountWrapper.appendChild(slide);
    });
  }

  // ۴. پر کردن اسلایدر معمولی‌ها
  if (regularWrapper) {
    regularWrapper.innerHTML = "";
    regularCards.forEach((card) => {
      const slide = document.createElement("div");
      slide.className = "swiper-slide";
      slide.appendChild(createCardElement(card));
      regularWrapper.appendChild(slide);
    });
  }

  // ۵. پر کردن اسلایدر محصولات غیره (شامل موارد ناشناخته یا مقدار else)
  if (elseWrapper) {
    elseWrapper.innerHTML = "";
    elseCards.forEach((card) => {
      const slide = document.createElement("div");
      slide.className = "swiper-slide";
      slide.appendChild(createCardElement(card));
      elseWrapper.appendChild(slide);
    });
  }

  // 🟢 فعال‌سازی مجدد Swiperها بعد از قرار گرفتن کارت‌ها در صفحه
  initSwiper_1();
  initSwiper_2();
}

// دریافت و نمایش کارت ها
async function fetchCards() {
  try {
    const response = await fetch(`${API_BASE}/products`);
    if (!response.ok) {
      throw new Error("خطا در دریافت کارت ها");
    }
    const cards = await response.json();
    renderCards(cards);
  } catch (error) {
    console.log(error);
    console.log(error.message);
  }
}

// ساخت یک کارت در داکیومنت

function createCardElement(card) {
  const cardDiv = document.createElement("div");
  cardDiv.className = "card";
  cardDiv.dataset.id = card.id;

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

  // بررسی اینکه آیا تخفیف بیشتر از صفر دارد یا خیر
  if (card.discount && card.discount > 0) {
    // محاسبه قیمت نهایی بعد از کسر تخفیف
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
    // اگر تخفیف نداشت، فقط قیمت اصلی را نشان بده
    priceContainer.innerHTML = `
      <div class="final-price">${(card.price || 0).toLocaleString()} تومان</div>
    `;
  }

  body.appendChild(priceContainer);

  cardDiv.appendChild(body);

  const actions = document.createElement("div");
  actions.className = "card-actions";

  const editBtn = document.createElement("button");
  editBtn.className = "edit-btn";
  editBtn.textContent = "ویرایش";

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-btn";
  deleteBtn.textContent = "حذف";

  actions.appendChild(editBtn);
  actions.appendChild(deleteBtn);
  cardDiv.appendChild(actions);

  editBtn.addEventListener("click", () => startEdit(cardDiv, card));
  deleteBtn.addEventListener("click", () => deleteCard(card.id));

  return cardDiv;
}

function startEdit(cardDiv, card) {
  // 🟢 بررسی اینکه آیا کارت دیگری در حال ویرایش است یا خیر
  const existingEdit = document.querySelector(".card .save-btn");
  if (existingEdit) {
    alert("لطفاً ابتدا ویرایش کارت قبلی را ذخیره یا لغو کنید.");
    return;
  }

  // ۱. حذف کلاس ارتفاع ثابت قبلی (مثلا h-96 یا هر کلاس ارتفاعی که به کارت دادی) و اضافه کردن ارتفاع خودکار و gap-y
  cardDiv.classList.remove("h-100"); // اسم کلاس ارتفاع ثابت خودت رو اینجا بزار
  cardDiv.classList.add("h-auto", "flex", "flex-col", "gap-y-3");

  const body = cardDiv.querySelector(".card-body");
  body.innerHTML = "";

  const nameLabel = document.createElement("label");
  nameLabel.textContent = "عنوان محصول :";
  nameLabel.className = "edit-label";
  body.appendChild(nameLabel);

  const nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.value = card.name;
  nameInput.className = "edit-input p-2 border rounded-md";
  nameInput.placeholder = "عنوان محصول"; // راهنما
  body.appendChild(nameInput);

  const descLabel = document.createElement("label");
  descLabel.textContent = "توضیحات :";
  descLabel.className = "edit-label";
  body.appendChild(descLabel);

  const descInput = document.createElement("textarea");
  descInput.rows = 3;
  descInput.value = card.description;
  descInput.className =
    "edit-input min-h-10 p-2 border rounded-md scrollbar-none";
  descInput.placeholder = "توضیحات محصول"; // راهنما
  body.appendChild(descInput);

  // تابع برای تنظیم خودکار ارتفاع textarea بر اساس متن
  function resizeTextarea() {
    descInput.style.height = "auto";
    descInput.style.height = descInput.scrollHeight + "px";
  }

  // اعمال ارتفاع خودکار به محض باز شدن ویرایش
  setTimeout(resizeTextarea, 0);

  // اعمال ارتفاع خودکار به ازای هر بار تایپ کاربر
  descInput.addEventListener("input", resizeTextarea);

  const priceLabel = document.createElement("label");
  priceLabel.textContent = "قیمت اصلی (تومان) :";
  priceLabel.className = "edit-label";
  body.appendChild(priceLabel);

  const priceInput = document.createElement("input");
  priceInput.type = "text";
  priceInput.className = "edit-input p-2 border rounded-md";
  priceInput.placeholder = "قیمت را وارد کنید (تومان)"; // راهنما

  // 👈 اصلاح این خط: بررسی دقیق‌تر برای جلوگیری از نادیده گرفتن عدد 0
  const initialPrice =
    card.price !== undefined && card.price !== null
      ? card.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      : "";

  priceInput.value = initialPrice;
  priceInput.className = "edit-input p-2 rounded border";
  priceInput.placeholder = "مثلا 150,000";

  // رویداد برای جدا کردن ۳ رقم ۳ رقم به محض تایپ
  priceInput.addEventListener("input", (e) => {
    let rawValue = e.target.value.replace(/\D/g, "");
    if (rawValue) {
      rawValue = Number(rawValue).toLocaleString("en-US");
    }
    e.target.value = rawValue;
  });

  // ⬇️ به محض کلیک روی اینپوت، اگر مقدارش صفر یا پیش‌فرض بود، خالی شود تا پلیس‌هولدر دیده شود
  priceInput.addEventListener("focus", () => {
    if (priceInput.value === "0" || priceInput.value === "0") {
      priceInput.value = "";
    }
  });

  // (اختیاری) اگر کاربر کلیک کرد و چیزی ننوشت و بیرون رفت، دوباره صفر را برگردانیم که خالی نماند
  priceInput.addEventListener("blur", () => {
    if (priceInput.value.trim() === "") {
      priceInput.value = "0";
    }
  });

  body.appendChild(priceInput);

  const discountLabel = document.createElement("label");
  discountLabel.textContent = "درصد تخفیف را وارد کنید فقط باعدد :";
  discountLabel.className = "edit-label";
  body.appendChild(discountLabel);

  const discountInput = document.createElement("input");
  discountInput.type = "number";
  discountInput.className = "edit-input p-2 border rounded-md";
  discountInput.placeholder = "درصد تخفیف (مثلا 20)"; // راهنما

  // قرار دادن مقدار اولیه تخفیف (اگر وجود داشته باشد و صفر نباشد)
  discountInput.value =
    card.discount !== undefined && card.discount !== null && card.discount !== 0
      ? card.discount
      : "";

  // ⬇️ محدودکننده زنده (حداکثر 100، صفر شدن اعداد منفی و جلوگیری از علامت منفی)
  discountInput.addEventListener("input", () => {
    let valStr = discountInput.value;
    let value = Number(valStr);

    if (valStr.includes("-") || value < 0) {
      discountInput.value = 0;
    } else if (value > 100) {
      discountInput.value = 100;
    }
  });

  // ⬇️ اگر کادر خالی رها شد، مقدار 0 برگردد
  discountInput.addEventListener("blur", () => {
    if (discountInput.value.trim() === "") {
      discountInput.value = "0";
    }
  });

  // ⬇️ به محض کلیک، اگر مقدار صفر بود خالی شود
  discountInput.addEventListener("focus", () => {
    if (discountInput.value === "0") {
      discountInput.value = "";
    }
  });

  body.appendChild(discountInput);

  const imageLabel = document.createElement("label");
  imageLabel.textContent = "آدرس تصویر :";
  imageLabel.className = "edit-label";
  body.appendChild(imageLabel);

  const imageInput = document.createElement("input");
  imageInput.type = "text";
  imageInput.value = card.image; // قرار دادن لینک عکس فعلی به عنوان مقدار پیش‌فرض
  imageInput.className = "edit-input p-2 border rounded-md";
  imageInput.placeholder = "آدرس تصویر را وارد کنید";

  body.appendChild(imageInput);

  const sliderTypeLabel = document.createElement("label");
  sliderTypeLabel.textContent = "بخش نمایش (اسلایدر) :";
  sliderTypeLabel.className = "edit-label";
  body.appendChild(sliderTypeLabel);

  const sliderTypeSelect = document.createElement("select");
  sliderTypeSelect.className = "edit-input p-2 border rounded-md";
  sliderTypeSelect.innerHTML = `
    <option value="regular">اسلایدر معمولی</option>
    <option value="else">اسلایدر غیره</option>
  `;

  // تنظیم مقدار قبلی کارت
  sliderTypeSelect.value = card.sliderType || "regular";
  body.appendChild(sliderTypeSelect);

  const actions = cardDiv.querySelector(".card-actions");
  actions.innerHTML = "";

  const saveBtn = document.createElement("button");
  saveBtn.className = "save-btn";
  saveBtn.textContent = "ذخیره";

  const cancelBtn = document.createElement("button");
  cancelBtn.className = "cancel-btn";
  cancelBtn.textContent = "انصراف";

  actions.appendChild(saveBtn);
  actions.appendChild(cancelBtn);

  saveBtn.addEventListener("click", async () => {
    // پاک کردن کاماها قبل از تبدیل به عدد و ارسال به سرور
    const cleanPrice = priceInput.value.replace(/,/g, "").trim();

    const currentDiscount = Number(discountInput.value) || 0;

    // 👈 منطق هوشمند ویرایش:
    let finalSliderType = sliderTypeSelect.value;
    if (currentDiscount > 0) {
      finalSliderType = "discount";
    } else if (finalSliderType === "discount" && currentDiscount === 0) {
      finalSliderType = "regular"; // اگر قبلا تخفیف داشت و الان برداشتیم، برگرده به معمولی
    }

    const updateData = {
      name: nameInput.value.trim(),
      description: descInput.value.trim(),
      price: Number(cleanPrice) || 0,
      discount: currentDiscount,
      image: imageInput.value.trim(),
      sliderType: finalSliderType, // 👈 اعمال نوع اسلایدرِ جدید و هوشمند
    };

    try {
      await updateCard(card.id, updateData);
      fetchCards();
      channel.postMessage("update_cards");
    } catch (error) {
      console.log("two");
      alert(error.message);
    }
  });

  cancelBtn.addEventListener("click", () => {
    fetchCards();
  });
}

async function updateCard(id, data) {
  const response = await fetch(`${API_BASE}/products/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    // 👈 این خط را اضافه کنید تا بفهمیم سرور دقیقاً چه ایرادی گرفته است
    const errorText = await response.text();
    console.log("MockAPI Error Details:", errorText);

    throw new Error("خطا در بروزرسانی کارت ها");
  }
  return response.json();
}

async function deleteCard(id) {
  const confirmDelete = confirm("آیا از حذف مطمئن هستید؟");
  if (!confirmDelete) return;
  try {
    const response = await fetch(`${API_BASE}/products/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("خطا در حذف");
    }
    fetchCards();
    channel.postMessage("update_cards");
  } catch (error) {
    console.log("three");
    alert(error.message);
  }
}

async function addCard(event) {
  event.preventDefault();
  const name = document.getElementById("name").value.trim(),
    description = document.getElementById("description").value.trim(),
    image = document.getElementById("image").value.trim(),
    rawPrice = document.getElementById("price").value.replace(/,/g, "").trim(),
    price = Number(rawPrice) || 0;
  // sliderType = document.getElementById("sliderType").value;

  let discount = Number(document.getElementById("discount").value) || 0;
  if (discount > 100) discount = 100;
  if (discount < 0) discount = 0;

  // 👈 منطق هوشمند خودکار:
  let sliderType = document.getElementById("sliderType").value;
  if (discount > 0) {
    sliderType = "discount";
  }

  if (!name || !description || !image || !price || !sliderType) {
    alert("لطفا فیلدهای ضروری (عنوان، توضیحات، تصویر و قیمت) را تکمیل کنید");
    return;
  }

  try {
    const response = await fetch(`${API_BASE}/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        description,
        image,
        price,
        discount,
        sliderType,
      }),
    });
    if (!response.ok) {
      throw new Error("خطا در افزودن کارت");
    }
    addCardForm.reset();
    fetchCards();
    channel.postMessage("update_cards");
  } catch (error) {
    console.log("four");
    alert(error.message);
  }
}

addCardForm.addEventListener("submit", addCard);

// مدیریت ذخیره وضعیت چک‌باکس اسلایدرها برای index.html
document.querySelectorAll(".slider-toggle").forEach((checkbox) => {
  const sliderName = checkbox.dataset.slider;

  // خواندن وضعیت ذخیره شده قبلی از localStorage
  const savedState = localStorage.getItem(`show_slider_${sliderName}`);
  if (savedState !== null) {
    checkbox.checked = savedState === "true";
  }

  // ذخیره تغییرات به محض کلیک روی چک‌باکس
  checkbox.addEventListener("change", (e) => {
    localStorage.setItem(`show_slider_${sliderName}`, e.target.checked);
  });
});

let timerInterval;

// تابع اصلی اجرای تایمر معکوس
function startDiscountTimer(deadlineString) {
  clearInterval(timerInterval);
  const timerDisplay = document.getElementById("timerDisplay");
  const timerBox = document.getElementById("discountTimerBox");

  if (!timerDisplay || !timerBox || !deadlineString) return;

  const targetTime = new Date(deadlineString).getTime();
  if (isNaN(targetTime)) return;

  // نمایش باکس تایمر چون تاریخ وجود دارد
  timerBox.style.display = "flex";
  timerBox.style.flexDirection = "column";
  timerBox.style.alignItems = "center";

  timerInterval = setInterval(() => {
    const now = new Date().getTime();
    const difference = targetTime - now;

    if (difference <= 0) {
      clearInterval(timerInterval);
      timerDisplay.textContent = "پایان یافت!";
      return;
    }

    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    const h = String(hours).padStart(2, "0");
    const m = String(minutes).padStart(2, "0");
    const s = String(seconds).padStart(2, "0");

    timerDisplay.textContent = `${h}:${m}:${s}`;
  }, 1000);
}

// ۱. به محض لود شدن صفحه، اگر تایمری از قبل ذخیره شده بود آن را روشن کن
window.addEventListener("DOMContentLoaded", () => {
  const savedDeadline = localStorage.getItem("slider_discount_deadline");
  if (savedDeadline) {
    startDiscountTimer(savedDeadline);
  }
});

// ۲. با کلیک روی دکمه "تنظیم تایمر"، پنجره ورود زمان باز شود
document.addEventListener("click", (e) => {
  if (e.target && e.target.id === "setTimerBtn") {
    const inputTime = prompt(
      "زمان پایان را با این فرمت وارد کنید (مثلا: 2026-12-31T23:59):",
      "2026-12-31T23:59",
    );
    if (inputTime) {
      localStorage.setItem("slider_discount_deadline", inputTime);
      startDiscountTimer(inputTime);
      alert("تایمر با موفقیت تنظیم شد!");
    }
  }
});

document.addEventListener("click", (e) => {
  if (e.target && e.target.id === "resetTimerBtn") {
    // پاک کردن از حافظه مرورگر
    localStorage.removeItem("slider_discount_deadline");

    // متوقف کردن اینتروال تایمر
    clearInterval(timerInterval);

    // مخفی کردن باکس تایمر در صفحه
    const timerBox = document.getElementById("discountTimerBox");
    if (timerBox) {
      timerBox.style.display = "none";
    }

    alert("تایمر با موفقیت ریست شد!");
  }
});

fetchCards();
