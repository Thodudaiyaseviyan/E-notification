// Function to show the signup section
function showSignupSection() {
    document.getElementById("signupSection").style.display = "block";
    document.getElementById("welcomeSection").style.display = "none";
}

// Function to handle signup form submission
document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var aadhar = document.getElementById("aadhar").value;
    showWelcomeMessage(name);
});

// Function to show the welcome message
function showWelcomeMessage(name) {
    var welcomeMessage = "Welcome, " + name + ", to Government of India.";
    document.getElementById("welcomeMessage").textContent = welcomeMessage;
    document.getElementById("signupSection").style.display = "none";
    document.getElementById("welcomeSection").style.display = "block";
}

// Event listener for the sign up button
document.getElementById("signupButton").addEventListener("click", function() {
    showSignupSection();
});

// Define variables to control the sliding animation
var intervalId;
var isOpen = false;

// Function to open the panel
function openPanel() {
    document.getElementById("notificationPanel").style.right = "0";
    isOpen = true;
}

// Function to close the panel
function closePanel() {
    document.getElementById("notificationPanel").style.right = "-400px";
    isOpen = false;
}

// Function to automatically slide the panel
function autoSlidePanel() {
    intervalId = setInterval(function() {
        if (isOpen) {
            closePanel();
        } else {
            openPanel();
        }
    }, 3000); // Adjust the interval as needed (in milliseconds)
}

// Start the auto sliding when the page loads
window.onload = function() {
    autoSlidePanel();
};

// Stop the auto sliding when the page unloads (optional)
window.onunload = function() {
    clearInterval(intervalId);
};
// Function to open the Updates page
function openUpdatesPage() {
    window.location.href = "updates.html"; // Replace "updates.html" with the actual URL of your updates page
}

// Function to open the Health page
function openHealthPage() {
    window.location.href = "health.html"; // Replace "health.html" with the actual URL of your health page
}

// Function to open the Info page
function openInfoPage() {
    window.location.href = "info.html"; // Replace "info.html" with the actual URL of your info page
}

// Function to open the Feedback page
function openFeedbackPage() {
    window.location.href = "feedback.html"; // Replace "feedback.html" with the actual URL of your feedback page
}

// Function to toggle dropdown menu visibility
function toggleDropdown() {
    var dropdownContent = document.getElementById("dropdownContent");
    dropdownContent.classList.toggle("show");
  }
  
  // Function to select an area
  function selectArea(area) {
    document.getElementById("selectedArea").textContent = "Selected Area: " + area;
  }
  