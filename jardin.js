
const contenedorArboles = document.getElementById("arboles");

const niveles = [
    { numero: 1, nombre: "Nivel 1", pagina: "1 Gualanday/nivel1.html" },
    { numero: 2, nombre: "Nivel 2", pagina: "2 Bilibil/nivel2.html" },
    { numero: 3, nombre: "Nivel 3", pagina: "3 Iguá/nivel3.html" },
    { numero: 4, nombre: "Nivel 4", pagina: "4 Mango/nivel4.html" },
    { numero: 5, nombre: "Nivel 5", pagina: "5 Maiz tostado/nivel5.html" },
    { numero: 6, nombre: "Nivel 6", pagina: "6 Caracolí/nivel6.html" },
    { numero: 7, nombre: "Nivel 7", pagina: "7 Chicalá/nivel7.html" },
    { numero: 8, nombre: "Nivel 8", pagina: "8 Velero/nivel8.html" },
    { numero: 9, nombre: "Nivel 9", pagina: "9 Guacimo/nivel9.html" },
    { numero: 10, nombre: "Nivel 10", pagina: "10 Cachimbo/nivel10.html" },
    { numero: 11, nombre: "Nivel 11", pagina: "11 Saman/nivel11.html" },
    { numero: 12, nombre: "Nivel 12", pagina: "12 Orejero/nivel12.html" },
    { numero: 13, nombre: "Nivel 13", pagina: "13 Ceiba/nivel13.html" }
];

if (contenedorArboles) {
    niveles.forEach((nivel) => {
        const boton = document.createElement("button");

        boton.className = "arbol";
        boton.type = "button";
        boton.setAttribute(
            "aria-label",
            `Entrar al ${nivel.nombre}`
        );
        boton.title = `Entrar al ${nivel.nombre}`;

        boton.innerHTML = `
            <span class="sombra-arbol"></span>
            <span class="copa"></span>
            <span class="tronco"></span>
            <span class="numero">${nivel.numero}</span>
            <span class="nombre-nivel">${nivel.nombre}</span>
        `;

        boton.addEventListener("click", () => {
            window.location.href = nivel.pagina;
        });

        contenedorArboles.appendChild(boton);
    });
}


/* ==========================================
   DECORACIONES DEL JARDÍN PIXEL ART
========================================== */

const mapaJardin = document.getElementById("mapa");

if (mapaJardin && !mapaJardin.dataset.decorado) {
    mapaJardin.dataset.decorado = "true";


const adornos = [
    // Flores en los bordes superiores
    { tipo: "flor flor-amarilla", x: 7, y: 13 },
    { tipo: "flor flor-rosa", x: 26, y: 17 },
    { tipo: "flor flor-blanca", x: 52, y: 12 },
    { tipo: "flor flor-azul", x: 78, y: 16 },
    { tipo: "flor flor-rosa", x: 93, y: 13 },

    // Vegetación entre los árboles
    { tipo: "roca", x: 7, y: 37 },
    { tipo: "hierba", x: 30, y: 35 },
    { tipo: "hongo", x: 53, y: 37 },
    { tipo: "hierba", x: 78, y: 35 },
    { tipo: "piedritas", x: 93, y: 38 },

    // Flores y elementos laterales
    { tipo: "flor flor-azul", x: 5, y: 58 },
    { tipo: "hongo", x: 28, y: 57 },
    { tipo: "flor flor-amarilla", x: 53, y: 59 },
    { tipo: "roca", x: 77, y: 57 },
    { tipo: "flor flor-blanca", x: 94, y: 59 },

    // Borde inferior
    { tipo: "hierba", x: 7, y: 88 },
    { tipo: "flor flor-rosa", x: 29, y: 89 },
    { tipo: "roca", x: 49, y: 88 },
    { tipo: "flor flor-blanca", x: 72, y: 89 },
    { tipo: "hongo", x: 92, y: 88 },

    // Pequeños grupos de piedras
    { tipo: "piedritas", x: 17, y: 43 },
    { tipo: "piedritas", x: 83, y: 65 },
    { tipo: "piedritas", x: 39, y: 80 }
];


    adornos.forEach((adorno, indice) => {
        const elemento = document.createElement("span");

        elemento.className = `adorno-jardin ${adorno.tipo}`;
        elemento.style.left = `${adorno.x}%`;
        elemento.style.top = `${adorno.y}%`;
        elemento.style.transform = "translate(-50%, -50%)";

        elemento.setAttribute("aria-hidden", "true");
        elemento.style.setProperty(
            "--retraso",
            `${(indice % 5) * 0.25}s`
        );

        mapaJardin.appendChild(elemento);
    });
}


