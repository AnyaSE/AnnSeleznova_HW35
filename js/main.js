function sortArray () {
    const numberArray = document.getElementById("number__input").value.split(",").map(Number);

    const selectedOption = document.querySelector('input[name="sortingOrder"]:checked').value;

    if (selectedOption === "accending") {
        console.log(numberArray.sort((a,b) => a - b));
    } else {
        console.log(numberArray.sort((a,b) => b - a));
    }
}

function handleSubmit () {
    const form = document.querySelector('form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        sortArray();
        form.reset();
    } )

}

handleSubmit();