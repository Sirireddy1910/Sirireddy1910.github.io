const roles = ["Java Developer", "AI Enthusiast", "Competitive Programmer"];
let i = 0;
let j = 0;
let currentRole = "";
let isDeleting = false;
const speed = 100;

function type() {
    currentRole = roles[i];
    if (!isDeleting) {
        document.getElementById("typing").textContent = currentRole.substring(0, j++);
        if (j > currentRole.length) {
            isDeleting = true;
            setTimeout(type, 1000);
            return;
        }
    } else {
        document.getElementById("typing").textContent = currentRole.substring(0, j--);
        if (j === 0) {
            isDeleting = false;
            i = (i + 1) % roles.length;
        }
    }
    setTimeout(type, speed);
}

type();
