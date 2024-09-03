document.addEventListener('DOMContentLoaded', () => {
    const planetName = 'Mercury'; // You can dynamically set this for different planets
    const planetData = planetsData.find(planet => planet.name === planetName);
  
    document.getElementById('planet-name').textContent = planetData.name;
    document.getElementById('planet-description').textContent = planetData.overview.content;
    document.getElementById('planet-source').href = planetData.overview.source;
  
    document.getElementById('rotation-time').textContent = planetData.rotation;
    document.getElementById('revolution-time').textContent = planetData.revolution;
    document.getElementById('radius').textContent = planetData.radius;
    document.getElementById('temperature').textContent = planetData.temperature;
  
    document.getElementById('planet-image').style.backgroundImage = `url(${planetData.images.planet})`;
  
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        document.querySelector('.tab.active').classList.remove('active');
        tab.classList.add('active');
  
        const selectedTab = tab.dataset.tab;
        if (selectedTab === 'overview') {
          document.getElementById('planet-description').textContent = planetData.overview.content;
          document.getElementById('planet-source').href = planetData.overview.source;
          document.getElementById('planet-image').style.backgroundImage = `url(${planetData.images.planet})`;
        } else if (selectedTab === 'structure') {
          document.getElementById('planet-description').textContent = planetData.structure.content;
          document.getElementById('planet-source').href = planetData.structure.source;
          document.getElementById('planet-image').style.backgroundImage = `url(${planetData.images.internal})`;
        } else if (selectedTab === 'geology') {
          document.getElementById('planet-description').textContent = planetData.geology.content;
          document.getElementById('planet-source').href = planetData.geology.source;
          document.getElementById('planet-image').style.backgroundImage = `url(${planetData.images.geology})`;
        }
      });
    });
  });
  