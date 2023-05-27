document.addEventListener('DOMContentLoaded', () => {
  // to make sure js executes after DOM loads

  const addWorkoutButton = document.querySelector('#addWorkout');
  const form = document.querySelector('#form');
  const overlay = document.getElementById('overlay');
  const closeButton = document.querySelector('.form-header .close-button');
  const workoutHistoryButton = document.querySelector('#workoutHistory');
  const workoutCardContainer = document.querySelector("#entryCard");
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

  const closeWorkoutHistory = () => {
    overlay.classList.remove('active');
    workoutCardContainer.innerHTML = '';
    const cardCloseButton = document.querySelector('.workoutHistoryLayout .close-button');
    if (cardCloseButton) {
      cardCloseButton.remove();
    }
  };

  const createWorkoutElement = ({ workoutDate, startTime, endTime, easy, moderate, difficult, style }) => {
    // Create card container
    const cardContainer = document.createElement('div');
    cardContainer.classList.add('entryCard');

    // Set background color
    cardContainer.style.backgroundColor = '#E0C1FF';

    // create text container
    const cardContainerText = document.createElement('div');

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

    cardContainerText.append(workoutStartTimeElement, workoutEndTimeElement, difficultyLevelElement, workoutJumpTypeElement);

    cardContainerText.style.backgroundColor = 'white';
    cardContainerText.style.padding = "10px";

    // Append text elements to card container
    cardContainer.append(workoutDateElement, cardContainerText);

    // Append card container to workout card container
    workoutCardContainer.appendChild(cardContainer);

    // styling applied to dynamically generated cards
    workoutCardContainer.style.display = "flex";
    workoutCardContainer.style.flexWrap = "wrap";
    workoutCardContainer.style.justifyContent = "space-between";
  };

  // this checks and returns the associated workout difficulty-level of entries

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

  // close button for workout history
  const cardCloseButton = document.createElement('button');
  cardCloseButton.classList.add('close-button');
  cardCloseButton.innerHTML = '&times;';

  // event listener for close button
  cardCloseButton.addEventListener('click', () => {
    closeWorkoutHistory();
  });

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

  // form submission
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const workoutDate = document.getElementById('workoutDate').value;
    const startTime = document.getElementById('startTime').value;
    const endTime = document.getElementById('endTime').value;
    const easy = document.getElementById('easy').checked;
    const moderate = document.getElementById('moderate').checked;
    const difficult = document.getElementById('difficult').checked;
    const style = document.getElementById('style').value;
    addWorkoutEntry(workoutDate, startTime, endTime, easy, moderate, difficult, style);
    createWorkoutElement({ workoutDate, startTime, endTime, easy, moderate, difficult, style });
    closeForm();
    workoutForm.reset();
  });

  // display workout history
  workoutHistoryButton.addEventListener('click', () => {
    const storedWorkouts = localStorage.getItem('workoutData');
    if (storedWorkouts) {
      const workouts = JSON.parse(storedWorkouts);
      workoutCardContainer.innerHTML = '';
      workouts.forEach((entry) => {
        createWorkoutElement(entry);
      });
      overlay.classList.add('active');
      overlay.appendChild(cardCloseButton);
    }
  });
});
