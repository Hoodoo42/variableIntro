let firstName = "Colleen";
let lastName = "Vereschagin";
let yearBorn = 1988;
let favouriteNumber = 14;

let isMember = true;
let userPoints = 93;

if (isMember === true && userPoints >= 90) {
  console.log("Wow! You've set a new high score!");
} else if (isMember === true && userPoints > 50) {
  console.log("CoNgRaTuLaTiOnS!");
} else if (isMember === true && userPoints <= 50) {
  console.log("Thats ok, your mom still thinks you're pretty great.");
} else if (isMember === false || userPoints < 10) {
  console.log("You don't have to go home, but you can't stay here.");
} else {
  console.log("Game Over");
}
