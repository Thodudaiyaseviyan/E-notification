// Function to handle form submission
document.getElementById("feedbackForm").addEventListener("submit", function(event) {
    // Prevent default form submission
    event.preventDefault();

    // Display success message
    alert("Feedback has been submitted successfully");

    // Optional: Reset form fields after submission
    this.reset();
});
