const STUDENTS_URL = 'https://5f2ae2476ae5cc00164231f7.mockapi.io/theLastHomework/students';
const TEACHERS_URL = 'https://5f2ae2476ae5cc00164231f7.mockapi.io/theLastHomework/teachers';
const COURSES_URL = 'https://5f2ae2476ae5cc00164231f7.mockapi.io/theLastHomework/courses';
const GROUPS_URL = 'https://5f2ae2476ae5cc00164231f7.mockapi.io/theLastHomework/groups';
const CLASS_STUDENT_LI = '.student-li';
const CLASS_TEACHER_LI = '.teacher-li';



function init(){
    sendGetRequestStudents();
    sendGetRequestTeachers();
}

function sendGetRequestStudents(){
    fetch(STUDENTS_URL)
    .then((res) => res.json())
    .then((data) => renderStudentsData(data));
}

function sendGetRequestTeachers(){
    fetch(TEACHERS_URL)
    .then((res) => res.json())
    .then((data) => renderTeachersData(data));
}

function renderStudentsData(data){
    data.forEach((element) => {
        renderPerson(element, $studentsUl, students, studentsTemplate);
    })
}

function renderTeachersData(data){
    data.forEach((element) => {
        renderPerson(element, $teachersUl, teachers, teachersTemplate);
    })
}

function addTeachersData(element){
    teachers.push(element);
}

function addPersonData(element, arr){
    arr.push(element);
}

function renderPerson(element, $container, arr, template){
    addPersonData(element, arr);
    let readyTemplate = getReadyTemplate(element, template);
    $container.append(readyTemplate);
    
}

function getReadyTemplate(element, template){
    return template
        .replace('{{name}}', element.name)
        .replace('{{surname}}', element.surname)
        .replace('{{courses}}', element.courses)
        .replace('{{id}}', element.id)
        .replace('{{groups}}', element.groups);
}

function onStudentClick(e){
    if(e.target.classList.contains('row')){
        e.target.nextElementSibling.classList.toggle('none');
    } else if(e.target.classList.contains('delete-p')){
        deletePerson(e.target.parentElement.parentElement, students, STUDENTS_URL);
    }
}

function deletePerson(element, arr, url){
    deleteElementLocal(element);
    deleteElementData(element, arr);
    fetch(url + '/' + element.dataset.id,{
        method: 'DELETE',
    });
}

function deleteElementLocal(element){
    element.remove();
}

function deleteElementData(element, arr){
    let index = arr.indexOf(element);
    arr.splice(index, 1);
}

function onTeacherClick(e){
    if(e.target.classList.contains('row')){
        e.target.nextElementSibling.classList.toggle('none');
    } else if(e.target.classList.contains('delete-p')){
        deletePerson(e.target.parentElement.parentElement, teachers, TEACHERS_URL);
    }
}

function onAddStudentClick(){
    sendPostRequestStudent();
}

function onAddTeacherClick(){
    sendPostRequestTeacher();
}

function sendPostRequestStudent(){
    let student = {
        name: studentNameInput.value,
        surname: studentSurnameInput.value,
        courses: '',
        groups: '',
    }
    studentNameInput.value = '';
    studentSurnameInput.value = '';
    fetch(STUDENTS_URL,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(student),
    }).then((res) => res.json())
        .then((data) => renderPerson(data, $studentsUl, students, studentsTemplate))
        .then(() => closeNewPersonMenu(newStudentBtn));
}

function sendPostRequestTeacher(){
    let teacher = {
        name: teacherNameInput.value,
        surname: teacherSurnameInput.value,
        courses: '',
        groups: '',
    }
    teacherNameInput.value = '';
    teacherSurnameInput.value = '';
    fetch(TEACHERS_URL,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(teacher),
    }).then((res) => res.json())
        .then((data) => renderPerson(data, $teachersUl, teachers, teachersTemplate))
        .then(() => closeNewPersonMenu(newTeacherBtn));
}

function closeNewPersonMenu(element){
    element.nextElementSibling.classList.add('none');
}

function onNewPersonClick(e){
    e.target.nextElementSibling.classList.toggle('none');
}



const studentsTemplate = document.getElementById('students-template').innerHTML;
const teachersTemplate = document.getElementById('teachers-template').innerHTML;
const addStudentBtn = document.getElementById('add-student-btn');
const addTeacherBtn = document.getElementById('add-teacher-btn');
const newStudentBtn = document.getElementById('new-student-btn');
const newTeacherBtn = document.getElementById('new-teacher-btn');
const studentNameInput = document.getElementById('student-name-input');
const teacherNameInput = document.getElementById('teacher-name-input');
const studentSurnameInput = document.getElementById('student-surname-input');
const teacherSurnameInput = document.getElementById('teacher-surname-input');
const $studentsUl = $('#students-list');
const $teachersUl = $('#teachers-list');
let students = [];
let teachers = [];



$studentsUl.on('click', CLASS_STUDENT_LI, onStudentClick);
$teachersUl.on('click', CLASS_TEACHER_LI, onTeacherClick);
addStudentBtn.addEventListener('click', onAddStudentClick);
newStudentBtn.addEventListener('click', onNewPersonClick);
addTeacherBtn.addEventListener('click', onAddTeacherClick);
newTeacherBtn.addEventListener('click', onNewPersonClick);





init();