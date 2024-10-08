// Simulate player attributes
const team = [
    { name: "Spieler 1", block: Math.floor(Math.random() * 6) + 1, defense: Math.floor(Math.random() * 6) + 1, pass: Math.floor(Math.random() * 6) + 1, attack: Math.floor(Math.random() * 6) + 1, reception: Math.floor(Math.random() * 6) + 1 },
    { name: "Spieler 2", block: Math.floor(Math.random() * 6) + 1, defense: Math.floor(Math.random() * 6) + 1, pass: Math.floor(Math.random() * 6) + 1, attack: Math.floor(Math.random() * 6) + 1, reception: Math.floor(Math.random() * 6) + 1 },
    { name: "Spieler 3", block: Math.floor(Math.random() * 6) + 1, defense: Math.floor(Math.random() * 6) + 1, pass: Math.floor(Math.random() * 6) + 1, attack: Math.floor(Math.random() * 6) + 1, reception: Math.floor(Math.random() * 6) + 1 },
    { name: "Spieler 4", block: Math.floor(Math.random() * 6) + 1, defense: Math.floor(Math.random() * 6) + 1, pass: Math.floor(Math.random() * 6) + 1, attack: Math.floor(Math.random() * 6) + 1, reception: Math.floor(Math.random() * 6) + 1 },
    { name: "Spieler 5", block: Math.floor(Math.random() * 6) + 1, defense: Math.floor(Math.random() * 6) + 1, pass: Math.floor(Math.random() * 6) + 1, attack: Math.floor(Math.random() * 6) + 1, reception: Math.floor(Math.random() * 6) + 1 },
    { name: "Spieler 6", block: Math.floor(Math.random() * 6) + 1, defense: Math.floor(Math.random() * 6) + 1, pass: Math.floor(Math.random() * 6) + 1, attack: Math.floor(Math.random() * 6) + 1, reception: Math.floor(Math.random() * 6) + 1 }
];

function startGame() {
    let output = document.getElementById("output");
    output.innerHTML = ""; // Vorherige Ausgaben löschen

    team.forEach(player => {
        output.innerHTML += `${player.name} hat angegriffen mit Angriff: ${player.attack}<br>`;
    });
}

// Event Listener für den Button
document.getElementById('startButton').addEventListener('click', startGame);
