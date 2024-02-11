// Function to update the countdown
function updateCountdown() {
    // Target date and time (Feb 15th, 11:59 PM)
    const targetDate = new Date('2024-02-15T23:59:00').getTime();

    // Update the countdown every second
    setInterval(() => {
        // Get the current date and time
        const now = new Date().getTime();

        // Calculate the remaining time
        const distance = targetDate - now;

        // Calculate days, hours, minutes, and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the countdown
        const countdownElement = document.getElementById('countdown');
        countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

        // If the countdown is over, stop the timer
        if (distance < 0) {
            clearInterval(updateCountdown);
            countdownElement.innerHTML = 'EXPIRED';
        }
    }, 1000);
}

// Call the function to start the countdown
updateCountdown();
