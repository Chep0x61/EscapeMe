function destPicker(state, landscape) {
    let destinations = ["gardenRhapsody", "goldenGateBridge", "himalaya", "icelandWaterfall", "kilimanjaro", "magdalenefjorden", "stMichaelsMount", "vietnamWaterfall"];
    let redirect = destinations[Math.floor(Math.random()*destinations.length)];

    while (redirect == landscape) {
        redirect = destinations[Math.floor(Math.random()*destinations.length)];
    }
    if (state == 0)
        location.href = "../routes/destinations/" + redirect + ".html";
    if (state == 1)
        location.href = redirect + ".html";
}

function mainMenu() {
    location.href = "../index.html";
}