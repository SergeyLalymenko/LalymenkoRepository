const URL = 'https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/users';
const CLASS_DELETE_BUTTON = 'delete-button';
const CLASS_TD = 'td';



function init(){
    sendGetRequest();
}

function sendGetRequest(){
    fetch(URL)
        .then((res) => res.json())
        .then((data) => renderData(data))
}

function renderData(data){
  userData = [];
  $tbody.html('');
    data.forEach((element) => {
        renderUser(element);
    })
}

function getReadyTemplate(element){
    return $formTemplate
        .replace('{{id}}', $(element).attr('id'))
        .replace('{{name}}', $(element).attr('name'))
        .replace('{{surname}}', $(element).attr('surname'))
        .replace('{{phone}}', $(element).attr('phone'))
        .replace('{{email}}', $(element).attr('email'));
}

function checkIsDone(element){
    return $(element).attr('isDone') == true;
}

function onDeleteBtnClick(e){
    deleteUser($(e.target).parent().parent());
    sendDeleteRequestUser($(e.target).parent().parent().attr('data-id'));
}

function deleteUser(element){
    element.remove();
}

function sendDeleteRequestUser($elementId){
    fetch(URL + '/' + $elementId, {
        method: 'DELETE',
    });
}

function renderUser(element){
    userData.push(element);
    let readyTemplate = getReadyTemplate(element);
    $tbody.append(readyTemplate);
}


const $formTemplate = $('#form-template').html();
const $tbody = $( '#users tbody' );
const $addBtn = $('#create-user');
let userData = [];



$(function() {
  let elementId,
    dialog,
    form,
    name = $('#name'),
    surname = $('#surname'),
    phone = $('#phone'),
    email = $('#email'),
    allFields = $([]).add(name).add(surname).add(phone).add(email),
    tips = $('.validateTips');

  function onUserClick(e){
    elementId = $(e.target).parent().attr('data-id');
    let element = userData.find((element) => element.id == elementId);
    setValues(element);
  }

  function setValues(element){
    name.val($(element).attr('name'));
    surname.val($(element).attr('surname'));
    phone.val($(element).attr('phone'));
    email.val($(element).attr('email'));
    dialog.dialog('open');
  }

  function addUser() {
    allFields.removeClass('ui-state-error');
    createServerUser(name, surname, phone, email);
    dialog.dialog('close');
  }

  function createServerUser(name, surname, phone, email){
    let user = {
        name: name.val(),
        surname: surname.val(),
        phone: phone.val(),
        email: email.val(),
    }
    fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    })
    .then((res) => res.json())
    .then((data) => renderUser(data));
}

  function updateUser(){
    allFields.removeClass('ui-state-error');
    updateServerUser(name, surname, phone, email);
    dialog.dialog('close');
  }

  function updateServerUser(name, surname, phone, email){
    let user = {
        name: name.val(),
        surname: surname.val(),
        phone: phone.val(),
        email: email.val(),
    }
    fetch(URL + '/' + elementId, {
      method: 'PUT',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then(() => sendGetRequest());
  }

  dialog = $('#dialog-form').dialog({
    autoOpen: false,
    height: 400,
    width: 350,
    modal: true,
    buttons: {
      'Create an account': addUser,
      'Change user': updateUser,
      Cancel: function() {
        dialog.dialog('close');
      }
    },
    close: function() {
      form[0].reset();
      allFields.removeClass('ui-state-error');
    }
  });

  form = dialog.find('form').on('submit', function(event) {
    event.preventDefault();
    addUser();
  });

  init();

  $addBtn.button().on('click', function() {
    dialog.dialog('open');
  });
  $tbody.on('click', '.' + CLASS_TD, onUserClick);
  $tbody.on('click', '.' + CLASS_DELETE_BUTTON, onDeleteBtnClick);
  
} );