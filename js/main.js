document.addEventListener("DOMContentLoaded", () => {
    // Function to dynamically load another script
    function loadScript(url, callback) {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = url;
      script.onload = callback;
      document.head.appendChild(script);
    }
  
    // Load script.js and define the fetchPokemon function
    loadScript("js/pokemonSearch.js", () => {
      console.log("pokemonSearch.js loaded successfully.");
  
      // Ensure the button is available before adding an event listener
      const searchButton = document.getElementById("searchButton");
      if (searchButton) {
        searchButton.addEventListener("click", fetchPokemon);
      } else {
        console.error("searchButton not found in the DOM.");
      }
    });
  });