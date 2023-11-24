let pokemonBattle = {

    attacks:  function(name, level) {
        this.name = name;
        this.level = level;
        this.health = level * 2;
        this.attack = level;
        this.ability = [
            this.tackle = function tackle(target) {
                let attack = level;
                target.health = target.health - attack;
                console.log(name + ' has Tackled ' + target.name);
                console.log(target.name + ' lost ' + attack + ' HP');
                console.log('Remaining health for ' + target.name + ' is ' + target.health);
                if (target.health <= 0 && target.health >= -99){
                    console.log(target.name + ' has fainted.');
                    console.log('STOP IT IS ALREADY DEAD!')
                } else if (target.health <= -100){
                    console.log("I HOPE YOU'RE PROUD OF YOURSELF. PSYCHO!");
                };
            },
            this.slash = function slash(target) {
                let attack = Math.floor(Math.random() * level);
                target.health = target.health - attack;
                console.log(name + ' has Slashed ' + target.name);
                console.log(target.name + ' lost ' + attack + ' HP')
                console.log('Remaining health for ' + target.name + ' is ' + target.health);;
                if (target.health <= 0 && target.health >= -99){
                    console.log(target.name + ' has fainted.');
                    console.log('STOP IT IS ALREADY DEAD!')
                } else if (target.health <= -100){
                    console.log("I HOPE YOU'RE PROUD OF YOURSELF. PSYCHO!");
                };
            },
            this.hyperBeam = function hyperBeam(target) {
                let attack = Math.floor(Math.random() * level);
                target.health = target.health - attack;
                console.log(name + ' used Hyper Beam on ' + target.name);
                console.log(target.name + ' lost ' + attack+ ' HP');
                console.log('Remaining health for ' + target.name + ' is ' + target.health);
                if (target.health <= 0 && target.health >= -99){
                    console.log(target.name + ' has fainted.');
                    console.log('STOP IT IS ALREADY DEAD!')
                } else if (target.health <= -100){
                    console.log("I HOPE YOU'RE PROUD OF YOURSELF. PSYCHO!");
                };
            },
            this.bodySlam = function bodySlam(target) {
                let attack = Math.floor(Math.random() * level);
                console.log(name + ' used Body Slam on ' + target.name);
                target.health = target.health - attack;
                console.log(target.name + ' lost ' + attack + ' HP');
                console.log('Remaining health for ' + target.name + ' is ' + target.health);
                if (target.health <= 0 && target.health >= -99){
                    console.log(target.name + ' has fainted.');
                    console.log('STOP IT IS ALREADY DEAD!')
                } else if (target.health <= -100){
                    console.log("I HOPE YOU'RE PROUD OF YOURSELF. PSYCHO!");
                };
            },
            this.doubleEdge = function doubleEdge(target) {
                let attack = Math.floor(Math.random() * level);
                target.health = target.health - attack;
                console.log(name + ' used Double-Edge on ' + target.name);
                console.log(target.name + ' lost ' + attack + ' HP');
                console.log('Remaining health for ' + target.name + ' is ' + target.health);
                if (target.health <= 0 && target.health >= -99){
                    console.log(target.name + ' has fainted.');
                    console.log('STOP IT IS ALREADY DEAD!')
                } else if (target.health <= -100){
                    console.log("I HOPE YOU'RE PROUD OF YOURSELF. PSYCHO!");
                };
            }
        ];
    }
};

let pokemonRecords = {
    name: [],
    level: []
};

// let pikachu = new pokemonBattle.attacks('Pikachu', 10);
// console.log(pikachu);
// let geodude = new pokemonBattle.attacks('Geodude', 15);
// console.log(geodude);

alert('Welcome to my simple pokemon battle sims. I will still keep updating this program for practice.');
alert('Please open console log window to see the battles.')

let randomAttack = pokemonBattle.attacks();
let randomAbility = pokemonBattle.ability;
const randomValue = [Math.floor(randomAbility.length * Math.random())]

let newFriendlyPokemon = prompt('Enter new friendly Pokemon name:');
let newFriendlyPokemonLevel = Number(prompt('Enter new friendly Pokemon level:'));
let newEnemyPokemon = prompt('Enter new enemy Pokemon name');
let newEnemyPokemonLevel = Number(prompt('Enter new enemy Pokemon level:'));

pokemonRecords.name.push(newFriendlyPokemon);
// console.log(pokemonRecords.name);
pokemonRecords.name.push(newEnemyPokemon);
// console.log(pokemonRecords.name);
pokemonRecords.level.push(newFriendlyPokemonLevel);
// console.log(pokemonRecords.level);
pokemonRecords.level.push(newEnemyPokemonLevel);
// console.log(pokemonRecords.level);

let friendlyPokemon = new pokemonBattle.attacks(newFriendlyPokemon, newFriendlyPokemonLevel);
let enemyPokemon = new pokemonBattle.attacks(newEnemyPokemon, newEnemyPokemonLevel);


// Initialize battle

friendlyPokemon.ability[randomValue](enemyPokemon);
console.warn('use friendlyPokemon.ability[randomValue](enemyPokemon) to continue battle');