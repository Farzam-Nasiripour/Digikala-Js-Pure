function createPopup({
  title = "پشتیبانی آنلاین",
  message = "چطور می‌توانیم به شما کمک کنیم؟",
  icon = "🎧",
  position = "center", // 'center' | 'bottom-right' | 'bottom-left'
  autoClose = 0, // زمان به میلی‌ثانیه (مثلاً 5000) - 0 یعنی بسته‌شدن دستی
  closeOnOverlayClick = true,
  confirmText = "تایید",
  cancelText = "بستن",
  showCancelButton = true,
  onConfirm = null,
  onCancel = null,
} = {}) {
  // ۱. تعیین کلاس‌های موقعیت‌دهی
  const positionClasses = {
    center: "items-center justify-center",
    "bottom-right": "items-end justify-end p-6",
    "bottom-left": "items-end justify-start p-6",
  };

  // ۲. ساخت لایه اصلی (Overlay)
  const overlay = document.createElement("div");
  overlay.className = `fixed inset-0 z-50 flex bg-black/50 backdrop-blur-sm transition-opacity duration-300 opacity-0 ${positionClasses[position] || positionClasses["center"]}`;

  // ۳. ساخت کارت پاپ‌آپ
  const modal = document.createElement("div");
  modal.className =
    "bg-white dark:bg-slate-800 text-slate-800 dark:text-white rounded-2xl shadow-2xl p-6 w-full max-w-md transform transition-all duration-300 scale-95 dir-rtl text-right relative";

  // ۴. ساخت محتوای داخل پاپ‌آپ
  modal.innerHTML = `
    <div class="flex items-start gap-4">
      ${icon ? `<div class="text-3xl bg-violet-100 dark:bg-violet-900/50 p-3 rounded-xl flex items-center justify-center">${icon}</div>` : ""}
      <div class="flex-1">
        <h3 class="text-lg font-bold mb-1">${title}</h3>
        <div class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">${message}</div>
      </div>
    </div>

    <div class="flex items-center justify-end gap-3 mt-6">
      ${showCancelButton ? `<button class="btn-cancel px-4 py-2 text-sm rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 transition">${cancelText}</button>` : ""}
      <button class="btn-confirm px-4 py-2 text-sm rounded-xl bg-violet-600 hover:bg-violet-700 text-white font-medium transition">${confirmText}</button>
    </div>
  `;

  overlay.appendChild(modal);
  document.body.appendChild(overlay);

  // انیمیشن باز شدن
  requestAnimationFrame(() => {
    overlay.classList.remove("opacity-0");
    modal.classList.remove("scale-95");
  });

  // ۵. تابع بستن پاپ‌آپ (با انیمیشن)
  const close = () => {
    overlay.classList.add("opacity-0");
    modal.classList.add("scale-95");
    setTimeout(() => {
      overlay.remove();
      document.removeEventListener("keydown", handleEsc);
    }, 300);
  };

  // ۶. ایونت‌ها و اکشن‌ها
  const btnConfirm = modal.querySelector(".btn-confirm");
  const btnCancel = modal.querySelector(".btn-cancel");

  btnConfirm.addEventListener("click", () => {
    if (typeof onConfirm === "function") onConfirm();
    close();
  });

  if (btnCancel) {
    btnCancel.addEventListener("click", () => {
      if (typeof onCancel === "function") onCancel();
      close();
    });
  }

  if (closeOnOverlayClick) {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) close();
    });
  }

  const handleEsc = (e) => {
    if (e.key === "Escape") close();
  };
  document.addEventListener("keydown", handleEsc);

  // تایمر بسته‌شدن خودکار
  if (autoClose > 0) {
    setTimeout(close, autoClose);
  }

  return { close };
}

// const btn = document.createElement("button");
// btn.classList =
//   "w-fit h-fit bg-violet-400 p-2 rounded-md fixed bottom-5 left-5 m-5 cursor-pointer";
// btn.textContent = "";

// const body = document.querySelector("#app");

// btn.addEventListener("click", () => {
//   createPopup({
//     title: "پشتیبانی",
//     message: "می‌خواهید برای پشتیبانی به  منتقل شوید؟",
//     icon: "💬",
//     position: "bottom-right",
//     confirmText: "بله، انتقال به پشتیبانی",
//     cancelText: "فعلا نه",
//     onConfirm: () => {
//       // این کد وقتی اجرا می‌شود که کاربر روی دکمه تایید کلیک کند
//       window.open("#", "_blank");
//     },
//   });
// });

// body.insertAdjacentElement("beforeend", btn);

// document.addEventListener("scroll", () => {
//   if (window.scrollY >= 100) {
//     btn.textContent = "ارتباط با پشتیبانی";
//   } else {
//     btn.textContent = "";
//   }
// });

