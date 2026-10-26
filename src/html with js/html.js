//                       Imports                       //
import "./style.css";
import { initSwiper_3 } from "../swiper.js";
//                     Imports End                     //
//                    body

const body = document.querySelector("#app");

//                  body End

//                    header

const header = document.createElement("header"),
  banner = document.createElement("div"),
  bannerTag = document.createElement("a"),
  bannerPicture = document.createElement("picture"),
  bannerDesktop = document.createElement("source"),
  bannerTablet = document.createElement("source"),
  bannerMobile = document.createElement("img"),
  categoryDiv = document.createElement("div"),
  categoryAll = document.createElement("div"),
  categoryBtnDiv = document.createElement("div"),
  headerDiv = document.createElement("div"),
  headerDivSearch = document.createElement("div"),
  headerDivLogo = document.createElement("img"),
  headerDivInput = document.createElement("div"),
  headerSearch = document.createElement("div"),
  headerInput = document.createElement("input"),
  headerDivLogin = document.createElement("div"),
  headerUl = document.createElement("ul"),
  headerUlLi1 = document.createElement("li"),
  headerUlLi2 = document.createElement("li"),
  headerUlLi2Div = document.createElement("div"),
  headerUlLi2Span = document.createElement("span"),
  headerUlli1Taga = document.createElement("a"),
  headerUlli2Taga = document.createElement("a"),
  headerUlLi3 = document.createElement("li"),
  headerUlli3Taga = document.createElement("a"),
  divSortMain = document.createElement("div"),
  divSort = document.createElement("div"),
  nav = document.createElement("nav"),
  divNav1 = document.createElement("div"),
  spanNav1 = document.createElement("span"),
  divNav2 = document.createElement("div"),
  ulNav = document.createElement("ul"),
  navLi1 = document.createElement("li"),
  spanLi1 = document.createElement("span"),
  navLi2 = document.createElement("li"),
  spanLi2 = document.createElement("span"),
  navLi3 = document.createElement("li"),
  spanLi3 = document.createElement("span"),
  navLi4 = document.createElement("li"),
  spanLi4 = document.createElement("span"),
  navLi5 = document.createElement("li"),
  spanLi5 = document.createElement("span"),
  divNav3 = document.createElement("div"),
  spanNav3 = document.createElement("span"),
  divLocation = document.createElement("div"),
  divLocationBtn = document.createElement("div");

header.className = "header";
bannerPicture.className = "banner";
categoryDiv.className = "categoryDiv";
categoryAll.className = "categoryAll";
categoryBtnDiv.className = "categoryBtnDiv";
headerDiv.className = "headerDiv";
headerDivSearch.className = "headerDivSearch";
headerDivLogin.className = "headerDivLogin";
headerDivLogo.className = "headerDivLogo";
headerSearch.className = "headerSearch";
headerDivInput.className = "headerDivInput";
headerUl.className = "headerUl";
headerUlLi1.className = "headerUlLi1";
headerUlLi2.className = "headerUlLi2";
headerUlLi2Div.className = "headerUlLi2Div";
headerUlLi2Span.className = "headerUlLi2Span";
headerUlLi3.className = "headerUlLi3";
headerUlli3Taga.className = "headerUlli3Taga";
divSortMain.className = "divSortMain";
divSort.className = "divSort";
divLocation.className = "divLocation";
divLocationBtn.className = "divLocationBtn";
divNav1.className = "divNav1";
divNav2.className = "divNav2";
divNav3.className = "divNav3";

bannerTag.setAttribute("target", "_blank");
bannerTag.href =
  "https://www.digikala.com/landing/digital-useful/?&promo_name=%D8%AF%DB%8C%D8%AC%DB%8C%D8%AA%D8%A7%D9%84%DB%8C%E2%80%8C%D9%87%D8%A7%DB%8C+%DA%A9%D8%A7%D8%B1%D8%A8%D8%B1%D8%AF%DB%8C&promo_position=all_mega_menu_top&promo_creative=207816&bCode=207816";
bannerMobile.src = "./Pictures/banner/mobile.webp";
bannerMobile.classList.add("w-full", "h-9", "lg:h-15", "object-cover");
bannerTablet.media = "(min-width: 768px)";
bannerTablet.srcset = "./Pictures/banner/tablet.webp";
bannerDesktop.media = "(min-width: 1024px)";
bannerDesktop.srcset = "./Pictures/banner/desktop.webp";

headerDivLogo.src = "./Pictures/Logo/Logo.svg";

headerInput.setAttribute("placeholder", "جستوجو");
headerInput.type = "text";

headerUlli1Taga.href = "#";
headerUlli2Taga.href = "./login.html";

