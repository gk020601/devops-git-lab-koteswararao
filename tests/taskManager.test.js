// Basic tests for TaskManager
const TaskManager = require('../src/taskManager');

// Test 1: Create TaskManager instance
const tm = new TaskManager();
console.log('✓ TaskManager instance created');

// Test 2: Add task
tm.addTask('Learn Git fundamentals');
console.log('✓ Task added successfully');

// Test 3: Get tasks
const tasks = tm.getTasks();
console.log('✓ Tasks retrieved:', tasks.length, 'task(s)');

// Test 4: Complete task
const success = tm.completeTask(tasks[0].id);
console.log('✓ Task completion:', success ? 'SUCCESS' : 'FAILED');

console.log('All tests completed by Group Koteswararao!');
