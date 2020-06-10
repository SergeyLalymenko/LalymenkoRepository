'use strict'

function Accordion(list){
    this.list = list;
    this.list.addEventListener('click', this.onListClick.bind(this));
}
Accordion.prototype.onListClick = function(e){
    if(e.target.classList.contains('title')){
        for(let i = 0; i < this.list.children.length; i++){
            if(this.list.children[i] == e.target.parentElement && !e.target.parentElement.lastElementChild.classList.contains('body')){
                e.target.parentElement.lastElementChild.classList.add('body');
            } else if(this.list.children[i] == e.target.parentElement){
                this.list.children[i].lastElementChild.classList.remove('body');
            } else{
                this.list.children[i].lastElementChild.classList.add('body');
            }
        }
    }
}



const accordion = new Accordion(document.getElementById('list'));