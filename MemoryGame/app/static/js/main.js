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
      this.teller = 0;
      this.score = 0;
      this.foto1 = 0;
      this.foto2 = 0;
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
        <div class="card">
          <div class="card-front" data-name="${object.name}">
            <img class="card-img" data-name="${object.name}" src="static/assets/img/logo.svg" alt="content picture">
          </div>
          <div class="card-back" data-name="${object.name}">
            <img class="card-img" data-name="${object.name}" src="${object.img}" alt="content picture">
          </div> 
        </div>  
        `;
      });      
      this.$cards.innerHTML = tmpStr;
    },
    async addEventListeners () {
      const cards = document.querySelectorAll('.card');
      cards.forEach((card) => {
        card.addEventListener('click', (ev) => {
          this.teller++;
          const parent = ev.target.parentNode.parentNode;
          parent.classList.add('rotate');
          if (this.teller == 1) {
            this.foto1 = ev.target;
          } 
          if (this.teller == 2) {
            this.foto2 = ev.target
            console.log(this.foto1, this.foto2, this.teller);
            if (this.foto1.dataset.name === this.foto2.dataset.name) {
              this.score++;
              this.teller = 0;
              this.foto1 = '';
              this.foto2 = '';
            } else {
              setTimeout(() => {
                this.foto1.parentNode.parentNode.classList.remove('rotate');
                this.foto2.parentNode.parentNode.classList.remove('rotate');
                this.teller = 0;
                this.foto1 = '';
                this.foto2 = '';
              }, 500);
            }
          }          
          if(this.score == 8) {
            document.querySelector('.modal-overlay').style.display = 'block';
            document.querySelector('.modal').style.display = 'block';
          }
        });
      })
    },
  };
  app.init();
})();
