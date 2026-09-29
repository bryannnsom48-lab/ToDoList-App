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

    // initially hides the notification button if the device 
    // if the device window permits them
    if(Notification.permission === "denied" || Notification.permission === "default"){
        notificationButton.style.display = "block";
    }
    else{
        notificationButton.style.display = "none";
    }

    // todo tasks can be up to the next 5 years from the
    // current year of the user
    const currentYear = new Date().getFullYear();
    for(let i = 0; i <= 5; i++){
        const option = document.createElement("option");
        const yearValue = currentYear + i;
        option.value = yearValue;
        option.textContent = yearValue;
        year.appendChild(option);
    }

    // Set the year field to the current year on initial load 
    year.value = currentYear;

    // Log app initial status
    notification.appendChild(createListItem("App initialized"));
    const dbOpenRequest = window.indexedDB.open("toDoList", 1);

    dbOpenRequest.onerror = () =>{
        notification.appendChild(createListItem("Failed to load the database!"));
    };

    dbOpenRequest.onsuccess = (success) =>{
        notification.appendChild(createListItem("Database opened."));
        database = success.target.result;

        // populate the task list with all the todo data already in the database
        displayData();
    };

    dbOpenRequest.onupgradeneeded = (upgradeneeded) =>{
        database = upgradeneeded.target.result;

        database.onerror = () =>{
            notification.appendChild(createListItem("Failed loading database."));
        };

        const objectStore = database.creatObjectStore("toDoList", {
            keyPath: "todoList",
        });
        
        // defines what data items the objectStore will contain so
        //  that any data entered with any of these properties is automaticallyn saved
        // createIndex(indexName, keyPath, options)
        objectStore.createIndex("hours", "hours", {unique: false});
        objectStore.createIndex("minutes", "minutes", {unique: false});
        objectStore.createIndex("day", "day", {unique: false});
        objectStore.createIndex("month", "month", {unique:false});
        objectStore.createIndex("year", "year", {unique:false});
        objectStore.createIndex("notified", "notified", {unique: false});

        notification.appendChild(createListItem("Object store created."));

    };

    function displayData() {

        
    };
    

};




