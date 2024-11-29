//Scroll to top button
document.addEventListener("DOMContentLoaded", function () {
    const backToTopButton = document.getElementById("back-to-top");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 200) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    });

    backToTopButton.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});


//image scale hover function
const images = document.querySelectorAll('.flex-container img');

images.forEach((img) => {
    img.addEventListener('mouseover', () => {
        img.style.transform = 'scale(1.1)';
    });

    img.addEventListener('mouseout', () => {
        img.style.transform = 'scale(1)';
    });
});


//character counter
document.addEventListener("DOMContentLoaded", function () {
    const proposalField = document.getElementById("proposal");
    const charCounter = document.getElementById("char-counter");

    proposalField.addEventListener("input", function () {
        const currentLength = proposalField.value.length;
        charCounter.textContent = `${currentLength} / 50 characters`;

        //color change
        if (currentLength < 50) {
            charCounter.style.color = "red";
        } else {
            charCounter.style.color = "green";
        }
    });
});





