$(document).ready(onReady);

let currentCount = 0;

function onReady(){
    console.log('You are ready to code more! 😎');
    createGenerateButton();
    $('#generate-button').on('click', '#submit', generateBoxes);
    $('#colors-container').on('click', '.delete', deleteBox);
    $('#colors-container').on('click', '.yellow', changeBackground)
}

// STEP ONE: create 'Generate' button
function createGenerateButton(){
    $('#generate-button').append('<button id="submit" class="buttons">Generate 👾</button>');
}

// STEP TWO: append a '<div>' element when 'Generate" button is clicked: 
function generateBoxes() {
    // STEP THREE: increment the count of blocks each time 'Generate' is clicked
    currentCount++;
    $('#colors-container').append(
        `<div class="new-div">
            <p>${currentCount}</p>
            <button class="yellow buttons">${'YELLOW ⭐️'}</button>
            <button class="delete buttons">${'DELETE ❌'}</button>
        </div>`);
}

// STEP FOUR: be able to delete the parent (entire box) of the selected DELETE button:
function deleteBox() {
    $(this).parent().remove();
}

// STEP FIVE: pressing "YELLOW" button should change the parent (entire box) background to yellow:
function changeBackground() {
    $(this).parent().toggleClass('yellow-background');
}