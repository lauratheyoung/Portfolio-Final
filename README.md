# Portfolio-Final
This is the final project for DECO2017.

README for SkipMe Web App

Laura Young
Github: https://github.com/lauratheyoung/Portfolio-Final

Deployment:

For successful deployment of SkipMe, the most recent versions of express.js and node.js have to be installed. These versions were used for this project: "express": "^4.17.1", "node": "^18.16.0" (includes npm 9.5.1). Then open your terminal and enter “node server.js” and a message in the console should appear stating: App server is running on port 5500. Then open your browser, preferably Chrome or Opera, and enter in the localhost address: http://localhost:5500/ . You should now see the SkipMe web-app interface. Happy skipping!

Dev Diary Entries:

Entry #1: Initial HMTL

The first day of working on this project, led me to building the HML scaffolding of the site. The first HTML draft was incomplete and was not the best HTML structure for the web-app, but I thought it was important to get started early and get something down for the project.

Entry #2: Initial HTML + CSS Start

The second day I worked on improving the HTML and starting the CSS. I changed the HTML structure drastically and added containers for all design elements. These steps will help with later styling and functionality. The CSS first implemented is not responsive, as I wanted to first display everything correctly before adding the responsiveness to the page. 

Entry #3: GitHub Debugging + CSS

I had some problems with uploading new branches to Github. This took some time to debug and I ended up  having to start a new repository for the whole project. I then had to reupload the files in their different stages and then continued working on the CSS and HTML.

Entry #4: Commenting + JS Start

I started to work on the functionality of the Add Workout button and worked on additional commenting. The first strategy I applied to tackling the problem of pop-ups and button functionality, was using a toggleVisibility function to change the display with conditional statements. I thought this could then be utilised throughout all the different buttons and pop-up displays and therefore increase the efficiency of the web-app code.

I wanted to create a roadmap in the file for each stage of development. I thought this would be useful because it would help me better understand in the file where I was up to in my development journey, so I added comments in the js file of every feature to buildout. 

Entry #5: Add Workout Functionality

I changed tactics the next day, as I was encountering a problem with my original code as the form was not displaying. So I decided to use an “active” class for the form and overlay features of the popup. I then hooked up the button so that the form would display correctly using an eventListener to listen for a ‘click’ event. I used the active classes to help toggle the visibility of the pop-ups and features, so they would be displayed when expected in the app. 

Entry #6: Form Styling

It was important to work on the form styling, especially since the new development functionality used styling properties to display features. This took some time and adjustments to get right. It was not perfect, but it was functional and close to the end-result. This will need to be updated to make sure the styling is responsive and so it matches the original design. 


Entry #7: Working on Server Build

This took some time for me to get my head around. I installed npm, parcel, express.js & node.js. Then after some online tutorials and reading through documentation I started to develop my server.js file. Eventually, after some hours of debugging, I returned to the Wk6 Tutorial and Lecture content which helped me flush out my server.js file. This process took me two days until it was working correctly. I learnt a lot along the way. The server was running and I was able to visit the page at its given local host address. Additionally, I implemented the correct file system for the web app and added a public folder and a gitignore. I also added the package.JSON files so that I could use local storage effectively in the next stage of development.

Entry #8: Local Storage Implementation

The local storage buildout was necessary to store the form data and then be able to access it when displaying the entries. This took some time to build out. I realised I needed to store each entry as a data object and then push it to stringify it using .JSON property. By stringifying the data, the data becomes more manageable for local storage as it reduces the complexity of the data type. As the object was successfully stored, I started to work on the dynamic display that will be generated after clicking the Workout History. So, I created a function to make HTML elements for the entries. I then appended all the elements to a created div to store all the card entry elements for later styling. There was an added complexity as the data type for difficulty level was unique. Therefore, each card had to assign a boolean value to determine which level of difficulty was selected for each form entry.

I then had to retrieve the workoutData, I then pushed the data and parsed it. The parsed workout data was then stored under a new variable, storedWorkoutData. This would undo the stringify property, so that I would work with the entry as an object within js.  I then added the save button functionality to the form, so that the web app can send the form data being saved. I had to use the preventDefault method to bypass the automatic form submission behaviour. I then retrieved each of the data types and called upon the addWorkoutEntry function I created to turn the retrieved data into an object within the submission. Then reset the form, create the workout entry elements and then finally close the form. 

During this stage, I had to watch a few tutorials, read relevant documentation and videos so that I could implement this functionality to the web-app. I also returned to our tutorial and lecture content to finalise my development strategy. This took a few days to finalise, but I got it working and was able to move onto the next stage.


