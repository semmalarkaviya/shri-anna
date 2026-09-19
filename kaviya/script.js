
// ================================
// 🎀 SONU MAHHH BIRTHDAY WEBSITE 🎀
// ================================


// Get HTML elements
const opening = document.getElementById("opening");
const birthday = document.getElementById("birthday");
const surpriseBtn = document.getElementById("surpriseBtn");

const candles = document.querySelectorAll(".candle");
const wishText = document.getElementById("wishText");

const confetti = document.getElementById("confetti");




// ========================================
// 🎁 OPEN SURPRISE BUTTON
// ========================================

surpriseBtn.addEventListener("click", () => {

    // Hide opening screen
    opening.classList.add("hidden");

    // Show birthday page
    birthday.classList.remove("hidden");

    // Move page to the top
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    // Start confetti 🎉
    makeConfetti(90);
});


// ========================================
// 🕯️ BIRTHDAY CANDLE FUNCTION
// ========================================

candles.forEach((candle) => {

    candle.addEventListener("click", () => {

        // If candle is already blown, do nothing
        if (candle.classList.contains("blown")) {
            return;
        }

        // Add blown class
        candle.classList.add("blown");

        // Count candles which are still burning
        const remaining =
            document.querySelectorAll(".candle:not(.blown)").length;


        // If all candles are blown
        if (remaining === 0) {

            wishText.textContent =
                "✨ Wish made! May every beautiful thing find its way to you. 💗";

            // Big confetti 🎉
            makeConfetti(150);

        } else {

            // Show remaining candles
            wishText.textContent =
                `${remaining} candle${remaining > 1 ? "s" : ""} left... keep going, Birthday Anna! 🎀`;
        }

    });

});


// ========================================
// 🎉 CONFETTI FUNCTION
// ========================================

function makeConfetti(amount) {

    // Different confetti symbols
    const shapes = [
        "♡",
        "✦",
        "•",
        "🎀"
    ];


    // Create required number of confetti
    for (let i = 0; i < amount; i++) {

        // Create a span
        const piece = document.createElement("span");

        // Add CSS class
        piece.className = "confetti-piece";


        // Random shape
        piece.textContent =
            shapes[Math.floor(Math.random() * shapes.length)];


        // Random horizontal position
        piece.style.left =
            Math.random() * 100 + "vw";


        // Random animation delay
        piece.style.animationDelay =
            Math.random() * 1.8 + "s";


        // Random size
        piece.style.fontSize =
            (10 + Math.random() * 12) + "px";


        // Add confetti to page
        confetti.appendChild(piece);


        // Remove confetti after animation
        setTimeout(() => {
            piece.remove();
        }, 5000);

    }
}



// ========================================
// 🌷 FLOATING HEARTS & SPARKLES
// ========================================

const petals = document.querySelector(".petals");


setInterval(() => {

    // Create floating element
    const heart = document.createElement("span");


    // Randomly choose heart or sparkle
    heart.textContent =
        Math.random() > 0.5 ? "♡" : "✦";


    // Random horizontal position
    heart.style.position = "fixed";

    heart.style.left =
        Math.random() * 100 + "vw";


    // Start from bottom
    heart.style.bottom = "-20px";


    // Soft pink color
    heart.style.color =
        "rgba(217,141,163,.35)";


    // Random size
    heart.style.fontSize =
        (10 + Math.random() * 15) + "px";


    // Prevent clicking
    heart.style.pointerEvents = "none";


    // Put behind content
    heart.style.zIndex = "-1";


    // Animation
    heart.style.transition =
        "transform 6s linear, opacity 6s linear";


    // Add to page
    petals.appendChild(heart);


    // Start floating animation
    requestAnimationFrame(() => {

        heart.style.transform =
            `translateY(-110vh) rotate(${Math.random() * 360}deg)`;

        heart.style.opacity = "0";

    });


    // Remove after animation
    setTimeout(() => {
        heart.remove();
    }, 6500);


}, 700);