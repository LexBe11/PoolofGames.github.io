const apiUrl = 'http://localhost:3000/api/users';
let points = 0;
let games = [];

function loadUserData() {
    const userData = JSON.parse(localStorage.getItem('user')) || { points: 0, games: [] };
    points = userData.points;
    games = userData.games;
    updateUI();
}

function saveUserData() {
    const userData = { points, games };
    localStorage.setItem('user', JSON.stringify(userData));
}

function updateUI() {
    document.getElementById('points').textContent = points;
    const gameList = document.getElementById('game-list');
    gameList.innerHTML = '';
    games.forEach(game => {
        const li = document.createElement('li');
        li.textContent = game;
        gameList.appendChild(li);
    });
}

async function buyGame(gameId) {
    const gameCosts = {
        'beamng-drive': 124500,
        'garrys-mod': 100000
    };
    const cost = gameCosts[gameId];

    if (points >= cost) {
        points -= cost;
        games.push(gameId);
        saveUserData();
        updateUI();
    } else {
        alert('Not enough points to buy the game.');
    }
}

function downloadGame(gameId) {
    const downloadLinks = {
        'beamng-drive': 'https://mega.nz/folder/wFxQSKxI#ydnr7puWi6Vw15WQejfoEw',
        'garrys-mod': 'https://mega.nz/folder/ZZIRDYqT#SgVKbfJA__r1fIA3EztsXw'
    };
    const link = downloadLinks[gameId];
    window.open(link, '_blank');
}

async function givePoints() {
    const password = document.getElementById('admin-password').value;
    const pointsAmount = parseInt(document.getElementById('points-amount').value, 10);
    const response = await fetch(`${apiUrl}/admin/give-points`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password, points: pointsAmount })
    });

    if (response.ok) {
        points += pointsAmount;
        saveUserData();
        updateUI();
        alert('Points added successfully');
    } else {
        alert('Incorrect password');
    }
}

loadUserData();
updateUI();
