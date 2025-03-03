document.addEventListener("DOMContentLoaded", function () {
    const eventosLista = document.getElementById("eventos-lista");

    const eventos = [
        { titulo: "Sorteio Udemy", data: "10/03/2025" },
        { titulo: "Palestra Segurança Digital", data: "15/03/2025" },
        { titulo: "CTF Hacker Challenge", data: "20/03/2025" }
    ];

    eventos.forEach(evento => {
        const eventoDiv = document.createElement("div");
        eventoDiv.classList.add("evento");
        eventoDiv.innerHTML = `<h3>${evento.titulo}</h3><p>${evento.data}</p>`;
        eventosLista.appendChild(eventoDiv);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const menuHamburguer = document.querySelector(".menu-hamburguer");
    const navMobile = document.querySelector(".nav-mobile");

    menuHamburguer.addEventListener("click", () => {
        navMobile.classList.toggle("show");
    });

    const eventosLista = document.getElementById("eventos-lista");

    const eventos = [
        { titulo: "Sorteio Udemy", data: "10/03/2025" },
        { titulo: "Palestra Segurança Digital", data: "15/03/2025" },
        { titulo: "CTF Hacker Challenge", data: "20/03/2025" }
    ];

    eventos.forEach(evento => {
        const eventoDiv = document.createElement("div");
        eventoDiv.classList.add("evento");
        eventoDiv.innerHTML = `<h3>${evento.titulo}</h3><p>${evento.data}</p>`;
        eventosLista.appendChild(eventoDiv);
    });
});

