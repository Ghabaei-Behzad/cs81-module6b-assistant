// Behzad Ghabaei
// CS 81 - JavaScript
// Assignment 6B - assistant.js
// Instructor Seno
// 1/21/2026
/*
function PersonalAssistant(name) {
this.name = name;
  this.tasks = [];
  this.mood = mood;
}
PersonalAssistant.prototype.addTask = function(task) {
  this.tasks.push(task);
}
PersonalAssistant.prototype.completeTask = function(task) {
  this.tasks.pop();
  console.log(task);
}
PersonalAssitant.prototype.reportMood = function() {
 console.log("Current mood: ", this.mood);
}
let simulate = new PersonalAssistant("Hello My name is Siri, I am your personal Assistant");
simulate.reportMood();
simulate.addTask("You need to check corsair connect");
simulate.addTask("Send a selfie to your friends");
simulate.addTask("You have 45 minutes before the store will close.");
simulate.addTask("Time to do laundry, check for detergent");
simulate.completeTask();
*/
/**
 * assistant.js
 * A constructor function for a Personal Assistant
 */

function PersonalAssistant(name) {
    this.name = name;
    this.tasks = [];
    this.mood = "productive";

    // Adds a new task to the array
    this.addTask = function(task) {
        this.tasks.push(task);
        console.log(`[System] Task added: "${task}"`);
    };

    // Removes the first task and logs it
    this.completeTask = function() {
        if (this.tasks.length > 0) {
            const completed = this.tasks.shift();
            console.log(`[Success] Finished task: "${completed}"`);
        } else {
            console.log("[Notice] No tasks left to complete!");
        }
    };

    // Prints the current mood to the console
    this.reportMood = function() {
        console.log(`[Status] ${this.name} is currently feeling: ${this.mood}`);
    };
}

// --- Simulation of a day in January 2026 ---

// 1. Introduce the assistant
const myAssistant = new PersonalAssistant("Echo-01");
console.log(`Hello! I am ${myAssistant.name}, your personal assistant for the week.`);

// 2. Report initial mood
myAssistant.reportMood();

// 3. Add at least 3 real tasks
myAssistant.addTask("Review 2026 photos and send to friends");
myAssistant.addTask("Schedule appointment for Thursday");
myAssistant.addTask("Pick up groceries because the store closes soon");

// 4. Complete 1-2 tasks
myAssistant.completeTask();
myAssistant.completeTask();

// 5. Update and report mood after working
myAssistant.mood = "satisfied";
myAssistant.reportMood();



