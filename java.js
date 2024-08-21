function countFlavors() {
    // Getting the input string
    const input = document.getElementById('flavorInput').value;

    // Split the input string into an array of strings
    const flavorsArray = input.split(',').map(flavor => flavor.trim().toLowerCase());

    // Initialize an object to keep count of each flavor
    const flavorCount = {};

    // Looping through the array of flavors
    flavorsArray.forEach(flavor => {
        if (flavorCount[flavor]) {
            flavorCount[flavor]++;
        } else {
            flavorCount[flavor] = 1;
        }
    });

    // Displaying result on html page using stringify
    document.getElementById('result').textContent = JSON.stringify(flavorCount, null, 2);
}