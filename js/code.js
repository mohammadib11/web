const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});
AOS.init({
	duration: 1000, // Animation duration in milliseconds
	once: true, // Animation happens only once
});
document.getElementById("year").textContent = new Date().getFullYear();
// Select all topic links and the video placeholder div
const topics = document.querySelectorAll(".sidebar ul li a");
const videoPlaceholder = document.querySelector(".video-placeholder");

// Add click event listener to each topic link
topics.forEach(topic => {
  topic.addEventListener("click", event => {
    event.preventDefault(); // Prevent the default link behavior

    // Get the video URL from the data-video attribute
    const videoUrl = topic.getAttribute("data-video");

    // Update the video-placeholder content with the new iframe
    videoPlaceholder.innerHTML = `
      <iframe 
        width="100%" 
        height="100%" 
        src="${videoUrl}" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowfullscreen>
      </iframe>
    `;
  });
});

function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('open');
  }


