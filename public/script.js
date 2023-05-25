const addWorkoutButton = document.querySelector('#addWorkout');
const form = document.querySelector('#form');
const overlay = document.getElementById('overlay');
const closeButton = document.querySelector('.form-header .close-button');

// loading local storage variables
const workoutForm = document.getElementById("userWorkoutForm");
const formContainer = document.querySelector(".form-group");
const workout = [];

// taking in workout entry data and creating an entry object to store using localStorage & using JSON to condense data into string

const addWorkoutEntry = (workoutDate, startTime, endTime, easy, moderate, difficult, style) => {
  const entry = {
    workoutDate,
    startTime,
    endTime,
    easy,
    moderate,
    difficult,
    style
  };
  workout.push(entry);
  localStorage.setItem('workoutData', JSON.stringify(workout));
};

// creating a workout element that takes in an entry object

const createWorkoutElement = ({ workoutDate, startTime, endTime, easy, moderate, difficult, style }) => {
  // loading new variables into DOM
  const workoutDiv = document.createElement('div');
  const workoutDateElement = document.createElement('h1');
  const workoutStartTimeElement = document.createElement('p');
  const workoutEndTimeElement = document.createElement('p');
  const difficultyLevelElement = document.createElement('p');
  const workoutJumpTypeElement = document.createElement('p');

  // adding inner text to elements
  workoutDateElement.innerText = "Workout Date: " + workoutDate;
  workoutStartTimeElement.innerText = "Start-time: " + startTime;
  workoutEndTimeElement.innerText = "End-time: " + endTime;
  difficultyLevelElement.innerText = "Workout Difficulty: " + getDifficultyLevel(easy, moderate, difficult);
  workoutJumpTypeElement.innerText = "Jump-Type: " + style;

  // appending elements to container
  workoutDiv.append(workoutDateElement, workoutStartTimeElement, workoutEndTimeElement, difficultyLevelElement, workoutJumpTypeElement);
  formContainer.appendChild(workoutDiv);
};

// determining difficulty level data type and assigning correct output to entry
const getDifficultyLevel = (easy, moderate, difficult) => {
  if (easy) return "Easy";
  if (moderate) return "Moderate";
  if (difficult) return "Hard";
};

// add workout button functionality
addWorkoutButton.addEventListener('click', () => {
  openForm();
});

// close button functionality

closeButton.addEventListener('click', () => {
  closeForm();
});

// opening the form

function openForm() {
  form.classList.add('active');
  overlay.classList.add('active');
}

// closing the form
function closeForm() {
  form.classList.remove('active');
  overlay.classList.remove('active');
}

// Load workout data from local storage
const storedWorkoutData = localStorage.getItem('workoutData');
if (storedWorkoutData) {
  workout.push(...JSON.parse(storedWorkoutData));
}

// Render existing workout entries
workout.forEach(createWorkoutElement);

// Handle form submission
const saveButton = document.getElementById('saveButton');
saveButton.addEventListener('click', (event) => {
  event.preventDefault();

  // Get form values
  const workoutDate = workoutForm.elements['user-workout-date'].value;
  const startTime = workoutForm.elements['user-workout-start-time'].value;
  const endTime = workoutForm.elements['user-workout-end-time'].value;
  const easy = workoutForm.elements['user-workout-difficulty-easy'].checked;
  const moderate = workoutForm.elements['user-workout-difficulty-moderate'].checked;
  const difficult = workoutForm.elements['user-workout-difficulty-hard'].checked;
  const style = workoutForm.elements['user-jump-types'].value;

  // Create workout entry
  addWorkoutEntry(workoutDate, startTime, endTime, easy, moderate, difficult, style);

  // Clear form inputs
  workoutForm.reset();

  // Hide the workout form
  closeForm();

  // Generate updated workout history cards
  createWorkoutElement({ workoutDate, startTime, endTime, easy, moderate, difficult, style });
});
