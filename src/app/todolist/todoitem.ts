export class TodoItem {
    id: String;
    description: String;
    status: boolean;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
