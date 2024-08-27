const bottomLinks = document.querySelectorAll("header .bottom > a");
bottomLinks.forEach((e) => {
  e.addEventListener("click", (_) => {
    bottomLinks.forEach((e) => e.classList.remove("clicked"));
    e.classList.add("clicked");
  });
});

const content = document.querySelector(".ads-offers .offers .content ");
const left = document.querySelector(".ads-offers .offers .left");
const right = document.querySelector(".ads-offers .offers .right");
let countl = false;
let countr = true;
const def = 276;
right.addEventListener("click", (_) => {
  content.scrollBy({ left: def, behavior: "smooth" });
});
left.addEventListener("click", (_) => {
  content.scrollBy({ left: -def, behavior: "smooth" });
});

content.addEventListener("scroll", (_) => {
  let scroll = content.scrollLeft;
  if (scroll > 0 && scroll < def && !countl) {
    open(left);
    countl = true;
  }
  if (scroll < def && scroll > 0 && !countr) {
    open(right);
    countr = true;
  }
  if (scroll === 0) {
    close(left);
    countl = false;
  }
  if (scroll >= def) {
    close(right);
    countr = false;
  }
});
