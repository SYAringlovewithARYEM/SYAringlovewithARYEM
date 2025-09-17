// Countdown Timer
const weddingDate = new Date("Dec 12, 2025 00:00:00").getTime();

const timer = setInterval(function() {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;

  if (distance < 0) {
    clearInterval(timer);
    document.getElementById("timer").innerHTML = "The Wedding Has Started!";
  }
}, 1000);

// RSVP Form
const form = document.getElementById("rsvp-form");
const message = document.getElementById("form-message");

form.addEventListener("submit", function(e) {
  e.preventDefault();
  message.innerText = "Thank you for your response ♥";
  form.reset();
});

// Music Toggle
const music = document.getElementById("bg-music");
const toggleBtn = document.getElementById("music-toggle");

toggleBtn.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    toggleBtn.textContent = "⏸ Pause Music";
  } else {
    music.pause();
    toggleBtn.textContent = "▶ Play Music";
  }
});
