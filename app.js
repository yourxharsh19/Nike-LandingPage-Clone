const wrapper = document.querySelector(".sliderWrapper");
const menuIcon = document.querySelector(".menuIcon");
const navBottom = document.querySelector(".navBottom");
const menuItems = document.querySelectorAll(".menuItem");

menuIcon.addEventListener("click", () => {
    navBottom.classList.toggle("active");
});

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    if (window.innerWidth <= 600) {
        navBottom.classList.remove("active");
    }
    wrapper.style.transform = `translateX(${-100 * index}vw)`;
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});
close.addEventListener("click", () => {
  payment.style.display = "none";
});
