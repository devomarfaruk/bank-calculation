function valueFromInput(id) {
    const inputField = document.getElementById(id);
    const inputFieldDataString = inputField.value;
    const inputFieldData = parseFloat(inputFieldDataString);
    return (inputFieldData)
}
function getTextFromId(textId) {
    const inputField = document.getElementById(textId);
    const inputFieldDataString = inputField.innerText;
    const inputFieldData = parseFloat(inputFieldDataString);
    return (inputFieldData)
}