const divs = document.querySelector(".swiper-wrapper");
for (let i = 1; i <= 4; i++) {
  let div = document.createElement("div");
  div.classList.add("swiper-slide");
  div.innerHTML = `
    <img src="images/1 (${i}).jpg" />
    `;
  divs.appendChild(div);
}

var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 20,
    stretch: 0,
    depth: 250,
    modifier: 1,
    slideShadows: true,
  },
  loop: true,
});