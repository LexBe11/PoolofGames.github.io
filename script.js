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

function buyGame(gameId) {
    if (points >= 124500) {
        games.push(gameId);
        points -= 124500;
        saveUserData();
        updateUI();
        alert('Game purchased successfully!');
    } else {
        alert('Not enough points to buy the game.');
    }
}

function givePoints() {
    const password = document.getElementById('admin-password').value;
    const pointsAmount = parseInt(document.getElementById('points-amount').value, 10);
    if (password === '2233') {
        points += pointsAmount;
        saveUserData();
        updateUI();
        alert('Points added successfully');
    } else {
        alert('Incorrect password');
    }
}

function completeSurvey(surveyId) {
    const surveyPoints = {
        1: 10000,
        2: 25000,
        3: 32000,
        4: 70000
    };
    points += surveyPoints[surveyId];
    saveUserData();
    updateUI();
}

function downloadGame(gameId) {
    if (games.includes(gameId)) {
        window.location.href = 'https://mega.nz/folder/wFxQSKxI#ydnr7puWi6Vw15WQejfoEw'; // Updated Mega link
    } else {
        alert('You have not purchased this game yet.');
    }
}

loadUserData();
updateUI();
