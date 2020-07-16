rest = {
    create: ((todo) => {
        return fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(todo),
        })
        .then((res) => res.json())
    }),
    update: ((element, todo) => {
        fetch(URL + '/' + $(element).attr('id'),{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(todo),
        })
    }),
    delete: (($id) => {
        fetch(URL + '/' + $id, {
            method: 'DELETE',
        });
    }),
    getAllElements: (() => {
        return fetch(URL)
        .then((res) => res.json())
    }),
    getElement: (($id) => {
        return fetch(URL + '/' + $id)
        .then((res) => res.json())
    })
};