var originalFlavors = ["Banana Nut Fudge",
    "Black Walnut",
    "Burgundy Cherry",
   "Butterscotch Ribbon",
    "Cherry Macaron",
    "Chocolate",
    "Chocolate Almond",
    "Chocolate Chip",
    "Chocolate Fudge",
    "Chocolate Mint",
    "Chocolate Ribbon",
    "Coffee",
    "Coffee Candy",
    "Date Nut",
    "Eggnog",
    "French Vanilla",
    "Green Mint Stick",
    "Lemon Crisp",
    "Lemon Custard",
    "Lemon Sherbet",
    "Maple Nut",
    "Orange Sherbet",
    "Peach",
    "Peppermint Fudge Ribbon",
    "Peppermint Stick",
    "Pineapple Sherbet",
    "Raspberry Sherbet",
    "Rocky Road",
    "Strawberry",
    "Vanilla",
    "Vanilla Burnt Almond"]

/* We're going to run Task 6 at the top so we can use a copy of originalFlavors for task 7 */

    function copy(arrayToCopy, duplicate){

        for (i = 0; i < arrayToCopy.length; i++) {
            duplicate.push (arrayToCopy[i]);
        };
        return duplicate;
    }
    
    console.log ("Task 6 showing an array being copied");
    console.log ("The current originalFlavors depending on which of above has been run");
    console.log (originalFlavors);
    console.log ("And the duplicate")
    let duplicateFlavors = [];
    console.log (copy (originalFlavors, duplicateFlavors));


/* Task 1: Confirm that the array is exactly 31 flavors. Your function should accept:

(1) an array 

Your function should return a boolean TRUE if the length of the array is 31 and FALSE if the length of the array is NOT 31.

To save you from having to count the items above, you can assume that length of originalFlavors is 31. You may also want to test your function by creating and passing an array of a different length, to make sure it returns FALSE if length is not 31. 

i.e. is31Flavors(originalFlavors) will return TRUE.*/

function is31Flavors(flavorArray){
    if (flavorArray.length === 31) {
        return true;
    } return false;
}

console.log(is31Flavors(originalFlavors) );


/* Task 2: Corporate has come to you with an idea for a new flavor: Rainbow Sherbert! They think this will be a game changer. You need to modify the array to include this flavor. 

Your function should accept:

(1) an array 
(2) a flavor

Your function should add the flavor to the front of the array and console.log the resulting array.

For example addFlavor("Rainbow Sherbert", originalFlavors) should return ["Rainbow Sherbert", "Banana Nut Fudge",..."Vanilla Burnt Almond"] */ 

function addFlavor(flavorToAdd, flavorArray){
    flavorArray.unshift (flavorToAdd);
    return flavorArray;

}
console.log ("-----------");
console.log ("This is the modified Task 2 array: ");
console.log (addFlavor("Rainbow Sherbet", originalFlavors));

console.log("we re-test to see if we have 31 flavors and the answer is " + is31Flavors(originalFlavors) );


/* Task 3: Houston, we have a problem! There are now 32 flavors in the array! Your task is to remove an item from the end of the array. 

Your function should accept:

(1) an array 

Your function should remove a flavor from the end of the array and console.log the resulting array.

For example removeLastFlavor(originalFlavors) would return ["Rainbow Sherbert", "Banana Nut Fudge",..."Vanilla"]*/ 

function removeLastFlavor(flavorArray){
    flavorArray.pop ();
    return flavorArray;

}
removeLastFlavor (originalFlavors);
console.log ("-----------");
console.log ("Here is the array after task 3 is complete with the add in front and the removal at end ");
console.log (originalFlavors);

/* Task 4: Write a function that returns a flavor at a given index in the array.

Your function should accept:

(1) an array 
(2) an index

For example, getFlavorByIndex(originalFlavors, 2) would return "Black Walnut", assuming Rainbow Sherbert has been added successfully. */

function getFlavorByIndex(flavorArray, flavorIndexNumber){
    return (flavorArray [flavorIndexNumber]);
   

}
console.log ("-----------");
console.log("Task 4: Here are some sample results of pulling a flavor by index");

console.log(getFlavorByIndex (originalFlavors, 2));
console.log(getFlavorByIndex (originalFlavors, 29));

console.log(getFlavorByIndex (originalFlavors, 0));


/* Task 5: As corporate wants to add more and more flavors to their lineup, they've realized that they need to remove flavors based on flavor name, as opposed to just arbitrarily removing the first or last flavor. Your task is to get an index by flavor name, and remove that flavor from the array. 

Your function should accept: 

(1) an array
(2) a string (flavor)

For example, removeFlavorByName(originalFlavors, "Vanilla") would return an array with the length 30 including all of the flavors except Vanilla. 

Hint: You can use .splice() for this

*/

function removeFlavorByName(flavorArray, flavorName){
    let itemToDelete = flavorArray.findIndex(flavor => flavor === flavorName);

    // for (i= 0; i < flavorArray.length; i++)
    //     if (flavorArray(i) === "flavorName") {
    //         itemToDelete = i;
    //     } 
    flavorArray.splice (itemToDelete);
    
    return flavorArray;
}

console.log ("-----------");
console.log ("Task 5 shows the array with vanilla removed")

console.log(removeFlavorByName (originalFlavors, 'Vanilla'));


/* Task 6: With all of these changes going on, we don't want to lose track of the actual, original 31 flavors. Write a function called copy that makes a copy of the array. 

Your function should accept: 

2 arguments 1 for your new array and one for your original array

and should return a new array that is identical to the old array. You can name the new array however you'd like. */

