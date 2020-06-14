'use strict'

class Tabset{
    constructor(container){
        this.container = container;
        this.container.addEventListener('click', this.onContainerClick.bind(this));
    }
    changeHTML(){
        this.createDivElements();
    }
    createDivElements(){
        let divTitleLine = document.createElement('div');
        let divBodyLine = document.createElement('div');
        this.addDivClasses(divTitleLine, divBodyLine);
        this.container.prepend(divBodyLine);
        this.container.prepend(divTitleLine);
        this.changeMainDivs();
    }
    addDivClasses(elTitle, elBody){
        elTitle.classList.add('title-line');
        elBody.classList.add('body-line');
    }
    changeMainDivs(){
        for(let i = 0; this.container.children[2] !== undefined; i++){
            this.changeDeleteInnerDivs(i);
        }
        this.addBasicClasses();
    }
    changeDeleteInnerDivs(index){
        this.container.firstElementChild.innerHTML += this.container.children[2].firstElementChild.outerHTML;
        this.container.firstElementChild.nextElementSibling.innerHTML += this.container.children[2].firstElementChild.nextElementSibling.outerHTML;
        this.container.firstElementChild.nextElementSibling.children[index].classList.add('invisible');
        this.container.removeChild(this.container.children[2]);
    }
    addBasicClasses(){
        this.container.classList.add('container');
        this.container.firstElementChild.children[0].classList.add('active');
        this.container.lastElementChild.children[0].classList.remove('invisible');
    }
    onContainerClick(e){
        this.checkElements(e);
    }
    checkElements(event){
        for(let i = 0; i < this.container.firstElementChild.children.length; i++){
            if(event.target.classList.contains('title') && event.target == this.container.firstChild.children[i]){
                this.applyActiveClasses(i);
            }else if(event.target.classList.contains('title')){
                this.applyPassiveClasses(i);
            }
        }
    }
    applyActiveClasses(index){
        this.container.lastElementChild.children[index].classList.remove('invisible');
        this.container.firstElementChild.children[index].classList.add('active');
    }
    applyPassiveClasses(index){
        this.container.lastElementChild.children[index].classList.add('invisible');
        this.container.firstElementChild.children[index].classList.remove('active');
    }
}

const tabset = new Tabset(document.getElementById('container'));
tabset.changeHTML();