window.onload = () =>{
    const MONTHS = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
    ];

    // variables selected from the document
    const notification = document.querySelector("#notifications")
    
    // User Interface elements
    const todoList = document.querySelector("todo-list");
    const todoForm = document.querySelector("todo-form");
    const taskTitle = document.querySelector("task-title");
    const taskHours = document.querySelector("deadline-hours");
    const taskMinutes = document.querySelector("deadline-minutes");
    const taskDay = document.querySelector("deadline-day");
    const month = document.querySelector("deadline-month");
    const year = document.querySelector("deadline-year");
    const notificationButton = document.querySelector("enable");

    // a global(window) instance of the database 
    let database;



}




