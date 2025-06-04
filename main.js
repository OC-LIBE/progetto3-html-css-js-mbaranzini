const website = "https://frapollif.github.io/pet-adoption-data";

async function getPetsData() {
    const data = await fetch(`${website}/pets.json`);
    const petsData = await data.json();
    return petsData;
}

function calcAge(date_of_birth){
    const t =  new Date();
    const current_year = t.getFullYear();
    const age = current_year - date_of_birth;
    return age
}

function capitalize(val) {
    return val.charAt(0).toUpperCase() + val.slice(1);
}

async function displayPets() {

    const pets = await getPetsData();
    const template = document.querySelector("#animal-card-template");
    const wrapper = document.querySelector("main");
    console.log(pets);
    

    pets.forEach( pet =>{
        const clone = template.content.cloneNode(true);

        const image = clone.querySelector(".animal-card-photo img");
        image.src = pet.photo;

        const name = clone.querySelector(".animal-card-text h1");
        name.textContent = pet.name;

        const text = clone.querySelector(".animal-card-text p");
        text.textContent = pet.description;

        const age = clone.querySelector(".Age");
        const Age = calcAge(pet.birthYear);
        if (Age < 1) {
            age.textContent = "Less than one year old";
        }
        else if (Age == 1) {
            age.textContent = `${Age} year old`
        }
        else {
            age.textContent = `${Age} years old`
        }
        
        const specie = clone.querySelector(".Specie");
        specie.textContent = capitalize(pet.species);
        
        const link = clone.querySelector(".adopt-button");
        link.href = `${website}/pets/${pet.id}/`;
        
        const name2 = clone.querySelector(".adopt-button");
        name2.textContent = `Adopt ${pet.name}`

        
        wrapper.appendChild(clone)
    });
}

displayPets()