function copy(arrayToCopy, duplicate){

    for (i = 0; i < arrayToCopy.length; i++) {
        duplicate.push (arrayToCopy[i]);
    };
    return duplicate;
}

console.log ("Task 6 showing an array being copied");
console.log ("The current originalFlavors depending on which of above has been run");
console.log (originalFlavors);
console.log ("And the duplicate")
let task6 = [];
console.log (copy (originalFlavors, task6));

/* Task 7: July 7th is "World Chocolate Day" and Baskin Robins wants to create promotional materials highlighting all of their chocolate flavors. Write a function that checks every item in the array for a given string and returns a new array called filteredArray with just these values. Rather than hardcoding "chocolate" into your function, pass a string as a parameter, and invoke with the argument "chocolate". This way you could also filter for "Vanilla", "Sherbert", etc. when those holidays roll around.

Your function should accept: 

(1) an Array
(2) a string (i.e. "chocolate")

and return a new array. 

For example, filterByWord(originalFlavors, "Chocolate") should return ["Chocolate", "Chocolate Almond",..."Chocolate Ribbon"].

DO NOT USE ADVANCED ARRAY METHODS (i.e. .filter) to solve this problem.

hint - you can use the .includes method to help you solve this */

function filterByWord(arrayToFilter, filterWord){
    let filteredArray = [];
    
    for (i = 0; i < arrayToFilter.length; i++) {
        let singleElement = [];
        singleElement = arrayToFilter [i];
        if (singleElement.includes (filterWord)) {
            filteredArray.push (arrayToFilter[i]);
        };
    };
    
    return filteredArray;
}
console.log ("testing that we truly have the original flavors here");
console.log (duplicateFlavors);

console.log ("ok now let's test the new function");
console.log ("here are the chocolates");
console.log (filterByWord (duplicateFlavors, "Chocolate"));
console.log ("here are the vanillas");

console.log (filterByWord (duplicateFlavors, "Vanilla"));
console.log ("here are the sherbets. And btw it's sherbet despite being Rainbow Sherbert in the instructions");

console.log (filterByWord (duplicateFlavors, "Sherbet"));






/* 🧁🍦🍨 STRETCH 🍨🍦🍫*/ 

/* STRETCH 1: Write a function that returns the average number of words in an array. You should be able to use this function for any array, but can test with originalFlavors.

Your function should accept: 

(1) an array

and should return the average number of words per item in the array. 

For example, getAverageWordLength(originalFlavors) should return a number between 0 and 3. */

function getAverageWordLength(/*code here*/){

    /*code here*/

}


/* STRETCH 2: Baskin Robins now offers new flavors, seasonal flavors, and even regional flavors. Write a function that will randomly select a total of 31 flavors from originalFlavors, currentFlavors, seasonalFlavors, and regionalFlavors.

Your function should accept 4 different arrays,

and should return a new array called randomFlavors with a length 31.

forExample, getRandomFlavors(originalFlavors, newFlavors, seasonalFlavors, regionalFlavors) might return ["Strawberry Cheesecake", "Eggnog,"..."Chocolate"].*/

// Data ⬇️
var newFlavors = ["Date night",
    "U.S.S Butterscotch (Stranger Things special)",
    "Honey Almond",
    "Mint Chocolate Chip",
    "Chocolate",
    "Oreo® Cookies'n Cream",
    "Chocolate Chip",
    "Pralines 'n Cream",
    "Very Berry Strawberry",
    "Chocolate Chip Cookie Dough",
    "Old Fashioned Butter Pecan",
    "Jamoca®",
    "Jamoca® Almond Fudge",
    "Reese's® Peanut Butter Cup",
    "Rocky Road",
    "Peanut Butter ’n Chocolate",
    "Gold Medal Ribbon®",
    "World Class® Chocolate",
    "Cherries Jubilee",
    "Chocolate Fudge",
    "Daiquiri Ice",
    "Rainbow Sherbet",
    "Rainbow Swirl"] 
var seasonalFlavors = ["America's Birthday Cake",
    "Baseball Nut®",
    "Blueberry Cheesecake",
    "Bourbon Street Pecan Pie",
    "Brownie Bar Mashup",
    "Cherry Cordial with Kisses",
    "Chocolate Mousse Royale",
    "French Vanilla",
    "Eggnog",
    "German Chocolate Cake",
    "Icing on the Cake",
    "Love Potion #31",
    "New York Cheesecake",
    "Nutty Coconut",
    "Peppermint",
    "Strawberry Cheesecake",
    "Rock ’n Pop Swirl",
    "Reese’s Peanut Butter Cup",
    "Trick Oreo Treat",
    "Winter White Chocolate",
    "made with Snickers®",
    "made with M&M's®",
    "Heath®",
    "Mango Tango",]
var regionalFlavors = ["Pink Bubblegum",
    "Caramel Macchiato",
    "York Peppermint Pattie",
    "Cotton Candy",
    "Orange Sherbet",
    "Grape Ice",
    "Watermelon Ice",
    "Miami Vice Sorbet",
    "Splish Splash®",
    "Wild 'n Reckless Sherbet",
    "Lemon Custard",
    "Oregon Blackberry",
    "Bananas ‘n Strawberries",
    "Mississippi Mud",
    "Rum Raisin",
    "Creole Cream Cheese",
    "Chocolate Almond",
    "Fudge Brownie",
    "Banana Nut",
    "Black Walnut",
    "Cotton Candy Crackle",
    "Quarterback Crunch",
    "Chocolate Chocolate Chip Cheesecake",
    "Caramel 'n' Cookies"]

function getRandomFlavors(/*code here*/){

    /*code here*/

}
