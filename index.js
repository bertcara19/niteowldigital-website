document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".collage-image");
    let currentIndex = 0;
  
    function fadeImages() {
      images.forEach((img, index) => {
        img.classList.remove("active");
        if (index === currentIndex) {
          img.classList.add("active");
        }
      });
      currentIndex = (currentIndex + 1) % images.length;
    }
  
    setInterval(fadeImages, 2000); // Change image every 2 seconds
  
    // Wait 5 seconds after all images have been shown before restarting animation
    setTimeout(() => {
      setInterval(fadeImages, 2000);
    }, 16000 + 5000);
  });
  