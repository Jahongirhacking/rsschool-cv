const handleResize = () => {
  if (window.innerWidth < 760) {
    document.querySelector(".nav__panel").classList.add("hidden");
    document.querySelector(".nav > i.fa-bars").classList.remove("hidden");
  } else {
    document.querySelector(".nav__panel").classList.remove("hidden");
    document.querySelector(".nav > i.fa-bars").classList.add("hidden");
  }
};

window.addEventListener("resize", handleResize);
document.addEventListener("DOMContentLoaded", () => {
  handleResize();
});
