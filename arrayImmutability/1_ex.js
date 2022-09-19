/**
 * @param {array} apps
 * @param {string} app
 */

/*
Complete the replaceApp function such that it replaces the oldApp from apps array it receives as an argument with the newApp string it receives,
without mutating the original array.
Checkout the Sample usage's === comparison which lets you see if the operation was immutable or not.
*/
 function replaceApp(apps, oldApp, newApp) {
    return apps.map(app => {
        if(app === oldApp) {
            return newApp
        }
        return app
    })
}

// Sample usage
const apps1 = ["Calculator", "Whatsapp"];
// Replace Calculator with Phone
const newApps1 = replaceApp(apps1, "Calculator", "Phone");
console.log(newApps1);
// check if the operation was immutable
console.log(newApps1 === apps1); // immutable when it returns false

const apps2 = ["Whatsapp", "Calculator"];
// Replace Whatsapp with Maps
const newApps2 = replaceApp(apps2, "Whatsapp", "Maps");
console.log(newApps2);
// check if the operation was immutable
console.log(newApps2 === apps2); // immutable when it returns false