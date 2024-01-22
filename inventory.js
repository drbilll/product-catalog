// Create an array to hold the inventory
let product = [];
let newItem = 0;

let maxItem = 5;
let checkMaxItems = 0;

// Loop to input inventory & check the max size of the array
while (true) {
    // Ask the user to add an item to the array
    newItem = prompt('Input Name, Model, Cost, Quantity (separated by comma) or type "exit" to finish:');

    // Check if the user wants to exit the loop
    if (newItem.toLowerCase() === 'exit') {
        break;
    }

    // Add the item to the array
    product[checkMaxItems] = newItem.split(',');
    checkMaxItems++;

    if (checkMaxItems === maxItem) {
        alert(`You've already input max allowed ${maxItem} number of items`);
        
        break;
    }
}

// Display the content of the inventory using an alert
let inventoryContent = 'Inventory List:\n';
for (let counter = 0; counter < product.length; counter++) {
    inventoryContent += `(Product ${counter+1}). \nName: ${product[counter][0]}\nModel: ${product[counter][1]}\nCost: ${product[counter][2]}\nQuantity: ${product[counter][3]}\n\n`;
}

alert(inventoryContent);

function displayResult() {
    return inventoryContent;
}

