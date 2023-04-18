$(document).ready(onReady);

let currentCount = 0;

function onReady(){
    console.log('You are ready to code more! 😎');
    createGenerateButton();
    $('#generate-button').on('click', '#submit', generateDivElements);
    $('#colors-container').on('click', '.delete', deleteDiv);
    $('#colors-container').on('click', '.yellow', changeBackground)
}

/* <div id="generate-button"></div> */
// STEP ONE: create 'Generate' button
function createGenerateButton(){
    $('#generate-button').append('<button id="submit" class="buttons">Generate 👾</button>');
}

// STEP TWO: append a '<div>' element when 'Generate" button is clicked: 
/* <div id="colors-container"></div> */
function generateDivElements() {
    // STEP THREE: increment the count of blocks each time 'Generate' is clicked, 
    // add a <p> element to the <div>s
    currentCount++;
    $('#colors-container').append(
        `<div class="new-div">
            <p>${currentCount}</p>
            <button class="yellow buttons">${'YELLOW ⭐️'}</button>
            <button class="delete buttons">${'DELETE ❌'}</button>
        </div>`);
}

function deleteDiv() {
    $(this).parent().remove();
}

function changeBackground() {
    $(this).parent().toggleClass('yellow-background');
}



// Follow the steps below to complete the code challenge:

// 1. Create a `<button>` element on the DOM, you may do this in jQuery, 
    // or write it directly in the HTML code. Have the button text read "Generate". 
// 2. Using jQuery, append a `<div>` element when you click the button. 
    // It should append a new div each time you click the button.
// 3. Inside the `<div>` element you created in the previous step, 
    // create a `<p>` element that shows how many times you have clicked the 
    // "Generate" button from the first step. It should reflect the count for that 
    // step - the first div you made should be 1, the second 2, etc. 
    // (You can use the same append from the previous step)
// 4. Inside the `<div>` element created in step two, append two `<button>` 
        // elements with text of "Yellow" & "Delete". (You can use the same append from the previous step)
// 5. In a CSS file, any `<div>` created using the "Generate" button should 
    // start with red as it's `background-color`.
// 6. Clicking a "Yellow" `<button>` should change its parent `background-color` from red to yellow.
// 7. Clicking a "Delete" `<button>` should remove its parent `<div>` and 
    // that `<div>s` children (including the clicked on "Delete" button). 