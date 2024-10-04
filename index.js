// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const roles = ["Python Developer", "Desktop App Developer", "Data Analyst"];
    let currentRoleIndex = 0;

    const roleElement = document.getElementById("role"); // Target the correct element by its id

    function changeRole() {
        roleElement.textContent = roles[currentRoleIndex]; // Update the text content
        currentRoleIndex = (currentRoleIndex + 1) % roles.length; // Cycle through the roles
    }

    // Change role every 2 seconds
    setInterval(changeRole, 5000);
});


// Function to load the content dynamically
function handleWorkClick(event, url) {
    // Check if Ctrl key is pressed
    if (event.ctrlKey || event.metaKey) {
        // Open the URL in a new tab
        window.open(url, '_blank');
    } else {
        // Load the content dynamically
        loadWork(url);
    }
}

function loadWork(url) {
// Fetch the content of the HTML file
fetch(url)
    .then(response => response.text())
    .then(data => {
        // Display the content in the "work-content" div
        document.getElementById('work-content').innerHTML = data;

        // Hide the work section and display the dynamic content section
        document.getElementById('work').style.display = 'none';
        document.getElementById('dynamic-content').style.display = 'block';
    })
    .catch(error => console.error('Error loading work:', error));
}

// Function to close the loaded work and return to the main section
function closeWork() {
// Hide the dynamic content and show the work section again
document.getElementById('dynamic-content').style.display = 'none';
document.getElementById('work').style.display = 'block';
}


