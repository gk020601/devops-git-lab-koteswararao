# API Documentation

## TaskManager Class

### Methods

#### addTask(task)
- **Description**: Adds a new task to the task list
- **Parameters**: 
  - task (string): The task description
- **Returns**: void

#### completeTask(id)
- **Description**: Marks a task as completed
- **Parameters**: 
  - id (number): The task ID
- **Returns**: boolean - true if successful, false if task not found

#### getTasks()
- **Description**: Returns all tasks
- **Returns**: Array of task objects