// ۱. ساخت دکمه (به صورت کاملاً استاندارد و Centered)
const btn = document.createElement("button");
btn.className = "hidden lg:flex fixed bottom-5 left-5 z-40  items-center justify-center bg-red-400 hover:bg-red-300 text-white p-3.5 rounded-full shadow-lg cursor-pointer transition-all duration-300";

btn.innerHTML = `
  <span class="text-lg flex items-center justify-center">
  <svg fill="#000000" class="w-7" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <rect x="339.478" y="100.174" width="33.391" height="33.391"></rect> </g> </g> <g> <g> <rect x="139.13" y="100.174" width="33.391" height="33.391"></rect> </g> </g> <g> <g> <g> <rect x="339.478" y="311.653" width="33.391" height="33.391"></rect> <polygon points="473.044,211.479 473.044,100.174 439.653,100.174 439.653,178.087 406.261,178.087 406.261,133.565 372.87,133.565 372.87,311.653 473.044,311.653 473.044,278.261 406.261,278.261 406.261,211.479 "></polygon> </g> </g> </g> <g> <g> <g> <rect x="139.13" y="311.653" width="33.391" height="33.391"></rect> <polygon points="105.739,133.565 105.739,178.087 72.347,178.087 72.347,100.174 38.956,100.174 38.956,211.479 105.739,211.479 105.739,278.261 38.956,278.261 38.956,378.436 72.347,378.436 72.347,311.653 139.13,311.653 139.13,133.565 "></polygon> <rect x="172.522" y="345.044" width="66.783" height="33.391"></rect> </g> </g> </g> <g> <g> <rect x="172.522" y="66.783" width="166.957" height="33.391"></rect> </g> </g> <g> <g> <rect x="72.347" y="66.783" width="33.391" height="33.391"></rect> </g> </g> <g> <g> <rect x="105.739" y="33.391" width="33.391" height="33.391"></rect> </g> </g> <g> <g> <rect x="139.13" width="233.74" height="33.391"></rect> </g> </g> <g> <g> <rect x="372.87" y="33.391" width="33.391" height="33.391"></rect> </g> </g> <g> <g> <rect x="406.261" y="66.783" width="33.391" height="33.391"></rect> </g> </g> <g> <g> <rect x="5.565" y="211.479" width="33.391" height="66.783"></rect> </g> </g> <g> <g> <rect x="473.044" y="211.479" width="33.391" height="66.783"></rect> </g> </g> <g> <g> <rect x="172.522" y="445.218" width="66.783" height="33.391"></rect> </g> </g> <g> <g> <rect x="239.304" y="378.436" width="33.391" height="66.782"></rect> </g> </g> <g> <g> <rect x="72.347" y="378.436" width="33.391" height="33.391"></rect> </g> </g> <g> <g> <g> <polygon points="372.87,411.827 372.87,378.436 339.478,378.436 339.478,345.044 306.085,345.044 306.085,411.826 306.088,411.826 306.088,411.828 372.87,411.828 372.87,445.217 406.261,445.217 406.261,411.827 "></polygon> <rect x="406.261" y="445.217" width="33.389" height="66.783"></rect> </g> </g> </g> <g> <g> <g> <rect x="72.347" y="445.217" width="33.391" height="66.783"></rect> <polygon points="139.13,378.436 139.13,411.827 105.739,411.827 105.739,445.217 172.522,445.217 172.522,378.436 "></polygon> </g> </g> </g> <g> <g> <rect x="172.522" y="166.957" width="33.391" height="44.522"></rect> </g> </g> <g> <g> <rect x="306.087" y="166.957" width="33.391" height="44.522"></rect> </g> </g> <g> <g> <rect x="172.522" y="244.87" width="33.391" height="33.391"></rect> </g> </g> <g> <g> <rect x="306.087" y="244.87" width="33.391" height="33.391"></rect> </g> </g> <g> <g> <rect x="205.913" y="278.261" width="100.174" height="33.391"></rect> </g> </g> </g></svg>
  </span>
  <span id="btnText" class="max-w-xs opacity-100 whitespace-nowrap overflow-hidden transition-all duration-300 font-medium text-sm mr-0 px-0">پشتیبانی</span>
`;

const body = document.querySelector("#app");
body.insertAdjacentElement("beforeend", btn);

const btnText = document.getElementById("btnText");

// تابع کمکی برای اعمال حالت باز یا بسته بودن
function updateButtonState(isCollapsed) {
  if (isCollapsed) {
    // حالت جمع‌شده (فقط آیکون)
    btnText.classList.remove("max-w-xs", "opacity-100", "mr-2");
    btnText.classList.add("max-w-0", "opacity-0", "mr-0");
  } else {
    // حالت باز (متن + آیکون)
    btnText.classList.remove("max-w-0", "opacity-0", "mr-0");
    btnText.classList.add("max-w-xs", "opacity-100", "mr-2");
  }
}

