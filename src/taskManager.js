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
