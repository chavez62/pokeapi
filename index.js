document.getElementById('pokemonName').addEventListener('keydown', function(event) {
    if (event.key == 'Enter') {
        event.preventDefault(); // Prevent the default form submission if inside a form
        fetchData();
    }
})

async function fetchData() {
    try {
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if (!response.ok) {
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();
        
        // Set image sprite and make it visible
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");
        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";
        
        // Set types and make the info box visible
        const types = data.types.map(typeInfo => typeInfo.type.name).join(', ');
        const typesElement = document.getElementById("pokemonTypes");
        typesElement.innerText = `Type(s): ${types}`;
        typesElement.style.display = "flex"; // Make it visible
        
        // Set abilities and make the info box visible
        const abilities = data.abilities.map(abilityInfo => abilityInfo.ability.name).join(', ');
        const abilitiesElement = document.getElementById("pokemonAbilities");
        abilitiesElement.innerText = `Abilities: ${abilities}`;
        abilitiesElement.style.display = "flex"; // Make it visible
        
        // Set stats and make the info box visible
        const stats = data.stats.map(statInfo => `${statInfo.stat.name}: ${statInfo.base_stat}`).join(', ');
        const statsElement = document.getElementById("pokemonStats");
        statsElement.innerText = `Stats: ${stats}`;
        statsElement.style.display = "flex"; // Make it visible

    } catch (error) {
        console.error(error);
        // Update UI to show an error message
        const elements = document.querySelectorAll(".info-box");
        elements.forEach(element => {
            element.innerText = 'Failed to load data'; // Set error message
            element.style.display = "flex"; // Make the error message visible
        });
        document.getElementById("pokemonSprite").style.display = 'none'; // Hide the sprite if error
    }
}
