// Behzad Ghabaei
// CS81 - JavaScript - Assignment 6B
// assistant.js
// REFLECTION.md
// Instructor Seno
// 1/21/2026

1. What made your assistant "personal" to you?
   I enjoyed the method called listTasks, which prints a formatted list of all outstanding tasks; this was a personal advantage to see what was left to do. It was useful for reviewing the current workload.  My assistant, "Samuel-8," felt personal because it was tailored to my specific workflow for this week in January 2026. By including tasks like "Look at 1098-T," the assistant attended to my needs like a digital calendar and became a reflection of my actual professional responsibilities. The addition of a "mood" property also gave the assistant a "personality" that reflected my mood during the day.  The interaction was like a partnership with a new person instead of a list of things to do.

2. What challenges did you face using this?
   The primary challenge was managing the assistant duties using only a constructor function. Also, because the data is stored in memory, all progress is lost the moment the script finishes running.  How could this program remember from session to session? (Does this pertain to JSON files or databases?) Another challenge was the shift method from "completeTask()", which only removes the first item added (FIFO), first in, last out, making it difficult to complete tasks out of order.

3. Which method would you improve or expand?
   I would probably improve the "reportMood()" method, which only prints a string. I would improve it to become a "switch-case" block, responding with different moods such as stressed, tired, productive, overwhelmed, and a default string. I would also suggest breaking a large task into smaller sub-tasks.
Lastly, the current "completeTask()" method can only remove the oldest task in the list, so I would try to complete the tasks by name with a "completeTaskByName(taskName)" method. This would allow for much more flexibility. 


