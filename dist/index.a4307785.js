const addWorkoutButton=document.querySelector("#addWorkout"),form=document.querySelector("#form"),overlay=document.getElementById("overlay"),closeButton=document.querySelector(".form-header .close-button");function openForm(){form.classList.add("active"),overlay.classList.add("active")}function closeForm(){form.classList.remove("active"),overlay.classList.remove("active")}addWorkoutButton.addEventListener("click",(()=>{openForm()})),closeButton.addEventListener("click",(()=>{closeForm()}));var date=getElementById("date-label").value,sTime=getElementById("start-time-label").value,eTime=getElementById("end-time-label").value,difficulty=getElementById("difficulty-label").value,jumpType=getElementById("jump-type-label").value;date=localStorage.setItem("date",date),sTime=localStorage.setItem("sTime",sTime),eTime=localStorage.setItem("eTime",eTime),difficulty=localStorage.setItem("difficulty",difficulty),jumpType=localStorage.setItem("jumpType",jumpType),date=localStorage.getItem("date",date),sTime=localStorage.getItem("sTime",sTime),eTime=localStorage.getItem("eTime",eTime),difficulty=localStorage.getItem("difficulty",difficulty),jumpType=localStorage.getItem("jumpType",jumpType);
//# sourceMappingURL=index.a4307785.js.map
