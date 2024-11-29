const games = [
  {
    name: "Bubble Shooter",
    url: "//html5.gamedistribution.com/27673bc45d2e4b27b7cd24e422f7c257/",
    description: "Combine bolhas da mesma cor para ganhar pontos."
  },
  {
    name: "Train Surfers",
    url: "//html5.gamedistribution.com/79a7e528f37b41cb98b85bac9cb17ae3/",
    description: "Corra pelos trilhos e evite os obstáculos."
  },
  {
    name: "Penalty Shooters 2",
    url: "//html5.gamedistribution.com/571b9df027e449f78e3869ba19658754/",
    description: "Marque gols de pênalti e defenda sua equipe."
  },
  {
    name: "Stickman Prison Escape",
    url: "//html5.gamedistribution.com/7d9835f1ceb748c1aeec18c6472870b5/",
    description: "Ajude o stickman a escapar da prisão resolvendo enigmas."
  },
  {
    name: "My Parking Lot",
    url: "//html5.gamedistribution.com/c9f842ab8eab48a884f3733beeffd140/",
    description: "Estacione os carros com cuidado para completar os níveis."
  },
  {
    name: "Red Ball Forever",
    url: "//html5.gamedistribution.com/dc7eea27033344bcb0dd85686e16bc86/",
    description: "Controle a bola vermelha e vença os desafios."
  }
  // Adicione mais jogos conforme necessário
];

// Carregar os jogos dinamicamente na lista
window.onload = function () {
  const gameList = document.querySelector(".games ul");
  games.forEach((game) => {
    const listItem = document.createElement("li");
    const link = document.createElement("a");
    link.href = "#";
    link.textContent = game.name;
    link.onclick = () => openGame(game.url, game.description);
    listItem.appendChild(link);
    gameList.appendChild(listItem);
  });
};

function openGame(gameUrl, gameDescription) {
  document.querySelector(".games").style.display = "none";
  const gameContainer = document.getElementById("game-container");
  gameContainer.style.display = "block";
  document.getElementById("game-frame").src = gameUrl;
  document.getElementById("game-description").textContent = gameDescription;
}

function goBack() {
  document.querySelector(".games").style.display = "block";
  const gameContainer = document.getElementById("game-container");
  gameContainer.style.display = "none";
  document.getElementById("game-frame").src = "";
  document.getElementById("game-description").textContent = "";
}