headerSearch.innerHTML =
  '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from Material Design Icons by Pictogrammers - https://github.com/Templarian/MaterialDesign/blob/master/LICENSE --><path fill="#808080" d="M9.5 3A6.5 6.5 0 0 1 16 9.5c0 1.61-.59 3.09-1.56 4.23l.27.27h.79l5 5l-1.5 1.5l-5-5v-.79l-.27-.27A6.52 6.52 0 0 1 9.5 16A6.5 6.5 0 0 1 3 9.5A6.5 6.5 0 0 1 9.5 3m0 2C7 5 5 7 5 9.5S7 14 9.5 14S14 12 14 9.5S12 5 9.5 5"/></svg>';

headerUlli1Taga.innerHTML =
  '<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"><!-- Icon from Material Design Icons by Pictogrammers - https://github.com/Templarian/MaterialDesign/blob/master/LICENSE --><path fill="#808080" d="M21 19v1H3v-1l2-2v-6c0-3.1 2.03-5.83 5-6.71V4a2 2 0 0 1 2-2a2 2 0 0 1 2 2v.29c2.97.88 5 3.61 5 6.71v6zm-7 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2"/></svg>';

headerUlLi2Div.innerHTML =
  '<svg  version="1.1" id="_x32_" class="svgLogin" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css"> .st0{fill:#808080;} </style> <g> <path class="st0" d="M155.81,0v173.889h33.417V33.417h235.592l-74.87,50.656c-8.469,5.727-13.535,15.289-13.535,25.503v286.24 H189.227V282.079H155.81v147.154h180.604v70.93c0,4.382,2.423,8.404,6.29,10.451c3.867,2.056,8.558,1.811,12.189-0.644 l119.318-80.736V0H155.81z"></path> <path class="st0" d="M228.657,290.4c0,1.844,1.068,3.524,2.75,4.3c1.664,0.775,3.638,0.514,5.042-0.685l78.044-66.035 l-78.044-66.034c-1.404-1.2-3.378-1.46-5.042-0.686c-1.681,0.775-2.75,2.456-2.75,4.3v33.392H37.79v58.064h190.868V290.4z"></path> </g> </g></svg> ';

headerUlLi2Span.textContent = "ورود | ثبت‌نام";

headerUlli3Taga.innerHTML =
  '<svg fill="#808080" class="svgCartOff" viewBox="0 0 512 512" enable-background="new 0 0 512 512" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Layer_1"></g> <g id="Layer_2"> <g> <path d="M423.9,232.9c0-12.8-10.4-23.2-23.2-23.2h-20.1c-0.5-1.1-1-2.2-1.7-3.2l-45.8-71.3c-3.3-5.1-8.4-8.7-14.3-10 c-6-1.3-12-0.2-17.2,3.1c-10.6,6.8-13.6,20.9-6.8,31.5l32,49.8H185.3l32-49.8c2.4-3.7,3.6-7.9,3.6-12.3c0-7.8-3.9-15-10.5-19.2 c-5.1-3.3-11.2-4.4-17.2-3.1c-5.9,1.3-11,4.8-14.3,10l-45.8,71.3c-0.7,1-1.2,2.1-1.7,3.2h-20.1c-12.8,0-23.2,10.4-23.2,23.2v1.5 c0,12.8,10.4,23.2,23.2,23.2h2.2l38.1,124.3c1,3.2,3.9,5.3,7.2,5.3h194.2c3.3,0,6.2-2.2,7.2-5.3l38.1-124.3h2.2 c12.8,0,23.2-10.4,23.2-23.2V232.9z M307.3,151.8c-2.3-3.6-1.3-8.4,2.3-10.8c1.8-1.1,3.8-1.5,5.9-1.1c2,0.4,3.8,1.6,4.9,3.4 l42.6,66.3h-18.5L307.3,151.8z M191.6,143.3c1.1-1.8,2.9-3,4.9-3.4c2-0.4,4.1-0.1,5.9,1.1c2.2,1.4,3.6,3.9,3.6,6.6 c0,1.5-0.4,2.9-1.2,4.2l-37.2,57.9h-18.5L191.6,143.3z M347.6,372.2H164.4l-35.2-114.6h253.5L347.6,372.2z M408.9,234.4 c0,4.5-3.7,8.2-8.2,8.2h-7.7c0,0-0.1,0-0.1,0H119.2c0,0-0.1,0-0.1,0h-7.7c-4.5,0-8.2-3.7-8.2-8.2v-1.5c0-4.5,3.7-8.2,8.2-8.2H137 c0,0,0.1,0,0.1,0h34.4c0,0,0,0,0,0c0,0,0,0,0,0h168.8c0,0,0,0,0,0c0,0,0,0,0,0h34.4c0,0,0,0,0.1,0h25.7c4.5,0,8.2,3.7,8.2,8.2 V234.4z"></path> <path d="M208.9,342.8c4.1,0,7.5-3.4,7.5-7.5v-40.8c0-4.1-3.4-7.5-7.5-7.5s-7.5,3.4-7.5,7.5v40.8 C201.4,339.5,204.8,342.8,208.9,342.8z"></path> <path d="M256,342.8c4.1,0,7.5-3.4,7.5-7.5v-40.8c0-4.1-3.4-7.5-7.5-7.5s-7.5,3.4-7.5,7.5v40.8C248.5,339.5,251.9,342.8,256,342.8z "></path> <path d="M303.1,342.8c4.1,0,7.5-3.4,7.5-7.5v-40.8c0-4.1-3.4-7.5-7.5-7.5s-7.5,3.4-7.5,7.5v40.8 C295.6,339.5,298.9,342.8,303.1,342.8z"></path> </g> </g> </g></svg>';

