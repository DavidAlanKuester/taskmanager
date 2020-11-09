export class Task {
    title: string;
    category: string;
    description: string;


    constructor (obj?: any) {
        this.title = obj ? obj.title : '';
        this.category = obj ? obj.category : '';
        this.description = obj ? obj.description : '';
    }
}

