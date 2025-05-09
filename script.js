function submitForm(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  alert("Thank you, " + name + "! Your message has been sent.");
}
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) {
      slide.classList.add("active");
    }
  });
}

setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}, 4000); // Change slide every 4 seconds
