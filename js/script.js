// milestone 1:
// definire un array di oggetti; ogni oggetto rappresenta un'icona, che è caratterizzata da:
// nome, prefisso, tipo e famiglia.
// Utilizzando la funzione forEach e il template literal, visualizzare in pagina tutte le icone con il
// proprio nome.

// milestone 2:
// definire un array di colori e associare ad ogni tipo di icona un colore.
// Visualizzare le icone di colore diverso in base al tipo.

// milestone 3:
// aggiungere una select per filtrare le icone in base al tipo.
// Popolare le options della select dinamicamente e, ogni volta che cambia il valore selezionato,
// visualizzare le icone corrispondenti.


// #1 Definire un array di oggetti
// #2 Utilizzando la funzione forEach e il template literal, visualizzare in pagina tutte le icone con il proprio nome.
// #3 Definire un array di colori
// #4 Visualizzare le icone di colore diverso in base al tipo.
// #5 Aggiungere una select per filtrare le icone in base al tipo.
// #6 Popolare le options della select dinamicamente

$(document).ready(function () {
    //START JS

    const iconsList = [
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
        name: "apple-alt",
        prefix: "fa-",
        type: "vegetable",
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
    const colorsList = ["red", "green", "blue"];

    const tagIcons = $("#icons");
    const tagSelect = $("#type");

    //array with obj color properties
    const iconsListColored = getListColored(iconsList, colorsList);

    //array with obj types
    const typesList = getTypes (iconsListColored);

    outputOptions (tagSelect, typesList);

    output(iconsListColored, tagIcons);

    tagSelect.change(
        function () {
            const optionValue = $(this).val();

            if (optionValue == "all") {
                output(iconsListColored, tagIcons);
            } else {
                const filteredIcons = iconsListColored.filter(
                    (element) => {
                        return element.type == optionValue;
                    }
                );
                output(filteredIcons, tagIcons);
            }
        }
    );


    //END JS
});

// MY FUNCTIONS--------------------------
function output(array, tagContainer) {
    
    //clean html before append
    tagContainer.html("");
    
    array.forEach(
        (element) => {
            
            //destructuring
            const {name, family, prefix, type, color} = element;

            // append to html
            tagContainer.append(`
            <div>
                <i class="${family} ${prefix}${name}" style="color: ${color}"></i>
                <div>${name.toUpperCase()}</div>
            </div>
            `);
        }
    );
}

function getListColored (array, arrayColors) {

    const newArray = array.map(
        (element)=> {

            //destructuring
            const {name, family, prefix, type} = element;

            // color conditions
            let color;
            if (type == "animal") {
                color = arrayColors[0];
            } else if (type == "vegetable") {
                color = arrayColors[1];
            } else if (type == "vehicle") {
                color = arrayColors[2];
            }

            newElement = {
                ...element,
                color: color,
            }

            return newElement
        }
    );

    return newArray;
}

function getTypes (array) {
    const newArray = [];
    
    array.forEach(
        (element) => {
            if (newArray.includes(element.type) == false) {
                newArray.push(element.type)
            }
        }
    );

    return newArray;
}

function outputOptions (select, arrayTypes) {
    arrayTypes.forEach(
        (element) => {
            $(select).append(`
            <option value="${element}">${element}</option>
            `)
        }
    );
}