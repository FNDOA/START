function createGame(player1, hour, player2) {
  return `
  <li>
    <img src="./assets/icon-${player1}.svg" alt="Icone ${player1}"/>
    <strong>${hour}</strong>
    <img src="./assets/icon-${player2}.svg" alt="Icone ${player2}">
  </li>
  
  
  `
}

let delay = -0.3
function createCard(date, day, games) {
  delay = delay + 0.3
  return `
  <div class="card" style="animation-delay: ${delay}s">
    <h2>${date} <span>${day}</span></h2>
    <ul>
    ${games}
                    
    </ul>
  </div>
    `
}

document.querySelector("#cards").innerHTML =
  createCard(
    "24/11",
    "QUINTA",
    createGame("suiça", "07:00", "camarões") +
      createGame("uruguai", "10:00", "korea do sul") +
      createGame("portugal", "13:00", "gana") +
      createGame("brasil", "16:00", "servia")
  ) +
  createCard(
    "28/11",
    "SEGUNDA",
    createGame("camarões", "07:00", "servia") +
      createGame("korea do sul", "10:00", "gana") +
      createGame("brasil", "13:00", "suiça") +
      createGame("portugal", "16:00", "uruguai")
  ) +
  createCard(
    "02/12",
    "SEXTA",
    createGame("korea do sul", "12:00", "portugal") +
      createGame("gana", "12:00", "uruguai") +
      createGame("servia", "16:00", "suiça") +
      createGame("camarões", "16:00", "brasil")
  )
