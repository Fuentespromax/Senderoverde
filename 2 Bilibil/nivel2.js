
const canopyArt = [
    "           III           ",
    "         IILLLII         ",
    "       IILLLLLLLII       ",
    "      ILLLLLLLLLLLI      ",
    "    IILLLLLLLLLLLLLII    ",
    "   ILLLMMMMMLLLLLLLLII   ",
    "  ILLLMMMMMMLLLLMMMLLLI  ",
    " ILLLLLLLLLLLLLLLLLLLLLI ",
    "ILLLLMMMMLLLLLLMMMMMLLLLI",
    "ILLLMMMMMMMLLMMMMMMMMLLLI",
    "ILLLMMMMMMMMMMMMMMMMMMLLI",
    "ILLLLMMMMMLLMMMMMMMMMMLLI",
    " ILLLMMMMLLLLLMMMMMMMLLI ",
    "  ILLLLMLLLLLLLMMMMMLLI  ",
    "   ILLLLLLLLLLLLLLLLLI   ",
    "    IILLLLLLLLLLLLLII    ",
    "      IILLLLLLLLLII      ",
    "        IIIIIIIII        "
];

const canopyPalette = {
    I: "ink",
    L: "leaf",
    M: "mid",
    G: "shade",
    D: "deep",
    Y: "lime",
    B: "light"
};

const canopy = document.getElementById("canopy");

function drawGrid(container, art, palette, className) {
    container.innerHTML = "";

    art.forEach(row => {
        // Cada fila ocupa exactamente 25 columnas.
        const normalized = row.padEnd(25, " ").slice(0, 25);

        [...normalized].forEach(char => {
            const pixel = document.createElement("div");
            pixel.classList.add(className);

            if (palette[char]) {
                pixel.classList.add(palette[char]);
            } else {
                pixel.style.visibility = "hidden";
            }

            container.appendChild(pixel);
        });
    });
}

drawGrid(canopy, canopyArt, canopyPalette, "pixel");

// Añade luces y manchas de follaje sobre la copa.
const leafHighlights = [
    [1, 12, "lime"],
    [2, 11, "lime"],
    [3, 10, "light"],
    [4, 7, "lime"],
    [5, 5, "lime"],
    [5, 19, "lime"],
    [6, 4, "light"],
    [7, 3, "mid"],
    [8, 6, "shade"],
    [9, 3, "shade"],
    [10, 5, "deep"],
    [11, 8, "shade"],
    [12, 15, "deep"],
    [13, 17, "shade"],
    [14, 10, "mid"],
    [15, 12, "deep"]
];

leafHighlights.forEach(([row, col, color]) => {
    const pixel = canopy.children[row * 25 + col];

    if (pixel && pixel.style.visibility !== "hidden") {
        pixel.classList.remove("leaf", "mid", "light", "lime");
        pixel.classList.add(color);
    }
});

// Tronco: píxeles con sombras y vetas de madera.
const trunkArt = [
    "IIIIIII",
    "IBBBLBI",
    "IBLBBBI",
    "IBBBLBI",
    "IBLBBBI",
    "IIIIIII"
];

const trunkPalette = {
    I: "ink",
    B: "bark",
    L: "bark-light",
    D: "bark-dark",
    X: "bark-deep"
};

const trunk = document.getElementById("trunk");

trunkArt.forEach(row => {
    [...row].forEach(char => {
        const pixel = document.createElement("div");
        pixel.classList.add("trunk-pixel");

        if (trunkPalette[char]) {
            pixel.classList.add(trunkPalette[char]);
        }

        trunk.appendChild(pixel);
    });
});

// Plataforma de césped y tierra.
const islandArt = [
    "          IIIII          ",
    "        IITTTTTII        ",
    "      IITTTTTTTTTII      ",
    "     ITTTTTTTTTTTTTI     ",
    "    ITTTTTTTTTTTTTTTI    ",
    "   ITTTTTTTTTTTTTTTTTI   ",
    "  ITTTTTTTTTTTTTTTTTTTI  ",
    "  IIIIIIIIIIIIIIIIIIIII  ",
    "  SSSSSSSSSSSSSSSSSSSSS  ",
    "   SSSSSSSSSSSSSSSSSSS   ",
    "    SSSSSSSSSSSSSSSSS    ",
    "     SSSSSSSSSSSSSSS     "
];

const islandPalette = {
    I: "ink",
    T: "turf",
    B: "turf-light",
    G: "turf-dark",
    S: "soil",
    L: "soil-light",
    D: "soil-dark"
};

const island = document.getElementById("island");

drawGrid(
    island,
    islandArt,
    islandPalette,
    "island-pixel"
);

// Detalles de césped en el borde superior.
const islandPixels = island.children;

[
    [5, 5, "turf-light"],
    [5, 6, "turf-light"],
    [6, 8, "turf-dark"],
    [6, 18, "turf-light"],
    [7, 3, "turf-dark"],
    [7, 20, "turf-dark"],
    [9, 5, "soil-light"],
    [10, 9, "soil-dark"],
    [10, 16, "soil-light"]
].forEach(([row, col, color]) => {
    const pixel = islandPixels[row * 25 + col];

    if (pixel && pixel.style.visibility !== "hidden") {
        pixel.classList.remove("turf", "turf-light", "turf-dark", "soil");
        pixel.classList.add(color);
    }
});

// Interacción de niveles.
const tree = document.getElementById("tree");
const number = document.getElementById("number");
const changeButton = document.getElementById("change");
const levelName = document.getElementById("level-name");

const levelNames = [
    "Bosque inicial",
    "Sendero verde",
    "Bosque brillante",
    "Arboleda antigua",
    "Valle esmeralda",
    "Bosque secreto",
    "Jardín pixelado",
    "Bosque encantado",
    "Colina verde",
    "Reino de hojas",
    "Árbol legendario"
];

let level = 2;

function jumpTree() {
    tree.classList.remove("jumping");

    // Reinicia la animación para permitir repetirla.
    void tree.offsetWidth;

    tree.classList.add("jumping");

    tree.addEventListener("animationend", () => {
        tree.classList.remove("jumping");
    }, { once: true });
}

function changeLevel() {
    level = level >= 11 ? 1 : level + 2;

    number.textContent = level;
    levelName.textContent = levelNames[level - 2];

    jumpTree();
}

// Botón para abrir la página de contenido del árbol.
changeButton.addEventListener("click", () => {
    window.location.href = "contenido2.html";
});