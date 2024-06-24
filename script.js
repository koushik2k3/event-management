document.getElementById('eventCreationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Retrieve form data
    let eventName = document.getElementById('eventName').value;
    let eventDate = document.getElementById('eventDate').value;

    // Example: In a real application, send data to backend for storage
    console.log(`Event Name: ${eventName}, Event Date: ${eventDate}`);

    // Clear form fields (optional)
    this.reset();

    // Simulate adding new event to the list (for demo purposes)
    events.push({ name: eventName, date: eventDate });
    renderEvents(events); // Update events list
});