Entry #9: Developing the Dynamic Card Display and Styling

This was a challenge, as the web-app got more complex, it was harder to add new functionality to the program. So, constant debugging was needed as I continued to add features to the app. I added a function to the entry js file as they were using with the DOM loading. I made a DOMContentLoaded () function so that all elements are parsed in the HTML document and all deferred scripts are loaded. This helps the js. File to load at the preferred time, so errors won’t occur due to the HTML not loading fully and therefore the js file calling upon a null element. 

I added additional styling within the js createElement function, so that the cards would display as preferred. Additionally, I added an eventListener for the workoutHistory button so that when clicked it would display the entry cards and overlay. I added a conditional statement so that the cards will only display if there are storedWorkouts (entries) in local storage. There were some redundancies in this code, as I had to recall and reassign the storedWorkout entries variable. This will be later rectified, to remove this said redundancy. I also added a close button to the display. But this was not functioning as desired and needed to be updated. 

Entry #10:  Debugging the Close Buttons

The close buttons were not working properly. This took me two-days to debug as I was having major issues with my program. To diagnose the issue, I first inspected the HTML and JavaScript code related to the close buttons. I verified that the event listeners were correctly attached to the close buttons and that the corresponding functions were being called upon click. After reviewing the code, I discovered that the close buttons were not targeting the correct elements to close the la¥outs as expected. In the workout entry form, the close button was targeting the wrong element, resulting in no action when clicked. To fix this issue, I adjusted the targeting of the close buttons. In the workout entry form, I updated the event listener to target the form element itself for closure. This change ensured that clicking the close button would correctly close the form. 

Additionally, to further improve the program, I reorganised the file and placed the functions  in a more compatible order. This ensured that the file was read correctly and effectively for the program's purpose. 

In conclusion, the debugging session focused on resolving issues related to the close buttons in the web app and organisation of the file. By targeting the correct elements,  adjusting the event listeners, and by rearranging the functions placement in the file,  I successfully fixed the problem, allowing users to close the form and layouts effortlessly. This debugging process improved the overall functionality and usability of the application additionally improving the file structure for efficient firing of the app. 



Entry #11: Debugging Local Storage + Displays


The focus of this developmental stage was debugging the local storage functionality and the workout history display in the SkipMe app. The goal was to ensure that workout data is stored and retrieved correctly from local storage, and that the workout history is displayed accurately. 

To begin, I examined the js code related to local storage. I noticed that the workout data is stored as an array in local storage. Upon retrieving the stored data, I parsed it back into an array  format using JSON. However, I encountered an issue where the stored data was not properly pushed into the ‘workout’ array which led to empty data variables being displayed in the workout history cards. 

To resolve this issue, I modified the code by checking if the parsed workout data is an array using the ‘Array.isArray()' method. If it is an array, I used the spread operator to push its elements into the 'workout' array. Otherwise, if it's a single entry, I directly push it into the 'workout' array. This adjustment ensures that the retrieved workout data is correctly added to the array and the cards display the relevant data values. 

Next, I tackled the workout history display functionality. Upon clicking the Workout History button, the app should retrieve the stored workout data, create workout history elements dynamically, and display them on the page. However, I discovered a bug where the cards were not displaying correctly. 

Upon further inspection, I identified that the card container element was not set to display as a flex container, causing the workout history elements to stack vertically instead of horizontally. I adjusted the CSS styling of the container to have ‘flex-wrap: wrap’ and ‘justify-content: space-between’ properties. This modification allowed the workout history elements to display in a row-like fashion with appropriate spacing.

Additionally, I discovered a minor bug where the container was not hidden by default. To address this, I set its display property to ‘none’ initially, and updated it to ‘flex’ when displaying the workout history. 

After implementing these fixes, I tested the app again. Now, the workout data is correctly stored in local storage, and the workout history is displayed correctly. The elements are arranged horizontally with proper spacing, providing a visually appealing and organised presentation of the user’s workout data. 


Entry #12: Adding Pop-up Functionality

The form submission congratulations pop-up was the next stage in my development roadmap. I wanted the popup to work the same way as the other feature layout using the active class. I initially thought this would be easy, but it took a while to integrate the code into the program but eventually it worked. These were the steps I took to successfully build the pop-up functionality within the js file. 

