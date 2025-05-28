const website = "https://frapollif.github.io/pet-adoption-data";

async function getPetsData() {
    const data = await fetch(`${website}/pets.json`);
    const petsData = await data.json();
    return petsData;
}

async function displayPets() {

    const pets = await getPetsData();
    const template = document.querySelector("#animal-card-template");
    const wrapper = document.querySelector("main");

    pets.forEach( pet =>{
        const clone = template.content.cloneNode(true);

        const image = clone.querySelector(".animal-card-photo img");
        image.src = pet.photo;

        const name = clone.querySelector(".animal-card-text h1");
        name.textContent = pet.name;

        const text = clone.querySelector(".animal-card-text p");
        text.textContent = pet.description;

        const age = clone.querySelector(".animal-card-text small span");
        age.textContent = pet.birthYear; //attento
        


        wrapper.appendChild(clone)
    });
}

displayPets()