// Zodra de gebruiker op de knop klikt word de functie gestart.
document.getElementById("add-taak").addEventListener("click", function() {
    // met dit stukje code worden de waardes van de gebruiker ingevoerd bij het maken van een nieuwe taak.
    let titel = document.getElementById("taak-titel").value;
    let beschrijving = document.getElementById("taak-beschrijving").value;
    let deadline = document.getElementById("taak-deadline").value;
    let puntwaarde = document.getElementById("taak-puntwaarde").value;

    // hiermee worden spaties verwijdert die de gebruiker invoert, als die er zijn. Je krijgt een melding als je niks invult.
    if (titel.trim() === "") return alert("Voer een titel in!");

    // converteert de puntwaarde die de gebruiker heeft ingevoerd naar een getal en vermenigvuldigt het met 5 om de uren naar punten te converteren
    let punten = parseInt(puntwaarde) * 5;

    // maakt een lijst element voor html en een CSS klasse genaamd taak voor de styling.
    let taak = document.createElement("li");
    taak.classList.add("taak");

    // Dit is de html content die je krijgt te zien als je succesvol een taak toevoegd.
    taak.innerHTML = `
    <div class="taak-tekst">
        <div class="box titel">${titel}</div>
        <div class="box beschrijving">${beschrijving}</div>
        <div class="box deadline">Deadline: <br> ${deadline}</div>
        <div class="box puntwaarde">${punten} punten</div>

        <span class="status">Net begonnen</span>
        <button class="edit">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="white" style="width: 20px; height: 20px;">
                <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
            </svg>
        </button>
        <button class="delete">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="white" style="width: 20px; height: 20px;">
                <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
            </svg>
        </button>
    </div>
`;
    
    //voegt de achtergrondkleur toe voor de status wanneer die wordt aangemaakt.
    let statusElement = taak.querySelector(".status");
    statusElement.style.backgroundColor = "#D0F0F1";

    //dit voegt 'taak' toe aan 'taken-lijst'
    document.getElementById("taken-lijst").appendChild(taak);

    // Dit leegt de invoervelden wanneer de gebruiker begint met typen.
    document.getElementById("taak-titel").value = "";
    document.getElementById("taak-beschrijving").value = "";
    document.getElementById("taak-deadline").value = "";
    document.getElementById("taak-puntwaarde").value = "";

    // Met deze functie verwijder je een taak.
    taak.querySelector(".delete").addEventListener("click", function() {
        taak.remove();
    });

    // met deze functie bewerk je een taak.
    taak.querySelector(".edit").addEventListener("click", function() {
        let nieuweTitel = prompt("Nieuwe titel:", titel);
        let nieuweBeschrijving = prompt("Nieuwe beschrijving:", beschrijving);
        let nieuweDeadline = prompt("Nieuwe deadline:", deadline);
        let nieuweUren = prompt("Nieuwe uren:", punten / 5); // De oude punten omrekenen naar uren, bij bewerken
    
        if (nieuweTitel) {
            taak.querySelector(".titel").innerText = nieuweTitel;
        }
        if (nieuweBeschrijving) {
            taak.querySelector(".beschrijving").innerText = nieuweBeschrijving;
        }
        if (nieuweDeadline) {
            taak.querySelector(".deadline").innerHTML = `Deadline: <br> ${nieuweDeadline}`;
        }
        if (nieuweUren) {
            let nieuwePunten = parseInt(nieuweUren) * 5;
            taak.querySelector(".puntwaarde").innerText = `${nieuwePunten} punten`;
        }
    });
    


    // met deze functie kun je de status van een taak aanpassen.
taak.querySelector(".status").addEventListener("click", function() {
    let status = ["Net begonnen", "In uitvoering", "Afgerond"];
    let huidigeStatus = this.innerText;
    let index = status.indexOf(huidigeStatus);
    this.innerText = status[(index + 1) % status.length];

// Veranderd de achtergrondkleur afhankelijk van de status
    switch (this.innerText) {
        case "Net begonnen":
            this.style.backgroundColor = "#D0F0F1";
            break;
        case "In uitvoering":
            this.style.backgroundColor = "#FFCF35";
            break;
        case "Afgerond":
            this.style.backgroundColor = "#8DFF81";
            break;
    }
});
});