// ۲. بررسی وضعیت اولیه در همین لحظه که صفحه لود می‌شود (برای جلوگیری از مشکل نیاز به اسکرول اول)
if (window.scrollY > 50) {
  updateButtonState(true);
} else {
  updateButtonState(false);
}

// ۳. مدیریت رویداد اسکرول
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    updateButtonState(true);
  } else {
    updateButtonState(false);
  }
});

// ۴. رویداد کلیک برای پاپ‌آپ
btn.addEventListener("click", () => {
  createPopup({
    title: "پشتیبانی",
    message: "می‌خواهید به پشتیبانی منتقل شوید؟",
    icon: `
    <svg fill="#ffffff" class="w-10" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <rect x="339.478" y="100.174" width="33.391" height="33.391"></rect> </g> </g> <g> <g> <rect x="139.13" y="100.174" width="33.391" height="33.391"></rect> </g> </g> <g> <g> <g> <rect x="339.478" y="311.653" width="33.391" height="33.391"></rect> <polygon points="473.044,211.479 473.044,100.174 439.653,100.174 439.653,178.087 406.261,178.087 406.261,133.565 372.87,133.565 372.87,311.653 473.044,311.653 473.044,278.261 406.261,278.261 406.261,211.479 "></polygon> </g> </g> </g> <g> <g> <g> <rect x="139.13" y="311.653" width="33.391" height="33.391"></rect> <polygon points="105.739,133.565 105.739,178.087 72.347,178.087 72.347,100.174 38.956,100.174 38.956,211.479 105.739,211.479 105.739,278.261 38.956,278.261 38.956,378.436 72.347,378.436 72.347,311.653 139.13,311.653 139.13,133.565 "></polygon> <rect x="172.522" y="345.044" width="66.783" height="33.391"></rect> </g> </g> </g> <g> <g> <rect x="172.522" y="66.783" width="166.957" height="33.391"></rect> </g> </g> <g> <g> <rect x="72.347" y="66.783" width="33.391" height="33.391"></rect> </g> </g> <g> <g> <rect x="105.739" y="33.391" width="33.391" height="33.391"></rect> </g> </g> <g> <g> <rect x="139.13" width="233.74" height="33.391"></rect> </g> </g> <g> <g> <rect x="372.87" y="33.391" width="33.391" height="33.391"></rect> </g> </g> <g> <g> <rect x="406.261" y="66.783" width="33.391" height="33.391"></rect> </g> </g> <g> <g> <rect x="5.565" y="211.479" width="33.391" height="66.783"></rect> </g> </g> <g> <g> <rect x="473.044" y="211.479" width="33.391" height="66.783"></rect> </g> </g> <g> <g> <rect x="172.522" y="445.218" width="66.783" height="33.391"></rect> </g> </g> <g> <g> <rect x="239.304" y="378.436" width="33.391" height="66.782"></rect> </g> </g> <g> <g> <rect x="72.347" y="378.436" width="33.391" height="33.391"></rect> </g> </g> <g> <g> <g> <polygon points="372.87,411.827 372.87,378.436 339.478,378.436 339.478,345.044 306.085,345.044 306.085,411.826 306.088,411.826 306.088,411.828 372.87,411.828 372.87,445.217 406.261,445.217 406.261,411.827 "></polygon> <rect x="406.261" y="445.217" width="33.389" height="66.783"></rect> </g> </g> </g> <g> <g> <g> <rect x="72.347" y="445.217" width="33.391" height="66.783"></rect> <polygon points="139.13,378.436 139.13,411.827 105.739,411.827 105.739,445.217 172.522,445.217 172.522,378.436 "></polygon> </g> </g> </g> <g> <g> <rect x="172.522" y="166.957" width="33.391" height="44.522"></rect> </g> </g> <g> <g> <rect x="306.087" y="166.957" width="33.391" height="44.522"></rect> </g> </g> <g> <g> <rect x="172.522" y="244.87" width="33.391" height="33.391"></rect> </g> </g> <g> <g> <rect x="306.087" y="244.87" width="33.391" height="33.391"></rect> </g> </g> <g> <g> <rect x="205.913" y="278.261" width="100.174" height="33.391"></rect> </g> </g> </g></svg>
    `,
    position: "bottom-right",
    confirmText: "بله، انتقال به پشتیبانی",
    cancelText: "فعلا نه",
    onConfirm: () => {
      window.open("#", "_blank");
    },
  });
});
