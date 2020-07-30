import Model from './Model';


export default class Collection{
    constructor(url){
        this.url = url;
        this.todos = [];
    }

    fetch(){
        return fetch(this.url)
            .then((res) => res.json())
            .then((data) => this.setData(data));
    }

    setData(data){
        return (this.todos = data.map((item) => {
            const model = new Model(this.url);
            model.setData(item);
            return model;
        }))
    }

    delete(id){
        const model = this.todos.find((item) => item.id == id);
        return model.delete()
            .then(() => {
                this.todos = this.todos.filter((item) => item !== model);
        })
    }
    
    add(title){
        const model = new Model(this.url);
        let todo = {
            isDone: false,
            title: title,
        }
        return model.add(todo)
            .then((res) => res.json())
            .then((data) => {
                model.setData(data);
                this.todos.push(model);
            })
    }

    change(id){
        const model = this.todos.find((item) => item.id == id);
        let todo = {
            isDone: !model.isDone,
            title: model.title,
        }
        return model.change(todo)
            .then((res) => res.json())
            .then((data) => {
                let index = this.todos.indexOf(model);
                model.setData(data);
                this.todos[index] = model;
            })
    }
}