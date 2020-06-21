'use strict'

const CLASS_ALBUM = 'album';
const CLASS_PHOTO = 'photo';
const CLASS_RED_BACKGROUND = 'red-color';

function callFetchPhotos(){
    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        addPhotosFromTemplate(data);
    })
}
function addAlbumsFromTemplate(dataArr){
    let completedAlbumsTemplate;
    dataArr.forEach((element) => {
        completedAlbumsTemplate = addClassAlbum(albumsTemplate)
        .replace('{{text}}', element.title)
        .replace('{{albumId}}', element.id)
        insertAlbumsTemplate(completedAlbumsTemplate);
    })
}
function addClassAlbum(template){
    return template.replace('{{class}}', CLASS_ALBUM);
}
function insertAlbumsTemplate(template){
    albums.innerHTML += template;
}
function addPhotosFromTemplate(dataArr){
    let completedPhotosTemplate;
    dataArr.forEach((element) => {
        completedPhotosTemplate = addClassPhoto(photosTemplate)
        .replace('{{src}}', element.thumbnailUrl);
        insertPhotosTemplate(completedPhotosTemplate);
    })
}
function addClassPhoto(template){
    return template.replace('{{class}}', CLASS_PHOTO);
}
function insertPhotosTemplate(template){
    photos.innerHTML += template;
}
function onListClick(e){
    if(e.target.classList.contains(CLASS_ALBUM)){
        changeAlbumsColor(e);
        updateAlbumId(e);
        clearInnerPhotos();
        callFetchPhotos();
    }
}
function changeAlbumsColor(event){
    for(let i = 0; i < event.target.parentElement.children.length; i++){
        selectClass(event, i);
    }
}
function selectClass(event, index){
    if(event.target.parentElement.children[index] == event.target){
        addClassRedBack(event);
    } else{
        deleteClassRedBack(event, index);
    }
}
function addClassRedBack(event){
    event.target.classList.add(CLASS_RED_BACKGROUND);
}
function deleteClassRedBack(event, index){
    event.target.parentElement.children[index].classList.remove(CLASS_RED_BACKGROUND);
}
function updateAlbumId(event){
    albumId = event.target.id;
}
function clearInnerPhotos(){
    photos.innerHTML = '';
}




const albums = document.getElementById('ul');
const photos = document.getElementById('photos');
const albumsTemplate = document.getElementById('albums-template').innerHTML;
const photosTemplate = document.getElementById('photos-template').innerHTML;
let albumId;

albums.addEventListener('click', onListClick);

fetch('https://jsonplaceholder.typicode.com/albums')
.then((res) => {
    return res.json();
})
.then((data) => {
    addAlbumsFromTemplate(data);
    albums.firstElementChild.classList.add(CLASS_RED_BACKGROUND);
    albumId = albums.firstElementChild.id;
    callFetchPhotos();
})