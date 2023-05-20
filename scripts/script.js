// DOM elements

// const addWorkoutBtn = document.getElementById('addWorkout');
// const workoutHistoryBtn = document.getElementById('workoutHistory');
// const addWorkoutForm = document.getElementById('workoutFormContainer');
// const workoutHistory = document.getElementById('workoutHistory');


// const addWorkoutButton = document.querySelectorAll('[data-form-target]')
// const closeButton= document.querySelectorAll('[data-close-button]')
// const overlay = docutment.getElementbyId('overlay')


// addWorkoutButton.forEach(button => {
//     button.addEventListener('click', () => {
//         const form = document.querySelector(button.dataset.formTarget)
//         openForm(form)
//     })
// })

// closeForm.forEach( button => {
//     const form = button.closest('.form')
//     // selecting parent w/ class form
//     closeForm(form)

// })

// function openForm(form){
//     if (modal == null) return 
//     form.classList.add('active')
//     overlay.classList.add('active')
    
// }

// function closeForm(form){
//     if (modal == null) return 
//     form.classList.remove('active')
//     overlay.classList.remove('active')

// }

// DOM elements
// DOM elements

// DOM elements
const addWorkoutButton = document.querySelector('#addWorkout');
const form = document.querySelector('#form');
const overlay = document.getElementById('overlay');
const closeButton = document.querySelector('.form-header .close-button');

// Event listeners
addWorkoutButton.addEventListener('click', () => {
  openForm();
});

closeButton.addEventListener('click', () => {
  closeForm();
});

// Functions
function openForm() {
  form.classList.add('active');
  overlay.classList.add('active');
}

function closeForm() {
  form.classList.remove('active');
  overlay.classList.remove('active');
}

// Close form when the overlay is clicked
overlay.addEventListener('click', () => {
  closeForm();
});






// workout entries data (stored locally or in a database)


// add eventListeners to buttons

// addWorkoutBtn.addEventListener('click', toggleFormVisibility);

// Toggle visibility of elements

// function toggleFormVisibility() {
//     // toggle the display property of the form container
//     if (workoutFormContainer.style.display === 'none'){
//         workoutFormContainer.style.display === 'block';
//     } else {
//         workoutFormContainer.style.display ='none';
//     }
// }


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

