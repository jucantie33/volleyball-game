{\rtf1\ansi\ansicpg1252\cocoartf2761
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 // Simulate player attributes\
const team = [\
    \{ name: "Spieler 1", block: Math.floor(Math.random() * 6) + 1, defense: Math.floor(Math.random() * 6) + 1, pass: Math.floor(Math.random() * 6) + 1, attack: Math.floor(Math.random() * 6) + 1, reception: Math.floor(Math.random() * 6) + 1 \},\
    \{ name: "Spieler 2", block: Math.floor(Math.random() * 6) + 1, defense: Math.floor(Math.random() * 6) + 1, pass: Math.floor(Math.random() * 6) + 1, attack: Math.floor(Math.random() * 6) + 1, reception: Math.floor(Math.random() * 6) + 1 \},\
    \{ name: "Spieler 3", block: Math.floor(Math.random() * 6) + 1, defense: Math.floor(Math.random() * 6) + 1, pass: Math.floor(Math.random() * 6) + 1, attack: Math.floor(Math.random() * 6) + 1, reception: Math.floor(Math.random() * 6) + 1 \},\
    \{ name: "Spieler 4", block: Math.floor(Math.random() * 6) + 1, defense: Math.floor(Math.random() * 6) + 1, pass: Math.floor(Math.random() * 6) + 1, attack: Math.floor(Math.random() * 6) + 1, reception: Math.floor(Math.random() * 6) + 1 \},\
    \{ name: "Spieler 5", block: Math.floor(Math.random() * 6) + 1, defense: Math.floor(Math.random() * 6) + 1, pass: Math.floor(Math.random() * 6) + 1, attack: Math.floor(Math.random() * 6) + 1, reception: Math.floor(Math.random() * 6) + 1 \},\
    \{ name: "Spieler 6", block: Math.floor(Math.random() * 6) + 1, defense: Math.floor(Math.random() * 6) + 1, pass: Math.floor(Math.random() * 6) + 1, attack: Math.floor(Math.random() * 6) + 1, reception: Math.floor(Math.random() * 6) + 1 \}\
];\
\
function startGame() \{\
    let output = document.getElementById("output");\
    output.innerHTML = ""; // Vorherige Ausgaben l\'f6schen\
\
    team.forEach(player => \{\
        output.innerHTML += `$\{player.name\} hat angegriffen mit Angriff: $\{player.attack\}<br>`;\
    \});\
\}\
\
// Event Listener f\'fcr den Button\
document.getElementById('startButton').addEventListener('click', startGame);\
\
\
}