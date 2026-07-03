import "./styles.css";

const todoList = [];
const todoProjects = [];

class todoItem {
    constructor(title, dueDate, description, priority) {
        this.id = crypto.randomUUID();
        this.title = title;
        this.dueDate = dueDate;
        this.description = description;
        this.priority = priority;
    };

    priorityState() {
        if (this.priority === true) {
            return this.priority = false;
        } else {
            return this.priority = true;
        };
    };
}
