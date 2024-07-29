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
            // const survey1Questions = [
    "How satisfied are you with our service?",
    "Would you recommend our service to others?",
    "How often do you use our service?",
    "What features do you like the most?",
    "What features do you like the least?",
    "How can we improve our service?",
    "How did you hear about us?",
    "How likely are you to use our service again?",
    "What other services do you use?",
    "What do you think about our pricing?",
    "Do you find our website easy to navigate?",
    "What additional features would you like to see?",
    "Do you feel our service is reliable?",
    "How would you rate our customer support?",
    "Have you experienced any issues with our service?",
    "How quickly are your issues resolved?",
    "Do you find our service to be a good value for money?",
    "What do you think about the quality of our service?",
    "How can we make our service more convenient for you?",
    "Do you think our service is secure?",
    "What do you think about our privacy policy?",
    "How do you usually contact our customer support?",
    "How often do you need to contact our customer support?",
    "Do you find our support staff helpful?",
    "Have you used our mobile app?",
    "How would you rate our mobile app?",
    "Do you find our mobile app easy to use?",
    "What features do you use the most on our mobile app?",
    "Have you experienced any issues with our mobile app?",
    "How likely are you to recommend our mobile app?",
    "What improvements would you suggest for our mobile app?",
    "Do you find our mobile app reliable?",
    "How do you usually access our service?",
    "Do you use our service for personal or professional reasons?",
    "How do you feel about the design of our website?",
    "What do you think about our social media presence?",
    "Do you follow us on social media?",
    "How often do you engage with our social media posts?",
    "What type of content do you like to see on our social media?",
    "Have you ever participated in our social media contests?",
    "How did you hear about our social media channels?",
    "What do you think about our email newsletters?",
    "How often do you read our email newsletters?",
    "Do you find our email newsletters informative?",
    "What topics would you like to see covered in our email newsletters?",
    "How do you feel about the frequency of our email newsletters?",
    "Do you think our email newsletters are visually appealing?",
    "Have you ever contacted us through email?",
    "How quickly do you receive a response to your emails?",
    "Do you feel your issues are resolved satisfactorily via email?",
];

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
