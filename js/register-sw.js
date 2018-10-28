/*all service worker code credit to Alexandro Perez https://alexandroperez.github.io/mws-walkthrough*/

if (navigator.serviceWorker) {
    navigator.serviceWorker.register("/sw.js").then(function (reg) {
        console.log("SW has been registered!");
    }).catch((e) => {
        console.log("Couldn't register SW \n", e);
    });
}