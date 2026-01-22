// Behzad Ghabaei
// CS 81 - JavaScript
// Assignment 6B - assistant.js
// Instructor Seno
// 1/21/2026

/**
 * assistant.js
 * A constructor function for a Personal Assistant
 */

function PersonalAssistant(name) {
    this.name = name;
    this.tasks = [];
    this.mood = "productive and ready to help";

    // Adds a new task to the array
    PersonalAssistant.prototype.addTask = function(task) {
        this.tasks.push(task);
        console.log(`[System] Task added: "${task}"`);
    };

    // Removes the first task and logs it
    PersonalAssistant.prototype.completeTask = function() {
        if (this.tasks.length > 0) {
            const completed = this.tasks.shift();
            console.log(`[Success] Finished task: "${completed}"`);
        } else {
            console.log("[Notice] No tasks left to complete!");
        }
    };

    // Prints the current mood to the console
    PersonalAssistant.prototype.reportMood = function() {
        console.log(`[Status] ${this.name} is currently feeling: ${this.mood}`);
    };
}

// --- Simulation of a day in January 2026 ---

// 1. Introduce the assistant
const myAssistant = new PersonalAssistant("Samuel-8");
console.log(`Hello! I am ${myAssistant.name}, your personal assistant for the week.`);

// 2. Report initial mood
myAssistant.reportMood();

// 3. Add at least 3 real tasks
myAssistant.addTask("Review 2025 electronic 1098-T statement");
myAssistant.addTask("AWS marketplace update notification, view the EULA");
myAssistant.addTask("Pick up groceries for meal this evening");

// 4. Complete 1-2 tasks
myAssistant.completeTask();
myAssistant.completeTask();

// 5. Update and report mood after working
myAssistant.mood = "satisfied";
myAssistant.reportMood();


