// Behzad Ghabaei
// CS 81 - JavaScript
// Assignment 6B - assistant.js
// Instructor Seno
// 1/21/2026

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
simulate.reportMood();
simulate.addTask("Send a selfie to your friends");
simulate.reportMood();
simulate.addTask("You have 45 minutes before the store will close.");
simulate.reportMood();
simulate.addTask("Time to do laundry, check for detergent");
simulate.reportMood();
simulate.completeTask();
simulate.reportMood();