headerUlli3Taga.href = "https://www.digikala.com/checkout/cart/";

divLocationBtn.innerHTML =
  '<svg viewBox="0 0 24 24" class="locationSvg" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z" stroke="#A56C3A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="#A56C3A" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>  <span>انتخاب آدرس</span> <svg class="chevron" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M17 9.5L12 14.5L7 9.5" stroke="#A56C3A" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>';

spanNav1.innerHTML =
  '<svg viewBox="0 0 24 24" class="hamburgerMenu" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 7L7 7M20 7L11 7" stroke="#000000" stroke-width="1.5" stroke-linecap="round"></path> <path d="M20 17H17M4 17L13 17" stroke="#000000" stroke-width="1.5" stroke-linecap="round"></path> <path d="M4 12H7L20 12" stroke="#000000" stroke-width="1.5" stroke-linecap="round"></path> </g></svg> <span>دسته‌بندی کالا‌ها</span>';

spanLi1.innerHTML =
  '<svg xmlns="http://www.w3.org/2000/svg" class="percent" viewBox="0 0 24 24"><!-- Icon from Material Design Icons by Pictogrammers - https://github.com/Templarian/MaterialDesign/blob/master/LICENSE --><path fill="currentColor" d="M17 15.22c0 .98-.8 1.78-1.78 1.78s-1.77-.8-1.77-1.78s.79-1.77 1.77-1.77s1.78.79 1.78 1.77M8.83 10.6c.98 0 1.77-.79 1.77-1.77c0-.99-.79-1.78-1.77-1.78c-.99 0-1.78.79-1.78 1.78c0 .98.79 1.77 1.78 1.77M7 15.53l1.5 1.5l8.53-8.53l-1.5-1.5zM22 12c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-2 0c0-4.41-3.59-8-8-8s-8 3.59-8 8s3.59 8 8 8s8-3.59 8-8"/></svg> <span>شگفت‌انگیز‌ها</span> ';

spanLi2.innerHTML =
  '<svg xmlns="http://www.w3.org/2000/svg" class="basket" viewBox="0 0 24 24"><!-- Icon from Material Design Icons by Pictogrammers - https://github.com/Templarian/MaterialDesign/blob/master/LICENSE --><path fill="currentColor" d="M5.5 21c-.78 0-1.46-.45-1.79-1.1L1.1 10.44L1 10a1 1 0 0 1 1-1h4.58l4.6-6.57a.997.997 0 0 1 1.65.01L17.42 9H22a1 1 0 0 1 1 1l-.04.29l-2.67 9.61c-.33.65-1.01 1.1-1.79 1.1zM12 4.74L9 9h6zM12 13a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2"/></svg> <span>سوپرمارکت</span>';

spanLi3.innerHTML =
  '<svg xmlns="http://www.w3.org/2000/svg" class="gold" viewBox="0 0 24 24"><!-- Icon from Material Design Icons by Pictogrammers - https://github.com/Templarian/MaterialDesign/blob/master/LICENSE --><path fill="currentColor" d="m1 22l1.5-5h7l1.5 5zm12 0l1.5-5h7l1.5 5zm-7-7l1.5-5h7l1.5 5zm17-8.95l-3.86 1.09L18.05 11l-1.09-3.86l-3.86-1.09l3.86-1.09l1.09-3.86l1.09 3.86z"/></svg> <span>طلاونقره دیجیتال</span>';

spanLi4.innerHTML =
  '<svg xmlns="http://www.w3.org/2000/svg" class="fire" viewBox="0 0 24 24"><!-- Icon from Material Design Icons by Pictogrammers - https://github.com/Templarian/MaterialDesign/blob/master/LICENSE --><path fill="currentColor" d="M17.66 11.2c-.23-.3-.51-.56-.77-.82c-.67-.6-1.43-1.03-2.07-1.66C13.33 7.26 13 4.85 13.95 3c-.95.23-1.78.75-2.49 1.32c-2.59 2.08-3.61 5.75-2.39 8.9c.04.1.08.2.08.33c0 .22-.15.42-.35.5c-.23.1-.47.04-.66-.12a.6.6 0 0 1-.14-.17c-1.13-1.43-1.31-3.48-.55-5.12C5.78 10 4.87 12.3 5 14.47c.06.5.12 1 .29 1.5c.14.6.41 1.2.71 1.73c1.08 1.73 2.95 2.97 4.96 3.22c2.14.27 4.43-.12 6.07-1.6c1.83-1.66 2.47-4.32 1.53-6.6l-.13-.26c-.21-.46-.77-1.26-.77-1.26m-3.16 6.3c-.28.24-.74.5-1.1.6c-1.12.4-2.24-.16-2.9-.82c1.19-.28 1.9-1.16 2.11-2.05c.17-.8-.15-1.46-.28-2.23c-.12-.74-.1-1.37.17-2.06c.19.38.39.76.63 1.06c.77 1 1.98 1.44 2.24 2.8c.04.14.06.28.06.43c.03.82-.33 1.72-.93 2.27"/></svg> <span>پرفروش‌ترین‌ها</span>';

