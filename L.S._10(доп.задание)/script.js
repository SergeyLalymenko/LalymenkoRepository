function createTemplate(template){
    let newTemplate = template;
    return function getFullTemplate(objValues){
        let arrObjKeys = Object.keys(objValues);
        for(let i = 0; i <= arrObjKeys.length; i++){
            newTemplate = newTemplate.replace(`{{${arrObjKeys[i]}}}`, objValues[arrObjKeys[i]]);
        }
        return newTemplate;
    };
};



const objValues = {
    name: 'Alex',
    surname: 'Smith',
    street: 'Kalinova',
    city: 'Dnipro'
};
const helloTemplate = createTemplate('Hello, {{name}}!');
const detailsTemplate = createTemplate('{{name}} {{surname}} {{street}} {{city}}!!!---');
console.log(helloTemplate(objValues));
console.log(detailsTemplate(objValues));