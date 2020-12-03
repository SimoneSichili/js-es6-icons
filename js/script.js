// milestone 1:
// definire un array di oggetti; ogni oggetto rappresenta un'icona, che è caratterizzata da:
// nome, prefisso, tipo e famiglia.
// Utilizzando la funzione forEach e il template literal, visualizzare in pagina tutte le icone con il
// proprio nome.

$(document).ready(function () {
    //START JS

    // #1 definire un array di oggetti
    const icons = [
        {
        name: "dog",
        prefix: "fa-",
        type: "animal",
        family: "fas"
        },
        {
        name: "fish",
        prefix: "fa-",
        type: "animal",
        family: "fas"
        },
        {
        name: "tractor",
        prefix: "fa-",
        type: "vehicle",
        family: "fas"
        },
        {
        name: "hippo",
        prefix: "fa-",
        type: "animal",
        family: "fas"
        },
        {
        name: "spider",
        prefix: "fa-",
        type: "animal",
        family: "fas"
        },
        {
        name: "apple-alt",
        prefix: "fa-",
        type: "vegetable",
        family: "fas"
        },
        {
        name: "carrot",
        prefix: "fa-",
        type: "vegetable",
        family: "fas"
        },
        {
        name: "lemon",
        prefix: "fa-",
        type: "vegetable",
        family: "fas"
        },
        {
        name: "dragon",
        prefix: "fa-",
        type: "animal",
        family: "fas"
        },
        {
        name: "pepper-hot",
        prefix: "fa-",
        type: "vegetable",
        family: "fas"
        },
        {
        name: "space-shuttle",
        prefix: "fa-",
        type: "vehicle",
        family: "fas"
        },
        {
        name: "truck-monster",
        prefix: "fa-",
        type: "vehicle",
        family: "fas"
        },
        {
        name: "wheelchair",
        prefix: "fa-",
        type: "vehicle",
        family: "fas"
        },
        {
        name: "tram",
        prefix: "fa-",
        type: "vehicle",
        family: "fas"
        },
        {
        name: "fighter-jet",
        prefix: "fa-",
        type: "vehicle",
        family: "fas"
        },
        {
        name: "helicopter",
        prefix: "fa-",
        type: "vehicle",
        family: "fas"
        }
    ];

    const tagIcons = $("#icons"); 


    // #2 Utilizzando la funzione forEach e il template literal, visualizzare in pagina tutte le icone con il proprio nome.
    output(icons, tagIcons);


    //END JS
});

// MY FUNCTIONS--------------------------
function output(array, tag) {
    array.forEach(
        (element) => {

            tag.append(`
            <div>
                <i class="${element.family} ${element.prefix}${element.name}"></i>
                <div>${element.name.toUpperCase()}</div>
            </div>
            `);
        }
    );
}