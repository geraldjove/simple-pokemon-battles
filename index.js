let pikachuPickFriendly = document.getElementById('pikachuFriendly');
let geodudePickFriendly = document.getElementById('geodudeFriendly');
let mewtwoPickFriendly = document.getElementById('mewtwoFriendly');
let pikachuPickEnemy = document.getElementById('pikachuEnemy');
let geodudePickEnemy = document.getElementById('geodudeEnemy');
let mewtwoPickEnemy = document.getElementById('mewtwoEnemy');
let battleLog = document.getElementById('battleLog');
let battleSection = document.getElementById('battleSection');
let startBattleButton = document.getElementById('startBattle');
let newBattleHealth = document.createElement('h3');
let newBattleAttack = document.createElement('h3');
let newBattleResult = document.createElement('h1');
let isFainted = document.createElement('h2');
let pickOne = document.getElementById('pokemon1');
let pickTwo = document.getElementById('pokemon2');
let pikachuPokemon;
let geodudePokemon;
let mewtwoPokemon;
let pokemonPick = null;
let pokemonFriendly;
let pokemonEnemy;
let isPokemonFriendlyTurn =  true;
let pokemonFriendlyHealth;
let pokemonEnemyHealth;
// NEW -----
let pokemonFriendlySection = document.querySelector("#pokemonFriendlySection");
let pokemonEnemySection = document.querySelector("#pokemonEnemySection");


// Fetch API - FRIENDLY

const urlsFriendly = [
    'https://pokeapi.co/api/v2/pokemon/pikachu',
    'https://pokeapi.co/api/v2/pokemon/ditto',
    'https://pokeapi.co/api/v2/pokemon/squirtle'
]

Promise.all(urlsFriendly.map((url)=>{
    return fetch(url).then(resp=>resp.json())
})).then(data=>showPokemonFriendly(data));

const showPokemonFriendly = (pokemons) => {
    let pokemonEntries = ''
    pokemons.forEach((pokemon) => {
        const {id, name, sprites, stats, types} = pokemon;
        pokemonEntries = pokemonEntries +
        `
        <div class="d-flex">
        <div class="card mx-5" style="width: 15rem;" id="pokemon-${id}">
        <img src=${sprites.front_default} class="card-img-top img-fluid w-auto" alt="...">
        <div class="card-body d-flex flex-column align-items-center">
        <h2 class="card-title text-uppercase">${name}</h2>
        <p class="card-text text-center">
        ${stats[0].stat.name}: ${stats[0].base_stat} | 
        ${stats[1].stat.name}: ${stats[1].base_stat} | 
        type: ${types[0].type.name}
        </p>
        <a href="#" class="btn btn-primary">Choose Pokemon</a>
        </div>
        </div>
        </div>
        
        `
    })
    pokemonFriendlySection.innerHTML = pokemonEntries;
}

// Fetch API - ENEMY

const urlsEnemy= [
    'https://pokeapi.co/api/v2/pokemon/charmeleon',
    'https://pokeapi.co/api/v2/pokemon/bulbasaur',
    'https://pokeapi.co/api/v2/pokemon/caterpie'
]

Promise.all(urlsEnemy.map((url)=>{
    return fetch(url).then(resp => resp.json())
})).then(data => showPokemonEnemy(data));

const showPokemonEnemy = (pokemons) => {
    let pokemonEntries = ''
    pokemons.forEach((pokemon) => {
        const {id, name, sprites, stats, types} = pokemon;
        pokemonEntries = pokemonEntries +
        `
        <div class="d-flex">
        <div class="card mx-5" style="width: 15rem;" id="pokemon-${id}">
        <img src=${sprites.front_default} class="card-img-top img-fluid w-auto" alt="...">
        <div class="card-body d-flex flex-column align-items-center">
        <h2 class="card-title text-uppercase">${name}</h2>
        <p class="card-text text-center">
        ${stats[0].stat.name}: ${stats[0].base_stat} | 
        ${stats[1].stat.name}: ${stats[1].base_stat} | 
        type: ${types[0].type.name}
        </p>
        <a href="#" class="btn btn-primary">Choose Pokemon</a>
        </div>
        </div>
        </div>
        
        `
    })
    pokemonEnemySection.innerHTML = pokemonEntries;
}
// ------------------
pikachuPickFriendly.addEventListener('click', function(){
    pikachuPokemon = new Pokemon('Pikachu', 24);
    pokemonPick = pikachuPokemon;
    pokemonFriendlyHealth = pokemonPick.health;
    pickOne.textContent = pokemonPick.name + ' level: ' + pokemonPick.level + ' attack: ' + pokemonPick.attack + ' health: ' + pokemonFriendlyHealth;
    pickOne.value = pokemonPick.name;
    pokemonFriendly = pokemonPick;
    console.log(pickOne.value)
    console.log(pikachuPokemon);
})
geodudePickFriendly.addEventListener('click', function(){
    geodudePokemon = new Pokemon('Geodude', 28);
    pokemonPick = geodudePokemon;
    pokemonFriendlyHealth = pokemonPick.health;
    pickOne.textContent = pokemonPick.name + ' level: ' + pokemonPick.level + ' attack: ' + pokemonPick.attack + ' health: ' + pokemonFriendlyHealth;
    pickOne.value = pokemonPick.name;
    pokemonFriendly = pokemonPick;
    console.log(pickOne.value)
    console.log(geodudePokemon);
})
mewtwoPickFriendly.addEventListener('click', function(){
    mewtwoPokemon = new Pokemon('MewTwo', 84);
    pokemonPick = mewtwoPokemon;
    pokemonFriendlyHealth = pokemonPick.health;
    pickOne.textContent = pokemonPick.name + ' level: ' + pokemonPick.level + ' attack: ' + pokemonPick.attack + ' health: ' + pokemonFriendlyHealth;
    pickOne.value = pokemonPick.name;
    pokemonFriendly = pokemonPick;
    console.log(pickOne.value)
    console.log(mewtwoPokemon);
})

