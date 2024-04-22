# PokeApi - Pokémon Data Fetcher

This JavaScript code snippet provides an interactive feature for a web page that allows users to retrieve and display data about Pokémon using the fetchData function. Users can enter the name of a Pokémon into an input field and either press the Enter key or click a button to trigger the data retrieval process.

## Features:
+ Enter Key Submission: Users can submit their query by pressing the Enter key, which is handled by a keydown event listener attached to the input field. This provides an enhanced user experience by enabling a more natural interaction pattern.
+ Async Data Fetching: The fetchData function performs an asynchronous HTTP request to the PokeAPI to retrieve details about the specified Pokémon, such as sprites, types, abilities, and stats.
+ Dynamic Content Display: Upon successful fetching of data, the Pokémon's sprite image and information are dynamically displayed on the web page. Information boxes become visible and are populated with the Pokémon's types, abilities, and stats.
+ Error Handling: In case of a fetch error or if the specified Pokémon cannot be found, an error message is displayed, and the previously visible content is hidden, ensuring the user is informed about the failed request.

## Implementation Details:
+ The image sprite is presented using an <img> tag whose src attribute is set based on the fetched data.
+ Pokémon types, abilities, and stats are displayed in respective <div> elements with a class .info-box, which are initially hidden and only made visible upon a successful data fetch.
+ Robust error handling is implemented to display a user-friendly error message if the data cannot be fetched, enhancing reliability and usability.

This setup assumes that the HTML contains elements with the IDs pokemonName, pokemonSprite, pokemonTypes, pokemonAbilities, and pokemonStats, and that these elements are styled appropriately to provide a visually appealing layout.

![image](https://github.com/chavez62/pokeapi/assets/67764701/a2066315-65d5-4efc-add3-52fef34f8e0c)

