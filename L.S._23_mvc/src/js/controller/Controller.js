const URL = 'https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/todos';

class Controller{
    constructor(){
        this.collection = new Collection(URL);
        this.collection.fetch().then(() => this.list.render(this.collection.todos));

        this.list = new List({
            onDelete: this.onDelete.bind(this),
            onAdd: this.onAdd.bind(this),
            onChange: this.onChange.bind(this),
        });
    }

    onDelete(id){
        this.collection.delete(id)
            .then(() => {
                this.list.render(this.collection.todos)
            })
    }

    onAdd(title){
        this.collection.add(title)
            .then(() => {
                this.list.render(this.collection.todos)
            })
    }

    onChange($element){
        this.collection.change($element)
            .then(() => {
                this.list.render(this.collection.todos)
            })
    }
}