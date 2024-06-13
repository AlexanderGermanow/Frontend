const footballPlayers = [
    { name: "Player 1", position: "Forward", team: "Team A" },
    { name: "Player 2", position: "Midfielder", team: "Team B" },
    { name: "Player 3", position: "Defender", team: "Team C" },
    { name: "Player 4", position: "Goalkeeper", team: "Team D" },
    { name: "Player 5", position: "Forward", team: "Team E" },
    { name: "Player 6", position: "Midfielder", team: "Team F" },
    { name: "Player 7", position: "Defender", team: "Team G" },
    { name: "Player 8", position: "Goalkeeper", team: "Team H" },
    { name: "Player 9", position: "Forward", team: "Team I" },
    { name: "Player 10", position: "Midfielder", team: "Team J" }
  ];

  const nameP = 'name';

const names = getPropertyValues(footballPlayers, 'name');
console.log(names);

function arrNameOfPlayers(footballPlayers, name) {
  const arrName = [];
  for (let i = 0; i < footballPlayers.length; i++) {
    if (name in footballPlayers[i]) {
      arrName.push(footballPlayers[i][name]);
    }
  }
  return arrName;
}
console.log(arrNameOfPlayers(footballPlayers, nameP));


function forwardsQ(footballPlayers) {
    let q = 0;
    for (let i = 0; i < footballPlayers.length; i++) {
      if (footballPlayers[i]['position'] === 'Forward') {
        q++;
      }
    }
    return q;
  }

  console.log(forwardsQ(footballPlayers));