// Destructure all planets from the planetsData array
const [mercury, earth, jupiter, mars, neptune, saturn, uranus, venus] = [
  planetsData.find(planet => planet.name === 'Mercury'),
  planetsData.find(planet => planet.name === 'Earth'),
  planetsData.find(planet => planet.name === 'Jupiter'),
  planetsData.find(planet => planet.name === 'Mars'),
  planetsData.find(planet => planet.name === 'Neptune'),
  planetsData.find(planet => planet.name === 'Saturn'),
  planetsData.find(planet => planet.name === 'Uranus'),
  planetsData.find(planet => planet.name === 'Venus')
];

document.addEventListener('DOMContentLoaded', () => {
  // Set the default planet (Mercury)
  let currentPlanet = mercury;

  // Function to update planet data dynamically
  const updatePlanetData = (planetData) => {
    document.getElementById('planet-name').textContent = planetData.name;
    document.getElementById('planet-description').textContent = planetData.overview.content;
    document.getElementById('planet-source').href = planetData.overview.source;
    document.getElementById('rotation-time').textContent = planetData.rotation;
    document.getElementById('revolution-time').textContent = planetData.revolution;
    document.getElementById('radius').textContent = planetData.radius;
    document.getElementById('temperature').textContent = planetData.temperature;
    document.getElementById('planet-image').style.backgroundImage = `url(${planetData.images.planet})`;
  };

  // Initialize the page with the default planet (Mercury)
  updatePlanetData(currentPlanet);

  // Set active class to the first tab by default
  const firstTab = document.querySelector('.tab[data-tab="overview"]');
  firstTab.closest('.tab-button').classList.add('active');

  // Event listener for tab switching
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Remove active class from the currently active tab
      const activeTab = document.querySelector('.tab-button.active');
      if (activeTab) {
        activeTab.classList.remove('active');
      }

      // Add active class to the clicked tab
      tab.closest('.tab-button').classList.add('active');

      // Change content based on the selected tab
      const selectedTab = tab.dataset.tab;
      if (selectedTab === 'overview') {
        document.getElementById('planet-description').textContent = currentPlanet.overview.content;
        document.getElementById('planet-source').href = currentPlanet.overview.source;
        document.getElementById('planet-image').style.backgroundImage = `url(${currentPlanet.images.planet})`;
      } else if (selectedTab === 'structure') {
        document.getElementById('planet-description').textContent = currentPlanet.structure.content;
        document.getElementById('planet-source').href = currentPlanet.structure.source;
        document.getElementById('planet-image').style.backgroundImage = `url(${currentPlanet.images.internal})`;
      } else if (selectedTab === 'geology') {
        document.getElementById('planet-description').textContent = currentPlanet.geology.content;
        document.getElementById('planet-source').href = currentPlanet.geology.source;
        document.getElementById('planet-image').style.backgroundImage = `url(${currentPlanet.images.geology})`;
      }
    });
  });

  // Event listener for planet switching (you can create buttons for each planet)
  const planetButtons = document.querySelectorAll('.planet-button'); // Assume you have planet buttons
  planetButtons.forEach(button => {
    button.addEventListener('click', () => {
      const planetName = button.dataset.planet; // Use data attributes for buttons
      currentPlanet = planetsData.find(planet => planet.name === planetName);
      updatePlanetData(currentPlanet);
    });
  });
});