spanLi5.innerHTML =
  '<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="dress" aria-hidden="true" role="img" class="iconify iconify--emojione-monotone" preserveAspectRatio="xMidYMid meet" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M59.462 28.726l-.27.347C51.83 18.277 51.13 6.763 51.13 6.763l-7.912-2.324L40.821 2H22.857l-2.703 2.578l-7.438 2.185s-.691 11.335-7.895 22.058l-.265-.342L2 31.699l10.939 14.264l1.298-4.962l-.341-.441c1.463-4.962 4.003-14.562 4.614-23.3l.915 4.671l-.856-.109l1.369 6.135l.677.084c.262.628.534 1.249.823 1.859c.183.383.287.755.333 1.125l-1.169 3.527l.434-.021l-.806 2.297l.472-.063c-2.412 6.018-6.571 14.244-6.099 22.998c0 0 7.915 2.237 17.318 2.237c9.006 0 17.32-2.237 17.32-2.237c.475-8.786-3.99-17.338-6.4-23.368v-7.641a2.64 2.64 0 0 0 .691-.488c.202-.198.742-.726.644-1.43c-.06-.429-.313-.692-.577-.883c.966-1.792 1.677-4.132 1.677-4.132l-.856.109l.915-4.671c.627 8.922 3.261 18.742 4.707 23.605l-.346.445l1.382 4.884L62 31.951l-2.538-3.225M12.526 43.907L3.171 31.71l1.378-1.735l8.684 11.235l-.707 2.697m10.706-21.581l-2.418-.239c5.956-9.888 19.938-19.01 19.967-19.03l1.292 1.185c-7.174 5.254-14.039 11.707-18.841 18.084M39.344 2.931l-2.919 2.145H26.304l-2.277-2.145h15.317m-16.498.158l7.458 7.025l-1.531 1.405l-7.497-7.063l1.57-1.367m-.13 28.438l16.199-.771v1.983l-16.561.797c.21-.679.354-1.341.362-2.009m16.187-3.074l.012.933l-17.645-2.201a41.888 41.888 0 0 1-1.107-3.117l16.86 2.204c-1.707 1.349.85 2.293 1.88 2.181m-2.875 1.51l-13.406.637a4.576 4.576 0 0 0-.354-1.102c-.207-.436-.401-.88-.593-1.325l14.353 1.79m2.887 3.711v1.87c-2.288-.337-3.642-.322-5.758-.297c-.659.009-1.395.018-2.259.018c-2.092 0-5.959.062-9.316.45l.249-.678c.07-.188.137-.37.203-.554l16.881-.809M21.954 60.222V36.61a65.696 65.696 0 0 1 3.738-.286v24.334l-3.738-.436m20.94-32.624c-.267.262-.613.415-.972.51v21.19H40.54V28.231c-.305-.018-.518-.052-.518-.052s-.395-1.844.552-2.769c.272-.267.465-.372.615-.372c.373 0 .492.64.948 1.069c.641.606 1.703.565.757 1.491m.045-2.48c-.828-.754-1.42-1.136-1.763-1.136c-.34 0-.679.123-.997.309c-2.02-.958-2.125 1.178-2.125 1.178l-18.188-2.377l-.12-.282c7.736.917 16.518 1.062 24.235.117c-.138.336-.859 1.769-1.042 2.191m7.77 16.393l8.758-11.285l1.365 1.732l-9.369 12.217l-.754-2.664" fill="#000000"></path></g></svg> <span>دیجی‌استایل</span>';

categoryAll.innerHTML =
  ' <a href="https://www.digikala.com/superapp/units/?ff_ctx=JTdCJTIyZ2xvYmFsX3VzZXJfaWQlMjIlM0ElMjJlZDk3MGMzMS0zZWJlLTRhYTItOTUzOC1kYWQ5NzY0YTdiODglMjIlN0Q%253D"><img src="./Pictures/Category/category.svg" alt=""></a>';

categoryBtnDiv.innerHTML =
  ' <a href=""><img class="digikala" src="./Pictures/Category/digikala.webp" alt=""></a> <a href=""><img src="./Pictures/Category/supermarket.webp" alt=""></a> <a href=""><img src="./Pictures/Category/gold.webp" alt=""></a> <a href=""><img src="./Pictures/Category/bazar.gif" alt=""></a> <a href=""><img src="./Pictures/Category/style.webp" alt=""></a> <a href=""><img src="./Pictures/Category/value.webp" alt=""></a> <a href=""><img src="./Pictures/Category/gishe.webp" alt=""></a> <a href=""><img src="./Pictures/Category/medicine.webp" alt=""></a> <a href=""><img src="./Pictures/Category/hypermarket.webp" alt=""></a>';

