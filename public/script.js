
document.addEventListener('DOMContentLoaded', () => {
  // to make sure js executes after DOM loads

  const addWorkoutButton = document.querySelector('#addWorkout');
  const form = document.querySelector('#form');
  const formGroup = document.getElementById('userWorkoutForm');
  const streakBadge = document.getElementById('streakBadge');
  const workoutHistoryButton = document.querySelector('#workoutHistory');
  const workoutCardContainer = document.querySelector("#entryCard");
  const detailedCardLayout = document.querySelector('.detailed-card');
  const renderedInt = document.createElement('h1');
  const popupContainer = document.querySelector('.congrats-popup');
  const overlay = document.getElementById('overlay');
  let workout = [];
  renderedInt.id = "streakNumber";
  

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
    const streakTitle = document.createElement('h2');
    streakTitle.id = 'streakTitle';
    const badgeIcon = document.createElement('img');
  
    // Retrieve the streak count from local storage
    const streak = checkConsecutiveWorkout();
  
    renderedInt.textContent = streak;
    streakTitle.textContent = streak === 1 ? 'streak' : 'streaks'; // Adjust the label based on the streak count
  
    badgeIcon.id = 'streaksIcon';
    badgeIcon.src = 'assets/streaks-DECO2017.png';
  
    streakBadge.innerHTML = ''; // Clear previous content
    streakBadge.append(renderedInt, streakTitle, badgeIcon);
  };
  

  streakDisplay();

  const calculateDuration = (startTime, endTime) => {
    const start = startTime ? startTime.split(':') : [];
    const end = endTime ? endTime.split(':') : [];

    // check the variable has a value before splitting
  
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
  
    // console.log('Duration: ' + durationMinutes + " minutes");
  
    return durationMinutes;
  };
  

  const calculateCalories = (style, easy, moderate, difficult, duration) => {
    let calories = 0;
    
    if (style === 'Single-Unders') {
      // console.log('Calculating calories for Single-Unders');
      if (easy === true) {
        calories = 12 * duration;
      } else if (moderate === true) {
        calories = 17.5 * duration;
      } else if (difficult === true) {
        calories = 23 * duration;
      }
    } else if (style === 'Double-Unders') {
      // console.log('Calculating calories for Double-Unders');
      if (easy === true) {
        calories = 20 * duration;
      } else if (moderate === true) {
        calories = 25.5 * duration;
      } else if (difficult === true) {
        calories = 33 * duration;
      }
    } else if (style === 'Crosses') {
      // console.log('Calculating calories for Crosses');
      if (easy === true) {
        calories = 17.5 * duration;
      } else if (moderate === true) {
        calories = 23 * duration;
      } else if (difficult === true) {
        calories = 28.5 * duration;
      }
    } else if (style === 'Single-Legs') {
      // console.log('Calculating calories for Single-Legs');
      if (easy === true) {
        calories = 13 * duration;
      } else if (moderate === true) {
        calories = 18.5 * duration;
      } else if (difficult === true) {
        calories = 24 * duration;
      }
    } else if (style === 'Alternative Single-Legs') {
      // console.log('Calculating calories for Alternative Single-Legs');
      if (easy === true) {
        calories = 15 * duration;
      } else if (moderate === true) {
        calories = 20.5 * duration;
      } else if (difficult === true) {
        calories = 36 * duration;
      }
    } else if (style === 'High Knees') {
      // console.log('Calculating calories for High Knees');
      if (easy === true) {
        calories = 17.5 * duration;
      } else if (moderate === true) {
        calories = 23 * duration;
      } else if (difficult === true) {
        calories = 28.5 * duration;
      }
    } else if (style === 'Side-Swing') {
      // console.log('Calculating calories for Side-Swing');
      if (easy === true) {
        calories = 15 * duration;
      } else if (moderate === true) {
        calories = 20.5 * duration;
      } else if (difficult === true) {
        calories = 26 * duration;
      }
    }
    // console.log('Calories:', calories);

    return calories;
  };
  

  // taking in workout entry data and creating an entry object to store using localStorage & using JSON to condense data into string

  const addWorkoutEntry = ( workoutDate, startTime, endTime, easy, moderate, difficult, style) => {

    const durationValue = calculateDuration(startTime, endTime);
    const caloriesValue = calculateCalories(style, easy, moderate, difficult, durationValue);

    
    const entry = {
      workoutDate,
      startTime,
      endTime,
      easy,
      moderate,
      difficult,
      style,
      durationValue, 
      caloriesValue
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

  // Retrieve the workout data from local storage
  const workoutData = localStorage.getItem('workoutData');

  // Parse the workout data from JSON string to an array
  workout= JSON.parse(workoutData) || [];

  // Get the latest entry
  const latestEntry = workout[workout.length - 1];
  
  
  console.log(latestEntry);
  
  


  const createWorkoutElement = (entry, duration, calories) => {
    const { workoutDate, startTime, endTime, easy, moderate, difficult, style } = entry;

  
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
    const durationElement = document.createElement('p');
    const caloriesElement = document.createElement('p');
  
    // Set text content
    workoutDateElement.innerText = "Workout Date: " + workoutDate;
    workoutStartTimeElement.innerText = "Start-time: " + startTime;
    workoutEndTimeElement.innerText = "End-time: " + endTime;
    difficultyLevelElement.innerText = "Workout Difficulty: " + getDifficultyLevel(easy, moderate, difficult);
    workoutJumpTypeElement.innerText = "Jump-Type: " + style;
    // durationElement.innerText = "Duration: " + duration + " minutes";
    // caloriesElement.innerText = "Calories: " + calories;
  
    // Set text color
    workoutDateElement.style.color = 'black';
    workoutStartTimeElement.style.color = 'black';
    workoutEndTimeElement.style.color = 'black';
    difficultyLevelElement.style.color = 'black';
    workoutJumpTypeElement.style.color = 'black';


    // Append text elements to card container
    cardContainer.append(workoutDateElement, workoutStartTimeElement, workoutEndTimeElement, difficultyLevelElement, workoutJumpTypeElement, durationElement, caloriesElement);
  
    // Add event listener to the card container
    cardContainer.addEventListener('click', () => {
      openDetailedCard(entry);
    });
  
    // Append card container to workout card container
    workoutCardContainer.appendChild(cardContainer);

    workoutCardContainer.style.flexWrap = "wrap";
    workoutCardContainer.style.justifyContent = "space-between";
  };

  // add function that dynamically renders a detailed card display and specific entry selected

  const createDetailedCardLayout = (container, entry) => {
    // create the detailed card container
    const detailedCardContainer = document.createElement('div');
    detailedCardContainer.classList.add('detailedCard');
  
    // title container
    const detailedCardTitleContainer = document.createElement('div');
    detailedCardTitleContainer.classList.add('detailedCard');
    detailedCardTitleContainer.setAttribute('id', 'detailedCardTitleContainer');
  
    // information container
    const detailedCardInfoContainer = document.createElement('div');
    detailedCardInfoContainer.classList.add('detailedCard');
    detailedCardInfoContainer.setAttribute('id', 'detailedCardInfoContainer')
  

    // Calculate the duration in minutes
    const duration = calculateDuration(entry.startTime, entry.endTime);

    // Calculate the calories
    const calories = calculateCalories(entry.style, entry.easy, entry.moderate, entry.difficult, duration);
  
    // create the content elements
    const workoutDateElement = document.createElement('h2');
    workoutDateElement.textContent = 'Workout Date: ' + entry.workoutDate;
  
    const durationElement = document.createElement('p');
    durationElement.textContent = 'Workout Duration: ' + duration + " minutes";
  
    const caloriesElement = document.createElement('p');
    caloriesElement.textContent = 'Calories Burnt: ' + calories;
  
    const difficultyLevelElement = document.createElement('p');
    difficultyLevelElement.textContent = 'Difficulty Level: ' + getDifficultyLevel(entry.easy, entry.moderate, entry.difficult);
  
    const jumpStyleElement = document.createElement('p');
    jumpStyleElement.textContent = 'Jump Style: ' + entry.style;
  
    // Append the content to specific container divs
    detailedCardTitleContainer.append(workoutDateElement);
    detailedCardInfoContainer.append(durationElement, caloriesElement, difficultyLevelElement, jumpStyleElement);

    // image
    const skipRopeImage = document.createElement('img');
    skipRopeImage.classList.add('skip-rope-image');
    skipRopeImage.setAttribute('src', '/assets/skiprope.png');
    detailedCardContainer.appendChild(skipRopeImage);
    skipRopeImage.setAttribute('id', 'skip-rope-asset');
  
    // Append the content to the container element
    detailedCardContainer.append(detailedCardTitleContainer, detailedCardInfoContainer);

    // Append the detailed card container to the provided container element
    container.appendChild(detailedCardContainer);
  
    return detailedCardContainer;
  };


  
  let formCloseButton = null;
  let workoutHistoryCloseButton = null;
  

  const openDetailedCard = (entry) => {
    // Clear the existing content of detailedCardLayout
    detailedCardLayout.innerHTML = '';
  
    // Create the detailed card layout
    const detailedCardContainer = createDetailedCardLayout(detailedCardLayout, entry);
  
    // Append the detailed card container to detailedCardLayout
    detailedCardLayout.appendChild(detailedCardContainer);
  
    // Add 'active' class to detailedCardLayout and overlay
    detailedCardLayout.classList.add('active');
    overlay.classList.add('active');

    workoutHistoryCloseButton
  };
  

  // Function to close the detailed card
  const closeDetailedCard = () => {
    // Hide the detailed card window
    detailedCardLayout.classList.remove('active');
    
    // Remove event listener from document
    document.removeEventListener('click', handleOutsideClick);

  
  };

  // Function to handle clicks outside the detailed card window
  const handleOutsideClick = (event) => {
    if (!detailedCard.contains(event.target)) {
      closeDetailedCard();
    }
  };

  const openPopup = (event) => {
    event.preventDefault();
    overlay.classList.add('active');
    popupContainer.classList.add("active");
  
  }
  
  // open workout history functionality

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
          const duration = calculateDuration(entry.startTime, entry.endTime);
          const calories = calculateCalories(entry.style, entry.easy, entry.moderate, entry.difficult, duration);
          createWorkoutElement(entry, duration, calories);
        });
    } else{
        createWorkoutElement(workout, workout.duration, workout.calories);
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
      closeDetailedCard();
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
  console.log(workout);
  console.log(workoutData);

  // form submission
  formGroup.addEventListener('submit', (e) => {
    e.preventDefault();
  
    const workoutDate = formGroup.elements['user-workout-date'].value;
    const startTime = formGroup.elements['user-workout-start-time'].value;
    const endTime = formGroup.elements['user-workout-end-time'].value;
    const easy = document.getElementById('easy-input').checked;
    const moderate = document.getElementById('moderate-input').checked;
    const difficult = document.getElementById('difficult-input').checked;
    const style = formGroup.elements['user-jump-types'].value;
    const duration = calculateDuration(startTime, endTime);
    const calories = calculateCalories(style, easy, moderate, difficult, duration);
  
    console.log('Workout Date:', workoutDate);
    console.log('Start Time:', startTime);
    console.log('End Time:', endTime);
    console.log('Easy:', easy);
    console.log('Moderate:', moderate);
    console.log('Difficult:', difficult);
    console.log('Style:', style);
  
    addWorkoutEntry(workoutDate, startTime, endTime, easy, moderate, difficult, style, duration, calories);
    createWorkoutElement({ workoutDate, startTime, endTime, easy, moderate, difficult, style }, duration, calories);

    localStorage.setItem('workoutData', JSON.stringify(workout));
  
    formGroup.reset();
    openPopup(e);
  
    setTimeout(() => {
      closePopup();
    }, 2000);
  
    closeForm();
  });


  
  // streak checker
  checkConsecutiveWorkout();

  
});
    