// Enemy

pikachuPickEnemy.addEventListener('click', function(){
    pikachuPokemon = new Pokemon('Pikachu', 100);
    pokemonPick = pikachuPokemon;
    pokemonEnemyHealth = pokemonPick.health;
    pickTwo.textContent = pokemonPick.name + ' level: ' + pokemonPick.level + ' attack: ' + pokemonPick.attack + ' health: ' + pokemonEnemyHealth;
    pickTwo.value = pokemonPick.name;
    pokemonEnemy = pokemonPick;
    console.log(pickTwo.value)
    console.log(pikachuPokemon);
})
geodudePickEnemy.addEventListener('click', function(){
    geodudePokemon = new Pokemon('Geodude', 100);
    pokemonPick = geodudePokemon;
    pokemonEnemyHealth = pokemonPick.health;
    pickTwo.textContent = pokemonPick.name + ' level: ' + pokemonPick.level + ' attack: ' + pokemonPick.attack + ' health: ' + pokemonEnemyHealth;
    pickTwo.value = pokemonPick.name;
    pokemonEnemy = pokemonPick;
    console.log(pickTwo.value)
    console.log(geodudePokemon);
})
mewtwoPickEnemy.addEventListener('click', function(){
    mewtwoPokemon = new Pokemon('MewTwo', 100);
    pokemonPick = mewtwoPokemon;
    pokemonEnemyHealth = pokemonPick.health;
    pickTwo.textContent = pokemonPick.name + ' level: ' + pokemonPick.level + ' attack: ' + pokemonPick.attack + ' health: ' + pokemonEnemyHealth;
    pickTwo.value = pokemonPick.name;
    pokemonEnemy = pokemonPick;
    console.log(pickTwo.value)
    console.log(mewtwoPokemon);
})

function Pokemon(name, level){
    this.name = name;
    this.level = Math.floor(Math.random() * level);
    this.health = this.level * 2;
    this.attack = this.level;
    
    this.tackle = function(target){
        battleLog.textContent = this.name + ' has tackled ' + target.name;
        target.health = target.health - Math.floor(Math.random() * this.attack);
        battleSection.appendChild(newBattleAttack);
        newBattleAttack.textContent = this.name + ' has inflicted ' + this.attack + ' damage.';
        battleSection.appendChild(newBattleHealth);
        newBattleHealth.textContent = target.name + ' has remaining ' + target.health + ' HP';
        console.log(this.name + ' '+ this.health);
        console.log(target.name + ' ' + target.health);
        if(target.health <= 0 ){
            target.faint();
            battleSection.removeChild(newBattleHealth);
            battleSection.appendChild(newBattleResult);
            alert(newBattleResult.textContent = this.name + ' has won!');
            battleSection.innerHTML = '';
        }
    };
    
    this.faint = function(name){
        battleSection.appendChild(isFainted);
        isFainted.textContent = this.name + ' has fainted!';
    }
};

startBattleButton.addEventListener('click', function(){
    
    if (pokemonFriendly !== undefined && pokemonEnemy !== undefined){
        if(isPokemonFriendlyTurn){
            pokemonFriendly.tackle(pokemonEnemy);
        } else {
            pokemonEnemy.tackle(pokemonFriendly);
        }
        isPokemonFriendlyTurn = !isPokemonFriendlyTurn;
    } else {
        alert('Please choose your pokemons!');
    }
    
});