spanNav3.innerHTML = "<span>در دیجی‌کالا بفروشید!</span>";

header.insertAdjacentElement("beforeend", banner);
banner.insertAdjacentElement("beforeend", bannerTag);
bannerTag.insertAdjacentElement("beforeend", bannerPicture);
bannerPicture.insertAdjacentElement("beforeend", bannerDesktop);
bannerPicture.insertAdjacentElement("beforeend", bannerTablet);
bannerPicture.insertAdjacentElement("beforeend", bannerMobile);
header.insertAdjacentElement("beforeend", categoryDiv);
categoryDiv.insertAdjacentElement("beforeend", categoryAll);
categoryDiv.insertAdjacentElement("beforeend", categoryBtnDiv);
header.insertAdjacentElement("beforeend", headerDiv);
headerDiv.insertAdjacentElement("beforeend", headerDivSearch);
headerDivSearch.insertAdjacentElement("beforeend", headerDivLogo);
headerDivSearch.insertAdjacentElement("beforeend", headerDivInput);
headerDivInput.insertAdjacentElement("beforeend", headerSearch);
headerDivInput.insertAdjacentElement("beforeend", headerInput);
headerDiv.insertAdjacentElement("beforeend", headerDivLogin);
headerDivLogin.insertAdjacentElement("beforeend", headerUl);
headerUl.insertAdjacentElement("beforeend", headerUlLi1);
headerUlLi1.insertAdjacentElement("beforeend", headerUlli1Taga);
headerUl.insertAdjacentElement("beforeend", headerUlLi2);
headerUlLi2.insertAdjacentElement("beforeend", headerUlli2Taga);
headerUlli2Taga.insertAdjacentElement("beforeend", headerUlLi2Div);
headerUlLi2Div.insertAdjacentElement("beforeend", headerUlLi2Span);
headerUl.insertAdjacentElement("beforeend", headerUlLi3);
headerUlLi3.insertAdjacentElement("beforeend", headerUlli3Taga);
header.insertAdjacentElement("beforeend", divSortMain);
divSortMain.insertAdjacentElement("beforeend", divSort);
divSort.insertAdjacentElement("beforeend", nav);
nav.insertAdjacentElement("beforeend", divNav1);
divNav1.insertAdjacentElement("beforeend", spanNav1);
nav.insertAdjacentElement("beforeend", divNav2);
divNav2.insertAdjacentElement("beforeend", ulNav);
ulNav.insertAdjacentElement("beforeend", navLi1);
navLi1.insertAdjacentElement("beforeend", spanLi1);
ulNav.insertAdjacentElement("beforeend", navLi2);
navLi2.insertAdjacentElement("beforeend", spanLi2);
ulNav.insertAdjacentElement("beforeend", navLi3);
navLi3.insertAdjacentElement("beforeend", spanLi3);
ulNav.insertAdjacentElement("beforeend", navLi4);
navLi4.insertAdjacentElement("beforeend", spanLi4);
ulNav.insertAdjacentElement("beforeend", navLi5);
navLi5.insertAdjacentElement("beforeend", spanLi5);
nav.insertAdjacentElement("beforeend", divNav3);
divNav3.insertAdjacentElement("beforeend", spanNav3);
divSortMain.insertAdjacentElement("beforeend", divLocation);
divLocation.insertAdjacentElement("beforeend", divLocationBtn);

//                  header End
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;

  // ۱. اگر کاربر به سمت پایین اسکرول کرد و از ۱۰۰ پیکسل رد شد -> منو پنهان شود
  if (currentScrollY > 300 && currentScrollY > lastScrollY) {
    divSortMain.classList.add("sort-hidden");
  }
  // ۲. فقط و فقط زمانی که کاربر کاملاً برگشت بالای صفحه (نزدیک صفر) -> منو برگردد
  else if (currentScrollY <= 1000) {
    divSortMain.classList.remove("sort-hidden");
  }

  lastScrollY = currentScrollY;
});
let lastScrollYBanner = window.scrollY;

window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;

  // گرفتن عناصر بنر و منو (اگر قبلاً تعریف کرده‌اید)
  const bannerEl = document.querySelector(".banner");

  // ۱. اگر کاربر به سمت پایین اسکرول کرد و از ۱۰۰ پیکسل رد شد -> هر دو پنهان شوند
  if (currentScrollY > 300 && currentScrollY > lastScrollYBanner) {
    if (bannerEl) bannerEl.classList.add("banner-hidden");
    divSortMain.classList.add("sort-hidden");
  }
  // ۲. فقط وقتی کاربر کاملاً برگشت بالای صفحه -> هر دو برگردند
  else if (currentScrollY <= 500) {
    if (bannerEl) bannerEl.classList.remove("banner-hidden");
    divSortMain.classList.remove("sort-hidden");
  }

  lastScrollYBanner = currentScrollY;
});
//                    dock

