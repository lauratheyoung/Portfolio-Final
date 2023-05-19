// DOM elements

const addWorkoutBtn = document.getElementById('addWorkout');
const workoutHistoryBtn = document.getElementById('workoutHistory');
const addWorkoutForm = document.getElementById('workoutFormContainer');
const workoutHistory = document.getElementById('workoutHistory');

// workout entries data (stored locally or in a database)


// add eventListeners to buttons

addWorkoutBtn.addEventListener('click', toggleFormVisibility);

// Toggle visibility of elements

function toggleFormVisibility() {
    // toggle the display property of the form container
    if (workoutFormContainer.style.display === 'none'){
        workoutFormContainer.style.display === 'block';
    } else {
        workoutFormContainer.style.display ='none';
    }
}


// Show the workout form


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

