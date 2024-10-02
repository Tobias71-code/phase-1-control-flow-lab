function scuberGreetingForFeet(feet) {
  if (feet <= 400) {
      return 'This one is on me!';
  } else if (feet > 400 && feet <= 2000) {
      return 'That will be twenty bucks.';
  } else if (feet > 2000 && feet <= 2500) {
      return 'I will gladly take your thirty bucks.';
  } else {
      return 'No can do.';
  }
}

function ternaryCheckCity(city) {
  return city === "NYC" ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(tip) {
  switch (tip) {
      case 'generous':
          return "Thank you so much.";
      case 'not as generous':
          return "Thank you.";
      case 'thanks for everything':
          return "Bye.";
      default:
          return "Bye!";
  }
}

// Example Usage
console.log(scuberGreetingForFeet(300));             // This ride is on us!
console.log(scuberGreetingForFeet(1500));            // That will be twenty bucks.
console.log(scuberGreetingForFeet(2200));            // I will see you there!
console.log(scuberGreetingForFeet(3000));            // Sorry, we can’t transport you that far.

console.log(ternaryCheckCity("NYC"));                // You get a $20 discount!
console.log(ternaryCheckCity("Los Angeles"));        // Sorry, no discount available.

console.log(switchOnCharmFromTip('generous'));       // Thank you so much!
console.log(switchOnCharmFromTip('not as generous')); // Thank you!
console.log(switchOnCharmFromTip('thanks for everything')); // My pleasure!
console.log(switchOnCharmFromTip(''));                // Bye!