const dockBody = document.createElement("div");
dockBody.className = "dockBody";
body.insertAdjacentElement("beforeend", dockBody);

const dockUl = document.createElement("ul"),
  dockLi1 = document.createElement("li"),
  dockLi2 = document.createElement("li"),
  dockLi3 = document.createElement("li"),
  dockLi4 = document.createElement("li"),
  dockLi5 = document.createElement("li");

dockUl.className = "dockUl";
dockLi1.className = "dockLi1";
dockLi2.className = "dockLi2";
dockLi3.className = "dockLi3";
dockLi4.className = "dockLi4";
dockLi5.className = "dockLi5";

dockLi1.innerHTML =
  '<a href="#app" href ="#" "><svg xmlns="http://www.w3.org/2000/svg" class = "home" viewBox="0 0 24 24"><path fill="currentColor" d="M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8z"/></svg><span>خانه</span></a>';
dockLi2.innerHTML =
  '<a href=""><svg class = "category" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="0.4" d="M18.6695 2H16.7695C14.5895 2 13.4395 3.15 13.4395 5.33V7.23C13.4395 9.41 14.5895 10.56 16.7695 10.56H18.6695C20.8495 10.56 21.9995 9.41 21.9995 7.23V5.33C21.9995 3.15 20.8495 2 18.6695 2Z" fill="#292D32"></path> <path opacity="0.4" d="M7.24 13.4302H5.34C3.15 13.4302 2 14.5802 2 16.7602V18.6602C2 20.8502 3.15 22.0002 5.33 22.0002H7.23C9.41 22.0002 10.56 20.8502 10.56 18.6702V16.7702C10.57 14.5802 9.42 13.4302 7.24 13.4302Z" fill="#292D32"></path> <path d="M6.29 10.58C8.6593 10.58 10.58 8.6593 10.58 6.29C10.58 3.9207 8.6593 2 6.29 2C3.9207 2 2 3.9207 2 6.29C2 8.6593 3.9207 10.58 6.29 10.58Z" fill="#292D32"></path> <path d="M17.7099 21.9999C20.0792 21.9999 21.9999 20.0792 21.9999 17.7099C21.9999 15.3406 20.0792 13.4199 17.7099 13.4199C15.3406 13.4199 13.4199 15.3406 13.4199 17.7099C13.4199 20.0792 15.3406 21.9999 17.7099 21.9999Z" fill="#292D32"></path> </g></svg><span>دسته‌بندی</span></a>';
dockLi3.innerHTML =
  '<a href=""><svg xmlns="http://www.w3.org/2000/svg" class = "shop" viewBox="0 0 24 24"><!-- Icon from Material Design Icons by Pictogrammers - https://github.com/Templarian/MaterialDesign/blob/master/LICENSE --><path fill="currentColor" d="M19 20c0 1.11-.89 2-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2a2 2 0 0 1 2 2M7 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2c1.11 0 2-.89 2-2s-.89-2-2-2m.2-3.37l-.03.12c0 .14.11.25.25.25H19v2H7a2 2 0 0 1-2-2c0-.35.09-.68.24-.96l1.36-2.45L3 4H1V2h3.27l.94 2H20c.55 0 1 .45 1 1c0 .17-.05.34-.12.5l-3.58 6.47c-.34.61-1 1.03-1.75 1.03H8.1zM8.5 11H10V9H7.56zM11 9v2h3V9zm3-1V6h-3v2zm3.11 1H15v2h1zm1.67-3H15v2h2.67zM6.14 6l.94 2H10V6z"/></svg><span>سبد‌خرید</span></a>';
