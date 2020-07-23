class Model{
    constructor(url){
        this.baseUrl = url;
    }

    setData(data){
        Object.assign(this, data);
    }

    delete(){
        return fetch(this.baseUrl + '/' + this.id,{
            method: 'DELETE',
        });
    }

    add(todo){
        return fetch(this.baseUrl,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(todo),
        })
    }

    change(todo, id){
        return fetch(this.baseUrl + '/' + id,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(todo),
        })
    }
}