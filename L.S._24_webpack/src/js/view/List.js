import $ from 'jquery';


const SELECTOR_CLASS_DELETE_BUTTON = '.delete-button';
const SELECTOR_CLASS_YELLOW_COLOR = '.yellow-color';
const CLASS_YELLOW_COLOR = 'yellow-color';
const CLASS_YELLOW_GREEN_COLOR = 'yellow-color green-color';


export default class List{
    constructor(config){
        this.config = config;
        this.$ul = $('#list');
        this.$addBtn = $('#main-button');
        this.$input = $('#input');
        this.$formTemplate = $('#form-template').html();
        this.$ul.on('click', SELECTOR_CLASS_DELETE_BUTTON, this.onDeleteButtonClick.bind(this));
        this.$ul.on('click', SELECTOR_CLASS_YELLOW_COLOR, this.onLiClick.bind(this));
        this.$addBtn.on('click', this.onAddBtnClick.bind(this));
    }

    render(todos){
        this.$ul.empty();
        todos.forEach(this.renderModel.bind(this));
    }

    renderModel(element){
        let readyTemplate = this.addClass(element)
            .replace('{{id}}', element.id)
            .replace('{{text}}', element.title);
        this.$ul.append(readyTemplate);
    }

    addClass(element){
        if(element.isDone){
            return this.$formTemplate
            .replace('{{class}}', CLASS_YELLOW_GREEN_COLOR)
        } else{
            return this.$formTemplate
            .replace('{{class}}', CLASS_YELLOW_COLOR)
        }
    }

    onDeleteButtonClick(e){
        e.stopPropagation();
        let id = $(e.target).closest('.yellow-color').data('id');
        this.config.onDelete(id);
    }

    onAddBtnClick(){
        let title = this.$input.val();
        this.$input.val('');
        this.config.onAdd(title);
    }

    onLiClick(e){
        let id = $(e.target).data('id');
        this.config.onChange(id);
    }
}