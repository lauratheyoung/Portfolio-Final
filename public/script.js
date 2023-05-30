document.addEventListener('DOMContentLoaded', () => {
  // to make sure js executes after DOM loads

  const addWorkoutButton = document.querySelector('#addWorkout');
  const form = document.querySelector('#form');
  const formGroup = document.getElementById('userWorkoutForm');
  const popupContainer = document.querySelector('.congrats-popup');
  const popup = document.getElementById('congrats');
  const overlay = document.getElementById('overlay');
  const workoutHistoryButton = document.querySelector('#workoutHistory');
  const workoutCardContainer = document.querySelector("#entryCard");
  let workout = [];


  // Load workout data from local storage
  const storedWorkoutData = localStorage.getItem('workoutData');
  if (storedWorkoutData) {
    const parsedWorkoutData = JSON.parse(storedWorkoutData);
    if (Array.isArray(parsedWorkoutData)) {
      workout.push(...parsedWorkoutData);
    } else {
      workout.push(parsedWorkoutData);
    }
  }

  // taking in workout entry data and creating an entry object to store using localStorage & using JSON to condense data into string

  const addWorkoutEntry = ( workoutDate, startTime, endTime, easy, moderate, difficult, style) => {
  

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
  
  // this checks and returns the associated workout difficulty-level of each workout entry
  const getDifficultyLevel = (easy, moderate, difficult) => {
    if (easy) {
      return 'Easy';
    } else if (moderate) {
      return 'Moderate';
    } else if (difficult) {
      return 'Difficult';
    }

    return 'Unknown';
  };

  

  const createWorkoutElement = ({ workoutDate, startTime, endTime, easy, moderate, difficult, style }) => {
    // Create card container
    const cardContainer = document.createElement('div');
    cardContainer.classList.add('entryCard');
  
    // Set background color
    cardContainer.style.backgroundColor = '#E0C1FF';
  
    // Create text elements
    const workoutDateElement = document.createElement('h1');
    const workoutStartTimeElement = document.createElement('p');
    const workoutEndTimeElement = document.createElement('p');
    const difficultyLevelElement = document.createElement('p');
    const workoutJumpTypeElement = document.createElement('p');
  
    // Set text content
    workoutDateElement.innerText = "Workout Date: " + workoutDate;
    workoutStartTimeElement.innerText = "Start-time: " + startTime;
    workoutEndTimeElement.innerText = "End-time: " + endTime;
    difficultyLevelElement.innerText = "Workout Difficulty: " + getDifficultyLevel(easy, moderate, difficult);
    workoutJumpTypeElement.innerText = "Jump-Type: " + style;
  
    // Set text color
    workoutDateElement.style.color = 'black';
    workoutStartTimeElement.style.color = 'black';
    workoutEndTimeElement.style.color = 'black';
    difficultyLevelElement.style.color = 'black';
    workoutJumpTypeElement.style.color = 'black';
  
    // Append text elements to card container
    cardContainer.append(workoutDateElement, workoutStartTimeElement, workoutEndTimeElement, difficultyLevelElement, workoutJumpTypeElement);
  
    // Append card container to workout card container
    workoutCardContainer.appendChild(cardContainer);
    workoutCardContainer.style.display = "none";
  
    // Apply styling to dynamically generated cards
    
    workoutCardContainer.style.flexWrap = "wrap";
    workoutCardContainer.style.justifyContent = "space-between";
  };
  

  // open workout history functionality
  let formCloseButton = null;
  let workoutHistoryCloseButton = null;

  const openForm = () => {
    form.classList.add('active');
    if (!formCloseButton) {
      formCloseButton = document.createElement('button');
      formCloseButton.classList.add('close-button');
      formCloseButton.innerHTML = '&times;';
      formCloseButton.addEventListener('click', closeForm);
      overlay.appendChild(formCloseButton);
    }
    
    overlay.classList.add('active');
    
  };

  // open workout history functionality
  const openWorkoutHistory = () => {
    const storedWorkouts = localStorage.getItem('workoutData');
    if (storedWorkouts) {
      const workout = JSON.parse(storedWorkouts);
      workoutCardContainer.innerHTML = '';

      if (Array.isArray(workout)){
        workout.forEach((entry) => {
          createWorkoutElement(entry);
      });
    } else{
        createWorkoutElement(workout);
      }

    }
    // Show the workoutCardContainer
    workoutCardContainer.style.display = 'flex';
      
    overlay.classList.add('active');
    if (!workoutHistoryCloseButton) {
      workoutHistoryCloseButton = document.createElement('button');
      workoutHistoryCloseButton.classList.add('close-button');
      workoutHistoryCloseButton.innerHTML = '&times;';
      workoutHistoryCloseButton.addEventListener('click', closeWorkoutHistory);
      overlay.appendChild(workoutHistoryCloseButton);
    }

  };

  const closeForm = () => {
    overlay.classList.remove('active');
    form.classList.remove('active');
    if (formCloseButton) {
      formCloseButton.remove();
      formCloseButton = null;
      
    }
    
  };

  const closeWorkoutHistory = () => {
    overlay.classList.remove('active');
    workoutCardContainer.innerHTML = '';
    if (workoutHistoryCloseButton) {
      workoutHistoryCloseButton.remove();
      workoutHistoryCloseButton = null;
    }
  };

  function openPopup() {
    overlay.classList.add('active');
    popupContainer.classList.add("active");
    
  }

  function closePopup() {
    popupContainer.classList.remove("active");
    overlay.classList.remove('active');
  }
  
  // add workout button functionality
  addWorkoutButton.addEventListener('click', () => {
    openForm();
  });
  // display workout history
  workoutHistoryButton.addEventListener('click', () => {
    openWorkoutHistory();
  });

  // form submission
  formGroup.addEventListener('submit', (e) => {
    e.preventDefault();
  
  
    const workoutDate = formGroup.elements['user-workout-date'].value;
    const startTime = formGroup.elements['user-workout-start-time'].value;
    const endTime = formGroup.elements['user-workout-end-time'].value;
    const easy = document.getElementById('easy-input').checked; // Update the IDs for the difficulty inputs
    const moderate = document.getElementById('moderate-input').checked;
    const difficult = document.getElementById('difficult-input').checked;
    const style = formGroup.elements['user-jump-types'].value;
    
    console.log('Workout Date:', workoutDate);
    console.log('Start Time:', startTime);
    console.log('End Time:', endTime);
    console.log('Easy:', easy);
    console.log('Moderate:', moderate);
    console.log('Difficult:', difficult);
    console.log('Style:', style);
  
    addWorkoutEntry(workoutDate, startTime, endTime, easy, moderate, difficult, style);
    
    createWorkoutElement({ workoutDate, startTime, endTime, easy, moderate, difficult, style });
    // Store form data in local storage
    localStorage.setItem('workoutData', JSON.stringify(workout));
  
    formGroup.reset();
    openPopup();

    setTimeout(() => {
      closePopup();
    }, 3000);

    closeForm();

    

  });

  

  

  


});
    