Declaring and Initialising Variables:
I added a new variable popupContainer to select the pop-up container element with the class "congrats-popup". This element will hold the content of the pop-up window
Updated the popup variable to select the specific pop-up element with the id "congrats"
Implementing the openPopup() Function:
Created a new function called openPopup to show the pop-up window to the user.
Inside the function, I added the following functionality:
Set the class "active" to the popupContainer element to display it on the screen.
Added the class "active" to the overlay element to create a translucent background.
Implementing the closePopup() Function:
Created a new function called closePopup to close the pop-up window.
Inside the function, I added the following functionality:
Removed the class "active" from the popupContainer element to hide it from the screen.
Removed the class "active" from the overlay element to remove the translucent background.
Updating the Submission Event Listener:
Modified the event listener for form submission (formGroup.addEventListener('submit', (e) => { ... })) to include the following changes:
Called the openPopup function after the workout entry has been added and the workout card has been created.
Added a timeout using setTimeout to automatically call the closePopup function after 3000 milliseconds (3 seconds).
Moved the closeForm function call after the pop-up window functionality to ensure the form is closed only after the pop-up is displayed.

These steps allowed the pop-up feature to successfully display and hide itself when expected. This feature was successfully added to the web app and SkipMe is closer to being fully functional. 

Entry #13: Adding the Streak Counter

The development stage, I focused on implementing a streak counter feature to track the current consecutive days the user completes a workout. This is based on the log entries. The streak counter will be displayed on the UI, providing visual motivation and encouragement. This feature took a lot of time to integrate into the program as it has to calculate a value using the stored user workout entries. These were the steps I took to develop the streak feature. 

Declaring and Initialising Variables:
Added a new variable streakCounter and set it to 0. This variable will keep track of the current streak count.
Selected the streak counter element in the HTML file using document.querySelector and stored it in the streakCounterElement variable.

Updating the Workout Entry Function:
Modified the addWorkoutEntry function to include the following changes:
After adding the workout entry to the workout array and saving it to the local storage, I called a new function updateStreakCounter to update the streak counter.

Implementing the updateStreakCounter Function:
Created a new function called updateStreakCounter to update the streak counter value and display it on the UI.
Inside the function, I added the following functionality:
Incremented the streakCounter variable by 1.
Updated the text content of the streakCounterElement to display the new streak count.

Loading the Streak Counter Value:
Added code to load the previous streak count from the local storage and update the streakCounter variable accordingly.
The previous streak count is retrieved from the local storage using localStorage.getItem and parsed from a string to a number using parseInt.

Updating the UI Intialisation ~ Modified the UI initialization code to include the following changes:
After loading the previous streak count, I called the updateStreakCounter function to display the streak count on the UI.

Added a conditional statement to determine whether to display the word ‘streak’ or ‘streaks’ given the calculated value:
By providing a streak counter feature, the user can now track their consecutive workouts. This gamification feature will help the user stay motivated to maintain their fitness routine. The streak container is updated each time a workout entry is added, ensuring that the user’s progress is accurately reflected. The streak count is also stored in local storage to persist across sessions, allowing users to resume their streak even after closing the application. 

Entry #14: Custom Calculation Implementation

The challenge today was to design functions that calculate both the duration of the workout and the calories burnt. The duration calculation was easy as it only takes in the start time and end time of the workout. However, the integration of this function into the program took some time to figure out. The variables for duration and calories had to be passed through the function createWorkoutElement, but it could not be displayed so an inner text property was not used. The values, additionally had to be passed through the createDetailedWorkoutCard function and displayed here. So an element was dynamically generated within the function to make sure the target behaviour was achieved. These values also had to be added to the createWorkoutEntry() so that the values could be stored and accessed from local storage. 

 The calorie calculator was more complex as its calculation was determined on the workout duration, jump style and recorded difficulty level. Initially, research had to be conducted into base point calories burnt during skipping. Then, by examining the differences between different styles. There was limited information available regarding the different styles, so estimated values were placed for unknown style averages. It was determined that between 15-20 calories were burnt per minute during single-unders so, the easy and difficult levels were estimated as 5 calories +/- of  the moderate level which was 17.5 cals/min. The function designed used nested conditional statements, for the the inputs to be compared until matching conditions were met and a calculation based on the determined values was returned. 

Entry #15: Detailed Card Layout Implementation

After building the other pop-up windows, this feature was quick and simple to implement. I created a createDetailedCardLayout() which was similar to the createWorkoutElement(). It dynamically generated elements for the layout and retrieved relevant data to further fill the popup. Additionally, a container for the popup is passed as a parameter for the function, so that all elements could be appended to the final container. By passing a container parameter, you can dynamically specify the target element where the detailed workout information should be rendered. This allows for flexibility and reusability of the function. When there are multiple workouts this is handy because the detailed information will correspond to the clicked card and will be rendered within the correct container. I used the same technique I used with other windows to toggle the visibility through the use of the ‘active’ class in my CSS.  


