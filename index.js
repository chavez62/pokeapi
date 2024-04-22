document.getElementById('pokemonName').addEventListener('keydown', function(event) {
    if (event.key == 'Enter') {
        event.preventDefault(); // Prevent the default form submission if inside a form
        fetchData();
    }
});

async function fetchData() {
    try {
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if (!response.ok) {
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();

        // Set default image sprite, display text and make it visible
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");
        const defaultTextElement = document.getElementById("defaultText");
        if (pokemonSprite) {
            imgElement.src = pokemonSprite;
            imgElement.style.display = "block";
            defaultTextElement.style.display = "block";
        } else {
            imgElement.style.display = "none";
            defaultTextElement.style.display = "none";
        }

        // Set shiny image sprite, display text and make it visible
        const pokemonSpriteShiny = data.sprites.front_shiny;
        const imgElementShiny = document.getElementById("pokemonSpriteShiny");
        const shinyTextElement = document.getElementById("shinyText");
        if (pokemonSpriteShiny) {
            imgElementShiny.src = pokemonSpriteShiny;
            imgElementShiny.style.display = "block";
            shinyTextElement.style.display = "block";
        } else {
            imgElementShiny.style.display = "none";
            shinyTextElement.style.display = "none";
        }

        // Display Pokemon ID
        
        document.getElementById("pokeid").innerText = `PokeID: ${data.id}`;
        document.getElementById("pokeid").style.display = "block";

        // Set types and make the info box visible
        const types = data.types.map(typeInfo => typeInfo.type.name).join(', ');
        document.getElementById("pokemonTypes").innerText = `Type(s): ${types}`;
        document.getElementById("pokemonTypes").style.display = "block";

        // Set abilities and make the info box visible
        const abilities = data.abilities.map(abilityInfo => abilityInfo.ability.name).join(', ');
        document.getElementById("pokemonAbilities").innerText = `Abilities: ${abilities}`;
        document.getElementById("pokemonAbilities").style.display = "block";

        // Set stats and make the info box visible
        const stats = data.stats.map(statInfo => `${statInfo.stat.name}: ${statInfo.base_stat}`).join(', ');
        document.getElementById("pokemonStats").innerText = `Stats: ${stats}`;
        document.getElementById("pokemonStats").style.display = "block";

    } catch (error) {
        console.error(error);
        // Update UI to show an error message
        const elements = document.querySelectorAll(".info-box");
        elements.forEach(element => {
            element.innerText = 'Failed to load data';
            element.style.display = "block";
        });
        document.getElementById("pokemonSprite").style.display = 'none';
        document.getElementById("defaultText").style.display = 'none';
        document.getElementById("pokemonSpriteShiny").style.display = 'none';
        document.getElementById("shinyText").style.display = 'none';
        document.getElementById("pokemonId").style.display = 'none';
    }
}
