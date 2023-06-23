/* You attack the first alien ship
If the ship survives, it attacks you
If you survive, you attack the ship again
If it survives, it attacks you again ... etc
If you destroy the ship, you have the option to attack the next ship or to retreat
If you retreat, the game is over, perhaps leaving the game open for further developments or options
You win the game if you destroy all of the aliens
 You lose the game if you are destroyed */
 
 
 // create a function for playerOne

let player = {
    name: "hero001",
    health: 50,
    firepower: 5,
    accuracy: .7,
    turnToAttack: true, 
};

// global function 
  const getRandom = (start,end) => {
    let randomNum = Math.floor(Math.random() * (end - start) + start)
    return randomNum

}
// create a function for all aliens

let alien1 = {
    name: "a001",
    health: getRandom(3,6),
    firepower: getRandom(2,4),
    turnToAttack: false,
    image: 'https://i.gifer.com/5SBm.gif' 
}
let alien2 = {
    name: "a002",
    health: getRandom(3,6),
    firepower: getRandom(2,4),
    turnToAttack: false,

    image: 'https://66.media.tumblr.com/5c56bf25fafc43d473d73cb4da4a35fe/tumblr_mfi0zq4lkO1rfjowdo1_500.gif'
}
let alien3 = {
    name: "a003",
    health: getRandom(3,6),
    firepower: getRandom(2,4),
    turnToAttack: false,
    
    image: 'https://pngset.com/images/starcraft-game-spaceship-aircraft-vehicle-transparent-png-2433908.png'
}
let alien4 = {
    name: "a004",
    health: getRandom(3,6),
    firepower: getRandom(2,4),
    turnToAttack: false,
    image: 'https://i.pinimg.com/originals/66/56/3b/66563b595558f39dbe143d379a43a480.gif'
}
let alien5 = {
    name: "a005",
    health: getRandom(3,6),
    firepower: getRandom(2,4),
    turnToAttack: false,
    image: 'https://cdna.artstation.com/p/assets/images/images/035/324/544/original/dahlia-b-ccp2.gif?1614684784'
}
let alien6 = {
    name: "a006",
    health: getRandom(3,6),
    firepower: getRandom(2,4),
    turnToAttack: false,
    image: 'https://pixeljoint.com/files/icons/full/skullshipanimfinal.gif'
}



let aliensArray = [alien1, alien2, alien3, alien4, alien5, alien6]
let counter = 0
let currentAlien = aliensArray[counter] 
console.log(currentAlien,":currentAlien")

console.log(counter,":Counter")

console.log("Current life:", currentAlien)


// the palyer attacks first:

const playerAttacks = () => {
  console.log("player attacks first the alien1"); 
 let power = player.firepower;
 let currentLife = currentAlien.health
  let attack = (currentLife -= power);
  player.hero001 = attack;
  console.log(`${player.name} attack ${currentAlien.name} with power of ${power}`);
  console.log(`${currentAlien.name} health now is ${attack}`);
};
  


  //If you destroy the firts alien, you can attack the next alien 
const switchAliens = () => {
    console.log("ALIENs SWITCHED");
    let enemy = document.querySelector(".playerTwo");
    let newEnemy = document.createElement("img");
    newEnemy.setAttribute("src", allAliens[counter]);
    newEnemy.setAttribute("class", "playerTwo");
    enemy.replaceWith(newEnemy);
  };

  // If the alien still alive he will attack you

const determineHealthPlayer = () => {
    console.log(player.health);
    if (player.health <= 0) {
     console.log("the alien killed you...GAME OVER")
    } else {
        console.log("the alien missed you. you survive")
      startRound(currentAlien)
    }
  };

  //  determineAlienLife();
const determineLifeAlien = () => {
    console.log(currentAlien.health);
    if (currentAlien.health <= 0) {
      switchAliens();
      counter++
      currentAlien = allAliens[counter]
      console.log("Current life:", currentAlien)
     
  
    } else {
      alien2Attack()
     
    }
}

// ALien1 attacks back 
const alienAttacks = () => {
    console.log("alien is still alive he is attacking you....")
  let power = currentAlien.firepower;
  let alienAttack = (player.health-=currentAlien.firepower);
  player.health = alienAttack;
  console.log(`${player.name} hit you ${currentAlien.name} with power of ${power}`
  );
  console.log(`${player.name} your health now is ${alienAttack}`);
};








