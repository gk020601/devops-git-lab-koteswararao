class TaskManager {
    constructor() {
        this.tasks = [];
    }

    addTask(task) {
        this.tasks.push({
            id: Date.now(),
            title: task,
            completed: false,
            createdBy: 'Koteswararao'
        });
    }
}
module.exports = TaskManager;

    completeTask(id) {
        const task = this.tasks.find(t => t.id === id);
        if (task) {
            task.completed = true;
            return true;
        }
        return false;
    }

    getTasks() {
        return this.tasks;
    }
