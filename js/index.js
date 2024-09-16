// Countdown Timer
function initializeCountdown(endDate) {
    const countdown = document.getElementById('countdown');
    const daysElement = document.getElementById('days');
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = endDate - now;

        if (distance < 0) {
            clearInterval(interval);
            countdown.innerHTML = "EXPIRED";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        daysElement.innerText = days.toString().padStart(2, '0');
        hoursElement.innerText = hours.toString().padStart(2, '0');
        minutesElement.innerText = minutes.toString().padStart(2, '0');
        secondsElement.innerText = seconds.toString().padStart(2, '0');
    }

    const interval = setInterval(updateCountdown, 1000);
    updateCountdown();
}

// Set the date we're counting down to
const endDate = new Date('2024-09-30T23:59:59').getTime();
initializeCountdown(endDate);


// ongoing project
let currentIndex = 1;
        const totalSlides = 4; // Number of slides
        const intervalTime = 3000; // Time in milliseconds (3 seconds)

        // Function to auto-slide
        function autoSlide() {
            currentIndex++;
            if (currentIndex > totalSlides) {
                currentIndex = 1; // Loop back to the first slide
            }
            document.getElementById('img' + currentIndex).checked = true;
        }

        // Set interval to change slide every 3 seconds
        setInterval(autoSlide, intervalTime);