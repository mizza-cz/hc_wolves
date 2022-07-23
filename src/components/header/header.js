

headerNavOpenerClick();
function headerNavOpenerClick() {
  const bodyEl = document.querySelector("body");
  const htmlEl = document.querySelector("html");
  const menuEL = document.querySelector(".menu-collapse");
  const headerNavOpener = document.querySelector(".menu-toggle");
  const headerEl = document.querySelector(".main-header");
  if (!bodyEl || !headerNavOpener) {
    return;
  }
  headerNavOpener.addEventListener("click", function () {
    if (!this.classList.contains("is-active")) {
      bodyEl.classList.add("overflow");
      menuEL.classList.add("is-active");
      htmlEl.classList.add("overflow");
      headerEl.classList.add("is-open");
      this.classList.add("is-active");
    } else {
      menuEL.classList.remove("is-active");
      htmlEl.classList.remove("overflow");
      bodyEl.classList.remove("overflow");
      headerEl.classList.remove("is-open");
      this.classList.remove("is-active");
    }
  });
}

