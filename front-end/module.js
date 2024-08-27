function close(element) {
  let op = 1;
  let id = setInterval(() => {
    op -= 0.1;
    element.style.opacity = op;
    if (op <= 0) {
      element.style.display = "none";
      clearInterval(id);
    }
  }, 20);
}
function open(element) {
  element.style.display = "flex";
  let op = 0;
  let id = setInterval(() => {
    op += 0.1;
    element.style.opacity = op;
    if (op >= 1) clearInterval(id);
  }, 20);
}

const links = document.querySelectorAll(".parent-menu");
links.forEach((ele) => {
  ele.addEventListener("mouseover", (_) => {
    ele.querySelector(".menu").style.display = "flex";
  });
  ele.addEventListener("mouseout", (_) => {
    ele.querySelector(".menu").style.display = "none";
  });
});

function notification(parent, not) {
  const notEle = parent.querySelector(".not");
  if (notEle === null) {
    const div = document.createElement("div");
    div.classList.add("not");
    div.textContent = not;
    parent.appendChild(div);
  } else {
    notEle.textContent = "+" + (+notEle.textContent.match(/\d+/)[0] + 1);
  }
}
