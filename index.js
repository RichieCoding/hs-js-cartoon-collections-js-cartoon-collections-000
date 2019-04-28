function dwarfRollCall(dwarves) {
  let string = '';
  for (let i = 0; i < dwarves.length; i ++) {
    string += `${i + 1}. ${dwarves[i]} `;
  } 
  return string;
}

function summonCaptainPlanet(planeteerCalls){
  let arr = [];
  for (let i = 0; i < planeteerCalls.length; i++) {
    arr.push(planeteerCalls[i].toUpperCase() + '!');
  }
  return arr;
}

function longPlaneteerCalls(words) {
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > 4) {
      return true;
    } else {
      return false;
    }
  }
}

function findTheCheese(foods) {
 for (let i = 0; i < foods.length; i++) {
   if (foods[i] === 'cheddar' || foods[i] === 'gouda' || foods[i]=== 'camembert') {
     return foods[i];
   } 
 }
 return 'no cheese!';
}