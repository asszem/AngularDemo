export class Model {
    user;
    items;

    constructor() {
        this.user = 'András';
        this.items = [
            new TodoItem('Fix layout', false),
            new TodoItem('Implement json-server', false),
            new TodoItem('Make todolist changes persistent', false),
            new TodoItem('Implement todolist', true)];
    }
}

export class TodoItem {
    itemDescription;
    itemCompleted;

    constructor(description, status) {
        this.itemDescription = description;
        this.itemCompleted = status;
    }
}
