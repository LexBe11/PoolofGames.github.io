let points = 0;
let games = [];

function loadUserData() {
    const userData = JSON.parse(localStorage.getItem('user')) || { points: 0, games: [] };
    points = userData.points;
    games = userData.games;
    document.getElementById('points').innerText = points;
    updateGameList();
}

function saveUserData() {
    const userData = { points, games };
    localStorage.setItem('user', JSON.stringify(userData));
    document.getElementById('points').innerText = points;
    updateGameList();
}

function buyGame(gameId) {
    const gamePrices = {
        'beamng-drive': 124500,
        'garrys-mod': 100000
    };
    
    if (points >= gamePrices[gameId]) {
        points -= gamePrices[gameId];
        games.push(gameId);
        saveUserData();
        alert(`You have successfully purchased ${gameId.replace('-', ' ')}!`);
    } else {
        alert('Not enough points!');
    }
}

function givePoints() {
    const adminPassword = document.getElementById('admin-password').value;
    const pointsToAdd = parseInt(document.getElementById('points-amount').value, 10);

    if (adminPassword === '2233') { // Admin password check
        points += pointsToAdd;
        saveUserData();
        alert(`Successfully added ${pointsToAdd} points!`);
    } else {
        alert('Incorrect admin password.');
    }
}

function downloadGame(gameId) {
    const downloadLinks = {
        'beamng-drive': 'https://mega.nz/file/wFxQSKxI#ydnr7puWi6Vw15WQejfoEw',
        'garrys-mod': 'https://mega.nz/file/ZZIRDYqT#SgVKbfJA__r1fIA3EztsXw'
    };

    window.location.href = downloadLinks[gameId];
}

function updateGameList() {
    const gameList = document.getElementById('game-list');
    gameList.innerHTML = '';
    games.forEach(game => {
        const li = document.createElement('li');
        li.textContent = game.replace('-', ' ');
        gameList.appendChild(li);
    });
}

loadUserData();
