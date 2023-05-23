const addWorkoutButton = document.querySelector('#addWorkout');
const form = document.querySelector('#form');
const overlay = document.getElementById('overlay');
const closeButton = document.querySelector('.form-header .close-button');
// const saveWorkoutButton = document.querySelector('#saveWorkout');

// Event listeners
addWorkoutButton.addEventListener('click', () => {
  openForm();
});

closeButton.addEventListener('click', () => {
  closeForm();
});

// saveWorkoutButton.addEventListener('click', () => {
//   saveWorkout();
// });

// Functions
function openForm() {
  form.classList.add('active');
  overlay.classList.add('active');
}

function closeForm() {
  form.classList.remove('active');
  overlay.classList.remove('active');
}


// Show the workout history


// Show the workout history


// Handle the form submission


// Get form values


// convery jumpTypes NodeList to an array


// Perform calculations


// Create workout entry object


// Add entry to the workout history


// clear form inputs


// hide the workout form


// generate updated workout history cards


// generate workout history cards


// show workout details


// custom function to calculate workout duration


// implement calculation logic


// custom function to calculate calories burnt

// implement calculations logic


// adjust calories based on jump type


// add more conditions for other jump types if needed

