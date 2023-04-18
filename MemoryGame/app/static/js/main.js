const persons = [
  {
    name: 'James',
    img: './static/assets/img/james.jfif',
  },
  {
    name: 'Dries',
    img: './static/assets/img/dries.jpg',
  },
  {
    name: 'Evelien',
    img: './static/assets/img/evelien.jpg',
  },
  {
    name: 'Frederick',
    img: './static/assets/img/frederick.jpg',
  },
  {
    name: 'Glen',
    img: './static/assets/img/glen.jpg',
  },
  {
    name: 'Kyandro',
    img: './static/assets/img/kyandro.jpg',
  },
  {
    name: 'Mauro',
    img: './static/assets/img/mauro.jpg',
  },
  {
    name: 'Mila',
    img: './static/assets/img/mila.jpg',
  },  
];

const duplicatedPersons = [...persons, ...persons];

(() => {
  const app = {
    init () {
      console.log('1. Application Initialized!');
      // Variables
      // Call the function cacheElements
      this.cacheElements();
      // Call the function generateUI
      this.generateUI();
      // Call the function addEventListeners
      this.addEventListeners();
    },
    cacheElements () {
      console.log('2. Chache the elements!');
      this.$cards = document.querySelector('.cards');
    },
    generateUI () {
      let tmpStr = '';
      
      for (let i = duplicatedPersons.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [duplicatedPersons[i], duplicatedPersons[j]] = [duplicatedPersons[j], duplicatedPersons[i]];
      }
      duplicatedPersons.map(object => {
        tmpStr += `
          <div class="card" data-name="${object.name}">
              <img src="${object.img}" alt="content picture">
          </div>`;
      });      
      this.$cards.innerHTML = tmpStr;
    },
    async addEventListeners () {
      const cards = document.querySelectorAll('.card');
      console.log(cards)
      cards.forEach((card) => {
        card.addEventListener('click', (ev) => {
          console.log(ev.srcElement.dataset.name);
        })
      })
    },
  };
  app.init();
})();
