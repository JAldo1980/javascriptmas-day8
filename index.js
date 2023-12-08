const images = [
  "images/images-1.jpg",
  "images/images-2.jpg",
  "images/images-3.jpg",
  "images/images-4.jpg",
  "images/images-5.jpg",
  "images/images-6.jpg",
  "images/images-7.jpg",
  "images/images-8.jpg",
  "images/images-9.jpg",
  "images/images-10.jpg",
  "images/images-11.jpg",
  "images/images-12.jpg",
  "images/images-13.jpg",
  "images/images-14.jpg",
  "images/images-15.jpg",
  "images/images-16.jpg",
  "images/images-17.jpg",
  "images/images-18.jpg",
  "images/images-19.jpg",
];

const imageContainer = document.getElementById("image-container");
const sliderImage = document.getElementById("slider-image");

let currentImageIndex = 0;

function changeImage() {
  sliderImage.src = images[currentImageIndex];

  currentImageIndex = (currentImageIndex + 1) % images.length;
}

changeImage();

setInterval(changeImage, 6000);
