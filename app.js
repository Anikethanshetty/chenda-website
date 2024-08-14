

var typed = new Typed(".typing", {
    strings: ["Alvas Singari Melam"],
    typeSpeed: 100,  // Typing speed
    backSpeed: 150,   // Backspacing speed
    backDelay: 10000,  // Delay before starting to backspace
    startDelay: 500,  // Delay before typing starts
    loop: true,
    showCursor: false,
    contentType: 'html', // if you're using HTML content
    smartBackspace: true, // Only backspace if the previous string is different
    onComplete: function(self) {
        // Optional: Callback function after typing is complete
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Remove 'active' class from all links and add 'not-active'
            navLinks.forEach(link => {
                link.classList.remove('active');
                link.classList.add('not-active');
            });

            // Add 'active' class to the clicked link and remove 'not-active'
            this.classList.add('active');
            this.classList.remove('not-active');
        });
    });
});