dockLi4.innerHTML =
  '<a href=""><svg xmlns="http://www.w3.org/2000/svg" class = "q-a" viewBox="0 0 24 24"><!-- Icon from Material Design Icons by Pictogrammers - https://github.com/Templarian/MaterialDesign/blob/master/LICENSE --><path fill="currentColor" d="M3.5 19A1.5 1.5 0 0 1 5 20.5A1.5 1.5 0 0 1 3.5 22A1.5 1.5 0 0 1 2 20.5A1.5 1.5 0 0 1 3.5 19m5-3a2.5 2.5 0 0 1 2.5 2.5A2.5 2.5 0 0 1 8.5 21A2.5 2.5 0 0 1 6 18.5A2.5 2.5 0 0 1 8.5 16m6-1c-1.19 0-2.27-.5-3-1.35c-.73.85-1.81 1.35-3 1.35c-1.96 0-3.59-1.41-3.93-3.26A4.02 4.02 0 0 1 2 8a4 4 0 0 1 4-4l.77.07C7.5 3.41 8.45 3 9.5 3c1.19 0 2.27.5 3 1.35c.73-.85 1.81-1.35 3-1.35c1.96 0 3.59 1.41 3.93 3.26A4.02 4.02 0 0 1 22 10a4 4 0 0 1-4 4l-.77-.07c-.73.66-1.68 1.07-2.73 1.07M6 6a2 2 0 0 0-2 2a2 2 0 0 0 2 2c.33 0 .64-.08.92-.22A2 2 0 0 0 6.5 11a2 2 0 0 0 2 2c.6 0 1.14-.27 1.5-.69l1.47-1.68L13 12.34c.38.4.91.66 1.5.66c1 0 1.83-.74 2-1.7c.34.43.89.7 1.5.7a2 2 0 0 0 2-2a2 2 0 0 0-2-2c-.33 0-.64.08-.92.22A2 2 0 0 0 17.5 7a2 2 0 0 0-2-2c-.59 0-1.12.26-1.5.66l-1.53 1.71L11 5.69c-.36-.42-.9-.69-1.5-.69c-1 0-1.83.74-2 1.7C7.16 6.27 6.61 6 6 6m2.5 11.5a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1"/></svg><span>پرس‌وجو</span></a>';
dockLi5.innerHTML =
  '<a href="./login.html"><svg xmlns="http://www.w3.org/2000/svg" class = "mydigikala" viewBox="0 0 24 24"><!-- Icon from Material Design Icons by Pictogrammers - https://github.com/Templarian/MaterialDesign/blob/master/LICENSE --><path fill="currentColor" d="M12 19.2c-2.5 0-4.71-1.28-6-3.2c.03-2 4-3.1 6-3.1s5.97 1.1 6 3.1a7.23 7.23 0 0 1-6 3.2M12 5a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-3A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10c0-5.53-4.5-10-10-10"/></svg><span>دیجیکالای‌من</span></a>';

dockBody.insertAdjacentElement("beforeend", dockUl);
dockUl.insertAdjacentElement("beforeend", dockLi1);
dockUl.insertAdjacentElement("beforeend", dockLi2);
dockUl.insertAdjacentElement("beforeend", dockLi3);
dockUl.insertAdjacentElement("beforeend", dockLi4);
dockUl.insertAdjacentElement("beforeend", dockLi5);

//                  dock End

//                  main start

const container = document.createElement("div"),
  main = document.createElement("main"),
  bodyBanner = document.createElement("div"),
  bodyCategory = document.createElement("div"),
  bodySwiper = document.createElement("div");

container.className = "container";
main.className = "main";
bodyBanner.className = "bodyBanner";
bodyCategory.className = "bodyCategory";
bodySwiper.className = "bodySwiper";

bodyBanner.innerHTML = `<div class="swiper mySwiper_3">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img
            src="./Banner/1.webp"
            class="w-full h-45 md:h-60 lg:h-100 object-cover"
            alt=""
          />
        </div>
        <div class="swiper-slide">
          <img
            src="./Banner/2.webp"
            class="w-full h-45 md:h-60 lg:h-100 object-cover"
            alt=""
          />
        </div>
        <div class="swiper-slide">
          <img
            src="./Banner/3.webp"
            class="w-full h-45 md:h-60 lg:h-100 object-cover"
            alt=""
          />
        </div>
        <div class="swiper-slide">
          <img
            src="./Banner/4.webp"
            class="w-full h-45 md:h-60 lg:h-100 object-cover"
            alt=""
          />
        </div>
        <div class="swiper-slide">
          <img
            src="./Banner/5.webp"
            class="w-full h-45 md:h-60 lg:h-100 object-cover"
            alt=""
          />
        </div>
        <div class="swiper-slide">
          <img
            src="./Banner/6.webp"
            class="w-full h-45 md:h-60 lg:h-100 object-cover"
            alt=""
          />
        </div>
        <div class="swiper-slide">
          <img
            src="./Banner/7.webp"
            class="w-full h-45 md:h-60 lg:h-100 object-cover"
            alt=""
          />
        </div>
        <div class="swiper-slide">
          <img
            src="./Banner/8.webp"
            class="w-full h-45 md:h-60 lg:h-100 object-cover"
            alt=""
          />
        </div>
        <div class="swiper-slide">
          <img
            src="./Banner/9.webp"
            class="w-full h-45 md:h-60 lg:h-100 object-cover"
            alt=""
          />
        </div>
        <div class="swiper-slide">
          <img
            src="./Banner/10.webp"
            class="w-full h-45 md:h-60 lg:h-100 object-cover"
            alt=""
          />
        </div>
        <div class="swiper-slide">
          <img
            src="./Banner/11.webp"
            class="w-full h-45 md:h-60 lg:h-100 object-cover"
            alt=""
          />
        </div>
        <div class="swiper-slide">
          <img
            src="./Banner/12.webp"
            class="w-full h-45 md:h-60 lg:h-100 object-cover"
            alt=""
          />
        </div>
        <div class="swiper-slide">
          <img
            src="./Banner/13.webp"
            class="w-full h-45 md:h-60 lg:h-100 object-cover"
            alt=""
          />
        </div>
        <div class="swiper-slide">
          <img
            src="./Banner/14.webp"
            class="w-full h-45 md:h-60 lg:h-100 object-cover"
            alt=""
          />
        </div>
      </div>

      <div class="swiper-pagination"></div>
    </div> `;
