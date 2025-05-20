document.addEventListener('DOMContentLoaded', () => {
    // 1. Change text content dynamically
    const dynamicParagraph = document.getElementById('dynamic-paragraph');
    const changeTextButton = document.getElementById('changeTextButton');

    let isOriginalText = true;

    changeTextButton.addEventListener('click', () => {
        if (isOriginalText) {
            dynamicParagraph.textContent = "You clicked the button! This text has been updated by JavaScript.";
            changeTextButton.textContent = "Revert Text";
        } else {
            dynamicParagraph.textContent = "This text will change when you click the button below.";
            changeTextButton.textContent = "Change Paragraph Text";
        }
        isOriginalText = !isOriginalText; // Toggle the state
    });

    // 2. Modify CSS styles via JavaScript
    const styledBox = document.getElementById('styledBox');
    const toggleStyleButton = document.getElementById('toggleStyleButton');

    toggleStyleButton.addEventListener('click', () => {
        // Toggle a CSS class to change styles
        styledBox.classList.toggle('highlight');

        // You can also directly manipulate inline styles:
        // if (styledBox.style.backgroundColor === 'lightblue') {
        //     styledBox.style.backgroundColor = 'lightcoral';
        //     styledBox.style.borderColor = 'darkred';
        //     styledBox.style.color = 'white';
        // } else {
        //     styledBox.style.backgroundColor = 'lightblue';
        //     styledBox.style.borderColor = 'steelblue';
        //     styledBox.style.color = '#333';
        // }
    });

    // 3. Add or remove an element when a button is clicked
    const elementContainer = document.getElementById('elementContainer');
    const addElementButton = document.getElementById('addElementButton');
    const removeLastElementButton = document.getElementById('removeLastElementButton');

    let itemCount = 0;

    addElementButton.addEventListener('click', () => {
        itemCount++;
        // Create a new div element
        const newItem = document.createElement('div');
        newItem.classList.add('added-item'); // Add a class for styling
        newItem.id = `item-${itemCount}`; // Give it a unique ID

        // Add content to the new element
        newItem.innerHTML = `
            <span>New Item ${itemCount}</span>
            <button class="remove-this-item-button">Remove This</button>
        `;

        // Append the new element to the container
        elementContainer.appendChild(newItem);

        // Add event listener to the newly created "Remove This" button
        const removeThisItemButton = newItem.querySelector('.remove-this-item-button');
        removeThisItemButton.addEventListener('click', () => {
            newItem.remove(); // Remove the parent div (the item itself)
            console.log(`Item ${newItem.id} removed.`);
        });
    });

    removeLastElementButton.addEventListener('click', () => {
        const lastChild = elementContainer.lastElementChild; // Get the last child element
        if (lastChild) {
            elementContainer.removeChild(lastChild); // Remove it from the container
            console.log('Last item removed.');
            itemCount--; // Decrement count if an item was removed
        } else {
            alert('No items to remove!');
        }
    });

    // Optional: Dynamic content for the header slogan
    const headerSlogan = document.getElementById('header-slogan');
    setTimeout(() => {
        headerSlogan.textContent = "Experience the power of JavaScript!";
    }, 2000); // Change slogan after 2 seconds
});
