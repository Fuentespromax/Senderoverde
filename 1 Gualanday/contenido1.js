
const garden = document.getElementById("gardenDecor");
const particles = document.getElementById("particles");

const random = (min, max) =>
    Math.random() * (max - min) + min;

function createPixelElement(type, x, y, extra = {}) {
    if (!garden) return;

    const element = document.createElement("div");

    element.classList.add("pixel", type);
    element.style.left = `${x}%`;
    element.style.top = `${y}%`;

    if (extra.petal) {
        element.style.setProperty("--petal", extra.petal);
        element.style.setProperty("--center", extra.center);
    }

    if (extra.stone) {
        element.style.setProperty("--stone", extra.stone);
        element.style.setProperty("--stone-dark", extra.dark);
    }

    element.style.animationDelay = `${random(0, 3).toFixed(2)}s`;

    garden.appendChild(element);
}

function getPosition() {
    let x, y;

    do {
        x = random(3, 94);
        y = random(65, 91);
    } while (
        x > 25 &&
        x < 75 &&
        Math.random() < 0.7
    );

    return { x, y };
}

const flowerColors = [
    { petal: "#ff7195", center: "#ffe68a" },
    { petal: "#fff1a6", center: "#e99a45" },
    { petal: "#c8a0ff", center: "#fff1a6" },
    { petal: "#ff9e72", center: "#fff0a0" },
    { petal: "#f7f3e7", center: "#ffce61" },
    { petal: "#ff82c5", center: "#fff3a3" }
];

if (garden && particles) {
    // Arbustos
    for (let i = 0; i < 13; i++) {
        const { x, y } = getPosition();
        createPixelElement("bush", x, y);
    }

    // Flores
    for (let i = 0; i < 35; i++) {
        const { x, y } = getPosition();
        const color = flowerColors[
            Math.floor(Math.random() * flowerColors.length)
        ];

        createPixelElement("flower", x, y, color);
    }

    // Rocas
    for (let i = 0; i < 12; i++) {
        const { x, y } = getPosition();
        createPixelElement("rock", x, y);
    }

    // Hongos
    for (let i = 0; i < 8; i++) {
        const { x, y } = getPosition();
        createPixelElement("mushroom", x, y);
    }

    // Hierba
    for (let i = 0; i < 30; i++) {
        const { x, y } = getPosition();
        createPixelElement("grass", x, y);
    }

    // Piedritas
    const pebbleColors = [
        ["#f0c6a4", "#c99c7c"],
        ["#d7d2c1", "#a6a392"],
        ["#d6b5df", "#aa87bb"]
    ];

    for (let i = 0; i < 18; i++) {
        const { x, y } = getPosition();
        const color = pebbleColors[
            Math.floor(Math.random() * pebbleColors.length)
        ];

        createPixelElement("pebble", x, y, {
            stone: color[0],
            dark: color[1]
        });
    }

    // Partículas brillantes
    for (let i = 0; i < 24; i++) {
        const sparkle = document.createElement("div");

        sparkle.classList.add("pixel", "sparkle");
        sparkle.style.left = `${random(4, 96)}%`;
        sparkle.style.top = `${random(15, 88)}%`;
        sparkle.style.animationDelay = `${random(0, 4)}s`;

        particles.appendChild(sparkle);
    }
}
