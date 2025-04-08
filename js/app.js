const images = [
  "https://via.placeholder.com/600x200?text=Slide+1",
  "https://via.placeholder.com/600x200?text=Slide+2",
  "https://via.placeholder.com/600x200?text=Slide+3"
];

let currentIndex = 0;
const imgElement = document.getElementById("carousel-image");

function showImage(index) {
  imgElement.src = images[index];
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
}
