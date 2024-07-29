let points = 0;

function loadUserData() {
    const userData = JSON.parse(localStorage.getItem('user')) || { points: 0, games: [] };
    points = userData.points;
}

function saveUserData() {
    const userData = { points, games: JSON.parse(localStorage.getItem('user')).games };
    localStorage.setItem('user', JSON.stringify(userData));
}

function startSurvey(surveyId) {
    const surveyQuestions = {
        1: [
            "Question 1 for Survey 1", "Question 2 for Survey 1", "Question 3 for Survey 1", 
            // Add 47 more questions here...
            "Question 50 for Survey 1"
        ],
        2: [
            "Question 1 for Survey 2", "Question 2 for Survey 2", "Question 3 for Survey 2", 
            // Add 47 more questions here...
            "Question 50 for Survey 2"
        ],
        3: [
            "Question 1 for Survey 3", "Question 2 for Survey 3", "Question 3 for Survey 3", 
            // Add 47 more questions here...
            "Question 50 for Survey 3"
        ],
        4: [
            "Question 1 for Survey 4", "Question 2 for Survey 4", "Question 3 for Survey 4", 
            // Add 47 more questions here...
            "Question 50 for Survey 4"
        ]
    };
    const surveyPoints = {
        1: 10000,
        2: 25000,
        3: 32000,
        4: 70000
    };

    const questions = surveyQuestions[surveyId];
    let surveyCompleted = true;
    
    questions.forEach(question => {
        surveyCompleted = surveyCompleted && confirm(question);
    });

    if (surveyCompleted) {
        points += surveyPoints[surveyId];
        saveUserData();
        alert(`Survey completed! You've earned ${surveyPoints[surveyId]} points.`);
    } else {
        alert("Survey not completed.");
    }
}

loadUserData();
