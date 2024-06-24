document.getElementById('eventCreationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let eventName = document.getElementById('eventName').value;
    let eventDate = document.getElementById('eventDate').value;

    console.log(`Event Name: ${eventName}, Event Date: ${eventDate}`);

    this.reset();

    events.push({ name: eventName, date: eventDate });
    renderEvents(events); 
});
