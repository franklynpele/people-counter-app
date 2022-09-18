let countNu = document.getElementById("count-nu");
console.log("countNu");

let count = 0;

function increment() {
  count += 1;
  countNu.textContent = count;
  console.log(count);
}

function save() {
  console.log(count);
}

let saveEl = document.getElementById("save-el")
console.log("save-el")   

function save() {
  let countStr = count + " - "
  saveEl.textContent += countStr
  countNu.textContent = 0
  count = 0
}

// let firstBatch = 10
// let secondBatch = 8

// let count = firstBatch + secondBatch
// console.log(count)

// let myAge = 22
// let HumandogRatio = 7
// let myDogAge = myAge * HumandogRatio
// console.log (myDogAge)

// let bonusPoints = 50
// console.log(bonusPoints)

// bonusPoints = bonusPoints + 50
// console.log(bonusPoints)

// bonusPoints = bonusPoints - 75
// console.log(bonusPoints)

// bonusPoints = bonusPoints + 45
//  console.log(bonusPoints)

// function totalnumber() {
//     console.log(42)
// }

// totalnumber()

// let lap1 = 31
// let lap2 = 32
// let lap3 = 33

// function laptime() {
//     let totalLapTime = lap1 + lap2 + lap3
//     console.log (totalLapTime)
// }

// laptime()

// let lapsCompleted = 0
// function incrementLap() {
//     lapsCompleted = lapsCompleted + 1
//     console.log(lapsCompleted)
// }

// incrementLap()
// incrementLap()
// incrementLap()
// camelCase
// document.getElementById("count-nu").innerHTML=50




// let message = "you have three new notifications";

// let username = "frankly";

// let messageToUser = message + ", " + username + "!";
// console.log(messageToUser);

// let name = "Franklyn";
// let greeting = "hello bitch, welcome to our counting app ";

// let myGreeting = greeting + name + "!";

// console.log(myGreeting)


// let welcomeEl = document.getElementById("welcome-el")

// let name = "Franklyn"
// let greeting = "Hello, welcome back! "

// welcomeEl.innerText = greeting + name

// welcomeEl.innerText += "👋"


// grab the save-el element and store it in a variable called saveEl




// let firstName = "Franklyn"
// let lastName = "Pele"
 
// let fullName = firstName + " " +lastName

// console.log (fullName)

// let name = "bigred"
// let greeting = "Hi there, welcome to our javaScript lesson"

// function welcome() {
//   console.log( greeting + "," + name + "!" )
// }
// welcome()



// // game points 
// let myPoints = 3

// function add3Points() {
//   myPoints += 3
// }

// function remove1Point () {
//   myPoints -= 1
// }

// add3Points()
// add3Points()
// add3Points()
// remove1Point()
// remove1Point()

// console.log(myPoints)
