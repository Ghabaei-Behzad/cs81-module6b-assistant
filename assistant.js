// Behzad Ghabaei
// CS 81 - JavaScript
// Assignment 6B - assistant.js
// Instructor Seno
// 1/21/2026

/**
 * assistant.js
 * A constructor function for a Personal Assistant
 * "this" keyword refers to the current object 
 * i.e.: this.name is Jarvis-01, or Samuel-8 ("simulate")
 */

function PersonalAssistant(name) {
    this.name = name;
    this.tasks = [];
    this.mood = "productive and ready to help";

    // Adds a new task to the array with the push method
    PersonalAssistant.prototype.addTask = function(task) {
        this.tasks.push(task);
        console.log(`[System] Task added: "${task}"`);
    };

    /**
    * Removes the first task and logs it, 
    * uses length method to check for empty array.
    * uses shift method to remove first element with
    * a const called "completed" returned and printed out.
    */
    PersonalAssistant.prototype.completeTask = function() {
        if (this.tasks.length > 0) {
            const completed = this.tasks.shift();
            console.log(`[Success] Finished task: "${completed}"`);
        } else {
            console.log("[Notice] No tasks left to complete!");
        }
    };

    // Prints the current mood to the console, using the keyword "this"
    // this.name and this.mood
    PersonalAssistant.prototype.reportMood = function() {
        console.log(`[Status] ${this.name} is currently feeling: ${this.mood}`);
    };
}

/** 
* Prints a formatted list of all remaining tasks
* prototype is used, function called listTasks
* uses the length method to print any tasks to console
* uses a forEach loop with parameters of task array and the index.
*/
    PersonalAssistant.prototype.listTasks = function() {
        console.log(`\n[List] Remaining tasks for ${this.name}:`);
        if (this.tasks.length === 0) {
            console.log("       No tasks remaining!");
        } else {
            this.tasks.forEach((task, index) => {
                console.log(`       ${index + 1}. ${task}`);
            });
        }
    };

// --- Simulation of a day in January 2026 ---

// 1. Introduce the assistant
const myAssistant = new PersonalAssistant("Samuel-8"); 
//keyword new is used for PersonalAssistant and object is myAssistant using dot operator.
console.log(`Hello! I am ${myAssistant.name}, your personal assistant for the week.`);

// 2. Report initial mood
myAssistant.reportMood();

// 3. Add at least 3 real tasks as Strings
myAssistant.addTask("Review 2025 electronic 1098-T statement");
myAssistant.addTask("AWS marketplace update notification, view the EULA");
myAssistant.addTask("Pick up groceries for meal this evening");

// 4. Complete 1-2 tasks
myAssistant.completeTask();
myAssistant.completeTask();

// 5. Lists the task remaining
myAssistant.listTasks();

// 6. Update and report mood after working
myAssistant.mood = "satisfied";
myAssistant.reportMood();


