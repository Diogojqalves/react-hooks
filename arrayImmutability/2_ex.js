/**
 * @param {array} apps
 * @param {string} app
 */

/*
Complete the removeApp function such that it removes the appToRemove from apps array it receives as an argument, ~
without mutating the original array.
Checkout the Sample usage's === comparison which lets you see if the operation was immutable or not.
*/

 function removeApp(apps, appToRemove) {
    return apps.filter(app => app !== appToRemove)
}

// Sample usage
const apps1 = ["Calculator", "Phone"];
// Remove Calculator
const newApps1 = removeApp(apps1, "Calculator");
console.log(newApps1);
// check if the operation was immutable
console.log(newApps1 === apps1); // immutable when it returns false

const apps2 = ["Whatsapp", "Maps", "Calculator"];
// Remove Maps
const newApps2 = removeApp(apps2, "Maps");
console.log(newApps2);
// check if the operation was immutable
console.log(newApps2 === apps2); // immutable when it returns false