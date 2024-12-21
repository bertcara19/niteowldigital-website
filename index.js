document.addEventListener("DOMContentLoaded", function() {
  const video = document.getElementById("intro-video");
  const images = document.querySelectorAll(".collage-image");
  const collage = document.querySelector(".collage");
  let currentIndex = 0;
  let interval;

  function fadeImages() {
      images.forEach((img, index) => {
          img.classList.remove("active");
      });
      images[currentIndex].classList.add("active");

      setTimeout(() => {
          images[currentIndex].classList.remove("active");
          currentIndex = (currentIndex + 1) % images.length;
          images[currentIndex].classList.add("active");
      }, 1000); // Fade out after 1 second before moving to the next image
  }

  function startCollage() {
      collage.style.display = "block"; // Show the collage
      interval = setInterval(fadeImages, 2000); // Change image every 2 seconds (1 second display + 1 second fade-out)
  }

  function stopCollage() {
      clearInterval(interval); // Clear the interval
      currentIndex = 0; // Reset index
      images.forEach(img => img.classList.remove("active")); // Remove active class from all images
  }

  function playVideoAndStartCollage() {
      video.style.display = 'block'; // Show the video
      collage.style.display = 'none'; // Hide the collage

      video.play();
      video.onended = () => { // Handle the event when the video ends
          video.style.display = 'none'; // Hide the video
          startCollage(); // Start the collage transition

          // Set a timeout to stop the collage and restart the video and collage cycle after the full collage cycle is complete
          setTimeout(() => {
              stopCollage(); // Stop the current cycle
              playVideoAndStartCollage(); // Restart the video and collage cycle
          }, images.length * 2000); // Duration of one full cycle of all images
      };
  }

  playVideoAndStartCollage(); // Start the loop

  // Responsive Menu Toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const socialContainer = document.querySelector('.social-container');

  menuToggle.addEventListener('click', function() {
      socialContainer.classList.toggle('active');
  });
});
