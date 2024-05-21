const refs = {
  formEl: document.querySelector('.js-hero-form'),
  heroEl: document.querySelector('.js-hero-container'),
};

function searchHero(superhero) {
  const BASE_URL = 'https://superhero-search.p.rapidapi.com';
  const END_POINT = '/api/';
  const params = new URLSearchParams({
    hero: superhero,
  });
  const url = `${BASE_URL}${END_POINT}?${params}`;

  const headers = {
    'X-RapidAPI-Key': 'f6fe44fec7msh9f58de139869781p15408ajsn8e7b73b5d6b1',
    'X-RapidAPI-Host': 'superhero-search.p.rapidapi.com',
  };

  return fetch(url, { headers }).then(res => res.json());
}

function heroTemplate(hero) {
  return `<div class="hero-card card">
  <div class="image-container">
    <img
      src="${hero.images.md}"
      alt="#"
      class="hero-image"
    />
  </div>
  <div class="hero-body">
    <h4 class="hero-name">${hero.name}</h4>

    <div class="hero-powerstats">
      <p class="hero-bio">FullName - ${hero.biography.fullName}</p>
      <p class="hero-bio">Publisher - ${hero.biography.publisher}</p>
      <p class="hero-bio">Alignment - ${hero.biography.alignment}</p>
      <p class="hero-bio">Gender - ${hero.appearance.gender}</p>
      <p class="hero-bio">Race - ${hero.appearance.race}</p>
    </div>

    <div class="hero-powerstats">
      <span>Power: 10</span>
      <span>Strength: 10</span>
      <span>Speed: 10</span>
      <span>Combat: 10</span>
    </div>
  </div>
</div>`;
}

refs.formEl.addEventListener('submit', e => {
  e.preventDefault();

  const userValue = e.target.elements.query.value;

  searchHero(userValue).then(data => {
    const markup = heroTemplate(data);
    refs.heroEl.insertAdjacentHTML('beforeend', markup);
  });

  e.target.reset();
});
