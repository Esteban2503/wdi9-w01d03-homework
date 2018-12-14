// Easy Going
//for(let i = 1; i < 20; i++){
  //  console.log([i])
//}
//"Commit 1- Easy Going"

// Get Even

//for(let i = 0; i < 200; i++){
  //  if(i % 2 == 0 ){
    //    console.log([i])
    //}
//}
//"Commit 2- Get Even answered"


// Excited Kitten
const say = ["human..why you taking pictures of me?", "The cat nip made me do it", "..why does the red dot always get away.."]
 
for(let i = 0; i < 21; i++){
    console.log("Love me, pet me! HSSSSSS!")
    if(i % 2 == 0){
        const randomNumberUpToThree = Math.floor(Math.random()* 3)
        console.log(say[randomNumberUpToThree]);
          
            
    } 
}
    
    

// Fizz Buzz

for(let i = 0; i <= 100; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz");
    } else if(i % 3 === 0){
        console.log("Fizz");
    }
    else if(i % 5 ===0){
    console.log("Buzz");
    }
    else {
        console.log(i);
    }
} 


// Getting to Know you

const shahzad = ["Shahzad", 1000, "Austin"];
const jim = ["Jim", 16, "All cities"];
const reuben = ["Reuben", 22, "Durham"];
const daniel = ["Daniel", 186, "Dallas"];
const ryan = ["Ryan", 65, "Denver"];

shahzad.splice(0, 1, 'Gameboy');
console.log(shahzad);
daniel[1] += 1;
console.log(daniel);
ryan.splice(2,1,"gotham city");
console.log(ryan);
reuben.pop();
reuben.push("Chicago");
console.log(reuben);
jim.pop("All cities");
jim.push("Atlanta","Miami","Philadelphia");
console.log(jim);
jim.splice(1, 1,jim);
console.log(jim);

//Commit 5 - Geting to Know you answered

// Yell at the Ninja Turtles

const myNinjas = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo']

for(let i = 0; i < myNinjas.length; i ++){
    console.log(myNinjas[i].toUpperCase());
}

// Commit 6 - Yell at the Ninja Turtles ansewred"

// Return of the Closets

const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "GA hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];

  // 1
  kristynsShoe = kristynsCloset[0];
console.log(kristynsCloset[0]);

thomsCloset[2].push(kristynsShoe);
console.log(thomsCloset);

// Modify your code to put together 3 separate outfits for Kristyn and Thom. Put the output in a sentence to tell us what we'll be wearing. Mix and match!

for (let i = 0; i <= 2; i++) {
    kristynOutfit = Math.floor((Math.random() * (kristynsCloset.length)));
console.log("Kristyn's outfits are: " + kristynsCloset[kristynOutfit] + " " + "and" + " " + kristynsCloset[kristynOutfit]);
}

// Dirty Laundry

// 1 Time to do laundry - loop through Kristyn's closet and log the sentence "WHIRR: Now washing (item)" for each item in the array.

for(let i = 0; i < kristynsCloset.length; i++){
    console.log("WHIRR: Now Washing " + kristynsCloset[i]);
}

//Thom wants to do inventory on his closet. Using bracket notation, log the arrays containing all of Thom's shirts, pants, and accessories.

console.log(thomsCloset[0]);
console.log(thomsCloset[1]);
console.log(thomsCloset[2]);

// "COMMIT 8 - I loops through their closets".

// Multiples of 3 and 5

let sum = 0;
for (let i = 0; i < 1000; i++) {
  if (i % 3 === 0) {
  sum = sum + i
  console.log(sum);
}
  if (i % 5 === 0) {
      sum = sum + i
    console.log(sum);
  }
}

// "Commit 9 - Project Euler Problem 1 answered"