Entry #16: Final CSS Responsiveness Adjustments + Launch

Finally, I added media queries and minor tweaks to make sure my web-app was responsive to mobile screen sizes. Through the use of scalar units, I was able to adjust my element sizing so that it aligned with best practices. 

Media Queries: I leveraged media queries to apply specific CSS rules based on different screen sizes. Media queries allowed me to define different styles for various breakpoints, such as small screens, medium screens, and large screens. By utilising media queries effectively, I could create a fluid and flexible layout that adapts to the available screen space.

Flexible Units and Grids: To make my application more responsive, I utilised flexible units like percentages and viewport-relative units (such as vw and vh) instead of fixed pixel values. This approach enabled the elements to scale proportionally based on the screen size. Additionally, I implemented CSS grids and flexbox to create responsive and flexible layouts that automatically adjust the placement of elements based on available space.

Testing and Refinement: Throughout the process, I continuously tested my application on different devices and screen sizes. I used browser developer tools to simulate various screen resolutions and ensured that my application rendered correctly and provided an optimal user experience across different devices.


Lessons Learnt:

Understanding local storage and accessing data

1. As the program grew in complexity, the accessing and storing of data became more difficult to integrate. Thus, functions’ arguments/parameters and contents needed to be adjusted as new data needed to be captured and manipulated. To mitigate the inevitable confusion, it is handy to draw or document the all functions in terms of their inputs, outputs, & tasks performed within the body of the function you are working on. This makes later updates easier.

2. When dealing with a category data type using local storage, each category has to be passed with a boolean value assigned. A function can then be created to sort the booleans and return the true value. This was critical information for handling the difficulty level data type.

Transforming data through custom calculations

1. Draw or outline your mathematical rules first before designing the function. When developing the customCalculation function, I drew a tree diagram to represent and organise the variables. This created the rope logic for the function, as the style and difficulty level had to be determined before applying the calculation.

2. Using loops to determine consecutive workout days for the streaks counter. By creating a for-loop to iterate through the workout array, each time and day difference can be calculated. These values can then be passed through a conditional statement to determine if the streak has ‘broken’. Otherwise, the function will continue to count the streak. Then the local storage is updated for workoutStreak to be then accessed and displayed on the badge. 



Debugging and problem-solving

1. Understanding how to break-down problems into workable amounts when debugging large projects. This was crucial learning as it saved me countless hours in the debugging process. For example, when debugging to understand why my duration and calories values were undefined, I realised that I need to apply this strategy. First, I wrote out all the functions that used the problem-matic variables. Then I defined what each function did, this helped me to narrow the scope of the issue. Then I broke down the stages of the variable: calculation, storage, display. Through console.log statements and using the dev tools, I was able to determine the root cause was in the display. Then I returned to my functions list and found the correlating functions. From there, I used console.log statements to understand the variables behaviour within that function. Through breaking down the problem, I was able to identify the issue and correct it.

2. Using console.log to “peer” into functions. As the app became more complex, this became much more needed. By console logging variables, you gain insight into their behaviour through their stored values. 

3. Using documentation, web-sources, stackOverflow, youtube tutorials to help debug and learn critical information about function, properties, methods etc. Researching and using extra resources during development were pivotal for me to successfully launch this web-app.

The importance of commenting and organising your files + file content

1. I made the mistake of not organising my files correctly at the beginning. This led to a huge bump in my developmental process. I had to go back and fix my files in the middle of the sprint. This was taxing as I had to change file paths and encountered unusual errors along the way. By organising your files correctly at the start of your project, you can avoid this issue and save a lot of time.

How to toggle visibility of windows 

1. Toggling visibility was quite simple, but sometimes tricky when linking the js and the css. By making an active class, I was able to use the same methodology across all my popups and access that class in both files.

Attention to detail

1. By constantly checking your working code, you can catch errors and avoid time spent debugging in future. By checking-as-you-go you can be more efficient as a developer. 


Drawing diagrams to understand the element environment

1. At points in my development process, I had to draw the element, object or function environment so I could better visualise its functionality and context in the program. This was crucial to help me brainstorm and debug my code, especially as the project grew more complex. 


Future Improvements:

Adding the image likert scale
Adding the animations
Adding a loading screen
User profiles
Calendar feature
Security
Database implementation





