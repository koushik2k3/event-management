document.getElementById('eventCreationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    let eventName = document.getElementById('eventName').value;
    let eventDate = document.getElementById('eventDate').value;

    console.log(`Event Name: ${eventName}, Event Date: ${eventDate}`);


    events.push({ name: eventName, date: eventDate });
    renderEvents(events); // Update events list
});
