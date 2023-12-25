const navBtn = document.querySelector(".nav-icon-btn");
const navIcon = document.querySelector(".nav-icon");
const nav = document.querySelector(".header__top-row");

navBtn.onclick = function () {
  navIcon.classList.toggle("nav-icon--active");
  nav.classList.toggle("header__top-row--mobile");
  document.body.classList.toggle(".no-scroll");
};

//phone mask
mask("[data-tel-input]");

//удаляем +, если ничего не введенено, чтобы показать placeholder
const phoneInputs = document.querySelectorAll("[data-tel-input]");
phoneInputs.forEach((input) => {
  input.addEventListener("input", () => {
    if (input.value == "+") input.value = "";
  });
  input.addEventListener("blur", () => {
    if (input.value == "+") input.value = "";
  });
});

//map yandex
initMap();

async function initMap() {
  await ymaps3.ready;

  const { YMap, YMapDefaultSchemeLayer } = ymaps3;

  const map = new YMap(document.getElementById("map"), {
    location: {
      center: [30.338928, 59.943543],
      zoom: 15,
    },
  });

  map.addChild(new YMapDefaultSchemeLayer());

  const markerElement = document.createElement("div");
  markerElement.className = "marker-class";
  markerElement.innerText = "I'm marker!";

  const marker = new YMapMarker(
    {
      source: "./../img/map/location-pin.svg",
      coordinates: [30.338928, 59.943543],
      draggable: true,
      mapFollowsOnDrag: true,
    },
    markerElement
  );

  map.addChild(marker);
}
