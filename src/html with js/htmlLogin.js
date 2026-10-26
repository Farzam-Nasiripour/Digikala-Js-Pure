//                       Imports                       //
import { attachInputValidation } from "../helper.js";
//                     Imports End                     //

//                    body

const body = document.querySelector("#login");

//                  body End
const mainTag = document.createElement("main");
mainTag.className = "mainTag";
body.insertAdjacentElement("afterbegin", mainTag); //
const divMain = document.createElement("div");
divMain.className = "divMain";
mainTag.insertAdjacentElement("beforeend", divMain);
//
const main = document.createElement("div");
main.className = "main";
divMain.insertAdjacentElement("beforeend", main);
//                  mobile
const arrowBackMobile = document.createElement("div");
arrowBackMobile.className = "arrowBackMobile";
arrowBackMobile.innerHTML =
  '<a href="./main.js"><svg xmlns="http://www.w3.org/2000/svg" class="arrowBackMobile" viewBox="0 0 24 24"><!-- Icon from Material Symbols by Google - https://github.com/google/material-design-icons/blob/master/LICENSE --><path fill="currentColor" d="m14 18l-1.4-1.45L16.15 13H4v-2h12.15L12.6 7.45L14 6l6 6z"/></svg></a>';
body.insertAdjacentElement("afterbegin", arrowBackMobile);
//
const logoDiv = document.createElement("div"),
  logo = document.createElement("div");
logoDiv.className = "logoDiv";
logo.className = "logo";
logo.innerHTML = '<img src="./Pictures/Logo/Logo.svg" alt="">';
main.insertAdjacentElement("beforeend", logoDiv);
logoDiv.insertAdjacentElement("beforeend", logo);
//                  desktop
const arrowBackDesktop = document.createElement("div");
arrowBackDesktop.className = "arroeBackDesktop";
arrowBackDesktop.innerHTML =
  '<a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="arrowBackDesktop" viewBox="0 0 24 24"><!-- Icon from Material Symbols by Google - https://github.com/google/material-design-icons/blob/master/LICENSE --><path fill="currentColor" d="m14 18l-1.4-1.45L16.15 13H4v-2h12.15L12.6 7.45L14 6l6 6z"/></svg></a>';
logo.insertAdjacentElement("afterbegin", arrowBackDesktop);
//                  text1
const text1 = document.createElement("div");
text1.className = "text1";
text1.innerHTML = "<span>ورود یا ثبت‌نام در دیجی‌کالا</span>";
main.insertAdjacentElement("beforeend", text1);
//                  text2
const text2 = document.createElement("div");
text2.className = "text2";
text2.innerHTML = "<span>لطفا شماره موبایل یا ایمیل خود را وارد کنید</span>";
main.insertAdjacentElement("beforeend", text2);
//                  form
const form = document.createElement("form");
form.id = "formLogin";
form.className = "form";
form.action = "./dashboard.html";
form.method = "get";
form.target = "_blank";
main.insertAdjacentElement("beforeend", form);
//                  input
const input = document.createElement("div");
input.className = "inputDiv";
input.innerHTML =
  '<input class="input" id="inputLogin" type="text" placeholder="شماره موبایل یا پست الکترونیک">';
form.insertAdjacentElement("beforeend", input);
//                  error
const errorInput = document.createElement("div");
errorInput.className = "errorInput";
errorInput.innerHTML =
  '<div class="errorSpan" id="errorText" style="color: red; display: none;">لطفاً این فیلد را خالی نگذارید.</div>';
form.insertAdjacentElement("beforeend", errorInput);
//                  btn
const btnDiv = document.createElement("div"),
  btn = document.createElement("button"),
  btnText = document.createElement("span");

btnDiv.className = "btnDiv";
btn.className = "btn";
btnText.className = "btnText";
btn.type = "submit";
btnText.textContent = "ورود به دیجی‌کالا";

form.insertAdjacentElement("beforeend", btnDiv);
btnDiv.insertAdjacentElement("beforeend", btn);
btn.insertAdjacentElement("beforeend", btnText);
// ⬇️ فراخوانی تابع با خود متغیرها:
attachInputValidation({
  formId: "formLogin", // متغیر form که ساختید
  inputId: "inputLogin", // عنصر input
  errorId: "errorText", // عنصر span خطا
  errorMessage:
    '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><!-- Icon from Material Symbols by Google - https://github.com/google/material-design-icons/blob/master/LICENSE --><path fill="currentColor" d="M12.713 16.713Q13 16.425 13 16t-.288-.712T12 15t-.712.288T11 16t.288.713T12 17t.713-.288m0-4Q13 12.425 13 12V8q0-.425-.288-.712T12 7t-.712.288T11 8v4q0 .425.288.713T12 13t.713-.288M8.65 20H6q-.825 0-1.412-.587T4 18v-2.65L2.075 13.4q-.275-.3-.425-.662T1.5 12t.15-.737t.425-.663L4 8.65V6q0-.825.588-1.412T6 4h2.65l1.95-1.925q.3-.275.663-.425T12 1.5t.738.15t.662.425L15.35 4H18q.825 0 1.413.588T20 6v2.65l1.925 1.95q.275.3.425.663t.15.737t-.15.738t-.425.662L20 15.35V18q0 .825-.587 1.413T18 20h-2.65l-1.95 1.925q-.3.275-.662.425T12 22.5t-.737-.15t-.663-.425z"/></svg> <span>لطفاً شماره موبایل یا پست الکترونیک را وارد کنید</span>',
});
//                  text3
const text3 = document.createElement("div");
text3.className = "text3";
text3.innerHTML =
  '<p>ورود شما به معنای پذیرش <a class="innerText1" href="https://www.digikala.com/page/terms/">شرایط دیجی‌کالا</a> و <a class="innerText2" href="https://www.digikala.com/page/privacy/">قوانین حریم‌خصوصی</a> است</p>';
main.insertAdjacentElement("beforeend", text3);
//
