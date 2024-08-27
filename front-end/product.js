const imgs = document.querySelectorAll(".view .imags div");
const bigImg = document.querySelector(".view .big-img");
const selectedImg = document.querySelector(".view .selected-img img");
imgs.forEach((e) => {
  e.addEventListener("click", (_) => {
    const img = e.firstElementChild.getAttribute("src");
    selectedImg.setAttribute("src", img);
  });
});
selectedImg.addEventListener("click", (_) => {
  let src = selectedImg.getAttribute("src");
  bigImg.querySelector("img").setAttribute("src", src);
  open(bigImg);
});

const left = document.querySelector(".view .big-img .left");
const right = document.querySelector(".view .big-img .right");
const exit = document.querySelector(".view .big-img .exit");

left.addEventListener("click", (_) => changeImg("left"));
right.addEventListener("click", (_) => changeImg("right"));
exit.addEventListener("click", (_) => close(bigImg));

function changeImg(direction) {
  const img = bigImg.querySelector("img");
  let src = img.getAttribute("src");
  let index = +src.slice(-5, -4);
  if (direction === "left") index = index === 1 ? 4 : index - 1;
  else index = index === 4 ? 1 : index + 1;
  src = src.slice(0, -5) + index + src.slice(-4);
  img.setAttribute("src", src);
}

