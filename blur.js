const imageContainerEl = document.querySelector(".container_blur");
const imgEl = document.getElementById("imgBlur");
const btnBlurEl = document.querySelector(".btnBlur");

// imgEl.style = img;
btnBlurEl.addEventListener("click", () => {
  // console.log("clicked");
  imgBlurNum = 4;
  addNewBlurImages();
});
function addNewBlurImages() {
  for (let index = 0; index < imgBlurNum; index++) {
    const newBlurImgEl = document.createElement("imgBlur");
    newBlurImgEl.src = `https://picsum.photos/200/300?blur?random=${Math.floor(
      Math.random() * 2000
    )}`;
    newBlurImgEl.style.borderRadius = " 8px";
    newBlurImgEl.style.width = " 14rem";
    newBlurImgEl.style.aspectRatio = "3/4";
    // newBlurImgEl.style.padding = " 2px";
    newBlurImgEl.style.boxShadow = " 2px 4px 8px rgba(0,0,0,0.6)";

    imageContainerEl.style.display = "grid";

    imageContainerEl.appendChild(newBlurImgEl);
  }
}
