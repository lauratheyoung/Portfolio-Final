

const openPopup = () => {
  overlay.classList.add('active');
  popupContainer.classList.add("active");
  
}

document.addEventListener('DOMContentLoaded', () => {
  // to make sure js executes after DOM loads

  const addWorkoutButton = document.querySelector('#addWorkout');
  const form = document.querySelector('#form');
  const formGroup = document.getElementById('userWorkoutForm');
  const popupContainer = document.querySelector('.congrats-popup');
  const popup = document.getElementById('congrats');
  const overlay = document.getElementById('overlay');
  const streakBadge = document.getElementById('streakBadge');
  const workoutHistoryButton = document.querySelector('#workoutHistory');
  const workoutCardContainer = document.querySelector("#entryCard");
  let calories;
  let duration;
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

  function checkConsecutiveWorkout() {
    // Get the current date
    const currentDate = new Date();
    let consecutiveWorkouts = true;
    let streak = 0;
  
    // Check if there are any workout entries
    if (workout.length === 0) {
      consecutiveWorkouts = false;
    } else {
      // Iterate through the workout array starting from the most recent entry
      for (let i = workout.length - 1; i >= 0; i--) {
        const workoutDate = new Date(workout[i].workoutDate);
  
        // Calculate the time difference in milliseconds
        const timeDiff = currentDate.getTime() - workoutDate.getTime();
  
        // Calculate the difference in days
        const daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24));
  
        // If the workout date is not the same as the current date or the previous day, break the loop
        if (daysDiff !== 0 && daysDiff !== 1) {
          consecutiveWorkouts = false;
          break;
        }
  
        streak++;
      }
    }
  
    if (consecutiveWorkouts) {
      // Update streak and save it to local storage
      localStorage.setItem('workoutStreak', streak);
    } else {
      // If there was a break in the workouts, reset the streak to 0
      localStorage.setItem('workoutStreak', 0);
    }
  
    return streak; // Return the streak value
  }

  const streakDisplay = () => {
    
    const renderedInt = document.createElement('h1');
    renderedInt.id= "streakNumber";
    const streakTitle = document.createElement('h2');
    streakTitle.id= "streakTitle";
    const badgeIcon = document.createElement('img');

    // Retrieve the streak count from local storage
    const streak = checkConsecutiveWorkout();

    renderedInt.textContent = streak;
    streakTitle.textContent = streak === 1 ? 'streak' : 'streaks'; // Adjust the label based on the streak count

    badgeIcon.id = 'streaksIcon';
    badgeIcon.src = '/public/assets/streaks-DECO2017.jpg';

    streakBadge.innerHTML = ''; // Clear previous content
    streakBadge.append(renderedInt, streakTitle, badgeIcon);
  };

  streakDisplay()

  const calculateDuration = (startTime, endTime) => {
    const start = startTime.split(':');
    const end = endTime.split(':');
  
    // Extract hours and minutes
    const startHours = parseInt(start[0]);
    const startMinutes = parseInt(start[1]);
    const endHours = parseInt(end[0]);
    const endMinutes = parseInt(end[1]);
  
    // Convert hours and minutes to minutes
    const startTotalMinutes = startHours * 60 + startMinutes;
    const endTotalMinutes = endHours * 60 + endMinutes;
  
    // Calculate duration in minutes
    const durationMinutes = endTotalMinutes - startTotalMinutes;
  
    console.log('Duration: ' + durationMinutes + " minutes");
  
    return durationMinutes;
  };
  

  const calculateCalories = (style, easy, moderate, difficult, duration) => {
    let calories;
    console.log('Style:', style);
    console.log('Easy:', easy);
    console.log('Moderate:', moderate);
    console.log('Difficult:', difficult);
    console.log('Duration:', duration);
  
    if (style === 'Single-Unders') {
      console.log('Calculating calories for Single-Unders');
      if (easy === true) {
        calories = 12 * duration;
      } else if (moderate === true) {
        calories = 17.5 * duration;
      } else if (difficult === true) {
        calories = 23 * duration;
      }
    } else if (style === 'Double-Unders') {
      console.log('Calculating calories for Double-Unders');
      if (easy === true) {
        calories = 20 * duration;
      } else if (moderate === true) {
        calories = 25.5 * duration;
      } else if (difficult === true) {
        calories = 33 * duration;
      }
    } else if (style === 'Crosses') {
      console.log('Calculating calories for Crosses');
      if (easy === true) {
        calories = 17.5 * duration;
      } else if (moderate === true) {
        calories = 23 * duration;
      } else if (difficult === true) {
        calories = 28.5 * duration;
      }
    } else if (style === 'Single-Legs') {
      console.log('Calculating calories for Single-Legs');
      if (easy === true) {
        calories = 13 * duration;
      } else if (moderate === true) {
        calories = 18.5 * duration;
      } else if (difficult === true) {
        calories = 24 * duration;
      }
    } else if (style === 'Alternative Single-Legs') {
      console.log('Calculating calories for Alternative Single-Legs');
      if (easy === true) {
        calories = 15 * duration;
      } else if (moderate === true) {
        calories = 20.5 * duration;
      } else if (difficult === true) {
        calories = 36 * duration;
      }
    } else if (style === 'High Knees') {
      console.log('Calculating calories for High Knees');
      if (easy === true) {
        calories = 17.5 * duration;
      } else if (moderate === true) {
        calories = 23 * duration;
      } else if (difficult === true) {
        calories = 28.5 * duration;
      }
    } else if (style === 'Side-Swing') {
      console.log('Calculating calories for Side-Swing');
      if (easy === true) {
        calories = 15 * duration;
      } else if (moderate === true) {
        calories = 20.5 * duration;
      } else if (difficult === true) {
        calories = 26 * duration;
      }
    }
    console.log('Calories:', calories);

    return calories;
  };
  
  
  


  // taking in workout entry data and creating an entry object to store using localStorage & using JSON to condense data into string

  const addWorkoutEntry = ( workoutDate, startTime, endTime, easy, moderate, difficult, style) => {

    const entry = {
      workoutDate,
      startTime,
      endTime,
      easy,
      moderate,
      difficult,
      style,
      duration,
      calories
    };

    // Calculate the duration in minutes
    entry.duration = calculateDuration(entry.startTime, entry.endTime);
    console.log(entry.duration);

    // Calculate the calories
    entry.calories = calculateCalories(entry.style, entry.easy, entry.moderate, entry.difficult, entry.duration);
    console.log(entry.calories);

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

  // Retrieve the workout data from local storage
  const workoutData = localStorage.getItem('workoutData');

  // Parse the workout data from JSON string to an array
  workout= JSON.parse(workoutData) || [];

  // Get the latest entry
  const latestEntry = workout[workout.length - 1];
  
  
  console.log(latestEntry);


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

  
  
  const closePopup = () =>{
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

  
  function workoutEntryDisplay () {}
  
  // streak checker
  checkConsecutiveWorkout();

  
});
    

