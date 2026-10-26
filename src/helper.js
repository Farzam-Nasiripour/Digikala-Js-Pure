//                    error Message
function attachInputValidation({ formId, inputId, errorId, errorMessage }) {
  const form = document.getElementById(formId);
  const input = document.getElementById(inputId);
  const errorText = document.getElementById(errorId);

  // اطمینان از وجود داشتن عناصر در DOM
  if (!form || !input || !errorText) {
    window.alert("عناصر مورد نظر در DOM پیدا نشدند!");
    console.error("عناصر فرم در DOM پیدا نشدن");
    return;
  }
  // اگر متن خطای اختصاصی ارسال شده بود، آن را تنظیم کن
  if (errorMessage) {
    errorText.innerHTML = errorMessage;
  }

  form.addEventListener("submit", function (e) {
    if (input.value.trim() === "") {
      e.preventDefault(); // جلوگیری از ارسال فرم
      errorText.style.display = "flex"; // نمایش متن خطا
      input.style.borderColor = "red";
    } else {
      errorText.style.display = "none";
      input.style.borderColor = "";
    }
  });

  // پاک کردن پیام خطا به محض تایپ کردن کاربر
  input.addEventListener("input", function () {
    if (input.value.trim() !== "") {
      errorText.style.display = "none";
      input.style.borderColor = "";
    }
  });
}
//                  error Message End

//                    -

//                  - End

//                    -

//                  - End

//                    -

//                  - End

//                    export

export { attachInputValidation };

//                  export End
