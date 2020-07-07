document.addEventListener("DOMContentLoaded", (event) => {
  let shareBtn = document.querySelector(".sharebtn");
  let sharePalette = document.querySelector(".palette");

  shareBtn.addEventListener("click", function () {
    if (sharePalette.classList.contains("hidden")) {
      sharePalette.classList.remove("hidden");
    } else {
      sharePalette.classList.add("hidden");
    }
  });
});