bodySwiper.innerHTML = `<div class="containerSliders">
  <div class="sliderDiv">
    
    <!-- اسلایدر محصولات معمولی -->
    <div class="sliderRegular2" id="sectionRegular">
      <div class="swiper regularSwiper mySwiper_2">
        <div class="swiper-wrapper"></div>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
      </div>
    </div>

    <!-- اسلایدر محصولات تخفیف‌دار -->
    <!-- اسلایدر محصولات تخفیف‌دار در صفحه اصلی -->
    <div class="sliderDiscount2" id="sectionDiscount">
      
      <div class="divSwiperDiscount flex flex-col md:flex-row items-center p-2 gap-3" >
        
        <!-- 🟢 باکس تایمر (باید اینجا هم باشد) -->
        <div id="discountTimerBox" class="hidden  text-white p-2.5 text-center">
          <div class="w-30 md:w-41.5 flex flex-col gap-y-3">
            <img src="./Pictures/Logo/Discount.svg" alt="" class="p-7 md:p-10">
            <img src="./Pictures/Logo/Offer.svg" alt="">
          </div>
          <div class="flex flex-col gap-y-2">
            <div style="font-size: 11px; margin-bottom: 2px;">فرصت باقی‌مانده</div>
            <!-- 🟢 باکس‌های جداگانه برای زمان -->
            <div id="timerDisplay" class="font-Estedad-Bold" style="display: flex; align-items: center; justify-content: center; gap: 4px; direction: ltr;">
              <span id="timerHours" class="bg-white p-1 text-black font-Estedad-SemiBold rounded-sm text-sm">00</span>
              <span>:</span>
              <span id="timerMinutes" class="bg-white p-1 text-black font-Estedad-SemiBold rounded-sm text-sm">00</span>
              <span>:</span>
              <span id="timerSeconds" class="bg-white p-1 text-black font-Estedad-SemiBold rounded-sm text-sm">00</span>
            </div>
          </div>
        </div>

        <!-- خود اسلایدر -->
        <div class="swiper discountSwiper mySwiper_2" style="flex: 1;">
          <div class="swiper-wrapper"></div>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
        </div>

      </div>
    </div>

    <!-- اسلایدر محصولات غیره -->
    <div class="sliderElse2" id="sectionElse">
      <div class="swiper elseSwiper mySwiper_2">
        <div class="swiper-wrapper"></div>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
      </div>
    </div>

  </div>
</div>`;

bodyCategory.innerHTML = `      <ul>
        <li>
          <a href="#">
            <img src="./Pictures/Category-2/1.webp" alt="" />
            <span>دیجی‌استایل</span>
          </a>
        </li>
        <li>
          <a href="#">
            <img src="./Pictures/Category-2/2.webp" alt="" />
            <span>حراج سرماه 10گرم طلا ببر</span>
          </a>
        </li>
        <li>
          <a href="#">
            <img src="./Pictures/Category-2/3.webp" alt="" />
            <span>طلا و نقره دیجیتال</span>
          </a>
        </li>
        <li>
          <a href="#">
            <img src="./Pictures/Category-2/4.webp" alt="" />
            <span>سوپرمارکت</span>
          </a>
        </li>
        <li>
          <a href="#">
            <img src="./Pictures/Category-2/5.webp" alt="" />
            <span>وام بانکی.اعتبار خرید</span>
          </a>
        </li>
        <li>
          <a href="#">
            <img src="./Pictures/Category-2/6.webp" alt="" />
            <span>آیفون18</span>
          </a>
        </li>
        <li>
          <a href="#">
            <img src="./Pictures/Category-2/7.webp" alt="" />
            <span>سکه‌ت رو بفروش</span>
          </a>
        </li>
        <li>
          <a href="#">
            <img src="./Pictures/Category-2/8.webp" alt="" />
            <span>موبایل با بعترین قیمت</span>
          </a>
        </li>
        <li>
          <a href="#">
            <img src="./Pictures/Category-2/9.webp" alt="" />
            <span>حراج لوازم تحریر</span>
          </a>
        </li>
        <li>
          <a href="#">
            <div>...</div>
            <span>بیشتر</span>
          </a>
        </li>
      </ul>`;

body.insertAdjacentElement("afterbegin", container);
body.insertAdjacentElement("afterbegin", bodyBanner);
body.insertAdjacentElement("afterbegin", header);
container.insertAdjacentElement("afterbegin", main);
main.insertAdjacentElement("beforeend", bodyCategory);
main.insertAdjacentElement("beforeend", bodySwiper);

initSwiper_3();
//                  main End
