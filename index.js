const imageContainerEl = document.querySelector(".image-container");
const imgEl = document.getElementById("img");
const btnEl = document.querySelector(".btn");

// imgEl.style = img;
btnEl.addEventListener("click", () => {
  // console.log("clicked");
  imageNum = 12;
  addNewImages();
});
function addNewImages() {
  for (let index = 0; index < imageNum; index++) {
    const newImgEl = document.createElement("img");
    newImgEl.src = `https://picsum.photos/200/300?random= ${Math.floor(
      Math.random() * 2000
    )}`;
    newImgEl.style.borderRadius = " 8px";
    newImgEl.style.width = " 14rem";
    newImgEl.style.aspectRatio = "3/4";
    newImgEl.style.padding = " 2px";
    newImgEl.style.boxShadow = " 2px 4px 8px rgba(0,0,0,0.6)";
    imageContainerEl.style.margin = "20px";

    imageContainerEl.appendChild(newImgEl);
  }
}
